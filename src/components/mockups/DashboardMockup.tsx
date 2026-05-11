import { LuCar, LuUsers } from "react-icons/lu";

import { dashboardMetrics, STATUS_COLORS } from "@/lib/mockData";

import { MockHeader } from "./MockHeader";
import { MockSidebar } from "./MockSidebar";
import { StatCard } from "./StatCard";
import { VehicleStatusChart } from "./VehicleStatusChart";

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
          </div>
        </main>
      </div>
    </div>
  );
}
