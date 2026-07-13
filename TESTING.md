# Testing Documentation

This project is configured with three testing frameworks.

## Project Features

- Sticky navigation and animated vector background
- Glassmorphism-inspired transparent button UI
- AI / ML skills surfaced in both data and chart visualizations
- Browser-safe Highcharts treegraph rendering via client-only loading
- Responsive app layout with reusable App Router components

## Application Flow

1. `app/layout.tsx` renders global layout components:
   - `AnimatedBackground`
   - `Navigation`
   - page content container
   - `ChatPortal`
2. `app/page.tsx` renders home page content:
   - circular skills overview
   - Highcharts treegraph skills visualization
   - content section and call-to-action
3. `src/data/cv.ts` provides structured portfolio data for components.
4. Reusable UI components in `src/app/components/` are validated with Jest + RTL.
5. End-to-end page flows are covered by Playwright specs under `e2e/`.

## 1. **Jest + React Testing Library (Unit Tests)**

### Setup
- Framework: Jest
- Component Testing: React Testing Library
- Configuration: `jest.config.js` and `jest.setup.js`

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Test Files Location
- Place unit tests in `src/__tests__/` directory
- Use `.test.tsx` or `.spec.tsx` extensions
- Example: `src/__tests__/Chat.test.tsx`

### Example Test
```typescript
import { render, screen } from '@testing-library/react';
import MyComponent from '@/components/MyComponent';

describe('MyComponent', () => {
  it('should render text', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
```

## 2. **Playwright (E2E Tests)**

### Setup
- Framework: Playwright
- Configuration: `playwright.config.ts`
- Browsers: Chromium, Firefox, WebKit (Desktop + Mobile viewports)

### Running Tests
```bash
# Run all E2E tests
npm run e2e

# Run with UI mode (interactive)
npm run e2e:ui

# Run in debug mode
npm run e2e:debug
```

### Test Files Location
- Place E2E tests in `e2e/` directory
- Use `.spec.ts` extension
- Example: `e2e/chat.spec.ts`

### Example Test
```typescript
import { test, expect } from '@playwright/test';

test('should display welcome text', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('Welcome');
});
```

### Viewing Test Reports
After running tests, open the HTML report:
```bash
npx playwright show-report
```

## 3. **React Testing Library (RTL)**

### Used In
- Jest tests for component testing
- Imported via `@testing-library/react`
- Setup in `jest.setup.js`

### Common Methods
- `render()` - Render a component
- `screen.getByText()` - Query by text
- `screen.getByRole()` - Query by ARIA role
- `screen.getByPlaceholderText()` - Query by placeholder
- `fireEvent()` - Trigger events
- `userEvent()` - Simulate user interactions

## Project Structure

```
portfolio-frontend/
├── src/
│   ├── __tests__/
│   │   └── Chat.test.tsx          # Unit tests
│   ├── app/
│   ├── components/
│   └── ...
├── e2e/
│   └── chat.spec.ts               # E2E tests
├── jest.config.js                 # Jest configuration
├── jest.setup.js                  # Jest setup file
├── playwright.config.ts           # Playwright configuration
└── package.json                   # Test scripts
```

## Test Scripts in package.json

```json
{
  "test": "jest",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage",
  "e2e": "playwright test",
  "e2e:ui": "playwright test --ui",
  "e2e:debug": "playwright test --debug"
}
```

## Best Practices

### Unit Testing (Jest + RTL)
1. Test behavior, not implementation
2. Use semantic queries (getByRole, getByLabelText)
3. Avoid testing internal state
4. Test accessibility alongside functionality

### E2E Testing (Playwright)
1. Test complete user workflows
2. Run against a staging environment
3. Use page objects for maintainability
4. Run tests in CI/CD pipeline

## Troubleshooting

### Jest Issues
- Clear Jest cache: `npm test -- --clearCache`
- Ensure `jest-environment-jsdom` is installed for DOM testing

### Playwright Issues
- Install browsers: `npx playwright install`
- Update Playwright: `npm install -D @playwright/test@latest`

### Module Resolution
- Use `@/` alias for imports (configured in `tsconfig.json` and `jest.config.js`)
- Example: `import Chat from '@/app/components/Chat'`

## CI/CD Integration

To run tests in CI/CD:

```bash
# Install dependencies
npm install

# Run unit tests
npm test

# Run E2E tests (ensure dev server is running)
npm run e2e
```

## Local Validation

1. Install dependencies: `npm install`
2. Start the dev server: `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000)
4. Run unit tests: `npm test`
5. Run E2E tests: `npm run e2e`

## Resources

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [Playwright Documentation](https://playwright.dev/)
