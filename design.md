# LINGORA — Design System & Architecture

**Product:** LINGORA — Learn English, One Day at a Time.
**Model:** A 60-day, Bangla-to-English learning platform for Bengali-speaking beginners in Bangladesh.
**Positioning:** A premium, commercial educational SaaS product.

---

## 1. Brand & Visual Language

### 1.1 Palette

| Token | Value | Usage |
|---|---|---|
| `brand.cream` | `#FAF8F3` | Primary page background (soft cream / off-white) |
| `brand.surface` | `#FFFFFF` | Cards, panels, inputs |
| `brand.navy.900` | `#0B2130` | Deepest navy — text emphasis, footer |
| `brand.navy.800` | `#0F2836` | Sidebar background |
| `brand.navy.700` | `#15394C` | Sidebar hover / elevated navy |
| `brand.navy.DEFAULT` | `#16384B` | Headings, primary typography |
| `brand.mint.100` | `#DDF3E9` | Mint tinted surfaces, success backgrounds |
| `brand.mint.DEFAULT` | `#2FA77A` | Primary action color, links, active states |
| `brand.mint.600` | `#25895F` | Hover state for mint |
| `brand.mint.700` | `#1E7050` | Pressed state |
| `brand.blue.DEFAULT` | `#3E7CB1` | Secondary teaching accent (charts, tags) |
| `brand.amber.DEFAULT` | `#C9843B` | Warnings, streak highlights |
| `brand.rose.DEFAULT` | `#C45A5A` | Errors, destructive actions |
| `neutral.*` | Tailwind scale | Muted copy, borders, dividers |

Contrast rule: body text on cream/white is always navy-900 (`#0B2130`, contrast > 12:1). Muted text uses `neutral-600` (≥ 4.5:1 on white). Mint on white is only used for large text, icons, and fills; primary buttons use white text on mint-600/700 for AA compliance.

### 1.2 Typography

- Latin: **Inter** (via `next/font/google`), weights 400/500/600/700/800.
- Bengali: **Noto Sans Bengali** (via `next/font/google`), weights 400/500/600/700.
- Type scale: `text-xs` captions → `text-sm` body secondary → `text-base` body → `text-lg` lede → `text-2xl/3xl` section titles → `text-4xl/5xl` hero.
- Headings use `font-bold` with tight trackcing (`tracking-tight`); Bengali text keeps normal tracking.
- Line length for lesson content: max `prose` width (~65ch); generous line-height (`leading-7`/`leading-8`) for mixed Bangla/Latin.

### 1.3 Shape, Elevation, Motion

- Cards: `rounded-2xl`, `border border-navy-900/8`, `bg-white`, `shadow-[0_1px_2px_rgba(11,33,48,0.06)]`; hover `shadow-md` + subtle `-translate-y-0.5`.
- Buttons: `rounded-xl`; primary mint, secondary outline navy, ghost transparent.
- Focus rings: `focus-visible:ring-2 ring-mint ring-offset-2` everywhere — keyboard navigation is a first-class concern.
- Motion (Framer Motion): low-frequency. Fade/slide-in reveals on scroll (`opacity 0→1`, `y 12→0`, duration 0.4–0.6s), staggered card entrances, layout animations for quiz selection. No whooshes, no bounce, no gradients-for-decoration.
- GSAP: permitted only for genuinely advanced animation (e.g., the 60-day progress orbit on the landing page). Functionality > flair.
- Empty states: centered icon in a soft tinted circle, a clear Bengali/English message, and a single primary action. Never a bare "No data".

## 2. Architecture

### 2.1 Stack

- **Next.js (App Router)** + **React 19**, strictly typed **TypeScript**.
- **Tailwind CSS 3** for styling; `tailwind-merge` + `clsx` for class composition.
- **Framer Motion** for UI animation; **GSAP** reserved; **lucide-react** for all icons.
- **Supabase**: auth (email/password), Postgres DB, Row Level Security.

### 2.2 Layering

```
src/app            → routes (route handlers, pages, layouts, middleware in src/)
src/components/ui  → dumb, reusable primitives (Button, Card, Input, …)
src/components/shell → AppShell, Sidebar, MobileNav
src/components/landing → landing-page sections
src/components/lessons → LessonExperience, QuizRunner, exercise renderers
src/data           → curriculum content (typed models) — the single source of truth
src/lib            → supabase clients, utils, date/streak math, validation
src/actions        → server actions (mutations with server-side validation & auth)
src/actions/queries.ts → server-only read helpers for server components
supabase/migrations → SQL schema + RLS
scripts            → curriculum seed (derives from src/data)
```

