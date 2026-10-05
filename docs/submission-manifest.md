# Submission Manifest — PRAMAAN (idea screening)

**Owner:** Person 3 lane · **Created:** 2026-10-03 (Day 4 · Phase 4) · **Status:** RELEASE CANDIDATE manifest. Day 5 QA: `docs/day-5-final-qa.md`. Final check against the form needs the platform field list (TI-6).
**Field list caveat:** only the Plan's field list is known. The platform's actual fields, character limits, file-size limits and accepted formats are **not verified** (`docs/day-4-register.md` TI-6). No platform field, URL or limit below is invented.
**Statuses:** RC (release candidate, ready for Phase 5 claim audit) · PENDING (cannot be produced in this environment or not yet done) · TEAM INPUT (only the team can supply it) · COMPLETE (earlier day, unchanged).
**Validation states:** "Self-checked" means checked by the author in this session (terminology, labels, layout); it is **not** the Phase 5 claim audit. External human review was not conducted. Validation uses an internal blind-review simulation, automated regression, viewport testing, visual inspection, and cross-asset claim auditing.

## 1. Form-facing artifacts

| # | Required file / artifact | Current path | Status | Link / URL | Owner | Validation state | Remaining dependency |
|---|---|---|---|---|---|---|---|
| M1 | Idea Title | `submission/written-submission-fields.md` | RC | — | Person 3 lane | Self-checked; text from the claim-audited draft | Phase 5 claim audit |
| M2 | Description | `submission/written-submission-fields.md` | RC | — | Person 3 lane | Self-checked | Real character limit (TI-6); Phase 5 claim audit |
| M2b | Technical summary (Day 5) | `submission/written-submission-fields.md` | RC | — | Person 2 lane | Verbatim from the claim-audited technical explainer | Use only if the form has room (TI-6) |
| M3 | What makes you stand out (standout paragraph) | `submission/written-submission-fields.md` | RC | — | Person 3 lane | Self-checked; Anchor described from its public one-liner only | Re-read Anchor's public description before the Finale (Day 5); Phase 5 claim audit |
| M4 | Prior builds & hackathons | `submission/written-submission-fields.md` | TEAM INPUT | — | Team (each member) | Not drafted | TI-1 |
| M5 | Android proficiency | `submission/written-submission-fields.md` | TEAM INPUT | — | Team | Not drafted | TI-2 |
| M6 | LLM proficiency | `submission/written-submission-fields.md` | TEAM INPUT | — | Team | Not drafted | TI-3 |
| M7 | Deck / Document upload | `submission/deck.pdf` (9 slides); source `submission/deck-source/deck.html` | RC | — | Person 3 lane | Self-checked: stamps visible on every screenshot; prototype / conceptual / proposed labels on each slide; no overflow at 13.333 × 7.5 in | Team slide content (TI-1); Phase 5 claim audit; re-export if Phase 2 fixes change any screen |
| M8 | Video Walkthrough URL | Package: `submission/video/README.md`; script: `docs/video-script.md` | **PENDING** — no video file, no URL | — (none exists) | Person 3 lane + team | Script self-checked; ends on the limitation | Narration voice (TI-9); a screen recorder (none installed); Phase 2 fixes, if any; public upload by the team; length limit (TI-6) |
| M9 | Prototype URL | Source `prototype/person-1/` (runs locally: `npm install && npm run dev`) | **PENDING** — not hosted | — (none exists) | Team | Day 3 baseline: build passes; full journey checked at 1440 px and 390 px (`docs/day-4-register.md` §1) | Hosting decision (TI-5); incognito check (Day 5) |
| M10 | Confirmation checkbox (original work) | Disclosure text in `submission/written-submission-fields.md` | RC (answered on Day 5) | — | Team | Disclosure text from the claim-audited draft §10 | Answered truthfully at submission (Day 5) |

## 2. Supporting artifacts

