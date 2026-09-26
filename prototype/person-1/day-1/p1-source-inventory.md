# P1 Source Inventory (working document — Person 1)

Status: temporary working inventory for P1. Not a deliverable.
Sources: `PRAMAAN_PRD.docx` (Draft v2, 26 Sep 2026) = product requirements; `PRAMAAN — 5-Day Prototype Implementation Plan (Rule-Compliant Rebuild).pdf` = prototype-phase boundaries.
Rule: source terminology preserved verbatim where quoted. Nothing here is invented; gaps are marked GAP.

---

## A. USER

| Item | Source text / fact | Source |
|---|---|---|
| Primary capture user | "Field Surveyor — Captures the geo-tagged photo on-site (PMAY: class 10+2, computer-literate)"; "Primary capture-side user of the phone app" | PRD §4, §2.3 |
| Surveyor goal | "Complete captures quickly; avoid rework" | PRD §4 |
| Surveyor context | "moderately tech-literate government employee under productivity pressure" | PRD §2.3 |
| Primary verifier | "ULB Supervisor / Junior Engineer — Moderates and approves submitted photos before fund release"; "Primary user of the Verifier Desk" | PRD §4, §2.3 |
| Verifier goal | "Catch fraud without slowing disbursement" | PRD §4 |
| Other audiences (not journey users) | Adversarial actor (demo), Hackathon judge | PRD §4 |
| Plan scenario | "a field surveyor captures a geo-tagged photo; PRAMAAN checks it live and issues a certificate" | Plan Day 1 P1 step 2 |
| Plan journey | "open app → capture a photo/video → see it checked → see a Reality Score and verdict → view/share a certificate" | Plan §3 |

## B. CAPTURE

| Requirement | Source |
|---|---|
| "The app captures a 3-second video clip (not a single still)" | PRD FR-1 |
| "Capture UI shows a live 'acquiring GPS, accuracy: Xm' indicator before allowing capture to start." | PRD FR-1 |
| "Capture UI prompts a slight deliberate pan ('slowly move the phone left-to-right')" — "framed as product UX" | PRD FR-1, §12.2 row 3 |
| "No gallery-upload path exists anywhere in the certified-capture flow" / "camera capture only" | PRD FR-1, FR-9, §5 |
| Capture is compared against "a pre-registered coordinate for the claimed site"; demo uses "3–5 'registered site' coordinates" | PRD FR-2, §6.2.1 |
| GAP: how the user indicates the claimed site is not specified | — |
| "Run a short 'hold still' gyro calibration at app startup … before first use" | PRD FR-3, §12.1 row 2 |
| One-line description says "photo or video"; FR-1 specifies a 3-second clip | PRD §1.1 vs FR-1 |

## C. VERIFICATION (what the user needs to understand about the checks)

| Requirement | Source |
|---|---|
| Three checks: "Check 1 — Motion Consistency", "Check 2 — Geofence / Location Binding (headline check)", "Check 3 — FFT-based Moiré / Recapture Detection" | PRD §1.3 |
| "a single Reality Score with human-readable reasons" | PRD §3.1 |
| "Every fusion output includes the 3 underlying scores and a human-readable reason string per check" | PRD FR-5 |
| Geofence outcome "with the measured distance shown … never a bare true/false" | PRD FR-2 |
| "Every Reality Score must be explainable from its 3 component reasons" | PRD §9 |
| No single check determines the verdict; fusion does | Plan §9, Day 2 P2 step 2; PRD FR-5 |
| Plan: "checking" should visibly take a moment "without implying a measured processing time" | Plan Day 3 P1 step 4 |

## D. VERDICT

| Requirement | Source |
|---|---|
| "Reality Score" (single, fused) | PRD §1.3, FR-5 |
| Bands: "Likely Genuine" (≥ 75) · "Needs Review" (40–74, "routes to human follow-up") · "Likely Fraudulent" (< 40) | PRD FR-5 |
| Weights/cutoffs are open questions to be tuned at the event | PRD FR-5 criteria, §13.3; Plan §4 |
| Per-check statuses: PASS / FAIL / LOW_CONFIDENCE (Geofence) | PRD FR-2 |
| LOW_CONFIDENCE (Motion, textureless scene) — "not a fabricated low score" | PRD FR-3 |
| UNAVAILABLE (any check that fails/exceptions) "with a reason string" | PRD FR-8 |
| LOW_CONFIDENCE / UNAVAILABLE "down-weighted automatically … rather than treated as a hard failure"; fusion "recomputes … over the remaining available checks" | PRD FR-5, FR-8 |
| Schema example uses `"status": "OK"` | PRD §7 |
| CONFLICT: Plan names result states "verified" / "flagged" (two); PRD defines three bands | Plan Day 1 P1 step 3 vs PRD FR-5 |
| CONFLICT: "PASS/FAIL" (FR-2) vs "OK" (§7 schema); FR-3/FR-4 name no normal-case status | PRD |

