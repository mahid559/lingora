import type { LessonDay } from "@/data/types";
import type { AchievementType } from "@/lib/achievements";
import type { Profile } from "@/lib/auth";

/** Data shapes passed between server queries and client views. */

export interface QuizSummary {
  attempts: number;
  passedAttempts: number;
  avgPercent: number;
  bestPercent: number;
}

export interface WeekDayActivity {
  date: string;
  minutes: number;
  lessons: number;
  quizzes: number;
}

export interface ActivityEvent {
  id: string;
  type: "lesson" | "quiz";
  day: number;
  title: string;
  at: string;
}

export interface DashboardChecklistItem {
  key: "lesson" | "quiz" | "minutes";
  label: string;
  done: boolean;
}

export interface DashboardData {
  completedCount: number;
  completedDays: number[];
  currentLesson: number | null;
  todayLesson: { day: number; title: string; titleBn: string; durationMinutes: number } | null;
  streak: { current: number; longest: number };
  quiz: QuizSummary;
  weekly: WeekDayActivity[];
  recent: ActivityEvent[];
  vocab: { saved: number; learned: number };
  achievements: { type: AchievementType; awardedAt: string }[];
  checklist: DashboardChecklistItem[];
  nextMilestone: { day: number; type: AchievementType } | null;
}

export interface PhaseProgress {
  phaseNumber: number;
  completed: number;
  total: number;
}

export interface QuizAttemptRow {
  id: string;
  day: number;
  title: string;
  score: number;
  total: number;
  percent: number;
  passed: boolean;
  at: string;
}

export interface ProgressData {
  completedCount: number;
  totalDays: number;
  completedDays: { day: number; at: string }[];
  streak: { current: number; longest: number };
  quizSummary: QuizSummary;
  quizHistory: QuizAttemptRow[];
  vocab: { saved: number; learned: number };
  achievements: { type: AchievementType; awardedAt: string }[];
  phases: PhaseProgress[];
  finalAssessment: { dayCompleted: boolean; quizPassRate: number; done: boolean };
  activityDays: WeekDayActivity[];
}

export interface RoadmapData {
  completedDays: number[];
}

export interface SettingsData {
  profile: Profile;
  userEmail: string;
  accountCreatedAt: string | null;
}

export interface LessonPageData {
  lesson: LessonDay;
  isCompleted: boolean;
  previousDay: number | null;
  nextDay: number | null;
  unlocked: boolean;
  attempts: { id: string; score: number; total: number; percent: number; passed: boolean; created_at: string }[];
}