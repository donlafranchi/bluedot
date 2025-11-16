import Link from "next/link";
import { StoryCard } from "./components/StoryCard";
import { stories } from "./lib/mockData";

export default function Page() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-wide text-slate-300">This week</p>
        <h1 className="text-3xl font-semibold text-white">Blue Dot stories</h1>
        <p className="text-sm text-slate-300">
          Three-minute civic briefing. Tap how you feel, understand what changed, take action.
        </p>
        <Link href="/data-play" className="text-xs font-semibold text-accent">
          Peek at real API data →
        </Link>
      </header>
      <section className="space-y-4">
        {stories.map((story) => (
          <Link href={`/stories/${story.id}`} key={story.id} className="block">
            <StoryCard
              title={story.title}
              summary={story.summary}
              impactTags={story.impactTags}
              storyType={story.storyType}
              confidenceLevel={story.confidenceLevel}
            />
          </Link>
        ))}
      </section>
    </div>
  );
}
