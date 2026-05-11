import {
  SiDocker,
  SiFlyway,
  SiPostgresql,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

const stack = [
  { name: "Spring Boot 3.5", icon: SiSpringboot, color: "text-green-600" },
  { name: "PostgreSQL 16", icon: SiPostgresql, color: "text-blue-600" },
  { name: "Flyway", icon: SiFlyway, color: "text-red-500" },
  { name: "React 19", icon: SiReact, color: "text-sky-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "Tailwind CSS 4", icon: SiTailwindcss, color: "text-cyan-500" },
  { name: "Vite", icon: SiVite, color: "text-violet-500" },
  { name: "Docker", icon: SiDocker, color: "text-blue-500" },
];

export function Stack() {
  return (
    <section id="stack" className="border-b border-border bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Tecnologia
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Stack moderna, sem mágica
          </h2>
          <p className="mt-4 text-balance text-muted-foreground">
            Java 21 + Spring Boot no backend com{" "}
            <span className="font-medium text-foreground">JdbcClient</span> puro (zero JPA),
            PostgreSQL gerenciado por Flyway, e React 19 + Vite no frontend. Deploy blue/green em
            VPS com Caddy fazendo TLS e roteamento.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stack.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.name}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition hover:shadow-md"
              >
                <Icon className={`h-6 w-6 ${s.color}`} aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">{s.name}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-10 grid gap-4 rounded-2xl border border-border bg-card p-6 sm:grid-cols-3">
          <Stat label="Cobertura de testes" value="94%" />
          <Stat label="Migrações Flyway" value="V1 → V8" />
          <Stat label="Endpoints REST" value="60+" />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-1 text-2xl font-bold tracking-tight text-foreground">{value}</p>
    </div>
  );
}
