import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLessonByDaySafe } from "@/data/lessons/index";
import { getPhaseForDay } from "@/data/phases";
import { LessonExperience } from "@/components/lessons/lesson-experience";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ day: string }>;
}): Promise<Metadata> {
  const { day } = await params;
  const lesson = getLessonByDaySafe(Number(day));
  if (!lesson) return { title: "পাঠ পাওয়া যায়নি" };
  return {
    title: `দিন ${lesson.day} — ${lesson.titleBn}`,
    description: `${lesson.title} — ${lesson.objectives[0] ?? ""}`,
  };
}

export default async function LessonPage({ params }: { params: Promise<{ day: string }> }) {
  const { day: dayParam } = await params;
  const day = Number(dayParam);
  const lesson = Number.isInteger(day) ? getLessonByDaySafe(day) : null;
  if (!lesson) notFound();

  const phase = getPhaseForDay(day);

  // The lesson content is static and rendered from the server; completion,
  // unlock rules and saved-word state are evaluated client-side from
  // localStorage, so no account or session is required to open a lesson.
  return (
    <LessonExperience
      lesson={lesson}
      phaseTitleBn={`ধাপ ${phase.number} — ${phase.titleBn}`}
    />
  );
}