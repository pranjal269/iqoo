# PRAMAAN — Day 3 → Day 4 Operational Handoff

**Written:** 2026-10-03 · **Owner:** Krishika (all three lanes) · **Purpose:** what a developer needs before continuing Day 4. History stays in `HANDOFF.md`; detail is linked, not copied.

## 1. Current State

| Stage | State | Evidence |
|---|---|---|
| Day 1 | Complete | `HANDOFF.md` Day 1 entries; commits `35639af`, `839a6d8`, `4fb47a2` |
| Day 2 | Complete | `docs/day-2-handoff.md`; commits `46d1d8d`, `a333986` |
| Day 3 | Complete (final audit PASS) | `docs/day-3-handoff.md`; commit `87c20f8` |
| Day 4 P1 — Entry | Implemented and audited (PASS); **not committed** | `docs/day-4-register.md`; `HANDOFF.md` Day 4 · Phase 1 entry |
| Day 4 P2–P6 | **Not executed** | None of their outputs exist (see §7) |

Day 3 delivered (verified in the Day 3 Phase 6 audit, headless Chrome at 1440 px and 390 px):
- Clickable phone-first prototype, all three result branches, the GPS-timeout path.
- Certificate (SC-08), hand-over concept (SC-09), stepped Verifier Desk concept (SC-10 → SC-11 → SC-12) with evidence views.
- Technical explainer, validation-plan template, known-risks material (`prototype/person-2/`).
- Claim audit with zero open violations; traceability matrix (draft); video-script skeleton.
- Day 3 self-walkthrough: automated click-through of every branch, Back and Restart. No human walkthrough was done on Day 3; the first human review is the Day 4 blind test.

## 2. Git / Branch State

Verified 2026-10-03 with `git status`, `git log` and `git rev-list` after `git fetch`.

| Item | State |
|---|---|
| Active branch | `krishika` |
| HEAD | `87c20f8` feat(prototype): complete Day 3 clickable prototype and technical package |
| Remote | `origin/krishika` = `a333986`; local is **1 commit ahead, not pushed** |
| Day 3 committed | **Yes**, as its own commit (`87c20f8`) |
| Day 4 P1 committed | **No.** Uncommitted: `HANDOFF.md` (modified), `docs/day-4-register.md` (new), this file (new) |
| Working tree | Dirty (the three Day 4 P1 files only) |
| `main` | `35639af` = `origin/main`; **not merged** (krishika has not been merged into main) |
| Intentionally untracked | `PRAMAAN_PRD.docx` and the Plan PDF (local sources, excluded through `.git/info/exclude`); `prototype/person-1/node_modules/`, `dist/` (`.gitignore`) |

## 3. Day 3 Frozen Product State

**Journey:** SC-01 App Open → SC-02 Hold-Still Calibration → SC-03 Capture Preparation → SC-04 Ready to Capture (or SC-04 V-TIMEOUT) → SC-05 Capturing → SC-06 Checking → SC-07 Result → SC-08 Certificate → SC-09 Hand-over → SC-10 Drop certificate → SC-11 Verify → SC-12 See evidence. Run: `cd prototype/person-1 && npm install && npm run dev` (there is no root `package.json`).

**Result branches:** Likely Genuine · Needs Review · Likely Fraudulent (the reviewer picks the sample on SC-06).

**Core checks:** Motion Consistency · Geofence / Location Binding · FFT-based Moiré / Recapture Detection.

**Check statuses:** PASS · FAIL · LOW_CONFIDENCE · UNAVAILABLE.

**Prototype boundary:** every result is a hardcoded, labelled sample; the only animation is a CSS pause on SC-06. There is no real camera, GPS, sensor, FFT, geofence calculation, fusion calculation, signing, cryptographic verification, network, file processing or Android code. Rules: `docs/event-boundary.md`, HANDOFF Day 2 · Phase 1 (P1 Q5).

## 4. Day 3 Audit Status

P1 — PASS · P2 — PASS · P3 — PASS · P4 — PASS · P5 — PASS · P6 — PASS (`HANDOFF.md` Day 3 entries, `CHANGELOG.md` Day 3).

Fixes that matter for Day 4 continuity:

| Area | Fix |
|---|---|
| SC-08 | PRD §7 media duration field added |
| Sample values | Reason numbers labelled on SC-08, SC-12 and the manifest mockup |
| Prototype controls | Wording no longer says "no timers" (contradicted the SC-06 pause) |
| Technical explainer | States what the prototype shows vs what the event builds; capabilities in "will" form |
| Validation plan | Evidence-to-collect column; risks "addressed live" separated from limits "stated openly, not solved" |
| Submission draft | Capability verbs in "will" form; canonical check names restored |
| Anchor brief | Core line and judge answer corrected (no "real", no overstatement of the CAG case, reuse handled by camera-only capture) |
| Traceability | Story-level rows added; every citation checked to exist |
| Claim audit | Zero open violations (`docs/claim-audit-log.md`) |
| Records | `docs/day-3-handoff.md` and `CHANGELOG.md` updated to the audited state |

## 5. Day 4 P1 State

Purpose: ENTRY → INVENTORY → SCOPE → FIELD LOCK. Detail: `docs/day-4-register.md`.

### Completed
- Day 3 baseline re-checked (build; full journey at both widths; boundary scan) and committed separately (`87c20f8`).
- Stray empty root `package-lock.json` deleted (never committed).
- Day 4 scope locked to Plan Day 4: 16 tasks (T1–T16) with owner, destination and validation method.
- Day 5 work listed separately.
- Artifacts classified COMPLETE / DAY 4 / DAY 5 / TEAM INPUT.
- Stale statements identified, not yet fixed (fix belongs to P4): the submission draft's "not started / to be added" cells; the pitch line "In Odisha this July" (T16). No terminology drift found.
- Submission-field status recorded: only the Plan's field list is known; the platform's actual fields and limits are unverified (TI-6).
- Not done in P1: the Day 4 P1 commit.

