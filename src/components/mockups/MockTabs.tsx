import type { IconType } from "react-icons";

import { cn } from "@/lib/utils";

interface MockTab {
  label: string;
  icon: IconType;
}

interface MockTabsProps {
  tabs: MockTab[];
  active: number;
}

export function MockTabs({ tabs, active }: MockTabsProps) {
  return (
    <div className="inline-flex w-full gap-1 rounded-xl border border-border bg-muted/60 p-1">
      {tabs.map((tab, i) => {
        const Icon = tab.icon;
        const isActive = i === active;
        return (
          <div
            key={tab.label}
            className={cn(
              "flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition",
              isActive
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground",
            )}
          >
            <Icon className="h-4 w-4" />
            {tab.label}
          </div>
        );
      })}
    </div>
  );
}
