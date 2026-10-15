import * as React from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, invalid, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const isPassword = type === "password";
    return (
      <div className="relative">
        <input
          ref={ref}
          type={isPassword && showPassword ? "text" : type}
          className={cn(
            "h-11 w-full rounded-xl border border-brand-navy-800/15 bg-white px-3.5 text-[0.95rem] text-brand-navy-900 placeholder:text-brand-navy-600/50",
            "transition-colors hover:border-brand-navy-800/30 focus:border-brand-mint focus:outline-none focus:ring-2 focus:ring-brand-mint/30",
            invalid && "border-brand-rose focus:border-brand-rose focus:ring-brand-rose/30",
            isPassword && "pr-11",
            className
          )}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? "পাসওয়ার্ড লুকান" : "পাসওয়ার্ড দেখুন"}
            className="absolute inset-y-0 right-0 flex w-11 items-center justify-center text-brand-navy-600 hover:text-brand-navy-900"
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export function Field({
  label,
  htmlFor,
  error,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string | null;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-brand-navy-800">
        {label}
      </label>
      {children}
      {hint && !error && <p className="text-xs leading-5 text-brand-navy-600">{hint}</p>}
      {error && (
        <p role="alert" className="text-sm font-medium text-brand-rose-600">
          {error}
        </p>
      )}
    </div>
  );
}