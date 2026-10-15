"use client";

import * as React from "react";
import { CheckCircle2, XCircle, RotateCcw, Trophy, Info } from "lucide-react";
import type { QuizQuestion } from "@/data/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/toaster";
import { useLearning } from "@/lib/learning-context";
import type { GradedQuestion } from "@/lib/quiz-grading";
import { QUIZ_PASS_THRESHOLD } from "@/lib/achievements";
import { cn } from "@/lib/utils";

const TYPE_LABEL: Record<QuizQuestion["type"], string> = {
  "multiple-choice": "Multiple Choice",
  "fill-blank": "Fill in the Blank",
  "translate-bn-en": "Bengali → English Translation",
  "correct-sentence": "Sentence Correction",
};

export function QuizRunner({
  day,
  questions,
}: {
  day: number;
  questions: QuizQuestion[];
}) {
  const { toast } = useToast();
  const { submitQuiz } = useLearning();
  const [answers, setAnswers] = React.useState<Record<string, string>>({});
  const [submitting, setSubmitting] = React.useState(false);
  const [result, setResult] = React.useState<{
    score: number;
    total: number;
    percent: number;
    passed: boolean;
    results: GradedQuestion[];
  } | null>(null);

  const answeredCount = questions.filter((q) => (answers[q.id] ?? "").trim().length > 0).length;
  const allAnswered = answeredCount === questions.length;

  function setAnswer(id: string, value: string) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function handleSubmit() {
    if (!allAnswered) {
      toast("Please answer all questions before submitting.", "info");
      return;
    }
    setSubmitting(true);
    try {
      const res = submitQuiz(
        day,
        questions.map((q) => ({ questionId: q.id, value: answers[q.id] ?? "" })),
        questions
      );
      if (res.success && res.data) {
        setResult(res.data);
        toast(res.message ?? "Quiz submitted.", res.data.passed ? "success" : "info");
      } else if (!res.success) {
        toast(res.error, "error");
      }
    } finally {
      setSubmitting(false);
    }
  }

  function handleRetry() {
    setResult(null);
    setAnswers({});
  }

  const resultById = new Map((result?.results ?? []).map((r) => [r.questionId, r]));

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-xs sm:text-sm font-semibold text-brand-navy-600">
          {answeredCount} of {questions.length} Questions Answered
        </p>
        <p className="text-xs font-bold text-brand-mint-700">
          Pass Threshold = {QUIZ_PASS_THRESHOLD}%
        </p>
      </div>

      <ol className="space-y-5">
        {questions.map((q, index) => {
          const graded = resultById.get(q.id);
          const given = answers[q.id] ?? "";
          return (
            <li key={q.id} className="rounded-2xl border border-brand-navy-800/10 bg-brand-surface p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-navy-800 text-xs font-bold text-white">
                  {index + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[0.65rem] font-bold uppercase tracking-wider text-brand-mint-700">
                    {TYPE_LABEL[q.type]}
                  </p>
                  <p className="font-bangla mt-1 text-base font-semibold leading-7 text-brand-navy-900">
                    {q.promptBn}
                  </p>
                  {q.promptEn && <p className="mt-0.5 text-sm text-brand-navy-600">{q.promptEn}</p>}

                  <div className="mt-3">
                    {q.type === "multiple-choice" ? (
                      <div className="grid gap-2 sm:grid-cols-2">
                        {(q.options ?? []).map((opt) => {
                          const chosen = given === opt.key;
                          const showCorrect = graded && opt.key === q.answer;
                          const showWrong = graded && chosen && !graded.correct;
                          return (
                            <button
                              key={opt.key}
                              type="button"
                              disabled={Boolean(result)}
                              onClick={() => setAnswer(q.id, opt.key)}
                              className={cn(
                                "flex items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-left text-sm font-medium transition-all disabled:cursor-default",
                                showCorrect
                                  ? "border-brand-mint bg-brand-mint-100 text-brand-mint-800 font-semibold"
                                  : showWrong
                                    ? "border-brand-rose bg-brand-rose-100 text-brand-rose-600"
                                    : chosen
                                      ? "border-brand-mint bg-brand-mint-100 text-brand-navy-900"
                                      : "border-brand-navy-800/15 bg-white text-brand-navy-800 hover:border-brand-mint"
                              )}
                            >
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current text-[0.7rem] font-bold">
                                {opt.key.toUpperCase()}
                              </span>
                              <span className="font-bangla">{opt.text}</span>
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <Input
                        value={given}
                        disabled={Boolean(result)}
                        onChange={(e) => setAnswer(q.id, e.target.value)}
                        placeholder="Type your English answer here…"
                        aria-label={`Question ${index + 1} answer`}
                        invalid={graded ? !graded.correct : false}
                      />
                    )}
                  </div>

                  {graded && (
                    <div
                      className={cn(
                        "mt-3 rounded-xl px-3.5 py-3 text-sm leading-6",
                        graded.correct
                          ? "bg-brand-mint-100 text-brand-mint-800"
                          : "bg-brand-rose-100 text-brand-rose-600"
                      )}
                    >
                      <p className="flex items-center gap-1.5 font-bold">
                        {graded.correct ? (
                          <CheckCircle2 className="h-4 w-4" aria-hidden />
                        ) : (
                          <XCircle className="h-4 w-4" aria-hidden />
                        )}
                        {graded.correct ? "Correct! (সঠিক)" : `Correct Answer: ${graded.correctAnswer}`}
                      </p>
                      <p className="font-bangla mt-1 text-xs sm:text-sm">{q.explanationBn}</p>
                    </div>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <div aria-live="polite" className="mt-6">
        {result && (
          <div
            className={cn(
              "mb-4 flex flex-wrap items-center gap-4 rounded-2xl border p-4 sm:p-5",
              result.passed ? "border-brand-mint-200 bg-brand-mint-50/80" : "border-brand-amber-200 bg-brand-amber-50/80"
            )}
          >
            <span
              className={cn(
                "flex h-14 w-14 items-center justify-center rounded-2xl",
                result.passed ? "bg-brand-mint text-white" : "bg-brand-amber text-white"
              )}
            >
              {result.passed ? (
                <Trophy className="h-7 w-7" aria-hidden />
              ) : (
                <Info className="h-7 w-7" aria-hidden />
              )}
            </span>
            <div className="min-w-0">
              <p
                className={cn(
                  "text-lg font-bold",
                  result.passed ? "text-brand-mint-800" : "text-brand-amber-800"
                )}
              >
                {result.passed ? "Congratulations! Quiz Passed! 🎉" : "Almost there! Review & retry."}
              </p>
              <p className="text-xs sm:text-sm text-brand-navy-700">
                Score: {result.score} of {result.total} ({result.percent}%) · Passing requirement: {QUIZ_PASS_THRESHOLD}%
              </p>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          {!result ? (
            <Button onClick={handleSubmit} loading={submitting} size="lg">
              Submit Quiz Answers
            </Button>
          ) : (
            <Button onClick={handleRetry} variant="secondary" size="lg">
              <RotateCcw className="h-4 w-4" /> Retry Quiz
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
