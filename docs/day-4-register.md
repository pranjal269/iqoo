# Day 4 Register — baseline, scope lock, carry-forwards

**Owner:** Krishika (all three lanes) · **Created:** 2026-10-03 (Day 4 · Phase 1) · **Baseline commit:** `87c20f8` on `krishika` (Day 3, committed locally, not pushed)
**Sources:** Plan Day 4 (Person 1, 2, 3 sections and exit gate) and Day 5 sections; `docs/day-3-handoff.md` §4; HANDOFF.md; `docs/claim-audit-log.md`.
**Statuses:** COMPLETE (do not rebuild) · DAY 4 (create or update today) · DAY 5 (deferred by plan) · TEAM INPUT (waiting on information only the team or the platform can give).

## 1. Day 3 baseline (verified 2026-10-03, before the baseline commit)

- Build passes (`prototype/person-1`, `npm run build`).
- Headless Chrome on the dev server, 1440 px and 390 px: 42 steps each; all three branches SC-01 → SC-12; Back through 13 steps; Restart; no failed clicks, console errors, external requests, layout issues or unstamped screens.
- Boundary scan: no camera, location, sensor, crypto, timer, network, storage or file-input code.
- Claim-audit log: zero open violations.
- Day 3 work committed as `87c20f8`. A stray empty root `package-lock.json` (from running `npm install` in the repo root, `"packages": {}`) was deleted, not committed.

## 2. Artifact classification

| Artifact | Location | Status | Day 4 action |
|---|---|---|---|
| Clickable prototype (SC-01–SC-12, gallery, technical view) | `prototype/person-1/` | COMPLETE | Change only for confusion found in the blind test (P2) |
| Design system, fixtures, canonical copy | `prototype/person-1/design-system/`, `core-screens/fixtures.js` | COMPLETE | None |
| Architecture diagram, certificate mockup, evidence visuals, explainers | `prototype/person-2/architecture/`, `certificate-mockup/`, `evidence-visuals/` | COMPLETE | None; source of the "Proposed:" labels for the event map (P3) |
| Technical explainer | `prototype/person-2/technical-explainer/` | COMPLETE | Input to P3 and the deck |
| Validation plan + known risks | `prototype/person-2/validation-plan/` | COMPLETE | Input to P3 and the deck's risk content |
| Problem-evidence panel | `prototype/person-3/problem-evidence/` | COMPLETE | Input to the deck |
| Evidence base, evidence narrative | `docs/evidence-base.md`, `docs/evidence-narrative.md` | COMPLETE | Deck and video take evidence only from here |
| Anchor positioning brief | `docs/anchor-positioning-brief.md` | COMPLETE | Input to the deck's differentiation slide |
| Architecture concept, event boundary | `docs/architecture-concept.md`, `docs/event-boundary.md` | COMPLETE | Cross-check source for P3 |
| State map, UX requirements | `docs/state-map.md`, `docs/ux-requirements.md` | COMPLETE | Update only if a P2 fix changes a screen |
| Claim-audit checklist, rule-compliance checklist | `docs/claim-audit-checklist.md`, `docs/rule-compliance-checklist.md` | COMPLETE | Applied in P5 |
| Attributions | `docs/attributions.md` | COMPLETE | Update only if Day 4 adds third-party material |
| Submission draft | `docs/submission-draft.md` | DAY 4 | Finalise fields (P4) |
| Video script | `docs/video-script.md` | DAY 4 | Update only for blind-test findings (P4) |
| Claim-audit log | `docs/claim-audit-log.md` | DAY 4 | Day 4 rows (P5) |
| Traceability matrix | `docs/traceability-matrix.md` | DAY 4 | Add Day 4 assets (P5); still a draft |
| Day 1 P1 specification | `prototype/person-1/day-1/` | COMPLETE | Unchanged (historical record) |
| Day 2 / Day 3 handoffs | `docs/day-2-handoff.md`, `docs/day-3-handoff.md` | COMPLETE | Historical; not edited |

## 3. Day 4 tasks (scope locked to Plan Day 4)

