from typing import Literal

from pydantic import BaseModel

Trend = Literal["up", "down", "flat"]


class VisualLine(BaseModel):
    label: str
    trend: Trend


class VisualSpec(BaseModel):
    lines: list[VisualLine]
