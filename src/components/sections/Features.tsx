import {
  LuBuilding,
  LuCar,
  LuChartPie,
  LuDownload,
  LuShield,
  LuUsers,
} from "react-icons/lu";

const features = [
  {
    icon: LuCar,
    title: "Catálogo de veículos",
    description:
      "Hierarquia completa Marca → Modelo → Versão → Veículo com status, fotos, opcionais, quilometragem, chassi e preço de custo/venda.",
    accent: "primary",
  },
  {
    icon: LuChartPie,
    title: "Dashboard operacional",
    description:
      "Métricas em tempo real: total de veículos, distribuição por status, total de clientes — sempre filtrado pela filial ativa.",
    accent: "emerald",
  },
  {
    icon: LuUsers,
    title: "Gestão de clientes",
    description:
      "Suporte completo a Pessoa Física e Jurídica, com validação de CPF/CNPJ e autopreenchimento via Receita Federal.",
    accent: "violet",
  },
  {
    icon: LuBuilding,
    title: "Multi-loja nativo",
    description:
      "Cada usuário opera dentro de uma filial. Troque de loja sem precisar deslogar — JWT é reemitido na hora.",
    accent: "sky",
  },
  {
    icon: LuShield,
    title: "Autenticação segura",
    description:
      "JWT assinado com HMAC-SHA512, cookie HttpOnly com SameSite=Strict, BCrypt para senhas e controle de acesso por papel.",
    accent: "amber",
  },
  {
    icon: LuDownload,
    title: "Exportação CSV",
    description:
      "Exporte a listagem inteira de veículos respeitando os filtros aplicados, pronto para abrir no Excel.",
    accent: "muted",
  },
] as const;

const accentBg: Record<(typeof features)[number]["accent"], string> = {
  primary: "bg-primary/10 text-primary",
  emerald: "bg-emerald-500/10 text-emerald-600",
  amber: "bg-amber-500/10 text-amber-600",
  violet: "bg-violet-500/10 text-violet-600",
  sky: "bg-sky-500/10 text-sky-600",
  muted: "bg-muted text-muted-foreground",
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
            Feito para concessionárias que querem escalar
          </h2>
          <p className="mt-4 text-balance text-muted-foreground">
            Do cadastro do veículo à conclusão da venda — todas as operações da revenda no mesmo
            painel, com isolamento de dados por filial.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <article
                key={f.title}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${accentBg[f.accent]}`}>
                  <Icon className="h-5 w-5" />
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
