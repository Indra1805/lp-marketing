# Learning Pattern — Marketing Website (Phase 1)

Frontend-only Next.js marketing website for Learning Pattern. The existing Next.js 16 App Router project and its auth/dashboard route folders are preserved. No LMS, backend, database, authentication, payment or real enquiry delivery is implemented.

## Stack

- Next.js 16.3.6 / React 19 / TypeScript
- Tailwind CSS v4 (global design tokens and CSS utilities)
- Next Image and next/font
- Server Components by default; Client Components only for navigation, search/filter, FAQ accordion and demo form interactions
- Shadcn-compatible `components.json` aliases and CSS-variable setup

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Quality checks

```bash
npx tsc --noEmit
npm run lint
npm run build
```

## Editable content

- `src/data/courses.ts` — all six programs, topics, levels and placeholder duration/fees
- `src/data/site.ts` — institute contact placeholders, FAQs, trainers and sample blog cards
- `src/app/globals.css` — brand palette, typography scale, layout and responsive styles

## Important launch placeholders

- Replace the placeholder email and phone in `src/data/site.ts`.
- Confirm course durations, fees, schedules, curriculum and trainer biographies.
- Replace sample blog copy before publishing.
- Review and replace the Privacy and Terms placeholder pages.
- The enquiry form validates in the browser and displays a demo confirmation only. It does not transmit or store submissions.
- The home page uses remote Unsplash images; replace them with approved institute-owned imagery for production if desired.

## Dependency note

The provided environment could not reach the npm registry, so no additional npm packages were installed. The existing dependency set remains unchanged. Lightweight inline SVG icons and native accessible form controls are used rather than adding lucide-react, React Hook Form, Zod, Zustand or the Shadcn component package. `components.json` is included for a future Shadcn CLI setup. No Zustand store was needed for this static site.
"# lp-marketing" 
