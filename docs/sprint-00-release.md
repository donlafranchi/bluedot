# Sprint 00 Release Notes

## Build Info
- Git tag: TBD (to be created as `v0.0-sprint00` when merging to main)
- Render deploy URLs: Not deployed yet (Compose validated locally)
- Migration IDs: None (mock data only)

## Highlights
- Codified product governance (brief, architecture overview, process playbook, AI protocol templates).
- Implemented FastAPI backend skeleton with `/stories`, `/explain`, `/action`, `/feedback`, mock expert/process data, and pytest coverage.
- Built Next.js/Tailwind frontend covering story feed, detail flow, emotion/explanation/action loop, `/data-play` for live Federal Register exploration, and new expert/confidence UI.
- Added Docker Compose stack (Postgres + backend + frontend) validated locally as a Render-ready stub.

## Known Issues
- No hosted Render environment yet; all validation local.
- Expert insight ingestion + legislative API still manual.
- No automated CI/CD pipeline configured yet.

## Validation Summary
- Backend: `poetry run pytest` (health + story flow) — Passed
- Frontend: `npm run lint` + `npm run lint:types` — Passed
- E2E: Not in scope for Sprint 00

## Rollback Plan
- Revert to last tagged commit once created (`v0.0-sprint00`), or shut down Docker Compose stack. No database migrations applied.
