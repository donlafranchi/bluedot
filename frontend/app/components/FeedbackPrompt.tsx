export type FeedbackPromptProps = {
  onSense?: (value: boolean) => void;
  onAction?: (value: boolean) => void;
};

export function FeedbackPrompt({ onSense, onAction }: FeedbackPromptProps) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="space-y-4">
        <div>
          <p className="text-sm font-semibold text-white">Did this make sense?</p>
          <div className="mt-2 flex gap-2">
            <button
              type="button"
              className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-indigo-950"
              onClick={() => onSense?.(true)}
            >
              Yes
            </button>
            <button
              type="button"
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white"
              onClick={() => onSense?.(false)}
            >
              Not really
            </button>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Did you take action?</p>
          <div className="mt-2 flex gap-2">
            <button
              type="button"
              className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-indigo-950"
              onClick={() => onAction?.(true)}
            >
              Yes
            </button>
            <button
              type="button"
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white"
              onClick={() => onAction?.(false)}
            >
              Not yet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
