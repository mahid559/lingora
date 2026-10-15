import type { QuizQuestion } from "@/data/types";
import { QUIZ_PASS_THRESHOLD } from "@/lib/achievements";
import { normalizeAnswer } from "@/lib/validators";

export interface GradedQuestion {
  questionId: string;
  given: string;
  correct: boolean;
  correctAnswer: string;
}

export interface QuizResult {
  score: number;
  total: number;
  percent: number;
  passed: boolean;
  results: GradedQuestion[];
}

/**
 * Grades quiz answers against the canonical lesson content.
 *
 * Shared by the client persistence path (`src/lib/local-store.ts`) and the
 * server action (`src/actions/quizzes.ts`) so scoring, accepted answers and
 * the pass threshold are always identical, no matter which backend is active.
 */
export function gradeQuiz(
  questions: QuizQuestion[],
  answers: { questionId: string; value: string }[]
): QuizResult {
  const results: GradedQuestion[] = questions.map((q) => {
    const submitted = answers.find((a) => a.questionId === q.id);
    const given = submitted?.value ?? "";

    let correct: boolean;
    if (q.type === "multiple-choice") {
      correct = given === q.answer;
    } else {
      const norm = normalizeAnswer(given);
      const accepted = [q.answer, ...(q.acceptableAnswers ?? [])].map(normalizeAnswer);
      correct = accepted.includes(norm);
    }
    return { questionId: q.id, given, correct, correctAnswer: q.answer };
  });

  const total = questions.length;
  const score = results.filter((r) => r.correct).length;
  const percent = Math.round((score / Math.max(1, total)) * 100);
  const passed = percent >= QUIZ_PASS_THRESHOLD;

  return { score, total, percent, passed, results };
}