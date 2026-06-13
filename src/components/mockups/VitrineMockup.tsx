import {
  LuBadgeCheck,
  LuCar,
  LuGauge,
  LuHandCoins,
  LuMessageCircle,
  LuPhone,
  LuWallet,
} from "react-icons/lu";

import { activeBranch, formatBRL, formatKm, mockVehicles } from "@/lib/mockData";

const showcaseVehicles = mockVehicles.filter((v) => v.status === "AVAILABLE").slice(0, 3);

/**
 * Mockup do site público da loja (a Vitrine), com a identidade visual da
 * revenda — distinto das telas internas do painel. Usa os dados de exemplo de
 * `mockData` para manter marketing e produto em sincronia.
 */
export function VitrineMockup() {
  return (
    <div className="@container/site flex h-[520px] w-full flex-col overflow-hidden bg-background text-foreground sm:h-[560px]">
      {/* Cabeçalho do site da loja */}
      <header className="flex items-center justify-between gap-3 border-b border-border bg-card px-4 py-3 @xl:px-6">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <LuCar className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-bold tracking-tight">{activeBranch.name}</p>
            <p className="text-[11px] text-muted-foreground">Seminovos selecionados</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden items-center gap-3 text-xs text-muted-foreground @lg:flex">
            <span className="font-medium text-foreground">Estoque</span>
            <span>Vender meu carro</span>
            <span>Financiamento</span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-[oklch(0.62_0.17_150)] px-3 py-1.5 text-xs font-semibold text-white">
            <LuPhone className="h-3.5 w-3.5" />
            WhatsApp
          </span>
        </div>
      </header>

      <div className="flex-1 overflow-auto p-4 @xl:p-6">
        {/* Faixa de destaque */}
        <div className="mb-5 flex flex-col gap-1 rounded-2xl bg-linear-to-br from-primary to-[oklch(0.32_0.14_260)] px-5 py-4 text-primary-foreground">
          <p className="text-sm font-bold @md:text-base">Os melhores seminovos da região</p>
          <p className="text-xs text-primary-foreground/80">
            Estoque atualizado em tempo real, direto do sistema da loja.
          </p>
        </div>

        {/* Grade de veículos da vitrine */}
        <div className="grid grid-cols-1 gap-4 @md:grid-cols-2 @3xl:grid-cols-3">
          {showcaseVehicles.map((v) => (
            <article
              key={v.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <div className="relative flex aspect-[16/10] items-center justify-center bg-linear-to-br from-muted to-secondary">
                <LuCar className="h-10 w-10 text-muted-foreground/40" />
                <span className="absolute left-3 top-3 inline-flex rounded-full bg-[var(--status-available)]/15 px-2.5 py-1 text-[11px] font-semibold text-[var(--status-available)] backdrop-blur">
                  Disponível
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2 p-3.5">
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold">
                    {v.brand} {v.model}
                  </h3>
                  <p className="truncate text-[11px] text-muted-foreground">{v.version}</p>
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
                  <span className="font-medium text-foreground">{v.year}</span>
                  <span className="inline-flex items-center gap-1">
                    <LuGauge className="h-3 w-3" />
                    {formatKm(v.mileage)}
                  </span>
                </div>
                <p className="mt-auto text-base font-bold tracking-tight">{formatBRL(v.price)}</p>
                <span className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground">
                  <LuMessageCircle className="h-3.5 w-3.5" />
                  Tenho interesse
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Faixas de captação: vender o carro e financiamento */}
        <div className="mt-5 grid grid-cols-1 gap-3 @md:grid-cols-2">
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
              <LuHandCoins className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold">Quer vender seu carro?</p>
              <p className="text-[11px] text-muted-foreground">
                Envie os dados e receba uma proposta da loja.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600">
              <LuWallet className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold">Simule seu financiamento</p>
              <p className="text-[11px] text-muted-foreground">
                Preencha online e a loja calcula as condições.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé com selo do produto */}
      <footer className="flex items-center justify-center gap-1.5 border-t border-border bg-muted/40 py-2 text-[11px] text-muted-foreground">
        <LuBadgeCheck className="h-3.5 w-3.5 text-primary" />
        Vitrine ByeAuto
      </footer>
    </div>
  );
}
