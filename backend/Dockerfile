FROM python:3.11-slim AS base

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

WORKDIR /app

RUN pip install --upgrade pip && pip install poetry
COPY backend/pyproject.toml ./pyproject.toml
COPY backend/app ./app
COPY backend/poetry.lock ./poetry.lock

RUN poetry config virtualenvs.create false && poetry install --no-root --without dev

COPY . .

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8080"]
