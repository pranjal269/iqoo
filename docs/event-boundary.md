# PRAMAAN — Event-Boundary Matrix & Technical Assumptions

Owner: Person 2 — Technical & Architecture Lead · Phase: Day 1 · Status: DRAFT v1
Companion to `docs/architecture-concept.md`. IDs in this file use the prefix **T-**
(Technical) to avoid clashing with Person 1's "P2-Q…" IDs, where "P2" means *Phase 2*
of Person 1's journey work, not Person 2.

---

## 1. Purpose

Two things, kept separate on purpose:
1. A **hard boundary matrix** — for every technical element of PRAMAAN, state plainly
   whether it exists today (prototype) or only at the event (event-built). No box in
   `architecture-concept.md` may be read as already working.
2. A **technical-assumptions list** — every numeric default or design choice this
   concept borrows from the PRD, flagged for validation during the event rather than
   asserted as fact now. This list goes to Person 3 for the claim-audit pass.

## 2. Event-Boundary Matrix

| # | Element | Prototype (now) | Event-built (9–11 Oct) | Source |
|---|---|---|---|---|
| B-1 | Motion Consistency check (gyro + optical flow + correlation) | Not implemented. Concept only, in `architecture-concept.md` §3, §7 | Real gyro logging (>=150 Hz), real Lucas-Kanade optical flow, real correlation score, calibration step | PRD FR-3; Plan §4 |
| B-2 | Geofence / Location Binding check (Haversine distance) | Not implemented. Hardcoded demo-site concept described only | Real GPS read, real Haversine distance, real PASS/FAIL/LOW_CONFIDENCE against a hardcoded demo-site registry | PRD FR-2, §6.2.1; Plan §4 |
| B-3 | FFT-based Moiré / Recapture Detection | Not implemented. No FFT is computed anywhere in this prototype | Real 2D FFT on captured frames, threshold tuned against real venue screens during Green Light | PRD FR-4; Plan §4, §11.2 |
| B-4 | Fusion (weighted-sum Reality Score) | Not implemented. Weights (0.35/0.40/0.25) and bands shown only as PRD-sourced numbers on illustrative screens, never computed live | Real fixed-rule computation, weights confirmed/tuned against the team's own test clips | PRD FR-5, §13.3; Plan §4 |
| B-5 | Signing (Keystore) | Not implemented. No key generated, nothing signed. Certificate is a static, labelled mockup | Real app-managed Keystore key pair; real manifest hash signed on-device | PRD FR-6; Plan §2, §4 |
| B-6 | Hardware key attestation | Not implemented; not attempted; not claimed live even at the event | **Named as v2 roadmap only** — explicitly out of scope even for the 48-hour build | PRD §10.4; Plan §4 |
| B-7 | Verifier Desk software | Not implemented. Represented as a linked prototype screen / static mockup (Person 1's SC-10–SC-12) | Real laptop app: opens a certificate file, verifies the signature, renders the FFT plot / gyro trace / geofence distance | PRD FR-7; Plan §4 |
| B-8 | Camera capture (CameraX / Camera2) | Not implemented. Clickable prototype shows a capture screen with no real camera pipeline behind it | Real CameraX/Camera2 integration on the loaner iQOO 15, 3-second clip capture | PRD FR-1; Plan §4 |
| B-9 | Sensor reads (SensorManager: gyro, GPS) | Not implemented | Real SensorManager gyro stream, real GPS fix acquisition with timeout handling | PRD FR-1, FR-2, FR-3; Plan §4 |
| B-10 | Fault isolation (try/catch per check, UNAVAILABLE fallback) | Not implemented; described as a design principle only (`architecture-concept.md` §9) | Real per-check try/catch at the orchestration layer, demonstrated with an induced failure | PRD FR-8; Plan §11.1 |
| B-11 | Optional on-device VLM scene description | Not implemented; not shown as a working feature; if depicted at all, shown as a separately labelled stretch feature that never affects the score | Optional stretch build, only after the 3-check core runs unattended twice; never feeds fusion | PRD §10.2, §10.3; Plan §10 |
| B-12 | Torch/light challenge | Not implemented; not shown | Optional stretch build, tested against actual venue lighting before any live use | PRD §10.1; Plan §10 |
| B-13 | Office Kit phone↔laptop workflow | Not implemented. Described only in the playbook's own words (`architecture-concept.md` §8) | Real, HackTracker-scored Office Kit usage during the event | Plan §12.1; PRD FR-7 |
| B-14 | Architecture diagram, certificate mockup, evidence visuals (FFT/gyro/geofence) | **This is what this prototype phase actually produces** — illustrative visuals, each stamped per Person 3's claim-audit checklist | Replaced/validated by real diagrams and real evidence plots generated from the actual event build | Plan §3, Day 2 (Person 2) |

**Rule applied to every row:** if the "Prototype (now)" column would otherwise be
empty, it says "Not implemented" explicitly — no row is left blank in a way that could
be misread as "already working."

## 3. Technical-Assumptions List (for Person 3's claim-audit)

Every numeric value or design choice below comes from the PRD. None of it has been
tested, tuned, or validated by this team yet — that happens during the event.

| ID | Assumption | PRD source | Validated how, and when |
|---|---|---|---|
| T-1 | Geofence threshold default: 20 m | PRD FR-2 | Event: config value, adjustable without rebuild, confirmed against GPS accuracy actually observed on the loaner device at the venue (PRD §13.3) |
| T-2 | Fusion weights: 0.35 Motion / 0.40 Geofence / 0.25 Moiré | PRD FR-5 | Event: tuned during rehearsal against the team's own test clips (PRD §13.3) |
| T-3 | LOW_CONFIDENCE / UNAVAILABLE down-weighting rule (exact formula not specified by PRD, only that it happens) | PRD FR-5, §6.8 | Event: exact weighting decided and implemented during Red Light; not invented in this prototype |
| T-4 | Verdict bands: >=75 Likely Genuine, 40–74 Needs Review, <40 Likely Fraudulent | PRD FR-5 | Event: same tuning pass as T-2 |
| T-5 | Gyro sample rate: >=150 Hz | PRD FR-1, FR-3 | Event: confirmed on the actual loaner iQOO 15 sensor hardware |
| T-6 | GPS acquisition timeout: 15 s | PRD FR-2 | Event: confirmed against real indoor/urban-canyon GPS behaviour at the venue |
| T-7 | FFT threshold for screen/moire detection (no default given — PRD explicitly says it must be tuned against real footage, not assumed) | PRD FR-4, §11.2 | Event: tuned against 15–20 real vs. screen-recapture clips filmed at the actual venue, hours 26–30 |
| T-8 | Latency target: capture end to Reality Score displayed, <=5 s | PRD §9 | Event: measured on the loaner device, not simulated here |
| T-9 | Reliability target: >=10 consecutive full-pipeline runs without crash | PRD §9 | Event: logged during Red Light integration pass |
| T-10 | Demo-mode site registry: 3–5 hardcoded coordinates (no real enrollment flow) | PRD §6.2.1 | Event: explicitly disclosed as a simplification in the pitch (PRD §14) — this prototype also discloses it, in `architecture-concept.md` §4 |
| T-11 | Status vocabulary: PASS/FAIL/LOW_CONFIDENCE/UNAVAILABLE used for all three checks (resolves Person 1's D-2 — the PRD's own §7 schema example uses "OK" once, inconsistently) | PRD FR-2, FR-3, FR-8, §7 (example only) | Event: confirmed as the literal string used in the real certificate JSON and on-screen |
| T-12 | "On-device AI" language is reserved for the optional stretch-scope VLM only; the three core checks and fusion are described as deterministic signal processing | PRD §1.2 row 2, FR-5, §10.2, §10.3 | Event: if the VLM stretch feature is built, confirm it still never feeds FR-5 (PRD §10.3) |
| T-13 | Office Kit's technical mechanism is not detailed by any source supplied to this prototype; only the playbook's own phrasing ("phone in the loop via Office Kit") is used | Plan §12.1; PRD FR-7 | Event: Office Kit is issued and pre-paired at check-in; real mechanism confirmed then |

## 4. What This File Explicitly Does Not Do

- Does not assign a probability, confidence interval or accuracy figure to any check.
- Does not claim any assumption above has been tested against real data — every "Validated how, and when" column entry points to the event, not to this week.
- Does not resolve T-3 (the down-weighting formula) — that is event work, not a prototype gap to be patched with an invented number.

## 5. Handoff

- **To Person 3:** please run this file's §3 through `docs/claim-audit-checklist.md`.
  Flag anything that reads as already-validated.
- **To Person 1:** the status-vocabulary decision (T-11) resolves your open item D-2 —
  Motion Consistency and FFT-based Moiré / Recapture Detection use the same four-word
  vocabulary as Geofence, on every screen and on the certificate.
- **Next (Day 3, Person 2):** this matrix becomes the basis for the "how we'll validate
  this during the event" template (referencing the PRD's hour-by-hour build plan without
  re-executing it now) and the honest "known risks, addressed live" slide.
