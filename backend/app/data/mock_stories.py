from app.schemas.common import VisualLine, VisualSpec
from app.schemas.story import (
    ExpertReview,
    ProcessNotes,
    SourceReference,
    StoryActionScript,
    StoryDetail,
)

_RAW_STORIES = [
    {
        "id": "eo-cyber-2017",
        "title": "Strengthening the Cybersecurity of Federal Networks",
        "summary_short": "Executive order requiring agencies to tighten cybersecurity plans within 90 days.",
        "summary_long": "Federal networks must adopt modern risk management frameworks, report top vulnerabilities, and coordinate with DHS on protecting critical infrastructure.",
        "topic": "infrastructure",
        "impact_tags": ["Workers", "Infrastructure"],
        "story_type": "executive_order",
        "confidence_level": "medium",
        "source_url": "https://www.federalregister.gov/documents/2017/05/16/2017-10004/strengthening-the-cybersecurity-of-federal-networks-and-critical-infrastructure",
        "source_partner": "federal_register",
        "source_reference": SourceReference(
            api="federal_register",
            url="https://www.federalregister.gov/api/v1/documents/2017-10004",
            document_number="2017-10004",
        ),
        "process_notes": ProcessNotes(
            committees=["House Oversight", "Senate Homeland Security"],
            next_action="Agencies owe cybersecurity implementation plans within 90 days.",
            fast_track=False,
            summary="Order relies on existing statutory authority; Congress can press via oversight hearings.",
        ),
        "expert_reviews": [
            ExpertReview(
                source="Cybersecurity Policy Initiative",
                affiliation="Stanford Internet Observatory",
                stance="supportive",
                summary="Requires every agency to adopt NIST risk frameworks; success hinges on funding for modernization.",
                impact_snapshot="Protects federal workers + residents near critical infrastructure by reducing breach risk.",
                references=["https://example.org/analysis/cyber-eo"],
            ),
            ExpertReview(
                source="American Federation of Government Employees",
                affiliation="Labor union",
                stance="mixed",
                summary="Supports the mandate but warns agencies lack staff to execute unless Congress funds modernization.",
                references=["https://example.org/afge-statement"],
            ),
        ],
        "visual_spec": VisualSpec(
            lines=[
                VisualLine(label="Workers QoL", trend="up"),
                VisualLine(label="Corporate Power", trend="flat"),
                VisualLine(label="Infrastructure Risk", trend="down"),
            ]
        ),
        "scripts": [
            StoryActionScript(
                channel="call",
                content=(
                    "Hi, I live in your district. Please support funding so agencies can follow the cybersecurity"
                    " executive order without delaying upgrades."
                ),
            ),
            StoryActionScript(
                channel="email",
                content=(
                    "Representative, agencies need resources to modernize cybersecurity plans as ordered."
                    " Please back oversight hearings to track progress."
                ),
            ),
            StoryActionScript(
                channel="sms",
                content="As a constituent, I want resilient federal networks. Keep the cybersecurity EO on your oversight agenda.",
            ),
        ],
    },
    {
        "id": "eo-buy-american",
        "title": "Buy American and Hire American",
        "summary_short": "Order directing agencies to tighten procurement waivers and review work visa programs.",
        "summary_long": "Agencies must close loopholes on federal purchasing waivers and recommend reforms that prioritize U.S. workers while examining employment-based visas.",
        "topic": "economy",
        "impact_tags": ["Workers", "Manufacturing"],
        "story_type": "executive_order",
        "confidence_level": "low",
        "source_url": "https://www.federalregister.gov/documents/2017/04/21/2017-08311/buy-american-and-hire-american",
        "source_partner": "federal_register",
        "source_reference": SourceReference(
            api="federal_register",
            url="https://www.federalregister.gov/api/v1/documents/2017-08311",
            document_number="2017-08311",
        ),
        "process_notes": ProcessNotes(
            committees=["House Energy & Commerce", "Senate Finance"],
            next_action="Agencies owe waiver reports to the President and Congress.",
            fast_track=True,
            summary="Order bypassed Congress; lawmakers can demand GAO review on waiver compliance.",
        ),
        "expert_reviews": [
            ExpertReview(
                source="Economic Policy Institute",
                affiliation="Labor think tank",
                stance="supportive",
                summary="Closing waiver loopholes could boost domestic steel demand but needs enforcement data.",
                impact_snapshot="Short-term costs for contractors, longer-term stability for union shops.",
                references=["https://example.org/epi-analysis"],
            ),
            ExpertReview(
                source="Chamber of Commerce",
                affiliation="Business lobbying",
                stance="critical",
                summary="Warns that tightened waivers may slow infrastructure projects without supply chain relief.",
            ),
        ],
        "visual_spec": VisualSpec(
            lines=[
                VisualLine(label="Workers QoL", trend="up"),
                VisualLine(label="Corporate Power", trend="down"),
                VisualLine(label="Household Costs", trend="flat"),
            ]
        ),
        "scripts": [
            StoryActionScript(
                channel="call",
                content="Please monitor the Buy American executive order so agencies actually report waiver loopholes and publish fixes.",
            ),
            StoryActionScript(
                channel="email",
                content="I support buying American, but want transparency on how the order affects local employers. Request GAO updates, please.",
            ),
            StoryActionScript(
                channel="sms",
                content="Keep pressure on agencies to close Buy American loopholes and report outcomes to the public.",
            ),
        ],
    },
]


_STORY_INDEX = {item["id"]: StoryDetail(**item) for item in _RAW_STORIES}


def list_story_details() -> list[StoryDetail]:
    return list(_STORY_INDEX.values())


def list_story_summaries() -> list[dict]:
    return [
        story.model_dump(
            exclude={
                "summary_long",
                "scripts",
                "visual_spec",
                "expert_reviews",
                "process_notes",
                "source_reference",
                "source_url",
                "source_partner",
            }
        )
        for story in _STORY_INDEX.values()
    ]


def get_story(story_id: str) -> StoryDetail | None:
    return _STORY_INDEX.get(story_id)
