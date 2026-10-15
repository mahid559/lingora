/**
 * Date helpers for activity tracking.
 *
 * Timezone rule (documented in design.md §4.2): the "activity day" is the
 * device-local calendar date on which a tracked action happened. The client
 * computes and sends `YYYY-MM-DD`; the server stores it verbatim. Streaks are
 * therefore consistently computed in the user's own timezone without the
 * server needing to know it.
 */

/** Format a Date as YYYY-MM-DD in the caller's local timezone. */
export function toLocalDateString(date: Date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

const BANGLA_WEEKDAYS = ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"];
const BANGLA_MONTHS = [
  "জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন",
  "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর",
];

const BANGLA_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

/** Convert Latin digits to Bangla digits. */
export function toBanglaDigits(input: number | string): string {
  return String(input)
    .split("")
    .map((ch) => (/[0-9]/.test(ch) ? BANGLA_DIGITS[Number(ch)] : ch))
    .join("");
}

/** "2026-10-10" → "১০ অক্টোবর ২০২৬, শনিবার" */
export function formatDateBn(dateString: string): string {
  const [y, m, d] = dateString.split("-").map(Number);
  if (!y || !m || !d) return dateString;
  const date = new Date(y, m - 1, d);
  const weekday = BANGLA_WEEKDAYS[date.getDay()];
  return `${toBanglaDigits(d)} ${BANGLA_MONTHS[m - 1]} ${toBanglaDigits(y)}, ${weekday}`;
}

/** Compact form: "১০ অক্টোবর" */
export function formatShortDateBn(dateString: string): string {
  const [, m, d] = dateString.split("-").map(Number);
  if (!m || !d) return dateString;
  return `${toBanglaDigits(d)} ${BANGLA_MONTHS[m - 1]}`;
}

/** Last `count` local dates ending at `endDate`, oldest first. */
export function lastNDates(endDate: Date, count: number): string[] {
  const out: string[] = [];
  for (let i = count - 1; i >= 0; i -= 1) {
    const d = new Date(endDate);
    d.setDate(endDate.getDate() - i);
    out.push(toLocalDateString(d));
  }
  return out;
}

/** Day-of-week short label for a YYYY-MM-DD string. */
export function weekdayShort(dateString: string): string {
  const [y, m, d] = dateString.split("-").map(Number);
  if (!y || !m || !d) return dateString;
  const labels = ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহ", "শুক্র", "শনি"];
  return labels[new Date(y, m - 1, d).getDay()] ?? dateString;
}

/** Relative description in Bangla, e.g. "আজ", "গতকাল", "আগের দিন". */
export function relativeDayBn(dateString: string): string {
  const today = toLocalDateString();
  const yesterday = toLocalDateString(new Date(Date.now() - 86400000));
  if (dateString === today) return "আজ";
  if (dateString === yesterday) return "গতকাল";
  return formatShortDateBn(dateString);
}

/** "2026-10-10" → "Saturday, Oct 10, 2026" */
export function formatDateEn(dateString: string): string {
  const [y, m, d] = dateString.split("-").map(Number);
  if (!y || !m || !d) return dateString;
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "short", day: "numeric" });
}

/** Day-of-week short label in English (Sun, Mon, Tue...) */
export function weekdayShortEn(dateString: string): string {
  const [y, m, d] = dateString.split("-").map(Number);
  if (!y || !m || !d) return dateString;
  const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return labels[new Date(y, m - 1, d).getDay()] ?? dateString;
}

/** Relative description in English, e.g. "Today", "Yesterday", "Oct 10". */
export function relativeDayEn(dateString: string): string {
  const today = toLocalDateString();
  const yesterday = toLocalDateString(new Date(Date.now() - 86400000));
  if (dateString === today) return "Today";
  if (dateString === yesterday) return "Yesterday";
  const [y, m, d] = dateString.split("-").map(Number);
  if (!y || !m || !d) return dateString;
  return new Date(y, m - 1, d).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}