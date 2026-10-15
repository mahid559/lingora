# LINGORA — Implementation Requirements (skill.md)

This file defines how LINGORA must be built, verified, and delivered. Follow it in order.

## 1. Non-negotiable requirements

1. The complete application ships: all routes, design system, 60 fully-authored lessons, DB migrations + RLS + seed, `.env.example`, README, and Supabase setup docs.
2. Every lesson teaches English through natural Bengali. Bangla→English translation practice is the core exercise type in every lesson.
3. No placeholder curriculum. No fabricated persistence. If Supabase is not configured, features degrade visibly and honestly.
4. Do not expose the service-role key or any secret client-side.

## 2. Environment & commands

- Node ≥ 20, npm. Primary shell is PowerShell on Windows.
- `npm install` → `npm run lint` → `npm run typecheck` → `npm run build` must all pass.
- Use `npm run dev` for local verification.
- Final report must list verification evidence (what actually ran and passed) — never claim unrun tests.

## 3. Authoring the curriculum

Content files: `src/data/lessons/phase-XX.ts` (10 lessons each) + `src/data/lessons/index.ts`.

Per lesson (typed in `src/data/types.ts`):
- Objectives (Bengali), duration, level (1–3), unique title.
- `intro`: 2–3 paragraphs of natural Bengali explanation.
- `grammar`: Bengali rule explanation + 3–6 example sentence pairs (English + Bangla).
- `commonMistakes`: Bengali-speaker errors (e.g., "I am go" → "I go") with Bengali notes, where relevant.
- `vocab`: ≥ 10 entries (word, Bengali meaning, English example, Bengali example).
- `sentences`: ≥ 10 Bangla→English pairs, progressive difficulty.
- `exercises`: ≥ 2, always including a speaking exercise with dialogue; add listening/pronunciation/reading/writing as the day warrants.
- `quiz`: ≥ 10 questions mixing `multiple-choice`, `fill-blank`, `translate-bn-en`, `correct-sentence`; each with a biciklis explanation in Bengali and, for text inputs, `acceptableAnswers`.
- `homework`: clear Bengali instructions, tasks, and an answer key.

Quality bar: correct English, natural Bangla, unique content per day, educationally sequenced across the five- / six-phase progression from foundations to real-world English.

## 4. Database

- `supabase/migrations/0001_initial_schema.sql`: tables `profiles`, `phases`, `lessons`, `vocabulary_words`, `quiz_questions`, `lesson_completions`, `quiz_attempts`, `saved_words`, `daily_activity`, `achievements`.
- RLS enabled on every table. Curriculum tables: readable by authenticated users (and public select where safe). User tables: owner-only policies using `auth.uid()`.
- Unique constraints preventing duplicates: `lesson_completions(uid, lesson_day)`, `daily_activity(uid, activity_date)`, `saved_words(uid, word_key)`, `achievements(uid, type)`.
- Indexes on user_id + timestamps for feed/streak queries.
- `scripts/seed-curriculum.ts` (run via `tsx`) materializes phases/lessons/vocabulary/quiz from `src/data` using the service-role key **server-side only**.
- `.env.example` documents variables without values.

## 5. Verification checklist (must actually be run)

- [ ] `npm install` clean
- [ ] `npm run lint` (ESLint on src) passes
- [ ] `npm run typecheck` passes
- [ ] `npm run build` succeeds (production)
- [ ] All 60 lessons have complete content (`scripts/verify-content.mjs` style check)
- [ ] Every nav link resolves to a real route; no dead buttons
- [ ] Unconfigured-Supabase mode renders setup states, does not crash
- [ ] Responsive: landing, roadmap, lesson, vocabulary on ~360px width

## 6. Delivery

- README with features, setup, Supabase project creation, migrations, seeding, deployment, and troubleshooting.
- Final report: implemented features, tests actually performed, external setup still required.