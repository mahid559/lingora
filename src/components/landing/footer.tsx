import Link from "next/link";
import { LogoMark } from "@/components/brand/logo";

const PRODUCT_LINKS = [
  { href: "/roadmap", label: "60-Day Course (৬০ দিনের কোর্স)" },
  { href: "/roadmap-90", label: "90-Day Advanced (৯০ দিনের রোডম্যাপ)" },
  { href: "/ielts", label: "IELTS Prep Hub (আইইএলটিএস হাব)" },
  { href: "/vocabulary", label: "Vocabulary Notebook" },
  { href: "/progress", label: "Progress & Achievements" },
];

const LEARN_LINKS = [
  { href: "/lessons/1", label: "Day 1 — Sentence Structure" },
  { href: "/lessons/3", label: "Day 3 — Am, Is, Are" },
  { href: "/lessons/5", label: "Day 5 — Present Simple" },
  { href: "/lessons/10", label: "Day 10 — Self Introduction" },
];

export function Footer() {
  return (
    <footer className="bg-brand-navy-900 text-brand-mint-100/70">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1.2fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark />
              <span className="text-lg font-extrabold tracking-tight text-white">LINGORA</span>
            </div>
            <p className="mt-4 max-w-xs font-bangla text-sm leading-6">
              বাংলাভাষীদের জন্য জিরো থেকে অ্যাডভান্সড ও আইইএলটিএস ইংরেজি শেখার সম্পূর্ণ প্ল্যাটফর্ম।
            </p>
          </div>

          <nav aria-label="Curriculums & Products">
            <p className="mb-3 text-sm font-bold text-white">Programs & Tracks</p>
            <ul className="space-y-2 text-sm">
              {PRODUCT_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-brand-mint-100">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="নমুনা পাঠ">
            <p className="mb-3 text-sm font-bold text-white">নমুনা পাঠ</p>
            <ul className="space-y-2 text-sm">
              {LEARN_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-brand-mint-100">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-3 text-sm font-bold text-white">অ্যাকাউন্ট</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/register" className="transition-colors hover:text-brand-mint-100">
                  বিনামূল্যে সাইন আপ
                </Link>
              </li>
              <li>
                <Link href="/login" className="transition-colors hover:text-brand-mint-100">
                  লগইন
                </Link>
              </li>
              <li>
                <Link href="/forgot-password" className="transition-colors hover:text-brand-mint-100">
                  পাসওয়ার্ড ভুলে গেছেন?
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} LINGORA · Learn English, One Day at a Time.</p>
          <p className="font-bangla">ইংরেজি শিখুন, দিনে একটি করে পাঠে।</p>
        </div>
      </div>
    </footer>
  );
}