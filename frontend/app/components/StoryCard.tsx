import { ConfidenceBadge } from "@/components/ConfidenceBadge";
import type { ConfidenceLevel, StoryType } from "@/lib/types";

const TYPE_COPY: Record<StoryType, string> = {
  executive_order: "Executive order",
  legislation: "Legislation"
};

export type StoryCardProps = {
  title: string;
  summary: string;
  impactTags: string[];
  storyType: StoryType;
  confidenceLevel: ConfidenceLevel;
};

export function StoryCard({ title, summary, impactTags, storyType, confidenceLevel }: StoryCardProps) {
  return (
    <article className="rounded-2xl bg-white/5 p-4 backdrop-blur">
      <header className="mb-2 flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-wide text-slate-400">{TYPE_COPY[storyType]}</p>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <ConfidenceBadge level={confidenceLevel} />
      </header>
      <p className="text-sm text-slate-200">{summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {impactTags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
