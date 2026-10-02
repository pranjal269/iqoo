# Day 2 Handoff — PRAMAAN

**Date:** 2026-10-03 (Day 2 frozen 2026-10-02) · **Owner:** Krishika (all three lanes on Day 2) · **Branch:** `krishika` @ `46d1d8d` · **Audit:** Day 2 final audit, PASS WITH CARRY-FORWARD
Start here on Day 3. Full history: `HANDOFF.md` (Day 2 · Phases 1, 3, 4, 5, 6 entries), `CHANGELOG.md`, `docs/claim-audit-log.md`.

## 1. What Day 2 completed

| Phase | Result | Output |
|---|---|---|
| P1 Entry & decision lock | PASS | Terminology table, verdict model, stamps, prototype-tool boundary (HANDOFF Day 2 · Phase 1) |
| P2 Design system + core screens | PASS | `prototype/person-1/design-system/`, `core-screens/` SC-01 → SC-07 |
| P3 Clickable prototype, Certificate, Verifier Desk | PASS | `prototype/person-1/clickable-prototype/` (pulled forward from Day 3; schedule only) |
| P4 Technical + evidence package | PASS | `prototype/person-2/`, `prototype/person-3/problem-evidence/` |
| P5 Evidence, positioning, submission | PASS WITH CARRY-FORWARD | `docs/evidence-narrative.md`, `docs/submission-draft.md`, `docs/claim-audit-log.md` |
| P6 Integration, QA, freeze | PASS WITH CARRY-FORWARD | Commit `46d1d8d` pushed to `origin/krishika` |

Plan Day 2 exit gate: all five items met (CHANGELOG, Day 2 · Phases 2–6).

## 2. Final prototype state

- React + Vite, presentation-only, in `prototype/person-1/` (`npm install`, `npm run dev`; `npm run build` passes).
- Three views: **Clickable journey** · **All screens and components** · **Technical and evidence package**.
- Journey: SC-01 App Open → SC-02 Hold-Still Calibration → SC-03 Capture Preparation → SC-04 Ready to Capture → SC-05 Capturing → SC-06 Checking → SC-07 Result (reviewer picks Likely Genuine / Needs Review / Likely Fraudulent) → SC-08 Certificate → Verifier Desk concept (laptop frame, three stages).
- Back steps to SC-01; Restart returns to SC-01. Both are prototype-only controls, not product features.
- Final audit (headless Chrome against the dev server, 1440 px and 390 px): no dead ends, failed clicks, external requests or console errors. Known item: the laptop-sized Verifier Desk frame is wider than a phone-width page (§7).

## 3. Technical / evidence package

- Architecture diagram, stamped "Proposed implementation for the event"; no fusion weights or cutoffs shown.
- Three-check explainers and evidence visuals, stamped "Conceptual illustration, not measured data". One authoritative set in `prototype/person-2/evidence-visuals/`.
- Certificate manifest (PRD §7 fields), stamped "Illustrative — not a real signed output"; hash, signature and key read "none".
- Problem-evidence panel: E2 core, E1 context in allegation language, E3 never shown.

## 4. Submission / evidence package

- `docs/submission-draft.md`: form field map plus 13 sections (title, one-line, problem, solution, how it works, stand-out, evidence, prototype status, roadmap, originality, positioning, limitations, compliance notes).
- `docs/evidence-narrative.md`: E2 CAG Karnataka 13/2025 (pp. 45–46, 47–48, 116) as core; E1 Kandhamal as allegation-only context; E3 excluded.
- Placeholders kept, not invented: **[TEAM INPUT]** Prior builds & hackathons (Q3), **[TEAM INPUT]** Android / LLM proficiency, **[OPEN]** Prototype URL.

## 5. Locked terminology and claims

- Terms: PRAMAAN · Reality Score · Motion Consistency · Geofence / Location Binding · FFT-based Moiré / Recapture Detection · Verifier Desk · Certificate · capture authenticity · scene truthfulness · 3-second clip.
- Verdict bands: Likely Genuine · Needs Review · Likely Fraudulent. Check statuses: PASS · FAIL · LOW_CONFIDENCE · UNAVAILABLE. Not used: Verified, Flagged, OK.
- Limitation line, verbatim: "PRAMAAN proves capture authenticity, not scene truthfulness."
- Signing: "App-level signing, not hardware-attested."
- Stamps: "Prototype interaction — simulated result" · "sample value, prototype interaction" · "Conceptual illustration, not measured data" · "Proposed implementation for the event" · "Illustrative — not a real signed output".
- Capability is described as "designed to" / "will"; no accuracy, latency, test or validation claims. Core checks are deterministic signal processing, not AI.

## 6. Rule-compliance boundary

- **Prototype now:** screens, hardcoded sample states, plain navigation, conceptual visuals, docs.
- **Event build only:** Android app (Kotlin / Jetpack Compose), camera capture, GPS and geofence, motion signals and optical flow, FFT moiré check, fusion and Reality Score, Keystore signing, the working Verifier Desk, all testing and measurement.
- The repo contains no camera, location, sensor, FFT, geofence, fusion, crypto, timer, network, storage, Android or backend code (final audit scan). Dependencies: React, React DOM, Vite, Vite React plugin (`docs/attributions.md`).

## 7. Day 1 carry-forwards

