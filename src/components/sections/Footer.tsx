import Image from "next/image";

import { siteConfig } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3 lg:col-span-2">
            <Image
              src="/bye_auto_logo_v2.png"
              alt={siteConfig.name}
              width={120}
              height={36}
              className="h-9 w-auto object-contain"
            />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Plataforma SaaS multi-loja para gestão completa de concessionárias — do cadastro de
              veículos ao fechamento da venda.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Produto</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#features" className="transition hover:text-foreground">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#telas" className="transition hover:text-foreground">
                  Telas
                </a>
              </li>
              <li>
                <a href="#beneficios" className="transition hover:text-foreground">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#stack" className="transition hover:text-foreground">
                  Tecnologia
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Plataforma</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href={siteConfig.appUrl} className="transition hover:text-foreground">
                  Entrar
                </a>
              </li>
              <li>
                <a href={siteConfig.appUrl} className="transition hover:text-foreground">
                  Criar conta
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Construído com Spring Boot, React e PostgreSQL.
          </p>
        </div>
      </div>
    </footer>
  );
}
