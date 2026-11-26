import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

interface UserProfile {
  id: string;
  username: string;
  created_at: string;
}

interface ApiError {
  error: string;
}

interface GetResponse {
  user?: UserProfile;
  error?: string;
}

interface PostResponse {
  message?: string;
  user?: UserProfile;
  error?: string;
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function getUsername(
  request: NextApiRequest,
  response: NextApiResponse<GetResponse | ApiError>
) {
  try {
    const queryUsername = request.query.username;
    const username = Array.isArray(queryUsername) ? queryUsername[0] : queryUsername;

    if (!username) {
      return response.status(400).json({ error: 'Username parameter is required' });
    }

    const { data, error } = await supabase
      .from('users')
      .select('id, username, created_at')
      .eq('username', username)
      .maybeSingle<UserProfile>();

    if (error) {
      return response.status(500).json({ error: error.message });
    }

    if (!data) {
      return response.status(404).json({ error: 'User not found' });
    }

    return response.status(200).json({ user: data });
  } catch {
    return response.status(500).json({ error: 'Internal Server Error' });
  }
}

async function saveUsername(
  request: NextApiRequest,
  response: NextApiResponse<PostResponse | ApiError>
) {
  try {
    const body: unknown = request.body;
    const username =
      typeof body === 'object' && body !== null && 'username' in body
        ? body.username
        : undefined;

    if (!username) {
      return response.status(400).json({ error: 'Username field is required in body' });
    }

    if (typeof username !== 'string') {
      return response.status(400).json({ error: 'Invalid request payload' });
    }

    const { data, error } = await supabase
      .from('users')
      .insert({ username: username.trim() })
      .select()
      .single<UserProfile>();

    if (error) {
      if (error.code === '23505') {
        return response.status(409).json({ error: 'Username is already taken' });
      }

      return response.status(500).json({ error: error.message });
    }

    return response.status(201).json({
      message: 'Username saved successfully!',
      user: data,
    });
  } catch {
    return response.status(400).json({ error: 'Invalid request payload' });
  }
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<GetResponse | PostResponse | ApiError>
) {
  if (request.method === 'GET') {
    return getUsername(request, response);
  }

  if (request.method === 'POST') {
    return saveUsername(request, response);
  }

  response.setHeader('Allow', ['GET', 'POST']);
  return response.status(405).json({ error: 'Method not allowed' });
}