## E. CERTIFICATE

| Requirement | Source |
|---|---|
| Manifest contents: "image hash (SHA-256), the 3 scores + reasons, GPS coordinates + accuracy, timestamp, device model"; schema also has captureId, registeredSiteId, distanceToRegisteredMeters, media duration, fusion realityScore + verdict, signature | PRD FR-6, §7 |
| "bundle signature + public key + manifest + media into one certificate file" | PRD FR-6 |
| "The app must state on-screen … that this is app-level signing, not hardware-attested" | PRD FR-6 |
| Certificates exist for failing captures too ("one genuine, one failed-geofence, one failed-moiré") | PRD §11.4 |
| Plan: user can "view/share a certificate" | Plan §3 |
| Prototype: certificate is "a labeled, illustrative schema"; "illustrative — not a real signed output" | Plan §2, Day 2 P2 step 5 |
| No cloud backend / multi-user sync; pipeline "on-device and offline by design" | PRD §3.2, §9 |
| GAP: how the certificate file moves from phone to laptop is not specified | — |

## F. VERIFIER

| Requirement | Source |
|---|---|
| "A laptop application that accepts a certificate file and renders the evidence behind the score" | PRD FR-7 |
| "Accepts a dropped/opened certificate file and verifies the signature against the bundled public key" | PRD FR-7 |
| Displays "overall Reality Score and verdict band; the 3 individual check scores and reasons; the FFT magnitude plot; the gyro-vs-flow trace; the geofence distance" | PRD FR-7, §1.3 |
| "the reasons, not just the number, are what get shown at the Verifier Desk" | PRD FR-5 |
| Works with "3–4 pre-generated sample certificates … independent of the phone app" (event fallback) | PRD FR-7, §11.4 |
| Prototype: "drop certificate → verify → see evidence," not working software | Plan Day 3 P1 step 3 |
| GAP: approve/reject or any follow-up action at the Verifier Desk is not specified | — |
| GAP: presentation of a failed signature check is not specified (only that verification occurs; certificate is "tamper-evident") | PRD FR-6, FR-7 |

## G. PRD-DEFINED EXCEPTIONAL STATES

| Condition | Defined behaviour | Source |
|---|---|---|
| Hold-still calibration | "short 'hold still' gyro calibration at app startup" | FR-3 |
| GPS acquiring | live "acquiring GPS, accuracy: Xm" indicator before capture is allowed | FR-1 |
| GPS timeout | "times out at 15 seconds; on timeout, proceed with best-available fix and flag accuracy in the reasons output rather than blocking" | FR-2 |
| LOW_CONFIDENCE (Geofence) | GPS accuracy worse than threshold → LOW_CONFIDENCE, not hard PASS/FAIL | FR-2 |
| LOW_CONFIDENCE (Motion) | low feature count / textureless scene → LOW_CONFIDENCE | FR-3, §12.1 row 1 |
| UNAVAILABLE | failed/exceptioned check → UNAVAILABLE + reason; pipeline continues | FR-8 |
| Subtle motion | handled by the pan prompt | §12.2 row 3 |

Not defined by the PRD: camera/location permission denied, camera failure, capture interrupted/failed, calibration failure, no GPS fix at all at timeout, all three checks UNAVAILABLE, signature-check failure display, retake/new-capture after a result.
Explicitly excluded by the PRD (not decisions): account system, cloud backend, multi-user sync, network dependency (PRD §3.2, §9).

## H. PROHIBITIONS (prototype phase)

| Must not appear as implemented / measured | Source |
|---|---|
| Real geofence, motion-consistency, FFT-moiré, fusion logic, in any language, or tested on real data | Plan §2, §4 |
| Real thresholds / score weighting / verdict cutoffs from measured data | Plan §4 |
| Real key generation or signing; certificate must be labelled illustrative | Plan §2, §4 |
| Working Verifier Desk software | Plan §2, §4 |
| CameraX/Camera2, SensorManager, Keystore work | Plan §4 |
| Simulated screens not labelled as prototype interaction | Plan §2 |
| Visuals (FFT, gyro, geofence) not labelled as illustration | Plan §2, Day 2 P2 step 6 |
| Fabricated accuracy, processing time, FP/FN rates | Plan §9 |
| Any implication of hardware attestation | PRD FR-6, §10.4 |
| Any implication PRAMAAN proves scene truthfulness | PRD §1.4, §12.4; Plan §3, §9 |
