import { LuBuilding2, LuCheck, LuNetwork, LuStore, LuX } from "react-icons/lu";

import { cn, siteConfig } from "@/lib/utils";

interface PlanFeature {
  label: string;
  included: boolean;
  /** Destaca o item (ex.: integração inclusa) */
  highlight?: boolean;
}

interface Plan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceSuffix: string;
  priceNote: string;
  icon: React.ComponentType<{ className?: string }>;
  features: PlanFeature[];
  featured?: boolean;
}

const plans: Plan[] = [
  {
    id: "essencial",
    name: "Essencial",
    tagline: "Loja pequena começando a organizar",
    price: "R$ 129,90",
    priceSuffix: "/mês",
    priceNote: "por loja (1 CNPJ) • 1 usuário",
    icon: LuStore,
    features: [
      { label: "Até 40 veículos em estoque", included: true },
      { label: "Cadastro de veículos e despesas", included: true },
      { label: "Clientes PF e PJ (busca de CNPJ e CEP)", included: true },
      { label: "Vendas e contrato de venda", included: true },
      { label: "Painel de faturamento, lucro e estoque", included: true },
      { label: "Funcionários, usuários e permissões", included: false },
      { label: "Consignação e contratos personalizados", included: false },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Revenda com equipe e consignação",
    price: "R$ 189,90",
    priceSuffix: "/mês",
    priceNote: "por loja (1 CNPJ) • até 5 usuários",
    icon: LuBuilding2,
    featured: true,
    features: [
      { label: "Até 120 veículos em estoque", included: true },
      { label: "Tudo do Essencial", included: true },
      { label: "Funcionários, usuários e permissões", included: true },
      { label: "Vendas por vendedor e ranking", included: true },
      { label: "Consignação e contratos (venda, compra, consignação)", included: true },
      { label: "Rateio de lucro entre sócios e investidores", included: true },
      { label: "Vitrine da loja — em breve", included: true, highlight: true },
    ],
  },
  {
    id: "rede",
    name: "Rede",
    tagline: "Operação grande ou com filiais",
    price: "R$ 289,90",
    priceSuffix: "/mês",
    priceNote: "1ª loja • filial +R$ 174 cada",
    icon: LuNetwork,
    features: [
      { label: "Estoque e usuários ilimitados", included: true },
      { label: "Tudo do Pro", included: true },
      { label: "Multi-loja e multi-CNPJ (filiais)", included: true },
      { label: "Troca de loja com 1 clique, dados isolados", included: true },
      { label: "Portais de anúncio (CarrosP, Webmotors) — em breve", included: true, highlight: true },
      { label: "Suporte prioritário", included: true },
    ],
  },
];

const footnotes = ["14 dias grátis, sem cartão", "Plano anual com ~2 meses grátis", "Sem fidelidade"];

export function Pricing() {
  return (
    <section id="planos" className="border-b border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Planos</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Escolha o plano da sua operação
          </h2>
          <p className="mt-4 text-balance text-muted-foreground">
            Do primeiro veículo à rede com filiais. Comece grátis e cresça quando precisar — sem
            fidelidade.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 items-start gap-6 md:grid-cols-3">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border bg-card p-6 shadow-sm sm:p-8",
                  plan.featured
                    ? "border-primary shadow-lg shadow-primary/10 md:-translate-y-3"
                    : "border-border",
                )}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground shadow-sm">
                    Mais popular
                  </span>
                )}

                <div className="flex items-center gap-2.5">
                  <span
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-xl",
                      plan.featured ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary",
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-foreground">{plan.name}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{plan.tagline}</p>

                <div className="mt-6">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-bold tracking-tight text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-sm font-medium text-muted-foreground">
                      {plan.priceSuffix}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{plan.priceNote}</p>
                </div>

                <div className="my-6 h-px w-full bg-border" />

                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f.label} className="flex items-start gap-2.5 text-sm">
                      {f.included ? (
                        <LuCheck
                          className={cn(
                            "mt-0.5 h-4 w-4 shrink-0",
                            f.highlight ? "text-primary" : "text-[var(--status-available)]",
                          )}
                        />
                      ) : (
                        <LuX className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/50" />
                      )}
                      <span
                        className={cn(
                          f.included
                            ? f.highlight
                              ? "font-medium text-primary"
                              : "text-foreground"
                            : "text-muted-foreground/60",
                        )}
                      >
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={siteConfig.whatsappUrl}
                  className={cn(
                    "mt-8 inline-flex h-11 w-full items-center justify-center rounded-lg px-5 text-sm font-medium transition",
                    plan.featured
                      ? "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90"
                      : "border border-border bg-background text-foreground hover:bg-muted",
                  )}
                >
                  Solicitar demonstração
                </a>
              </div>
            );
          })}
        </div>

        <ul className="mt-10 flex flex-col flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground sm:flex-row">
          {footnotes.map((note) => (
            <li key={note} className="inline-flex items-center gap-2">
              <LuCheck className="h-4 w-4 text-[var(--status-available)]" />
              {note}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
