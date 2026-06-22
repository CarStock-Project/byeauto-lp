import { LuCar, LuChartPie, LuReceipt, LuSearch, LuTrendingUp, LuUsers } from "react-icons/lu";

import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

type Accent = "primary" | "sky" | "emerald" | "violet";
type BlockId = "painel" | "veiculos" | "vendas" | "clientes";

interface HighlightBlock {
  id: BlockId;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  icon: React.ComponentType<{ className?: string }>;
  accent: Accent;
}

const blocks: HighlightBlock[] = [
  {
    id: "painel",
    eyebrow: "Painel",
    title: "Sua loja resumida em uma única tela",
    description:
      "Faturamento, lucro, total de vendas, ticket médio e a situação do estoque — sempre com os dados da loja ativa, separados das outras lojas.",
    bullets: [
      "Faturamento, lucro bruto e ticket médio do período",
      "Total de vendas e total de clientes da loja",
      "Situação do estoque com a distribuição por status",
      "Últimas vendas e ranking de vendedores",
    ],
    icon: LuChartPie,
    accent: "primary",
  },
  {
    id: "veiculos",
    eyebrow: "Veículos",
    title: "Catálogo completo, do cadastro à venda",
    description:
      "O estoque e as despesas do veículo no mesmo lugar, com filtros por situação e exportação da lista em CSV.",
    bullets: [
      "Filtre por disponíveis, vendidos, em manutenção ou consignados",
      "Status destacado por cor (Disponível, Reservado, Vendido, Manutenção)",
      "Veículos próprios ou consignados, com a comissão da loja",
      "Despesas lançadas por veículo e exportação em CSV",
    ],
    icon: LuCar,
    accent: "sky",
  },
  {
    id: "vendas",
    eyebrow: "Vendas",
    title: "Feche a venda e veja o lucro na hora",
    description:
      "Acompanhe faturamento, lucro, margem e o desempenho de cada vendedor; veja as vendas ativas e canceladas e emita o contrato — sem planilhas.",
    bullets: [
      "Filtros por período e por vendedor",
      "Faturamento, ticket médio e lucro bruto após custos e despesas",
      "Margem média e faturamento por período",
      "Faturamento por vendedor e ranking da equipe",
    ],
    icon: LuReceipt,
    accent: "emerald",
  },
  {
    id: "clientes",
    eyebrow: "Clientes",
    title: "Pessoa Física ou Jurídica, no mesmo fluxo",
    description:
      "Cadastro unificado de Pessoa Física e Jurídica, com busca de CNPJ e busca de CEP para preencher o endereço sem digitar tudo à mão.",
    bullets: [
      "Pessoa Física ou Jurídica no mesmo fluxo",
      "Busca de CNPJ que preenche os dados da empresa",
      "Busca de CEP para completar o endereço",
      "Vários endereços e telefones por cliente",
    ],
    icon: LuUsers,
    accent: "violet",
  },
];

const accentChip: Record<Accent, string> = {
  primary: "bg-primary/10 text-primary",
  sky: "bg-sky-500/10 text-sky-600",
  emerald: "bg-emerald-500/10 text-emerald-600",
  violet: "bg-violet-500/10 text-violet-600",
};

const stageBg: Record<Accent, string> = {
  primary: "from-primary/[0.08]",
  sky: "from-sky-500/[0.1]",
  emerald: "from-emerald-500/[0.1]",
  violet: "from-violet-500/[0.1]",
};

const stageBlob: Record<Accent, string> = {
  primary: "oklch(0.55 0.18 255 / 0.18)",
  sky: "oklch(0.7 0.15 235 / 0.18)",
  emerald: "oklch(0.72 0.16 160 / 0.18)",
  violet: "oklch(0.6 0.2 295 / 0.18)",
};

type StatusKey = "available" | "reserved" | "sold" | "maintenance";

