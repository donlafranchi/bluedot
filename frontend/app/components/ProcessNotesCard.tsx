import type { ProcessNotes } from "@/lib/types";

export function ProcessNotesCard({ notes }: { notes?: ProcessNotes }) {
  if (!notes) {
    return null;
  }

  return (
    <section className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
      <header className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-wide text-slate-400">Process watch</p>
        {notes.fastTrack && <span className="rounded-full bg-rose-500/10 px-3 py-1 text-[11px] font-semibold text-rose-200">Fast-tracked</span>}
      </header>
      {notes.summary && <p className="text-sm text-slate-200">{notes.summary}</p>}
      {notes.nextAction && (
        <p className="text-xs text-slate-400">
          Next action: <span className="font-semibold text-slate-200">{notes.nextAction}</span>
        </p>
      )}
      {notes.committees.length ? (
        <p className="text-xs text-slate-400">
          Committees: <span className="font-semibold text-slate-200">{notes.committees.join(", ")}</span>
        </p>
      ) : null}
    </section>
  );
}
