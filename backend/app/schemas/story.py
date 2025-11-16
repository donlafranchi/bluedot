from typing import Literal

from pydantic import BaseModel, HttpUrl

from app.schemas.common import VisualSpec

StoryType = Literal["executive_order", "legislation"]
ConfidenceLevel = Literal["high", "medium", "low"]
ExpertStance = Literal["supportive", "critical", "mixed", "neutral"]
ScriptChannel = Literal["call", "email", "sms"]


class StoryActionScript(BaseModel):
    channel: ScriptChannel
    content: str


class SourceReference(BaseModel):
    api: str
    url: HttpUrl
    document_number: str | None = None
    bill_id: str | None = None


class ProcessNotes(BaseModel):
    committees: list[str] = []
    next_action: str | None = None
    fast_track: bool = False
    summary: str | None = None


class ExpertReview(BaseModel):
    source: str
    affiliation: str
    stance: ExpertStance
    summary: str
    impact_snapshot: str | None = None
    references: list[HttpUrl] | None = None


class StorySummary(BaseModel):
    id: str
    title: str
    summary_short: str
    topic: str
    impact_tags: list[str]
    story_type: StoryType
    confidence_level: ConfidenceLevel


class StoryDetail(StorySummary):
    summary_long: str
    source_url: HttpUrl
    source_partner: str
    source_reference: SourceReference
    process_notes: ProcessNotes | None = None
    expert_reviews: list[ExpertReview]
    visual_spec: VisualSpec
    scripts: list[StoryActionScript]
