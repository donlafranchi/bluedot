# Data Sources Catalog

Use this file to track every external dataset/API feeding Blue Dot. Update it when you add a new provider or notice changes (rate limits, auth, schema tweaks).

## Federal Register API
- **Use**: Executive orders & presidential docs (`story_type=executive_order`).
- **Docs**: https://www.federalregister.gov/developers/api/v1
- **Endpoints**:
  - `GET /documents.json` with `conditions[type][]=PRESDOCU` and `conditions[presidential_document_type][]=executive_order`
  - Include `conditions[president][]` to scope by administration.
- **Metadata captured**: document number, title, summary/abstract, agencies, publication date, source URLs (html, pdf), process notes.
- **Notes**: Provide fallback fixtures for offline dev; respect request rate (240/min per IP).

## Legislative feeds
### Congress.gov API
- **Use**: Official bill text, status, latest actions.
- **Docs**: https://api.congress.gov/
- **Access**: API key required; queries by bill number, congress number.
- **Notes**: Good for authoritative status + action dates; heavier payloads.

### GovTrack API
- **Use**: Lightweight JSON for bills, summaries, cosponsors.
- **Docs**: https://www.govtrack.us/developers/api
- **Notes**: Useful for quick prototypes; include fair-use attribution.

### ProPublica Congress API
- **Use**: Votes, sponsorship, bill updates.
- **Docs**: https://projects.propublica.org/api-docs/congress-api/
- **Access**: Free API key; includes statements + floor schedule.

## Google Civic Information API
- **Use**: Representative lookup by ZIP/address for action scripts.
- **Docs**: https://developers.google.com/civic-information
- **Notes**: Requires API key; cache minimal data to avoid quota issues.

## Future candidates
- **LegiScan**, **OpenStates**, **Ballotpedia** for state-level expansion.
- Add a section here before integrating to document auth + schema expectations.
