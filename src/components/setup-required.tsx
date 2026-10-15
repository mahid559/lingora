import Link from "next/link";
import { Database, Settings2, BookOpenText } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Honest degraded-mode screen shown on protected routes when Supabase
 * credentials are missing. The full curriculum is still readable here —
 * we never fake persistence, we explain exactly what to configure.
 */
export function SetupRequired({ feature }: { feature: string }) {
  return (
    <div className="flex min-h-screen flex-col bg-brand-cream">
      <header className="container-page flex h-16 items-center justify-between">
        <Logo withTagline />
        <ButtonLink href="/" variant="ghost" size="sm">
          হোম
        </ButtonLink>
      </header>

      <main id="main" className="container-page flex flex-1 items-center justify-center pb-20 pt-4">
        <Card className="w-full max-w-2xl">
          <CardContent className="sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-amber-100 text-brand-amber-600">
                <Database className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-amber-600">
                  Setup Required
                </p>
                <h1 className="font-bangla text-xl font-bold text-brand-navy-900">
                  সেটআপ শেষ হয়নি — {feature}
                </h1>
              </div>
            </div>

            <p className="mt-5 font-bangla text-[0.95rem] leading-7 text-brand-navy-700">
              LINGORA সত্যিকারের অথেন্টিকেশন ও ডেটা সংরক্ষণের জন্য Supabase ব্যবহার করে।
              এই মুহূর্তে <code className="rounded bg-brand-navy/5 px-1">NEXT_PUBLIC_SUPABASE_URL</code> ও{" "}
              <code className="rounded bg-brand-navy/5 px-1">NEXT_PUBLIC_SUPABASE_ANON_KEY</code>{" "}
              সেট করা নেই, তাই এই পেজটি কাজ করার জন্য ডেটাবেজ সংযোগ দরকার। আমরা পরিবর্তে
              ভুয়া ডেটা দেখাই না — নিচের ধাপগুলো অনুসরণ করুন।
            </p>

            <ol className="mt-6 space-y-3">
              <SetupStep
                icon={Settings2}
                title="১. Supabase প্রজেক্ট তৈরি করুন"
                text="supabase.com-এ একটি ফ্রি প্রজেক্ট খুলুন এবং Settings → API থেকে URL ও anon key কপি করুন।"
              />
              <SetupStep
                icon={Database}
                title="২. এনভায়রনমেন্ট ভেরিয়েবল বসান"
                text="প্রজেক্টের রুটে .env.local ফাইল তৈরি করে NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY ও SUPABASE_SERVICE_ROLE_KEY দিন।"
              />
              <SetupStep
                icon={BookOpenText}
                title="৩. মাইগ্রেশন ও সিড চালান"
                text="supabase/migrations-এর SQL চালান, তারপর npm run seed দিয়ে ৬০ দিনের কন্টেন্ট ডেটাবেজে বসান।"
              />
            </ol>

            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/roadmap">৬০ দিনের কন্টেন্ট দেখুন</ButtonLink>
              <ButtonLink href="/" variant="outline">
                হোমে ফিরুন
              </ButtonLink>
            </div>
            <p className="mt-4 text-xs leading-5 text-brand-navy-600">
              পূর্ণ নির্দেশনা:{" "}
              <Link href="/" className="font-semibold text-brand-mint-700 underline">
                docs/SETUP.md
              </Link>{" "}
              (রিপোজিটরিতে)।
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

function SetupStep({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Database;
  title: string;
  text: string;
}) {
  return (
    <li className="flex gap-3 rounded-xl border border-brand-navy-800/10 bg-brand-surface p-3.5">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-mint-700" aria-hidden />
      <div>
        <p className="font-bangla text-sm font-bold text-brand-navy-900">{title}</p>
        <p className="mt-0.5 font-bangla text-sm leading-6 text-brand-navy-600">{text}</p>
      </div>
    </li>
  );
}