### Human / team dependencies (pending; never to be invented)

| Item | Needed for |
|---|---|
| Prior builds & hackathons (Q3) | Form field; deck team slide |
| Android proficiency; LLM proficiency | Form fields |
| Q1 E3 source · Q2 UNI link · Q4 submission cutoff | Evidence (E3 stays excluded); deadline |
| Prototype URL hosting decision | Form field; manifest |
| Platform's actual field list and character limits | Form fields; manifest |
| External blind-test reviewer(s) | P2 |
| Video voice-over / recording; public video upload | P4 |

Optional information (not a form field): the official playbook's Office Kit section (`docs/architecture-concept.md` §8).

## 6. Day 4 Six-Phase Execution Map

### P1 — Entry
Commit Day 3, inventory, scope and field lock. **State:** implemented and audited; commit pending.

### P2 — Blind Test
Blind reviewer session → confusion log → highest-impact fixes → re-test → screenshots.
Human dependency: an actual external reviewer session.

### P3 — Reviewer Package
Reviewer walkthrough + roadmap + event implementation map. No technical implementation.

### P4 — Assembly
Deck + video / recording-ready package + written form + submission manifest.
Human dependencies: team voice-over / recording; team-provided fields; public video upload; Prototype URL.

### P5 — Claim + Traceability
Final claim audit + traceability. Zero open claim violations required.

### P6 — Exit
Simulated full walkthrough + Day 4 release-candidate exit audit. This is a simulated integration review unless the team actually performs a joint review.

## 7. Day 4 Carry-Forward Register

| Item | Phase | Status | Owner | Notes |
|---|---|---|---|---|
| Day 4 P1 commit | P1 | Open | Krishika | Separate from Day 3 |
| Blind reviewer session + re-test | P2 | Waiting for a reviewer | Team + external reviewer | Observations recorded by the session runner only (`docs/blind-test-notes.md`) |
| Highest-impact confusion fixes | P2 | Not started | Person 1 lane | Only for confusion the session actually shows |
| SC-08 desktop label wrap ("Geofence / Location Binding", "/" alone on a line) | P2, else Day 5 | Open, cosmetic | Person 1 lane | Day 5 UX QA unless the blind test raises it |
| Final screenshots | P2 | Not started | Person 1 lane | After fixes; phone frame only; `prototype/person-1/screenshots-final/` |
| Reviewer walkthrough | P3 | Not started | Person 2 lane | `prototype/person-2/reviewer-walkthrough/` |
| Roadmap | P3 | Not started | Person 2 lane | PRD §10–§11 hours as intent; `prototype/person-2/roadmap/` |
| Event implementation map | P3 | Not started | Person 2 lane | Coverage list in `docs/day-4-register.md` T7 |
| Deck | P4 | Not started | Person 3 lane | `submission/deck.pdf`; no PDF tool installed, headless Chrome print planned |
| Video recording | P4 | Waiting for a voice | Team | Else recording-ready package; no ffmpeg on this machine |
| Video upload | P4 | Waiting for the team | Team | Public action; URL not invented |
| Team form inputs | P4 | Waiting for the team | Team | §5 list |
| Prototype URL | P4 | Waiting for a decision | Team | Placeholder in `docs/submission-draft.md` |
| "In Odisha this July" pitch line (T16) | P4 | Open | Person 3 lane | `docs/evidence-narrative.md`; reused by deck and video |
| Submission manifest | P4 | Not started | Person 3 lane | `docs/submission-manifest.md` |
| Claim audit (deck, video, written) | P5 | Not started | Person 3 lane | Zero open violations required |
| Traceability matrix (Day 4 assets) | P5 | Draft exists; update not started | Person 3 lane | `docs/traceability-matrix.md` |
| Final Day 4 integration | P6 | Not started | Krishika | Simulated unless the team reviews jointly |

## 8. Submission / Claim Rules That Must Not Change

- E2 (CAG Karnataka, Report No. 13 of 2025) is the core evidence. E1 (Kandhamal) is allegation and context only. E3 is not used.
- ₹0.97 crore does not appear unless independently verified through an approved source.
- No accuracy, latency, performance, testing, validation or detection claims.
- Prototype results stay clearly simulated: every number labelled "sample value, prototype interaction".
- Canonical check names and verdict names only (§3).
- Stamps preserved: "Prototype interaction — simulated result" · "Conceptual illustration, not measured data" · "Proposed implementation for the event" · "Illustrative — not a real signed output".
- "PRAMAAN proves capture authenticity, not scene truthfulness."
- Positioning leads with recapture + certificate, not geofence.
- Nothing presents the prototype as the finished implementation.

## 9. Day 4 Rules

- Fixes before screenshots; screenshots before the deck.
- Blind-test feedback is never fabricated.
- Human dependencies are marked as waiting, never as done.
- No real technical pipeline functionality.
- No Day 5 tasks (freeze, final UX QA, incognito URL check, final Anchor re-read, checkbox, submission).
- No merge into `main` during Day 4.
- Stage only Day 4 files. PNG files are committed only from `prototype/person-1/screenshots-final/`; no other screenshots, QA artifacts, local PDFs or the PRD.

## 10. Next Action

NEXT: run and audit Day 4 P1 only. Its implementation and audit are done; what remains is the **Day 4 P1 commit** (`HANDOFF.md`, `docs/day-4-register.md`, this file), separate from the Day 3 commit, then stop.

P2 cannot be marked complete until an actual external reviewer session is performed.

Do not proceed through P2–P6 automatically.
