# UX Requirements — PRAMAAN prototype

**Owner:** Person 1 lane (Krishika, all lanes) · **Filed:** 2026-10-03 (Day 3 · Phase 1) · **Status:** canonical from Day 3
**Sources:** `prototype/person-1/day-1/primary-user-journey.md`, `state-screen-requirements.md` (Day 1 detail, unchanged), HANDOFF.md locked decisions, PRD. State flow: `docs/state-map.md`.

## 1. Global requirements

| ID | Requirement | Source |
|---|---|---|
| G1 | Every screen carries "Prototype interaction — simulated result" | Claim-audit C-3; HANDOFF stamps |
| G2 | Every number is a hardcoded sample labelled "sample value, prototype interaction"; no fusion weights, cutoffs or thresholds on screens | D-7; C-1, C-3 |
| G3 | Canonical terms only (HANDOFF terminology table). Verdict bands: Likely Genuine · Needs Review · Likely Fraudulent. Check statuses, for all three checks: PASS · FAIL · LOW_CONFIDENCE · UNAVAILABLE. "Verified", "Flagged" and "OK" are not used. The user-facing capture is a "3-second clip" | D-1, D-2 / T-11, D-3 |
| G4 | Limitation line, verbatim, on SC-01, every SC-07 variant, SC-08 and the Verifier Desk: "PRAMAAN proves capture authenticity, not scene truthfulness." | D-6; PRD §1.4 |
| G5 | Camera-only capture; no gallery or upload control anywhere | PRD FR-9 |
| G6 | No timers, countdowns, percentages, durations or progress presented as processing. The Checking screen may show a non-quantitative "in progress" motion that does not stand for measured time | D-10; Plan Day 3 P1 step 4 |
| G7 | Phone-first: every phone screen renders in a phone frame; the Verifier Desk is a laptop frame (D-5). Both fit a phone-width page without sideways page scroll | Rule-compliance D1; Day 2 carry-forward |
| G8 | Prototype controls (Continue for automatic steps, sample-result choice, Back, Restart) sit outside the phone frame and say they are not part of the product | HANDOFF Day 2 · Phase 3 |
| G9 | Presentation only: no camera, location, sensor, crypto, network, storage or timer code | HANDOFF P1 Q5 |

## 2. Screens

| Screen | Purpose | Required content | Primary action |
|---|---|---|---|
| SC-01 App Open | First screen; states the purpose | Purpose line in "designed to" form; limitation line; "Calibration comes next" | Automatic → SC-02 |
| SC-02 Hold-Still Calibration | Baseline before first use (PRD FR-3) | "Hold the phone still" | Automatic → SC-03 |
| SC-03 Capture Preparation | Claimed site and GPS acquisition (PRD FR-1, FR-2) | Claimed site (sample); "Acquiring GPS, accuracy" (sample); capture disabled with reason | Automatic → SC-04 V-NORMAL, or SC-04 V-TIMEOUT on GPS timeout |
| SC-04 Ready to Capture | Capture allowed | Viewfinder placeholder; GPS fix accuracy (sample); camera-only note. **V-TIMEOUT:** best-available fix, accuracy (sample) marked as limited and reported in the result reasons | Start 3-second clip → SC-05 |
| SC-05 Capturing | The 3-second clip with a deliberate pan (PRD FR-1) | "Slowly move the phone left-to-right"; no timer | Automatic → SC-06 |
| SC-06 Checking | Non-quantitative checking state | Three check names; non-quantitative motion; no per-check progress | Automatic → SC-07 (reviewer picks the sample result) |
| SC-07 Result (V-LG, V-NR, V-LF) | Verdict band, Reality Score, reasons | Band; Reality Score (sample); basis line; status + reason per check; limitation line | View certificate → SC-08 |
| SC-08 Certificate | Certificate detail, every PRD §7 field | Illustrative stamp; "App-level signing, not hardware-attested"; hash / signature / key read "none"; limitation line | Share certificate → SC-09 |
| SC-09 Hand-over | The certificate file leaves the phone for the verifier's laptop (D-8) | Sample file name; offline hand-over, method chosen at the event; nothing is sent in the prototype | Automatic → Verifier Desk stage 1 |
| SC-10–SC-12 Verifier Desk concept | Second-party check (PRD FR-7), not working software | Stage 1 drop area; stage 2 signature check, illustrative result; stage 3 verdict, Reality Score, per-check score / status / reason, FFT plot, gyro-vs-flow trace, geofence distance (stamped concepts); limitation line | Open sample certificate → Verify → See evidence |

## 3. Not modelled (recorded decisions)

Retake (D-9) · product Back / Exit (P2-Q4) · permission denied, camera or capture failure, calibration failure, no GPS fix at all, all three checks UNAVAILABLE, invalid signature, approve / reject (Day 1 EXC-03, VDK-18). A blind reviewer test is Plan Day 4 work.
