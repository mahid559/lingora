import { weekdayShort, weekdayShortEn, toBanglaDigits, relativeDayBn, relativeDayEn } from "@/lib/dates";
import type { WeekDayActivity } from "@/lib/view-types";
import { cn } from "@/lib/utils";

/** Accessible, table-free weekly activity bars (CSS heights). */
export function WeeklyBars({
  days,
  metric = "minutes",
  lang = "en",
  className,
}: {
  days: WeekDayActivity[];
  metric?: "minutes" | "lessons";
  lang?: "en" | "bn";
  className?: string;
}) {
  const values = days.map((d) => (metric === "minutes" ? d.minutes : d.lessons));
  const max = Math.max(1, ...values);

  return (
    <div className={cn("grid grid-cols-7 items-end gap-2", className)}>
      {days.map((day) => {
        const value = metric === "minutes" ? day.minutes : day.lessons;
        const height = value === 0 ? 6 : Math.max(12, Math.round((value / max) * 100));
        const active = value > 0;
        const valueLabel = value > 0 ? (lang === "bn" ? toBanglaDigits(value) : String(value)) : "";
        const ariaLabel =
          lang === "bn"
            ? `${relativeDayBn(day.date)}: ${toBanglaDigits(value)} ${metric === "minutes" ? "মিনিট" : "পাঠ"}`
            : `${relativeDayEn(day.date)}: ${value} ${metric === "minutes" ? "mins" : "lessons"}`;
        const dayLabel = lang === "bn" ? weekdayShort(day.date) : weekdayShortEn(day.date);

        return (
          <div key={day.date} className="flex flex-col items-center gap-1.5">
            <span className="text-[0.65rem] font-bold text-brand-navy-600">
              {valueLabel}
            </span>
            <div className="flex h-24 w-full items-end">
              <div
                role="img"
                aria-label={ariaLabel}
                className={cn(
                  "w-full rounded-t-lg transition-all",
                  active ? "bg-brand-mint" : "bg-brand-navy/10"
                )}
                style={{ height: `${height}%` }}
              />
            </div>
            <span className={cn("text-[0.65rem] font-semibold text-brand-navy-600", lang === "bn" && "font-bangla")}>
              {dayLabel}
            </span>
          </div>
        );
      })}
    </div>
  );
}

