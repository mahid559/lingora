import { cn } from "@/lib/utils";

export function Skeleton({ className }: { className?: string }) {
  return <div className={cn("animate-pulse rounded-xl bg-brand-navy/8", className)} />;
}

export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-2xl border border-brand-navy-800/10 bg-white p-5 sm:p-6", className)}>
      <Skeleton className="mb-3 h-5 w-1/3" />
      <Skeleton className="mb-2 h-16 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  );
}