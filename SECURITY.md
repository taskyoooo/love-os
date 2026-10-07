# Security and privacy

The MVP is designed for local use. Relationship records and attached images remain in the current browser's unencrypted LocalStorage. Clearing browser storage loses records; use explicit export for a private backup. Never upload those backups or real screenshots to this repository or issues.

The optional AI endpoint sends only the selected person's limited records and retrieved knowledge when the user requests AI analysis. API keys belong in server-side `.env`, which is ignored by Git. `.env.example` has placeholders only.

Do not expose a keyed AI server publicly without adding authentication, request throttling and appropriate data controls. The current endpoint is not a production multi-user service.

For security vulnerabilities, use a private GitHub vulnerability report when available, or contact the maintainer privately through their GitHub profile. Do not put credentials or private relationship data in public issues.
