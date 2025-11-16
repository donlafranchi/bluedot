import type { ExpertReview } from "@/lib/types";

export function ExpertInsights({ experts }: { experts: ExpertReview[] }) {
  if (!experts.length) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
        Expert context is on the way.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {experts.map((expert) => (
        <article key={`${expert.source}-${expert.affiliation}`} className="rounded-2xl border border-white/10 bg-black/30 p-4">
          <header className="mb-2 flex flex-wrap items-center gap-2">
            <p className="text-sm font-semibold text-white">{expert.source}</p>
            <span className="text-xs uppercase tracking-wide text-slate-400">{expert.affiliation}</span>
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] uppercase tracking-wide text-slate-300">
              {expert.stance}
            </span>
          </header>
          <p className="text-sm text-slate-100">{expert.summary}</p>
          {expert.impactSnapshot && (
            <p className="mt-2 text-xs text-slate-400">Impact: {expert.impactSnapshot}</p>
          )}
          {expert.references?.length ? (
            <div className="mt-3 text-xs text-accent">
              {expert.references.map((ref) => (
                <a key={ref} href={ref} target="_blank" className="mr-3 underline" rel="noreferrer">
                  Source ↗
                </a>
              ))}
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}
