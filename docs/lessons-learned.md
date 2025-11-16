# Lessons Learned — Blue Dot MVP (Template Ready)

> Use this structure for future projects by swapping names, dates, and findings. Keep the section headings identical so retros stay comparable.

## Snapshot
- **Project**: Blue Dot MVP (Sprint 00)
- **Timeline**: YYYY-MM-DD → YYYY-MM-DD
- **Participants**: AI developer + founder
- **Goal**: Stand up repo, governance docs, backend/front-end scaffolds, and Render-ready instructions.

## What Worked Well
1. **Context-first ramp** — Reusing `.context` docs + product brief template kept tone consistent; future teams should always seed these artifacts before touching code.
2. **Paired AI + human planning** — Writing `instructions/ai_development_protocol.json` early avoided guesswork when switching tools.
3. **Frontend data lab** — Building `/data-play` before the backend provided real inputs for UX decisions and highlighted API constraints quickly.

## Challenges / Risks
1. **Network restrictions** blocked live Federal Register calls; mitigated with fallback JSON and clear error states. Future projects should budget time for offline fixtures.
2. **Deferred commits** per protocol meant larger uncommitted diffs; ensure sprint-end checklists include sanity diff reviews before the single commit/tag.
3. **AI log overhead** felt high; we decided to capture only meaningful prompts. Guidance: log strategic prompts (architecture, endpoint scaffolds), skip trivial edits.

## Process Adjustments
- Add templates for product brief, architecture overview, and AI protocol upfront so new repos inherit the same structure.
- When tests run, immediately log results in `docs/sprint-XX-testplan.md` to avoid ambiguity.
- Keep `/data-play` (or equivalent) route in every MVP to sanity-check external APIs without backend coupling.

## Assets to Reuse
- `docs/templates/product-brief-template.md`
- `docs/templates/arch-overview-template.md`
- `instructions/ai_development_protocol.template.json`
- Backend FastAPI skeleton with `/stories` → `/feedback` loop
- Frontend Next.js story flow + QoL chart components

## Next Sprint Focus (Template)
- Story ingestion & persistence
- LLM orchestration & guardrails
- Representative lookup integration

## Template Instructions
1. Duplicate this file to `docs/lessons-learned-<project>.md` for future efforts.
2. Update Snapshot + section bullets with sprint-specific content.
3. Keep “Assets to Reuse” pointing at reusable modules/templates.
4. After editing, link the new lessons doc from the relevant sprint retro.
