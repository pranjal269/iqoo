# Reviewer Walkthrough — PRAMAAN

**Owner:** Person 2 lane · **Created:** 2026-10-03 (Day 4 · Phase 3) · **Plan:** Day 4 P2 step 1 · **For:** a judge or evaluator reading the submission (a demo walkthrough, not a review session), read while clicking through the prototype (`cd prototype/person-1 && npm install && npm run dev`, view **Clickable journey**)
**Phase status:** PHASE 3 STATUS: COMPLETE. Prototype validation: P2-B INTERNAL BLIND-REVIEW SIMULATION (`docs/blind-test-notes.md`); external human review was not conducted.
**Status:** Proposed implementation for the event. The prototype is a presentation surface only. Every result in it is a hardcoded, labelled sample.
**Sources:** `docs/submission-draft.md` §3–§5, §8, §12; `prototype/person-2/technical-explainer/technical-explainer.md`; `prototype/person-2/architecture/ArchitectureDiagram.jsx`; `docs/event-boundary.md`; `docs/state-map.md`; `prototype/person-1/design-system/copy.js`.

---

## 1. Problem

Welfare schemes such as PMAY and MGNREGA rely on geo-tagged photographs as proof of physical work. In its 2025 audit of MGNREGS in Karnataka, the CAG found photos "captured from existing photograph", a photo of a different shed, and the same photos reused across work stages, all used to release payments (Report No. 13 of 2025). These are CAG test-check findings from sampled gram panchayats, not state-wide totals. The photograph is the proof of work; today, nothing proves the photograph.

Where to see it: **Technical and evidence package → Problem evidence**.

## 2. PRAMAAN concept

PRAMAAN is designed to check a capture on the phone at the moment it is taken, and to seal the result in a **Certificate** that a second party can check on a laptop **Verifier Desk**. Three checks are proposed: **Motion Consistency**, **Geofence / Location Binding** and **FFT-based Moiré / Recapture Detection**. They are deterministic signal processing, with no trained model. The capture pipeline is designed to run offline.

## 3. Capture flow (phone, SC-01 → SC-06)

| Screen | What the reviewer sees | What the event build is designed to do |
|---|---|---|
| SC-01 App Open | Start screen | Open the camera-only app |
| SC-02 Hold-Still Calibration | Calibration instruction | Run a hold-still calibration at start, for gyroscope drift |
| SC-03 Capture Preparation | Claimed registered site, GPS accuracy (labelled samples) | Read a GPS fix with a live accuracy indicator |
| SC-04 Ready to Capture (V-NORMAL, V-TIMEOUT) | "Start 3-second clip", pan instruction; a GPS-timeout variant | On GPS timeout, continue with the best-available fix and state the limited accuracy |
| SC-05 Capturing | Camera placeholder, "slowly move the phone left-to-right" | Record a 3-second clip with the camera only; no gallery upload |
| SC-06 Checking | The three check names; the reviewer picks a sample result | Run the three checks on the device |

No camera, location or sensor access exists in the prototype.

## 4. The three checks

**Motion Consistency.** Is the phone's own movement, from the gyroscope, the same as the movement seen in the clip? It is aimed at recapture, usually alongside FFT-based Moiré / Recapture Detection (PRD §5, §12.3). On a textureless scene it is designed to report LOW_CONFIDENCE rather than guess.

**Geofence / Location Binding.** How far was the capture from the claimed registered site? The result always carries the distance, never a bare yes/no. Coarse GPS is designed to give LOW_CONFIDENCE. The event build will use a few hardcoded demo sites, not a real site-registration system.

**FFT-based Moiré / Recapture Detection.** Does the clip's frequency pattern look like a real scene, or like the regular patterns that appear when a screen is filmed? Its threshold will be tuned at the venue against specific screens, and those screens will be listed.

Where to see them: **Technical and evidence package → What each check compares** (each visual stamped "Conceptual illustration, not measured data").

## 5. Available-check handling

Each check reports one of four statuses, with a plain-language reason:

- **PASS** — the check ran and found the capture consistent.
- **FAIL** — the check ran and found an inconsistency.
- **LOW_CONFIDENCE** — the check ran, but its input was too weak to decide (for example, coarse GPS). This is uncertainty, not a sign of fraud.
- **UNAVAILABLE** — the check could not run. It is not counted as a failure; it is left out and the remaining checks carry on.

Each check is designed to be isolated, so one failing check cannot crash the app. See the **Needs Review** sample: one check UNAVAILABLE, one LOW_CONFIDENCE, one PASS.

## 6. Fusion / Reality Score concept

