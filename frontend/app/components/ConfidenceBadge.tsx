import type { ConfidenceLevel } from "@/lib/types";

const COPY: Record<ConfidenceLevel, { label: string; color: string }> = {
  high: { label: "High confidence", color: "text-emerald-300 bg-emerald-500/10" },
  medium: { label: "Medium confidence", color: "text-amber-300 bg-amber-500/10" },
  low: { label: "Low confidence", color: "text-rose-300 bg-rose-500/10" }
};

export function ConfidenceBadge({ level }: { level: ConfidenceLevel }) {
  const meta = COPY[level];
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${meta.color}`}>
      <span className="inline-block h-2 w-2 rounded-full bg-current" aria-hidden />
      {meta.label}
    </span>
  );
}
