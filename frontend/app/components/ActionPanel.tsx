export type Representative = {
  name: string;
  office: string;
  phone: string;
};

export type ScriptOption = {
  channel: "call" | "email" | "sms";
  content: string;
};

export type ActionPanelProps = {
  scripts: ScriptOption[];
  reps: Representative[];
};

export function ActionPanel({ scripts, reps }: ActionPanelProps) {
  return (
    <section className="space-y-4 rounded-2xl bg-white/5 p-4">
      <header>
        <p className="text-xs uppercase tracking-wide text-slate-400">Take action</p>
        <h3 className="text-xl font-semibold text-white">Reach your reps</h3>
      </header>
      <div className="space-y-2">
        {reps.map((rep) => (
          <div key={rep.name} className="rounded-lg border border-white/10 p-3 text-sm">
            <p className="font-semibold text-white">{rep.name}</p>
            <p className="text-slate-300">{rep.office}</p>
            <a className="text-accent" href={`tel:${rep.phone}`}>
              {rep.phone}
            </a>
          </div>
        ))}
      </div>
      <div className="space-y-3">
        {scripts.map((script) => (
          <div key={script.channel} className="rounded-xl bg-black/30 p-3">
            <p className="text-xs uppercase tracking-wide text-slate-300">{script.channel}</p>
            <p className="text-sm text-slate-100">{script.content}</p>
            <button
              type="button"
              className="mt-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-indigo-950"
              onClick={() => navigator.clipboard?.writeText(script.content)}
            >
              Copy script
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
