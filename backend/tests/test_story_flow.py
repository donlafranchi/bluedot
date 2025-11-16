from app.main import app
from fastapi.testclient import TestClient

client = TestClient(app)


def test_list_and_detail():
    resp = client.get("/stories/")
    assert resp.status_code == 200
    stories = resp.json()
    assert isinstance(stories, list) and stories
    first_story = stories[0]
    assert "summary_long" not in first_story
    assert first_story["confidence_level"] in {"high", "medium", "low"}
    assert first_story["story_type"] in {"executive_order", "legislation"}

    story_id = stories[0]["id"]
    detail_resp = client.get(f"/stories/{story_id}")
    assert detail_resp.status_code == 200
    detail = detail_resp.json()
    assert detail["id"] == story_id
    assert detail["visual_spec"]["lines"]
    assert detail["expert_reviews"], "Expected expert context to be present"
    assert detail["source_reference"]["api"]
    assert detail["confidence_level"] in {"high", "medium", "low"}


def test_explain_action_feedback_flow():
    story_id = client.get("/stories/").json()[0]["id"]

    explain_resp = client.post(
        "/explain",
        json={"story_id": story_id, "feeling": "worried", "user_zip": "10001"},
    )
    assert explain_resp.status_code == 200
    explanation = explain_resp.json()
    session_id = explanation["session_id"]
    assert explanation["visual_spec"]["lines"]

    action_resp = client.post(
        "/action",
        json={"story_id": story_id, "session_id": session_id, "user_zip": "10001"},
    )
    assert action_resp.status_code == 200
    action = action_resp.json()
    assert action["representatives"]
    assert action["scripts"]

    feedback_resp = client.post(
        "/feedback",
        json={"session_id": session_id, "made_sense": True, "took_action": False},
    )
    assert feedback_resp.status_code == 200
    assert feedback_resp.json()["acknowledged"] is True
