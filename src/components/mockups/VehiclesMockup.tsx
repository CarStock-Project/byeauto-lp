import { BiEdit } from "react-icons/bi";
import { LuCar, LuDownload, LuEye, LuPlus } from "react-icons/lu";

import { formatBRL, mockVehicles, statusLabel, type VehicleStatus } from "@/lib/mockData";
import { cn } from "@/lib/utils";

import { MockHeader } from "./MockHeader";
import { MockSidebar } from "./MockSidebar";

function getStatusClasses(status: VehicleStatus) {
  switch (status) {
    case "AVAILABLE":
      return "bg-[var(--status-available)]/15 text-[var(--status-available)]";
    case "RESERVED":
      return "bg-[var(--status-reserved)]/15 text-[var(--status-reserved)]";
    case "SOLD":
      return "bg-muted text-muted-foreground";
    case "MAINTENANCE":
      return "bg-[var(--status-maintenance)]/15 text-[var(--status-maintenance)]";
  }
}

export function VehiclesMockup() {
  return (
    <div className="flex h-[520px] w-full bg-background text-foreground sm:h-[580px] lg:h-[640px]">
      <MockSidebar active="/veiculos" />

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <MockHeader />

        <main className="flex-1 overflow-auto bg-background p-4 sm:p-6">
          <div className="space-y-6">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h1 className="text-xl font-bold text-foreground sm:text-2xl">Veículos</h1>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  Gerencie o catálogo de veículos
                </p>
              </div>
              <div className="inline-flex shrink-0 items-center gap-x-2 rounded-lg bg-primary px-3 py-2 text-xs font-medium text-primary-foreground shadow-sm sm:px-4 sm:py-2.5 sm:text-sm">
                <LuPlus className="h-4 w-4" />
                <span className="hidden sm:inline">Novo Veículo</span>
                <span className="sm:hidden">Novo</span>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card shadow-sm">
              <div className="flex flex-col gap-3 border-b border-border p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                <div>
                  <h2 className="text-base font-bold text-foreground sm:text-lg">
                    Lista de Veículos
                  </h2>
                  <span className="text-xs text-muted-foreground">
                    {mockVehicles.length} veículos em estoque
                  </span>
                </div>

                <div className="flex gap-2">
                  <div className="inline-flex h-9 items-center rounded-md border border-border bg-background px-3 text-xs">
                    Todos os status
                  </div>
                  <div className="inline-flex h-9 items-center gap-2 rounded-md border border-border bg-background px-3 text-xs font-medium">
                    <LuDownload className="h-3.5 w-3.5" />
                    Exportar CSV
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/40">
                    <tr>
                      {["Veículo", "Placa", "Preço", "Status", "Ações"].map((h) => (
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
                    {mockVehicles.map((v) => (
                      <tr key={v.id} className="transition hover:bg-muted/40">
                        <td className="px-5 py-3">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted">
                              <LuCar className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <div>
                              <div className="text-sm font-medium">
                                {v.brand} {v.model}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {v.version} • {v.year} • {v.color}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-3 font-mono text-xs">{v.plate}</td>
                        <td className="px-5 py-3 text-sm font-medium">{formatBRL(v.price)}</td>
                        <td className="px-5 py-3">
                          <span
                            className={cn(
                              "inline-flex rounded-full px-2 py-1 text-[11px] font-semibold",
                              getStatusClasses(v.status),
                            )}
                          >
                            {statusLabel[v.status]}
                          </span>
                        </td>
                        <td className="px-5 py-3">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <LuEye className="h-4 w-4" />
                            <BiEdit className="h-4 w-4" />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-between border-t border-border px-5 py-3">
                <span className="text-xs text-muted-foreground">Página 1 de 14</span>
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
