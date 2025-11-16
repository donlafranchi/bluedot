# Backend (FastAPI)

## Setup
```bash
cd backend
conda activate bluedot  # after creating via environment.yml
poetry install
poetry run uvicorn app.main:app --reload
```

## Environment
Copy `.env.example` to `.env` and set:
- `DATABASE_URL`
- `LLM_API_KEY`
- `CIVIC_API_KEY`
- `GROUND_NEWS_KEY`

## Testing
```
poetry run pytest
```
