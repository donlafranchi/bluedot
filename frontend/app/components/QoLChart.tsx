export type Trend = "up" | "down" | "flat";

export type QoLLine = {
  label: string;
  trend: Trend;
};

export type QoLChartProps = {
  lines: QoLLine[];
};

const TREND_MAP: Record<Trend, string> = {
  up: "M4 16 C8 8 12 4 16 8",
  down: "M4 4 C8 10 12 14 16 12",
  flat: "M4 10 L16 10"
};

export function QoLChart({ lines }: QoLChartProps) {
  if (!lines.length) {
    return <p className="text-sm text-slate-400">Trendline pending…</p>;
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <p className="mb-3 text-xs uppercase tracking-wide text-slate-400">Quality of Life</p>
      <div className="flex flex-col gap-4">
        {lines.map((line) => (
          <div key={line.label} className="flex items-center gap-3">
            <svg width="80" height="26" viewBox="0 0 20 20" className="text-accent">
              <path
                d={TREND_MAP[line.trend]}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <div>
              <p className="text-xs font-semibold text-white">{line.label}</p>
              <p className="text-[11px] uppercase tracking-wide text-slate-400">{line.trend}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
