import type { IconType } from "react-icons";

import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: number | string;
  hint?: string;
  icon: IconType;
  accent?: "primary" | "emerald" | "amber" | "violet" | "sky";
  valueClassName?: string;
}

const accentStyles: Record<NonNullable<StatCardProps["accent"]>, string> = {
  primary: "bg-primary/10 text-primary",
  emerald: "bg-emerald-500/10 text-emerald-600",
  amber: "bg-amber-500/10 text-amber-600",
  violet: "bg-violet-500/10 text-violet-600",
  sky: "bg-sky-500/10 text-sky-600",
};

export function StatCard({
  title,
  value,
  hint,
  icon: Icon,
  accent = "primary",
  valueClassName,
}: StatCardProps) {
  return (
    <div className="flex items-start justify-between gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm @md:p-5">
      <div className="min-w-0">
        <p className="truncate text-[11px] font-medium uppercase tracking-wide text-muted-foreground @md:text-xs">
          {title}
        </p>
        <p
          className={cn(
            "mt-2 truncate text-2xl font-bold leading-tight tracking-tight text-foreground @md:text-lg @2xl:text-2xl",
            valueClassName,
          )}
        >
          {value}
        </p>
        {hint && <p className="mt-1 truncate text-xs text-muted-foreground">{hint}</p>}
      </div>
      <span
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl @md:h-11 @md:w-11",
          accentStyles[accent],
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
    </div>
  );
}
