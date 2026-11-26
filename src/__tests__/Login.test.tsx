import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Login from '@/pages/login';

const mockReplace = jest.fn();
const mockSignInWithPassword = jest.fn();

jest.mock('next/router', () => ({
  useRouter: () => ({ replace: mockReplace }),
}));

jest.mock('@/lib/supabase/client', () => ({
  getSupabaseBrowserClient: () => ({
    auth: { signInWithPassword: mockSignInWithPassword },
  }),
}));

describe('Login page', () => {
  beforeEach(() => {
    mockReplace.mockReset();
    mockSignInWithPassword.mockReset();
  });

  it('signs in with Supabase and redirects after success', async () => {
    mockSignInWithPassword.mockResolvedValue({ error: null });
    render(<Login />);

    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: ' person@example.com ' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'correct horse battery staple' },
    });
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));

    await waitFor(() => {
      expect(mockSignInWithPassword).toHaveBeenCalledWith({
        email: 'person@example.com',
        password: 'correct horse battery staple',
      });
      expect(mockReplace).toHaveBeenCalledWith('/');
    });
  });

  it('shows the authentication error without redirecting', async () => {
    mockSignInWithPassword.mockResolvedValue({
      error: { message: 'Invalid login credentials' },
    });
    render(<Login />);

    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: 'person@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'wrong-password' },
    });
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));

    expect(await screen.findByRole('alert')).toHaveTextContent('Invalid login credentials');
    expect(mockReplace).not.toHaveBeenCalled();
  });
});
