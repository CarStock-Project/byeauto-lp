import { BiEdit } from "react-icons/bi";
import { LuEye, LuMail, LuPlus, LuTrash2, LuUser } from "react-icons/lu";

import { mockCustomers } from "@/lib/mockData";

import { MockHeader } from "./MockHeader";
import { MockSidebar } from "./MockSidebar";

export function CustomersMockup() {
  return (
    <div className="@container/frame flex h-[520px] w-full bg-background text-foreground sm:h-[580px] lg:h-[640px]">
      <MockSidebar active="/clientes" />

      <div className="@container flex min-w-0 flex-1 flex-col overflow-hidden">
        <MockHeader />

        <main className="flex-1 overflow-auto bg-background p-4 @xl:p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <h1 className="text-xl font-bold text-foreground @md:text-2xl">Clientes</h1>
                <p className="text-xs text-muted-foreground @md:text-sm">Gerencie seus clientes</p>
              </div>
              <div className="inline-flex shrink-0 items-center gap-x-2 rounded-lg bg-primary px-3 py-2 text-xs font-medium text-primary-foreground shadow-sm @md:px-4 @md:py-2.5 @md:text-sm">
                <LuPlus className="h-4 w-4" />
                <span className="hidden @md:inline">Novo Cliente</span>
                <span className="@md:hidden">Novo</span>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card shadow-sm">
              <div className="flex flex-col gap-3 border-b border-border p-4 @lg:flex-row @lg:items-center @lg:justify-between @xl:p-5">
                <h2 className="text-base font-bold text-foreground @md:text-lg">Lista de clientes</h2>
                <div className="inline-flex h-9 items-center rounded-md border border-border bg-background px-3 text-xs text-muted-foreground @lg:w-56">
                  Buscar clientes...
                </div>
              </div>

              {/* Column header — only when the panel is wide enough */}
              <div className="hidden items-center gap-3 border-b border-border bg-muted/40 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground @sm:flex">
                <span className="flex-1">Cliente</span>
                <span className="w-44">Contato</span>
                <span className="hidden w-36 @xl:block">Documento</span>
                <span className="hidden w-24 @2xl:block">Cadastro</span>
                <span className="w-16 text-right">Ações</span>
              </div>

              <ul className="divide-y divide-border">
                {mockCustomers.map((c) => (
                  <li key={c.id} className="flex items-center gap-3 px-4 py-3 @xl:px-5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <LuUser className="h-4 w-4 text-muted-foreground" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-foreground">{c.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {c.type === "PF" ? "Pessoa Física" : "Pessoa Jurídica"}
                      </p>
                      {/* Secondary info shown inline on narrow panels */}
                      <p className="mt-1 truncate font-mono text-[11px] text-muted-foreground @xl:hidden">
                        {c.document}
                      </p>
                    </div>

                    <div className="hidden w-44 min-w-0 items-center gap-1.5 text-xs text-muted-foreground @sm:flex">
                      <LuMail className="h-3 w-3 shrink-0" />
                      <span className="truncate">{c.email}</span>
                    </div>
                    <span className="hidden w-36 font-mono text-xs text-foreground @xl:block">
                      {c.document}
                    </span>
                    <span className="hidden w-24 text-xs text-muted-foreground @2xl:block">
                      {c.createdAt}
                    </span>

                    <div className="flex w-16 items-center justify-end gap-2 text-muted-foreground">
                      <LuEye className="h-4 w-4" />
                      <BiEdit className="h-4 w-4" />
                      <LuTrash2 className="h-4 w-4 text-destructive/70" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
