# PRAMAAN — Person 1 Day-1 Deliverables

## Role
Person 1 — Product & UX Lead (owner of `prototype/person-1/`, per Plan §6–§7).

## Day-1 Status
**COMPLETE** — all phases P0–P6 passed their audits. Content is final for Day 1; "shared" (Plan Day 1 exit gate) completes at the team checkpoint.

## What Was Completed

| Phase | Result |
|---|---|
| P0 | Project / boundary lock: Person 1 scope; prototype vs event-time boundary (see "Important Product Boundary" below and `day-1-handoff.md` §5) |
| P1 | Canonical user journey, J1–J12, plus PRD-defined exceptional flows E1–E5 |
| P2 | State model, S1–S12 (Result has three verdict variants) |
| P3 | Screen requirements, SC-01–SC-12 plus variants; global rules G1–G10; accessibility A1–A6 |
| P4 | PRD traceability, 92 requirement rows; FR-1–FR-9 coverage |
| P5 | Terminology and cross-document consistency lock; change log C1–C21 |
| P6 | Final Day-1 handoff and Day-2 readiness |

## Source of Truth

| Phase | File (this folder) |
|---|---|
| P0 | No separate file — recorded in this README and `day-1-handoff.md` |
| P1 | `primary-user-journey.md` (working input: `p1-source-inventory.md`) |
| P2 | `state-definition.md` |
| P3 | `state-screen-requirements.md` |
| P4 | `traceability-matrix.md` |
| P5 | `p5-terminology-lock.md` |
| P6 | `day-1-handoff.md` — **start here** |

Sources used: `PRAMAAN_PRD.docx` (product requirements) and the 5-Day Prototype Implementation Plan PDF (prototype scope, ownership). Both sit in the repo root of Person 1's local copy but are **not yet committed**; whoever owns them decides whether they go into the repo.

Note: file headers still say "staged outside the repo". That was true when they were written; the files are copied here unchanged to keep them identical to the audited versions.

## Important Product Boundary

This is **prototype-stage UX / product specification work**. **No real detection pipeline has been implemented.** Per the playbook rule "code written during the event window", all real implementation happens during the hackathon.

PRAMAAN proves **capture authenticity**, not **scene truthfulness**.

## What Has NOT Been Implemented

- real GPS / geofence detection
- motion detection
- FFT / moiré detection
- sensor fusion
- Reality Score implementation
- cryptographic signing
- Android Camera2 / CameraX
- SensorManager
- Android Keystore
- working Verifier Desk
- backend / database
- real performance testing

## Open Decisions (unresolved — do not treat as decided)

- **D-1** Plan "verified / flagged" vs PRD bands Likely Genuine / Needs Review / Likely Fraudulent
- **D-2** Check status wording: PASS/FAIL vs "OK"; normal status for Motion Consistency and FFT-based Moiré / Recapture Detection
- **D-3** User-facing word for the capture ("photo" / "video" / "clip"); behaviour is fixed: 3-second clip
- **D-4** How the claimed registered site is indicated
- **D-5** How the laptop Verifier Desk is shown in the phone-first prototype
- **D-6** Limitation: dedicated screen vs slide; placement
- **D-7** How numbers (score, distance, accuracy) are shown without reading as measured
- **D-8** Certificate transfer from phone to laptop
- **D-9** Retake / new capture
- **D-10** Per-check progress while checking
- **D-11** Cross-team authority over state names
- **P2-Q1** Timeout message on Ready to Capture · **P2-Q2** Hand-over visible or transition · **P2-Q3** Verifier Desk "verify" → "see evidence" movement · **P2-Q4** Back / exit · **P2-Q5** Empty Verifier Desk stage
- **P3-Q1** Is SC-01 the Plan's "first screen"? · **P3-Q2** Extra manifest fields on the certificate screen
- **P4-F2** Show the 3-second duration?
- **P4-F1** Single Verifier Desk concept screen — source-resolved in P5 (R4), **pending team confirmation**

**Day-2 blockers: none.** Every item above can stay conditional while Day-2 design starts (see `day-1-handoff.md` §7–§9).

## Day-2 Starting Point

Day 2 (Person 1) begins high-fidelity, phone-first prototype / screen design based on:
Journey (`primary-user-journey.md`) → States (`state-definition.md`) → Screen Requirements (`state-screen-requirements.md`) → Traceability (`traceability-matrix.md`) → Terminology Lock (`p5-terminology-lock.md`).

## Cross-Team Dependencies

**Person 2**
- Receives: state map and terminology (for pipeline diagram labels), including the P5 check names.
- Provides: pipeline / state names (Day 1); certificate manifest mockup (Day 2 → certificate screen, P3-Q2); three illustrative evidence visuals (Day 2 → Verifier Desk evidence); diagram terminology (Day 2).

**Person 3**
- Receives: state map and terminology for the pitch narrative.
- Provides: claim-audit checklist (needed for D-7, prototype-label wording, "FFT-based" in a visible name, the "flagged" wording collision); rule-compliance checklist; `docs/`, `HANDOFF.md`, `CHANGELOG.md`.
- Filing: the Plan's `docs/ux-requirements.md` and `docs/state-map.md` will be filed from this folder once Person 3 creates `docs/`. Name clash: the Plan assigns `docs/traceability-matrix.md` to **Person 3** (Day 3); Person 1's matrix stays here.

**Whole team:** confirm P4-F1 (single Verifier Desk concept screen) at the checkpoint.
