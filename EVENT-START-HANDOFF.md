# EVENT-START HANDOFF — PRAMAAN (Grand Finale, 9–11 Oct 2026)

**Owner:** Person 3 lane (Krishika, all lanes) · **Written:** 2026-10-04 (Day 5) · **For:** the team at event check-in
**Rule:** this file contains no implementation code (rule-compliance Day 5 check). It points to existing documents and adds no new numbers, thresholds or claims.

## 1. What exists before the event, and what does not

- **Exists:**
  - a presentation-only clickable web prototype (`prototype/person-1/`);
  - the proposed architecture and technical package (`prototype/person-2/`);
  - the evidence base;
  - the submission package (`submission/`, `docs/submission-manifest.md`).
- **Does not exist:** any camera, GPS, sensor, FFT, geofence, fusion, signing or verification code, and no Android code. Nothing from the web prototype is carried into the event build (submission disclosure, `docs/submission-draft.md` §10).
- **Validation before the event:** internal only. External human review was not conducted. Validation used an internal blind-review simulation, automated regression, viewport testing, visual inspection, and cross-asset claim auditing (`docs/blind-test-notes.md`).

## 2. At check-in

| Item | Action | Source |
|---|---|---|
| Loaner iQOO 15 | Build surface and demo surface for the phone app | `docs/architecture-concept.md` §8 |
| Office Kit | Issued and pre-paired at check-in; confirm its real mechanism then. No mechanism is assumed before that | `docs/event-boundary.md` T-13, B-13 |
| Laptop | Verifier Desk surface | PRD FR-7; `docs/architecture-concept.md` §8 |
| Own phone or tablet | The "attacker" screen for the recapture demo | `prototype/person-2/validation-plan/validation-plan.md` §2a |

## 3. Build order (PRD §11 hours; not re-planned here)

Follow `prototype/person-2/roadmap/roadmap.md`:
- **Red Light (phone only), hours 0–26:** demo-site registry and camera skeleton → Geofence / Location Binding → Motion Consistency → FFT-based Moiré / Recapture Detection → fusion, Reality Score and signed Certificate → integration and per-check fault isolation.
- **Green Light (phone + laptop), hours 26–48:** tune FFT-based Moiré / Recapture Detection at the venue → Verifier Desk → full rehearsal → buffer, with numbers recorded only at the event.

`prototype/person-2/roadmap/event-implementation-map.md` maps every "Proposed:" capability to its hour.

## 4. Decisions that are open until the event (do not decide before)

| Decision | When | Source |
|---|---|---|
| LOW_CONFIDENCE / UNAVAILABLE down-weighting rule in fusion | Red Light | `docs/event-boundary.md` T-3 |
| Geofence threshold as a configuration value, checked against the GPS accuracy actually observed on the device | Red Light (V2) | T-1 |
| FFT threshold, tuned on real vs screen-recapture clips filmed at the venue; list the screens used | Hours 26–30 (V7) | T-7 |
| Fusion weights and verdict-band cutoffs, confirmed or tuned on the team's own test clips | Rehearsal (V9) | T-2, T-4 |
| Phone-to-laptop hand-over transfer method (one Certificate file, no cloud service) | By the Verifier Desk build (V8) | HANDOFF D-8; event map C5 |
| Status strings in the certificate JSON: exactly PASS / FAIL / LOW_CONFIDENCE / UNAVAILABLE | When signing is built (V5) | T-11 |

## 5. How each part is checked at the event

Use `prototype/person-2/validation-plan/validation-plan.md`: rows V1–V10, plus the PRD §9 checks (offline run with Wi-Fi and mobile data off; signing on the device itself; a reason string for every check). **Fill-in rule:** record only what is observed at the event; a blank field means not done. Known risks and the limits stated openly are in its §2.

## 6. Scope guards

- Hardware key attestation is v2 roadmap only. It is not built or claimed at the event (PRD §10.4).
- Optional on-device VLM: only after the three-check core runs unattended twice, separately labelled, and never feeding fusion or the Reality Score (PRD §10.2–10.3).
- Torch / light challenge: optional, and tested against venue lighting before any live use (PRD §10.1).
- No gallery-upload path; capture is camera-only (PRD FR-9).
- The core checks are deterministic signal processing; "on-device AI" wording is reserved for the optional VLM (T-12).

## 7. Pitch rules (unchanged from the submission)

- Canonical terms only:
  - checks: Motion Consistency · Geofence / Location Binding · FFT-based Moiré / Recapture Detection;
  - statuses: PASS / FAIL / LOW_CONFIDENCE / UNAVAILABLE;
  - verdict bands: Likely Genuine / Needs Review / Likely Fraudulent;
  - Reality Score · Certificate · Verifier Desk.
- Lead with recapture and the Certificate, not geofence (`docs/anchor-positioning-brief.md` §5).
- Numbers (latency, false accept / false reject) only as measured at the event from the team's own test set. None exist before.
- Evidence: E2 (CAG Karnataka, Report No. 13 of 2025) as core; E1 (Kandhamal) as allegation and context only; E3 not used.
- State the limits openly: GPS spoofing, reuse of an earlier genuine capture, app-level signing on a rooted device, demo sites only.
- **PRAMAAN proves capture authenticity, not scene truthfulness.**

## 8. Before the Finale

- [ ] **Anchor re-read** on the day before the Finale (8 Oct 2026): re-read iQOO Community thread 169162 and update `docs/anchor-positioning-brief.md` §7 if the description changed.
- [ ] Office Kit section of the official playbook, if available (TI-7; `docs/architecture-concept.md` §8).

## 9. Submission items still open at the time of writing

See `docs/day-5-final-qa.md` §4 (final submission checklist):
- [PENDING] Prototype URL;
- [PENDING] Video Walkthrough URL;
- [TEAM INPUT] Prior builds & hackathons, Android proficiency, LLM proficiency;
- [PENDING] the platform's actual field list and limits.
