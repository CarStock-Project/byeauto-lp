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

- `src/app/page.tsx` is the entire site. It composes section components from `src/components/sections/` in fixed order: `SiteHeader → Hero → Features → Showcase → Benefits → CTA → Footer`. To change page structure, edit this file; to change a section, edit the corresponding file in `sections/`. **Do not reintroduce technology/stack references in marketing copy** — copy is product-focused (no JWT, BCrypt, Flyway, MinIO, Spring Boot, React, etc).
- `src/app/layout.tsx` owns global metadata (OpenGraph, Twitter, robots, icons) and injects a `SoftwareApplication` JSON-LD block. All SEO/title/url/keyword strings come from `siteConfig` in `src/lib/utils.ts` — update there, not in `layout.tsx`.
- `src/app/sitemap.ts` and `src/app/robots.ts` are dynamic Metadata Route handlers that also read from `siteConfig`.

### Product mockups (Showcase section)

The Showcase section renders simulated product screens (Dashboard, Vehicles, Customers) inside a `BrowserFrame` chrome. The mockups in `src/components/mockups/` are **static React components**, not screenshots — they consume hard-coded data from `src/lib/mockData.ts` (`mockVehicles`, `mockCustomers`, `dashboardMetrics`, `formatBRL`). When the real product's UI changes, update the mockup components and `mockData.ts` to keep marketing and product in visual sync.

### Theme system

Tailwind v4 with **`@theme inline`** in `src/app/globals.css`. Colors are **oklch** CSS variables on `:root` (`--primary`, `--card`, `--muted`, semantic `--status-available/sold/reserved/maintenance`, full `--sidebar-*` set). Per the README, these tokens are deliberately portable to/from the sibling `carstock-app` product — when porting visual elements between the two repos, keep variable names and oklch values aligned. Custom utilities `.bg-grid-pattern`, `.bg-grid-dark`, `.mask-fade-bottom`, `.text-balance` are defined in `@layer utilities` in `globals.css`.

Use `cn()` from `@/lib/utils` (clsx + tailwind-merge) for conditional class composition. Icons come from both `react-icons/lu` (Lucide via react-icons) and `lucide-react` — match whatever a neighboring component uses.

### Imports

Path alias `@/*` → `./src/*` (configured in `tsconfig.json`). Prefer `@/components/...` and `@/lib/...` over relative paths.

### Next config notes

`next.config.ts` sets `reactStrictMode`, disables `poweredByHeader`, enables `compress`, and configures `images.formats: ["image/avif", "image/webp"]`. No `next/image` `remotePatterns` are configured — all current imagery is in `public/` or inline SVG (`src/components/icons/CarIllustration.tsx`).
