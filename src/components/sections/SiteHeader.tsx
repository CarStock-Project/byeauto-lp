import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

import { siteConfig } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label={`${siteConfig.name} — Página inicial`}>
          <Image
            src="/bye_auto_logo_v2.png"
            alt={siteConfig.name}
            width={120}
            height={36}
            priority
            className="h-9 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm md:flex" aria-label="Navegação principal">
          <a href="#features" className="text-muted-foreground transition hover:text-foreground">
            Funcionalidades
          </a>
          <a href="#telas" className="text-muted-foreground transition hover:text-foreground">
            Telas
          </a>
          <a href="#beneficios" className="text-muted-foreground transition hover:text-foreground">
            Benefícios
          </a>
          <a href="#stack" className="text-muted-foreground transition hover:text-foreground">
            Tecnologia
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.appUrl}
            className="hidden text-sm font-medium text-muted-foreground transition hover:text-foreground sm:inline-flex"
          >
            Entrar
          </a>
          <a
            href={siteConfig.appUrl}
            className="group inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90"
          >
            Acessar plataforma
            <LuArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
