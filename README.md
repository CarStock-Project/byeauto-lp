# byeauto-lp

Landing page institucional do **ByeAuto** — plataforma SaaS de gestão automotiva multi-loja.

## Stack

- **Next.js 15** (App Router) com SSG
- **React 19** + TypeScript
- **Tailwind CSS 4** (mesmos tokens de tema do `carstock-app`)
- **lucide-react** e **react-icons** para ícones
- **next/font** (Inter) para tipografia

## SEO

- Metadata API completa (`title`, `description`, `keywords`)
- OpenGraph + Twitter Card
- JSON-LD `SoftwareApplication`
- `sitemap.ts` e `robots.ts` dinâmicos
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Hierarquia de headings correta (`h1` → `h2` → `h3`)
- `alt` em todas as imagens

## Como rodar

```bash
npm install
npm run dev
# http://localhost:3000
```

## Build de produção

```bash
npm run build
npm start
```

## Estrutura

```
src/
├── app/
│   ├── layout.tsx       # Metadata global + JSON-LD
│   ├── page.tsx         # Página única
│   ├── globals.css      # Tokens de tema (idênticos ao carstock-app)
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── sections/        # Hero, Features, Showcase, Benefits, Stack, CTA, Footer
│   ├── mockups/         # Telas simuladas (Dashboard, Veículos, Clientes)
│   ├── icons/           # Ilustração SVG do carro
│   └── BrowserFrame.tsx # Moldura de browser dos mockups
└── lib/
    ├── utils.ts         # cn() + siteConfig (SEO)
    └── mockData.ts      # Dados mockados das telas
```

## Notas de design

As cores, raios, tipografia e componentes (cards `rounded-2xl border bg-card shadow-sm`, status
badges, donut chart, sidebar) são portados fielmente do `carstock-app` para manter consistência
visual entre marketing e produto.
