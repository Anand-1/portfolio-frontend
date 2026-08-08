import { render, screen } from '@testing-library/react';
import ResumeBuilder from '@/app/resumebuilder/page';

describe('ResumeBuilder page', () => {
  it('renders the resume builder shell and preview title', () => {
    render(<ResumeBuilder />);

    expect(screen.getByRole('heading', { name: /Resume Builder/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Builder Studio/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Resume Preview/i })).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { name: /Professional Summary/i }).length).toBeGreaterThan(0);
  });
});
