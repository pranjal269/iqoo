# PRAMAAN UX Traceability Matrix

Owner: Person 1 — Product & UX Lead · Phase: Day 1 / P4 · Status: DRAFT v1 — pending audit
Staged outside the repo (`docs/` not yet created by Person 3).
Traces: P1 `primary-user-journey.md` (J/E) → P2 `state-definition.md` (S) → P3 `state-screen-requirements.md` (SC / G / A) → PRD `PRAMAAN_PRD.docx` → Plan (5-Day Prototype Implementation Plan).
This document records discrepancies; it does **not** modify P1–P3.

**Status key**
- **DIRECT** — stated in the PRD or Plan.
- **INTERPRETATION** — a reasonable UX reading of a source line, not stated verbatim.
- **TEAM DECISION** — open D-n decision or an unnumbered "out of source scope" item.
- **PROTOTYPE SCOPE** — required by the Plan for the pre-event prototype only (labels, illustration, boundary).
- **OPEN QUESTION** — open P2-Qn / P3-Qn / P4 finding.
- **UNSUPPORTED — REVIEW REQUIRED** — no valid source.

---

## 1. Requirement Inventory and Traceability Chain

### JOURNEY
| ID | Requirement | P1 | P2 | P3 | PRD | Plan | Status |
|---|---|---|---|---|---|---|---|
| JRN-01 | One journey: surveyor opens app → verifier reviews evidence | §3 | S1–S12 | SC-01–SC-12 | §1.1 | §3 | DIRECT |
| JRN-02 | Personas: Field Surveyor (phone); ULB Supervisor / JE (Verifier Desk) | §2 | S1–S9; S10–S12 | all | §2.3, §4 | Day 1 P1 s2 | DIRECT |
| JRN-03 | No onboarding / login / account / dashboard | §3 | S1 | SC-01 | §3.2 | — | DIRECT |
| JRN-04 | Certificate precedes independent verification | §3 | S8 → S10 | SC-08 → SC-10 | FR-6, FR-7 | §3 | DIRECT |
| JRN-05 | App Open communicates "starting, will calibrate" | J1 | S1 | SC-01 | FR-3 ("at app startup") | §3 | INTERPRETATION |
| JRN-06 | First screen conveys PRAMAAN's purpose | — | — | SC-01 | — | §9 | OPEN QUESTION (P3-Q1) |
| JRN-07 | Hand-over step between the two personas | J9 | S9 | SC-09 | FR-6, FR-7, §3.2 | §3 ("share") | TEAM DECISION (D-8, P2-Q2) |
| JRN-08 | Control on the result screen to proceed to the certificate | J7 | S7 | SC-07 | — | §3 (verdict → certificate sequence) | INTERPRETATION |

### CAPTURE
| ID | Requirement | P1 | P2 | P3 | PRD | Plan | Status |
|---|---|---|---|---|---|---|---|
| CAP-01 | Capture is a 3-second video clip | J5 | S5 | SC-05 | FR-1 | — | DIRECT |
| CAP-02 | Camera-only; no gallery / upload / import entry point | J4 | S4 | SC-04, G4 | FR-1, FR-9, §5 | — | DIRECT |
| CAP-03 | Instruction "slowly move the phone left-to-right" | J5 | S5 | SC-05, A3 | FR-1, §12.2 r3 | — | DIRECT |
| CAP-04 | Live camera view + user-started capture control | J4 | S4 | SC-04 | FR-1 (implied by "before allowing capture to start") | §3 ("capture") | INTERPRETATION |
| CAP-05 | Screen communicates "capture is camera-only" | J4 | S4 | SC-04 | FR-9 | — | INTERPRETATION |
| CAP-06 | No other camera controls (zoom, flash, switch) | — | S5 note | SC-04 | — (absence of source) | — | INTERPRETATION |
| CAP-07 | Whether the 3-second duration is shown to the user | J5 | S5 | SC-05 | — | — | OPEN QUESTION (P4-F2) |
| CAP-08 | User-facing word for the capture | D-3 | G10 | G10 | FR-1 vs §2 | Day 1 P1 s2 | TEAM DECISION (D-3) |

