"use client";

import * as React from "react";
import Link from "next/link";
import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Headphones,
  Heart,
  Lightbulb,
  ListChecks,
  MessageSquareQuote,
  NotebookPen,
  SpellCheck,
  Star,
  Target,
  Volume2,
  ArrowRight,
  ArrowLeft,
  Lock,
} from "lucide-react";
import type { Exercise, LessonDay } from "@/data/types";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonLink } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CardSkeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/toaster";
import { QuizRunner } from "@/components/lessons/quiz-runner";
import { lessons } from "@/data/lessons/index";
import { useLearning } from "@/lib/learning-context";
import { toBanglaDigits } from "@/lib/dates";
import { cn } from "@/lib/utils";

const LEVEL_LABEL = { 1: "A1 Beginner", 2: "A2 Elementary", 3: "B1 Intermediate" } as const;

const EXERCISE_META: Record<
  Exercise["type"],
  { label: string; icon: typeof Headphones; tone: string }
> = {
  speaking: { label: "Speaking Drill", icon: Headphones, tone: "text-brand-amber-600 bg-brand-amber-100" },
  pronunciation: { label: "Pronunciation Guide", icon: Volume2, tone: "text-brand-blue-600 bg-brand-blue-100" },
  listening: { label: "Listening Comprehension", icon: BookOpen, tone: "text-brand-blue-600 bg-brand-blue-100" },
  reading: { label: "Reading Practice", icon: BookOpen, tone: "text-brand-mint-700 bg-brand-mint-100" },
  writing: { label: "Writing Challenge", icon: NotebookPen, tone: "text-brand-navy-800 bg-brand-navy/10" },
};

export interface LessonExperienceProps {
  lesson: LessonDay;
  phaseTitleBn: string;
}

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "grammar", label: "Grammar" },
  { id: "vocab", label: "Vocabulary" },
  { id: "sentences", label: "Sentences" },
  { id: "exercises", label: "Exercises" },
  { id: "homework", label: "Homework" },
  { id: "quiz", label: "Quiz" },
];

