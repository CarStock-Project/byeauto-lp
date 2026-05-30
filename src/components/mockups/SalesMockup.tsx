import { LuBanknote, LuPlus, LuReceipt, LuTrendingUp, LuWallet } from "react-icons/lu";

import {
  formatBRL,
  mockSales,
  paymentMethodLabel,
  saleStatusLabel,
  salesMetrics,
  type SaleStatus,
} from "@/lib/mockData";
import { cn } from "@/lib/utils";

import { MockHeader } from "./MockHeader";
import { MockSidebar } from "./MockSidebar";
import { StatCard } from "./StatCard";

function getStatusClasses(status: SaleStatus) {
  return status === "ACTIVE"
    ? "bg-[var(--status-available)]/15 text-[var(--status-available)]"
    : "bg-muted text-muted-foreground line-through";
}

export function SalesMockup() {
  return (
    <div className="flex h-[520px] w-full bg-background text-foreground sm:h-[580px] lg:h-[640px]">
      <MockSidebar active="/vendas" />

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <MockHeader />

        <main className="flex-1 overflow-auto bg-background p-4 sm:p-6">
          <div className="space-y-6">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h1 className="text-xl font-bold text-foreground sm:text-2xl">Vendas</h1>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  Acompanhe o faturamento e o lucro da loja
                </p>
              </div>
              <div className="inline-flex shrink-0 items-center gap-x-2 rounded-lg bg-primary px-3 py-2 text-xs font-medium text-primary-foreground shadow-sm sm:px-4 sm:py-2.5 sm:text-sm">
                <LuPlus className="h-4 w-4" />
                <span className="hidden sm:inline">Nova Venda</span>
                <span className="sm:hidden">Nova</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              <StatCard
                title="Faturamento"
                value={formatBRL(salesMetrics.revenue)}
                hint="Mês atual"
                icon={LuBanknote}
                accent="primary"
              />
              <StatCard
                title="Lucro líquido"
                value={formatBRL(salesMetrics.netProfit)}
                hint="Após custos e despesas"
                icon={LuTrendingUp}
                accent="emerald"
              />
              <StatCard
                title="Vendas"
                value={salesMetrics.count}
                hint="Negociações ativas"
                icon={LuReceipt}
                accent="violet"
              />
              <StatCard
                title="Ticket médio"
                value={formatBRL(salesMetrics.avgTicket)}
                hint="Por veículo"
                icon={LuWallet}
                accent="amber"
              />
            </div>

            <div className="rounded-xl border border-border bg-card shadow-sm">
              <div className="flex items-center justify-between border-b border-border p-4 sm:p-5">
                <div>
                  <h2 className="text-base font-bold text-foreground sm:text-lg">Lista de vendas</h2>
                  <span className="text-xs text-muted-foreground">
                    {mockSales.length} vendas registradas
                  </span>
                </div>
                <div className="inline-flex h-9 items-center rounded-md border border-border bg-background px-3 text-xs">
                  Todos os vendedores
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/40">
                    <tr>
                      {["Veículo", "Cliente", "Vendedor", "Valor", "Margem", "Pagamento", "Status"].map(
                        (h) => (
                          <th
                            key={h}
                            className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-wide text-muted-foreground"
                          >
                            {h}
                          </th>
                        ),
                      )}
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-border bg-card">
                    {mockSales.map((s) => (
                      <tr key={s.id} className="transition hover:bg-muted/40">
                        <td className="px-5 py-3">
                          <div className="text-sm font-medium">{s.vehicle}</div>
                          <div className="text-xs text-muted-foreground">{s.date}</div>
                        </td>
                        <td className="px-5 py-3 text-sm">{s.customer}</td>
                        <td className="px-5 py-3 text-sm text-muted-foreground">{s.seller}</td>
                        <td className="px-5 py-3 text-sm font-medium">{formatBRL(s.value)}</td>
                        <td className="px-5 py-3 text-sm font-medium">
                          {s.status === "CANCELED" ? (
                            <span className="text-muted-foreground">—</span>
                          ) : (
                            <span className="text-emerald-600">+{formatBRL(s.profit)}</span>
                          )}
                        </td>
                        <td className="px-5 py-3">
                          <span
                            className={cn(
                              "inline-flex rounded-full px-2 py-1 text-[11px] font-semibold",
                              s.payment === "MIXED"
                                ? "bg-primary/10 text-primary"
                                : "bg-muted text-muted-foreground",
                            )}
                          >
                            {paymentMethodLabel[s.payment]}
                          </span>
                        </td>
                        <td className="px-5 py-3">
                          <span
                            className={cn(
                              "inline-flex rounded-full px-2 py-1 text-[11px] font-semibold",
                              getStatusClasses(s.status),
                            )}
                          >
                            {saleStatusLabel[s.status]}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
