# Validation Plan Template + Known Risks — PRAMAAN

**Owner:** Person 2 lane (Krishika, all lanes) · **Created:** 2026-10-03 (Day 3 · Phase 4) · **Plan:** Day 3 P2 steps 3–4
**Status:** TEMPLATE. Nothing here has been built, run, tested or measured. Every "Result" and "Recorded value" field stays empty, and the "Evidence to collect" items do not exist yet, until the event, where the work happens on the loaner iQOO 15 (phone) and a laptop (Verifier Desk).
**Sources:** PRD §6 (acceptance criteria), §9 (non-functional requirements), §11 (48-hour build plan, referenced, not re-executed), §12 (edge-case and risk register), §13.1 (definition of done).

## 1. How each part will be validated during the event

Build order and hours are the PRD's own (§11.1 Red Light, phone only; §11.2 Green Light, phone + laptop).

| # | Event hours (PRD §11) | What will be built | What will be checked (PRD acceptance criterion / exit condition) | Evidence to collect (PRD §11 deliverable) | Result | Recorded value |
|---|---|---|---|---|---|---|
| V1 | 0–2 | Demo-site registry (3–5 hardcoded sites), camera skeleton (FR-1, FR-2.1) | App launches with the camera preview visible | The app launching with the camera preview | | |
| V2 | 2–6 | Geofence / Location Binding (FR-2) | Returns PASS, FAIL or LOW_CONFIDENCE with the distance shown, never a bare true/false; threshold is a configuration value; coarse GPS gives LOW_CONFIDENCE; GPS timeout continues with the best-available fix | A geofence result with its distance, from a run against a hardcoded site | | Threshold used: |
| V3 | 6–14 | Motion Consistency (FR-3) | Gyroscope logged across the 3-second window; score returned for a live capture; LOW_CONFIDENCE path shown on a textureless scene; hold-still calibration runs at start | A motion score for a live capture; a LOW_CONFIDENCE result on a textureless test scene | | |
| V4 | 14–18 | FFT-based Moiré / Recapture Detection (FR-4) | FFT plot generated for a sample capture; basic threshold set, tuned later (V7) | The FFT plot for a sample capture | | |
| V5 | 18–22 | Fusion + signing (FR-5, FR-6) | A full certificate file is generated from a live capture and opens as valid JSON with a signature field; weights live in one config location | A certificate file from a live capture | | Weights used: |
| V6 | 22–26 | Integration + fault isolation (FR-8, FR-9) | Each check wrapped so a failure reports UNAVAILABLE without a crash; consecutive full-pipeline runs logged; induced check-failure test passes; no gallery-upload path (code review) | The run log; the induced-failure result; the code-review note on the gallery path | | Runs logged: |
| V7 | 26–30 | Tune FFT-based Moiré / Recapture Detection at the venue (FR-4) | Threshold set against real vs screen-recapture clips filmed at the venue; the screens used are listed for the pitch | The threshold as set and the list of screens it was tuned against | | Screens used: |
| V8 | 30–36 | Verifier Desk (FR-7) | A certificate generated on the phone opens on the laptop with its signature checked and all evidence visible; works with pre-generated sample certificates for the fallback | A phone-generated certificate opened on the laptop with all evidence visible | | |
| V9 | 36–40 | Full rehearsal (§11.3) | Demo script run end to end, including the screen-recapture and wrong-location segments; each fallback (§11.4) tried once | The rehearsal log, including each fallback tried | | Rehearsals: |
| V10 | 40–48 | Buffer, final rehearsal, numbers (§11.2) | Numbers for the pitch are recorded at the event from the team's own test set, not before | The numbers as written down at the event | | Latency: · False accept / false reject: |

Also to be checked at the event (PRD §9): whether the core pipeline runs with Wi-Fi and mobile data off; whether signing works on the actual loaner device; whether every certificate carries a reason string for every check attempted. The PRD's latency target is measured there, not claimed beforehand.

**Fill-in rule:** a field is filled only with what was actually observed at the event. Blank means not done. Nothing from this prototype counts as a result.

## 2. KNOWN RISKS — ADDRESSED LIVE DURING THE EVENT (risk slide)

Every risk below is already in the PRD (§12). The responses are the PRD's plan for the event build. **None has been implemented, tested or shown to work yet.**

### 2a. Risks the event build will address and check live

| Risk (PRD source) | Why it matters | Addressed / validated live at the event |
|---|---|---|
| Textureless scene (§12.1 row 1) | Motion Consistency has too little texture to compare, and could produce a misleading score | Will report LOW_CONFIDENCE instead, and fusion will rely on the remaining checks; checked on a textureless test scene (V3) |
| Gyroscope drift on the loaner device (§12.1 row 2) | The motion score could be unreliable | A hold-still calibration will run at app start; checked in V3 |
| Slow GPS fix indoors (§12.1 row 3) | The demo could stall, and the geofence result is unreliable indoors | Live accuracy indicator; on timeout the app will continue with the best-available fix and state the limited accuracy; checked in V2 |
| FFT threshold tuned on the wrong screen (§12.1 row 4) | A screen recapture could be missed on demo day | The threshold will be a configuration value, tuned against the actual venue screens, with the screens listed; done in V7 |
| One check fails mid-demo (§12.1 row 5) | A naive build could crash the whole app | Each check will be isolated so a failure reports UNAVAILABLE and fusion uses the remaining checks; induced-failure test in V6 |
| Signing differs on the loaner device (§12.1 row 6) | Signing could fail on the iQOO 15 | Signing will be tested on the device itself during Red Light (V5) |
| Network down in the judging room (§12.2 row 2) | Anything network-dependent would fail | The core pipeline is designed to run offline; to be checked with Wi-Fi and mobile data off (PRD §9) |
| No second screen for the recapture demo (§12.2 row 4) | The screen-recapture case could not be shown | The team will bring its own phone or tablet as the "attacker" screen; rehearsed in V9 |

### 2b. Known limits — stated openly, not solved by the event build

| Limit (PRD source) | Why it matters | How it is handled |
|---|---|---|
| GPS spoofing with a mock-location app (§12.3 row 3) | Geofence / Location Binding may accept spoofed coordinates | Stated openly in the pitch as a known gap; v2 roadmap: Wi-Fi / cell-tower cross-check |
| Rooted or modified device (§12.3 row 6) | App-level signing can be bypassed | Stated openly; hardware attestation is roadmap only (§10.4) |
| Structure built at the correct site (§12.3 row 4, §12.4) | All three checks can pass, because the capture itself is genuine | Not solvable by any capture-time system: PRAMAAN proves capture authenticity, not scene truthfulness |
