# Traceability Matrix — PRAMAAN prototype → PRD → event build

**Owner:** Person 3 lane (Krishika, all lanes) · **Created:** 2026-10-03 (Day 3 · Phase 5) · **Status:** DRAFT, updated Day 4 · Phase 5 with the Day 4 assets (§4). Still a draft (register T14) until the Day 5 freeze
**Format (Plan Day 3 P3 step 2):** prototype element → source basis → prototype treatment → event treatment.
**Playbook rules** (`docs/rule-compliance-checklist.md`): R1 original work in the event window · R2 open-source with attribution · R3 organisers may verify the build window · R4 no unfair practice · R5 phone-first, runs on the phone · R6 local / open-source model earns points (Office Kit).
P1's Day 1 screen-to-requirement list (`prototype/person-1/day-1/traceability-matrix.md`) is a separate, earlier document; this matrix covers every element as built by the end of Day 3.

## 0. Story-level elements

| Prototype element | Source basis | Prototype treatment | Event treatment |
|---|---|---|---|
| Primary journey (SC-01 → SC-12) | PRD §1.1, §8.1; Plan §3 (open app → capture → see it checked → Reality Score and verdict → view / share a certificate; plus the Verifier Desk screen); `docs/state-map.md`; R5 | Clickable phone-first journey of hardcoded screens; automatic steps advanced by labelled prototype controls | The same journey in the Android app and the laptop Verifier Desk |
| Capture concept (3-second clip, camera-only) | PRD FR-1, FR-9; D-3 | "3-second clip" everywhere; camera placeholder; no gallery or upload control | Real 3-second clip with gyroscope log and one GPS fix |
| Three checks | PRD §1.3, FR-2, FR-3, FR-4; HANDOFF terminology lock | Named on SC-06; explained conceptually in the technical package; no check runs | Motion Consistency, Geofence / Location Binding and FFT-based Moiré / Recapture Detection written during the event |
| Check statuses (PASS · FAIL · LOW_CONFIDENCE · UNAVAILABLE) | PRD FR-2, FR-3, FR-8; D-2 / T-11 | Hardcoded per sample result; uncertainty shown as LOW_CONFIDENCE, not fraud | Statuses produced by each check, with reasons |
| Fusion → Reality Score → verdict band (Likely Genuine · Needs Review · Likely Fraudulent) | PRD FR-5, §1.2 row 2; D-1, D-7 | Sample Reality Score and band chosen by the reviewer; no weights, cutoffs or thresholds shown | Fixed, explainable rule over the available checks; defaults confirmed or tuned at the event (PRD §13.3) |

## 1. Screens (clickable journey)

