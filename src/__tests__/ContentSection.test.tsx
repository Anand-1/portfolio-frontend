import { render, screen } from '@testing-library/react';
import ContentSection from '@/components/ContentSection/ContentSection';

describe('ContentSection Component', () => {
  it('renders the about heading and description', () => {
    render(<ContentSection />);

    expect(screen.getByRole('heading', { name: 'About Me' })).toBeInTheDocument();
    expect(
      screen.getByText(/I'm a passionate full-stack developer with expertise in React, Next.js, and TypeScript/i)
    ).toBeInTheDocument();
  });

  it('renders its decorative illustration', () => {
    const { container } = render(<ContentSection />);

    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
