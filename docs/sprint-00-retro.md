# Sprint 00 Retrospective

## Metrics
- Stories completed / committed: 4 / 4 (S00-1 → S00-4)
- Test pass rate: 100% for lint + pytest suites in scope
- Deployment notes: Docker Compose validated (backend+frontend+Postgres), no Render deploy yet

## Went Well
- Locked down governance early — product brief, architecture overview, AI protocol, and templates provided a single source of truth for every subsequent decision.
- Frontend + backend scaffolds now reflect real policy content thanks to mock data sourced from Federal Register stories and legislative placeholders.
- `/data-play` route exposed live API constraints before backend work, letting us design fallback behavior + process transparency requirements from day one.

## Risks / Issues
- Expert insight pipeline still manual; without SME intake tooling we risk publishing stories without context.
- No automated Render deploy yet; deployment instructions exist but haven’t been exercised in a hosted environment.
- Large uncommitted diff until sprint close can make review noisy; mitigate with careful final diff review before tagging.

## Improvements
- Prioritize building the expert intake workflow + persistence in Sprint 01 so every story includes human-vetted analysis.
- Add automated Compose smoke tests (or GitHub Actions) to catch Docker regressions early.
- Integrate legislative API as soon as possible to replace placeholder story metadata.

## Action Items
| Item | Owner | Due |
|------|-------|-----|
| Implement expert insight ingestion (BL-013) | AI Dev | Sprint 01 |
| Add Render preview deployment + health checks | AI Dev | Sprint 01 |
| Wire legislative API + Bill ingestion (BL-011) | AI Dev | Sprint 01 |
| Add automated Compose smoke test in CI | AI Dev | Sprint 01 |

## Lessons for AI Tools
- Prompt adjustments: Always include `.context` docs + expert intake guardrails when generating copy; require AI outputs to cite vetted sources or decline.
- Process tweaks: Log only pivotal AI prompts (architecture, data model, endpoint scaffolds) to keep `docs/sprint-XX-ai-log.md` useful; skip trivial edits.