### GPS
| ID | Requirement | P1 | P2 | P3 | PRD | Plan | Status |
|---|---|---|---|---|---|---|---|
| GPS-01 | Live "acquiring GPS, accuracy: Xm" indicator before capture is allowed | J3, E2 | S3 | SC-03 | FR-1 | — | DIRECT |
| GPS-02 | Capture not allowed while acquiring | J3 | S3 | SC-03 | FR-1 | — | DIRECT |
| GPS-03 | Capture enabled when "a GPS fix with an accuracy value is available" | J3 | S3 | SC-03 | FR-1 | — | INTERPRETATION |
| GPS-04 | 15-second timeout → proceed with best-available fix, not blocking | E3 | S3 → S4 | SC-03, SC-04 V-TIMEOUT | FR-2, §12.1 r3 | — | DIRECT |
| GPS-05 | After timeout, accuracy flagged in the reasons | E3 | S7, S8, S12 | SC-07 | FR-2 | — | DIRECT |
| GPS-06 | Whether limited accuracy is also communicated on Ready to Capture | E3 | S4 | SC-04 | FR-2 | — | OPEN QUESTION (P2-Q1) |
| GPS-07 | Current GPS accuracy shown on Ready to Capture | J4 | S4 | SC-04 | FR-1 | — | INTERPRETATION |
| GPS-08 | Capture tied to a claimed registered site | J3 | S3 | SC-03 | FR-2, §6.2.1 | — | DIRECT (requirement) / TEAM DECISION (D-4, mechanism) |

### EXCEPTION
| ID | Requirement | P1 | P2 | P3 | PRD | Plan | Status |
|---|---|---|---|---|---|---|---|
| EXC-01 | Hold-still calibration at app startup | J2, E1 | S2 | SC-02 | FR-3, §12.1 r2 | — | DIRECT |
| EXC-02 | On-screen "hold the phone still" instruction | J2 | S2 | SC-02, A3 | FR-3 ("'hold still' gyro calibration") | — | INTERPRETATION |
| EXC-03 | Undefined conditions not modelled (permission denied, camera/capture failure, calibration failure, no fix at timeout, all checks UNAVAILABLE, invalid signature, retake, approve/reject) | §6 | §6 | §2 | — | — | TEAM DECISION (unnumbered, P1 §6) |
| EXC-04 | No network-failure / cloud / account states — offline by design | §6 | §6 | SC-09 | §3.2, §9 | — | DIRECT |

### CHECKING
| ID | Requirement | P1 | P2 | P3 | PRD | Plan | Status |
|---|---|---|---|---|---|---|---|
| CHK-01 | Checking state shows the capture is being checked; combined result being prepared | J6 | S6 | SC-06 | §1.3, FR-5 | §3 ("see it checked") | DIRECT |
| CHK-02 | Three check names shown during checking | J6 | S6 | SC-06 | §1.3 | §3 | INTERPRETATION |
| CHK-03 | No processing time, progress %, accuracy, or depiction of computation | J6 | S6 | SC-06, G2 | (NFR latency = event target) | §9, Day 3 P1 s4 | PROTOTYPE SCOPE |
| CHK-04 | Checking visibly takes a moment | — | S6 | SC-06 | — | Day 3 P1 s4 | PROTOTYPE SCOPE |
| CHK-05 | Per-check progress during checking | J6 | S6 | SC-06 | — | — | TEAM DECISION (D-10) |

