import type { LucideIcon } from "lucide-react";
import {
  Award,
  BookOpenCheck,
  CalendarCheck2,
  CalendarDays,
  CheckCircle2,
  Flame,
  Flag,
  Sparkles,
  Trophy,
  Library,
} from "lucide-react";

export type AchievementType =
  | "first-lesson"
  | "day-10"
  | "day-20"
  | "day-30"
  | "day-40"
  | "day-50"
  | "course-complete"
  | "quiz-pass"
  | "streak-7"
  | "streak-30"
  | "vocab-10"
  | "vocab-25";

export interface AchievementMeta {
  type: AchievementType;
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
  icon: LucideIcon;
}

export const ACHIEVEMENT_CATALOG: AchievementMeta[] = [
  {
    type: "first-lesson",
    title: "First Step",
    titleBn: "প্রথম পদক্ষেপ",
    description: "Complete your first lesson.",
    descriptionBn: "আপনার প্রথম পাঠ সম্পন্ন করেছেন।",
    icon: Sparkles,
  },
  {
    type: "day-10",
    title: "Foundation Builder",
    titleBn: "ভিত্তি নির্মাতা",
    description: "Complete 10 days — Phase 1 finished.",
    descriptionBn: "১০ দিন সম্পন্ন — প্রথম ধাপ শেষ!",
    icon: Flag,
  },
  {
    type: "day-20",
    title: "Grammar Explorer",
    titleBn: "ব্যাকরণ অভিযাত্রী",
    description: "Complete 20 days — essential grammar done.",
    descriptionBn: "২০ দিন সম্পন্ন — প্রয়োজনীয় ব্যাকরণ শেষ!",
    icon: BookOpenCheck,
  },
  {
    type: "day-30",
    title: "Confidence Spark",
    titleBn: "আত্মবিশ্বাসের আলো",
    description: "Complete 30 days — halfway in spirit.",
    descriptionBn: "৩০ দিন সম্পন্ন — আত্মবিশ্বাসের ধাপ শেষ!",
    icon: CalendarCheck2,
  },
  {
    type: "day-40",
    title: "Everyday Speaker",
    titleBn: "দৈনন্দিন কথক",
    description: "Complete 40 days — daily life in English.",
    descriptionBn: "৪০ দিন সম্পন্ন — দৈনন্দিন জীবনে ইংরেজি!",
    icon: CalendarDays,
  },
  {
    type: "day-50",
    title: "Fluency Climber",
    titleBn: "সাবলীলতার পথে",
    description: "Complete 50 days — fluency phase done.",
    descriptionBn: "৫০ দিন সম্পন্ন — সাবলীলতার যাত্রা শেষ ধাপে!",
    icon: Flame,
  },
  {
    type: "course-complete",
    title: "Lingora Graduate",
    titleBn: "লিঙ্গোরা স্নাতক",
    description: "Complete all 60 days. Amazing!",
    descriptionBn: "৬০ দিন সম্পূর্ণ — অভিনন্দন, আপনি স্নাতক!",
    icon: Trophy,
  },
  {
    type: "quiz-pass",
    title: "Quiz Master",
    titleBn: "কুইজ মাস্টার",
    description: "Pass a quiz with 70% or more.",
    descriptionBn: "৭০%-এর বেশি স্কোর নিয়ে একটি কুইজ পাস করেছেন।",
    icon: CheckCircle2,
  },
  {
    type: "streak-7",
    title: "7-Day Streak",
    titleBn: "৭ দিনের ধারাবাহিকতা",
    description: "Practice 7 days in a row.",
    descriptionBn: "টানা ৭ দিন অনুশীলন করেছেন।",
    icon: Flame,
  },
  {
    type: "streak-30",
    title: "Iron Streak",
    titleBn: "লোহার ধারাবাহিকতা",
    description: "Practice 30 days in a row.",
    descriptionBn: "টানা ৩০ দিন অনুশীলন — অসাধারণ!",
    icon: Trophy,
  },
  {
    type: "vocab-10",
    title: "Word Collector",
    titleBn: "শব্দ সংগ্রহকারী",
    description: "Save 10 vocabulary words.",
    descriptionBn: "১০টি শব্দ সংগ্রহ করেছেন।",
    icon: Library,
  },
  {
    type: "vocab-25",
    title: "Word Expert",
    titleBn: "শব্দ বিশেষজ্ঞ",
    description: "Save 25 vocabulary words.",
    descriptionBn: "২৫টি শব্দ সংগ্রহ করেছেন।",
    icon: Award,
  },
];

export function getAchievementMeta(type: AchievementType): AchievementMeta {
  const meta = ACHIEVEMENT_CATALOG.find((a) => a.type === type);
  if (!meta) throw new Error(`Unknown achievement ${type}`);
  return meta;
}

/** Milestone achievements awarded when the completed-lesson count crosses thresholds. */
export function completionMilestones(): { day: number; type: AchievementType }[] {
  return [
    { day: 1, type: "first-lesson" },
    { day: 10, type: "day-10" },
    { day: 20, type: "day-20" },
    { day: 30, type: "day-30" },
    { day: 40, type: "day-40" },
    { day: 50, type: "day-50" },
    { day: 60, type: "course-complete" },
  ];
}

export const QUIZ_PASS_THRESHOLD = 70;