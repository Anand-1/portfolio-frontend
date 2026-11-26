import { fireEvent, render, screen } from '@testing-library/react';
import Navigation from '@/components/Navigation/Navigation';

const mockExportUsers = jest.fn();

jest.mock('@/hooks/useExportUsers', () => ({
  useExportUsers: () => ({
    isExporting: false,
    exportMessage: '',
    exportError: false,
    exportUsers: mockExportUsers,
  }),
}));

describe('Navigation Component', () => {
  beforeEach(() => {
    mockExportUsers.mockReset();
  });

  it('renders the navigation links', () => {
    render(<Navigation />);

    expect(screen.getByRole('link', { name: /Anand Raj/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Contacts/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Try my resume Builder/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Try Games/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Agency/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /News Letter/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Export users/i })).toBeInTheDocument();
  });

  it('starts the export when the export button is clicked', () => {
    render(<Navigation />);
    fireEvent.click(screen.getByRole('button', { name: /Export users/i }));

    expect(mockExportUsers).toHaveBeenCalledTimes(1);
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