### VERDICT
| ID | Requirement | P1 | P2 | P3 | PRD | Plan | Status |
|---|---|---|---|---|---|---|---|
| VRD-01 | Reality Score shown | J7 | S7 | SC-07 | §3.1, FR-5 | §3 | DIRECT (presentation: D-7) |
| VRD-02 | Exactly one of "Likely Genuine" / "Needs Review" / "Likely Fraudulent" | J7, §5 | S7-LG/NR/LF | SC-07 V-LG/NR/LF | FR-5 | — | DIRECT |
| VRD-03 | Needs Review "routes to human follow-up"; no procedure added | §5 | S7-NR | V-NR | FR-5 | — | DIRECT |
| VRD-04 | Meaning statements for Likely Genuine / Likely Fraudulent | §5 | S7-LG, S7-LF (tagged) | V-LG, V-LF | — | — | INTERPRETATION |
| VRD-05 | V-LF shows the reason for each of the three checks (corrected in P5 — was "reasons show which check outcomes contributed") | §5 | S7-LF | SC-07 V-LF | FR-5 | — | DIRECT |
| VRD-06 | Verdict combines the available checks; no single check decides it | J7 | S7 | SC-07 | FR-5, FR-8 | §9 | DIRECT |
| VRD-07 | Human-readable reason for every check | J7 | S7 | SC-07 | FR-5, §9 (auditability) | — | DIRECT |
| VRD-08 | Relationship of bands to the Plan's "verified / flagged" | §5 | §4 | SC-07 | FR-5 | Day 1 P1 s3, Day 2 P1 s3, §9 | TEAM DECISION (D-1) |
| VRD-09 | No band cutoffs / weights in the UX spec | — | S7 note | — | FR-5, §13.3 | §4 | PROTOTYPE SCOPE |
| VRD-10 | How numbers (score, distance, accuracy) are shown | — | §7 | G7 | FR-1, FR-2, FR-5, FR-7 | §9 | TEAM DECISION (D-7) |

### CHECK STATUS
| ID | Requirement | P1 | P2 | P3 | PRD | Plan | Status |
|---|---|---|---|---|---|---|---|
| CST-01 | Geofence PASS / FAIL with measured distance, "never a bare true/false" | J7 | S7, §5 | SC-07 | FR-2 | — | DIRECT |
| CST-02 | LOW_CONFIDENCE (Geofence: poor accuracy; Motion: textureless) not presented as fraud | E4 | §5 | SC-07, A6 | FR-2, FR-3, §12.1 r1 | — | DIRECT |
| CST-03 | UNAVAILABLE with reason; result based on the remaining checks | E5 | §5 | SC-07 | FR-8, FR-5 | — | DIRECT |
| CST-04 | LOW_CONFIDENCE / UNAVAILABLE count for less, not hard failures | E4, E5 | §5 | SC-07 | FR-5 | — | DIRECT |
| CST-05 | Statuses are inline information, not separate screens | §5 | §5 | §2 | — | — | INTERPRETATION |
| CST-06 | PASS/FAIL vs "OK"; no normal-case status for Motion / Moiré | D-2 | §5 | SC-07 | FR-2, §7 | — | TEAM DECISION (D-2) |

### CERTIFICATE
| ID | Requirement | P1 | P2 | P3 | PRD | Plan | Status |
|---|---|---|---|---|---|---|---|
| CRT-01 | Certificate available after the result, for every band | J8, §7 | S8 | SC-08 | FR-6, §11.4 (fallback set incl. failed certificates) | — | INTERPRETATION |
| CRT-02 | Shows verdict, Reality Score, check statuses + reasons, location + accuracy, registered site + distance, timestamp, device | §7 | S8 | SC-08 | FR-6, §7 | Day 3 P1 s2 | DIRECT (fields in §7; display per Plan) |
| CRT-03 | Other manifest fields (capture ID, media hash/duration, signature block) on the phone | §7 | — | SC-08 | §7 | Day 3 P1 s2 | OPEN QUESTION (P3-Q2; Person 2 mockup) |
| CRT-04 | On-screen "app-level signing, not hardware-attested" | J8 | S8 | SC-08 | FR-6 | — | DIRECT |
| CRT-05 | Label "illustrative — not a real signed output" | §7 | S8 | SC-08 | — | §2, Day 2 P2 s5 | PROTOTYPE SCOPE |
| CRT-06 | User can view and share the certificate | J8 | S8 | SC-08 | — | §3 | DIRECT (mechanism: D-8) |
| CRT-07 | Transfer to laptop, offline, no cloud | J9 | S9 | SC-09 | §3.2 | — | TEAM DECISION (D-8) |
| CRT-08 | Certificate screen built around Person 2's manifest mockup | — | — | SC-08 | — | Day 3 P1 s2 | PROTOTYPE SCOPE (cross-team input) |

