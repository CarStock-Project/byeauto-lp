import { LuMenu, LuMoon } from "react-icons/lu";

interface MockHeaderProps {
  userName?: string;
  branchName?: string;
}

export function MockHeader({
  userName = "Ariel",
  branchName = "Auto Center Premium",
}: MockHeaderProps) {
  const initials = userName.substring(0, 2).toUpperCase();

  return (
    <header className="flex h-14 shrink-0 items-center gap-3 border-b border-border bg-card px-4 @xl:px-6">
      <button
        type="button"
        aria-label="Abrir menu"
        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground @2xl/frame:hidden"
      >
        <LuMenu className="h-5 w-5" />
      </button>

      <div className="ml-auto flex items-center gap-2 @xl:gap-3">
        <button
          type="button"
          aria-label="Alternar tema"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition hover:bg-muted"
        >
          <LuMoon className="h-5 w-5" />
        </button>
        <div className="hidden text-right leading-tight @md:block">
          <p className="text-xs font-semibold text-foreground">{userName}</p>
          <p className="text-[11px] text-muted-foreground">{branchName}</p>
        </div>
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-pink-500 shadow-md ring-2 ring-background">
          <span className="text-xs font-bold text-white">{initials}</span>
        </div>
      </div>
    </header>
  );
}
