from pydantic import BaseModel

from app.schemas.story import StoryActionScript


class Representative(BaseModel):
    name: str
    office: str
    phone: str


class ActionRequest(BaseModel):
    story_id: str
    session_id: str | None = None
    user_zip: str | None = None


class ActionResponse(BaseModel):
    story_id: str
    session_id: str | None
    representatives: list[Representative]
    scripts: list[StoryActionScript]