| # | Plan source | Task | Owner lane | Output (destination) | Validation method | Status |
|---|---|---|---|---|---|---|
| T1 | Day 4 P1 steps 1–2 | Blind walkthrough with someone outside the team; log confusion | Person 1 + **a real reviewer** | `docs/blind-test-notes.md` | Observations recorded by the session runner; comprehension questions answered; nothing invented | DAY 4 · needs a human |
| T2 | Day 4 P1 step 3 | Fix the highest-impact confusion points | Person 1 | Changes in `prototype/person-1/` | Re-run journey QA at 1440 px and 390 px; claim and terminology scan | DAY 4 |
| T3 | Day 4 P1 step 5 | Re-run the walkthrough after fixes | Person 1 + reviewer (preferably a second fresh one) | `docs/blind-test-notes.md` (re-test section) | Same comprehension questions | DAY 4 · needs a human |
| T4 | Day 4 P1 step 4 | Final-quality phone-first screenshots of every core screen | Person 1 | `prototype/person-1/screenshots-final/` | Phone frame only (no prototype controls, view switch or browser UI); stamps and sample labels visible | DAY 4 |
| T5 | Day 4 P2 step 1 | Reviewer-walkthrough script | Person 2 | `prototype/person-2/reviewer-walkthrough/` | Cross-check against the prototype and technical package | DAY 4 |
| T6 | Day 4 P2 step 2 | Roadmap slide: Red Light hours → what is built first → Green Light hours → stretch | Person 2 | `prototype/person-2/roadmap/` | PRD §10, §11 hours only; future tense | DAY 4 |
| T7 | Day 4 P2 step 3 | Event-implementation map: every "proposed" label from Day 2's assets → the event hour it becomes real (PRD build-plan hours) | Person 2 | `prototype/person-2/roadmap/` (Plan names only the reviewer-walkthrough and roadmap folders; the map sits with the roadmap) | Coverage list, counted 2026-10-03: architecture technology labels (CameraX, SensorManager, OpenCV / FFT, Android Keystore); the 8 numbered architecture stages; the 6 "Proposed for the event build" table rows; signature algorithm ECDSA-SHA256 (certificate mockup, SC-08); problem-evidence "design element (proposed)" column (3 rows) | DAY 4 |
| T8 | Day 4 P2 step 4 | Cross-check the map against the fixed prototype for terminology drift | Person 2 | Audit result in P3 report | Term scan | DAY 4 |
| T9 | Day 4 P3 step 1 | Deck (release candidate): hook → problem → concept → three checks → certificate + Verifier Desk → Anchor → limitation → roadmap → team / stand-out | Person 3 | `submission/deck.pdf` (+ source) | Stamps on every visual; claim scan of the PDF text | DAY 4 |
| T10 | Day 4 P3 step 2 | Record the video walkthrough against the Day 3 script and the fixed prototype | Person 3 + **team voice-over** | `submission/video-walkthrough` | Matches the script and prototype; ends on the limitation | DAY 4 · needs a human (narration); recording-ready package otherwise |
| T11 | Day 4 P3 step 3 | Finalise written form fields | Person 3 | `docs/submission-draft.md` | Finalised except TEAM INPUT fields | DAY 4 · partly TEAM INPUT |
| T12 | Day 4 P3 step 4 | Submission manifest, checked against the form's actual fields | Person 3 | `docs/submission-manifest.md` | Every file and link listed with status | DAY 4 · field list needs confirmation (TI-6) |
| T13 | Day 4 P3 step 5 | Claim audit of the deck and video | Person 3 | `docs/claim-audit-log.md` | Zero open violations | DAY 4 |
| T14 | Day 4 exit gate | Traceability matrix updated with Day 4 assets (still a draft) | Person 3 | `docs/traceability-matrix.md` | Every citation exists | DAY 4 |
| T15 | Day 3 handoff §4 | Prototype URL hosting decision | Team | Manifest entry | Decision recorded, not invented | DAY 4 · TEAM INPUT (TI-5) |
| T16 | Day 1 checklist (inherited) | Pitch line "In Odisha this July" (evidence narrative, reused by deck and video) | Person 3 | `docs/evidence-narrative.md` wording in P4 | Reads correctly at the Finale | DAY 4 |

## 4. Deferred to Day 5 (do not do on Day 4)

- Final UX QA pass, including the cosmetic SC-08 label wrap ("Geofence / Location Binding" with "/" alone on a line), unless the blind test makes it a confusion point.
- Re-export the final screenshot set after freeze; freeze the prototype source.
- Prototype URL incognito check.
- Person 2 technical audit; package technical assets into `submission/`; one-paragraph technical summary for the Description field.
- Final package against the form fields; truthful confirmation checkbox; `EVENT-START-HANDOFF.md`; final joint read-through; submission.
- One more Anchor re-read before the Finale.
- Integration into `main` (deferred by the Day 2 Phase 1 decision).

## 5. Team inputs (not invented)

| ID | Item | Needed for | Status |
|---|---|---|---|
| TI-1 | Q3 Prior builds & hackathons (all members) | Form field, deck team slide | Pending |
| TI-2 | Android proficiency | Form field | Pending |
| TI-3 | LLM proficiency | Form field | Pending |
| TI-4 | Q1 E3 source, Q2 UNI link, Q4 submission cutoff | Evidence (E3 stays excluded), deadline | Pending |
| TI-5 | Prototype URL hosting | Form field, manifest | Pending (decision) |
| TI-6 | The platform's actual field list and character limits | Form fields, manifest (Plan Day 4 P3 step 4) | Pending: only the Plan's list is known (Idea Title, Description, Video Walkthrough URL, Prototype URL, Deck/Document, Android / LLM proficiency, Prior builds, Standout paragraph) |
| TI-7 | Official playbook Office Kit section | `docs/architecture-concept.md` §8 | Pending (not a form field) |
| TI-8 | Blind-test reviewer(s) outside the team | T1, T3 | Pending |
| TI-9 | Video narration voice | T10 | Pending |

## 6. Rules for Day 4

- No new product functionality; prototype changes only for blind-test confusion.
- `prototype/person-1/screenshots-final/` is the only place where PNG files may be committed (deliberate Day 4 deliverable). All other screenshots and QA artifacts stay out of the repo.
- `submission/` holds the deck PDF and its source, and the video (or its recording-ready package).
- No feedback, team answers, URLs, platform fields or numbers are invented. A step that needs a human is reported as waiting, never as done.