function Chip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card/80 px-3 py-2.5 shadow-sm backdrop-blur">
      <p className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
      <div className="mt-0.5 flex items-center gap-1">
        <p className="text-sm font-bold text-foreground">{value}</p>
        <LuTrendingUp className="h-3.5 w-3.5 text-[var(--status-available)]" />
      </div>
    </div>
  );
}

function Donut({ segments }: { segments: { value: number; color: string }[] }) {
  const r = 32;
  const circumference = 2 * Math.PI * r;
  let acc = 0;
  return (
    <svg viewBox="0 0 80 80" className="h-20 w-20 -rotate-90" aria-hidden="true">
      <circle cx="40" cy="40" r={r} fill="none" strokeWidth="10" className="stroke-border/60" />
      {segments.map((segment, i) => {
        const dash = segment.value * circumference;
        const offset = -acc * circumference;
        acc += segment.value;
        return (
          <circle
            key={i}
            cx="40"
            cy="40"
            r={r}
            fill="none"
            stroke={segment.color}
            strokeWidth="10"
            strokeDasharray={`${dash} ${circumference - dash}`}
            strokeDashoffset={offset}
          />
        );
      })}
    </svg>
  );
}

function Sparkline({ className }: { className?: string }) {
  const values = [10, 16, 12, 20, 18, 26, 24, 32];
  const max = 36;
  const width = 200;
  const height = 64;
  const step = width / (values.length - 1);
  const line = values.map((v, i) => `${i * step},${height - (v / max) * height}`).join(" ");
  const area = `0,${height} ${line} ${width},${height}`;
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className={className} preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="hl-spark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--status-available)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--status-available)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={area} fill="url(#hl-spark)" />
      <polyline
        points={line}
        fill="none"
        stroke="var(--status-available)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function StatusPill({ status, label }: { status: StatusKey; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/80 px-2.5 py-1 text-[11px] font-medium text-foreground backdrop-blur">
      <span className="h-2 w-2 rounded-full" style={{ background: `var(--status-${status})` }} />
      {label}
    </span>
  );
}

function VisualHeader({ icon: Icon, accent }: { icon: HighlightBlock["icon"]; accent: Accent }) {
  return (
    <div className="flex items-center gap-3">
      <span className={cn("flex h-11 w-11 items-center justify-center rounded-xl", accentChip[accent])}>
        <Icon className="h-5 w-5" />
      </span>
      <div className="space-y-1.5">
        <div className="h-2.5 w-28 rounded-full bg-foreground/15" />
        <div className="h-2 w-16 rounded-full bg-border" />
      </div>
    </div>
  );
}

