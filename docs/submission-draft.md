# Submission Draft — PRAMAAN (idea screening)

**Owner:** Person 3 lane (Krishika, all lanes from Day 2) · **Created:** 2026-10-01 (Day 2 · Phase 5) · **Status:** DRAFT. Paste-ready except items marked **[TEAM INPUT]**. Final form text is locked on Day 4.
**Sources:** PRD (`PRAMAAN_PRD.docx`), `docs/evidence-narrative.md`, `docs/anchor-positioning-brief.md`, `docs/architecture-concept.md`, `docs/event-boundary.md`, `prototype/person-2/TECHNICAL-PACKAGE.md`, HANDOFF.md (locked terminology and decisions).
**Rules:** every capability is described as designed / proposed (claim-audit C-2, C-10, C-11); no PRAMAAN numbers (C-1); evidence from E2 / E1 only (C-4, C-5, C-6); Anchor described from its public one-liner only (C-7).

---

## Form field map

| Form field (Plan §1, §12; Day 5 list) | Use section | Status |
|---|---|---|
| Idea Title | 1 | Ready |
| Description | 2 + 3 + 4 + 5 (trim to the form's limit) | Ready (form length limit not known) |
| What makes you stand out | 6 | Ready |
| Prior builds & hackathons | 10b | **[TEAM INPUT]** HANDOFF Q3 |
| Android / LLM proficiency | — | **[TEAM INPUT]** not covered by any project document |
| Prototype URL | 8 | **[OPEN]** the prototype runs locally; no public URL exists yet |
| Video Walkthrough URL | — | Day 3–4 work (not started) |
| Deck / Document upload | 1–13 feed the deck | Day 4 work (not started) |
| Confirmation checkbox (original work) | 10 | Answer truthfully, with the disclosure in 10 (rule-compliance, Day 5 checks) |

---

## 1. Idea Title

**PRAMAAN — A Capture-Time Reality Certificate for Phone Cameras**
(PRD title.)

## 2. One-line description

PRAMAAN is designed to make a field capture independently verifiable as evidence at the moment it is captured: a phone app that checks a 3-second clip on the device and issues a certificate that a second party can check on a laptop Verifier Desk.

## 3. Problem statement

India's welfare schemes rely on geo-tagged photographs as proof of physical work: house-construction stages under PMAY, worksites and assets under MGNREGA. Today's defences, EXIF metadata and manual review, are weak against low-skill attacks: reused photos, photos taken at the wrong site, and GPS spoofing with free mock-location apps (PRD §2.1). In its 2025 audit of MGNREGS in Karnataka, the CAG found photos "captured from existing photograph", a photo of a different shed, and the same photos reused across work stages, all used to release payments (Report No. 13 of 2025). The photograph is the proof of work; today, nothing proves the photograph.

## 4. Solution description

PRAMAAN is designed to check a capture at the moment it is taken, on the phone, before it reaches any upload or review pipeline (PRD §14.3). The surveyor records a 3-second clip with the phone camera only; there is no gallery upload. PRAMAAN is designed to run three checks on it:

- **Motion Consistency:** does the phone's own movement, from the gyroscope, match the movement seen in the clip?
- **Geofence / Location Binding:** how far is the capture from the claimed registered site?
- **FFT-based Moiré / Recapture Detection:** does the clip's frequency pattern look like a real scene or a filmed screen?

In the proposed verification model, a fixed, explainable rule combines the available checks into one **Reality Score** and a verdict band: **Likely Genuine**, **Needs Review** or **Likely Fraudulent**. No single check is meant to decide the verdict, and every check is designed to give a human-readable reason. The result will be sealed in a **Certificate** with app-level signing, not hardware-attested. A supervisor will open it on the laptop **Verifier Desk**, designed to check the signature and show the evidence behind the score. The whole capture pipeline is designed to run offline.

PRAMAAN proves capture authenticity, not scene truthfulness.

## 5. How it works (proposed event build)

1. **Capture:** 3-second clip, camera-only, with a live GPS accuracy indicator and a "slowly move the phone left-to-right" prompt.
2. **Signals:** video frames, a gyroscope log and one GPS fix with its accuracy.
3. **Three checks:** Motion Consistency, Geofence / Location Binding, FFT-based Moiré / Recapture Detection. Each reports PASS, FAIL, LOW_CONFIDENCE or UNAVAILABLE with a reason; uncertainty is not treated as fraud, and a check that cannot run is left out.
4. **Fusion:** one fixed, explainable rule turns the available checks into a Reality Score and verdict band. Deterministic signal processing, no trained model.
5. **Certificate:** manifest (capture ID, time, device, location, distance, per-check scores and reasons, Reality Score, verdict) plus signature, public key and media, in one file.
6. **Verifier Desk (laptop):** checks the signature, then shows the verdict, each check's reason and the evidence: FFT magnitude plot, gyro vs optical-flow trace, geofence distance.

## 6. What makes you stand out

Offline, on-device trust tools for location already exist; at the Bengaluru City Battle, Team Nexus's Anchor was one. PRAMAAN targets a different object: the capture itself. In MGNREGS the geo-tagged photograph is the proof that releases public money, and the CAG's 2025 Karnataka audit found photos "captured from existing photograph", a photo of a different shed, and the same photos reused across stages. A correct location alone does not show whether an image was captured live or recaptured from a screen. PRAMAAN is designed to fuse three checks, Motion Consistency, Geofence / Location Binding and FFT-based Moiré / Recapture Detection, into a certificate a second party can check independently. The checks, the certificate signing and the Verifier Desk will all be built live during the event, the phone app on the iQOO 15.

## 7. Evidence / problem justification

- **Core evidence (E2):** CAG Performance Audit of MGNREGS, Karnataka, Report No. 13 of 2025: photo recaptured from an existing photograph (p. 116); photo of another existing shed, with ₹18.45 lakh described by the CAG as "probable embezzlement of Government funds" (pp. 47–48); same photographs uploaded for different stages of work (pp. 45–46). These are CAG test-check findings from sampled gram panchayats, not state-wide totals.
- **Context (E1, allegation):** Odisha Vigilance arrested two MGNREGS engineers in Kandhamal over an alleged ₹42-lakh fraud (OmmCom News, OrissaPOST, reported 1 July 2026); according to OmmCom News, the mandatory geo-tagging of the sites was never done. These are arrests on allegation, not convictions. The case shows the photo gate is failing; PRAMAAN cannot force a capture to happen.
- **Design link:** recapture → FFT-based Moiré / Recapture Detection (reinforced by Motion Consistency); different site → Geofence / Location Binding; reused photos → camera-only capture, not a detection check. Detail: `docs/evidence-narrative.md`.

## 8. Prototype status: what the current prototype actually does

A clickable, phone-first **web prototype** (React + Vite, presentation only) that:

- walks through the surveyor journey: App Open → Hold-Still Calibration → Capture Preparation → Ready to Capture → Capturing → Checking → Result → Certificate → Verifier Desk concept;
- shows all three verdict bands, chosen by the reviewer from hardcoded sample results;
- shows an illustrative certificate with every PRD §7 field, and a Verifier Desk concept screen with conceptual evidence visuals;
- includes a technical package: the proposed architecture, what each check is designed to compare, the certificate manifest, and the problem evidence.

It **does not** capture, sense, detect, score, sign or verify anything. Every screen is stamped "Prototype interaction — simulated result", every number "sample value, prototype interaction", every technical visual "Conceptual illustration, not measured data", the architecture "Proposed implementation for the event", and the certificate "Illustrative — not a real signed output".

**Prototype URL:** [OPEN] the prototype currently runs locally (`prototype/person-1`, `npm run dev`); hosting a public link is still to be decided.

## 9. Event implementation roadmap (proposed, from PRD §11)

- **Red Light (phone only):** geofence check first (GPS, distance, PASS / FAIL / LOW_CONFIDENCE) → Motion Consistency (gyroscope logging, optical flow, calibration) → FFT-based Moiré / Recapture Detection → fusion and app-level signing → integration and per-check fault isolation.
- **Green Light (phone + laptop):** tune the moiré baseline against real clips filmed at the venue → build the Verifier Desk → rehearse the demo, including a screen-recapture case and a wrong-location case.
- Measurements are taken during the event, not before. The PRD's defaults for the geofence distance and the fusion weights are confirmed or tuned against real captures at the event (PRD FR-2, FR-5, §13.3).

## 10. Originality / prior-build explanation

**Built before the event (idea-screening prototype):** the product concept and PRD; the UX journey, state and screen specification; a presentation-only clickable web prototype; the proposed architecture and event-boundary matrix; conceptual evidence visuals; an illustrative certificate; problem and evidence research; this written package.

**Built during the event window (phone app on the loaner iQOO 15; Verifier Desk on a laptop):** the Android app (Kotlin / Jetpack Compose, PRD §8.2); real camera capture; real GPS reading and location binding; real motion-signal collection; real FFT / recapture detection; real fusion and Reality Score; real certificate signing (Android Keystore); the real Verifier Desk; all testing and measurement.

**Disclosure:** the web prototype is code written before the event, but it is a presentation surface only, with no detection, scoring, camera, sensor, location, signing or verification logic. None of it is carried into the event build, which is a separate Android app written inside the event window. Open-source libraries (React, Vite) are listed with licences in `docs/attributions.md`.

### 10b. Prior builds & hackathons

**[TEAM INPUT]** Real content is needed from each team member (HANDOFF Q3). Not drafted; must not be invented.

## 11. Competitive positioning

- **What is known (public source only):** Team Nexus's Anchor, 1st Runner-Up in the Students bucket at the Bengaluru City Battle, with a Wild Card entry to the Grand Finale. Its public description: it "verifies whether your phone's location can be trusted by cross-checking GNSS with physical sensors and on-device AI, even without internet connectivity" (iQOO Community recap, thread 169162).
- **Honest overlap:** Anchor, as publicly described, and PRAMAAN, as designed, are both offline, on-device and sensor-based, and both use GNSS. Location binding is where they overlap most.
- **PRAMAAN's proposed focus:** the captured media, not the device's position. Location is one of three fused checks; the output is a certificate a second party can check.
- **Framing:** layers, not rivals. Location trust is necessary but not sufficient for photo evidence.
- **Not known, and not claimed:** Anchor's model, sensors, accuracy or UI; whether it inspects media or issues certificates; how it will have changed by the Finale. Re-check the public description before 9 October.

## 12. Key limitations

- PRAMAAN proves capture authenticity, not scene truthfulness: it cannot tell whether a structure built at the correct site meets the scheme's criteria (PRD §1.4, §12.4).
- GPS spoofing with a mock-location app is a known gap; the proposed v2 mitigation is a Wi-Fi / cell-tower cross-check (PRD §12.3).
- Reusing an earlier genuine capture of the same site is outside what a single capture check can see; camera-only capture raises the bar but does not detect it (PRD §5).
- App-level signing, not hardware-attested: a rooted or modified device can bypass app-level protections; hardware attestation is roadmap only (PRD §8.4, §10.4).
- The moiré check will be tuned against specific screens at the venue; the screens used for tuning will be listed, with no claim of general validity (PRD FR-4).
- Indoors, GPS can be slow or imprecise, so the geofence check carries a risk of wrong results there; this is stated, not hidden (PRD §12.1 row 3, §14.4).
- Textureless scenes or poor GPS are designed to give LOW_CONFIDENCE rather than a firm answer (PRD FR-2, FR-3).
- The event build will use a few hardcoded demo sites, not a real site-registration system (PRD §6.2.1).
- PRAMAAN cannot force a capture to happen (E1).

## 13. Claim / rule compliance notes

- No accuracy, precision, recall, false-positive / false-negative rates, latency or processing time are stated for PRAMAAN; no "tested", "validated", "detected" or "deployed" language (claim-audit C-1, C-2, C-11).
- The core checks are described as deterministic signal processing, not AI (PRD §1.2 row 2, FR-5).
- Evidence: E2 as core, E1 as allegation only, E3 not used (C-4, C-5, C-6).
- Anchor is described only from its public one-liner (C-7).
- No wording presumes field workers guilty; uncertainty is designed to return LOW_CONFIDENCE, not a fraud verdict (C-13).
- Stamps as in section 8; architecture labels are "proposed" (C-9, C-10).
- Pre-event work is disclosed truthfully (section 10; playbook R1, R3).
- Full audit: `docs/claim-audit-log.md`.
