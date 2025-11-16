from fastapi import APIRouter, HTTPException

from app.data import state
from app.schemas.feedback import FeedbackRequest, FeedbackResponse

router = APIRouter(tags=["feedback"])


@router.post("/feedback", response_model=FeedbackResponse)
async def submit_feedback(payload: FeedbackRequest) -> FeedbackResponse:
    if payload.session_id not in state.SESSION_STORE:
        raise HTTPException(status_code=404, detail="Session not found")

    state.FEEDBACK_LOG.append(
        {
            "session_id": payload.session_id,
            "made_sense": payload.made_sense,
            "took_action": payload.took_action,
        }
    )

    return FeedbackResponse(acknowledged=True)
