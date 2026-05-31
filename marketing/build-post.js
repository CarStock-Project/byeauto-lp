const sharp = require("sharp");

const S = 1080;

// Tokens do sistema (oklch → hex aproximado)
const PRIMARY = "#2347cf"; // --primary azul royal
const PRIMARY_DK = "#1a3296";
const NAVY = "#161b2e"; // --foreground
const BG = "#fbfbfe"; // --background
const MUTED = "#5b6172"; // --muted-foreground
const BORDER = "#e3e6ef";
const AVAILABLE = "#16a34a"; // --status-available

const gridSpacing = 54;
let gridLines = "";
for (let i = gridSpacing; i < S; i += gridSpacing) {
  gridLines += `<line x1="${i}" y1="0" x2="${i}" y2="${S}" stroke="${PRIMARY}" stroke-opacity="0.05" stroke-width="1"/>`;
  gridLines += `<line x1="0" y1="${i}" x2="${S}" y2="${i}" stroke="${PRIMARY}" stroke-opacity="0.05" stroke-width="1"/>`;
}

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${S}" height="${S}" viewBox="0 0 ${S} ${S}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#eef1fb"/>
    </linearGradient>
    <linearGradient id="pill" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${PRIMARY}"/>
      <stop offset="100%" stop-color="${PRIMARY_DK}"/>
    </linearGradient>
    <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${PRIMARY}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="${PRIMARY}" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <!-- fundo -->
  <rect width="${S}" height="${S}" fill="url(#bg)"/>
  <g>${gridLines}</g>

  <!-- brilho superior -->
  <ellipse cx="${S / 2}" cy="120" rx="640" ry="320" fill="url(#glow)"/>

  <!-- borda do card -->
  <rect x="48" y="48" width="${S - 96}" height="${S - 96}" rx="40"
        fill="none" stroke="${BORDER}" stroke-width="2"/>

  <!-- eyebrow pill -->
  <g>
    <rect x="${S / 2 - 175}" y="312" width="350" height="60" rx="30"
          fill="${PRIMARY}" fill-opacity="0.10"/>
    <circle cx="${S / 2 - 138}" cy="342" r="6" fill="${AVAILABLE}"/>
    <text x="${S / 2 + 16}" y="351" text-anchor="middle"
          font-family="Arial, Helvetica, sans-serif" font-size="24"
          font-weight="700" letter-spacing="3" fill="${PRIMARY}">JÁ ESTAMOS NO AR</text>
  </g>

  <!-- headline -->
  <text x="${S / 2}" y="470" text-anchor="middle"
        font-family="Arial, Helvetica, sans-serif" font-size="78"
        font-weight="800" letter-spacing="-1" fill="${NAVY}">A gestão da sua</text>
  <text x="${S / 2}" y="558" text-anchor="middle"
        font-family="Arial, Helvetica, sans-serif" font-size="78"
        font-weight="800" letter-spacing="-1" fill="${NAVY}">revenda mudou.</text>

  <!-- subtexto -->
  <text x="${S / 2}" y="628" text-anchor="middle"
        font-family="Arial, Helvetica, sans-serif" font-size="31"
        font-weight="400" fill="${MUTED}">Estoque, vendas, clientes e lucro</text>
  <text x="${S / 2}" y="672" text-anchor="middle"
        font-family="Arial, Helvetica, sans-serif" font-size="31"
        font-weight="400" fill="${MUTED}">em uma única plataforma. Sem planilhas.</text>

  <!-- chips de features -->
  ${[
    { t: "Estoque", x: 300 },
    { t: "Vendas", x: 472 },
    { t: "Clientes", x: 642 },
    { t: "Lucro", x: 820 },
  ]
    .map(
      (c, i) => {
        const w = [128, 122, 132, 110][i];
        return `<g>
      <rect x="${c.x - w / 2}" y="742" width="${w}" height="56" rx="28"
            fill="#ffffff" stroke="${BORDER}" stroke-width="2"/>
      <text x="${c.x}" y="778" text-anchor="middle"
            font-family="Arial, Helvetica, sans-serif" font-size="25"
            font-weight="600" fill="${NAVY}">${c.t}</text>
    </g>`;
      },
    )
    .join("")}

  <!-- CTA -->
  <g>
    <rect x="${S / 2 - 215}" y="868" width="430" height="84" rx="42" fill="url(#pill)"/>
    <text x="${S / 2}" y="920" text-anchor="middle"
          font-family="Arial, Helvetica, sans-serif" font-size="30"
          font-weight="700" fill="#ffffff">app.byeauto.com.br</text>
  </g>
</svg>`;

(async () => {
  const base = await sharp(Buffer.from(svg)).png().toBuffer();

  // logo recortada (fundo transparente) redimensionada
  const logoW = 330;
  const logo = await sharp("marketing/_logo_clean.png")
    .resize({ width: logoW })
    .toBuffer();
  const logoMeta = await sharp(logo).metadata();

  await sharp(base)
    .composite([
      {
        input: logo,
        top: 150,
        left: Math.round((S - logoMeta.width) / 2),
      },
    ])
    .png()
    .toFile("marketing/instagram-launch.png");

  console.log("OK gerado marketing/instagram-launch.png");
})();
