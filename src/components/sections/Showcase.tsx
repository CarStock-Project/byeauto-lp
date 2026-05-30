import { LuCar, LuChartPie, LuReceipt, LuUsers } from "react-icons/lu";

import { BrowserFrame } from "@/components/BrowserFrame";
import { CustomersMockup } from "@/components/mockups/CustomersMockup";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { SalesMockup } from "@/components/mockups/SalesMockup";
import { VehiclesMockup } from "@/components/mockups/VehiclesMockup";

interface ScreenBlockProps {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  icon: React.ComponentType<{ className?: string }>;
  url: string;
  reverse?: boolean;
  children: React.ReactNode;
}

function ScreenBlock({
  eyebrow,
  title,
  description,
  bullets,
  icon: Icon,
  url,
  reverse,
  children,
}: ScreenBlockProps) {
  return (
    <article className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
      <div className={`min-w-0 space-y-5 lg:col-span-4 ${reverse ? "lg:order-2" : ""}`}>
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-primary">
          <Icon className="h-3.5 w-3.5" />
          {eyebrow}
        </div>
        <h3 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {title}
        </h3>
        <p className="text-balance text-muted-foreground">{description}</p>
        <ul className="space-y-2.5 pt-2">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm text-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div className={`min-w-0 lg:col-span-8 ${reverse ? "lg:order-1" : ""}`}>
        <BrowserFrame url={url}>{children}</BrowserFrame>
      </div>
    </article>
  );
}

export function Showcase() {
  return (
    <section id="telas" className="relative border-b border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Demonstração
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Conheça as telas do ByeAuto
          </h2>
          <p className="mt-4 text-balance text-muted-foreground">
            Interface real do produto, renderizada com dados de exemplo. Cada tela é otimizada para
            uma operação específica da revenda.
          </p>
        </div>

        <div className="mt-16 space-y-24">
          <ScreenBlock
            eyebrow="Painel"
            title="Sua operação resumida em uma única tela"
            description="KPIs principais, distribuição por status, lucro por período e atividade recente — tudo isolado pela filial ativa do usuário."
            bullets={[
              "Total de veículos e clientes em tempo real",
              "Gráfico de distribuição por status (donut)",
              "Lucro bruto por período em gráfico de área",
              "Últimas vendas e ranking de vendedores",
            ]}
            icon={LuChartPie}
            url="app.byeauto.com.br/dashboard"
          >
            <DashboardMockup />
          </ScreenBlock>

          <ScreenBlock
            eyebrow="Veículos"
            title="Catálogo completo, do cadastro à venda"
            description="Lista paginada com abas de Veículos e Despesas, filtros por status, condição e propriedade, mais exportação CSV respeitando os filtros aplicados."
            bullets={[
              "Hierarquia Marca → Modelo → Versão → Veículo",
              "Status com cores semânticas (Disponível, Reservado, Vendido, Manutenção)",
              "Condição Novo/Seminovo e veículos próprios ou consignados",
              "Aba de Despesas e custos lançados por veículo",
              "Da listagem direto para a venda e a emissão do contrato",
            ]}
            icon={LuCar}
            url="app.byeauto.com.br/veiculos"
            reverse
          >
            <VehiclesMockup />
          </ScreenBlock>

          <ScreenBlock
            eyebrow="Vendas"
            title="Feche a venda e veja o lucro na hora"
            description="Painel com filtros por período e vendedor: faturamento, lucro bruto, margem e ranking de vendedores — sem planilhas."
            bullets={[
              "Filtros por período (De / Até) e por vendedor",
              "Faturamento, ticket médio e lucro bruto após custos e despesas",
              "Margem bruta média e faturamento por período em gráfico",
              "Ranking de faturamento por vendedor",
              "Múltiplas formas de pagamento e contrato emitido na negociação",
            ]}
            icon={LuReceipt}
            url="app.byeauto.com.br/vendas"
          >
            <SalesMockup />
          </ScreenBlock>

          <ScreenBlock
            eyebrow="Clientes"
            title="Pessoa Física ou Jurídica, no mesmo fluxo"
            description="Cadastro unificado com validação de CPF/CNPJ e autopreenchimento dos dados da empresa. Busca por nome, email ou documento."
            bullets={[
              "Validação de CPF, CNPJ e Inscrição Estadual",
              "Autopreenchimento dos dados da empresa pelo CNPJ",
              "Múltiplos endereços e telefones por cliente",
              "Busca instantânea com destaque do termo procurado",
              "Mesmo email pode existir em filiais diferentes",
            ]}
            icon={LuUsers}
            url="app.byeauto.com.br/clientes"
            reverse
          >
            <CustomersMockup />
          </ScreenBlock>
        </div>
      </div>
    </section>
  );
}
