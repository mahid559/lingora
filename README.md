# LINGORA — Learn English, One Day at a Time

**LINGORA** is a complete, production-ready **Bangla-to-English** learning platform:
a 60-day structured course taught entirely through Bengali. Every day brings a
unique lesson with Bengali explanations, grammar, vocabulary, Bangla→English
sentence practice, speaking exercises, a graded quiz, and homework with answers.

Built for Bengali-speaking beginners (Bangladesh) and positioned as a premium,
commercial educational SaaS product.

---

## Features

- **60 authored lessons** across six phases — foundations → essential grammar →
  building confidence → everyday communication → practical fluency → real-world English.
- **Everything taught through Bengali** — explanations, instructions, translations, and
  feedback are natural Bangla; English is what you learn, not what gets in the way.
- **Real auth & persistence (Supabase)** — email/password auth, Postgres storage,
  Row Level Security. No fake persistence, ever.
- **Progression & streaks** — lesson N unlocks when N−1 is done; streaks come from
  your real activity records (device-local dates, so timezone-correct).
- **Server-side quiz grading** — the client can never supply a score. 70% to pass,
  per-question Bengali explanations, unlimited retries.
- **Vocabulary notebook** — search 600+ words across the course, save favourites,
  mark words as learned.
- **Progress dashboard** — completion %, weekly activity bars, quiz history, 12
  achievements/badges, phase-by-phase progress, final assessment.
- **Honest degraded mode** — with no Supabase env vars, the whole public site and
  all 60 lessons remain readable; protected pages explain exactly what to configure.
- **Accessible & mobile-first** — semantic landmarks, focus rings, 44px touch
  targets, bottom tab bar on mobile, sidebar on desktop, skeleton loaders,
  `aria-live` toasts.

## Tech stack

| Layer    | Choice |
|----------|--------|
| Framework| Next.js 15 (App Router, React 19) |
| Language | TypeScript (strict) |
| Styling  | Tailwind CSS 3 + design tokens (`cream`/`navy`/`mint`) |
| Motion   | Framer Motion (+ GSAP reserved) |
| Icons    | lucide-react |
| Backend  | Supabase (Auth + PostgreSQL + RLS) |
| Fonts    | Inter + Noto Sans Bengali via `next/font` |

## Quick start

```bash
npm install
npm run dev            # http://localhost:3000
```

The public site and the full 60-day curriculum work without any configuration.
Auth, dashboard, progress, vocabulary saving, and quiz persistence require a
Supabase project — follow **[docs/SETUP.md](docs/SETUP.md)** for the complete
walkthrough (project creation → migrations → seed → deploy).

## Project structure

```
src/
  app/                  routes (pages, layouts; (app) = protected group)
  components/
    ui/                 dumb primitives (Button, Card, Input, Badge, …)
    shell/              AppShell (sidebar + mobile bottom nav)
    landing/            marketing page sections
    lessons/            LessonExperience, QuizRunner + exercise renderers
    dashboard|roadmap|vocabulary|progress|settings  page views
    auth/               auth forms & setup notice
    app/                shared app widgets (stat cards, weekly bars, badges)
  data/                 curriculum content (typed TS) — single source of truth
  lib/                  supabase clients, date/streak math, validation, queries
  actions/              server actions (validation + auth server-side)
supabase/migrations/    SQL schema + RLS + helpers
scripts/                verify-content.ts, seed-curriculum.ts
```

## Data model

- **Curriculum** lives in typed TypeScript (`src/data/lessons/*.ts`) and is bundled
  with the app — public and identical for every user. The database keeps a seeded
  mirror (`phases`, `lessons`, `vocabulary_words`, `quiz_questions`) for integrity.
- **User data** — `profiles`, `lesson_completions`, `quiz_attempts`, `saved_words`,
  `daily_activity`, `achievements` — lives only in Supabase under RLS, keyed to `auth.uid()`.

## Verification

```bash
npm run verify:content   # all 60 lessons meet the content contract
npm run lint             # ESLint
npm run typecheck        # tsc --noEmit
npm run build            # production build
```

## License & commercial use

This is a self-contained commercial product. All curriculum content was authored
directly for this project. See the repository owner for licensing terms.