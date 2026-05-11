import { LuArrowRight } from "react-icons/lu";

import { siteConfig } from "@/lib/utils";

export function CTA() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 text-center shadow-lg sm:p-16">
          <div
            className="absolute -top-24 left-1/2 -z-10 h-[280px] w-[640px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, oklch(0.55 0.18 255 / 0.4), transparent 70%)",
            }}
            aria-hidden="true"
          />

          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Pronto para modernizar sua revenda?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-muted-foreground">
            Crie sua conta, importe seu estoque e tenha um dashboard operacional rodando hoje
            mesmo. Sem cartão de crédito.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={siteConfig.appUrl}
              className="group inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-7 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90"
            >
              Acessar a plataforma
              <LuArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#telas"
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-border bg-background px-7 text-sm font-medium text-foreground transition hover:bg-muted"
            >
              Rever as telas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
