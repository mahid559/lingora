/**
 * Server-side input validation shared by all actions.
 * Message strings are Bengali for learners.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(email: string): string | null {
  const value = email.trim().toLowerCase();
  if (!value) return "ইমেইল ঠিকানা লিখুন।";
  if (!EMAIL_RE.test(value)) return "সঠিক ইমেইল ঠিকানা লিখুন (যেমন: name@example.com)।";
  return null;
}

/** Password policy: minimum 8 characters with at least one letter and one number. */
export function validatePassword(password: string): string | null {
  if (!password) return "পাসওয়ার্ড লিখুন।";
  if (password.length < 8) return "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।";
  if (!/[a-zA-Z]/.test(password)) return "পাসওয়ার্ডে অন্তত একটি অক্ষর (letter) থাকতে হবে।";
  if (!/\d/.test(password)) return "পাসওয়ার্ডে অন্তত একটি সংখ্যা (0–9) থাকতে হবে।";
  return null;
}

export function validateDisplayName(name: string): string | null {
  const value = name.trim();
  if (!value) return "নাম লিখুন।";
  if (value.length < 2) return "নাম কমপক্ষে ২ অক্ষরের হতে হবে।";
  if (value.length > 60) return "নাম ৬০ অক্ষরের বেশি হতে পারবে না।";
  return null;
}

/** Sanitize a short text field for storage. */
export function cleanText(value: string, maxLength = 200): string {
  return value.trim().slice(0, maxLength);
}

export function normalizeAnswer(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[.!?]+$/g, "")
    .replace(/\s+/g, " ")
    .replace(/’/g, "'");
}

/** Public error messages for common Supabase auth errors (Bengali). */
export function humanizeAuthError(code: string | undefined, message: string): string {
  const lower = (message || "").toLowerCase();
  if (lower.includes("invalid login credentials")) return "ইমেইল বা পাসওয়ার্ড সঠিক নয়। আবার চেষ্টা করুন।";
  if (lower.includes("email not confirmed")) return "ইমেইল এখনো নিশ্চিত করা হয়নি। ইনবক্সের লিংকটি খুলুন।";
  if (lower.includes("already registered") || lower.includes("already exists"))
    return "এই ইমেইলে ইতিমধ্যে একটি অ্যাকাউন্ট আছে। লগইন করুন অথবা পাসওয়ার্ড ভুলে গেলে রিসেট করুন।";
  if (lower.includes("rate limit")) return "একটু পরে আবার চেষ্টা করুন (অনেকবার চেষ্টা হয়েছে)।";
  if (lower.includes("password should be")) return "পাসওয়ার্ড যথেষ্ট শক্তিশালী নয়। ৮+ অক্ষর, একটি অক্ষর ও একটি সংখ্যা দিন।";
  if (lower.includes("user already")) return "এই ইমেইলে অ্যাকাউন্ট আগে থেকেই আছে।";
  if (code === "validation_failed") return message;
  return message;
}