export function LessonExperience({ lesson, phaseTitleBn }: LessonExperienceProps) {
  const { toast } = useToast();
  const { ready, isCompleted, isUnlocked, savedWords, completeLesson, setWordState } = useLearning();
  const [completing, setCompleting] = React.useState(false);

  const completed = isCompleted(lesson.day);
  const wordStates = savedWords;
  const previousDay = lesson.day > 1 ? lesson.day - 1 : null;
  const nextDay = lesson.day < lessons.length ? lesson.day + 1 : null;

  function handleComplete() {
    setCompleting(true);
    try {
      const res = completeLesson(lesson.day);
      if (res.success) {
        toast(res.message ?? "পাঠ সম্পন্ন হয়েছে।");
        if (res.data?.newlyAwarded.length) {
          toast("নতুন ব্যাজ অর্জিত! 🎉", "success");
        }
      } else {
        toast(res.error, "error");
      }
    } finally {
      setCompleting(false);
    }
  }

  function toggleWord(wordKey: string, flags: { favorite?: boolean; learned?: boolean }) {
    const res = setWordState(wordKey, flags);
    if (!res.success) toast(res.error ?? "অবস্থা আপডেট করা যায়নি।", "error");
  }

  if (!ready) {
    return (
      <div className="space-y-6">
        <CardSkeleton className="h-48" />
        <CardSkeleton className="h-40" />
        <CardSkeleton className="h-64" />
      </div>
    );
  }

  if (!isUnlocked(lesson.day) && !completed) {
    return (
      <div className="mx-auto max-w-xl">
        <Card>
          <CardContent className="flex flex-col items-center gap-4 py-10 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-amber-100 text-brand-amber-600">
              <Lock className="h-8 w-8" aria-hidden />
            </span>
            <div>
              <h1 className="text-xl font-bold text-brand-navy-900">
                This Lesson is Locked
              </h1>
              <p className="font-bangla mt-2 text-sm leading-6 text-brand-navy-600">
                দিন {lesson.day} খুলতে হলে আগে দিন {lesson.day - 1} সম্পন্ন করুন। ধাপে ধাপে এগোলেই শেখা টেকসই হয়।
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <ButtonLink href={`/lessons/${lesson.day - 1}`}>
                Go to Day {lesson.day - 1}
              </ButtonLink>
              <ButtonLink href="/roadmap" variant="outline">
                View Roadmap
              </ButtonLink>
            </div>
            <Link
              href="/dashboard"
              className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-mint-700 hover:underline"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Dashboard
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Lesson header */}
      <div className="overflow-hidden rounded-2xl border border-brand-navy-800/10 bg-brand-navy-800 shadow-card">
        <div className="p-5 sm:p-7">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="mint">
              Day {lesson.day}
            </Badge>
            <Badge variant="neutral" className="bg-white/10 text-brand-mint-100">
              {LEVEL_LABEL[lesson.level]}
            </Badge>
            <Badge variant="neutral" className="bg-white/10 text-brand-mint-100">
              <Headphones className="h-3.5 w-3.5" /> {lesson.durationMinutes} mins
            </Badge>
            <Badge variant="neutral" className="bg-white/10 text-brand-mint-100">
              Phase {Math.ceil(lesson.day / 10)} · {phaseTitleBn}
            </Badge>
            {completed && (
              <Badge variant="mint">
                <CheckCircle2 className="h-3.5 w-3.5" /> Completed
              </Badge>
            )}
          </div>
          <h1 className="font-bangla mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {lesson.titleBn}
          </h1>
          <p className="mt-1 text-base font-medium text-brand-mint-100/85">{lesson.title}</p>
        </div>

        {/* Objectives */}
        <div className="border-t border-white/10 bg-brand-navy-900/60 p-5 sm:px-7">
          <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-mint-100/70">
            <Target className="h-4 w-4" /> Learning Objectives · এই পাঠ শেষে আপনি পারবেন
          </p>
          <ul className="mt-2.5 grid gap-1.5 sm:grid-cols-2">
            {lesson.objectives.map((obj, i) => (
              <li key={i} className="font-bangla flex items-start gap-2 text-sm leading-6 text-brand-mint-100/90">
                <ChevronRight className="mt-1 h-3.5 w-3.5 shrink-0 text-brand-mint" aria-hidden />
                {obj}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* In-page nav */}
      <nav aria-label="Lesson sections" className="sticky top-14 z-20 -mx-4 border-b border-brand-navy-800/10 bg-brand-cream/95 px-4 backdrop-blur lg:top-0 lg:mx-0 lg:rounded-xl lg:border lg:px-2">
        <ul className="no-scrollbar flex gap-1 overflow-x-auto py-2">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="inline-block whitespace-nowrap rounded-lg px-3 py-1.5 text-xs sm:text-sm font-semibold text-brand-navy-700 hover:bg-brand-mint-100 hover:text-brand-mint-800"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Intro */}
      <section id="overview" className="scroll-mt-32 lg:scroll-mt-24">
        <SectionCard icon={Lightbulb} title="Lesson Overview · সূচনা">
          <div className="prose-lesson font-bangla">
            {lesson.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </SectionCard>
      </section>

      {/* Grammar */}
      {lesson.grammar && (
        <section id="grammar" className="scroll-mt-32 lg:scroll-mt-24">
          <SectionCard icon={SpellCheck} title={`Grammar Formula · ব্যাকরণ — ${lesson.grammar.title}`}>
            <p className="font-bangla text-[1.0625rem] leading-8 text-brand-navy-800">
              {lesson.grammar.explanationBn}
            </p>

            {lesson.grammar.patterns && lesson.grammar.patterns.length > 0 && (
              <div className="mt-4 space-y-2.5">
                {lesson.grammar.patterns.map((pat, i) => (
                  <div key={i} className="rounded-xl border border-brand-navy-800/10 bg-brand-cream p-3.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-mint-700">{pat.label}</p>
                    <p className="mt-1 text-base font-bold text-brand-navy-900">{pat.template}</p>
                    <p className="font-bangla mt-1 text-sm text-brand-navy-600">{pat.bn}</p>
                  </div>
                ))}
              </div>
            )}

            {lesson.grammar.examples.length > 0 && (
              <ul className="mt-4 space-y-2">
                {lesson.grammar.examples.map((ex, i) => (
                  <li key={i} className="rounded-xl bg-brand-mint-100/60 px-3.5 py-2.5">
                    <p className="text-[0.95rem] font-semibold text-brand-navy-900">{ex.en}</p>
                    <p className="font-bangla text-sm text-brand-navy-600">{ex.bn}</p>
                  </li>
                ))}
              </ul>
            )}

            {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
              <div className="mt-5">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-brand-rose-600">
                  সাধারণ ভুল — সাবধান!
                </p>
                <ul className="space-y-2.5">
                  {lesson.commonMistakes.map((m, i) => (
                    <li key={i} className="rounded-xl border border-brand-rose-100 bg-brand-rose-100/40 p-3.5">
                      <p className="text-sm">
                        <span className="font-semibold text-brand-rose-600 line-through">{m.wrong}</span>
                        <span className="mx-2 text-brand-navy-600" aria-hidden>→</span>
                        <span className="font-semibold text-brand-mint-800">{m.right}</span>
                      </p>
                      <p className="font-bangla mt-1 text-sm leading-6 text-brand-navy-700">{m.noteBn}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </SectionCard>
        </section>
      )}

      {/* Vocabulary */}
      <section id="vocab" className="scroll-mt-32 lg:scroll-mt-24">
        <SectionCard
          icon={BookOpen}
          title={`Vocabulary Bank (${lesson.vocab.length} Words)`}
          hint="Click the star to save to your notebook; click the heart to mark as mastered."
        >
          <ul className="grid gap-3 sm:grid-cols-2">
            {lesson.vocab.map((v) => {
              const key = `${lesson.day}:${v.word.toLowerCase()}`;
              const state = wordStates[key] ?? { favorite: false, learned: false };
              return (
                <li
                  key={key}
                  className={cn(
                    "rounded-xl border p-3.5 transition-colors",
                    state.learned ? "border-brand-mint-200 bg-brand-mint-100/60" : "border-brand-navy-800/10 bg-white"
                  )}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-base font-bold text-brand-navy-900">{v.word}</p>
                      <p className="font-bangla text-sm text-brand-navy-600">{v.meaningBn}</p>
                    </div>
                    <div className="flex shrink-0 gap-1">
                      <button
                        type="button"
                        aria-label={`Save ${v.word}`}
                        aria-pressed={state.favorite}
                        onClick={() => toggleWord(key, { favorite: !state.favorite })}
                        className={cn(
                          "flex h-9 w-9 items-center justify-center rounded-lg transition-colors",
                          state.favorite
                            ? "bg-brand-rose-100 text-brand-rose"
                            : "bg-brand-navy/5 text-brand-navy-600 hover:bg-brand-navy/10"
                        )}
                      >
                        <Star className={cn("h-4 w-4", state.favorite && "fill-current")} aria-hidden />
                      </button>
                      <button
                        type="button"
                        aria-label={`Mark ${v.word} as mastered`}
                        aria-pressed={state.learned}
                        onClick={() => toggleWord(key, { learned: !state.learned })}
                        className={cn(
                          "flex h-9 w-9 items-center justify-center rounded-lg transition-colors",
                          state.learned
                            ? "bg-brand-mint text-white"
                            : "bg-brand-navy/5 text-brand-navy-600 hover:bg-brand-navy/10"
                        )}
                      >
                        <Heart className={cn("h-4 w-4", state.learned && "fill-current")} aria-hidden />
                      </button>
                    </div>
                  </div>
                  <p className="mt-2 text-sm font-medium text-brand-mint-700">{v.exampleEn}</p>
                  <p className="font-bangla text-xs leading-5 text-brand-navy-600">{v.exampleBn}</p>
                </li>
              );
            })}
          </ul>
        </SectionCard>
      </section>

      {/* Sentence practice */}
      <section id="sentences" className="scroll-mt-32 lg:scroll-mt-24">
        <SentencePractice lesson={lesson} />
      </section>

      {/* Exercises */}
      <section id="exercises" className="scroll-mt-32 lg:scroll-mt-24">
        <SectionCard icon={Headphones} title="Active Practice & Speaking Drills · বাস্তব অনুশীলন">
          <div className="space-y-4">
            {lesson.exercises.map((ex, i) => (
              <ExerciseBlock key={i} exercise={ex} />
            ))}
          </div>
        </SectionCard>
      </section>

      {/* Homework */}
      <section id="homework" className="scroll-mt-32 lg:scroll-mt-24">
        <SectionCard icon={NotebookPen} title="Daily Homework Challenge · হোমওয়ার্ক">
          <p className="font-bangla text-[1.0625rem] leading-8 text-brand-navy-800">
            {lesson.homework.instructionsBn}
          </p>
          {lesson.homework.tasks.length > 0 && (
            <ol className="mt-4 space-y-2">
              {lesson.homework.tasks.map((task, i) => (
                <li key={i} className="flex items-start gap-3 rounded-xl border border-brand-navy-800/10 bg-brand-cream p-3.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-navy-800 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-bangla text-sm font-semibold leading-6 text-brand-navy-900">{task.bn}</p>
                    {task.en && <p className="text-sm text-brand-navy-600">{task.en}</p>}
                  </div>
                </li>
              ))}
            </ol>
          )}
          {lesson.homework.answerKey && <AnswerKey en={lesson.homework.answerKey} bn={lesson.homework.answerKeyBn} />}
        </SectionCard>
      </section>

      {/* Quiz */}
      <section id="quiz" className="scroll-mt-32 lg:scroll-mt-24">
        <SectionCard icon={ListChecks} title={`Comprehension Quiz (${lesson.quiz.length} Questions)`}>
          <QuizRunner day={lesson.day} questions={lesson.quiz} />
        </SectionCard>
      </section>

      {/* Completion */}
      <Card>
        <CardContent className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-base font-bold text-brand-navy-900">
              {completed ? "Lesson Completed ✓" : "Finished the mission? Mark as complete"}
            </p>
            <p className="font-bangla mt-0.5 text-xs sm:text-sm text-brand-navy-600">
              {completed
                ? "পরের পাঠ খুলে গেছে — এগিয়ে যান।"
                : "সম্পন্ন করলে পরের দিনটি খুলে যাবে এবং স্ট্রিক বজায় থাকবে।"}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {!completed ? (
              <Button onClick={handleComplete} loading={completing} size="lg">
                <CheckCircle2 className="h-5 w-5" /> Mark Lesson Complete
              </Button>
            ) : nextDay ? (
              <ButtonLink href={`/lessons/${nextDay}`} size="lg">
                Next Lesson (Day {nextDay}) <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            ) : (
              <ButtonLink href="/progress" size="lg">
                <GraduationCap className="h-5 w-5" /> View Final Progress
              </ButtonLink>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Prev / next footer nav */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {previousDay ? (
          <ButtonLink href={`/lessons/${previousDay}`} variant="outline">
            ← Day {previousDay}
          </ButtonLink>
        ) : (
          <span />
        )}
        {nextDay ? (
          completed ? (
            <ButtonLink href={`/lessons/${nextDay}`} variant="secondary">
              Day {nextDay} →
            </ButtonLink>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-navy-600">
              <Lock className="h-4 w-4" aria-hidden /> Complete Day {lesson.day} to unlock Day {nextDay}
            </span>
          )
        ) : null}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function SectionCard({
  icon: Icon,
  title,
  hint,
  children,
}: {
  icon: typeof BookOpen;
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-bangla flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-mint-100 text-brand-mint-700">
            <Icon className="h-4 w-4" aria-hidden />
          </span>
          {title}
        </CardTitle>
        {hint && <p className="font-bangla text-sm text-brand-navy-600">{hint}</p>}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

function SentencePractice({ lesson }: { lesson: LessonDay }) {
  const [revealed, setRevealed] = React.useState<Set<number>>(new Set());
  function toggle(i: number) {
    setRevealed((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }
  return (
    <SectionCard
      icon={MessageSquareQuote}
      title={`Sentence Building Practice · বাংলা → ইংরেজি (${lesson.sentences.length} Sentences)`}
      hint="Try translating and speaking the sentence out loud before revealing the English answer."
    >
      <ul className="space-y-2.5">
        {lesson.sentences.map((pair, i) => {
          const open = revealed.has(i);
          return (
            <li key={i} className="rounded-xl border border-brand-navy-800/10 bg-white p-3.5">
              <div className="flex items-start justify-between gap-3">
                <p className="font-bangla text-base font-semibold text-brand-navy-900">{pair.bn}</p>
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={open}
                  className="shrink-0 rounded-lg bg-brand-navy/5 px-2.5 py-1 text-xs font-bold text-brand-navy-700 hover:bg-brand-navy/10"
                >
                  {open ? "Hide English" : "Show English"}
                </button>
              </div>
              {open && (
                <p className="mt-2 rounded-lg bg-brand-mint-100/60 px-3 py-2 text-base font-semibold text-brand-mint-800">
                  {pair.en}
                </p>
              )}
              {open && pair.noteBn && (
                <p className="font-bangla mt-1.5 text-xs leading-5 text-brand-navy-600">{pair.noteBn}</p>
              )}
            </li>
          );
        })}
      </ul>
    </SectionCard>
  );
}

function ExerciseBlock({ exercise }: { exercise: Exercise }) {
  const meta = EXERCISE_META[exercise.type];
  const Icon = meta.icon;
  return (
    <div className="rounded-2xl border border-brand-navy-800/10 bg-brand-cream p-4 sm:p-5">
      <div className="flex items-start gap-3">
        <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl", meta.tone)}>
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[0.65rem] font-bold uppercase tracking-wider text-brand-navy-600">{meta.label}</p>
          <p className="font-bangla text-base font-bold text-brand-navy-900">{exercise.titleBn}</p>
          <p className="text-sm text-brand-navy-600">{exercise.title}</p>
          <p className="font-bangla mt-2 text-sm leading-7 text-brand-navy-800">{exercise.instructionsBn}</p>

          {exercise.stepsBn && exercise.stepsBn.length > 0 && (
            <ol className="mt-3 space-y-1.5">
              {exercise.stepsBn.map((step, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-navy-800 text-[0.6rem] font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="font-bangla text-sm leading-6 text-brand-navy-700">{step}</span>
                </li>
              ))}
            </ol>
          )}

          {exercise.dialogue && exercise.dialogue.length > 0 && (
            <ul className="mt-3 space-y-2 rounded-xl border border-brand-navy-800/10 bg-white p-3">
              {exercise.dialogue.map((line, i) => (
                <li key={i} className="font-bangla text-sm leading-6">
                  <span className="text-brand-navy-900">{line.bn}</span>
                  <span className="mt-0.5 block text-brand-mint-700">{line.en}</span>
                </li>
              ))}
            </ul>
          )}

          {exercise.prompts && exercise.prompts.length > 0 && (
            <ul className="mt-3 flex flex-wrap gap-2">
              {exercise.prompts.map((p, i) => (
                <li key={i} className="rounded-full bg-brand-mint-100 px-3 py-1 text-sm font-medium text-brand-mint-800">
                  {p}
                </li>
              ))}
            </ul>
          )}

          {exercise.content && (
            <p className="font-bangla mt-3 whitespace-pre-line rounded-xl border border-brand-navy-800/10 bg-white p-3.5 text-sm leading-7 text-brand-navy-800">
              {exercise.content}
            </p>
          )}

          {exercise.answerKey && <AnswerKey en={exercise.answerKey} bn={exercise.answerKeyBn} />}
        </div>
      </div>
    </div>
  );
}

function AnswerKey({ en, bn }: { en: string; bn?: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="mt-3">
      <Button variant="mint-soft" size="sm" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        {open ? "Hide Answer Key" : "View Answer Key"}
      </Button>
      {open && (
        <div className="mt-2.5 rounded-xl bg-brand-mint-100 p-3.5">
          <p className="whitespace-pre-line text-sm font-semibold leading-6 text-brand-mint-800">{en}</p>
          {bn && <p className="font-bangla mt-1 text-sm leading-6 text-brand-navy-700">{bn}</p>}
        </div>
      )}
    </div>
  );
}
