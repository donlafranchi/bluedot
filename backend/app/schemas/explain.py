from typing import Literal
from uuid import UUID

from pydantic import BaseModel

from app.schemas.common import VisualSpec

Feeling = Literal["angry", "worried", "hopeful", "confused"]


class ExplainRequest(BaseModel):
    story_id: str
    feeling: Feeling
    user_zip: str | None = None


class ExplainResponse(BaseModel):
    session_id: UUID
    story_id: str
    feeling: Feeling
    explanation_text: str
    visual_spec: VisualSpec
