# Written Submission Fields — Release Candidate

**Owner:** Person 3 lane · **Created:** 2026-10-03 (Day 4 · Phase 4) · **Status:** RELEASE CANDIDATE. Paste-ready except fields marked **[TEAM INPUT]** or **[PENDING]**.
**Source:** text copied verbatim from `docs/submission-draft.md` (claim-audited Day 3), except the short "Prototype status" paragraph, which condenses draft §8. Nothing new is claimed. The "(PRD §…)" references can be dropped when pasting.
**Field list:** only the Plan's list is known (Idea Title, Description, Video Walkthrough URL, Prototype URL, Deck/Document, Android / LLM proficiency, Prior builds, Standout paragraph) plus the confirmation checkbox. The platform's actual field names and character limits are **not verified** (`docs/day-4-register.md` TI-6). Trim to the real limits once known; do not trim the limitation sentence.

---

## Idea Title

PRAMAAN — A Capture-Time Reality Certificate for Phone Cameras

## Description

PRAMAAN is designed to make a field capture independently verifiable as evidence at the moment it is captured: a phone app that checks a 3-second clip on the device and issues a certificate that a second party can check on a laptop Verifier Desk.

India's welfare schemes rely on geo-tagged photographs as proof of physical work: house-construction stages under PMAY, worksites and assets under MGNREGA. Today's defences, EXIF metadata and manual review, are weak against low-skill attacks: reused photos, photos taken at the wrong site, and GPS spoofing with free mock-location apps (PRD §2.1). In its 2025 audit of MGNREGS in Karnataka, the CAG found photos "captured from existing photograph", a photo of a different shed, and the same photos reused across work stages, all used to release payments (Report No. 13 of 2025). The photograph is the proof of work; today, nothing proves the photograph.

PRAMAAN is designed to check a capture at the moment it is taken, on the phone, before it reaches any upload or review pipeline (PRD §14.3). The surveyor will record a 3-second clip with the phone camera only; there is no gallery upload. PRAMAAN is designed to run three checks on it:

- **Motion Consistency:** does the phone's own movement, from the gyroscope, match the movement seen in the clip?
- **Geofence / Location Binding:** how far is the capture from the claimed registered site?
- **FFT-based Moiré / Recapture Detection:** does the clip's frequency pattern look like a real scene or a filmed screen?

In the proposed verification model, a fixed, explainable rule will combine the available checks into one **Reality Score** and a verdict band: **Likely Genuine**, **Needs Review** or **Likely Fraudulent**. No single check is meant to decide the verdict, and every check is designed to give a human-readable reason. The result will be sealed in a **Certificate** with app-level signing, not hardware-attested. A supervisor will open it on the laptop **Verifier Desk**, designed to check the signature and show the evidence behind the score. The whole capture pipeline is designed to run offline.

PRAMAAN proves capture authenticity, not scene truthfulness.

**How it works (proposed event build)**

1. **Capture:** 3-second clip, camera-only, with a live GPS accuracy indicator and a "slowly move the phone left-to-right" prompt.
2. **Signals:** video frames, a gyroscope log and one GPS fix with its accuracy.
3. **Three checks:** Motion Consistency, Geofence / Location Binding, FFT-based Moiré / Recapture Detection. Each will report PASS, FAIL, LOW_CONFIDENCE or UNAVAILABLE with a reason; uncertainty will not be treated as fraud, and a check that cannot run will be left out.
4. **Fusion:** one fixed, explainable rule will turn the available checks into a Reality Score and verdict band. Deterministic signal processing, no trained model.
5. **Certificate:** manifest (capture ID, time, device, location, distance, per-check scores and reasons, Reality Score, verdict) plus signature, public key and media, in one file.
6. **Verifier Desk (laptop):** will check the signature, then show the verdict, each check's reason and the evidence: FFT magnitude plot, gyro vs optical-flow trace, geofence distance.

**Prototype status.** The current prototype is a presentation-only clickable web prototype. It does not capture, sense, detect, score, sign or verify anything; every result is a labelled sample. The checks, fusion, Certificate signing and the Verifier Desk will be built during the event.

## Technical summary (Day 5; use if the form has a technical field, or within the Description limit)

Verbatim from the claim-audited `prototype/person-2/technical-explainer/technical-explainer.md` (about 240 words).

