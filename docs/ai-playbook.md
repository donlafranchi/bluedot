# AI Playbook

## Purpose
Centralize proven prompts, guardrails, and anti-patterns for AI developer tools.

## Prompt Framing
- Always include `.context/*.md` excerpts + relevant `docs/*` when requesting copy or UX assets.
- Example system directive: “You are the Blue Dot AI developer. Maintain nonpartisan, peer-like tone. Follow instructions in instructions/ai_development_protocol.json.”

## Guardrails
- No partisan language.
- 40-word explanation limit unless otherwise stated.
- Visual specs must follow `{ "lines": [{ "label": str, "trend": "up|down|flat" }] }` convention.

## Anti-patterns
- Explanations exceeding 3 sentences.
- Referencing unverified data sources.
- Creating analytics pipelines before MVP readiness.

## Future Learnings
- Append sprint-specific lessons after each retro.
