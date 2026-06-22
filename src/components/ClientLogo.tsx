"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface ClientLogoProps {
  name: string;
  /** Caminho do logo em /public (ex.: "/clientes/montana.png"). */
  logo?: string;
  /** Link do site da loja (abre em nova aba). */
  href?: string;
  /**
   * Para logos com fundo escuro/preto: usa um tile escuro + mix-blend-screen,
   * que faz o fundo preto "sumir" no tile, deixando só a marca visível.
   */
  dark?: boolean;
}

/**
 * Item do mural de clientes. Mostra o logo quando o arquivo existe e, enquanto
 * ele não estiver disponível (ou falhar ao carregar), cai num wordmark com o
 * nome da loja — assim a seção fica profissional mesmo antes de o logo chegar.
 * Para exibir o logo real, basta adicionar o arquivo no caminho de `logo`.
 */
export function ClientLogo({ name, logo, href, dark }: ClientLogoProps) {
  const [errored, setErrored] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const showImage = Boolean(logo) && !errored;

  // Cobre o caso de a imagem falhar (ex.: arquivo ainda não existe) antes da
  // hidratação, quando o evento onError pode não disparar.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setErrored(true);
  }, []);

  const tile = cn(
    "group flex h-24 w-44 items-center justify-center overflow-hidden rounded-2xl border p-5 shadow-sm transition duration-300 sm:w-52",
    dark
      ? "border-white/10 bg-zinc-900 hover:border-white/25"
      : "border-border bg-card hover:border-primary/30 hover:shadow-md",
  );

  const inner = showImage ? (
    // eslint-disable-next-line @next/next/no-img-element -- precisamos do fallback via onError, e o arquivo pode ainda não existir
    <img
      ref={imgRef}
      src={logo}
      alt={name}
      loading="lazy"
      decoding="async"
      onError={() => setErrored(true)}
      className={cn(
        "max-h-full w-auto max-w-[170px] object-contain transition duration-300 group-hover:scale-[1.03]",
        dark && "mix-blend-screen",
      )}
    />
  ) : (
    <span
      className={cn(
        "text-center text-base font-bold tracking-tight sm:text-lg",
        dark ? "text-white/90" : "text-muted-foreground",
      )}
    >
      {name}
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${name} — abrir o site em nova aba`}
        className={tile}
      >
        {inner}
      </a>
    );
  }

  return <div className={tile}>{inner}</div>;
}
