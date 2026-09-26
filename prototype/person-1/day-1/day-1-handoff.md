# PRAMAAN — Day 1 Handoff (Person 1 — Product & UX Lead)

Date: 26 Sep 2026 · Phase: Day 1 / P6 · Status: pending final audit
Location: `scratchpad/person-1-staging/` (temporary; `docs/` not yet created by Person 3)

## 1. Day-1 Objective

Plan Day 1, Person 1: turn the PRAMAAN concept into a precise, user-visible journey, without implementation work. Achieved outcome: "a single, unambiguous user journey the team can design against". Plan outputs: UX requirement sheet; state-to-screen map; screen → PRD traceability list.

## 2. Completed Artifacts

| Phase | File | Audit |
|---|---|---|
| P0 | — (boundary lock, recorded in session) | PASS |
| P1 | `primary-user-journey.md` (+ `p1-source-inventory.md`, working inventory) | PASS (re-audit) |
| P2 | `state-definition.md` | PASS |
| P3 | `state-screen-requirements.md` | PASS |
| P4 | `traceability-matrix.md` | PASS |
| P5 | `p5-terminology-lock.md` (+ edits to P1–P4, change log C1–C21) | PASS |
| P6 | `day-1-handoff.md` (this file) | pending |

## 3. Journey → State → Screen Chain

| Journey | State | Screen | Notes |
|---|---|---|---|
| J1 Open | S1 App Open | SC-01 | P3-Q1 (first-screen purpose) |
| J2 Calibrate | S2 Hold-Still Calibration | SC-02 | — |
| J3 Prepare | S3 Capture Preparation | SC-03 | D-4 (site) |
| J4 Ready | S4 Ready to Capture | SC-04 (V-NORMAL / V-TIMEOUT) | P2-Q1 |
| J5 Capture | S5 Capturing | SC-05 | P4-F2 |
| J6 Check | S6 Checking | SC-06 | D-10 |
| J7 Result | S7 Result (LG / NR / LF) | SC-07 (V-LG / V-NR / V-LF) | D-1, D-2, D-7 |
| J8 Certificate | S8 Certificate | SC-08 | D-7, D-8, P3-Q2 |
| J9 Hand-over | S9 Hand-over | SC-09 — **conditional** | D-8, P2-Q2 |
| J10 Open certificate | S10 | SC-10 — stage 1 of the single Verifier Desk concept screen | D-5, P2-Q5 |
| J11 Signature check | S11 | SC-11 — stage 2 | D-5, P2-Q3 |
| J12 Evidence review | S12 (end) | SC-12 — stage 3 | D-5, D-7 |
| — | — | SC-L Limitation — **conditional** | D-6 |

Nothing is lost or orphaned between phases. Inline conditions (E3 timeout, PASS, FAIL, LOW_CONFIDENCE, UNAVAILABLE) live inside SC-04 / SC-07 / SC-08 / SC-12.

## 4. Canonical Terminology (from P5)

PRAMAAN · Reality Score · Verifier Desk · Certificate · capture authenticity · scene truthfulness · Motion Consistency · Geofence / Location Binding · **FFT-based Moiré / Recapture Detection** · Likely Genuine · Needs Review · Likely Fraudulent · PASS · FAIL · LOW_CONFIDENCE · UNAVAILABLE · 3-second clip · "app-level signing, not hardware-attested" · Field Surveyor · ULB Supervisor / Junior Engineer.
The Plan's "verified" / "flagged" are **not** equivalent to any PRD band (D-1). "OK" is not a UX term (D-2). The user-facing capture word is open (D-3).

## 5. Prototype / Event Boundary

- **Day 1 produced:** Markdown specifications only. No code, no designs, no data, no tests, no benchmarks. The repo is unchanged (it holds only the Plan PDF and the PRD).
- **Deferred to the event (Plan §4):** real capture, sensors, geofence, FFT-moiré, motion analysis, fusion, Reality Score computation and tuning, signing / Keystore, the working Verifier Desk, and all testing and measurement.

## 6. Claim Limitations

- PRAMAAN proves **capture authenticity**, not **scene truthfulness** (PRD §1.4, §12.4). It must be stated on its own screen or slide and on screen where it can't be missed. Placement: D-6.
- App-level signing, not hardware-attested (PRD FR-6); no hardware-attestation claim.
- Every screen carries a prototype label; the certificate is "illustrative — not a real signed output"; evidence visuals are "conceptual illustration, not measured data".
- No accuracy, processing time or FP/FN rates anywhere.

## 7. Remaining Decisions

