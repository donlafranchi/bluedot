import type { QoLLine } from "@/components/QoLChart";
import type { Representative, ScriptOption } from "@/components/ActionPanel";

export type StoryType = "executive_order" | "legislation";
export type ConfidenceLevel = "high" | "medium" | "low";
export type ExpertStance = "supportive" | "critical" | "mixed" | "neutral";

export type StoryVisual = {
  lines: QoLLine[];
};

export type ProcessNotes = {
  committees: string[];
  nextAction?: string;
  fastTrack: boolean;
  summary?: string;
};

export type ExpertReview = {
  source: string;
  affiliation: string;
  stance: ExpertStance;
  summary: string;
  impactSnapshot?: string;
  references?: string[];
};

export type Story = {
  id: string;
  title: string;
  summary: string;
  topic: string;
  impactTags: string[];
  storyType: StoryType;
  confidenceLevel: ConfidenceLevel;
  explanation: string;
  visual: StoryVisual;
  scripts: ScriptOption[];
  reps: Representative[];
  experts: ExpertReview[];
  processNotes?: ProcessNotes;
  sourceUrl: string;
};
