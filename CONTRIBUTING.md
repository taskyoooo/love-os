# Contributing

Use Node.js 22.13 or later. Install with `npm ci`, run `npm run dev`, then verify `npm run test:engine`, `npx tsc --noEmit` and `npm run build` before proposing changes.

Keep UI, memory, knowledge retrieval, AI service and decision logic separate. Add meaningful decision regression cases when changing the engine. Never commit real relationship records, screenshots, exported backups, API keys or local runtime state. Only use fictional examples.

Knowledge contributions must include source URLs, licensing, evidence levels, contraindications and observable stopping conditions. Practical suggestions must not be presented as scientific proof. Reject manipulation, diagnostic labels, precision scores and attempts to bypass refusal.

Source updates require human review; `npm run sources:check` only reports commit changes. See `docs/SOURCE_MAPPING.md` and `THIRD_PARTY_NOTICES.md`.
