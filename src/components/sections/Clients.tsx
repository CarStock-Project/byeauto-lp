import { LuBadgeCheck } from "react-icons/lu";

import { ClientLogo } from "@/components/ClientLogo";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/utils";

interface Client {
  name: string;
  /**
   * Caminho do logo em /public. Para adicionar uma nova loja, basta colocar o
   * arquivo em /public/clientes e apontar aqui.
   */
  logo?: string;
  /** Link do site/vitrine da loja. */
  href?: string;
  /** Use para logos com fundo escuro/preto (renderiza num tile escuro). */
  dark?: boolean;
}

const clients: Client[] = [
  {
    name: "Montana Automóveis",
    logo: "/clientes/montana.png",
    href: "https://montanautomoveislimeira.com.br",
    dark: true,
  },
];

export function Clients() {
  return (
    <section id="clientes" className="border-b border-border bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            <LuBadgeCheck className="h-3.5 w-3.5" />
            Quem confia no ByeAuto
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Lojas que já confiam no nosso trabalho
          </h2>
          <p className="mt-4 text-balance text-muted-foreground">
            Revendas que escolheram o ByeAuto para organizar o estoque, as vendas e o relacionamento
            com o cliente — do primeiro veículo ao fechamento da venda.
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-4 sm:gap-5"
        >
          {clients.map((client) => (
            <ClientLogo
              key={client.name}
              name={client.name}
              logo={client.logo}
              href={client.href}
              dark={client.dark}
            />
          ))}
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-12 max-w-xl text-balance text-center text-sm text-muted-foreground">
            Sua loja também pode fazer parte.{" "}
            <a href={siteConfig.whatsappUrl} className="font-medium text-primary hover:underline">
              Fale com a gente
            </a>{" "}
            e veja o ByeAuto funcionando na sua operação.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