PRAMAAN is designed to check a field capture on the phone, at the moment it is taken. Today's clickable prototype shows this journey with labelled sample results only: it captures, checks and signs nothing. The pipeline below is proposed and will be built during the event.

1. **Capture.** The surveyor will record a 3-second clip with the camera only. There is no gallery upload.
2. **Signal collection.** While the clip is recorded, the phone will log its gyroscope and take one GPS fix with its accuracy.
3. **Three checks.** Motion Consistency will ask whether the phone's own movement matches the movement seen in the clip. Geofence / Location Binding will measure how far the capture is from the claimed registered site. FFT-based Moiré / Recapture Detection will look for the regular patterns that appear when a screen is filmed.
4. **Available check results.** Each check will report PASS, FAIL, LOW_CONFIDENCE or UNAVAILABLE, with a plain-language reason. Uncertainty is not treated as fraud.
5. **Fusion and Reality Score.** A fixed, explainable rule, not a trained model, will combine the available checks into one Reality Score.
6. **Verdict.** Likely Genuine, Needs Review or Likely Fraudulent.
7. **Certificate and signing.** The results and the clip will be sealed in one certificate file, with app-level signing, not hardware-attested. A supervisor will open it on the laptop Verifier Desk, designed to check the signature and show the evidence behind the score.

PRAMAAN proves capture authenticity, not scene truthfulness.

## What makes you stand out (standout paragraph)

Offline, on-device trust tools for location already exist; at the Bengaluru City Battle, Team Nexus's Anchor was one. PRAMAAN targets a different object: the capture itself. In MGNREGS the geo-tagged photograph is the proof that releases public money, and the CAG's 2025 Karnataka audit found photos "captured from existing photograph", a photo of a different shed, and the same photos reused across stages. A correct location alone does not show whether an image was captured live or recaptured from a screen. PRAMAAN is designed to fuse three checks, Motion Consistency, Geofence / Location Binding and FFT-based Moiré / Recapture Detection, into a certificate a second party can check independently. The checks, the certificate signing and the Verifier Desk will all be built live during the event, the phone app on the iQOO 15.

## Prior builds & hackathons

**[TEAM INPUT]** Real content is needed from each team member (HANDOFF Q3; register TI-1). Not drafted; must not be invented.

## Android proficiency

**[TEAM INPUT]** Not covered by any project document (register TI-2).

## LLM proficiency

**[TEAM INPUT]** Not covered by any project document (register TI-3).

## Prototype URL

**[PENDING]** Hosting not decided (register TI-5). No URL exists; none is invented.

What the link will point to: a public, read-only copy of this same presentation-only web prototype (the `prototype/person-1` build), opening on the **Clickable journey** with the "Prototype interaction — simulated result" stamp visible on the first screen (rule-compliance Day 5 check), plus the "All screens and components" and "Technical and evidence package" views. It will not point to any working detection, scoring, signing or verification software, because none exists before the event. Today the prototype runs locally only (`prototype/person-1`, `npm run dev`); where to host it is not decided.

## Video Walkthrough URL

**[PENDING]** No video has been recorded and no URL exists. Recording-ready package: `submission/video/README.md`.

## Deck / Document upload

`submission/deck.pdf` (release candidate, 9 slides). Source: `submission/deck-source/deck.html`.

## Confirmation checkbox (original work)

Answer truthfully, with this disclosure (submission draft §10):

**Built before the event (idea-screening prototype):** the product concept and PRD; the UX journey, state and screen specification; a presentation-only clickable web prototype; the proposed architecture and event-boundary matrix; conceptual evidence visuals; an illustrative certificate; problem and evidence research; this written package.

**Built during the event window (phone app on the loaner iQOO 15; Verifier Desk on a laptop):** the Android app (Kotlin / Jetpack Compose, PRD §8.2); real camera capture; real GPS reading and Geofence / Location Binding; real motion-signal collection; real FFT-based Moiré / Recapture Detection; real fusion and Reality Score; real certificate signing (Android Keystore); the real Verifier Desk; all testing and measurement.

**Disclosure:** the web prototype is code written before the event, but it is a presentation surface only, with no detection, scoring, camera, sensor, location, signing or verification logic. None of it is carried into the event build, which is a separate Android app written inside the event window. Open-source libraries (React, Vite) are listed with licences in `docs/attributions.md`.

---

PRAMAAN proves capture authenticity, not scene truthfulness.
