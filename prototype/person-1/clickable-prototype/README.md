# PRAMAAN Clickable Prototype (Phase 3)

Owner: Person 1 lane (Krishika, all lanes) · Plan path for the Day 3 clickable prototype · Built on `../design-system/` and `../core-screens/`

## Run

```
cd prototype/person-1
npm install
npm run dev
```

Opens on **Clickable journey**. **All screens and components** shows every screen side by side.

## Journey

SC-01 App Open → SC-02 Hold-Still Calibration → SC-03 Capture Preparation → SC-04 Ready to Capture → SC-05 Capturing → SC-06 Checking → SC-07 Result (Likely Genuine / Needs Review / Likely Fraudulent) → SC-08 Certificate → Verifier Desk concept (SC-10–SC-12).

| How the screen advances | Screens |
|---|---|
| In-screen product button | SC-04 "Start 3-second clip" · SC-07 "View certificate" · SC-08 "Share certificate" |
| Prototype control naming the simulated event (automatic in the product; no timers) | SC-01, SC-02, SC-03, SC-05 |
| Reviewer chooses the sample result (the prototype makes no decision) | SC-06 → SC-07 |
| End of journey | Verifier Desk |

The **Prototype controls** panel (outside the phone frame, not part of the product) also offers Back and Restart.

## Files

| File | Contents |
|---|---|
| `Journey.jsx` | Navigation state and a hardcoded list of "which screen comes next" |
| `SC08Certificate.jsx` | Certificate detail from the PRD §7 manifest fields, for the chosen result |
| `VerifierDesk.jsx` | Laptop-framed concept: 1 certificate opened · 2 signature check · 3 verdict and evidence |
| `journey.css` | Layout for the journey, controls and Verifier Desk |

## What is only conceptual

- **Certificate:** stamped "Illustrative — not a real signed output". No key, hash or signature exists; hash, signature and public key read "none".
- **Signature check:** "Signature valid" is labelled an illustrative result; nothing is verified.
- **Evidence visuals:** static drawings stamped "Conceptual illustration, not measured data"; no data behind them. Since Phase 4 they come from the single authoritative set in `prototype/person-2/evidence-visuals/`.
- **Hand-over:** how the certificate reaches the laptop is not decided (HANDOFF D-8); the prototype jumps straight to the Verifier Desk.
- **Results:** hardcoded samples in `../core-screens/fixtures.js`; every number carries "sample value, prototype interaction".

## Prototype boundary

Presentation only (HANDOFF P1 Q5). React state is used for navigation between hardcoded screens only. No camera, location, sensor, crypto, network or storage APIs; no timers; no detection, FFT, optical-flow, geofence, fusion, scoring, signing or verification logic.
