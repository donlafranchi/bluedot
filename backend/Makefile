.PHONY: dev test lint format

dev:
	poetry run uvicorn app.main:app --reload

test:
	poetry run pytest

lint:
	poetry run ruff check .
	poetry run black --check .

format:
	poetry run ruff check . --fix
	poetry run black .
