from fastapi import APIRouter, HTTPException

from app.data import mock_stories
from app.schemas.story import StoryDetail, StorySummary

router = APIRouter(prefix="/stories", tags=["stories"])


@router.get("/", response_model=list[StorySummary])
async def list_stories() -> list[StorySummary]:
    return [StorySummary(**summary) for summary in mock_stories.list_story_summaries()]


@router.get("/{story_id}", response_model=StoryDetail)
async def get_story(story_id: str) -> StoryDetail:
    story = mock_stories.get_story(story_id)
    if not story:
        raise HTTPException(status_code=404, detail="Story not found")
    return story
