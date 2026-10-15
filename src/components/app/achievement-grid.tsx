import { Lock } from "lucide-react";
import { ACHIEVEMENT_CATALOG, type AchievementType } from "@/lib/achievements";
import { toBanglaDigits } from "@/lib/dates";
import { cn } from "@/lib/utils";

/** Full badge gallery: earned badges are coloured, locked ones dimmed. */
export function AchievementGrid({
  earned,
  className,
  columns,
}: {
  earned: { type: AchievementType; awardedAt: string }[];
  className?: string;
  columns?: boolean;
}) {
  const earnedMap = new Map(earned.map((e) => [e.type, e.awardedAt]));
  const earnedCount = earnedMap.size;

  return (
    <div className={className}>
      <p className="mb-4 text-sm font-medium text-brand-navy-600">
        <span className="font-bold text-brand-navy-900">{earnedCount}</span> of{" "}
        <span className="font-bold text-brand-navy-900">{ACHIEVEMENT_CATALOG.length}</span> Badges Earned
      </p>
      <ul className={cn("grid gap-3", columns ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3")}>
        {ACHIEVEMENT_CATALOG.map((badge) => {
          const earnedAt = earnedMap.get(badge.type);
          const isEarned = Boolean(earnedAt);
          const Icon = badge.icon;
          return (
            <li
              key={badge.type}
              className={cn(
                "flex items-start gap-3 rounded-xl border p-3.5 transition-all",
                isEarned
                  ? "border-brand-mint-200 bg-brand-mint-50/70 shadow-sm"
                  : "border-brand-navy-800/10 bg-brand-surface opacity-75"
              )}
            >
              <span
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-sm",
                  isEarned ? "bg-brand-mint text-white" : "bg-brand-navy/10 text-brand-navy-600"
                )}
              >
                {isEarned ? <Icon className="h-5 w-5" aria-hidden /> : <Lock className="h-4 w-4" aria-hidden />}
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <p className="text-sm font-bold text-brand-navy-900">{badge.title}</p>
                  <span className="text-xs font-bangla text-brand-mint-700">({badge.titleBn})</span>
                </div>
                <p className="mt-0.5 text-xs text-brand-navy-700">
                  {badge.description}
                </p>
                <p className="font-bangla text-[0.7rem] text-brand-navy-600/80">
                  {badge.descriptionBn}
                </p>
                {!isEarned && (
                  <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-wider text-brand-navy-600">
                    Locked
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
