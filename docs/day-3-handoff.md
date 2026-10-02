# Day 3 Handoff — PRAMAAN

**Date:** 2026-10-03 · **Owner:** Krishika (all three lanes) · **Branch:** `krishika` (Day 3 work uncommitted at the time of writing; base `a333986`) · **Audit:** Day 3 final integration audit (Phase 6, run after separate Phase 1–5 audits), PASS
Start here on Day 4. Detail: `HANDOFF.md` (Day 3 · Phase 1 and Phases 2–6 entries), `CHANGELOG.md` (Day 3), `docs/claim-audit-log.md`, `docs/traceability-matrix.md`. Previous day: `docs/day-2-handoff.md`.

## 1. Final Day 3 prototype state

- React + Vite, presentation-only, `prototype/person-1/` (`npm install`, `npm run dev`; `npm run build` passes). Views: **Clickable journey** · **All screens and components** · **Technical and evidence package**.
- Journey: SC-01 App Open → SC-02 Hold-Still Calibration → SC-03 Capture Preparation → SC-04 Ready to Capture (V-NORMAL, or V-TIMEOUT via the GPS-timeout control) → SC-05 Capturing → SC-06 Checking → SC-07 Result (reviewer picks Likely Genuine / Needs Review / Likely Fraudulent) → SC-08 Certificate → SC-09 Hand-over → Verifier Desk concept: SC-10 Drop certificate → SC-11 Verify → SC-12 See evidence.
- In-screen buttons: Start 3-second clip · View certificate · Share certificate · Open sample certificate · Verify signature · See evidence. Automatic steps use labelled prototype controls. Back retraces the reviewer's path; Restart returns to SC-01. Both are reviewer controls: the product journey is forward-only, with no retake.
- SC-06 shows a CSS-only motion, and the result choice appears after a brief CSS transition labelled "not a measured processing time". No JS timer.
- Exit audit (headless Chrome against the dev server, 1440 px and 390 px): three full branches, and all three again through SC-04 V-TIMEOUT (Phase 6 final audit), Back through all 13 steps, Restart, all views. No failed clicks, dead ends, console errors, external requests, overflow or unstamped screens. Plan screen names map as: idle = SC-01–SC-04, capture = SC-05, checking = SC-06, verified / flagged = SC-07's three bands, certificate detail = SC-08.

## 2. Technical package

| Asset | Location | State |
|---|---|---|
| Architecture diagram | `prototype/person-2/architecture/` | "Proposed implementation for the event"; hand-over per D-8 |
| Check explainers + evidence visuals | `prototype/person-2/evidence-visuals/` | One set; "Conceptual illustration, not measured data" on each |
| Certificate manifest mockup | `prototype/person-2/certificate-mockup/` | Every PRD §7 field; "Illustrative — not a real signed output" |
| Technical explainer | `prototype/person-2/technical-explainer/technical-explainer.md` | 241 words for a non-technical judge (capabilities in "will" form; states what the prototype shows vs what the event builds), plus screen-by-screen mapping |
| Validation plan + known risks | `prototype/person-2/validation-plan/validation-plan.md` | Template: PRD §11 build plan referenced; what is built, what is checked, evidence to collect, empty result fields. "Known risks — addressed live during the event" (PRD §12), with three limits stated openly as not solved; nothing solved yet |

Prototype, explainer, architecture, certificate and Verifier Desk take check names, statuses, verdict bands, stamps and sample values from one source (`prototype/person-1/design-system/copy.js`, `core-screens/fixtures.js`).

## 3. Claim and traceability status

- `docs/claim-audit-log.md`: **zero open violations.** All 7 Day 1 items and B-4 fixed (Phase 1); every issue found in the Phase 2–6 audits fixed and logged (rows marked FIXED).
- `docs/traceability-matrix.md`: **draft** (prototype element → source basis → prototype treatment → event treatment, with playbook rules). Final on Day 4.
- `docs/video-script.md`: **skeleton**, 11 beats in story order (problem → concept → capture → checking → result → certificate → hand-over → Verifier Desk → evidence → limitation → close) with actual screen IDs, about 3 min 20 s. Not recorded.
- `docs/submission-draft.md`: Prototype URL placeholder `[PROTOTYPE URL — to be added on Day 4–5]` and what it will link to. No URL invented.

## 4. Carry-forwards (final disposition, Day 3 Phase 6)

Every item is in exactly one category. No Day-3-owned item remains open.

