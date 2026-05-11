interface StatusSlice {
  label: string;
  value: number;
  percent: number;
  color: string;
}

interface VehicleStatusChartProps {
  total: number;
  slices: StatusSlice[];
}

const SIZE = 160;
const STROKE = 22;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function VehicleStatusChart({ total, slices }: VehicleStatusChartProps) {
  let cumulative = 0;

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="mb-4 flex items-baseline justify-between">
        <h3 className="text-sm font-semibold text-foreground">Distribuição por status</h3>
        <span className="text-xs text-muted-foreground">{total} no total</span>
      </div>

      <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
        <div className="relative shrink-0">
          <svg
            width={SIZE}
            height={SIZE}
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            className="-rotate-90"
            role="img"
            aria-label="Distribuição de veículos por status"
          >
            <circle
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={RADIUS}
              fill="none"
              strokeWidth={STROKE}
              className="stroke-muted"
            />
            {total > 0 &&
              slices.map((s) => {
                const fraction = s.value / total;
                const dash = fraction * CIRCUMFERENCE;
                const gap = CIRCUMFERENCE - dash;
                const offset = -cumulative * CIRCUMFERENCE;
                cumulative += fraction;
                if (s.value === 0) return null;
                return (
                  <circle
                    key={s.label}
                    cx={SIZE / 2}
                    cy={SIZE / 2}
                    r={RADIUS}
                    fill="none"
                    strokeWidth={STROKE}
                    stroke={s.color}
                    strokeDasharray={`${dash} ${gap}`}
                    strokeDashoffset={offset}
                    strokeLinecap="butt"
                  />
                );
              })}
          </svg>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-foreground">{total}</span>
            <span className="text-[10px] text-muted-foreground">veículos</span>
          </div>
        </div>

        <ul className="flex w-full flex-col gap-2.5">
          {slices.map((s) => (
            <li key={s.label} className="flex items-center gap-3">
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: s.color }}
                aria-hidden
              />
              <span className="flex-1 text-xs text-foreground">{s.label}</span>
              <span className="text-xs font-semibold tabular-nums text-foreground">{s.value}</span>
              <span className="w-10 text-right text-[11px] tabular-nums text-muted-foreground">
                {s.percent}%
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
