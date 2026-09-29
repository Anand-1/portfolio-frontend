import { fireEvent, render, screen } from '@testing-library/react';
import ResumeBuilder from '@/app/resumebuilder/page';

describe('ResumeBuilder page', () => {
  it('renders the resume builder shell and preview title', () => {
    render(<ResumeBuilder />);

    expect(screen.getByRole('heading', { name: /Resume Builder/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Builder Studio/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Resume Preview/i })).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { name: /Professional Summary/i }).length).toBeGreaterThan(0);
  });

  it('updates the preview when profile, skill, and experience fields are edited', () => {
    render(<ResumeBuilder />);

    fireEvent.change(screen.getByLabelText('Full name'), { target: { value: 'Taylor Example' } });
    fireEvent.change(screen.getByLabelText('frontend skill 1'), { target: { value: 'React 19' } });
    fireEvent.change(screen.getAllByLabelText('Position')[0], { target: { value: 'Staff Engineer' } });
    fireEvent.change(screen.getAllByLabelText(/Responsibility 1/)[0], {
      target: { value: 'Led a cross-functional engineering team.' },
    });

    expect(screen.getByRole('heading', { level: 3, name: 'Taylor Example' })).toBeInTheDocument();
    expect(screen.getByText('React 19')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Staff Engineer' })).toBeInTheDocument();
    expect(screen.getAllByText('Led a cross-functional engineering team.')).toHaveLength(2);
  });

  it('opens the browser print dialog from Save as PDF', () => {
    render(<ResumeBuilder />);
    const print = jest.spyOn(window, 'print').mockImplementation(() => undefined);

    fireEvent.click(screen.getByRole('button', { name: 'Save as PDF' }));

    expect(print).toHaveBeenCalledTimes(1);
    print.mockRestore();
  });
});
