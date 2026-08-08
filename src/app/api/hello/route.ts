import { NextResponse, NextRequest } from 'next/server';
import { createClient, PostgrestError } from '@supabase/supabase-js';

// 1. Initialize the Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Define type structures for our data models
interface UserProfile {
  id: string;
  username: string;
  created_at: string;
}

interface RequestBody {
  username?: string;
}

/**
 * GET Request: Fetches a username from the Supabase database
 * Endpoint: /api/user?username=alice123
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username');

    if (!username) {
      return NextResponse.json({ error: "Username parameter is required" }, { status: 400 });
    }

    // Query Supabase for the explicit UserProfile shape
    const { data, error } = await supabase
      .from('users')
      .select('id, username, created_at')
      .eq('username', username)
      .maybeSingle<UserProfile>();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!data) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user: data });

  } catch (err) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

/**
 * POST Request: Receives a username payload and saves it to Supabase
 * Endpoint: /api/user
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: RequestBody = await request.json();
    const { username } = body;

    if (!username) {
      return NextResponse.json({ error: "Username field is required in body" }, { status: 400 });
    }

    const sanitizedUsername = username.trim();

    const { data, error } = await supabase
      .from('users')
      .insert({ 'username': sanitizedUsername })
      .select()
      .single<UserProfile>();

    // 3. Handle database response errors
    if (error) {
      // Catch duplicate username constraint violation (PostgREST code 23505)
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "Username is already taken" },
          { status: 409 }
        );
      }
      return NextResponse.json(
        { error: error.message }, 
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      message: "Username saved successfully!", 
      user: data 
    }, { status: 201 });

  } catch (err) {
    return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
  }
}
