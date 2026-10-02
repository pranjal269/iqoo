# State Map — PRAMAAN

**Owner:** Person 1 lane (Krishika, all lanes) · **Filed:** 2026-10-03 (Day 3 · Phase 1) · **Status:** canonical from Day 3
**Sources:** `prototype/person-1/day-1/state-definition.md` and `state-screen-requirements.md` (Day 1 detail, kept unchanged as the historical record), HANDOFF.md Day 2 and Day 3 decisions. Where this file and the Day 1 files differ, this file wins.

Plan Day 1 asked for `docs/state-map.md`; its content existed only in `day-1/`. This file brings it up to date with every decision taken since.

## 1. States → screens

| State | Name | Screen | Surface | User |
|---|---|---|---|---|
| S1 | App Open | SC-01 | Phone | Field Surveyor |
| S2 | Hold-Still Calibration | SC-02 | Phone | Field Surveyor |
| S3 | Capture Preparation | SC-03 | Phone | Field Surveyor |
| S4 | Ready to Capture | SC-04 V-NORMAL · SC-04 V-TIMEOUT | Phone | Field Surveyor |
| S5 | Capturing | SC-05 | Phone | Field Surveyor |
| S6 | Checking | SC-06 | Phone | Field Surveyor |
| S7 | Result | SC-07 V-LG · V-NR · V-LF | Phone | Field Surveyor |
| S8 | Certificate | SC-08 | Phone | Field Surveyor |
| S9 | Hand-over | SC-09 | Phone → laptop | Field Surveyor → ULB Supervisor / JE |
| S10 | Verifier Desk: Open Certificate | SC-10 (stage 1, "Drop certificate") | Laptop | ULB Supervisor / JE |
| S11 | Verifier Desk: Signature Check | SC-11 (stage 2, "Verify") | Laptop | ULB Supervisor / JE |
| S12 | Verifier Desk: Verdict & Evidence Review | SC-12 (stage 3, "See evidence") | Laptop | ULB Supervisor / JE |

SC-10 to SC-12 are three stages of **one** Verifier Desk concept screen (P4-F1), matching the Plan's "drop certificate → verify → see evidence" (Plan §3, Day 3 P1 step 3).

## 2. Transitions

```
S1 App Open ──(app started)──> S2 Hold-Still Calibration ──(calibration complete)──> S3 Capture Preparation
S3 ──(GPS fix available)──────────────> S4 Ready to Capture, V-NORMAL
S3 ──(GPS timeout, best-available fix)─> S4 Ready to Capture, V-TIMEOUT          [PRD FR-2; P2-Q1]
S4 ──(user: Start 3-second clip)──> S5 Capturing ──(clip ends)──> S6 Checking
S6 ──(checks + fusion complete)──> S7 Result: Likely Genuine | Needs Review | Likely Fraudulent
S7 ──(user: View certificate)──> S8 Certificate ──(user: Share certificate)──> S9 Hand-over   [D-8, P2-Q2]
S9 ──(certificate file reaches the laptop)──> S10 ──(user: Verify)──> S11 ──(user: See evidence)──> S12 (end)
```

- Automatic transitions (S1→S2, S2→S3, S3→S4, S5→S6, S6→S7, S9→S10) happen by themselves in the product. In the prototype they are advanced by a labelled prototype control, and at S6 the reviewer chooses which sample result to show.
- The phone journey is **forward-only**. No product Back, Exit or Retake exists (P2-Q4, D-9). The prototype's Back and Restart are reviewer controls, not product features.
- The verdict is never chosen by the prototype; in the event build it comes from fusion (PRD FR-5).

## 3. Day 3 decisions reflected here (HANDOFF Day 3 · Phase 1)

| ID | Decision |
|---|---|
| D-8 | The certificate is one file (PRD FR-6) moved from phone to laptop without a cloud service (PRD §3.2); the Verifier Desk opens a dropped / opened file (PRD FR-7). The transfer method is not specified by the PRD and is chosen in the event build |
| P2-Q2 | S9 is a visible phone screen (SC-09) |
| D-9 | No retake. The PRD defines none; not modelled |
| P2-Q4 | No in-product Back / Exit; journey forward-only. Back and Restart are prototype controls only |
| P2-Q1 | SC-04 V-TIMEOUT: continue with the best-available fix, limited accuracy stated on screen and in the result reasons (PRD FR-2) |
| P2-Q3 | S11 → S12 is user-triggered ("See evidence"); S10 → S11 is user-triggered ("Verify") |
| P2-Q5 | S10 has a distinct "no certificate opened yet" stage (the drop area). Supersedes the Day 2 Phase 3 "no empty state" choice |

## 4. Day 1 cleanup resolved here

The Day 1 files stay unchanged (Day 2 Phase 1 boundary: `day-1/` is not touched). Their open cleanup items are resolved by this file and `docs/ux-requirements.md`:
- `day-1/traceability-matrix.md` §5 "Verifier Desk concept screen(s)": one concept screen, three stages (§1 above).
- `day-1/state-definition.md` §8 P2-Q3 / P2-Q5 wording: answered in §3 above.
- `day-1/traceability-matrix.md` EXC-03 overlaps D-9 and VDK-18: retake is D-9 (not modelled); invalid signature and approve / reject remain VDK-18, not modelled in the prototype. The other EXC-03 conditions (permission denied, camera or capture failure, calibration failure, no fix at all, all checks UNAVAILABLE) stay not modelled.
