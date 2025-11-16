from uuid import uuid4

from fastapi import APIRouter, HTTPException

from app.data import mock_stories, state
from app.schemas.explain import ExplainRequest, ExplainResponse

router = APIRouter(tags=["explain"])


def _build_explanation_text(summary: str, feeling: str) -> str:
    tone_map = {
        "angry": "Channel that energy into oversight.",
        "worried": "Here is the core risk in plain words.",
        "hopeful": "There is a lever worth pulling.",
        "confused": "Let’s cut through the noise.",
    }
    intro = tone_map.get(feeling, "Here is what matters.")
    return f"{intro} {summary}"


@router.post("/explain", response_model=ExplainResponse)
async def explain_story(payload: ExplainRequest) -> ExplainResponse:
    story = mock_stories.get_story(payload.story_id)
    if not story:
        raise HTTPException(status_code=404, detail="Story not found")

    session_id = str(uuid4())
    state.SESSION_STORE[session_id] = state.SessionRecord(story_id=story.id, feeling=payload.feeling)

    text = _build_explanation_text(story.summary_short, payload.feeling)
    return ExplainResponse(
        session_id=session_id,
        story_id=story.id,
        feeling=payload.feeling,
        explanation_text=text,
        visual_spec=story.visual_spec,
    )
