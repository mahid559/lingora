import Link from "next/link";
import { SearchX } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-cream">
      <header className="container-page flex h-16 items-center justify-between">
        <Logo withTagline />
        <ButtonLink href="/" variant="ghost" size="sm">
          হোম
        </ButtonLink>
      </header>

      <main id="main" className="container-page flex flex-1 flex-col items-center justify-center gap-5 pb-20 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-mint-100 text-brand-mint-700">
          <SearchX className="h-8 w-8" aria-hidden />
        </span>
        <h1 className="font-bangla text-3xl font-bold text-brand-navy-900">পেজটি পাওয়া যায়নি</h1>
        <p className="font-bangla max-w-md text-sm leading-6 text-brand-navy-600">
          আপনি যে ঠিকানায় যেতে চেয়েছেন সেটি নেই, বা সরিয়ে দেওয়া হয়েছে।
          হোমপেজ থেকে আবার শুরু করুন।
        </p>
        <div className="flex gap-3">
          <ButtonLink href="/">হোমে যান</ButtonLink>
          <ButtonLink href="/roadmap" variant="outline">
            ৬০ দিনের রোডম্যাপ
          </ButtonLink>
        </div>
        <Link href="/" className="font-bangla text-sm font-semibold text-brand-mint-700 hover:underline">
          lingora — Learn English, One Day at a Time
        </Link>
      </main>
    </div>
  );
}