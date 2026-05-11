import { LuShield } from "react-icons/lu";

interface MockHeaderProps {
  userEmail?: string;
  branchName?: string;
  role?: "ADMIN" | "COMMON";
}

export function MockHeader({
  userEmail = "fernando@byeauto.com.br",
  branchName = "Vila Olímpia",
  role = "ADMIN",
}: MockHeaderProps) {
  const initials = userEmail.substring(0, 2).toUpperCase();

  return (
    <header className="flex h-14 shrink-0 items-center gap-3 border-b border-border bg-card px-4 sm:px-6">
      <div className="ml-auto flex items-center gap-2 sm:gap-3">
        <div
          className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-[11px] font-medium ${
            role === "ADMIN"
              ? "border-amber-500/20 bg-amber-500/10 text-amber-600"
              : "border-blue-500/20 bg-blue-500/10 text-blue-600"
          }`}
        >
          <LuShield className="h-3 w-3" />
          {role}
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden flex-col items-end leading-tight sm:flex">
            <span className="max-w-[140px] truncate text-xs font-medium text-foreground lg:max-w-[180px]">
              {userEmail.split("@")[0]}
            </span>
            <span className="text-[11px] text-muted-foreground">{branchName}</span>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-pink-500 shadow-md ring-2 ring-background">
            <span className="text-xs font-bold text-white">{initials}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