| ID | Topic | Affects | Can stay conditional? | Needed by |
|---|---|---|---|---|
| D-1 | "verified / flagged" vs three bands | SC-07; Person 2 labels | Yes — SC-07 already specifies three variants | During Day 2 (verified/flagged screens) |
| D-2 | PASS/FAIL vs "OK"; normal status for Motion / Moiré | SC-07, SC-08, SC-12 copy | Yes | Day 2 copy |
| D-3 | "photo" / "video" / "clip" wording | all copy | Yes | Day 2 copy |
| D-4 | Claimed-site mechanism | SC-03 | Yes | Day 2 (SC-03 design) |
| D-5 | Laptop Verifier Desk in a phone-first prototype | SC-10–SC-12 | Yes | Day 3 (Verifier Desk screen) |
| D-6 | Limitation: dedicated screen vs slide; placement | SC-07, SC-08, SC-12, SC-L | Yes | Day 2 (Plan Day 2 P1 s6 copy) |
| D-7 | How numbers are shown (score, distance, accuracy) | SC-03, SC-04, SC-07, SC-08, SC-12 | Yes (placeholders) | Day 2 — needs Person 3 claim-audit |
| D-8 | Certificate transfer to laptop | SC-08, SC-09 | Yes | Day 3 (linking) |
| D-9 | Retake / new capture | SC-07 | Yes | Day 3 (linking) |
| D-10 | Per-check progress in Checking | SC-06 | Yes | Day 2 (SC-06 design) |
| D-11 | Cross-team authority over state names | all | Yes | Day 1 cross-review with Person 2 |
| P2-Q1 | Timeout message on Ready to Capture | SC-04 | Yes | Day 2 |
| P2-Q2 | Hand-over visible or transition | SC-09 | Yes | With D-8 |
| P2-Q3 | Verifier Desk: how it moves from "verify" to "see evidence" | SC-11, SC-12 | Yes | Day 3 |
| P2-Q4 | Back / exit | all | Yes | Day 3 (linking) |
| P2-Q5 | Empty Verifier Desk stage | SC-10 | Yes | Day 3 |
| P3-Q1 | Is SC-01 the Plan §9 "first screen"? | SC-01 | Yes | Day 2 |
| P3-Q2 | Extra manifest fields on SC-08 | SC-08 | Yes | Day 3 (after Person 2 mockup) |
| P4-F2 | Show the 3-second duration? | SC-05 | Yes | Day 2 |
| P4-F1 | Single Verifier Desk concept screen | SC-10–SC-12 | **Source-resolved in P5 (R4)** | Team to confirm at the Day 1 checkpoint |

The "Needed by" column is Person 1's scheduling view, not a Plan-defined phase.

## 8. Day-2 Blockers

**None.** Every open item can stay conditional in the P3 requirements while Day 2 design begins.

## 9. Day-2 Open Decisions

Must be settled *during* Day 2 before the Day 2 screens count as final (not before starting): **D-1, D-2, D-3, D-4, D-6, D-7, D-10, P2-Q1, P3-Q1, P4-F2.** D-7 and the prototype-label wording also depend on Person 3's claim-audit checklist.

## 10. Cross-Team Dependencies

**Person 1 → Person 2 (Plan Day 1 handoff):** state map and terminology, so the pipeline diagram uses the same state names (D-11); P5 check names (R1).
**Person 2 → Person 1:** pipeline / state names for label consistency (Day 1); certificate manifest mockup (Day 2) for SC-08 / P3-Q2; three illustrative evidence visuals (Day 2) for SC-12; diagram terminology (Day 2).
**Person 1 → Person 3 (Plan Day 1 handoff):** state map and terminology for the pitch narrative.
**Person 3 → Person 1:** claim-audit checklist (Day 1, applied to Day 2 work), needed for D-7, prototype-label wording (G1), R1 "FFT-based" in a visible name, the "flagged" verb collision, and P1 §1 product voice; rule-compliance checklist; `docs/` folder structure, HANDOFF.md, CHANGELOG.md.
**Team (Day 1 checkpoint):** confirm P4-F1 / R4 (single Verifier Desk concept screen).

## 11. Filing / Storage Note

- All Person 1 files are in a **temporary session folder**. They must be copied into the repo once Person 3 creates `docs/`, or they may be lost.
- Filename mapping to the Plan needs agreement with Person 3 (not decided here):
  - Plan `docs/ux-requirements.md` ↔ staged `primary-user-journey.md` + `state-screen-requirements.md`
  - Plan `docs/state-map.md` (state-to-screen map) ↔ staged `state-definition.md` + `state-screen-requirements.md`
  - **Clash:** Plan names `docs/traceability-matrix.md` as **Person 3's** Day 3 file; Person 1's staged P4 file has the same name.
- Day 1 decisions and blockers belong in HANDOFF.md (Plan §5, §7) once Person 3 creates it; this file is the source for that entry.

## 12. Day-1 Exit Recommendation

**Person 1's Day 1 work is complete and ready for Day 2 screen design.** The Plan's Day 1 exit gate ("UX requirement sheet + state map complete **and shared**") is met on content; **sharing** is pending the team checkpoint and Person 3's `docs/` / HANDOFF.md setup.

Known cleanup, not blocking:
- P4 §5 boundary table still says "Verifier Desk concept screen(s)".
- P2-Q3 / P2-Q5 wording in P2 §8 predates their P5 re-scoping.
- EXC-03 overlaps D-9 / VDK-18 in P4.
