# PRAMAAN State → Screen Requirements

Owner: Person 1 — Product & UX Lead · Phase: Day 1 / P3 · Status: DRAFT v1 — pending audit
Staged outside the repo (`docs/` not yet created by Person 3). Target filename in `docs/` not yet decided — see the P2 audit note on the `docs/state-map.md` clash.
Derived from: `state-definition.md` (P2, S1–S12) · `primary-user-journey.md` (P1) · PRD = `PRAMAAN_PRD.docx` · Plan = 5-Day Prototype Implementation Plan

**Scope:** what each screen must contain and communicate. **Out of scope:** colour, typography, spacing, styling, layout, animation, final copy, Figma, code (Day 2+).
Dependencies are marked `DEPENDENCY: D-n` (P1), `DEPENDENCY: P2-Qn` (P2) or `DEPENDENCY: P3-Qn` (new, §7).

---

## 1. Global Requirements (apply to every screen)

| ID | Requirement | Source |
|---|---|---|
| G1 | Every screen is visibly labelled as a prototype interaction, never presented as a measured result. Exact wording/placement: Day 2 copy, checked against Person 3's claim-audit checklist. | Plan §2, §7 |
| G2 | No screen shows a processing time, detection accuracy, or false-positive / false-negative rate. | Plan §9; PRD NFR latency is an event target |
| G3 | No screen implies that capture, checks, scoring, signing or verification are implemented — they are represented concepts (event-time work). | Plan §2, §4 |
| G4 | No screen offers a gallery / upload / import entry point anywhere in the capture flow. | PRD FR-1, FR-9 |
| G5 | No screen implies hardware attestation. | PRD FR-6, §10.4 |
| G6 | No verdict, certificate or evidence screen may read as confirming scene truthfulness (§5). | PRD §1.4, §12.4; Plan §3, §9 |
| G7 | Numeric values (Reality Score, check scores, distance, GPS accuracy) appear only as permitted by `DEPENDENCY: D-7`. | P2 §7 |
| G8 | Check names and state names follow the terminology to be locked in P5. `DEPENDENCY: D-11` | P2 §4 |
| G9 | No navigation elements (back, exit, retry, retake) are specified. `DEPENDENCY: P2-Q4`, `D-9` | P2 §2 |
| G10 | User-facing word for the capture ("photo" / "video" / "clip"). `DEPENDENCY: D-3` | P1 D-3 |

## 2. Screen Inventory

