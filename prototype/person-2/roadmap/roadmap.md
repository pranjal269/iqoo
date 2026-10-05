# Event Roadmap — PRAMAAN

**Owner:** Person 2 lane · **Created:** 2026-10-03 (Day 4 · Phase 3) · **Plan:** Day 4 P2 step 2 (roadmap slide)
**Phase status:** PHASE 3 STATUS: COMPLETE. Prototype validation: P2-B INTERNAL BLIND-REVIEW SIMULATION (`docs/blind-test-notes.md`); external human review was not conducted.
**Status:** Proposed implementation for the event. Nothing below is built. Every item will be written during the 48-hour Finale (9–11 Oct 2026): the phone app on the loaner iQOO 15, the Verifier Desk on a laptop.
**Hours:** the PRD's own build-plan hours (PRD §11.1 Red Light, phone only; §11.2 Green Light, phone + laptop), exactly as already recorded in `prototype/person-2/validation-plan/validation-plan.md` §1 (rows V1–V10). No hour here is new. Stretch scope (PRD §10) has no hours in the repo and is gated by conditions instead.

---

## Slide: Red Light → built first → Green Light → stretch

### 1. Red Light hours (phone only, PRD §11.1)

| Hours | What will be built | Validation row |
|---|---|---|
| 0–2 | Demo-site registry (hardcoded sites) and camera skeleton | V1 |
| 2–6 | Geofence / Location Binding | V2 |
| 6–14 | Motion Consistency (gyroscope logging, optical flow, hold-still calibration) | V3 |
| 14–18 | FFT-based Moiré / Recapture Detection (threshold set, tuned later) | V4 |
| 18–22 | Fusion → Reality Score + Certificate with app-level signing | V5 |
| 22–26 | Integration and per-check fault isolation (UNAVAILABLE without a crash) | V6 |

### 2. What gets built first

The order is the PRD's. The first thing that will exist is a phone app with a live camera preview and the hardcoded demo sites (hours 0–2). The first check will be **Geofence / Location Binding** (hours 2–6), returning PASS, FAIL or LOW_CONFIDENCE with its distance. Then **Motion Consistency**, then **FFT-based Moiré / Recapture Detection**. Only once all three checks exist will fusion, the **Reality Score** and the signed **Certificate** be built, followed by integration and fault isolation. Red Light ends with the whole capture pipeline on the phone.

### 3. Green Light hours (phone + laptop, PRD §11.2)

| Hours | What will be built or done | Validation row |
|---|---|---|
| 26–30 | Tune FFT-based Moiré / Recapture Detection against real vs screen-recapture clips filmed at the venue; list the screens used | V7 |
| 30–36 | Verifier Desk on the laptop: open a phone-generated Certificate, check the signature, show the evidence | V8 |
| 36–40 | Full rehearsal (PRD §11.3), including a screen-recapture case and a wrong-location case; each fallback (PRD §11.4) tried once | V9 |
| 40–48 | Buffer, final rehearsal; numbers for the pitch recorded at the event from the team's own test set | V10 |

### 4. Stretch scope (PRD §10, no hours assigned)

| Stretch item | Condition before it is attempted | Boundary |
|---|---|---|
| Optional on-device VLM scene description (PRD §10.2) | Only after the three-check core runs unattended twice | Separately labelled; never feeds fusion or the Reality Score (PRD §10.3) |
| Torch / light challenge (PRD §10.1) | Tested against actual venue lighting before any live use | Optional; not shown in the prototype |

**Not stretch, not built at the event:** hardware key attestation is named as v2 roadmap only (PRD §10.4). GPS-spoofing cross-check (Wi-Fi / cell tower) is a v2 mitigation (PRD §12.3).

---

**Rules on this slide:** future tense only; no hour, threshold, weight, accuracy or latency figure that the PRD build plan does not already give; measurements are taken during the event, not before. PRAMAAN proves capture authenticity, not scene truthfulness.

Detailed mapping of each proposed capability to its event hour: `event-implementation-map.md` (this folder).
