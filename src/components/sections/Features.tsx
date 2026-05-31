import {
  LuBriefcase,
  LuCar,
  LuFileText,
  LuGauge,
  LuMegaphone,
  LuReceipt,
  LuShieldCheck,
  LuStore,
  LuUsers,
} from "react-icons/lu";

const features = [
  {
    icon: LuGauge,
    title: "Painel",
    description:
      "Visão geral da sua loja em uma só tela: faturamento, lucro, total de vendas, ticket médio, total de clientes, situação do estoque, ranking de vendedores e as últimas vendas.",
    accent: "primary",
  },
  {
    icon: LuCar,
    title: "Veículos",
    description:
      "Acompanhe o estoque e as despesas do veículo. Filtre por veículos disponíveis, vendidos, em manutenção ou consignados, lance as despesas de cada veículo e exporte a lista do estoque em CSV.",
    accent: "sky",
  },
  {
    icon: LuUsers,
    title: "Clientes",
    description:
      "Cadastre clientes Pessoa Física ou Jurídica com busca automática de CNPJ e busca de CEP para preencher o endereço — deixando o cadastro mais rápido e sem erros.",
    accent: "violet",
  },
  {
    icon: LuReceipt,
    title: "Vendas",
    description:
      "Acompanhe faturamento, lucro, margem, faturamento por período e vendas por vendedor. Veja a lista de vendas ativas e canceladas, abra cada venda em detalhe e emita o contrato na hora.",
    accent: "emerald",
  },
  {
    icon: LuBriefcase,
    title: "Funcionários",
    description:
      "Cadastre os funcionários da loja e seus cargos, mantendo a equipe organizada e pronta para ser vinculada às vendas e às comissões.",
    accent: "amber",
  },
  {
    icon: LuShieldCheck,
    title: "Usuários",
    description:
      "Crie os acessos ao sistema com permissões elevadas para os donos da loja e permissões reduzidas para os vendedores — cada um enxerga apenas o que precisa.",
    accent: "primary",
  },
  {
    icon: LuFileText,
    title: "Modelos de contrato",
    description:
      "Cadastre quantos modelos quiser, dos tipos Venda, Compra e Consignação. Na hora de fechar o negócio, o contrato sai pronto com os dados do veículo e do cliente.",
    accent: "violet",
  },
  {
    icon: LuMegaphone,
    title: "Portais de anúncio",
    description:
      "Em breve: integração com os principais portais, como CarrosP e Webmotors. Cadastre o veículo uma única vez no ByeAuto e ele aparece automaticamente em todos os portais.",
    accent: "sky",
    soon: true,
  },
  {
    icon: LuStore,
    title: "Vitrine",
    description:
      "Em breve: um site personalizado da sua loja exibindo os veículos disponíveis para os clientes. Uma vitrine própria passa mais confiança e credibilidade para quem vai comprar.",
    accent: "emerald",
    soon: true,
  },
] as const;

const accentBg: Record<(typeof features)[number]["accent"], string> = {
  primary: "bg-primary/10 text-primary",
  emerald: "bg-emerald-500/10 text-emerald-600",
  amber: "bg-amber-500/10 text-amber-600",
  violet: "bg-violet-500/10 text-violet-600",
  sky: "bg-sky-500/10 text-sky-600",
};

export function Features() {
  return (
    <section id="features" className="border-b border-border bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Tudo em um só lugar
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Cada tela pensada para uma parte da sua loja
          </h2>
          <p className="mt-4 text-balance text-muted-foreground">
            Do cadastro do veículo à conclusão da venda — todas as operações da revenda no mesmo
            painel, com os dados de cada loja separados.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            const soon = "soon" in f && f.soon;
            return (
              <article
                key={f.title}
                className="group relative rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${accentBg[f.accent]}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  {soon && (
                    <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber-600">
                      Em breve
                    </span>
                  )}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
