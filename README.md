# Blue Dot MVP

Action-first civic companion delivering the “story → feeling → clarity → visual → action” loop in under 60 seconds. This repository hosts both the FastAPI backend and the Next.js frontend plus shared planning docs for AI + human contributors.

## Directory structure

- `backend/` – FastAPI service for stories, explanations, actions, and feedback.
- `frontend/` – Next.js mobile-first client (`/data-play?president=donald-trump` hits live Federal Register API with filters).
- `docs/` – Human-readable planning artifacts (briefs, sprint docs, retros, data-sources catalog, expert intake template).
- `instructions/` – Machine-readable protocols for AI developer tools.
- `.context/` – Narrative/product reference material supplied by founders.

## Local environment (conda + poetry)

```bash
conda env create -f environment.yml   # once
conda activate bluedot
poetry install --no-root              # backend deps
cd frontend && npm install           # frontend deps
```

See `docs/product-brief.md` and `instructions/ai_development_protocol.json` before starting any implementation work.
