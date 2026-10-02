# Technical Explainer — PRAMAAN

**Owner:** Person 2 lane (Krishika, all lanes) · **Created:** 2026-10-03 (Day 3 · Phase 4) · **Plan:** Day 3 P2 step 1 · **For:** a non-technical judge, read alongside the clickable prototype
**Status:** Proposed implementation for the event. Nothing below is built yet; all of it will be written during the event.
**Sources:** PRD §1.3, §6 (FR-1 to FR-9), §7, §8; `prototype/person-2/architecture/ArchitectureDiagram.jsx`.

## Explainer (paste-ready, about 240 words)

PRAMAAN is designed to check a field capture on the phone, at the moment it is taken. Today's clickable prototype shows this journey with labelled sample results only: it captures, checks and signs nothing. The pipeline below is proposed and will be built during the event.

1. **Capture.** The surveyor will record a 3-second clip with the camera only. There is no gallery upload.
2. **Signal collection.** While the clip is recorded, the phone will log its gyroscope and take one GPS fix with its accuracy.
3. **Three checks.** Motion Consistency will ask whether the phone's own movement matches the movement seen in the clip. Geofence / Location Binding will measure how far the capture is from the claimed registered site. FFT-based Moiré / Recapture Detection will look for the regular patterns that appear when a screen is filmed.
4. **Available check results.** Each check will report PASS, FAIL, LOW_CONFIDENCE or UNAVAILABLE, with a plain-language reason. Uncertainty is not treated as fraud.
5. **Fusion and Reality Score.** A fixed, explainable rule, not a trained model, will combine the available checks into one Reality Score.
6. **Verdict.** Likely Genuine, Needs Review or Likely Fraudulent.
7. **Certificate and signing.** The results and the clip will be sealed in one certificate file, with app-level signing, not hardware-attested. A supervisor will open it on the laptop Verifier Desk, designed to check the signature and show the evidence behind the score.

PRAMAAN proves capture authenticity, not scene truthfulness.

## Where each step appears in the prototype

| Step | Prototype screen | What the prototype shows |
|---|---|---|
| 1 Capture | SC-04, SC-05 | Camera placeholder, "Start 3-second clip", pan instruction; no camera access |
| 2 Signal collection | SC-03, SC-04 (V-NORMAL, V-TIMEOUT) | GPS accuracy as a labelled sample; no sensor or location access |
| 3 Three checks | SC-06; technical package explainers | The three check names; concept visuals stamped "Conceptual illustration, not measured data" |
| 4 Check results | SC-07, SC-08, SC-12 | Status and reason per check; hardcoded samples |
| 5 Fusion, Reality Score | SC-07 | Reality Score as a labelled sample; nothing computed; no weights shown |
| 6 Verdict | SC-07 (three variants) | Chosen by the reviewer; the prototype makes no decision |
| 7 Certificate, signing | SC-08, SC-09; certificate mockup | Illustrative certificate; hash, signature and key read "none" |
| Verifier Desk | SC-10 → SC-11 → SC-12 | Concept screen: drop certificate, verify (illustrative result), see evidence |

Cross-check (Plan Day 3 P2 step 2): the steps, check names, statuses and verdict bands above match the architecture diagram and the prototype screens, which take them from one shared source (`prototype/person-1/design-system/copy.js`).
