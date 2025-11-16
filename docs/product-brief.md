# Product Brief — Blue Dot MVP

## Purpose
Deliver an emotionally-grounded, action-first civic companion that converts 3–5 weekly stories into instant clarity and scripted outreach to representatives.

## Reference flow
1. Story feed (economy/corruption/environment, etc.).
2. Emotion chips prompt reflection.
3. 40-word explanation + QoL visual (workers/households/corporations/environment).
4. Action CTA to call/message reps with pre-drafted scripts.
5. Quick feedback (“Did this make sense?”, “Did you act?”).

## Tone & principles
- Peer-like, nonpartisan, jargon-free voice.
- Emotion before explanation.
- Visual simplicity: lines trending up/down/flat.
- Every story must end in a meaningful civic action.
- Expert insight precedes emotion chips; every story requires at least one vetted analysis (human or curated source) before publishing.

## MVP guardrails
- Launchable in 6–10 weeks.
- Manual or lightweight API story sourcing focused on:
  - Executive orders (Federal Register presidential documents)
  - High-impact legislation (Congress.gov / GovTrack / ProPublica feeds)
- External LLM managed prompts (no local hosting yet).
- Postgres as the single source of truth.
- Render for hosting (backend + frontend + Postgres add-on).
- Stories lacking independent expert context are not published publicly (mark as "context pending").

## Success indicators
- Users complete the loop in <60s.
- ≥70% “made sense” feedback.
- ≥30% “took action” responses.
- Cost-effective LLM usage (<$0.02 per full loop during MVP).

## Process transparency promises
- Highlight if leadership is fast-tracking a bill (closed rules, reconciliation, suspension).
- Surface committee path and next action for every legislative story.
- Note implementing agencies for executive orders so users know who to pressure via reps.
- Display confidence levels (High/Medium/Low) based on number/quality of expert reviews per story.
