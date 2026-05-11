import { LuClock, LuLock, LuRefreshCw, LuTrendingUp } from "react-icons/lu";

const benefits = [
  {
    icon: LuTrendingUp,
    title: "Decisões baseadas em dados",
    description:
      "Veja a saúde do estoque, taxa de conversão por status e volume de clientes ativos sem precisar montar planilhas.",
  },
  {
    icon: LuRefreshCw,
    title: "Multi-filial sem confusão",
    description:
      "Cada loja enxerga apenas o que é seu. O mesmo usuário pode trocar entre filiais sem reautenticar — o JWT é reemitido na hora.",
  },
  {
    icon: LuLock,
    title: "Segurança de banco",
    description:
      "JWT HMAC-SHA512, cookie HttpOnly com SameSite=Strict, BCrypt em senhas e CORS configurado por origem.",
  },
  {
    icon: LuClock,
    title: "Operacional desde o dia 1",
    description:
      "Migrações Flyway automáticas, dados isolados por tenant via filtros automáticos no repositório, sem configuração extra.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="relative overflow-hidden border-b border-border bg-primary py-20 text-primary-foreground sm:py-28">
      <div className="absolute inset-0 bg-linear-to-br from-primary via-primary to-[oklch(0.32_0.14_260)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,oklch(1_0_0/0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-grid-dark opacity-[0.06]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
            Por que ByeAuto
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Construído para o ritmo da revenda
          </h2>
          <p className="mt-4 text-balance text-primary-foreground/80">
            Resolvemos os problemas reais de quem opera várias lojas: visibilidade, isolamento de
            dados e velocidade no chão da concessionária.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 backdrop-blur"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">
                  {b.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