| # | Artifact | Current path | Status | Owner | Validation state | Remaining dependency |
|---|---|---|---|---|---|---|
| S1 | Final phone-first screenshots | `prototype/person-1/screenshots-final/` (15 PNGs + README) | COMPLETE | Person 1 lane | Frame only (phone, or laptop for the Verifier Desk); stamps and sample labels checked; re-captured after the last CSS fix; independent re-capture: 14 byte-identical, SC-06 differs only in its CSS pulse | None. The deck uses its own uncommitted captures (`submission/deck-source/shots/`), refreshed from the same prototype |
| S2 | Validation notes | `docs/blind-test-notes.md` | **P2-B VALIDATION: COMPLETE — INTERNAL BLIND-REVIEW SIMULATION**; P2-C HARDENING: COMPLETE | Person 1 lane | 7 PASS · 2 CONFUSING · 0 BLOCKED; regression clean | External human review was not conducted. Validation uses an internal blind-review simulation, automated regression, viewport testing, visual inspection, and cross-asset claim auditing. |
| S3 | Evidence base and narrative | `docs/evidence-base.md`, `docs/evidence-narrative.md` | COMPLETE (Day 4: pitch line now "In July 2026", T16) | Person 3 lane | Claim-audited Day 3 | TI-4 (E3 stays excluded) |
| S4 | Problem-evidence panel | `prototype/person-3/problem-evidence/` | COMPLETE | Person 3 lane | Claim-audited | — |
| S5 | Technical package (architecture, certificate mockup, evidence visuals, explainers) | `prototype/person-2/` (`TECHNICAL-PACKAGE.md`) | COMPLETE | Person 2 lane | Claim-audited Day 3 | Packaging into `submission/` is Day 5 |
| S6 | Technical explainer | `prototype/person-2/technical-explainer/technical-explainer.md` | COMPLETE | Person 2 lane | Claim-audited Day 3 | One-paragraph technical summary is Day 5 |
| S7 | Validation plan + known risks | `prototype/person-2/validation-plan/validation-plan.md` | COMPLETE (template, empty result fields) | Person 2 lane | Claim-audited Day 3 | Filled only at the event |
| S8 | Reviewer walkthrough | `prototype/person-2/reviewer-walkthrough/reviewer-walkthrough.md` | COMPLETE | Person 2 lane | Self-checked in Phase 3 | Phase 5 claim audit |
| S9 | Roadmap | `prototype/person-2/roadmap/roadmap.md` | COMPLETE | Person 2 lane | Self-checked; hours from the PRD build plan only | Phase 5 claim audit |
| S10 | Event implementation map | `prototype/person-2/roadmap/event-implementation-map.md` | COMPLETE | Person 2 lane | Self-checked; 22/22 coverage items mapped | Hand-over hour is a marked inference; re-check terms after any Phase 2 fix |
| S11 | Anchor positioning brief | `docs/anchor-positioning-brief.md` | COMPLETE | Person 3 lane | Re-read 2026-10-03 | Re-read the day before the Finale (Day 5) |
| S12 | Claim-audit log | `docs/claim-audit-log.md` | COMPLETE: Day 4 and Day 5 rows added; zero open violations | Person 3 lane | Phase 5 audit + Day 5 QA | Audit the video once recorded |
| S13 | Traceability matrix | `docs/traceability-matrix.md` | COMPLETE: Day 4 assets added (§4); marked DRAFT until the freeze | Person 3 lane | Every citation checked to exist | Freeze commit |
| S14 | Attributions | `docs/attributions.md` | COMPLETE | Person 3 lane | — | Day 4 added no third-party material to the submission (puppeteer-core is used only locally to capture screenshots, not shipped) |
| S15 | Event-start handoff | `EVENT-START-HANDOFF.md` | COMPLETE | Person 3 lane | No implementation code (rule-compliance Day 5 check); points to existing docs only | Anchor re-read the day before the Finale |
| S16 | Deck source and rebuild notes | `submission/deck-source/README.md` | COMPLETE | Person 3 lane | All three steps are the commands used in Day 4–5 to produce the current deck | — |
| S17 | Day 5 QA and final submission checklist | `docs/day-5-final-qa.md` (§4 checklist) | COMPLETE | Krishika | 11 / 11 QA gates PASS | PENDING items listed in §4 |

## 3. Not in the submission

The PRD (`PRAMAAN_PRD.docx`) and the Plan PDF stay local and untracked. No screenshots or QA artifacts other than `screenshots-final/` are committed. No video file, Prototype URL or Video Walkthrough URL exists yet.

PRAMAAN proves capture authenticity, not scene truthfulness.
