# Architecture Overview

## Stack
- **Frontend**: Next.js 14 (App Router) + React + TailwindCSS, deployed on Render static + Node service.
- **Backend**: FastAPI + uvicorn, packaged via Poetry, deployed on Render Web Service.
- **Database**: Render PostgreSQL (managed), accessed via SQLAlchemy.
- **LLM provider**: OpenAI/Anthropic via REST API.
- **External APIs**:
  - Federal Register API (executive orders / presidential documents)
  - Congress.gov / GovTrack / ProPublica Congress APIs (bill metadata, votes, procedural details)
  - Google Civic Information API (representative lookup)

## Data model
Refer to `.context/mvp-architecture.md` for full schema. Core tables: `stories`, `sessions`, `actions`, `feedback`.
Story fields now include:
- `story_type` (`executive_order` | `legislation`)
- `process_notes` (committee path, fast-track indicators, reconciliation, etc.)
- `source_reference` (API + URL + doc number/bill ID)
- `expert_reviews` (list of `{source, affiliation, stance, summary, confidence}` entries)
- `confidence_level` (High/Medium/Low) derived from expert coverage completeness.

## Service boundaries
- `backend/app/api`: REST endpoints `/stories`, `/stories/{id}`, `/explain`, `/action`, `/feedback`.
- `frontend/app`: Client screens (Feed, Story Detail, Explanation/Visual, Action, Feedback) backed by backend endpoints.

## Environments
- `dev`: Local docker-compose for backend/frontend/postgres.
- `preview`: Render preview deploy on PRs.
- `prod`: Render production service.

## Secrets/config
- `.env` per service; never commit secrets.
- Store Render environment variables for `DATABASE_URL`, `LLM_API_KEY`, `CIVIC_API_KEY`, `GROUND_NEWS_KEY`.

## Observability
- FastAPI logging via structlog to stdout.
- Frontend event logging stub to backend `/telemetry` (post-MVP optional).
- Track external API usage + response failures (Federal Register, Congress.gov, etc.) for quota visibility.
