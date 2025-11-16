from pydantic import BaseModel


class FeedbackRequest(BaseModel):
    session_id: str
    made_sense: bool | None = None
    took_action: bool | None = None


class FeedbackResponse(BaseModel):
    acknowledged: bool
