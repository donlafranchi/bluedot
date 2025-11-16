from dataclasses import dataclass, field
from datetime import datetime
from typing import Any


@dataclass
class SessionRecord:
    story_id: str
    feeling: str
    created_at: datetime = field(default_factory=datetime.utcnow)


SESSION_STORE: dict[str, SessionRecord] = {}
ACTION_LOG: list[dict[str, Any]] = []
FEEDBACK_LOG: list[dict[str, Any]] = []