### VERIFIER DESK
| ID | Requirement | P1 | P2 | P3 | PRD | Plan | Status |
|---|---|---|---|---|---|---|---|
| VDK-01 | Laptop Verifier Desk, used by ULB Supervisor / JE | J10–J12 | S10–S12 | SC-10–SC-12 | FR-7, §4, §8.2 | — | DIRECT |
| VDK-02 | Drop / open a certificate file | J10 | S10 | SC-10 | FR-7 | Day 3 P1 s3 | DIRECT |
| VDK-03 | "Accepted" status after opening | J10 | S10 | SC-10 V-ACCEPTED | FR-7 ("accepts") | — | INTERPRETATION |
| VDK-04 | Signature-check result shown | J11 | S11 | SC-11 | FR-6, FR-7 | Day 3 P1 s3 ("verify") | INTERPRETATION (FR-7 "verifies"; showing the result follows the Plan's "verify" step) |
| VDK-05 | Overall Reality Score and verdict band | J12 | S12 | SC-12 | FR-7 | — | DIRECT |
| VDK-06 | Three check scores and reasons | J12 | S12 | SC-12 | FR-7, FR-5 | — | DIRECT |
| VDK-07 | Check statuses on the Verifier Desk | J12 | S12 | SC-12 | §7, FR-8 (FR-7 names scores + reasons only) | — | INTERPRETATION |
| VDK-08 | FFT magnitude plot | J12 | S12 | SC-12 | FR-4, FR-7 | Day 2 P2 s6 | DIRECT |
| VDK-09 | Gyro-vs-flow trace | J12 | S12 | SC-12 | FR-7 | Day 2 P2 s6 | DIRECT |
| VDK-10 | Geofence distance | J12 | S12 | SC-12 | FR-7 | Day 2 P2 s6 | DIRECT |
| VDK-11 | Evidence visuals labelled "conceptual illustration, not measured data" | §8 | S12 | SC-12 | — | §2, Day 2 P2 s6 | PROTOTYPE SCOPE |
| VDK-12 | "The reasons, not just the number" | J12 | S12 | SC-12 | FR-5 | — | DIRECT |
| VDK-13 | Reasons readable alongside the score, not subordinate | — | — | SC-12 | FR-5 | — | INTERPRETATION |
| VDK-14 | Laptop surface inside a phone-first prototype | §8 | S10–S12 | SC-10–SC-12 | §8.2 | §2 (phone-first) | TEAM DECISION (D-5) |
| VDK-15 | One Verifier Desk concept screen; SC-10 / SC-11 / SC-12 are its three stages (P4-F1 resolved in P5) | J10–J12 | S10–S12 | SC-10–SC-12 | — | §3, Day 3 P1 s3, §11 | DIRECT |
| VDK-16 | Empty "no certificate yet" state | — | S10 | SC-10 | FR-7 | — | OPEN QUESTION (P2-Q5) |
| VDK-17 | Signature check → review: automatic or user-triggered | J11 | S11 | SC-11 | FR-7 | — | OPEN QUESTION (P2-Q3) |
| VDK-18 | Invalid signature; approve / reject / follow-up | §6 | §6 | SC-11, SC-12 | — | — | TEAM DECISION (unnumbered, P1 §6) |

### LIMITATION
| ID | Requirement | P1 | P2 | P3 | PRD | Plan | Status |
|---|---|---|---|---|---|---|---|
| LIM-01 | "PRAMAAN proves capture authenticity, not scene truthfulness" — meaning unchanged | §9 | §7 | §5 | §1.4, §12.4 | §3, §9 | DIRECT |
| LIM-02 | Stated on its own screen or slide, not buried | §9 | §7 | §5, SC-L | — | §3, §9 | DIRECT |
| LIM-03 | On-screen line where a reviewer can't miss it | §9 | §7 | §5, A5 | — | Day 2 P1 s6 | DIRECT |
| LIM-04 | Result, certificate and evidence screens must not read as confirming scene truth | §9 | §7 | G6 (SC-07, SC-08, SC-12) | §1.4, §12.4 | §9 | DIRECT |
| LIM-05 | Placement; whether SC-L exists | D-6 | §7 | §5, SC-L | — | §3, §9 | TEAM DECISION (D-6) |

### PROTOTYPE BOUNDARY / NAVIGATION
| ID | Requirement | P1 | P2 | P3 | PRD | Plan | Status |
|---|---|---|---|---|---|---|---|
| PRT-01 | Visible prototype-interaction label | header note | header note | G1 (all screens) | — | §2 ("every simulated screen") | PROTOTYPE SCOPE (applying it to *all* screens is INTERPRETATION) |
| PRT-02 | No processing time, accuracy, FP/FN rates | §9 | §7 | G2 | — | §9 | PROTOTYPE SCOPE |
| PRT-03 | No implied implementation of capture, checks, scoring, signing, verification | header | header | G3 | — | §2, §4 | PROTOTYPE SCOPE |
| PRT-04 | No implied hardware attestation | §9 | §7 | G5 | FR-6, §10.4 | — | DIRECT |
| PRT-05 | Terminology locked in P5 | D-11 | §4 | G8 | — | Day 1 handoff | TEAM DECISION (D-11) |
| NAV-01 | No back / exit / retry / retake specified | D-9 | §2 | G9 | — | — | TEAM DECISION (D-9) / OPEN QUESTION (P2-Q4) |

### ACCESSIBILITY / CLARITY
| ID | Requirement | P3 | Basis | Classification | Status |
|---|---|---|---|---|---|
| ACC-01 | Verdict conveyed by text label, not colour/icon alone | A1 | Plan §5 (Person 1 owns clarity of on-screen messaging) | Person 1 ownership → P3 UX decision | INTERPRETATION |
| ACC-02 | Check status conveyed in text | A2 | Plan §5; PRD §9 (explainability) | Person 1 ownership → P3 UX decision | INTERPRETATION |
| ACC-03 | Instructions are explicit text | A3 | PRD FR-1 prompt wording; FR-3 "hold still" | Wording DIRECT; "as text" is a P3 UX decision | INTERPRETATION |
| ACC-04 | "Capture not yet allowed" and signature result stated in text | A4 | Plan §5 | P3 UX decision | INTERPRETATION |
| ACC-05 | Limitation, signing statement and labels visible without extra interaction, not fine print | A5 | Plan §3, §9 ("not buried") for the limitation; Plan §5 for the rest | Limitation part DIRECT; remainder P3 UX decision | INTERPRETATION |
| ACC-06 | LOW_CONFIDENCE / UNAVAILABLE worded distinctly from FAIL | A6 | PRD FR-3 ("not a fabricated low score"), FR-8 | Interpretation of PRD intent | INTERPRETATION |

None of ACC-01–ACC-06 is a PRD requirement.

## 2. PRD FR-1 – FR-9 Coverage

| FR | User-visible requirement | P1 | P2 | P3 | Faithful? | Not a UX item (technical / event only) |
|---|---|---|---|---|---|---|
| FR-1 | 3-s clip; live GPS indicator before capture; pan prompt; no gallery path | J3–J5 | S3–S5 | SC-03–SC-05 | Yes | gyro log ≥150 Hz; GPS fix acquisition |
| FR-2 | PASS / FAIL with distance; LOW_CONFIDENCE on poor accuracy; 15-s timeout with accuracy flagged; claimed registered site | J3, J7, E3, E4 | S3, S7, §5 | SC-03, SC-04, SC-07 | Yes — site mechanism D-4 | Haversine, configurable 20 m threshold, hardcoded demo sites |
| FR-3 | Hold-still calibration; LOW_CONFIDENCE on textureless scene | J2, E1, E4 | S2, §5 | SC-02, SC-07 | Yes | optical flow, gyro-to-flow conversion, correlation computation |
| FR-4 | FFT magnitude plot viewable at the Verifier Desk | J12 | S12 | SC-12 | Yes (as Person 2 illustration) | FFT computation, threshold tuning at venue, tested-screen list (pitch — Person 3) |
| FR-5 | Single Reality Score; three bands; 3 scores + reason per check; reasons shown at Verifier Desk; uncertain checks down-weighted | J7, J12, §5 | S7, S12, §5 | SC-07, SC-12 | Yes — D-1, D-7 open | weights, cutoffs, tuning (event) |
| FR-6 | Certificate carrying manifest content; on-screen app-level signing statement | J8, §7 | S8 | SC-08 | Yes — extra fields P3-Q2 | key generation, hashing, signing, bundling |
| FR-7 | Verifier Desk on laptop: open certificate, signature check, band + score, 3 scores + reasons, FFT plot, gyro-vs-flow trace, geofence distance | J10–J12, §8 | S10–S12 | SC-10–SC-12 | Yes — D-5, P2-Q3, P2-Q5 open | actual signature verification; pre-generated sample certificates (event demo fallback) |
| FR-8 | UNAVAILABLE status with reason; result from the remaining checks | E5 | §5 | SC-07, SC-08, SC-12 | Yes | per-check try/catch; induced-failure testing |
| FR-9 | Camera-only; no gallery upload in the certified-capture flow | J4 | S4 | SC-04, G4 | Yes | code-review verification (event QA) |

Also traced: PRD §1.4 / §12.4 (LIM-01–04), §2.3 / §4 (JRN-02), §3.2 (JRN-03, EXC-04, CRT-07), §9 auditability (VRD-07), §9 latency — deliberately **not** displayed (CHK-03), §11.4 (CRT-01).
**Missing FR coverage:** none found.

## 3. Plan Coverage (Person 1-relevant)

| Plan item | Covered by | Status |
|---|---|---|
| §2 simulated states labelled; visuals labelled as illustration | PRT-01, CRT-05, VDK-11 | Covered |
| §3 journey "open app → capture → see it checked → Reality Score and verdict → view/share certificate" | JRN-01, CHK-01, VRD-01/02, CRT-06 | Covered |
| §3 certificate concept + Verifier Desk screen | CRT-*, VDK-* | Covered — single concept screen (P5) |
| §3 / §9 limitation on its own screen or slide | LIM-02 | Covered — placement D-6 |
| §5 Person 1 owns accessibility / clarity of limitation messaging | ACC-01–06 | Covered |
| §9 purpose understandable within the first screen | JRN-06 | OPEN (P3-Q1) |
| §9 clickable capture → checking → verified/flagged → certificate → Verifier Desk | JRN-01, VRD-08 | Covered — naming D-1 |
| §9 phone-first | VDK-14 | Open for the laptop surface (D-5) |
| §9 explains why fusion, not any single check, decides the verdict | VRD-06 | Covered |
| §9 no fabricated accuracy, processing time, FP/FN | CHK-03, PRT-02 | Covered |
| Day 1 P1 s3 state list | P2 §4 mapping; VRD-08 | Covered — D-1 |
| Day 1 P1 s5 separate user-visible from implementation | §2 last column; §4 below | Covered |
| Day 1 P1 s6 screen → PRD traceability | this document | Covered |
| Day 2 P1 s6 on-screen limitation line | LIM-03 | Covered — D-6 |
| Day 3 P1 s2 certificate detail around Person 2 mockup | CRT-08, CRT-03 | Covered — P3-Q2 |
| Day 3 P1 s3 Verifier Desk concept screen | VDK-02, VDK-04, VDK-15 | Covered — single concept screen (P5) |
| Day 3 P1 s4 checking takes a moment, no measured time | CHK-03, CHK-04 | Covered |

## 4. Three-Check Naming

| PRD name (§1.3) | P1 | P2 | P3 | Plan wording | Status |
|---|---|---|---|---|---|
| Check 1 — Motion Consistency | "Motion Consistency" | same | same | "motion consistency" | Matches |
| Check 2 — Geofence / Location Binding | "Geofence / Location Binding" | same | same | "location binding", "geofence" | Matches |
| Check 3 — FFT-based Moiré / Recapture Detection | "Moiré / Recapture Detection" (J6) | same (S6) | same (SC-06) | "screen/recapture detection", "FFT-moiré" | Was shortened; **normalized to PRD §1.3 name in P5** |

All three are described as checks the capture "is going through", with no algorithm, computation or result claimed (CHK-01, CHK-03, G3).

## 5. Prototype vs Event-Time Boundary

| Pre-event prototype (Person 1 scope and team prototype) | Event-time (not built, not claimed) |
|---|---|
| UX journey (P1), state model (P2), screen requirements (P3), this matrix | Real capture (Camera2/CameraX), 3-s clip recording |
| Illustrative verdicts, Reality Score presentation (D-7) | Real sensor reads (SensorManager gyro, GPS) |
| Illustrative certificate ("illustrative — not a real signed output") | Real geofence distance / threshold logic |
| Verifier Desk concept screen(s) | Real FFT-moiré detection and venue tuning |
| Evidence visuals as conceptual illustrations (Person 2) | Real motion-consistency analysis |
| Architecture concept (Person 2) | Real fusion, weights, band cutoffs, Reality Score |
| Limitation messaging | Key generation, signing (Android Keystore) |
| | Actual Verifier Desk and signature verification |
| | Real testing, latency and FP/FN measurement |

**Check of P1–P3 against the event-time column:** no document claims any event-time item exists. Every P1–P3 file carries a prototype-phase note; S8/SC-08, S11/SC-11 and SC-12 state prototype vs event explicitly. P1 §1 is written in product voice ("PRAMAAN checks the capture…"), covered by its prototype-phase note — flagged for Person 3's claim-audit, not UNSUPPORTED.

## 6. Open Decision Trace

| ID | Affects | Why the sources don't settle it | Expected to settle |
|---|---|---|---|
| D-1 | J7 · S7, P2 §4 · SC-07 | Plan: two states (verified / flagged); PRD FR-5: three bands | Day 1 cross-review with Person 2 (Plan Day 1 16:00) / P5 |
| D-2 | J7 · S7, §5 · SC-07, SC-08, SC-12 | FR-2 PASS/FAIL vs §7 "OK"; FR-3 / FR-4 name no normal status | P5; Person 2 schema mockup (Day 2) |
| D-3 | J5 · S5 · G10 | FR-1 "3-second video clip" vs "geo-tagged photo" (Plan Day 1, PRD §2) | P5 |
| D-4 | J3 · S3 · SC-03 | FR-2 needs a claimed site; no UI defined | No phase defined — team decision |
| D-5 | J10–J12 · S10–S12 · SC-10–SC-12 | PRD: laptop; Plan: phone-first | No phase defined by source |
| D-6 | §9 · P2 §7 · P3 §5, SC-L | Plan allows "screen or slide" | Before Day 2 copy (Plan Day 2 P1 s6) |
| D-7 | J3, J7, J8, J12 · S3, S4, S7, S8, S12 · G7 | PRD requires values shown; Plan forbids implied measurement | Person 3 claim-audit (Plan §7, Day 2–3) |
| D-8 | J8, J9 · S8, S9 · SC-08, SC-09 | No transfer mechanism; no cloud allowed | No phase defined — team decision |
| D-9 | J7, J8 · S7 · SC-07, G9 | No retake / new-capture defined | No phase defined — team decision |
| D-10 | J6 · S6 · SC-06 | Not specified | No phase defined by source |
| D-11 | all | Plan's two-way hand-off of names | P5 / Day 1 cross-review |
| P2-Q1 | S4 · SC-04 V-TIMEOUT | FR-2 says "in the reasons"; not whether elsewhere | No phase defined by source |
| P2-Q2 | S9 · SC-09 | Depends on D-8 | With D-8 |
| P2-Q3 | S11 · SC-11, SC-12 | FR-7 silent | Day 3 linking (Plan Day 3 P1 s1) |
| P2-Q4 | all · G9 | No source defines back / exit | Day 3 linking (Plan Day 3 P1 s1, s5) |
| P2-Q5 | S10 · SC-10 | FR-7 implies but does not define | With D-5 |
| P3-Q1 | SC-01 | Plan §9 first-screen purpose vs S1 content | No phase defined by source |
| P3-Q2 | SC-08 | Depends on Person 2's manifest mockup | Day 2 (Person 2) → Day 3 P1 s2 |

**New P4 findings (not resolved):**
- **P4-F1:** Plan Day 3 P1 s3 describes a single "Verifier Desk concept screen"; P3 specified SC-10 / SC-11 / SC-12. **Resolved in P5** by Plan §3, Day 3 P1 s3, §11 — see `p5-terminology-lock.md`.
- **P4-F2:** whether the 3-second capture duration is shown on SC-05 is unspecified (recorded in P1/P2/P3 as "not specified", never numbered).

## 7. Unsupported Claim Audit

| Searched for | Result |
|---|---|
| Invented metrics / accuracy | None. Only PRD values appear (3 s, 15 s, "Xm" placeholder); band cutoffs excluded from the UX spec. |
| Invented timing | None. Checking has no time; latency target deliberately excluded. |
| Invented UI behaviour | VRD-05 found in P4; corrected in P5 (now "the reason for each of the three checks", FR-5). |
| Invented user actions | None unsupported. "Start capture" (CAP-04) and "proceed to certificate" (JRN-08) are INTERPRETATION. |
| Invented certificate fields | None — every listed field is in PRD §7. |
| Invented navigation | None — G9 specifies none. |
| Invented cryptographic behaviour | None — S11/SC-11 use PRD FR-7 wording only as source basis. |
| Claims the prototype detects fraud | None. P1 §1 product voice flagged for claim-audit (§5). |
| Claims scene truthfulness is verified | None — V-LG meaning explicitly limited to capture authenticity. |

**UNSUPPORTED — REVIEW REQUIRED:** none remaining after P5 (VRD-05 corrected).

## 8. Summary Counts

| Status | Count |
|---|---|
| DIRECT | 42 |
| INTERPRETATION | 22 |
| TEAM DECISION | 13 |
| PROTOTYPE SCOPE | 9 |
| OPEN QUESTION | 6 |
| UNSUPPORTED — REVIEW REQUIRED | 0 |
| **Total requirement rows** | **92** |

Counted per row (§1) by primary status, after P5 updates (VRD-05 → DIRECT, VDK-15 → DIRECT, VDK-04 → INTERPRETATION, CHK-03 → PROTOTYPE SCOPE); dual-status rows (GPS-08, PRT-01, NAV-01) are counted once under the first status listed.