| Screen | Source state | Treatment | Persona | Conditional on |
|---|---|---|---|---|
| SC-01 App Open | S1 | Dedicated screen | Field Surveyor | P3-Q1 (first-screen purpose) |
| SC-02 Hold-Still Calibration | S2 | Dedicated screen | Field Surveyor | — |
| SC-03 Capture Preparation | S3 | Dedicated screen | Field Surveyor | D-4 (site element) |
| SC-04 Ready to Capture | S4 | Dedicated screen, 2 variants (normal / after GPS timeout) | Field Surveyor | P2-Q1 (timeout variant content) |
| SC-05 Capturing | S5 | Dedicated screen | Field Surveyor | — |
| SC-06 Checking | S6 | Dedicated screen | Field Surveyor | D-10 (per-check progress) |
| SC-07 Result | S7 | One screen, 3 verdict variants (V-LG / V-NR / V-LF) + inline check-status conditions | Field Surveyor | D-1 (relationship to Plan's "verified / flagged" screens), D-7 |
| SC-08 Certificate | S8 | Dedicated screen | Field Surveyor | D-7, D-8, P3-Q2 |
| SC-09 Hand-over | S9 | **Conditional** — no independent screen specified until decided | Field Surveyor → Verifier | D-8, P2-Q2 |
| SC-10 Verifier Desk — Open Certificate | S10 | Stage 1 ("drop certificate") of the single Verifier Desk concept screen; optional empty-state variant | ULB Supervisor / JE | D-5, P2-Q5 |
| SC-11 Signature Check | S11 | Stage 2 ("verify") of the single Verifier Desk concept screen | ULB Supervisor / JE | D-5, P2-Q3 |
| SC-12 Verdict & Evidence Review | S12 | Stage 3 ("see evidence") of the single Verifier Desk concept screen | ULB Supervisor / JE | D-5, D-7 |
| SC-L Limitation | — (no P2 state) | **Conditional** — exists only if D-6 selects a dedicated in-prototype screen; not specified here | — | D-6 |

S10–S12 share one screen: the Plan specifies a single Verifier Desk concept screen showing "drop certificate → verify → see evidence" (Plan §3, Day 3 P1 step 3, §11); SC-10 / SC-11 / SC-12 are its three stages. How the screen moves between stages: `DEPENDENCY: P2-Q3`. S9 has no independent screen specified (SC-09 conditional). Inline conditions E3, PASS, FAIL, LOW_CONFIDENCE, UNAVAILABLE are variants inside SC-04 / SC-07 / SC-08 / SC-12 (P2 §5).

Note: whether SC-03 and SC-04 share one physical screen with two variants is a Day 2 design choice; the requirements below are separate because P2 defines separate states.

## 3. Screen Requirements — Phone (Field Surveyor)

### SC-01 — App Open
- **Source state:** S1 · **User context:** Field Surveyor
- **Purpose:** entry into PRAMAAN; tell the user the app is starting and will calibrate.
- **Required information:** that the app is starting; that calibration comes next. What PRAMAAN is for, if this is the "first screen" of Plan §9 — `DEPENDENCY: P3-Q1`.
- **Required UI elements:** status indicator (starting); prototype label (G1).
- **Primary user action:** not defined by current source (the app has been opened).
- **Secondary actions:** none.
- **System communication:** PRAMAAN is starting and will calibrate next.
- **State variants:** none.
- **Transition:** → SC-02 when the app has launched (S1 → S2).
- **Limitation / claim requirement:** G1–G3.
- **Source basis:** S1; P1 J1; Plan §3, §9 ("purpose within the first screen"); PRD FR-3, §3.2 (no login/account).

### SC-02 — Hold-Still Calibration
- **Source state:** S2 · **User context:** Field Surveyor
- **Purpose:** get the user to hold the phone still while PRAMAAN prepares.
- **Required information:** explicit instruction to hold the phone still; that the phone is being prepared.
- **Required UI elements:** instruction (text); status indicator (calibrating); prototype label.
- **Primary user action:** hold the phone still.
- **Secondary actions:** none.
- **System communication:** preparing the phone — keep it still.
- **State variants:** none. (Calibration failure: out of source scope.)
- **Transition:** → SC-03 when calibration is complete (S2 → S3).
- **Limitation / claim requirement:** G1, G3 (must not suggest a measured sensor process).
- **Source basis:** S2; P1 J2, E1; PRD FR-3, §12.1 row 2.

### SC-03 — Capture Preparation
- **Source state:** S3 · **User context:** Field Surveyor
- **Purpose:** show that location is being acquired and that capture is not yet allowed; tie the capture to the claimed registered site.
- **Required information:** live "acquiring GPS, accuracy: Xm" (PRD FR-1 wording) — value display `DEPENDENCY: D-7`; explicit statement that capture is not yet allowed; the claimed registered site — `DEPENDENCY: D-4`.
- **Required UI elements:** GPS acquisition indicator with accuracy; capture-not-yet-allowed status (conveyed in text, not only by a disabled look); claimed-site element `DEPENDENCY: D-4`; prototype label.
- **Primary user action:** wait for location. Establishing the claimed site: `DEPENDENCY: D-4`.
- **Secondary actions:** none.
- **System communication:** location is being acquired and how accurate it currently is.
- **State variants:** GPS acquiring (only variant; timeout is a transition — see SC-04 V-TIMEOUT).
- **Transition:** → SC-04 when a GPS fix with an accuracy value is available (P1 interpretation of FR-1) **or** the 15-second timeout elapses (E3); claimed site established `DEPENDENCY: D-4` (S3 → S4).
- **Limitation / claim requirement:** G1, G3, G7.
- **Source basis:** S3; P1 J3, E2, E3; PRD FR-1, FR-2, §6.2.1, §12.1 row 3.

### SC-04 — Ready to Capture
- **Source state:** S4 · **User context:** Field Surveyor
- **Purpose:** let the user start a camera capture.
- **Required information:** live camera view; current GPS accuracy (P1 continuation of FR-1) `DEPENDENCY: D-7`; that capture is camera-only.
- **Required UI elements:** camera view; capture control (start capture); GPS accuracy display; prototype label. **Must not contain:** gallery / upload / import control (G4); any other camera control (zoom, flash, camera switch — no source basis).
- **Primary user action:** start capture.
- **Secondary actions:** none.
- **System communication:** ready; capture is camera-only.
- **State variants:**
  - V-NORMAL — reached after a GPS fix.
  - V-TIMEOUT — reached after the 15-second GPS timeout (E3) with best-available fix. Whether limited accuracy is communicated on this screen or only in result reasons: `DEPENDENCY: P2-Q1`.
- **Transition:** → SC-05 when the user starts capture (S4 → S5).
- **Limitation / claim requirement:** G1, G4, G7.
- **Source basis:** S4; P1 J4, E3; PRD FR-1, FR-2, FR-9, §5.

### SC-05 — Capturing
- **Source state:** S5 · **User context:** Field Surveyor
- **Purpose:** guide the user through the 3-second capture.
- **Required information:** capture in progress; the movement instruction "slowly move the phone left-to-right" (PRD FR-1 wording). Whether the 3-second duration is shown: not specified by source.
- **Required UI elements:** capture-in-progress indicator; movement instruction (text); prototype label.
- **Primary user action:** slowly pan the phone left-to-right.
- **Secondary actions:** none (no stop/cancel defined).
- **System communication:** keep the gentle pan going until capture ends.
- **State variants:** none.
- **Transition:** → SC-06 when the 3-second capture ends (S5 → S6).
- **Limitation / claim requirement:** G1, G3, G4.
- **Source basis:** S5; P1 J5; PRD FR-1, §12.2 row 3.

### SC-06 — Checking
- **Source state:** S6 · **User context:** Field Surveyor
- **Purpose:** show that the capture is being checked by PRAMAAN's three authenticity checks and a combined result is being prepared.
- **Required information:** the three checks by name — Motion Consistency, Geofence / Location Binding, FFT-based Moiré / Recapture Detection (PRD §1.3 names; `DEPENDENCY: D-11` for naming authority); that a combined result is being prepared.
- **Required UI elements:** checking-in-progress status; the three check names; prototype label. Per-check progress indication: `DEPENDENCY: D-10`. **Must not contain:** progress percentage, elapsed/remaining time, accuracy figure, or any depiction of actual computation (G2, G3).
- **Primary user action:** not defined by current source (waits).
- **Secondary actions:** none.
- **System communication:** the capture is being checked. The screen may take a visible moment without implying a measured processing time (Plan Day 3 P1 step 4).
- **State variants:** none defined (D-10 may add per-check variants).
- **Transition:** → SC-07 (one verdict variant) when the result is available (S6 → S7).
- **Limitation / claim requirement:** G1–G3.
- **Source basis:** S6; P1 J6; PRD §1.3, FR-5; Plan §3, §9, Day 3 P1 step 4.

### SC-07 — Result
- **Source state:** S7 · **User context:** Field Surveyor
- **Purpose:** tell the user the outcome and why.
- **Required information:**
  - verdict band — exactly one of "Likely Genuine" / "Needs Review" / "Likely Fraudulent" (PRD FR-5 wording);
  - Reality Score `DEPENDENCY: D-7`;
  - for each of the three checks: check name, status, human-readable reason (PRD FR-5, §9);
  - Geofence reason includes distance to the registered site — "never a bare true/false" (FR-2) `DEPENDENCY: D-7`;
  - if E3 occurred: accuracy flagged in the reasons (FR-2);
  - that the verdict combines the available checks — all three, or the remaining ones if a check is UNAVAILABLE (FR-5, FR-8).
- **Required UI elements:** verdict band label (text); Reality Score `DEPENDENCY: D-7`; check-result list (name + status + reason per check); control to proceed to the certificate; limitation requirement (§5); prototype label.
- **Primary user action:** read the result; proceed to the certificate.
- **Secondary actions:** none (retake / new capture `DEPENDENCY: D-9`).
- **System communication:** the verdict reflects the available checks combined, not any single check; the reasons explain why.
- **State variants:**
  - **V-LG — Likely Genuine:** label "Likely Genuine"; any meaning statement must stay within capture authenticity (P1 meaning line is interpretation, not PRD wording).
  - **V-NR — Needs Review:** label "Needs Review"; communicates "routes to human follow-up" (PRD wording). No follow-up procedure shown.
  - **V-LF — Likely Fraudulent:** label "Likely Fraudulent"; shows the reason for each of the three checks (PRD FR-5). Meaning line is P1 interpretation.
  - Relationship of these variants to the Plan's "verified / flagged" screens: `DEPENDENCY: D-1`.
- **Inline check-status conditions** (apply within any variant, per check):

  | Status | Screen must show | Source |
  |---|---|---|
  | PASS (Geofence) | status + reason with distance | FR-2 |
  | FAIL (Geofence) | status + reason with distance; verdict still from the combined result | FR-2, FR-5 |
  | LOW_CONFIDENCE (Geofence or Motion) | status + reason; must **not** be presented as fraud | FR-2, FR-3 |
  | UNAVAILABLE (any check) | status + reason; screen must make clear the result is based on the remaining checks, not all three | FR-8, FR-5 |
  | Normal status for Motion / Moiré; "OK" vs PASS | `DEPENDENCY: D-2` | §7 |

- **Transition:** → SC-08 when the user proceeds (S7 → S8).
- **Limitation / claim requirement:** G1–G3, G6, G7; limitation line placement `DEPENDENCY: D-6`.
- **Source basis:** S7; P1 J7, §5; PRD §3.1, FR-2, FR-3, FR-5, FR-8, §9; Plan §9.

### SC-08 — Certificate
- **Source state:** S8 · **User context:** Field Surveyor
- **Purpose:** show the portable proof of this capture, for independent verification.
- **Required information** (P2 S8, from PRD §7 manifest concept): verdict band; Reality Score; three check statuses and reasons; location and GPS accuracy; registered site and distance to it; timestamp; device model. Values `DEPENDENCY: D-7`. Other manifest fields (capture ID, media hash/duration, signature block) on this screen: `DEPENDENCY: P3-Q2`.
- **Required UI elements:** certificate information block; **app-level signing statement** — "app-level signing, not hardware-attested" (PRD FR-6); **illustrative label** — "illustrative — not a real signed output" (Plan Day 2 P2 step 5); share / hand-over control `DEPENDENCY: D-8`; prototype label.
- **Primary user action:** view the certificate; share / hand it over (Plan §3 "view/share") — mechanism `DEPENDENCY: D-8`.
- **Secondary actions:** none.
- **System communication:** this certificate is what a second party uses to check the capture independently.
- **State variants:** the certificate carries whichever verdict band S7 produced (available for all three — PRD §11.4); check-status conditions as in SC-07.
- **Transition:** → S9 / SC-09 when the user shares / hands over `DEPENDENCY: D-8`.
- **Limitation / claim requirement:** G1, G3, G5, G6, G7. The app-level signing statement and the illustrative label must both be present; neither replaces the other.
- **Source basis:** S8; P1 J8, §7; PRD FR-6, §7, §11.4; Plan §2, §3, Day 2 P2 step 5, Day 3 P1 step 2 (certificate detail styled around Person 2's manifest mockup).

### SC-09 — Hand-over (CONDITIONAL)
- **Source state:** S9 · **User context:** Field Surveyor → ULB Supervisor / JE
- **Purpose:** move the certificate from surveyor to verifier.
- **Required information / UI elements:** not specified — whether a user-visible screen exists and what it shows depends on `DEPENDENCY: D-8`, `DEPENDENCY: P2-Q2`. Must not rely on a cloud backend (PRD §3.2).
- **Primary user action:** share / hand over the certificate file `DEPENDENCY: D-8`.
- **Secondary actions:** none.
- **System communication:** the certificate is intended for independent verification by a second party (carried from SC-08).
- **State variants:** none.
- **Transition:** → SC-10 when the certificate file is available on the Verifier Desk laptop (S9 → S10).
- **Limitation / claim requirement:** G1, G3.
- **Source basis:** S9; P1 J9; Plan §3; PRD FR-6, FR-7, §3.2.

## 4. Screen Requirements — Verifier Desk (ULB Supervisor / JE, laptop)

SC-10, SC-11 and SC-12 are the three stages of the Plan's single Verifier Desk concept screen (Plan §3, Day 3 P1 step 3, §11). Representation of the laptop surface inside the phone-first prototype: `DEPENDENCY: D-5`.

### SC-10 — Verifier Desk — Open Certificate
- **Source state:** S10 · **User context:** ULB Supervisor / JE
- **Purpose:** bring a submitted certificate into the Verifier Desk.
- **Required information:** that a certificate can be dropped or opened; confirmation that the certificate has been accepted.
- **Required UI elements:** certificate drop / open element; accepted-status indicator; prototype label.
- **Primary user action:** drop or open the certificate file (PRD FR-7).
- **Secondary actions:** none.
- **System communication:** the certificate has been accepted.
- **State variants:** V-ACCEPTED (certificate accepted). Empty / no-certificate-yet variant: `DEPENDENCY: P2-Q5`.
- **Transition:** → SC-11 when the certificate is opened (S10 → S11).
- **Limitation / claim requirement:** G1, G3 — represented concept, not working software (Plan Day 3 P1 step 3).
- **Source basis:** S10; P1 J10; PRD FR-7; Plan Day 3 P1 step 3 ("drop certificate").

### SC-11 — Signature Check
- **Source state:** S11 · **User context:** ULB Supervisor / JE
- **Purpose:** tell the verifier whether the certificate is intact before relying on it.
- **Required information:** the result of the certificate's signature check (valid). Invalid-signature presentation: out of source scope.
- **Required UI elements:** signature-check result indicator (conveyed in text, not only by colour/icon); prototype label. Presented as the "verify" stage of the single Verifier Desk concept screen; how it advances to SC-12: `DEPENDENCY: P2-Q3`.
- **Primary user action:** not defined by current source.
- **Secondary actions:** none.
- **System communication:** whether the certificate's signature is valid.
- **State variants:** V-VALID only (invalid: out of source scope).
- **Transition:** → SC-12 when the signature check result is valid; automatic vs user-triggered `DEPENDENCY: P2-Q3`.
- **Limitation / claim requirement:** G1, G3, G5 — the "verify" step is represented, not implemented (Plan §4).
- **Source basis:** S11; P1 J11; PRD FR-6, FR-7; Plan §4, Day 3 P1 step 3 ("verify").

### SC-12 — Verdict & Evidence Review
- **Source state:** S12 · **User context:** ULB Supervisor / JE
- **Purpose:** let the verifier understand the capture's authenticity result and the evidence behind it.
- **Required information** (PRD FR-7): overall Reality Score and verdict band; the three check scores, statuses and reasons; the FFT magnitude plot; the gyro-vs-flow trace; the geofence distance. Values `DEPENDENCY: D-7`. Signature-check result from the "verify" stage (SC-11), on the same concept screen.
- **Required UI elements:** verdict band label (text); Reality Score; check-result list (name + status + reason); three evidence visuals — **supplied by Person 2** as illustrations, each carrying "conceptual illustration, not measured data" (Plan Day 2 P2 step 6); prototype label.
- **Primary user action:** review the verdict, reasons and evidence.
- **Secondary actions:** none (approve / reject / follow-up not defined by PRD).
- **System communication:** why the capture received its verdict — "the reasons, not just the number" (FR-5). Reasons must be readable alongside the score, not subordinate to it.
- **State variants:** verdict band as produced (LG / NR / LF); check-status conditions as in SC-07, including UNAVAILABLE → result based on remaining checks.
- **Transition:** none — journey end (S12 terminal).
- **Limitation / claim requirement:** G1–G3, G6, G7; evidence visuals must never read as measured data; limitation placement `DEPENDENCY: D-6`.
- **Source basis:** S12; P1 J12; PRD FR-4, FR-5, FR-7, §4; Plan Day 2 P2 step 6.

## 5. Limitation Requirement

- **Exact boundary (not to be reworded in meaning):** PRAMAAN proves capture authenticity — a real camera captured this scene, at this place, at this moment — **not** scene truthfulness (PRD §1.4, §12.4).
- **Required:** stated on its own screen or slide, not buried (Plan §3, §9); an on-screen line placed where a reviewer can't miss it (Plan Day 2 P1 step 6).
- **Screens constrained:** SC-07, SC-08, SC-12 must not read as confirming the real-world claim (G6).
- **Placement:** which screen(s) carry the line, and whether SC-L exists: `DEPENDENCY: D-6`. No design is chosen here.

## 6. Accessibility / Clarity Requirements

Person 1 owns "accessibility and clarity of the safety/limitation messaging on screen" (Plan §5).

| ID | Requirement | Screens |
|---|---|---|
| A1 | Verdict band is conveyed by its text label, never by colour or icon alone. | SC-07, SC-08, SC-12 |
| A2 | Each check's status is conveyed in text (status word + reason), never by colour or icon alone. | SC-07, SC-08, SC-12 |
| A3 | Instructions are explicit text: "hold the phone still"; "slowly move the phone left-to-right". | SC-02, SC-05 |
| A4 | "Capture not yet allowed" and signature-check result are stated in text, not only implied by a disabled or coloured element. | SC-03, SC-11 |
| A5 | The limitation statement, app-level signing statement, illustrative label and prototype label are visible without extra interaction and not reduced to fine print. | SC-07, SC-08, SC-12; all (G1) |
| A6 | LOW_CONFIDENCE and UNAVAILABLE are distinguishable in wording from FAIL, so uncertainty is not read as fraud. | SC-07, SC-08, SC-12 |

## 7. Dependencies and Open Questions

**Carried (unresolved):** D-1 to D-11 (P1) · P2-Q1 to P2-Q5 (P2).

| Dependency | Screens affected |
|---|---|
| D-1 | SC-07 |
| D-2 | SC-07, SC-08, SC-12 |
| D-3 | all (G10) |
| D-4 | SC-03 |
| D-5 | SC-10, SC-11, SC-12 |
| D-6 | SC-07, SC-08, SC-12, SC-L |
| D-7 | SC-03, SC-04, SC-07, SC-08, SC-12 |
| D-8 | SC-08, SC-09 |
| D-9 | SC-07 (and G9) |
| D-10 | SC-06 |
| D-11 | all (G8) |
| P2-Q1 | SC-04 |
| P2-Q2 | SC-09 |
| P2-Q3 | SC-11, SC-12 |
| P2-Q4 | all (G9) |
| P2-Q5 | SC-10 |

**New in P3:**

| ID | Question | Screens | Why open |
|---|---|---|---|
| P3-Q1 | Plan §9 requires a reviewer to "understand PRAMAAN's purpose within the first screen." Is that SC-01 (in-journey), or a prototype entry surface outside the product journey? | SC-01 | P1/P2 define S1 only as "starting, will calibrate"; the Plan requirement applies to the prototype's first screen |
| P3-Q2 | Which manifest fields beyond the P2 S8 list (capture ID, media hash/duration, signature block) appear on the phone certificate screen? | SC-08 | Plan Day 3 ties certificate detail to Person 2's manifest mockup (not yet produced) |

**Cross-team inputs (not decisions):** Person 2's certificate manifest mockup (SC-08, Plan Day 3 P1 step 2) and three evidence visuals (SC-12, Plan Day 2 P2 step 6); Person 3's claim-audit checklist (G1 wording, Plan §7).

## 8. Traceability

| Screen | P2 state | P1 | PRD / Plan |
|---|---|---|---|
| SC-01 | S1 | J1 | Plan §3, §9; PRD FR-3, §3.2 |
| SC-02 | S2 | J2, E1 | PRD FR-3, §12.1 r2 |
| SC-03 | S3 | J3, E2, E3 | PRD FR-1, FR-2, §6.2.1, §12.1 r3 |
| SC-04 | S4 | J4, E3 | PRD FR-1, FR-2, FR-9, §5 |
| SC-05 | S5 | J5 | PRD FR-1, §12.2 r3 |
| SC-06 | S6 | J6 | PRD §1.3, FR-5; Plan §3, §9, Day 3 |
| SC-07 (+V-LG/NR/LF) | S7 | J7, §5 | PRD §3.1, FR-2, FR-3, FR-5, FR-8, §9; Plan §9 |
| SC-08 | S8 | J8, §7 | PRD FR-6, §7, §11.4; Plan §2, §3, Day 2–3 |
| SC-09 | S9 | J9 | Plan §3; PRD FR-6, FR-7, §3.2 |
| SC-10 | S10 | J10 | PRD FR-7; Plan Day 3 |
| SC-11 | S11 | J11 | PRD FR-6, FR-7; Plan §4, Day 3 |
| SC-12 | S12 | J12 | PRD FR-4, FR-5, FR-7, §4; Plan Day 2 |
| SC-L | — | P1 §9 | PRD §1.4, §12.4; Plan §3, §9 (conditional on D-6) |
| G1–G10 | P2 §7 | P1 §9 | Plan §2, §4, §7, §9; PRD FR-1, FR-6, FR-9, §1.4, §10.4 |
| A1–A6 | — | — | Plan §5 (Person 1 accessibility ownership) |
