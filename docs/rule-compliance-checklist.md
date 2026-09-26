# Rule-Compliance Checklist — daily

**Owner:** Person 3 · **Created:** 2026-09-26 (Day 1) · **Source:** plan §2 (official playbook "City Battles · Aug–Oct 2026", quoted verbatim)

Run this **every day at the integration checkpoint**, and against any asset before it moves to `submission/`.
Any "No" blocks the exit gate until it is fixed or logged in HANDOFF.md with an owner and fix-by.

## The rules we are complying with (verbatim)

| ID | Playbook rule |
|---|---|
| R1 | "Original work only: code written during the event window. No shipping a pre-built product." |
| R2 | "Open-source libraries and frameworks are fine with attribution; carrying in a completed app is not." |
| R3 | "Organisers may verify a project was built inside the event window." |
| R4 | "Cheating, plagiarism, or unfair practice means immediate disqualification." |
| R5 | "Phone-first format: The iQOO device is the build surface and the demo surface: every entry must run and pitch on the phone." |
| R6 | "A local or open-source model at the core earns brownie points, with the phone in the loop via Office Kit." |

## Daily checks

Tick each one Y / N at the checkpoint and copy the result into CHANGELOG.md.

### A. No pre-built implementation (R1, R3)
- [ ] A1. No file in the repo implements geofence, motion-consistency, FFT/moiré, fusion or signing logic, **in any language** (including notebooks, scratch scripts, pseudo-code that runs)
- [ ] A2. No real sensor, GPS, camera or FFT data was captured or processed to produce any visual
- [ ] A3. No cryptographic key was generated and nothing was signed
- [ ] A4. No Android project, APK, Gradle file, or CameraX/SensorManager/Keystore code exists
- [ ] A5. No working Verifier Desk software exists; it is a UX mockup only
- [ ] A6. The prototype tool (Figma or equivalent) contains only screens, links and simulated transitions. No embedded logic computes a score
- [ ] A7. `git log` / file history shows nothing that could be read as "the product was built before the event"

### B. Honest labeling (R3, R4)
- [ ] B1. Every simulated screen is visibly labeled **"Prototype interaction"**
- [ ] B2. Every diagram, FFT/gyro/geofence visual is stamped **"Conceptual illustration, not measured data"** or **"Proposed implementation for the event"**
- [ ] B3. The certificate mockup is stamped **"Illustrative — not a real signed output"**
- [ ] B4. Today's assets passed `docs/claim-audit-checklist.md`

### C. Originality and attribution (R2, R4)
- [ ] C1. Any third-party image, icon set, font or template is recorded in `docs/attributions.md` with its licence (create the file on first use)
- [ ] C2. Evidence claims are traceable to `docs/evidence-base.md`, and only VERIFIED items are used
- [ ] C3. Competitor statements (Anchor) quote the public source and nothing more (see `docs/anchor-positioning-brief.md`)
- [ ] C4. No text is copied from another team's submission, deck or repo

### D. Phone-first intent (R5, R6)
- [ ] D1. Every screen is designed in the phone frame first
- [ ] D2. The architecture shows on-device/offline execution, labeled as **proposed**
- [ ] D3. Office Kit and the local/open-source model are described as **planned event use**, never as already integrated

### E. Collaboration hygiene (plan §7)
- [ ] E1. Nobody edited another person's `prototype/person-N/` folder
- [ ] E2. Nothing in `assets/` was overwritten (versioned `_v1`, `_v2` only)
- [ ] E3. HANDOFF.md has today's entry with completed work, changed files, decisions, blockers and next dependency

## Submission-day extra checks (Day 5)
- [ ] The confirmation checkbox on the form is answered truthfully, and pre-existing items (frameworks, this planning work) are disclosed
- [ ] `EVENT-START-HANDOFF.md` contains no implementation code
- [ ] The Prototype URL opens in an incognito window and shows the "prototype" labels on the first screen
