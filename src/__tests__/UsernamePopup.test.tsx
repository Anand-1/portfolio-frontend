import { render, screen } from '@testing-library/react';
import UsernamePopup from '@/components/Usernamepopup/UsernamePopup';

describe('UsernamePopup', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('shows the username form when no username is saved', () => {
    render(<UsernamePopup />);

    expect(screen.getByRole('heading', { name: 'Set Username' })).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter username...')).toBeInTheDocument();
  });

  it('shows the saved username instead of the form', () => {
    localStorage.setItem('app_username', 'Taylor');

    render(<UsernamePopup />);

    expect(screen.getByRole('heading', { name: 'Welcome back, Taylor!' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Set Username' })).not.toBeInTheDocument();
  });
});