| Prototype element | Source basis | Prototype treatment | Event treatment |
|---|---|---|---|
| SC-01 App Open | PRD §1.1, §1.4; Plan §9 (purpose on first screen); R3, R4 | Purpose line in "designed to" form, limitation line, screen stamp | First screen of the Android app (Kotlin / Jetpack Compose, PRD §8.2) |
| SC-02 Hold-Still Calibration | PRD FR-3 (calibration), §12.1 row 2 | Instruction only; advanced by a prototype control | Real gyroscope baseline at app start |
| SC-03 Capture Preparation | PRD FR-1 (live GPS accuracy), FR-2, §6.2.1 | Claimed site and GPS accuracy as labelled samples; capture disabled with reason | Real GPS acquisition against 3–5 hardcoded demo sites |
| SC-04 Ready to Capture, V-NORMAL | PRD FR-1, FR-9; R5 | Camera placeholder; no gallery or upload control; GPS accuracy sample | Real camera preview (proposed: CameraX), camera-only capture |
| SC-04 V-TIMEOUT | PRD FR-2 (timeout → best-available fix, accuracy in reasons), §12.1 row 3 | Best-available fix (sample) with a limited-accuracy notice; no duration shown | Real timeout with the threshold as a configuration value |
| SC-05 Capturing | PRD FR-1 (3-second clip, deliberate pan), §12.2 row 3 | Pan instruction; no timer or countdown | Real 3-second clip with gyroscope logging |
| SC-06 Checking | PRD FR-2 to FR-5; D-10; Plan Day 3 P1 step 4 | Three check names; CSS-only motion; result choice appears after a brief simulated transition, labelled "not a measured processing time" | Real on-device checks and fusion; time measured at the event (PRD §9) |
| SC-07 Result (V-LG, V-NR, V-LF) | PRD FR-5 (bands, reasons), FR-8 (UNAVAILABLE); §1.4; D-1, D-2, D-7 | Reviewer chooses the sample; Reality Score and scores are labelled samples; status + reason per check; limitation line | Verdict produced by the fixed fusion rule over the available checks |
| SC-08 Certificate | PRD §7 (every manifest field), FR-6 | Illustrative stamp; "App-level signing, not hardware-attested"; hash, signature, key read "none" | Real JSON manifest signed with an app-managed Android Keystore key |
| SC-09 Hand-over | PRD FR-6 (one file), FR-7 (dropped / opened file), §3.2 (no cloud); D-8, P2-Q2 | Screen only; nothing is sent | Offline file transfer to the laptop; method chosen in the event build |
| SC-10 Drop certificate | PRD FR-7; Plan §3 "drop certificate"; P2-Q5 | Drop area with no file input; "Open sample certificate" | Laptop app accepts a dropped / opened certificate file |
| SC-11 Verify | PRD FR-7 (signature check); Plan §3 "verify"; P2-Q3 | "Signature valid" labelled an illustrative result; states no signature exists | Real signature verification against the bundled public key |
| SC-12 See evidence | PRD FR-7 (score, bands, per-check reasons, FFT plot, gyro-vs-flow trace, geofence distance) | Labelled samples; three concept visuals stamped "Conceptual illustration, not measured data"; limitation line | Real evidence rendered from the certificate |
| Prototype controls (Continue, sample-result choice, Back, Restart) | HANDOFF Day 2 Phase 3; Day 3 P2-Q4, D-9; R3; Day 4 P2-B fix F1 | Outside the phone frame, labelled "not part of the product" (beside the frame on wide screens, above it at ≤ 720 px since Day 4); Back retraces the reviewer's path | None: the product journey is forward-only, with no retake |

## 2. Technical and evidence package

| Prototype element | Source basis | Prototype treatment | Event treatment |
|---|---|---|---|
| Architecture diagram (`prototype/person-2/architecture/`) | PRD §1.3, §8; claim-audit C-10; R5 | Stamped "Proposed implementation for the event"; technology names are labels; no weights, cutoffs or thresholds | The Android pipeline and laptop Verifier Desk built in the event window (R1) |
| Check explainers + evidence visuals (`prototype/person-2/evidence-visuals/`) | PRD FR-2, FR-3, FR-4, FR-7; claim-audit C-9 | Hand-drawn SVG, stamped on each visual; no data behind them | Plots generated from real captures |
| Certificate manifest mockup (`prototype/person-2/certificate-mockup/`) | PRD §7; FR-6 | Every field; every sample value commented as a sample; illustrative stamp | Real signed manifest |
| Technical explainer (`prototype/person-2/technical-explainer/`) | PRD §1.3, §6, §8; Plan Day 3 P2 step 1 | Descriptive, "will be written during the event" | Explains the real build in the pitch |
| Validation plan + known risks (`prototype/person-2/validation-plan/`) | PRD §9, §11, §12, §13.1; Plan Day 3 P2 steps 3–4 | Template with empty result fields; risks with planned responses, none solved yet | Filled in at the event with observed values only |
| Problem-evidence panel (`prototype/person-3/problem-evidence/`) | `docs/evidence-base.md` E2, E1; claim-audit C-4, C-5, C-6 | E2 quotes with page numbers; E1 as an allegation, attributed to OmmCom News; E3 never shown | Same evidence in the pitch and deck |

## 3. Cross-cutting labels and rules

