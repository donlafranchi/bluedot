from fastapi import APIRouter, HTTPException

from app.data import mock_stories, state
from app.schemas.action import ActionRequest, ActionResponse, Representative

router = APIRouter(tags=["action"])

_REP_FALLBACK = [
    Representative(name="Rep. Jordan", office="House", phone="202-555-0112"),
    Representative(name="Sen. Rivera", office="Senate", phone="202-555-0144"),
]


@router.post("/action", response_model=ActionResponse)
async def generate_action(payload: ActionRequest) -> ActionResponse:
    story = mock_stories.get_story(payload.story_id)
    if not story:
        raise HTTPException(status_code=404, detail="Story not found")

    if payload.session_id and payload.session_id not in state.SESSION_STORE:
        raise HTTPException(status_code=404, detail="Session not found")

    state.ACTION_LOG.append(
        {
            "story_id": story.id,
            "session_id": payload.session_id,
            "user_zip": payload.user_zip,
        }
    )

    return ActionResponse(
        story_id=story.id,
        session_id=payload.session_id,
        representatives=_REP_FALLBACK,
        scripts=story.scripts,
    )
