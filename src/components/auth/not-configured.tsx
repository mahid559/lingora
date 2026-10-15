import { Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Shown on the auth pages while the account system is still being rolled out.
 * It is intentionally reassuring, not a blocker: every learning feature works
 * right now without an account, with progress stored on this device.
 */
export function NotConfiguredNotice({
  feature,
  className,
}: {
  feature: string;
  className?: string;
}) {
  return (
    <div
      role="status"
      className={cn(
        "flex items-start gap-3 rounded-2xl border border-brand-mint-200 bg-brand-mint-100 px-4 py-3.5",
        className
      )}
    >
      <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-brand-mint-700" aria-hidden />
      <div className="font-bangla text-sm leading-6">
        <p className="font-bold text-brand-mint-800">অ্যাকাউন্ট ব্যবস্থা শীঘ্রই চালু হচ্ছে</p>
        <p className="text-brand-navy-700">
          {feature ? `${feature} এখনো যুক্ত হয়নি। ` : ""}তবে চিন্তা নেই — কোনো অ্যাকাউন্ট ছাড়াই
          পুরো ৬০ দিনের কোর্স শিখতে পারবেন।{" "}
          <Link href="/dashboard" className="font-semibold text-brand-mint-800 underline">
            শেখা শুরু করুন
          </Link>
          ।
        </p>
      </div>
    </div>
  );
}