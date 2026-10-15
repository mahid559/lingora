# LINGORA — Supabase Setup & Deployment

This guide walks through connecting the real backend (auth + Postgres + RLS),
seeding the curriculum, and deploying the app. Estimated time: **20–30 minutes**.

---

## 1. Create a Supabase project

1. Go to <https://supabase.com> and sign in (GitHub is easiest).
2. **New project** → pick a name (e.g. `lingora`), a strong database password
   (save it!), and a region close to your users (Singapore for Bangladesh —
   `ap-southeast-1`).
3. Wait for project provisioning (usually < 2 minutes).

## 2. Copy your API keys

In your project dashboard:

- **Project Settings → API** (or use the **Connect** modal):
  - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
  - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY` (⚠️ secret — server side **only**)

Create `.env.local` in the project root (never commit it — it is gitignored):

```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOi...

# Public site origin used in auth emails (development default):
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

`.env.example` documents every variable without values — keep it in sync.

## 3. Run the migrations

### Option A — Supabase CLI (recommended)

```bash
npm i -g supabase
supabase login
supabase link --project-ref <your-project-ref>   # ref = part of your project URL
supabase db push
```

### Option B — SQL editor

1. Open **SQL Editor** in your dashboard.
2. Paste the entire contents of `supabase/migrations/0001_initial_schema.sql`.
3. Run it. It is idempotent (safe to re-run).

The migration creates all tables, indexes, Row Level Security policies, the
`upsert_daily_activity` function, and a trigger that auto-creates a profile row
when a user registers.

> **Auth provider configuration:** In **Authentication → Providers**, make sure
> **Email** is enabled. Under **Authentication → URL Configuration**, set the
> Site URL to your deployed origin (e.g. `https://lingora.example.com`) and add
> `https://<your-domain>/auth/callback` to the **Redirect URLs**.

## 4. Seed the curriculum

The 60 lessons are bundled in `src/data`. Seeding makes a mirror copy in Postgres
(used for integrity and future server-driven queries). It uses the **service-role
key**, so it must run server-side only.

```bash
npm run seed
```

Expected output:

```
Seeding 60 lessons across 6 phases…
  · ~600 vocabulary words
  · 600+ quiz questions
✅ Curriculum seeded successfully.
```

Re-running is safe (upserts). Run it again after any content change.

## 5. Configure email confirmation (optional but recommended)

Registration emails work out of the box on Supabase. For a custom domain, configure
your SMTP provider under **Authentication → Email Templates / SMTP**. The register
flow sends confirmation links to `NEXT_PUBLIC_SITE_URL + /auth/callback`.

## 6. Run locally

```bash
npm install
npm run dev
```

With `.env.local` set, everything is live: register → confirm email → dashboard →
roadmap → lessons → quizzes → vocabulary → progress → settings.

## 7. Deploy

### Vercel (recommended)

1. Push the repo to GitHub/GitLab.
2. **Import project** in Vercel — framework **Next.js** is auto-detected.
3. Add the same three environment variables (plus `NEXT_PUBLIC_SITE_URL` set to
   your production URL) in **Project → Settings → Environment Variables**.
4. Deploy. Add your domain in Vercel and update Supabase **Site URL / Redirect URLs**.

### Any Node host

```bash
npm run build
npm start          # serves the production build
```

Points any host at port 3000 with the env vars set. Since lessons are bundled in
the build (no database needed to read content), static hosting also works for the
public site + read-only curriculum.

## 8. Verify the whole product

- [ ] `npm run verify:content` → all 60 lessons pass the content contract
- [ ] `npm run lint`, `npm run typecheck`, `npm run build` all pass
- [ ] Register → receive email → confirm → land on `/dashboard`
- [ ] Complete lesson 1 → lesson 2 unlocks; lesson 3 stays locked until lesson 2
- [ ] Take a quiz → score is stored server-side; 70%+ shows **পাস**
- [ ] Save vocabulary words → appear in `/vocabulary` & on the words you saved in lessons
- [ ] Streaks increase when you return the next calendar day (device-local)
- [ ] After 2 attempted lessons on separate days, `/progress` shows weekly bars
- [ ] Two quizzes on different days → **কুইজ ইতিহাস** lists them
- [ ] Settings → change name / daily goal → refresh persists
- [ ] Settings → change password → re-login with the new password
- [ ] With env vars removed: public site + all lessons still render; protected
      pages show the explicit **Setup Required** state (no fake data)

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| “Setup required” on protected pages | `.env.local` not loaded — restart the dev server, confirm variable names. |
| “something went wrong” confirming email | `NEXT_PUBLIC_SITE_URL` wrong, or redirect URL not added in Supabase. |
| Lesson completion errors `upsert_daily_activity` | Migration not applied — run SQL from step 3. |
| Quiz insert fails | `quiz_attempts` table missing — migration not applied. |
| Profile name empty after register | The trigger needs `auth.users`; if you applied the migration before, re-run it. |
| `npm run seed` says “not configured” | Missing `SUPABASE_SERVICE_ROLE_KEY` in `.env.local`. |