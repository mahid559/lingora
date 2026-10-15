/**
 * Content completeness verifier.
 * Run with: npm run verify:content
 * Ensures every day of the 60-day curriculum meets the LINGORA content contract.
 */
import { lessons } from "../src/data/lessons/index";

const errors: string[] = [];
const warnings: string[] = [];

const requireAtLeast = (
  day: number,
  field: string,
  value: number,
  min: number
) => {
  if (value < min) errors.push(`Day ${day}: ${field} has ${value}, minimum ${min}`);
};

for (const lesson of lessons) {
  const d = lesson.day;
  if (lesson.vocab.length < 10) requireAtLeast(d, "vocab", lesson.vocab.length, 10);
  if (lesson.sentences.length < 10) requireAtLeast(d, "sentences", lesson.sentences.length, 10);
  if (lesson.quiz.length < 10) requireAtLeast(d, "quiz", lesson.quiz.length, 10);
  if (lesson.exercises.length < 2) requireAtLeast(d, "exercises", lesson.exercises.length, 2);
  if (lesson.intro.length < 2) errors.push(`Day ${d}: intro needs at least 2 paragraphs`);
  if (lesson.objectives.length < 3) errors.push(`Day ${d}: needs at least 3 objectives`);
  if (!lesson.grammar) warnings.push(`Day ${d}: no grammar section`);
  if (!lesson.exercises.some((e) => e.type === "speaking"))
    errors.push(`Day ${d}: must include a speaking exercise`);
  if (!lesson.homework.tasks.length) errors.push(`Day ${d}: homework has no tasks`);
  // unique quiz ids
  const ids = lesson.quiz.map((q) => q.id);
  if (new Set(ids).size !== ids.length) errors.push(`Day ${d}: duplicate quiz ids`);
  for (const q of lesson.quiz) {
    if (q.type === "multiple-choice" && (!q.options || q.options.length < 3))
      errors.push(`Day ${d}: MC question ${q.id} needs >= 3 options`);
    if (
      (q.type === "fill-blank" || q.type === "translate-bn-en" || q.type === "correct-sentence") &&
      !q.answer.trim()
    )
      errors.push(`Day ${d}: question ${q.id} missing answer`);
    if (!q.explanationBn.trim()) errors.push(`Day ${d}: question ${q.id} missing Bengali explanation`);
  }
  // vocabulary key uniqueness is handled by index; check per-word example pairs
  for (const v of lesson.vocab) {
    if (!v.word || !v.meaningBn) errors.push(`Day ${d}: vocab entry missing word/meaning`);
  }
  // sentence pairs must have both sides
  for (const s of lesson.sentences) {
    if (!s.bn || !s.en) errors.push(`Day ${d}: sentence pair missing bn or en`);
  }
}

// Global checks
const days = lessons.map((l) => l.day);
if (days.length !== 60) errors.push(`Expected 60 lessons, found ${days.length}`);
for (let i = 1; i <= 60; i += 1) {
  if (!days.includes(i)) errors.push(`Missing day ${i}`);
}
const dupDays = days.filter((day, i) => days.indexOf(day) !== i);
if (dupDays.length) errors.push(`Duplicate days: ${[...new Set(dupDays)].join(", ")}`);

const vocabKeys = lessons.flatMap((l) => l.vocab.map((v) => `${l.day}:${v.word.toLowerCase()}`));
const dupVocab = vocabKeys.filter((k, i) => vocabKeys.indexOf(k) !== i);
if (dupVocab.length) warnings.push(`Duplicate vocab keys within a lesson: ${[...new Set(dupVocab)].slice(0, 5).join(", ")}`);

// Quiz ids are primary keys in the seeded DB — they must be unique everywhere.
const quizIds = lessons.flatMap((l) => l.quiz.map((q) => q.id));
const dupQuizIds = quizIds.filter((id, i) => quizIds.indexOf(id) !== i);
if (dupQuizIds.length)
  errors.push(`Duplicate quiz ids across curriculum: ${[...new Set(dupQuizIds)].slice(0, 8).join(", ")}`);

console.log(`Checked ${lessons.length} lessons across the curriculum.`);
if (warnings.length) {
  console.log(`\nWarnings (${warnings.length}):`);
  for (const w of warnings) console.log("  - " + w);
}
if (errors.length) {
  console.error(`\nErrors (${errors.length}):`);
  for (const e of errors) console.error("  ! " + e);
  process.exit(1);
}
console.log("\n✅ All 60 lessons satisfy the content contract.");