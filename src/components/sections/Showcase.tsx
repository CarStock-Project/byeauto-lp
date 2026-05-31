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
            As telas reais do produto, com dados de exemplo. Cada uma foi pensada para uma parte do
            dia a dia da revenda.
          </p>
        </div>

        <div className="mt-16 space-y-24">
          <ScreenBlock
            eyebrow="Painel"
            title="Sua loja resumida em uma única tela"
            description="Faturamento, lucro, total de vendas, ticket médio e a situação do estoque — sempre com os dados da loja ativa, separados das outras lojas."
            bullets={[
              "Faturamento, lucro bruto e ticket médio do período",
              "Total de vendas e total de clientes da loja",
              "Situação do estoque com a distribuição por status",
              "Últimas vendas e ranking de vendedores",
            ]}
            icon={LuChartPie}
            url="app.byeauto.com.br/painel"
          >
            <DashboardMockup />
          </ScreenBlock>

          <ScreenBlock
            eyebrow="Veículos"
            title="Catálogo completo, do cadastro à venda"
            description="O estoque e as despesas do veículo no mesmo lugar, com abas de Veículos e Despesas, filtros e exportação da lista em CSV."
            bullets={[
              "Filtre por disponíveis, vendidos, em manutenção ou consignados",
              "Status destacado por cor (Disponível, Reservado, Vendido, Manutenção)",
              "Veículos próprios ou consignados, com a comissão da loja",
              "Aba de Despesas com os custos lançados por veículo",
              "Exporte a lista do estoque em CSV com um clique",
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
            description="Acompanhe faturamento, lucro, margem e o desempenho de cada vendedor; veja as vendas ativas e canceladas e emita o contrato — sem planilhas."
            bullets={[
              "Filtros por período (De / Até) e por vendedor",
              "Faturamento, ticket médio e lucro bruto após custos e despesas",
              "Margem média e faturamento por período",
              "Faturamento por vendedor e ranking da equipe",
              "Vendas ativas e canceladas, com o contrato emitido na hora",
            ]}
            icon={LuReceipt}
            url="app.byeauto.com.br/vendas"
          >
            <SalesMockup />
          </ScreenBlock>

          <ScreenBlock
            eyebrow="Clientes"
            title="Pessoa Física ou Jurídica, no mesmo fluxo"
            description="Cadastro unificado de Pessoa Física e Jurídica, com busca de CNPJ e busca de CEP para preencher o endereço sem digitar tudo à mão."
            bullets={[
              "Pessoa Física ou Jurídica no mesmo fluxo",
              "Busca de CNPJ que preenche os dados da empresa",
              "Busca de CEP para completar o endereço",
              "Vários endereços e telefones por cliente",
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
