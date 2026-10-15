-- LINGORA initial schema
-- Tables, constraints, indexes, Row Level Security, and helpers.
--
-- Curriculum tables (phases, lessons, vocabulary_words, quiz_questions) hold a
-- materialized mirror of the bundled TypeScript content and are world-readable.
-- User tables are owner-only, scoped to auth.uid().
--
-- Run with the Supabase CLI (`supabase db push`) or paste into the SQL editor.

-- ---------------------------------------------------------------------------
-- Extensions
-- ---------------------------------------------------------------------------
create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------------
-- profiles
-- ---------------------------------------------------------------------------
create table if not exists public.profiles (
  id                uuid primary key references auth.users (id) on delete cascade,
  display_name      text,
  native_language   text not null default 'bn',
  daily_goal_minutes integer not null default 20 check (daily_goal_minutes between 5 and 180),
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Curriculum mirror: phases
-- ---------------------------------------------------------------------------
create table if not exists public.phases (
  number         integer primary key check (number between 1 and 6),
  title          text not null,
  title_bn       text not null,
  description    text not null,
  description_bn text not null,
  start_day      integer not null,
  end_day        integer not null,
  unique (start_day, end_day)
);

-- ---------------------------------------------------------------------------
-- Curriculum mirror: lessons (content stored as JSONB for fidelity)
-- ---------------------------------------------------------------------------
create table if not exists public.lessons (
  day             integer primary key check (day between 1 and 60),
  phase_number    integer not null references public.phases (number) on delete restrict,
  title           text not null,
  title_bn        text not null,
  level           integer not null check (level between 1 and 3),
  duration_minutes integer not null,
  content         jsonb not null,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Curriculum mirror: vocabulary_words
-- ---------------------------------------------------------------------------
create table if not exists public.vocabulary_words (
  id          bigint generated always as identity primary key,
  lesson_day  integer not null references public.lessons (day) on delete cascade,
  word        text not null,
  meaning_bn  text not null,
  example_en  text not null,
  example_bn  text not null,
  unique (lesson_day, word)
);

-- ---------------------------------------------------------------------------
-- Curriculum mirror: quiz_questions
-- ---------------------------------------------------------------------------
create table if not exists public.quiz_questions (
  id                 text primary key,
  lesson_day         integer not null references public.lessons (day) on delete cascade,
  type               text not null,
  prompt_bn          text not null,
  prompt_en          text,
  options            jsonb,
  answer             text not null,
  acceptable_answers jsonb,
  explanation_bn     text not null
);

-- ---------------------------------------------------------------------------
-- User data: lesson_completions
-- ---------------------------------------------------------------------------
create table if not exists public.lesson_completions (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null references auth.users (id) on delete cascade,
  lesson_day   integer not null check (lesson_day between 1 and 60),
  completed_at timestamptz not null default now(),
  unique (user_id, lesson_day)
);

-- ---------------------------------------------------------------------------
-- User data: quiz_attempts
-- ---------------------------------------------------------------------------
create table if not exists public.quiz_attempts (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users (id) on delete cascade,
  lesson_day  integer not null check (lesson_day between 1 and 60),
  score       integer not null check (score >= 0),
  total       integer not null check (total > 0),
  percent     integer not null check (percent between 0 and 100),
  passed      boolean not null default false,
  answers     jsonb,
  created_at  timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- User data: saved_words
-- ---------------------------------------------------------------------------
create table if not exists public.saved_words (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users (id) on delete cascade,
  word_key    text not null,
  is_favorite boolean not null default true,
  is_learned  boolean not null default false,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  unique (user_id, word_key)
);

-- ---------------------------------------------------------------------------
-- User data: daily_activity (one row per user per local activity date)
-- ---------------------------------------------------------------------------
create table if not exists public.daily_activity (
  id                uuid primary key default gen_random_uuid(),
  user_id           uuid not null references auth.users (id) on delete cascade,
  activity_date     date not null,
  lessons_completed integer not null default 0 check (lessons_completed >= 0),
  quizzes_taken     integer not null default 0 check (quizzes_taken >= 0),
  minutes_spent     integer not null default 0 check (minutes_spent >= 0),
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now(),
  unique (user_id, activity_date)
);

-- ---------------------------------------------------------------------------
-- User data: achievements
-- ---------------------------------------------------------------------------
create table if not exists public.achievements (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users (id) on delete cascade,
  type        text not null,
  awarded_at  timestamptz not null default now(),
  unique (user_id, type)
);

-- ---------------------------------------------------------------------------
-- Indexes for feed / streak / progress queries
-- ---------------------------------------------------------------------------
create index if not exists lesson_completions_user_day_idx on public.lesson_completions (user_id, lesson_day);
create index if not exists lesson_completions_user_time_idx on public.lesson_completions (user_id, completed_at desc);
create index if not exists quiz_attempts_user_time_idx on public.quiz_attempts (user_id, created_at desc);
create index if not exists quiz_attempts_user_day_idx on public.quiz_attempts (user_id, lesson_day);
create index if not exists daily_activity_user_date_idx on public.daily_activity (user_id, activity_date);
create index if not exists saved_words_user_idx on public.saved_words (user_id);
create index if not exists achievements_user_idx on public.achievements (user_id);
create index if not exists vocabulary_words_day_idx on public.vocabulary_words (lesson_day);
create index if not exists quiz_questions_day_idx on public.quiz_questions (lesson_day);

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------
alter table public.profiles          enable row level security;
alter table public.phases            enable row level security;
alter table public.lessons           enable row level security;
alter table public.vocabulary_words  enable row level security;
alter table public.quiz_questions    enable row level security;
alter table public.lesson_completions enable row level security;
alter table public.quiz_attempts     enable row level security;
alter table public.saved_words       enable row level security;
alter table public.daily_activity    enable row level security;
alter table public.achievements      enable row level security;

-- Curriculum: world-readable (the app bundles the same content, the DB is a mirror).
drop policy if exists "phases_public_read" on public.phases;
create policy "phases_public_read" on public.phases for select using (true);

drop policy if exists "lessons_public_read" on public.lessons;
create policy "lessons_public_read" on public.lessons for select using (true);

drop policy if exists "vocabulary_public_read" on public.vocabulary_words;
create policy "vocabulary_public_read" on public.vocabulary_words for select using (true);

drop policy if exists "quiz_public_read" on public.quiz_questions;
create policy "quiz_public_read" on public.quiz_questions for select using (true);

-- Profiles: a user may read and update only their own row.
drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own" on public.profiles for select using (auth.uid() = id);

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own" on public.profiles for insert with check (auth.uid() = id);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own" on public.profiles for update using (auth.uid() = id) with check (auth.uid() = id);

-- Owner-only policies for user data tables.
drop policy if exists "lesson_completions_own" on public.lesson_completions;
create policy "lesson_completions_own" on public.lesson_completions
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "quiz_attempts_own" on public.quiz_attempts;
create policy "quiz_attempts_own" on public.quiz_attempts
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "saved_words_own" on public.saved_words;
create policy "saved_words_own" on public.saved_words
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "daily_activity_own" on public.daily_activity;
create policy "daily_activity_own" on public.daily_activity
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "achievements_own" on public.achievements;
create policy "achievements_own" on public.achievements
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ---------------------------------------------------------------------------
-- Function: upsert_daily_activity
-- Atomically increments the counters for a user's activity date.
-- SECURITY INVOKER so RLS still applies; only the owner's row is touched.
-- ---------------------------------------------------------------------------
create or replace function public.upsert_daily_activity(
  p_user_id       uuid,
  p_activity_date date,
  p_lessons       integer default 0,
  p_quizzes       integer default 0,
  p_minutes       integer default 0
)
returns void
language plpgsql
security invoker
set search_path = public
as $$
begin
  insert into public.daily_activity (user_id, activity_date, lessons_completed, quizzes_taken, minutes_spent)
  values (p_user_id, p_activity_date, greatest(p_lessons, 0), greatest(p_quizzes, 0), greatest(p_minutes, 0))
  on conflict (user_id, activity_date) do update
    set lessons_completed = public.daily_activity.lessons_completed + greatest(excluded.lessons_completed, 0),
        quizzes_taken     = public.daily_activity.quizzes_taken     + greatest(excluded.quizzes_taken, 0),
        minutes_spent     = public.daily_activity.minutes_spent     + greatest(excluded.minutes_spent, 0),
        updated_at        = now();
end;
$$;

-- ---------------------------------------------------------------------------
-- Trigger: create a profile row for every new auth user
-- ---------------------------------------------------------------------------
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data ->> 'display_name', null))
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
