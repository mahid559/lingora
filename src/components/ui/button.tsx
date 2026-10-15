import * as React from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "danger" | "mint-soft";
type Size = "sm" | "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-brand-mint text-white shadow-sm hover:bg-brand-mint-600 active:bg-brand-mint-700 disabled:bg-brand-mint-200",
  secondary:
    "bg-brand-navy-800 text-white shadow-sm hover:bg-brand-navy-700 active:bg-brand-navy-900 disabled:bg-brand-navy/40",
  outline:
    "border border-brand-navy-800/20 bg-transparent text-brand-navy-800 hover:border-brand-navy-800/40 hover:bg-brand-navy/5 disabled:opacity-50",
  ghost:
    "bg-transparent text-brand-navy-700 hover:bg-brand-navy/5 hover:text-brand-navy-900 disabled:opacity-50",
  danger:
    "bg-brand-rose-600 text-white shadow-sm hover:bg-brand-rose active:bg-brand-rose-600/90 disabled:opacity-50",
  "mint-soft":
    "bg-brand-mint-100 text-brand-mint-800 hover:bg-brand-mint-200 disabled:opacity-60",
};

const SIZES: Record<Size, string> = {
  sm: "h-9 px-3 text-sm gap-1.5",
  md: "h-11 px-4 text-sm gap-2",
  lg: "h-12 px-6 text-base gap-2",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", loading, disabled, children, ...props }, ref) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-brand-mint focus-visible:ring-offset-2 disabled:cursor-not-allowed",
        VARIANTS[variant],
        SIZES[size],
        className
      )}
      {...props}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
      {children}
    </button>
  )
);
Button.displayName = "Button";

export interface ButtonLinkProps {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
  onClick?: () => void;
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ariaLabel,
  onClick,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-brand-mint focus-visible:ring-offset-2",
        VARIANTS[variant],
        SIZES[size],
        className
      )}
    >
      {children}
    </Link>
  );
}