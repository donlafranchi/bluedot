# Process Playbook

## Lifecycle
1. Review `.context/` + `docs/product-brief.md` weekly.
2. Run sprint protocol defined in `instructions/ai_development_protocol.json`.
3. Keep backlog groomed; only pull committed items into sprint plans.

## Git Workflow
- Default branch: `main`.
- Branch rules: `sprint-XX/<focus>` for umbrella, `sprint-XX/<story-id>` for story-level.
- Commit style: `sprint-XX: concise summary`.
- Use PR template (todo) referencing sprint docs.

## Planning Artifacts
- `docs/sprint-XX-plan.md` (status table kept current).
- `docs/sprint-XX-testplan.md` (test evidence recorded).
- `docs/sprint-XX-ai-log.md` (AI activity tracking).
- `docs/sprint-XX-retro.md` (lessons learned + action items).
- `docs/sprint-XX-release.md` (deployment summary).

## Review Gates
- Code review required even for AI-generated diffs.
- Tests must pass locally + CI before merge.
- Deploy only from tagged commits.

## Continuous Improvement
- Carry retro action items into next sprint plan.
- Update `docs/ai-playbook.md` whenever prompts change.