**Resolved on Day 2**
- Verdict model (D-1): three PRD bands; "verified / flagged" retired.
- Status vocabulary (D-2 / T-11): PASS · FAIL · LOW_CONFIDENCE · UNAVAILABLE.
- Capture wording (D-3): "3-second clip".
- Claimed site (D-4): display-only sample on SC-03.
- Laptop surface (D-5): laptop frame.
- Limitation on screens (D-6): on SC-07, SC-08 and the Verifier Desk.
- Numbers (D-7): labelled samples, no weights.
- Per-check progress (D-10): non-quantitative.
- Naming authority (D-11): single owner.
- Verifier Desk stages and empty state (P2-Q3, P2-Q5): one screen, three stages, no empty state.
- First screen (P3-Q1): SC-01.
- SC-08 manifest fields (P3-Q2): all PRD §7 fields.
- 3-second duration (P4-F2): named, no timer.
- Single Verifier Desk screen (P4-F1).
- Prototype tool (Q5): React + Vite, presentation-only.
- Git remote (Q6).
- Ownership: Krishika runs all lanes from Day 2.
- P1 journey §1 product voice: PASS WITH NOTE.
- Stamp wording and E2-for-E3 substitution (P3 D1–D4): applied throughout.

**Deferred to Day 3 / later (by plan or recorded decision)**
- D-8 certificate transfer; P2-Q2 hand-over screen; D-9 retake; P2-Q4 back / exit as product features; P2-Q1 SC-04 V-TIMEOUT (Day 3, Phase 1 entry).
- Claim-audit violations, fix-by Day 3 (`docs/claim-audit-log.md`):
  - `docs/architecture-concept.md` §6 "altered in transit"
  - `docs/architecture-concept.md` §4 "all four checks"
  - `docs/event-boundary.md` T-10 cross-reference
  - `docs/anchor-positioning-brief.md` §6: "…whether the picture is real", "A correct GPS fix doesn't catch any of these", "the photo itself"
  - `docs/evidence-base.md` line 80 E1 wording
- Dedicated limitation slide: Day 4 deck (D-6, claim-audit C-8).
- `docs/traceability-matrix.md`: Plan Day 3, Person 3 (its name clashes with P1's Day 1 `day-1/traceability-matrix.md`).
- Integration into `main`: deferred by decision (Phase 1 entry).

**Still open**
- Q1 E3 source, Q2 UNI link, Q4 submission cutoff: no answer; worked around.
- Q3 Prior builds & hackathons, and the Android / LLM proficiency field: team input needed.
- `docs/ux-requirements.md`, `docs/state-map.md`: never filed (content is in `prototype/person-1/day-1/`).
- Day 1 folder structure: `prototype/integration/`, `assets/`, `submission/` and `prototype/person-1/README.md` do not exist. `submission/` is needed by Day 5.
- **Found in the Day 2 final audit, not yet logged:** `docs/event-boundary.md` B-4 says the fusion weights and bands are "shown … on illustrative screens"; since Phase 4 they appear on no screen. Log it in `docs/claim-audit-log.md` and correct the row on Day 3.
- **Time-sensitive:** `docs/anchor-positioning-brief.md` §7 asks to re-read the Anchor public post about one week before 9 Oct, which is now. Not yet done.
- Minor Day 1 P1 cleanup listed in `day-1/day-1-handoff.md` §12 (P4 §5 "screen(s)", P2-Q3/Q5 wording, EXC-03 overlap). Not blocking.

## 8. Day 3 starting points

1. Fix and re-audit the logged violations listed in §7, and log and fix B-4 (Plan Day 3 P3 step 1).
2. Re-verify Anchor's public description (brief §7) and update the brief and submission §11 if it has changed.
3. Plan Day 3 lanes: video-walkthrough script, traceability matrix, validation-plan template.
4. Decide D-8 / P2-Q2 / D-9 / P2-Q4 / P2-Q1 only if Day 3 screens need them.
5. Decide Prototype URL hosting and how the Verifier Desk appears at phone width before any public link.
6. Chase the team inputs (Q3, Android / LLM proficiency).

## 9. Important files

| Area | Location |
|---|---|
| Decisions, terminology, open questions | `HANDOFF.md` |
| Prototype app | `prototype/person-1/` (`App.jsx`, `clickable-prototype/`, `core-screens/`, `design-system/`) |
| Sample values | `prototype/person-1/core-screens/fixtures.js` |
| Canonical copy and stamps | `prototype/person-1/design-system/copy.js` |
| Architecture, certificate, visuals | `prototype/person-2/` (`TECHNICAL-PACKAGE.md`) |
| Problem-evidence panel | `prototype/person-3/problem-evidence/` |
| Evidence register | `docs/evidence-base.md` |
| Submission text | `docs/submission-draft.md`, `docs/evidence-narrative.md` |
| Claim audit | `docs/claim-audit-checklist.md`, `docs/claim-audit-log.md` |
| Rule compliance | `docs/rule-compliance-checklist.md` |
| Positioning | `docs/anchor-positioning-brief.md` |
| Architecture / boundary | `docs/architecture-concept.md`, `docs/event-boundary.md` |
| Day 1 UX specification | `prototype/person-1/day-1/` |

## 10. Git state

- `krishika` = `origin/krishika` = `46d1d8d` "feat(prototype): complete Day 2 prototype package".
- `main` = `origin/main` = `35639af`, unchanged.
- Not tracked: `node_modules/`, `dist/` (`prototype/person-1/.gitignore`). The PRD (`PRAMAAN_PRD.docx`) and the Plan PDF are local source files, excluded locally through `.git/info/exclude` (not committed).
- This file and its `HANDOFF.md` reference are uncommitted.
- No Day 3 implementation has started.
