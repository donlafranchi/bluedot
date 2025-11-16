"use client";

import { useMemo, useState } from "react";
import { notFound } from "next/navigation";
import { EmotionChips } from "@/components/EmotionChips";
import { QoLChart } from "@/components/QoLChart";
import { ActionPanel } from "@/components/ActionPanel";
import { FeedbackPrompt } from "@/components/FeedbackPrompt";
import { ConfidenceBadge } from "@/components/ConfidenceBadge";
import { ExpertInsights } from "@/components/ExpertInsights";
import { ProcessNotesCard } from "@/components/ProcessNotesCard";
import { stories } from "@/lib/mockData";

export default function StoryDetail({ params }: { params: { id: string } }) {
  const story = useMemo(() => stories.find((item) => item.id === params.id), [params.id]);
  const [selectedEmotion, setSelectedEmotion] = useState<string>();
  const [feedback, setFeedback] = useState({ madeSense: false, tookAction: false });

  if (!story) {
    notFound();
  }

  const currentStory = story;

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[11px] uppercase tracking-wide text-slate-400">{currentStory.storyType}</p>
            <h1 className="text-3xl font-semibold text-white">{currentStory.title}</h1>
          </div>
          <ConfidenceBadge level={currentStory.confidenceLevel} />
        </div>
        <p className="text-sm text-slate-300">{currentStory.summary}</p>
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
          <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-400">
            Topic: {currentStory.topic}
          </span>
          <a href={currentStory.sourceUrl} target="_blank" className="text-accent" rel="noreferrer">
            View source ↗
          </a>
        </div>
      </header>

      <ProcessNotesCard notes={currentStory.processNotes} />

      <section className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-wide text-slate-400">Expert viewpoints</p>
          <p className="text-[11px] text-slate-400">We vet every story before asking how you feel.</p>
        </div>
        <ExpertInsights experts={currentStory.experts} />
      </section>

      <section className="space-y-3 rounded-2xl bg-white/5 p-4">
        <p className="text-sm font-semibold text-white">How does this land with you?</p>
        <EmotionChips selected={selectedEmotion} onSelect={setSelectedEmotion} />
        <p className="text-xs text-slate-400">Tap an emotion to unlock a tailored explanation.</p>
      </section>

      {selectedEmotion && (
        <section className="space-y-4 rounded-2xl bg-black/30 p-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-wide text-slate-400">Clarity</p>
            <p className="text-lg font-semibold text-white">
              {currentStory.explanation}
            </p>
          </div>
          <QoLChart lines={currentStory.visual.lines} />
          <p className="text-xs text-slate-400">
            Visual cues are directional, not precise data. They show who gains or loses momentum.
          </p>
        </section>
      )}

      {selectedEmotion && (
        <ActionPanel scripts={currentStory.scripts} reps={currentStory.reps} />
      )}

      {selectedEmotion && (
        <FeedbackPrompt
          onSense={(value) => setFeedback((current) => ({ ...current, madeSense: value }))}
          onAction={(value) => setFeedback((current) => ({ ...current, tookAction: value }))}
        />
      )}

      {selectedEmotion && (
        <p className="text-xs text-slate-400">
          Feedback recorded: {feedback.madeSense ? "made sense" : "needs work"} / {feedback.tookAction ? "acted" : "not yet"}
        </p>
      )}
    </div>
  );
}
