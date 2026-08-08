import { render, screen } from '@testing-library/react';
import Navigation from '@/app/navigation/page';

describe('Navigation Component', () => {
  it('renders the navigation links', () => {
    render(<Navigation />);

    expect(screen.getByRole('link', { name: /Anand Raj/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Gallery/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Contacts/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Try my resume Builder/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Try Games/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Agency/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /News Letter/i })).toBeInTheDocument();
  });

  it('renders a mobile navigation toggle affordance', () => {
    render(<Navigation />);

    expect(screen.getByRole('button', { name: /open navigation menu/i })).toBeInTheDocument();
  });

  it('renders the navigation wrapper', () => {
    render(<Navigation />);
    const nav = screen.getByRole('navigation');

    expect(nav).toBeInTheDocument();
  });
});
