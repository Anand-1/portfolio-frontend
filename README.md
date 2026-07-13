# Portfolio Frontend

A modern personal portfolio built with Next.js 16.2.9, React 19, and TypeScript.

## Features

- Sticky navigation bar across all pages
- Animated vector background behind page content
- Glassmorphism-style transparent buttons and UI controls
- AI skills included in the portfolio skill set and visual charts
- Highcharts treegraph widget for technical skill visualization
- Circular skill chart summarizing core expertise areas
- Modular component structure using the App Router
- Responsive layout with mobile-friendly breakpoints
- Client-only dynamic chart loading for browser-safe rendering

## Application Flow

1. `app/layout.tsx` renders the global layout:
   - animated background
   - navigation
   - page content wrapper
   - chat portal
2. `app/page.tsx` renders the homepage content:
   - hero text and charts
   - circular skill chart
   - Highcharts skills treegraph
   - content section with skill highlights and CTA
3. `src/data/cv.ts` provides structured portfolio data:
   - profile header
   - technical skills
   - work experience
   - achievements
4. `src/app/components` renders reusable sections:
   - `TechnicalSkills`
   - `ContentSection`
   - `Chat` and `ChatPortal`
   - `AnimatedBackground`
5. Dynamic browser-only chart loading is handled by:
   - `HighchartSkillsLoader.tsx`
   - `HighchartSkills.tsx`

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Notes

- The app uses Tailwind CSS and CSS Modules for styling.
- Highcharts is initialized client-side to avoid SSR issues.
- The button and UI theme is designed to match a translucent macOS-style aesthetic.

## Local Validation

1. Install dependencies: `npm install`
2. Run the development server: `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000)
4. Run component tests: `npm test`
5. Run E2E tests: `npm run e2e`

## Vercel Deployment

This repository includes a GitHub Actions workflow at `.github/workflows/vercel-deploy.yml` that deploys to Vercel on pushes to `main`.

### Required GitHub secrets

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Add those secrets in your repository settings before the first deployment.
