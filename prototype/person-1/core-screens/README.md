# PRAMAAN Core Screens (Day 2 · Phase 2)

Owner: Person 1 lane (Krishika, all lanes from Day 2) · Built on `../design-system/` · Scope: HANDOFF Day 2 · Phase 1 screen-scope table

## Purpose

The first visual version of the surveyor's journey, from the Day 1 state map (`../day-1/state-definition.md`, `../day-1/state-screen-requirements.md`). A reviewer can see what the surveyor sees, how capture flows, how checking is shown and how the three verdicts appear, without any real computation behind them.

## Run

```
cd prototype/person-1
npm install
npm run dev
```

The page opens on the clickable journey (`../clickable-prototype/`); "All screens and components" shows the static gallery.

## Implemented screens

| Screen | File | Notes |
|---|---|---|
| SC-01 App Open | `SC01AppOpen.jsx` | First screen: purpose line ("designed to prove…", no "photo"), limitation line, "Starting — calibration next" |
| SC-02 Hold-Still Calibration | `SC02Calibration.jsx` | Instruction only; no progress or timer |
| SC-03 Capture Preparation | `SC03CapturePreparation.jsx` | Claimed site display-only sample (D-4); "Acquiring GPS, accuracy: …"; capture not yet allowed, stated in text |
| SC-04 Ready to Capture | `SC04ReadyToCapture.jsx` | V-NORMAL; camera placeholder; camera-only, no gallery/upload |
| SC-05 Capturing | `SC05Capturing.jsx` | "Capturing 3-second clip"; "Slowly move the phone left-to-right"; no countdown |
| SC-06 Checking | `SC06Checking.jsx` | One non-quantitative checking state + the three check names (D-10) |
| SC-07 Result V-LG / V-NR / V-LF | `SC07Result.jsx` + `fixtures.js` | Likely Genuine / Needs Review / Likely Fraudulent; labelled sample Reality Score; per-check status and reason; limitation line on every variant (D-6) |

`fixtures.js` holds every hardcoded value. The V-NR sample shows UNAVAILABLE and LOW_CONFIDENCE explicitly as not fraud, with the result based on the remaining checks.

## Later phases

Certificate detail (SC-08), the Verifier Desk concept (SC-10–SC-12) and linking were built in Phase 3 in `../clickable-prototype/`. Still not built: hand-over screen (SC-09), SC-04 V-TIMEOUT, retake / new capture and back / exit as product features.

## Prototype boundary

Presentation only (HANDOFF P1 Q5). No camera, microphone, location, motion-sensor, cryptography or network access; no detection, FFT, geofence, fusion, scoring or signing logic; no timers or animations standing in for processing. Every screen carries "Prototype interaction — simulated result", and every number carries "sample value, prototype interaction". This web prototype is a presentation surface; the event product is the Android app built during the event window.
