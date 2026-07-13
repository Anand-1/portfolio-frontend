import { render, screen } from '@testing-library/react';
import React from 'react';

test('HighchartSkillsLoader renders the dynamic chart component', () => {
  jest.mock('next/dynamic', () => ({
    __esModule: true,
    default: () => () => <div>Highchart Skills Loaded</div>,
  }));

  const HighchartSkillsLoader = require('@/app/components/Charts/HIghchartTree/HighchartSkillsLoader').default;

  render(<HighchartSkillsLoader />);

  expect(screen.getByText('Highchart Skills Loaded')).toBeInTheDocument();
});
