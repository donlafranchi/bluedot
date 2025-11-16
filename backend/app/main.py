from fastapi import FastAPI

from app.api.routes import action, explain, feedback, health, stories
from app.core.config import get_settings
from app.core.logging import setup_logging

setup_logging()
settings = get_settings()

app = FastAPI(title=settings.app_name, version="0.1.0")
app.include_router(health.router)
app.include_router(stories.router)
app.include_router(explain.router)
app.include_router(action.router)
app.include_router(feedback.router)


@app.get("/", tags=["root"])
async def root() -> dict[str, str]:
    return {"message": "Blue Dot backend running", "environment": settings.environment}
