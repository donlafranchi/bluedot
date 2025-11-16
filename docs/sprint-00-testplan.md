# Sprint 00 Test Plan

## Scope
- Components under test: Backend scaffolding, Frontend scaffolding, Repo scripts.
- Out of scope: LLM prompts, civic integrations.

## Environments
- Local
- Render preview (placeholder)

## Test Matrix
| Area | Test Cases | Tool/Command | Owner | Status | Notes |
|------|------------|--------------|-------|--------|-------|
| Backend API | Healthcheck + story flow | `poetry run pytest` | AI | Passed | 3 tests (health + story flow) |
| Backend Lint | Poetry env boots | `poetry check` | AI | Not Run | |
| Frontend Unit | ESLint across app/components | `npm run lint` | AI | Passed | No warnings or errors |
| Frontend Lint | TypeScript project check | `npm run lint:types` | AI | Passed | `tsc --noEmit` clean |
| E2E | NA | `n/a` | - | Not Run | |
| Manual UX | Access placeholder pages | Browser | AI | Not Run | |

## Regression Checklist
- [ ] Backend `GET /health`
- [ ] Frontend home page renders

## Results Log
| Date | Suite | Result | Notes |
|------|-------|--------|-------|
| 2025-11-15 | `poetry run pytest` | Passed | 3 tests (health + story flow) |
| 2025-11-15 | `npm run lint` | Passed | ESLint clean |
| 2025-11-15 | `npm run lint:types` | Passed | `tsc --noEmit` |
