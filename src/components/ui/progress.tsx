import { cn } from "@/lib/utils";

export function Progress({
  value,
  max = 100,
  label,
  className,
  barClassName,
}: {
  value: number;
  max?: number;
  label?: string;
  className?: string;
  barClassName?: string;
}) {
  const percent = Math.min(100, Math.max(0, (value / Math.max(1, max)) * 100));
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-label={label}
      className={cn("h-2.5 w-full overflow-hidden rounded-full bg-brand-navy/10", className)}
    >
      <div
        className={cn(
          "h-full rounded-full bg-brand-mint transition-all duration-500 ease-out",
          barClassName
        )}
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}