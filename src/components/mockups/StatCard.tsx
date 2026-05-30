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
    <div className="flex items-start justify-between gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{title}</p>
        <p
          className={cn(
            "mt-2 text-3xl font-bold tracking-tight text-foreground",
            valueClassName,
          )}
        >
          {value}
        </p>
        {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
      </div>
      <span
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
          accentStyles[accent],
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
    </div>
  );
}
