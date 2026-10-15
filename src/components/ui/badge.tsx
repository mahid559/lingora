import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "mint" | "navy" | "blue" | "amber" | "neutral" | "rose";

const VARIANTS: Record<BadgeVariant, string> = {
  mint: "bg-brand-mint-100 text-brand-mint-800",
  navy: "bg-brand-navy-800 text-white",
  blue: "bg-brand-blue-100 text-brand-blue-600",
  amber: "bg-brand-amber-100 text-brand-amber-600",
  neutral: "bg-brand-navy/10 text-brand-navy-700",
  rose: "bg-brand-rose-100 text-brand-rose-600",
};

export function Badge({
  variant = "neutral",
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: BadgeVariant }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold",
        VARIANTS[variant],
        className
      )}
      {...props}
    />
  );
}