One fixed, explainable rule, not a trained model, is designed to combine the available check results into a single **Reality Score**. No single check decides the result. The prototype shows the Reality Score only as a labelled sample; nothing is computed, and no weights or cutoffs appear on any screen. The rule's values will be confirmed or tuned during the event.

## 7. Verdict bands (SC-07)

The Reality Score maps to one of three bands. All three are reachable in the prototype (the reviewer picks which on SC-06):

| Verdict | Sample shown in the prototype |
|---|---|
| **Likely Genuine** | All three checks PASS |
| **Needs Review** | Motion Consistency UNAVAILABLE, Geofence / Location Binding LOW_CONFIDENCE, FFT-based Moiré / Recapture Detection PASS. Based on the two available checks |
| **Likely Fraudulent** | Motion Consistency FAIL and FFT-based Moiré / Recapture Detection FAIL (screen-pattern signs); Geofence / Location Binding PASS |

The Likely Fraudulent sample shows why location alone is not enough: a capture can be at the right site and still be a recapture of a screen.

## 8. Certificate (SC-08)

The result is designed to be sealed in one Certificate file: manifest (capture ID, time, device, location, distance, per-check status, score and reason, Reality Score, verdict) plus signature, public key and media. Signing is **app-level signing, not hardware-attested**. In the prototype the Certificate is stamped "Illustrative — not a real signed output"; hash, signature and key read "none". Full field list: **Technical and evidence package → Certificate manifest**.

## 9. Offline hand-over (SC-09)

The Certificate file is designed to move from the phone to the supervisor's laptop without a cloud service. The transfer method is chosen in the event build. Nothing is sent in the prototype.

## 10. Verifier Desk (SC-10 → SC-11 → SC-12, laptop frame)

One concept screen, three reviewer-triggered stages:

1. **Drop certificate** (SC-10) — where the supervisor will open the Certificate file. The prototype has no file input; "Open sample certificate" shows a sample.
2. **Verify** (SC-11) — where the signature will be checked. In the prototype the result shown is illustrative; no cryptographic check runs.
3. **See evidence** (SC-12) — verdict band, Reality Score, each check's status, score and reason, and the evidence views.

## 11. Evidence views (SC-12)

Three conceptual visuals, one per check, each stamped "Conceptual illustration, not measured data":

- **FFT magnitude plot** — FFT-based Moiré / Recapture Detection
- **Gyro vs optical-flow trace** — Motion Consistency
- **Geofence distance** — Geofence / Location Binding

They are hand-drawn static SVG. No data feeds them.

## 12. Limitation

**PRAMAAN proves capture authenticity, not scene truthfulness.**

It cannot tell whether a structure built at the correct site meets the scheme's criteria. Other limits stated openly: GPS spoofing with a mock-location app (v2: Wi-Fi / cell-tower cross-check); reuse of an earlier genuine capture of the same site (camera-only capture raises the bar but does not detect it); app-level signing can be bypassed on a rooted device (hardware attestation is roadmap only); and PRAMAAN cannot force a capture to happen.

## 13. Prototype vs proposed event implementation

| Part | In this prototype | Proposed for the event build (9–11 Oct 2026) |
|---|---|---|
| Capture, signals | Screens with a camera placeholder; no camera, GPS or sensor access | 3-second clip, gyroscope and GPS on the loaner iQOO 15 |
| Three checks | Named on screen; no check runs; no FFT computed | Motion Consistency, Geofence / Location Binding and FFT-based Moiré / Recapture Detection written during the event |
| Check statuses | Hardcoded samples | Each check reports PASS / FAIL / LOW_CONFIDENCE / UNAVAILABLE, isolated per check |
| Fusion, Reality Score, verdict | Hardcoded samples, chosen by the reviewer | Fixed-rule fusion, values tuned during the event |
| Certificate, signing | Illustrative Certificate; no key, hash or signature | App-level signing with Android Keystore |
| Hand-over | SC-09 screen; nothing is sent | Offline file transfer; method chosen in the event build |
| Verifier Desk | Concept screen; nothing opened or verified | Laptop app that verifies the signature and shows the evidence |
| Measurements | None. No accuracy, latency or test results exist | Recorded at the event from the team's own test set, not before |

When each part becomes real: `prototype/person-2/roadmap/event-implementation-map.md`.

**Stamps the reviewer will see:** "Prototype interaction — simulated result" (every screen) · "sample value, prototype interaction" (every number) · "Conceptual illustration, not measured data" (every technical visual) · "Proposed implementation for the event" (architecture) · "Illustrative — not a real signed output" (Certificate).
