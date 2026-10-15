/**
 * Streak mathematics.
 *
 * Definitions (documented in design.md §4.2):
 * - Activity day = a YYYY-MM-DD string (device-local) on which the user
 *   completed a lesson or took a quiz.
 * - Current streak = the run of consecutive activity days ending at the
 *   user's most recent activity day (so it stays timezone-correct even when
 *   the server's clock differs from the user's).
 * - Longest streak = the longest run anywhere in history. A gap of one or
 *   more missing days breaks a run.
 *
 * These helpers are pure and unit-testable; the DB only stores the raw
 * activity dates.
 */

/** Parse YYYY-MM-DD to an integer for arithmetic (bytes, not Date — tz-safe). */
function dayNumber(dateString: string): number {
  return Date.parse(dateString + "T00:00:00Z") / 86400000;
}

/** 0 = today(new Date) semantics not needed — we work purely on stored dates. */
export function computeStreaks(activityDates: string[]): { current: number; longest: number } {
  const dates = Array.from(new Set(activityDates.filter(Boolean))).sort();
  if (dates.length === 0) return { current: 0, longest: 0 };

  // Longest run
  let longest = 1;
  let run = 1;
  for (let i = 1; i < dates.length; i += 1) {
    if (dayNumber(dates[i]) === dayNumber(dates[i - 1]) + 1) {
      run += 1;
      if (run > longest) longest = run;
    } else {
      run = 1;
    }
  }

  // Current run ending at the most recent activity day
  let current = 1;
  for (let i = dates.length - 1; i > 0; i -= 1) {
    if (dayNumber(dates[i]) === dayNumber(dates[i - 1]) + 1) {
      current += 1;
    } else {
      break;
    }
  }

  return { current, longest };
}

/**
 * Whether the user's most recent activity day is today (device-local).
 * Used to show "at risk" vs "active" streak states.
 */
export function isActiveToday(activityDates: string[], todayLocal: string): boolean {
  const dates = Array.from(new Set(activityDates.filter(Boolean))).sort();
  return dates[dates.length - 1] === todayLocal;
}