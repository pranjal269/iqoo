# PRAMAAN Clickable Prototype (Day 2 Phase 3, completed Day 3)

Owner: Person 1 lane (Krishika, all lanes) · Plan path for the Day 3 clickable prototype · Built on `../design-system/` and `../core-screens/`

## Run

```
cd prototype/person-1
npm install
npm run dev
```

Opens on **Clickable journey**. **All screens and components** shows every screen side by side.

## Journey

SC-01 App Open → SC-02 Hold-Still Calibration → SC-03 Capture Preparation → SC-04 Ready to Capture → SC-05 Capturing → SC-06 Checking → SC-07 Result (Likely Genuine / Needs Review / Likely Fraudulent) → SC-08 Certificate → SC-09 Hand-over → Verifier Desk concept: SC-10 Drop certificate → SC-11 Verify → SC-12 See evidence. At SC-03 the reviewer can also take the GPS-timeout path to SC-04 V-TIMEOUT.

| How the screen advances | Screens |
|---|---|
| In-screen product button | SC-04 "Start 3-second clip" · SC-07 "View certificate" · SC-08 "Share certificate" · Verifier Desk "Open sample certificate", "Verify signature", "See evidence" |
| Prototype control naming the simulated event (automatic in the product; no timers) | SC-01, SC-02, SC-03 (GPS fix, or GPS timeout), SC-05, SC-09 |
| Reviewer chooses the sample result (the prototype makes no decision); the choice appears after a brief CSS transition, not a measured time | SC-06 → SC-07 |
| End of journey | SC-12 |

The **Prototype controls** panel (outside the phone frame, not part of the product) also offers Back (one step back along the path taken) and Restart. The product journey itself is forward-only, with no retake (HANDOFF Day 3 · Phase 1: P2-Q4, D-9).

## Files

| File | Contents |
|---|---|
| `Journey.jsx` | Navigation state and a hardcoded list of "which screen comes next" |
| `SC08Certificate.jsx` | Certificate detail from the PRD §7 manifest fields, for the chosen result |
| `SC09HandOver.jsx` | Hand-over screen: the certificate file leaves the phone; nothing is sent |
| `VerifierDesk.jsx` | Laptop-framed concept with user-triggered stages: 1 drop certificate · 2 verify · 3 see evidence |
| `journey.css` | Layout for the journey, controls and Verifier Desk |

## What is only conceptual

- **Certificate:** stamped "Illustrative — not a real signed output". No key, hash or signature exists; hash, signature and public key read "none".
- **Signature check:** "Signature valid" is labelled an illustrative result; nothing is verified.
- **Evidence visuals:** static drawings stamped "Conceptual illustration, not measured data"; no data behind them. Since Phase 4 they come from the single authoritative set in `prototype/person-2/evidence-visuals/`.
- **Hand-over:** one certificate file moved phone → laptop without a cloud service; the transfer method is chosen in the event build (HANDOFF Day 3, D-8). SC-09 sends nothing.
- **Drop certificate:** there is no file input; "Open sample certificate" shows the sample.
- **Results:** hardcoded samples in `../core-screens/fixtures.js`; every number carries "sample value, prototype interaction".

## Prototype boundary

Presentation only (HANDOFF P1 Q5). React state is used for navigation between hardcoded screens only. No camera, location, sensor, crypto, network or storage APIs; no JS timers (SC-06 uses a CSS-only motion, not a measured time); no detection, FFT, optical-flow, geofence, fusion, scoring, signing or verification logic.
