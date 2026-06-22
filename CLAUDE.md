# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Next dev server on http://localhost:3000
npm run build    # Production build (static-friendly; no runtime data)
npm start        # Serve the production build
npm run lint     # next lint
```

No test runner is configured.

## Architecture

Single-page institutional landing page for **ByeAuto**, a multi-tenant SaaS for car dealerships. Built with **Next.js 15 App Router + React 19 + Tailwind CSS 4 + TypeScript (strict)**. Content is in **pt-BR**.

### Composition model

- `src/app/page.tsx` is the entire site. It composes section components from `src/components/sections/` in fixed order: `SiteHeader → Hero → Features → Highlights → Vitrine → Clients → Benefits → Pricing → CTA → Footer`. To change page structure, edit this file; to change a section, edit the corresponding file in `sections/`. **Do not reintroduce technology/stack references in marketing copy** — copy is product-focused (no JWT, BCrypt, Flyway, MinIO, Spring Boot, React, etc).
- `src/app/layout.tsx` owns global metadata (OpenGraph, Twitter, robots, icons) and injects a `SoftwareApplication` JSON-LD block. All SEO/title/url/keyword strings come from `siteConfig` in `src/lib/utils.ts` — update there, not in `layout.tsx`.
- `src/app/sitemap.ts` and `src/app/robots.ts` are dynamic Metadata Route handlers that also read from `siteConfig`.

### Visuals: no real internal screens

The landing page deliberately does **not** reproduce the real internal product screens (they used to live in a `Showcase` section that was removed so competitors can't copy the UI). The `Highlights` section (`sections/Highlights.tsx`) replaces it with **abstract, stylized visuals** (gradient panels with chips, a donut, a sparkline, status pills) — illustrative marketing art, not faithful copies of the app. Keep it that way: do not re-add screen-accurate mockups of the internal panel/dashboards.

The one remaining mockup is `mockups/VitrineMockup.tsx` (rendered by `sections/Vitrine.tsx`) — it simulates the **public storefront** (the Vitrine), which is customer-facing by design, so it's fine to show. It reads hard-coded data from `src/lib/mockData.ts` (`mockVehicles`, `activeBranch`, `formatBRL`, `formatKm`). `BrowserFrame` (`components/BrowserFrame.tsx`) provides the browser chrome.

### Scroll-reveal animations

`components/Reveal.tsx` is a lightweight `"use client"` wrapper that fades/slides its children in when they enter the viewport (IntersectionObserver, fires once). It's used across the sections. Rules live in `globals.css` under `@media (prefers-reduced-motion: no-preference)` (`[data-reveal]` → `.is-visible`), using only `opacity`/`transform` (GPU-friendly). Content stays in the DOM (SEO) and a `<noscript>` override in `layout.tsx` guarantees visibility without JS. To stagger items, pass `delay` (ms). Don't wrap the Hero `<h1>` (protect LCP).

### Clients / social proof

`sections/Clients.tsx` renders the "lojas que confiam" logo wall from a `clients` array. Each entry is `{ name, logo?, href?, dark? }`. `components/ClientLogo.tsx` shows the logo image and gracefully falls back to a text wordmark via `onError` when the file is missing — so a new store can be added before its logo file exists. Logo files go in `public/clientes/` (see `public/clientes/README.txt`); set `dark: true` for logos with a black/dark background (renders on a dark tile with `mix-blend-screen` so the background disappears).

### Theme system

Tailwind v4 with **`@theme inline`** in `src/app/globals.css`. Colors are **oklch** CSS variables on `:root` (`--primary`, `--card`, `--muted`, semantic `--status-available/sold/reserved/maintenance`, full `--sidebar-*` set). Per the README, these tokens are deliberately portable to/from the sibling `carstock-app` product — when porting visual elements between the two repos, keep variable names and oklch values aligned. Custom utilities `.bg-grid-pattern`, `.bg-grid-dark`, `.mask-fade-bottom`, `.text-balance` are defined in `@layer utilities` in `globals.css`.

Use `cn()` from `@/lib/utils` (clsx + tailwind-merge) for conditional class composition. Icons come from both `react-icons/lu` (Lucide via react-icons) and `lucide-react` — match whatever a neighboring component uses.

### Imports

Path alias `@/*` → `./src/*` (configured in `tsconfig.json`). Prefer `@/components/...` and `@/lib/...` over relative paths.

### Next config notes

`next.config.ts` sets `reactStrictMode`, disables `poweredByHeader`, enables `compress`, and configures `images.formats: ["image/avif", "image/webp"]`. No `next/image` `remotePatterns` are configured — all current imagery is in `public/` or inline SVG (`src/components/icons/CarIllustration.tsx`).
