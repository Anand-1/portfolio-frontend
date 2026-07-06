import { render, screen } from '@testing-library/react';
import SkillsCircularChart from '@/app/components/SkillsCircularChart';

describe('SkillsCircularChart', () => {
  it('renders the skill categories for the homepage chart', () => {
    render(<SkillsCircularChart />);

    expect(screen.getByText('Core Skills')).toBeInTheDocument();
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('Backend')).toBeInTheDocument();
    expect(screen.getByText('Cloud & DevOps')).toBeInTheDocument();
  });
});