| Prototype element | Source basis | Prototype treatment | Event treatment |
|---|---|---|---|
| Five stamps | Claim-audit "Mandatory stamps"; R3, R4 | Rendered from one source (`design-system/copy.js`) | Any illustrative item still shown in the deck or pitch keeps its stamp |
| Sample-value label on every number | D-7; claim-audit C-1, C-3 | Hardcoded values in `core-screens/fixtures.js`, each labelled | Real values measured at the event |
| Limitation line | PRD §1.4, §12.4; D-6; claim-audit C-8 | Verbatim on SC-01, SC-07, SC-08, the Verifier Desk and the technical package | On screen and on its own deck slide (Day 4) |
| Canonical terms (checks, bands, statuses) | PRD §1.3, FR-5; HANDOFF terminology lock | One shared source; "Verified", "Flagged", "OK" not used | Same strings in the app and the certificate JSON (T-11) |
| Presentation-only code | Rule-compliance A1–A7; R1, R3 | React + Vite; no camera, location, sensor, FFT, crypto, network, storage or JS timer code | All detection, scoring and signing code written in the event window |
| Open-source dependencies | R2; `docs/attributions.md` | React, React DOM, Vite, Vite React plugin, with licences | Event-build libraries attributed the same way |
| Core checks, not AI | PRD §1.2 row 2, FR-5; R6 | Described as deterministic signal processing | Optional on-device VLM is stretch scope only and never feeds the score (PRD §10.2–10.3) |

## 4. Day 4 assets (added Day 4 · Phase 5)

| Asset | Source basis | Prototype treatment | Event treatment |
|---|---|---|---|
| Reviewer walkthrough (`prototype/person-2/reviewer-walkthrough/`) | Plan Day 4 P2 step 1; register T5; submission draft §3–§5, §8, §12; technical explainer; architecture diagram | Walks a reviewer through SC-01–SC-12 and the technical package; every result described as a labelled sample; table of prototype vs event | Points to the event map for when each part becomes real |
| Roadmap (`prototype/person-2/roadmap/roadmap.md`) | Plan Day 4 P2 step 2; register T6; PRD §10, §11 via validation plan V1–V10 | Nothing built; future tense; no new hours | Red Light 0–26, Green Light 26–48; stretch gated by PRD §10 conditions; hardware attestation v2 only |
| Event implementation map (`prototype/person-2/roadmap/event-implementation-map.md`) | Plan Day 4 P2 step 3; register T7 coverage list; `docs/event-boundary.md` | Every row "not implemented" in the prototype | 22/22 coverage items + 10 boundary items mapped to an event hour, or marked as having none |
| Deck (`submission/deck.pdf`, source `submission/deck-source/`) | Plan Day 4 P3 step 1; register T9; claim-audit C-8, C-9, C-10; R5 | Screenshots of the actual prototype with stamps; slides tagged prototype interaction / conceptual illustration / proposed for the event; limitation slide | Roadmap slide states what the event build will make real |
| Video package (`submission/video/README.md`, `docs/video-script.md`) | Plan Day 4 P3 step 2; register T10 | PENDING: not recorded; shot list uses the prototype's own controls; ends on the limitation | — |
| Written submission fields (`submission/written-submission-fields.md`) | Plan Day 4 P3 step 3; register T11; submission draft | Verbatim from the audited draft; [TEAM INPUT] / [PENDING] marked | — |
| Submission manifest (`docs/submission-manifest.md`) | Plan Day 4 P3 step 4; register T12 | Every artifact with path, status, owner, validation state and dependency; no URLs invented | Final check against the form on Day 5 |
| Claim audit (`docs/claim-audit-log.md`) | Plan Day 4 P3 step 5; register T13 | Day 4 · Phase 5 rows; zero open violations | Video audited once recorded |
| Validation (P2-B, `docs/blind-test-notes.md` §1) | Plan Day 4 P1 steps 1–2, 5; register T1, T3; owner decision 2026-10-03 | **COMPLETE — P2-B INTERNAL BLIND-REVIEW SIMULATION**: 9 tasks, 7 PASS · 2 CONFUSING · 0 BLOCKED. External human review not conducted | — |
| Earlier internal UX risk audit (`docs/blind-test-notes.md` §2) | Register T2 | HIGH / MEDIUM / LOW risk pass; one HIGH fixed (F1, `journey.css`); superseded by §1 | — |
| P2-C hardening (`docs/blind-test-notes.md` §4) | Register T2, T3 validation method | Regression at 1440 px and 390 px after F1 and F2: all branches, GPS timeout, Back, Restart, console, requests, URL, overflow, stamps, labels, rendered-text terminology scan, build, boundary scan | — |
| Final screenshots (`prototype/person-1/screenshots-final/`) | Plan Day 4 P1 step 4; register T4 | 15 frame-only PNGs, stamped, sample labels kept; independently re-captured | Re-capture if the prototype changes after the freeze |
