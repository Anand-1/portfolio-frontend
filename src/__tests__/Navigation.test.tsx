import { render, screen } from '@testing-library/react';
import Navigation from '@/app/Navigation/page';

describe('Navigation Component', () => {
  it('renders the navigation links', () => {
    render(<Navigation />);

    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Gallery/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument();
  });

  it('renders the navigation wrapper', () => {
    render(<Navigation />);
    const nav = screen.getByRole('navigation');

    expect(nav).toBeInTheDocument();
  });
});
