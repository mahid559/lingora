import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonLink } from "./button";

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  actionLabel,
  actionHref,
  className,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: React.ReactNode;
  actionLabel?: string;
  actionHref?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-brand-navy-800/20 bg-brand-surface px-6 py-12 text-center",
        className
      )}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-mint-100 text-brand-mint-700">
        <Icon className="h-7 w-7" aria-hidden />
      </div>
      <h3 className="text-lg font-bold text-brand-navy-900">{title}</h3>
      <p className="max-w-sm text-sm leading-6 text-brand-navy-600">{description}</p>
      {(actionLabel && actionHref) || action ? (
        <div className="mt-2">
          {action ?? <ButtonLink href={actionHref!}>{actionLabel}</ButtonLink>}
        </div>
      ) : null}
    </div>
  );
}