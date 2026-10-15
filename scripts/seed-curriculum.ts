/**
 * Materialize the bundled curriculum into Supabase.
 *
 * Usage (server-side only — never run in the browser):
 *   npm run seed
 *
 * Requires NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.
 * The service-role key bypasses RLS, which is required to write the
 * world-readable curriculum mirror tables.
 */
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { createClient } from "@supabase/supabase-js";
import { lessons } from "../src/data/lessons/index";
import { phases } from "../src/data/phases";

/* ------------------------------------------------------------------ */
/* Minimal .env loader (no extra dependency)                          */
/* ------------------------------------------------------------------ */
function loadEnvFile(file: string) {
  if (!existsSync(file)) return;
  for (const rawLine of readFileSync(file, "utf8").split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

for (const file of [".env.local", ".env"]) {
  loadEnvFile(resolve(process.cwd(), file));
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error(
    [
      "✗ Supabase is not configured for seeding.",
      "  Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local",
      "  (see .env.example), then run `npm run seed` again.",
    ].join("\n")
  );
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

function phaseNumberForDay(day: number): number {
  const phase = phases.find((p) => day >= p.startDay && day <= p.endDay);
  if (!phase) throw new Error(`Day ${day} has no phase`);
  return phase.number;
}

async function main() {
  console.log(`Seeding ${lessons.length} lessons across ${phases.length} phases…`);

  /* Phases */
  {
    const { error } = await supabase.from("phases").upsert(
      phases.map((p) => ({
        number: p.number,
        title: p.title,
        title_bn: p.titleBn,
        description: p.description,
        description_bn: p.descriptionBn,
        start_day: p.startDay,
        end_day: p.endDay,
      })),
      { onConflict: "number" }
    );
    if (error) throw new Error(`phases: ${error.message}`);
  }

  /* Lessons (full content as JSONB) */
  {
    const { error } = await supabase.from("lessons").upsert(
      lessons.map((l) => ({
        day: l.day,
        phase_number: phaseNumberForDay(l.day),
        title: l.title,
        title_bn: l.titleBn,
        level: l.level,
        duration_minutes: l.durationMinutes,
        content: l,
        updated_at: new Date().toISOString(),
      })),
      { onConflict: "day" }
    );
    if (error) throw new Error(`lessons: ${error.message}`);
  }

  /* Vocabulary */
  {
    const rows = lessons.flatMap((l) =>
      l.vocab.map((v) => ({
        lesson_day: l.day,
        word: v.word,
        meaning_bn: v.meaningBn,
        example_en: v.exampleEn,
        example_bn: v.exampleBn,
      }))
    );
    const { error } = await supabase
      .from("vocabulary_words")
      .upsert(rows, { onConflict: "lesson_day,word" });
    if (error) throw new Error(`vocabulary_words: ${error.message}`);
    console.log(`  · ${rows.length} vocabulary words`);
  }

  /* Quiz questions */
  {
    const rows = lessons.flatMap((l) =>
      l.quiz.map((q) => ({
        id: q.id,
        lesson_day: l.day,
        type: q.type,
        prompt_bn: q.promptBn,
        prompt_en: q.promptEn ?? null,
        options: q.options ?? null,
        answer: q.answer,
        acceptable_answers: q.acceptableAnswers ?? null,
        explanation_bn: q.explanationBn,
      }))
    );
    const { error } = await supabase.from("quiz_questions").upsert(rows, { onConflict: "id" });
    if (error) throw new Error(`quiz_questions: ${error.message}`);
    console.log(`  · ${rows.length} quiz questions`);
  }

  console.log("✅ Curriculum seeded successfully.");
}

main().catch((err) => {
  console.error("✗ Seed failed:", err instanceof Error ? err.message : err);
  process.exit(1);
});
