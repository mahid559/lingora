import type { LessonDay } from "../types";
import { phases } from "../phases";
import { phase1 } from "./phase-01";
import { phase2 } from "./phase-02";
import { phase3 } from "./phase-03";
import { phase4 } from "./phase-04";
import { phase5 } from "./phase-05";
import { phase6 } from "./phase-06";

/**
 * The complete 60-day LINGORA curriculum.
 * Aggregated from per-phase files; content is the single source of truth.
 */
export const lessons: LessonDay[] = [
  ...phase1,
  ...phase2,
  ...phase3,
  ...phase4,
  ...phase5,
  ...phase6,
];

export const lessonCount = lessons.length;

export function getLesson(day: number): LessonDay {
  const lesson = lessons.find((l) => l.day === day);
  if (!lesson) throw new Error(`Lesson ${day} not found`);
  return lesson;
}

export function getLessonByDaySafe(day: number): LessonDay | null {
  return lessons.find((l) => l.day === day) ?? null;
}

export function getNextLesson(day: number): LessonDay | null {
  return lessons.find((l) => l.day === day + 1) ?? null;
}

export function getPreviousLesson(day: number): LessonDay | null {
  return lessons.find((l) => l.day === day - 1) ?? null;
}

export function getPhaseLessons(phaseNumber: number): LessonDay[] {
  return lessons.filter((l) => {
    const phase = phases[phaseNumber - 1];
    return phase ? l.day >= phase.startDay && l.day <= phase.endDay : false;
  });
}

export interface FlatVocabWord {
  key: string;
  day: number;
  word: string;
  meaningBn: string;
  exampleEn: string;
  exampleBn: string;
  phase: number;
}

/** Flat list of every vocabulary word in the curriculum (for /vocabulary). */
export const allVocabulary: FlatVocabWord[] = lessons.flatMap((lesson) =>
  lesson.vocab.map((v) => ({
    key: `${lesson.day}:${v.word.toLowerCase()}`,
    day: lesson.day,
    word: v.word,
    meaningBn: v.meaningBn,
    exampleEn: v.exampleEn,
    exampleBn: v.exampleBn,
    phase: Math.floor((lesson.day - 1) / 10) + 1,
  }))
);

export function getVocabularyForLesson(day: number): FlatVocabWord[] {
  return allVocabulary.filter((v) => v.day === day);
}

export const totalVocabularyCount = allVocabulary.length;