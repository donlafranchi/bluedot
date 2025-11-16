const EMOTIONS = [
  { label: "Angry", value: "angry" },
  { label: "Worried", value: "worried" },
  { label: "Hopeful", value: "hopeful" },
  { label: "Confused", value: "confused" }
];

export type EmotionChipsProps = {
  selected?: string;
  onSelect?: (value: string) => void;
};

export function EmotionChips({ selected, onSelect }: EmotionChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {EMOTIONS.map((emotion) => {
        const isActive = selected === emotion.value;
        return (
          <button
            key={emotion.value}
            type="button"
            onClick={() => onSelect?.(emotion.value)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              isActive
                ? "bg-accent text-indigo-950 shadow"
                : "bg-white/10 text-slate-100 hover:bg-white/20"
            }`}
          >
            {emotion.label}
          </button>
        );
      })}
    </div>
  );
}
