import Link from "next/link";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-xl bg-brand-navy-800",
        className
      )}
    >
      <svg viewBox="0 0 64 64" className="h-5 w-5">
        <path
          d="M12 46V20l20 22 20-22v26"
          fill="none"
          stroke="#2FA77A"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function Logo({
  variant = "dark",
  withTagline = false,
  className,
}: {
  variant?: "dark" | "light";
  withTagline?: boolean;
  className?: string;
}) {
  const dark = variant === "dark";
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-2.5", className)} aria-label="LINGORA হোম">
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-lg font-extrabold tracking-tight",
            dark ? "text-brand-navy-900" : "text-white"
          )}
        >
          LINGORA
        </span>
        {withTagline && (
          <span
            className={cn(
              "mt-1 text-[0.65rem] font-medium tracking-wide",
              dark ? "text-brand-navy-600" : "text-brand-mint-100/80"
            )}
          >
            Learn English, One Day at a Time
          </span>
        )}
      </span>
    </Link>
  );
}