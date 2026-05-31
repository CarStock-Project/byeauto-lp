import { LuCar, LuChevronDown, LuDownload, LuGauge, LuPlus, LuReceipt } from "react-icons/lu";

import {
  conditionLabel,
  formatBRL,
  formatKm,
  mockVehicles,
  statusLabel,
  type VehicleStatus,
} from "@/lib/mockData";
import { cn } from "@/lib/utils";

import { MockHeader } from "./MockHeader";
import { MockSidebar } from "./MockSidebar";
import { MockTabs } from "./MockTabs";

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

function FilterSelect({ label }: { label: string }) {
  return (
    <div className="flex h-9 items-center justify-between gap-2 rounded-lg border border-border bg-background px-3 text-xs text-foreground">
      <span className="truncate">{label}</span>
      <LuChevronDown className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
    </div>
  );
}

export function VehiclesMockup() {
  return (
    <div className="@container/frame flex h-[520px] w-full bg-background text-foreground sm:h-[580px] lg:h-[640px]">
      <MockSidebar active="/veiculos" />

      <div className="@container flex min-w-0 flex-1 flex-col overflow-hidden">
        <MockHeader />

        <main className="flex-1 overflow-auto bg-background p-4 @xl:p-6">
          <div className="space-y-6">
            <div className="flex flex-col gap-4 @lg:flex-row @lg:items-start @lg:justify-between">
              <div className="min-w-0">
                <h1 className="text-xl font-bold text-foreground @md:text-2xl">Veículos</h1>
                <p className="text-xs text-muted-foreground @md:text-sm">
                  Gerencie o catálogo de veículos
                </p>
              </div>
              <div className="inline-flex shrink-0 items-center gap-x-2 self-start rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-sm">
                <LuPlus className="h-4 w-4" />
                Novo Veículo
              </div>
            </div>

            <MockTabs
              tabs={[
                { label: "Veículos", icon: LuCar },
                { label: "Despesas", icon: LuReceipt },
              ]}
              active={0}
            />

            <div className="space-y-4">
              <div className="flex flex-col gap-3 @xl:flex-row @xl:items-center @xl:justify-between">
                <div>
                  <h2 className="text-base font-bold text-foreground @md:text-lg">
                    Lista de veículos
                  </h2>
                  <span className="text-xs text-muted-foreground">
                    {mockVehicles.length} veículos em estoque
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 @md:flex @md:flex-wrap @md:justify-end">
                  <FilterSelect label="Todos os status" />
                  <FilterSelect label="Todas as condições" />
                  <FilterSelect label="Próprios e consignados" />
                  <div className="flex h-9 items-center justify-center gap-2 rounded-lg border border-border bg-background px-3 text-xs font-medium text-foreground">
                    <LuDownload className="h-3.5 w-3.5" />
                    Exportar CSV
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 @sm:grid-cols-2 @3xl:grid-cols-3">
                {mockVehicles.map((v) => (
                  <article
                    key={v.id}
                    className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-md"
                  >
                    <div className="relative flex aspect-[16/10] items-center justify-center bg-linear-to-br from-muted to-secondary">
                      <LuCar className="h-12 w-12 text-muted-foreground/40" />
                      <span
                        className={cn(
                          "absolute left-3 top-3 inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold backdrop-blur",
                          getStatusClasses(v.status),
                        )}
                      >
                        {statusLabel[v.status]}
                      </span>
                      {v.consigned && (
                        <span className="absolute right-3 top-3 inline-flex rounded-full bg-background/85 px-2.5 py-1 text-[11px] font-semibold text-foreground backdrop-blur">
                          Consignado
                        </span>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col gap-3 p-4">
                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-semibold text-foreground">
                          {v.brand} {v.model}
                        </h3>
                        <p className="truncate text-xs text-muted-foreground">{v.version}</p>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <span className="font-medium text-foreground">{v.year}</span>
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <LuGauge className="h-3 w-3" />
                          {formatKm(v.mileage)}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <span
                            className="h-2.5 w-2.5 rounded-full border border-border"
                            aria-hidden
                          />
                          {v.color}
                        </span>
                      </div>

                      <div className="mt-auto flex items-end justify-between gap-2 border-t border-border pt-3">
                        <div>
                          <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                            {conditionLabel[v.condition]}
                          </p>
                          <p className="text-base font-bold tracking-tight text-foreground">
                            {formatBRL(v.price)}
                          </p>
                        </div>
                        <span className="rounded-lg bg-muted px-2.5 py-1 font-mono text-[11px] text-foreground">
                          {v.plate}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="flex items-center justify-between pt-1">
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
