import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function StatCard({
  icon: Icon,
  label,
  value,
  hint,
  tone = "mint",
  className,
}: {
  icon: LucideIcon;
  label: string;
  value: React.ReactNode;
  hint?: string;
  tone?: "mint" | "blue" | "amber" | "navy";
  className?: string;
}) {
  const tones = {
    mint: "bg-brand-mint-100 text-brand-mint-700",
    blue: "bg-brand-blue-100 text-brand-blue-600",
    amber: "bg-brand-amber-100 text-brand-amber-600",
    navy: "bg-brand-navy/10 text-brand-navy-800",
  };
  return (
    <div
      className={cn(
        "rounded-2xl border border-brand-navy-800/10 bg-brand-surface p-4 shadow-card",
        className
      )}
    >
      <div className="flex items-center gap-2.5">
        <span className={cn("flex h-9 w-9 items-center justify-center rounded-xl", tones[tone])}>
          <Icon className="h-[18px] w-[18px]" aria-hidden />
        </span>
        <p className="font-bangla text-sm font-semibold text-brand-navy-600">{label}</p>
      </div>
      <p className="mt-3 text-3xl font-extrabold tracking-tight text-brand-navy-900">{value}</p>
      {hint && <p className="font-bangla mt-1 text-xs leading-5 text-brand-navy-600">{hint}</p>}
    </div>
  );
}
