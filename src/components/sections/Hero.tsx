import { LuArrowRight, LuPlay } from "react-icons/lu";

import { CarIllustration } from "@/components/icons/CarIllustration";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      {/* Soft gradient blob */}
      <div
        className="absolute -top-32 left-1/2 -z-10 h-[320px] w-[120vw] max-w-[820px] -translate-x-1/2 rounded-full opacity-50 blur-3xl sm:h-[480px]"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.55 0.18 255 / 0.35), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              Plataforma SaaS multi-loja
            </div>

            <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Gestão automotiva inteligente para o seu{" "}
              <span className="bg-linear-to-r from-primary to-[oklch(0.55_0.18_280)] bg-clip-text text-transparent">
                negócio.
              </span>
            </h1>

            <p className="text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
              Do cadastro do veículo à venda, ao contrato e à distribuição do lucro entre os
              sócios — toda a operação da revenda numa única plataforma. Dados de cada loja
              separados, painel em tempo real e acesso seguro por usuário.
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href={siteConfig.whatsappUrl}
                className="group inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90"
              >
                Solicitar demonstração
                <LuArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="#destaques"
                className="inline-flex h-12 items-center gap-2 rounded-lg border border-border bg-card px-6 text-sm font-medium text-foreground transition hover:bg-muted"
              >
                <LuPlay className="h-3.5 w-3.5" />
                Conhecer a plataforma
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-3 text-xs text-muted-foreground lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[oklch(0.72_0.18_145)]" />
                Estoque em tempo real
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[oklch(0.75_0.15_85)]" />
                Vendas e contratos
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[oklch(0.6_0.15_250)]" />
                Multi-loja
              </div>
            </div>
          </div>

          {/* Visual side */}
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-primary">
              <div className="absolute inset-0 bg-linear-to-br from-primary via-primary to-[oklch(0.32_0.14_260)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(1_0_0/0.18),transparent_55%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_90%,oklch(0_0_0/0.35),transparent_50%)]" />
              <div className="absolute inset-0 bg-grid-dark opacity-[0.08]" />

              <div className="relative z-10 flex flex-col gap-8 p-8 sm:p-10">
                <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-primary-foreground/80">
                  <span className="h-px w-8 bg-primary-foreground/60" />
                  Plataforma Automotiva
                </div>

                <CarIllustration className="mx-auto w-full max-w-sm drop-shadow-2xl" />

                <div className="space-y-3 text-primary-foreground">
                  <p className="text-sm font-medium leading-relaxed text-primary-foreground/85">
                    “Migramos do controle em planilhas para o ByeAuto e reduzimos em 60% o tempo
                    gasto em conciliação de estoque entre filiais.”
                  </p>
                  <p className="text-xs uppercase tracking-wider text-primary-foreground/60">
                    — Gerente de operações, rede com 4 lojas
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
