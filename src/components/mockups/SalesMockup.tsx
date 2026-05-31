import {
  LuChartColumn,
  LuChevronsUpDown,
  LuDollarSign,
  LuFilterX,
  LuHandshake,
  LuPercent,
  LuPlus,
  LuShoppingBag,
  LuTrendingUp,
} from "react-icons/lu";

import { formatBRL, salesMetrics, topSellers } from "@/lib/mockData";

import { MiniAreaChart, SellerBarChart } from "./MiniCharts";
import { MockHeader } from "./MockHeader";
import { MockSidebar } from "./MockSidebar";
import { MockTabs } from "./MockTabs";
import { StatCard } from "./StatCard";

export function SalesMockup() {
  return (
    <div className="@container/frame flex h-[520px] w-full bg-background text-foreground sm:h-[580px] lg:h-[640px]">
      <MockSidebar active="/vendas" />

      <div className="@container flex min-w-0 flex-1 flex-col overflow-hidden">
        <MockHeader />

        <main className="flex-1 overflow-auto bg-background p-4 @xl:p-6">
          <div className="space-y-6">
            <div className="flex flex-col gap-4 @lg:flex-row @lg:items-start @lg:justify-between">
              <div className="min-w-0">
                <h1 className="text-xl font-bold text-foreground @md:text-2xl">Vendas</h1>
                <p className="max-w-md text-xs text-muted-foreground @md:text-sm">
                  Acompanhe o faturamento, lucro e ranking de vendedores; gerencie as vendas
                  registradas.
                </p>
              </div>
              <div className="inline-flex shrink-0 items-center gap-x-2 self-start rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-sm">
                <LuPlus className="h-4 w-4" />
                Nova venda
              </div>
            </div>

            <MockTabs
              tabs={[
                { label: "Painel", icon: LuChartColumn },
                { label: "Vendas", icon: LuHandshake },
              ]}
              active={0}
            />

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="grid grid-cols-1 gap-4 @md:grid-cols-3">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    De
                  </label>
                  <div className="flex h-10 items-center rounded-lg border border-border bg-background px-3 text-sm">
                    {salesMetrics.periodFrom}
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Até
                  </label>
                  <div className="flex h-10 items-center rounded-lg border border-border bg-background px-3 text-sm">
                    {salesMetrics.periodTo}
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Vendedor
                  </label>
                  <div className="flex h-10 items-center justify-between rounded-lg border border-border bg-muted/60 px-3 text-sm text-muted-foreground">
                    Todos
                    <LuChevronsUpDown className="h-4 w-4" />
                  </div>
                </div>
              </div>
              <div className="mt-4 flex h-10 items-center justify-center gap-2 rounded-lg border border-border bg-background text-sm font-medium text-muted-foreground">
                <LuFilterX className="h-4 w-4" />
                Limpar filtros
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 @md:grid-cols-2 @4xl:grid-cols-4">
              <StatCard
                title="Total de vendas"
                value={salesMetrics.count}
                hint={`${salesMetrics.periodFrom} → ${salesMetrics.periodTo}`}
                icon={LuShoppingBag}
                accent="sky"
              />
              <StatCard
                title="Faturamento"
                value={formatBRL(salesMetrics.revenue)}
                hint={`Ticket médio ${formatBRL(salesMetrics.avgTicket)}`}
                icon={LuDollarSign}
                accent="emerald"
                valueClassName="text-emerald-600"
              />
              <StatCard
                title="Lucro bruto"
                value={formatBRL(salesMetrics.grossProfit)}
                hint="Receita – custo do veículo – despesas do veículo"
                icon={LuTrendingUp}
                accent="emerald"
                valueClassName="text-emerald-600"
              />
              <StatCard
                title="Margem bruta média"
                value={`${salesMetrics.margin.toFixed(1)}%`}
                hint="Granularidade: Diária"
                icon={LuPercent}
                accent="sky"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 @3xl:grid-cols-2">
              <MiniAreaChart
                title="Faturamento por período"
                max={250000}
                points={[
                  { label: "21/05", value: 142800 },
                  { label: "24/05", value: 154300 },
                  { label: "26/05", value: 192500 },
                  { label: "28/05", value: 168900 },
                ]}
              />
              <SellerBarChart
                title="Vendas por vendedor"
                subtitle="Faturamento operado por quem fechou a venda"
                sellers={topSellers.map((s) => ({ name: s.name, revenue: s.revenue }))}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
