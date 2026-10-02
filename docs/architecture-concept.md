# PRAMAAN — Prototype-Safe Architecture Concept

Owner: Person 2 — Technical & Architecture Lead · Phase: Day 1 · Status: DRAFT v1
Derived from: `PRAMAAN_PRD.docx` §1.3, §6, §8; 5-Day Prototype Implementation Plan §2–§4, Day 1 (Person 2)

> **Boundary rule for this whole file:** every box, arrow and technology name below is a
> **proposed design for the event build**. Nothing here is implemented, tested, trained
> or measured. No code, model, key or dataset exists yet. This is a description of what
> will be built live during the 48-hour Finale (9–11 Oct 2026), not a record of what has
> been built.

---

## 1. Purpose

Translate the PRD's architecture (three checks → fusion → signed certificate →
Verifier Desk) into a concept the rest of the team can design and pitch against,
without pre-building any of it. This file is read by Person 1 (for terminology
consistency, per Krishika's terminology lock in `prototype/person-1/day-1/p5-terminology-lock.md`)
and Person 3 (for the claim-audit and technical-assumptions review).

## 2. Proposed Pipeline (concept only)

```
[Camera: 3-second clip]   [Gyroscope, >=150 Hz]   [GPS: single fix + accuracy]
        |                         |                         |
        v                         v                         v
  Frame buffer  ------->  Optical flow (Lucas-Kanade)   Registered site
        |                         |                       coordinate
        v                         v                         |
  FFT / moire analysis   Motion-consistency score            v
  (Check 3)                (Check 1)                 Geofence distance check
        |                         |                       (Check 2)
        +------------+------------+------------+------------+
                                   v
                  Rule-based fusion -> Reality Score + per-check reasons
                                   v
                  Local Keystore signature (app-managed, not attested)
                                   v
                       Signed certificate manifest
                                   v
                    +--------------------------------+
                    |   Verifier Desk (laptop)         |
                    |   verify signature -> show        |
                    |   evidence (FFT plot, gyro/flow    |
                    |   trace, geofence distance)        |
                    +--------------------------------+
```

**Every box above is labelled PROPOSED — EVENT-BUILT.** None of it exists as running
code today. This diagram is redrawn as a visual asset on Day 2 (`prototype/person-2/architecture/`),
carrying the same labels directly on the image.

## 3. The Three Checks (concept, not implementation)

| Check | Canonical name (locked, per Person 1's terminology lock) | What it is proposed to compare | FR ref |
|---|---|---|---|
| Check 1 | **Motion Consistency** | Gyroscope-implied motion vs. optical flow measured in the captured frames | FR-3 |
| Check 2 | **Geofence / Location Binding** | Capture-time GPS vs. a pre-registered site coordinate (headline check, built first at the event) | FR-2 |
| Check 3 | **FFT-based Moiré / Recapture Detection** | 2D-FFT frequency signature of the frame vs. a calibrated "real scene" baseline | FR-4 |

No single check decides the verdict. **Fusion is required** — this is stated explicitly
so no prototype screen or pitch line implies a single check can pass or fail a capture
on its own (PRD FR-5, FR-8).

## 4. Fusion (concept)

- A **fixed, explainable rule** — never a trained model (PRD FR-5). The PRD's default
  weights (0.35 Motion / 0.40 Geofence / 0.25 Moiré) and band cutoffs (>=75 / 40–74 / <40)
  are **PRD defaults, to be confirmed against real test captures during the event**
  (PRD §13.3 lists this as an open question already — this prototype does not resolve it).
- A check reporting **LOW_CONFIDENCE** or **UNAVAILABLE** is down-weighted or excluded
  automatically. The PRD specifies *that* this happens (FR-5, FR-8) but not the exact
  weighting rule when a check is LOW_CONFIDENCE — that rule is decided during the event
  build, not invented here (see `docs/event-boundary.md` §3, assumption T-3).
- Status vocabulary used consistently across phone, certificate and Verifier Desk:
  **PASS / FAIL / LOW_CONFIDENCE / UNAVAILABLE** (all four statuses, all three checks).
  This resolves Person 1's open item D-2: the PRD's certificate schema example shows
  `"status": "OK"`, which this concept treats as an inconsistency in that one example,
  not as a fourth status word.

## 5. Signing (concept)

- **App-managed key pair in Android Keystore** — a standard signing key, not hardware-attested.
- The certificate bundles: signature + public key + manifest (JSON) + media.
- The manifest schema is the PRD §7 schema, unchanged — the Verifier Desk depends on
  every field being present.
- **On-screen and pitch disclosure, locked (per Person 1):** "app-level signing, not
  hardware-attested" — never implies a stronger guarantee than what will be built.
- Hardware key attestation (Keystore/StrongBox) is **named as a v2 roadmap item only**
  (PRD §10.4) — never claimed as part of this build, live or otherwise.

## 6. Offline / On-Device Requirement

- The entire pipeline (capture → checks → fusion → signing) is designed to run **fully
  offline**, with no network dependency, no cloud backend, no account system and no
  multi-user sync (PRD §3.2, §6.6, §9).
- Why this matters for the fraud use case: the persona (PMAY field surveyor / ULB
  supervisor, PRD §2.3) works in the field and indoors, where connectivity is
  unreliable; an offline pipeline keeps the capture pipeline independent of network
  connectivity. Tamper-evidence comes from signing (§5), not from being offline: the
  certificate still travels from the phone to the laptop.
- This is a **design requirement for the event build**, not something verified in this
  prototype — there is no running pipeline yet to test offline.

## 7. On-device "AI" — what this is and is not

Per the playbook's scoring language ("a local or open-source model at the core earns
brownie points, with the phone in the loop via Office Kit"), it matters to be precise
about where AI does and does not sit in PRAMAAN:

- **The three core checks are deterministic signal processing, not AI.** Gyro/optical-flow
  correlation, Haversine distance, and 2D-FFT peak detection are classical algorithms
  with no trained model and no training data (PRD §1.2 row 2 — this was a deliberate
  cut from an earlier CNN-based design, specifically because a hackathon-trained model
  would have been the least trustworthy, least defensible part of the system).
- **Fusion is a fixed weighted-sum rule, never a trained model** (PRD FR-5, explicit).
- **The only place an actual model appears is the optional, stretch-scope on-device VLM**
  (PRD §10.2 — a small vision-language model producing a scene description). It is a
  demo enhancement only, exposed as a separate button, and is **not allowed to feed the
  Reality Score** under any circumstance (PRD §10.3: "treat any temptation to fold them
  into FR-5 as scope creep and reject it").
- **Labelling rule for this prototype and the pitch:** describe the core pipeline as
  "on-device signal processing (no trained model)"; describe the optional VLM, if shown
  at all, as a separately labelled stretch feature that never touches the score. Do not
  describe the core pipeline as "on-device AI" or invoke an NPU claim for it — that
  would overstate what §1.2 row 2 and FR-5 deliberately avoided building.

## 8. iQOO Device and Office Kit — roles (playbook's own language only)

- The **iQOO device is the build surface and the demo surface**: per the playbook,
  "every entry must run and pitch on the phone." PRAMAAN's phone app is therefore the
  primary deliverable; the Verifier Desk (laptop) is a secondary surface reached via
  Office Kit.
- **Office Kit** is referenced by the PRD (FR-7: "satisfying the Office Kit scoring
  criterion") and the playbook ("with the phone in the loop via Office Kit") as the
  mechanism connecting the phone to the laptop for scoring purposes. Neither source
  supplied to this prototype defines Office Kit's technical mechanism in more detail;
  this prototype does not invent one. If the official playbook's Office Kit section is
  provided later, this file is updated to quote it directly rather than paraphrase.
- Both the device and Office Kit are **issued at event check-in** (per the 5-Day Plan
  §12.1) — nothing involving them can be built or tested before the event, only planned.

## 9. Design Principle Carried From the PRD

"Every check must be able to run, fail, and report a reason independently" (PRD §8.3).
No component may be a single point of failure for the whole demo. This concept
preserves that principle by keeping the three checks, fusion, signing and the Verifier
Desk as separately labelled stages with their own status vocabulary, so the prototype's
diagram and the event build's fault-isolation requirement (FR-8) describe the same shape.

## 10. What This File Does Not Do

- Does not contain any working code, pseudo-code that runs, model file, or captured
  sensor/GPS/camera data.
- Does not assert a benchmark, accuracy figure, processing time, or false-positive/
  false-negative rate for anything in this concept.
- Does not describe Team Nexus/Anchor's implementation (that is Person 3's lane).

## 11. Handoff

- **To Person 1:** pipeline/state terminology used here matches Krishika's terminology
  lock (`p5-terminology-lock.md`) — Motion Consistency, Geofence / Location Binding,
  FFT-based Moiré / Recapture Detection, Reality Score, Verifier Desk, Certificate,
  PASS/FAIL/LOW_CONFIDENCE/UNAVAILABLE.
- **To Person 3:** the technical-assumptions list needing claim-audit review is in
  `docs/event-boundary.md` §3.
- **Next (Day 2, Person 2):** redraw §2's pipeline as a visual architecture diagram,
  build the certificate manifest mockup, and produce the three illustrative evidence
  visuals (FFT-plot-style, gyro-trace-style, geofence-distance-style) — all stamped
  "Conceptual illustration, not measured data" directly on the image, per Person 3's
  claim-audit checklist.