**CLOSED**
- 7 Day 1 wording fixes; `event-boundary.md` B-4; Anchor re-check (unchanged, 2026-10-03).
- `docs/ux-requirements.md`, `docs/state-map.md` filed; Day 1 P1 cleanup resolved in `docs/state-map.md` §4 (`day-1/` unchanged).
- Terminology drift in active docs.
- Product decisions D-8, P2-Q2, D-9, P2-Q4, P2-Q1, P2-Q3 / P2-Q5.
- Verifier Desk at phone width.
- Traceability matrix drafted; video-script skeleton written; technical explainer, validation plan and risk slide complete.
- `prototype/integration/` and `assets/` folders: not needed. One owner integrates on `krishika` (HANDOFF Day 2 · Phase 1), and the Plan puts Day 4 screenshots in `prototype/person-1/screenshots-final`.
- `prototype/person-1/README.md`: ownership is recorded in the HANDOFF ownership table, and each `prototype/person-1/` subfolder has its own README.

**DAY 4 (Plan Day 4)**
- Person 1: blind reviewer walkthrough and fixes; final-quality screenshot set (`prototype/person-1/screenshots-final`, `docs/blind-test-notes.md`).
- Person 2: reviewer-walkthrough script, roadmap slide, event-implementation map (`prototype/person-2/reviewer-walkthrough`, `prototype/person-2/roadmap`).
- Person 3: deck (release candidate, including the dedicated limitation slide and the risk slide); video recording against `docs/video-script.md` (confirm the form's length limit); finalised written form fields; submission manifest (`docs/submission-manifest.md`, `submission/`); claim audit of the deck and video.
- Prototype URL hosting decision: the plan names no day, but the Day 4 submission manifest needs every link.
- Final traceability matrix: the plan names no day after the Day 3 draft; it is finalised with the Day 4 release-candidate package.

**DAY 5 (Plan Day 5)**
- Person 1: final UX QA pass (including the cosmetic SC-08 label wrap: "Geofence / Location Binding" breaks with "/" alone on a line at desktop width); re-export final screenshots; freeze the source; Prototype URL incognito check.
- Person 2: technical audit of every asset; package technical assets into `submission/`; one-paragraph technical summary for the Description field.
- Person 3: final package against the form fields; truthful confirmation checkbox; `EVENT-START-HANDOFF.md`; final joint read-through; submit.
- One more Anchor re-read before the Finale, noted in `EVENT-START-HANDOFF.md` (brief §7).
- Integration into `main`: deferred by the Day 2 Phase 1 decision; not reopened here.

**WAITING FOR TEAM INPUT (not invented)**
- Q1 E3 source · Q2 UNI link · Q3 prior builds & hackathons · Q4 submission cutoff · Android / LLM proficiency. Teammate branches unchanged since Day 1 (checked 2026-10-03).
- The official playbook's Office Kit section, if available (`docs/architecture-concept.md` §8 says the file is updated to quote it).

## 5. Important files

| Area | Location |
|---|---|
| Decisions, terminology | `HANDOFF.md` |
| State flow, screen requirements | `docs/state-map.md`, `docs/ux-requirements.md` |
| Journey wiring | `prototype/person-1/clickable-prototype/Journey.jsx` |
| New Day 3 screens | `core-screens/SC04ReadyToCapture.jsx` (V-TIMEOUT), `core-screens/SC06Checking.jsx`, `clickable-prototype/SC09HandOver.jsx`, `clickable-prototype/VerifierDesk.jsx` |
| Sample values, canonical copy | `core-screens/fixtures.js`, `design-system/copy.js` |
| Technical package | `prototype/person-2/` (`TECHNICAL-PACKAGE.md`) |
| Claim audit, traceability | `docs/claim-audit-log.md`, `docs/traceability-matrix.md` |
| Submission, video, evidence | `docs/submission-draft.md`, `docs/video-script.md`, `docs/evidence-narrative.md`, `docs/evidence-base.md` |

## 6. Day 4 starting point

1. Blind reviewer walk-through of the clickable journey; fix only what confuses a fresh reviewer.
2. Assemble the deck from `docs/submission-draft.md`, the technical explainer, the validation plan's risk slide and a dedicated limitation slide.
3. Record the video against `docs/video-script.md`.
4. Person 2 lane: reviewer-walkthrough script, roadmap slide and event-implementation map (they feed the deck's technical section).
5. Decide Prototype URL hosting; finalise the traceability matrix, form fields and submission manifest; run the claim audit on the deck and video.
6. Chase the team inputs listed in §4.

No Day 4 work has started. Day 3 changes are not yet committed or pushed; `main` is unchanged at `35639af`.
