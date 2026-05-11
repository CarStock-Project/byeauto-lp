"use client";

import { useEffect, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

import { siteConfig } from "@/lib/utils";

interface MobileNavLink {
  href: string;
  label: string;
}

const links: MobileNavLink[] = [
  { href: "#features", label: "Funcionalidades" },
  { href: "#telas", label: "Telas" },
  { href: "#beneficios", label: "Benefícios" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground transition hover:bg-muted md:hidden"
      >
        {open ? <LuX className="h-5 w-5" /> : <LuMenu className="h-5 w-5" />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-16 border-b border-border bg-background shadow-lg md:hidden">
          <nav
            className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm sm:px-6"
            aria-label="Navegação móvel"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-foreground transition hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <a
              href={siteConfig.appUrl}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-muted-foreground transition hover:bg-muted sm:hidden"
            >
              Entrar
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
