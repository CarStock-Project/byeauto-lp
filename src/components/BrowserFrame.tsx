import { cn } from "@/lib/utils";

interface BrowserFrameProps {
  url?: string;
  children: React.ReactNode;
  className?: string;
}

export function BrowserFrame({ url = "byeauto.com.br/dashboard", children, className }: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/5 ring-1 ring-black/5",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-border bg-muted/60 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.18_25)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.8_0.16_85)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.72_0.18_145)]" />
        </div>
        <div className="mx-auto flex max-w-md flex-1 items-center gap-2 rounded-md border border-border bg-background/80 px-3 py-1 text-xs text-muted-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3 w-3"
            aria-hidden="true"
          >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span className="truncate">{url}</span>
        </div>
        <div className="w-10" aria-hidden="true" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
