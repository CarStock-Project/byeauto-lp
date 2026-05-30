import { LuArrowRight, LuCar, LuEye, LuHandshake, LuTrophy, LuUsers } from "react-icons/lu";

import {
  dashboardMetrics,
  formatBRL,
  mockSales,
  saleStatusLabel,
  STATUS_COLORS,
  topSellers,
} from "@/lib/mockData";
import { cn } from "@/lib/utils";

import { MiniAreaChart } from "./MiniCharts";
import { MockHeader } from "./MockHeader";
import { MockSidebar } from "./MockSidebar";
import { StatCard } from "./StatCard";
import { VehicleStatusChart } from "./VehicleStatusChart";

const recentSales = mockSales.slice(0, 5);

export function DashboardMockup() {
  return (
    <div className="flex h-[520px] w-full bg-background text-foreground sm:h-[580px] lg:h-[640px]">
      <MockSidebar active="/dashboard" />

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <MockHeader />

        <main className="flex-1 overflow-auto bg-background p-4 sm:p-6">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Painel</h1>
              <p className="text-sm text-muted-foreground">Visão geral do seu negócio</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <StatCard
                title="Total de veículos"
                value={dashboardMetrics.totalVehicles}
                hint="Estoque atual"
                icon={LuCar}
                accent="primary"
              />
              <StatCard
                title="Total de clientes"
                value={dashboardMetrics.totalCustomers}
                hint="Cadastrados na base"
                icon={LuUsers}
                accent="violet"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <VehicleStatusChart
                  total={dashboardMetrics.totalVehicles}
                  slices={[
                    {
                      label: "Disponíveis",
                      value: dashboardMetrics.available.total,
                      percent: dashboardMetrics.available.percent,
                      color: STATUS_COLORS.available,
                    },
                    {
                      label: "Reservados",
                      value: dashboardMetrics.reserved.total,
                      percent: dashboardMetrics.reserved.percent,
                      color: STATUS_COLORS.reserved,
                    },
                    {
                      label: "Manutenção",
                      value: dashboardMetrics.maintenance.total,
                      percent: dashboardMetrics.maintenance.percent,
                      color: STATUS_COLORS.maintenance,
                    },
                    {
                      label: "Vendidos",
                      value: dashboardMetrics.sold.total,
                      percent: dashboardMetrics.sold.percent,
                      color: STATUS_COLORS.sold,
                    },
                  ]}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
                <StatCard
                  title="Disponíveis"
                  value={dashboardMetrics.available.total}
                  hint={`${dashboardMetrics.available.percent}% do estoque`}
                  icon={LuCar}
                  accent="emerald"
                />
                <StatCard
                  title="Reservados"
                  value={dashboardMetrics.reserved.total}
                  hint={`${dashboardMetrics.reserved.percent}% do estoque`}
                  icon={LuCar}
                  accent="violet"
                />
                <StatCard
                  title="Manutenção"
                  value={dashboardMetrics.maintenance.total}
                  hint={`${dashboardMetrics.maintenance.percent}% do estoque`}
                  icon={LuCar}
                  accent="amber"
                />
                <StatCard
                  title="Vendidos"
                  value={dashboardMetrics.sold.total}
                  hint={`${dashboardMetrics.sold.percent}% do estoque`}
                  icon={LuCar}
                  accent="sky"
                />
              </div>
            </div>

            <MiniAreaChart
              title="Lucro bruto por período"
              max={80000}
              points={[
                { label: "26/05", value: 75000 },
                { label: "27/05", value: 40000 },
                { label: "28/05", value: 6000 },
              ]}
            />

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <LuHandshake className="h-4 w-4 text-primary" />
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">Últimas vendas</h3>
                      <p className="text-xs text-muted-foreground">
                        {recentSales.length} vendas recentes
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-primary">
                    Ver todas
                    <LuArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>

                <ul className="divide-y divide-border">
                  {recentSales.map((s) => (
                    <li key={s.id} className="flex items-center gap-3 py-2.5">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="truncate text-sm font-medium text-foreground">
                            {s.vehicle}
                          </span>
                          <span
                            className={cn(
                              "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold",
                              s.status === "ACTIVE"
                                ? "bg-sky-500/15 text-sky-600"
                                : "bg-destructive/15 text-destructive",
                            )}
                          >
                            {saleStatusLabel[s.status]}
                          </span>
                        </div>
                        <p className="truncate text-xs text-muted-foreground">
                          {s.customer} · {s.date}
                        </p>
                      </div>
                      <span className="shrink-0 text-sm font-semibold tabular-nums text-foreground">
                        {formatBRL(s.value)}
                      </span>
                      <LuEye className="h-4 w-4 shrink-0 text-muted-foreground" />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <LuTrophy className="h-4 w-4 text-amber-500" />
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">Top vendedores</h3>
                    <p className="text-xs text-muted-foreground">
                      Ranking por faturamento · últimos 30 dias
                    </p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {[...topSellers]
                    .sort((a, b) => b.revenue - a.revenue)
                    .map((s, i) => (
                      <li key={s.name} className="flex items-center gap-3">
                        <span
                          className={cn(
                            "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                            i === 0
                              ? "bg-amber-500/15 text-amber-600"
                              : "bg-muted text-muted-foreground",
                          )}
                        >
                          {i + 1}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-foreground">{s.name}</p>
                          <p className="text-xs text-muted-foreground">{s.count} vendas</p>
                        </div>
                        <span className="shrink-0 text-sm font-semibold tabular-nums text-foreground">
                          {formatBRL(s.revenue)}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
