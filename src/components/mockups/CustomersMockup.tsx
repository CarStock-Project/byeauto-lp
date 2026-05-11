import { BiEdit } from "react-icons/bi";
import { LuEye, LuMail, LuPlus, LuTrash2, LuUser } from "react-icons/lu";

import { mockCustomers } from "@/lib/mockData";

import { MockHeader } from "./MockHeader";
import { MockSidebar } from "./MockSidebar";

export function CustomersMockup() {
  return (
    <div className="flex h-[520px] w-full bg-background text-foreground sm:h-[580px] lg:h-[640px]">
      <MockSidebar active="/clientes" />

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <MockHeader />

        <main className="flex-1 overflow-auto bg-background p-4 sm:p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <h1 className="text-xl font-bold text-foreground sm:text-2xl">Clientes</h1>
                <p className="text-xs text-muted-foreground sm:text-sm">Gerencie seus clientes</p>
              </div>
              <div className="inline-flex shrink-0 items-center gap-x-2 rounded-lg bg-primary px-3 py-2 text-xs font-medium text-primary-foreground shadow-sm sm:px-4 sm:py-2.5 sm:text-sm">
                <LuPlus className="h-4 w-4" />
                <span className="hidden sm:inline">Novo Cliente</span>
                <span className="sm:hidden">Novo</span>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card shadow-sm">
              <div className="flex flex-col gap-3 border-b border-border p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                <h2 className="text-base font-bold text-foreground sm:text-lg">
                  Lista de Clientes
                </h2>
                <div className="inline-flex h-9 items-center rounded-md border border-border bg-background px-3 text-xs text-muted-foreground">
                  Buscar clientes...
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/40">
                    <tr>
                      {["Cliente", "Contato", "Documento", "Cadastro", "Ações"].map((h) => (
                        <th
                          key={h}
                          className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-wide text-muted-foreground"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-border bg-card">
                    {mockCustomers.map((c) => (
                      <tr key={c.id} className="hover:bg-muted/40">
                        <td className="px-5 py-3">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted">
                              <LuUser className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <div>
                              <div className="text-sm font-medium">{c.name}</div>
                              <div className="text-xs text-muted-foreground">
                                {c.type === "PF" ? "Pessoa Física" : "Pessoa Jurídica"}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-3">
                          <div className="flex items-center gap-1.5 text-xs">
                            <LuMail className="h-3 w-3 text-muted-foreground" />
                            {c.email}
                          </div>
                        </td>
                        <td className="px-5 py-3 font-mono text-xs">{c.document}</td>
                        <td className="px-5 py-3 text-xs">{c.createdAt}</td>
                        <td className="px-5 py-3">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <LuEye className="h-4 w-4" />
                            <BiEdit className="h-4 w-4" />
                            <LuTrash2 className="h-4 w-4 text-destructive/70" />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-between border-t border-border px-5 py-3">
                <span className="text-xs text-muted-foreground">Página 1 de 32 · 312 clientes</span>
                <div className="flex gap-2">
                  <div className="rounded-md border px-3 py-1 text-xs opacity-50">Anterior</div>
                  <div className="rounded-md border px-3 py-1 text-xs">Próxima</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
