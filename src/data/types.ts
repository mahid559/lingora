/**
 * LINGORA curriculum content models.
 * These types are the single source of truth for all lesson content.
 * Every lesson in src/data/lessons/*.ts must conform to `LessonDay`.
 */

export type QuizType =
  | "multiple-choice"
  | "fill-blank"
  | "translate-bn-en"
  | "correct-sentence";

export type ExerciseType =
  | "speaking"
  | "pronunciation"
  | "listening"
  | "reading"
  | "writing";

export interface QuizOption {
  /** Short stable key, e.g. "a" */
  key: string;
  /** Displayed option text */
  text: string;
}

export interface QuizQuestion {
  /** stable unique id, e.g. "d7-q3" */
  id: string;
  type: QuizType;
  /** Question prompt in Bengali */
  promptBn: string;
  /** Optional English version of the prompt */
  promptEn?: string;
  /** Required for multiple-choice: 3–4 options */
  options?: QuizOption[];
  /** Canonical correct answer */
  answer: string;
  /** Extra accepted text answers for fill-blank / translation / correction */
  acceptableAnswers?: string[];
  /** Bengali explanation shown after grading */
  explanationBn: string;
}

export interface VocabWord {
  word: string;
  /** Bengali meaning */
  meaningBn: string;
  exampleEn: string;
  exampleBn: string;
}

export interface SentencePair {
  /** Bengali sentence */
  bn: string;
  /** English translation */
  en: string;
  /** Optional teaching note (Bengali) */
  noteBn?: string;
}

export interface GrammarExample {
  en: string;
  bn: string;
}

export interface GrammarSection {
  title: string;
  /** Bengali explanation of the rule */
  explanationBn: string;
  /** Sentence-building patterns, e.g. Subject + Am/Is/Are + ... */
  patterns?: { label: string; template: string; bn: string }[];
  examples: GrammarExample[];
}

export interface CommonMistake {
  wrong: string;
  right: string;
  /** Bengali explanation of why it is wrong and how to fix it */
  noteBn: string;
}

export interface Exercise {
  type: ExerciseType;
  title: string;
  titleBn: string;
  /** Bengali instructions */
  instructionsBn: string;
  /** Long-form content (dialogue, passage, word list, article) */
  content?: string;
  /** Dialogue or paired lines for speaking practice */
  dialogue?: SentencePair[];
  /** Step-by-step Bengali guidance for the activity */
  stepsBn?: string[];
  /** Things to practice or say */
  prompts?: string[];
  /** Answer key / model sentences in English */
  answerKey?: string;
  /** Bengali note accompanying the answer key */
  answerKeyBn?: string;
}

export interface HomeworkTask {
  bn: string;
  en?: string;
}

export interface Homework {
  instructionsBn: string;
  tasks: HomeworkTask[];
  answerKey?: string;
  answerKeyBn?: string;
}

export interface LessonDay {
  day: number;
  /** Unique English title, e.g. "Am, Is, Are" */
  title: string;
  titleBn: string;
  level: 1 | 2 | 3;
  durationMinutes: number;
  /** Bengali learning objectives */
  objectives: string[];
  /** 2–3 paragraphs of natural Bengali explanation */
  intro: string[];
  grammar?: GrammarSection;
  commonMistakes?: CommonMistake[];
  /** At least 10 vocabulary words */
  vocab: VocabWord[];
  /** At least 10 Bangla→English sentence pairs */
  sentences: SentencePair[];
  /** At least 2 exercises; one must be speaking */
  exercises: Exercise[];
  /** At least 10 quiz questions */
  quiz: QuizQuestion[];
  homework: Homework;
}

export interface Phase {
  number: number;
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
  startDay: number;
  endDay: number;
}