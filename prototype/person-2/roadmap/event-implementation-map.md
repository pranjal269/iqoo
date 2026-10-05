# Event Implementation Map — PRAMAAN

**Owner:** Person 2 lane · **Created:** 2026-10-03 (Day 4 · Phase 3) · **Plan:** Day 4 P2 step 3
**Phase status:** PHASE 3 STATUS: COMPLETE. Prototype validation: P2-B INTERNAL BLIND-REVIEW SIMULATION (`docs/blind-test-notes.md`); external human review was not conducted.
**Status:** Proposed implementation for the event. Every row below is **not implemented** in the current prototype. The prototype has no camera, GPS, sensor, FFT, geofence calculation, fusion calculation, signing, cryptographic verification, network or file-processing code.
**Hours:** PRD §11 build-plan hours as already recorded in `prototype/person-2/validation-plan/validation-plan.md` §1 (V1–V10). Red Light = V1–V6 (phone only), Green Light = V7–V10 (phone + laptop). No new hours.
**Coverage list:** `docs/day-4-register.md` T7 (counted 2026-10-03): 4 technology labels, 8 numbered architecture stages, 6 "Proposed for the event build" table rows, the signature algorithm, 3 problem-evidence "design element (proposed)" rows. Section F adds the remaining proposed capabilities from `docs/event-boundary.md` so none is left unmapped.
**Validation / evidence column:** the check and the evidence to collect come from the validation plan. None of that evidence exists yet.

Format: PROPOSED CAPABILITY → EVENT HOUR → WHAT BECOMES REAL → VALIDATION / EVIDENCE

---

## A. Architecture technology labels (`ArchitectureDiagram.jsx`, "Proposed: …")

| # | Proposed capability | Event hour | What becomes real | Validation / evidence |
|---|---|---|---|---|
| A1 | Proposed: CameraX (stage 1) | 0–2 (V1) | Camera skeleton on the loaner iQOO 15 | App launches with the camera preview visible |
| A2 | Proposed: SensorManager (stage 2) | 2–6 (V2) GPS; 6–14 (V3) gyroscope | GPS fix with accuracy and timeout handling; gyroscope logging across the 3-second window | A geofence result with its distance; a motion score for a live capture |
| A3 | Proposed: OpenCV / FFT (stage 3) | 6–14 (V3) optical flow; 14–18 (V4) FFT | Optical flow for Motion Consistency; FFT for FFT-based Moiré / Recapture Detection. Deterministic signal processing, no trained model | Motion score for a live capture; the FFT plot for a sample capture |
| A4 | Proposed: Android Keystore (stage 7) | 18–22 (V5) | App-managed key pair; manifest signed on the device | A Certificate file from a live capture that opens as valid JSON with a signature field; signing tested on the device itself (PRD §12.1 row 6) |

## B. The 8 numbered architecture stages

| # | Proposed capability | Event hour | What becomes real | Validation / evidence |
|---|---|---|---|---|
| B1 | 1 Capture: 3-second clip, camera-only | 0–2 (V1) skeleton; clip window used from 6–14 (V3) | Camera capture; no gallery-upload path | Camera preview (V1); code-review note on the gallery path (V6, 22–26) |
| B2 | 2 Signal collection: frames, gyroscope log, one GPS fix | 2–6 (V2), 6–14 (V3) | GPS read; gyroscope log | As A2 |
| B3 | 3 Three checks | 2–6 (V2) Geofence / Location Binding; 6–14 (V3) Motion Consistency; 14–18 (V4) FFT-based Moiré / Recapture Detection; 26–30 (V7) FFT tuning | Each check written and run on the phone | V2: PASS / FAIL / LOW_CONFIDENCE with distance, threshold as a configuration value. V3: LOW_CONFIDENCE on a textureless test scene; calibration at start. V4: FFT plot. V7: threshold as set, and the list of venue screens |
| B4 | 4 Available check results (PASS / FAIL / LOW_CONFIDENCE / UNAVAILABLE, with reason) | Per check in 2–18 (V2–V4); UNAVAILABLE path in 22–26 (V6) | Status and reason per check; an UNAVAILABLE check is left out and the rest carry on | Induced check-failure test; the run log |
| B5 | 5 Fusion → Reality Score | 18–22 (V5); values tuned during rehearsal, 36–40 (V9) | Fixed-rule fusion with its values in one configuration location; down-weighting rule for LOW_CONFIDENCE / UNAVAILABLE decided during Red Light (event-boundary T-3) | Certificate from a live capture (V5); weights used recorded in V5's field |
| B6 | 6 Verdict: Likely Genuine · Needs Review · Likely Fraudulent | 18–22 (V5); band tuning with fusion values, 36–40 (V9) | Verdict band derived from the Reality Score | Rehearsal log including a screen-recapture case and a wrong-location case (V9) |
| B7 | 7 Certificate + signing (app-level signing, not hardware-attested) | 18–22 (V5) | Manifest + media + signature + public key in one file | As A4; every Certificate carries a reason string for every check attempted (PRD §9) |
| B8 | 8 Verifier Desk (laptop) | 30–36 (V8) | Laptop app that opens a Certificate, checks the signature and shows verdict, Reality Score, per-check reasons and evidence | A phone-generated Certificate opened on the laptop with all evidence visible; pre-generated sample Certificates open for the fallback |

