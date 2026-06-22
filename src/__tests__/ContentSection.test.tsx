import { render, screen } from '@testing-library/react';
import ContentSection from '@/app/components/ContentSection';

describe('ContentSection Component', () => {
  it('should render the About Me heading', () => {
    render(<ContentSection />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  it('should render the description', () => {
    render(<ContentSection />);
    expect(
      screen.getByText(
        /I'm a passionate full-stack developer with expertise in React, Next.js, and TypeScript/i
      )
    ).toBeInTheDocument();
  });

  it('should render What I Do section', () => {
    render(<ContentSection />);
    expect(screen.getByText('What I Do')).toBeInTheDocument();
    expect(
      screen.getByText(/Build responsive web applications with React & Next.js/i)
    ).toBeInTheDocument();
  });

  it('should render My Skills section', () => {
    render(<ContentSection />);
    expect(screen.getByText('My Skills')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('should render CTA button', () => {
    render(<ContentSection />);
    const ctaButton = screen.getByRole('button', { name: /Get In Touch/i });
    expect(ctaButton).toBeInTheDocument();
  });

  it('should render all skill tags', () => {
    render(<ContentSection />);
    const skills = ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Node.js', 'REST APIs', 'Git'];
    skills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });
});