### 2.3 Data ownership

- **Curriculum content** (phases, lessons, vocab, exercises, quiz questions) lives in typed TypeScript modules under `src/data` and is bundled with the app. It is public and identical for every user.
- The **database** stores a materialized copy of the curriculum (phases/lessons/vocabulary/quiz_questions seeded by `scripts/seed-curriculum.ts`) for integrity and future server-driven features.
- **User data** (profiles, lesson_completions, quiz_attempts, saved_words, daily_activity, achievements) lives only in Supabase under RLS, keyed to `auth.uid()`.
- Client code never touches the service-role key. All writes go through server actions; all reads for protected pages go through server components / server actions.

### 2.4 Server components by default

- Pages and layouts are server components; interactive islands (forms, quiz, nav) are client components with `'use client'`.
- No client-side data fetching for the primary read paths. Mutations happen through server actions.
- `params`/`searchParams` in Next 15 are awaited (async).

### 2.5 No-Supabase fallback (honest mode)

- When `NEXT_PUBLIC_SUPABASE_URL`/`NEXT_PUBLIC_SUPABASE_ANON_KEY` are absent, the app still serves the public site and full curriculum reaad-only.
- Auth-protected pages render an explicit "Setup required" state; the app **never fabricates local data to fake persistence**. This is clearly marked in the UI and docs.

## 3. Coding Standards

- Strict TS (`noUncheckedIndexedAccess` off; `strict: true`; no `any` without justification).
- File conventions: `kebab-case` filenames; PascalCase components; one default export per page/component.
- Server actions: prefix `action`-style verbs, validate inputs server-side, return `{ success?, error?, data? }` plain objects, never throw to the client.
- Consistency rules: every interactive element has `aria-label`/visible label; every form has validation + loading + error/success states; every page has a `<title>` and description.
- No dead links. Every `<a>`/button goes somewhere real.
- Query efficiency: single round-trips for dashboard aggregates; composable helpers; RLS keeps scoping in SQL.

## 4. Product Rules

### 4.1 Progression & unlocking

- Lesson N unlocks when `N === 1` or lesson `N-1` is completed. Completed lessons stay revisit-able. Locked cards show a lock and the requirement.
- "Current" = first uncompleted unlocked lesson. Streak and daily stats come from real `daily_activity` rows.

### 4.2 Streak definition

- Activity day = the device-local date (`YYYY-MM-DD`) on which a tracked action (lesson completion or quiz attempt) occurred, stored client-supplied so it is timezone-correct per user.
- Current streak = consecutive days ending at the user's most recent activity day (or today). Longest streak = maximum run in history. Zeros at a gap.

### 4.3 Quiz rules

- Passing threshold: **70%**.
- Grading is **server-side**: the action re-grades answers against the canonical content before persisting; clients never supply a score.
- Acceptable-answer lists normalize (trim, lower-case, collapse whitespace) for fill-blank/translation. Multiple choice is exact.
- One `quiz_attempts` row per submission; history kept; retry creates new attempts.

### 4.4 Curriculum content rules

- Every lesson is taught **through Bengali** (explanations, instructions, translations are natural Bangla).
- Content is authored content, unique per day — no cloned lessons, no repeated sentence/vocab sets except deliberate revision.
- Every lesson: objectives, Bengali intro, grammar in Bengali, ≥ 10 vocab words, ≥ 10 Bangla→English sentence pairs, ≥ 2 exercises (one speaking), ≥ 10 quiz questions, homework with answers, common Bengali-speaker mistakes where relevant.

## 5. Accessibility & Responsiveness

- Mobile-first: single column, `max-w-7xl` containers, sidebar collapses to a bottom tab bar / drawer.
- Touch targets ≥ 44px. No horizontal overflow; lesson blocks use break-words in Bangla.
- Semantic landmarks (`header/main/nav/footer`), table-free charts, real `<label>`s, `aria-live` for quiz results and toasts.
- Skeleton loaders for async data; empty/error/success variants on every data view.