import {
  LuArrowRight,
  LuExternalLink,
  LuHandCoins,
  LuMessageSquare,
  LuStore,
  LuWallet,
} from "react-icons/lu";

import { BrowserFrame } from "@/components/BrowserFrame";
import { VitrineMockup } from "@/components/mockups/VitrineMockup";
import { Reveal } from "@/components/Reveal";

const flows = [
  {
    icon: LuMessageSquare,
    title: "Interesse vira contato — sem você correr atrás",
    description:
      "Ao gostar de um veículo, o cliente fala na hora pelo WhatsApp ou deixa os dados e envia uma proposta.",
    lands: "Cai automaticamente em Leads",
    accent: "primary",
  },
  {
    icon: LuHandCoins,
    title: "Quem quer vender o carro chega até a loja",
    description:
      "O cliente preenche marca, modelo, ano, km e o valor que pede. Você analisa e faz a proposta para comprar.",
    lands: "Cai automaticamente em Oportunidades",
    accent: "amber",
  },
  {
    icon: LuWallet,
    title: "Financiamento sem ficar repassando dados",
    description:
      "O cliente preenche veículo, entrada, parcelas e renda direto no site. A loja recebe tudo pronto e faz a simulação.",
    lands: "Cai automaticamente em Leads (Financiamento)",
    accent: "sky",
  },
] as const;

const accentClasses: Record<(typeof flows)[number]["accent"], string> = {
  primary: "bg-primary/10 text-primary",
  amber: "bg-amber-500/10 text-amber-600",
  sky: "bg-sky-500/10 text-sky-600",
};

export function Vitrine() {
  return (
    <section id="vitrine" className="border-b border-border bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            <LuStore className="h-3.5 w-3.5" />
            Novidade • já disponível
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A vitrine: o site próprio da sua loja, trabalhando por você
          </h2>
          <p className="mt-4 text-balance text-muted-foreground">
            Com a sua marca e o seu estoque atualizado automaticamente, a vitrine deixa a loja com
            cara de profissional e ainda capta contatos, propostas e financiamentos — que caem
            direto no seu painel.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="min-w-0 lg:col-span-7">
            <BrowserFrame url="autocenterpremium.byeauto.com.br">
              <VitrineMockup />
            </BrowserFrame>
          </Reveal>

          <Reveal delay={120} className="min-w-0 space-y-4 lg:col-span-5">
            {flows.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="rounded-2xl border border-border bg-card p-5 shadow-sm"
                >
                  <div className="flex items-start gap-3.5">
                    <span
                      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${accentClasses[f.accent]}`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-foreground">{f.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {f.description}
                      </p>
                      <p className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                        <LuArrowRight className="h-3.5 w-3.5" />
                        {f.lands}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>

        <Reveal delay={100}>
          <a
            href="https://montanautomoveislimeira.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="group mx-auto mt-12 flex max-w-3xl flex-col items-center gap-4 rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition hover:border-primary/40 hover:shadow-md sm:flex-row sm:text-left"
          >
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <LuExternalLink className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-foreground">
                Veja uma vitrine de verdade, no ar
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                A <span className="font-medium text-foreground">Montana Automóveis</span> (Limeira-SP)
                já usa a Vitrine ByeAuto para mostrar o estoque e captar clientes online.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition group-hover:bg-primary/90">
              Acessar o site
              <LuArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </span>
          </a>
        </Reveal>

        <Reveal>
          <p className="mx-auto mt-12 max-w-2xl text-balance text-center text-sm text-muted-foreground">
            Você acompanha tudo na aba <span className="font-medium text-foreground">Vitrine</span> do
            painel: leads por origem, oportunidades de compra e o status de cada negociação — do
            primeiro contato ao carro vendido.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
