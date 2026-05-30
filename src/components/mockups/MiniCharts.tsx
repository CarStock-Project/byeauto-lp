import { formatBRL } from "@/lib/mockData";

interface AreaPoint {
  label: string;
  value: number;
}

interface MiniAreaChartProps {
  title: string;
  points: AreaPoint[];
  /** Max value for the Y axis. Defaults to the highest point rounded up. */
  max?: number;
}

const W = 520;
const H = 200;
const PAD_X = 44;
const PAD_TOP = 16;
const PAD_BOTTOM = 28;

export function MiniAreaChart({ title, points, max }: MiniAreaChartProps) {
  const top = max ?? Math.max(...points.map((p) => p.value));
  const innerW = W - PAD_X - 12;
  const innerH = H - PAD_TOP - PAD_BOTTOM;

  const coords = points.map((p, i) => {
    const x = PAD_X + (points.length === 1 ? 0 : (i / (points.length - 1)) * innerW);
    const y = PAD_TOP + innerH - (p.value / top) * innerH;
    return { x, y };
  });

  const line = coords.map((c, i) => `${i === 0 ? "M" : "L"} ${c.x} ${c.y}`).join(" ");
  const area = `${line} L ${coords[coords.length - 1].x} ${PAD_TOP + innerH} L ${coords[0].x} ${
    PAD_TOP + innerH
  } Z`;

  const gridLines = [0, 0.25, 0.5, 0.75, 1];

  function formatK(v: number) {
    return v >= 1000 ? `${Math.round(v / 1000)}k` : `${v}`;
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <h3 className="mb-4 text-sm font-semibold text-foreground">{title}</h3>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-44 w-full"
        role="img"
        aria-label={title}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.28" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {gridLines.map((g) => {
          const y = PAD_TOP + innerH - g * innerH;
          return (
            <g key={g}>
              <line
                x1={PAD_X}
                y1={y}
                x2={W - 12}
                y2={y}
                className="stroke-border"
                strokeWidth={1}
                strokeDasharray="3 4"
              />
              <text
                x={PAD_X - 8}
                y={y + 3}
                textAnchor="end"
                className="fill-muted-foreground text-[9px]"
              >
                {formatK(Math.round(g * top))}
              </text>
            </g>
          );
        })}

        <path d={area} fill="url(#areaFill)" />
        <path d={line} fill="none" stroke="var(--primary)" strokeWidth={2.5} strokeLinejoin="round" />

        {points.map((p, i) => (
          <text
            key={p.label}
            x={coords[i].x}
            y={H - 8}
            textAnchor={i === 0 ? "start" : i === points.length - 1 ? "end" : "middle"}
            className="fill-muted-foreground text-[9px]"
          >
            {p.label}
          </text>
        ))}
      </svg>
    </div>
  );
}

interface SellerBar {
  name: string;
  revenue: number;
}

interface SellerBarChartProps {
  title: string;
  subtitle?: string;
  sellers: SellerBar[];
}

export function SellerBarChart({ title, subtitle, sellers }: SellerBarChartProps) {
  const max = Math.max(...sellers.map((s) => s.revenue));

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      {subtitle && <p className="mt-0.5 text-xs text-muted-foreground">{subtitle}</p>}

      <ul className="mt-4 space-y-3">
        {sellers.map((s) => (
          <li key={s.name} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-foreground">{s.name}</span>
              <span className="tabular-nums text-muted-foreground">{formatBRL(s.revenue)}</span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: `${(s.revenue / max) * 100}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
