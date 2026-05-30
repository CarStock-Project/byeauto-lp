import {
  LuBuilding,
  LuCar,
  LuChartPie,
  LuFileText,
  LuHandshake,
  LuReceipt,
  LuShield,
  LuUsers,
  LuWallet,
} from "react-icons/lu";

const features = [
  {
    icon: LuCar,
    title: "Catálogo de veículos",
    description:
      "Hierarquia completa Marca → Modelo → Versão → Veículo, com status, fotos, opcionais, condição Novo/Seminovo e preço de custo/venda. Exporte a listagem em CSV respeitando os filtros.",
    accent: "primary",
  },
  {
    icon: LuReceipt,
    title: "Vendas e pagamentos",
    description:
      "Registre a venda do início ao fim, com múltiplas formas de pagamento na mesma negociação (entrada, financiamento, PIX, cartão) e acompanhamento do lucro líquido.",
    accent: "emerald",
  },
  {
    icon: LuFileText,
    title: "Contratos personalizados",
    description:
      "Crie seus próprios modelos com variáveis dinâmicas e emita contratos de venda, compra e consignação já preenchidos com os dados do veículo e do cliente.",
    accent: "violet",
  },
  {
    icon: LuHandshake,
    title: "Consignação de veículos",
    description:
      "Receba veículos de terceiros para vender e controle a comissão da loja por percentual ou valor fixo — com contrato de consignação próprio.",
    accent: "sky",
  },
  {
    icon: LuChartPie,
    title: "Distribuição de lucro",
    description:
      "Rateie automaticamente o lucro de cada venda entre donos e investidores do veículo e acompanhe o ranking de quem mais rende com o widget Top Donos.",
    accent: "amber",
  },
  {
    icon: LuWallet,
    title: "Despesas por veículo",
    description:
      "Lance os custos de cada veículo (preparação, documentação, reparos) e veja o impacto real na margem antes de fechar o negócio.",
    accent: "muted",
  },
  {
    icon: LuUsers,
    title: "Clientes e equipe",
    description:
      "Cadastro de clientes Pessoa Física e Jurídica com validação de CPF/CNPJ, além de gestão de funcionários e cargos da loja.",
    accent: "violet",
  },
  {
    icon: LuBuilding,
    title: "Multi-loja nativo",
    description:
      "Cada usuário opera dentro de uma filial. Troque de loja com um clique, sem precisar deslogar nem reabrir o sistema.",
    accent: "sky",
  },
  {
    icon: LuShield,
    title: "Acesso seguro por papel",
    description:
      "Administradores e operadores enxergam apenas o que precisam, com dados financeiros mascarados e sessão isolada por usuário.",
    accent: "primary",
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
