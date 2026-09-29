import { render, screen } from '@testing-library/react';
import React from 'react';

jest.mock('next/dynamic', () => ({
  __esModule: true,
  default: () => () => <div>Highchart Skills Loaded</div>,
}));

import HighchartSkillsLoader from '@/app/components/Charts/HIghchartTree/HighchartSkillsLoader';

test('HighchartSkillsLoader renders the dynamic chart component', () => {
  render(<HighchartSkillsLoader />);

  expect(screen.getByText('Highchart Skills Loaded')).toBeInTheDocument();
});