function BlockVisual({ block }: { block: HighlightBlock }) {
  const content = () => {
    switch (block.id) {
      case "painel":
        return (
          <>
            <div className="grid grid-cols-2 gap-3">
              <Chip label="Faturamento" value="R$ 172k" />
              <Chip label="Lucro bruto" value="R$ 81k" />
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card/70 p-4 backdrop-blur">
              <Donut
                segments={[
                  { value: 0.62, color: "var(--status-available)" },
                  { value: 0.14, color: "var(--status-reserved)" },
                  { value: 0.14, color: "var(--status-sold)" },
                  { value: 0.1, color: "var(--status-maintenance)" },
                ]}
              />
              <ul className="space-y-1.5 text-[11px] text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--status-available)]" /> Disponível
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--status-reserved)]" /> Reservado
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--status-sold)]" /> Vendido
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--status-maintenance)]" /> Manutenção
                </li>
              </ul>
            </div>
          </>
        );
      case "veiculos":
        return (
          <>
            <div className="flex flex-wrap gap-2">
              <StatusPill status="available" label="Disponível" />
              <StatusPill status="reserved" label="Reservado" />
              <StatusPill status="sold" label="Vendido" />
              <StatusPill status="maintenance" label="Manutenção" />
            </div>
            <div className="space-y-2.5">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card/70 p-3 backdrop-blur"
                >
                  <span className="flex h-9 w-12 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                    <LuCar className="h-4 w-4" />
                  </span>
                  <div className="flex-1 space-y-1.5">
                    <div className="h-2 w-2/3 rounded-full bg-foreground/15" />
                    <div className="h-2 w-1/3 rounded-full bg-border" />
                  </div>
                  <div className="h-2.5 w-12 rounded-full bg-primary/30" />
                </div>
              ))}
            </div>
          </>
        );
      case "vendas":
        return (
          <>
            <div className="grid grid-cols-2 gap-3">
              <Chip label="Faturamento" value="R$ 658k" />
              <Chip label="Margem média" value="14,2%" />
            </div>
            <div className="rounded-2xl border border-border bg-card/70 p-4 backdrop-blur">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                  Faturamento por período
                </p>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[var(--status-available)]">
                  <LuTrendingUp className="h-3 w-3" /> +18%
                </span>
              </div>
              <Sparkline className="h-16 w-full" />
            </div>
          </>
        );
      case "clientes":
        return (
          <>
            <div className="inline-flex rounded-xl border border-border bg-card/80 p-1 backdrop-blur">
              <span className="rounded-lg bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground">
                Pessoa Física
              </span>
              <span className="px-4 py-1.5 text-xs font-medium text-muted-foreground">
                Pessoa Jurídica
              </span>
            </div>
            <div className="space-y-3 rounded-2xl border border-border bg-card/70 p-4 backdrop-blur">
              <div className="flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/5 px-3 py-2">
                <LuSearch className="h-4 w-4 text-primary" />
                <div className="h-2 w-20 rounded-full bg-primary/30" />
                <span className="ml-auto rounded-md bg-primary px-2 py-1 text-[10px] font-semibold text-primary-foreground">
                  Buscar CNPJ
                </span>
              </div>
              {["w-2/3", "w-1/2", "w-3/4"].map((labelWidth) => (
                <div key={labelWidth} className="space-y-1.5">
                  <div className={cn("h-1.5 rounded-full bg-border", labelWidth)} />
                  <div className="h-8 rounded-lg border border-border bg-muted/50" />
                </div>
              ))}
            </div>
          </>
        );
    }
  };

  return (
    <div className="relative min-h-[340px] overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-primary/5">
      <div className={cn("absolute inset-0 bg-linear-to-br via-card to-card", stageBg[block.accent])} />
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div
        className="absolute -right-12 -top-12 h-44 w-44 rounded-full blur-3xl"
        style={{ background: stageBlob[block.accent] }}
        aria-hidden="true"
      />
      <div className="relative flex h-full flex-col justify-center gap-4 p-6 sm:p-8">
        <VisualHeader icon={block.icon} accent={block.accent} />
        {content()}
      </div>
    </div>
  );
}

export function Highlights() {
  return (
    <section id="destaques" className="relative border-b border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Por dentro do ByeAuto
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Uma plataforma pensada para o dia a dia da revenda
          </h2>
          <p className="mt-4 text-balance text-muted-foreground">
            Do cadastro do veículo ao fechamento da venda — cada parte do sistema resolve uma etapa
            da operação, sempre com os dados de cada loja separados.
          </p>
        </Reveal>

        <div className="mt-16 space-y-20 sm:space-y-24">
          {blocks.map((block, index) => {
            const reverse = index % 2 === 1;
            const Icon = block.icon;
            return (
              <Reveal key={block.id}>
                <article className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
                  <div
                    className={cn("min-w-0 space-y-5 lg:col-span-5", reverse && "lg:order-2")}
                  >
                    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-primary">
                      <Icon className="h-3.5 w-3.5" />
                      {block.eyebrow}
                    </div>
                    <h3 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                      {block.title}
                    </h3>
                    <p className="text-balance text-muted-foreground">{block.description}</p>
                    <ul className="space-y-2.5 pt-2">
                      {block.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2.5 text-sm text-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={cn("min-w-0 lg:col-span-7", reverse && "lg:order-1")}>
                    <BlockVisual block={block} />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