## C. The 6 "Proposed for the event build" table rows

| # | Proposed capability | Event hour | What becomes real | Validation / evidence |
|---|---|---|---|---|
| C1 | Real 3-second clip, gyroscope and GPS on the loaner iQOO 15 | 0–2, 2–6, 6–14 (V1–V3) | As B1, B2 | As A1, A2 |
| C2 | Motion Consistency, Geofence / Location Binding and FFT-based Moiré / Recapture Detection written during the event | 2–18 (V2–V4); 26–30 (V7) | As B3 | As B3 |
| C3 | Fixed-rule fusion, tuned during the event | 18–22 (V5); 36–40 (V9) | As B5, B6 | As B5, B6 |
| C4 | App-level signing with Android Keystore | 18–22 (V5) | As A4 | As A4 |
| C5 | Offline file transfer to the laptop; method chosen in the event build | 30–36 (V8) — *map inference:* the repo gives no separate hour for hand-over; V8's check ("a Certificate generated on the phone opens on the laptop") is the first point that needs it | Phone-to-laptop transfer of one Certificate file, no cloud service | Same as B8 |
| C6 | Laptop app that verifies the signature and shows the evidence | 30–36 (V8) | As B8 | As B8 |

## D. Signature algorithm

| # | Proposed capability | Event hour | What becomes real | Validation / evidence |
|---|---|---|---|---|
| D1 | ECDSA-SHA256 (certificate mockup; SC-08 "proposed for the event build, PRD §7") | 18–22 (V5) signing; 30–36 (V8) verification | Signature produced on the phone; checked on the Verifier Desk | Certificate with a signature field (V5); signature checked on the laptop (V8) |

## E. Problem-evidence "design element (proposed)" rows (`ProblemEvidence.jsx`)

| # | CAG pattern → proposed design element | Event hour | What becomes real | Validation / evidence |
|---|---|---|---|---|
| E1 | Photo of a photo (recapture) → FFT-based Moiré / Recapture Detection, reinforced by Motion Consistency | 14–18 (V4), 26–30 (V7); 6–14 (V3) | FFT-based Moiré / Recapture Detection tuned on venue screens; Motion Consistency | Screen-recapture case in rehearsal (V9, 36–40) |
| E2 | Photo of a different site → Geofence / Location Binding | 2–6 (V2) | Distance to the claimed registered site, against hardcoded demo sites | Wrong-location case in rehearsal (V9) |
| E3 | Same photos reused across stages → camera-only capture, no gallery upload (not a detection check) | 0–2 (V1); confirmed 22–26 (V6) | No gallery-upload path | Code-review note on the gallery path (V6). Reuse of an earlier genuine capture stays outside what a capture check can see |

## F. Other proposed capabilities (`docs/event-boundary.md`)

| # | Proposed capability | Event hour | What becomes real | Validation / evidence |
|---|---|---|---|---|
| F1 | Fault isolation per check (B-10) | 22–26 (V6) | Each check wrapped so a failure reports UNAVAILABLE without a crash | Induced-failure result; run log against the PRD §9 reliability target |
| F2 | Hold-still calibration (B-1) | 6–14 (V3) | Calibration at app start | Checked in V3 |
| F3 | GPS timeout, best-available fix (B-9, PRD FR-2) | 2–6 (V2) | Continue with the best-available fix and state limited accuracy | Checked in V2 |
| F4 | Offline core pipeline (PRD §9) | No hour assigned in the repo ("also to be checked at the event") | Pipeline runs with Wi-Fi and mobile data off | Check with Wi-Fi and mobile data off |
| F5 | Latency target and false accept / false reject (PRD §9) | 40–48 (V10) | Numbers measured on the loaner device | Recorded at the event only; no number exists before |
| F6 | Office Kit phone ↔ laptop workflow (B-13) | No hour assigned in the repo | Office Kit usage during the event; mechanism confirmed when the kit is issued at check-in (T-13) | Not specified by any repo source |
| F7 | Optional on-device VLM (B-11, stretch) | No hour; only after the three-check core runs unattended twice | Separately labelled scene description | Must never feed fusion (PRD §10.3) |
| F8 | Torch / light challenge (B-12, stretch) | No hour | Optional | Tested against actual venue lighting before any live use |
| F9 | Evidence plots from real captures replace the conceptual visuals (B-14) | 30–36 (V8) | FFT magnitude plot, gyro vs optical-flow trace and geofence distance rendered from the Certificate on the Verifier Desk | A phone-generated Certificate opened on the laptop with all evidence visible |
| F10 | Hardware key attestation (B-6) | Not at the event — v2 roadmap only (PRD §10.4) | Nothing | Not claimed, live or otherwise |

---

**Coverage check:** A 4/4 · B 8/8 · C 6/6 · D 1/1 · E 3/3 — all 22 items in the register's T7 coverage list are mapped. F adds 10 further proposed capabilities from the event-boundary matrix. F4, F6, F7 and F8 have no event hour in the repo and are marked so rather than given one; F10 is v2 only.

PRAMAAN proves capture authenticity, not scene truthfulness.
