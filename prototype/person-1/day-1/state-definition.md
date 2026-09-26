# PRAMAAN State Definition

Owner: Person 1 — Product & UX Lead · Phase: Day 1 / P2 · Status: DRAFT v1 — pending audit
Intended location: `docs/state-map.md` (Plan Day 1 P1 file) — staged outside the repo until Person 3 creates `docs/`
Derived from: `primary-user-journey.md` (P1, J1–J12, E1–E5) · PRD = `PRAMAAN_PRD.docx` · Plan = 5-Day Prototype Implementation Plan
Open P1 decisions: **[D-n]**. New P2 questions: **[P2-Qn]** (§8).

> **Prototype-phase rule (applies to every state):** each state is represented in the prototype as a *labelled prototype interaction*, never as a measured result (Plan §2). No state implies that capture, checks, scoring, signing or verification are implemented — all are event-time work (Plan §4).

---

## 1. State Index

| ID | State name | Surface | Persona | P1 source |
|---|---|---|---|---|
| S1 | App Open | Phone app | Field Surveyor | J1 |
| S2 | Hold-Still Calibration | Phone app | Field Surveyor | J2, E1 |
| S3 | Capture Preparation (claimed site + GPS acquiring) | Phone app | Field Surveyor | J3, E2 |
| S4 | Ready to Capture | Phone app | Field Surveyor | J4 |
| S5 | Capturing | Phone app | Field Surveyor | J5 |
| S6 | Checking | Phone app | Field Surveyor | J6 |
| S7 | Result — one variant per verdict band (S7-LG / S7-NR / S7-LF) | Phone app | Field Surveyor | J7, §5 |
| S8 | Certificate | Phone app | Field Surveyor | J8, §7 |
| S9 | Hand-over | Phone → laptop | Field Surveyor → ULB Supervisor / JE | J9 |
| S10 | Verifier Desk — Open Certificate | Verifier Desk (laptop) | ULB Supervisor / JE | J10 |
| S11 | Signature Check | Verifier Desk (laptop) | ULB Supervisor / JE | J11 |
| S12 | Verdict & Evidence Review (terminal) | Verifier Desk (laptop) | ULB Supervisor / JE | J12 |

Laptop surface representation inside the phone-first prototype: **[D-5]**.

## 2. Normal Flow

```
S1 App Open
 → S2 Hold-Still Calibration
 → S3 Capture Preparation ──(GPS fix available  OR  15 s timeout [E3])──┐
 → S4 Ready to Capture  ◄──────────────────────────────────────────────┘
 → S5 Capturing (3-second clip)
 → S6 Checking
 → S7 Result ── S7-LG Likely Genuine | S7-NR Needs Review | S7-LF Likely Fraudulent
 → S8 Certificate                (reached from every S7 variant)
 → S9 Hand-over                  [D-8]
 → S10 Verifier Desk — Open Certificate
 → S11 Signature Check           (valid → S12; invalid = out of source scope)
 → S12 Verdict & Evidence Review (end)
```

Not modelled (no source basis): return to S4 for a new capture / retake **[D-9]**; backward navigation or exit between states **[P2-Q4]**.

## 3. State Specifications

### S1 — App Open
- **Purpose:** entry point; the surveyor starts PRAMAAN to make a capture.
- **User sees:** that the app is starting and will calibrate.
- **User does:** opens the app.
- **PRAMAAN communicates:** it is starting and will calibrate next.
- **Next state:** S2.
- **Transition condition:** app launched.
- **Source basis:** P1 J1; Plan §3 ("open app"); PRD FR-3 (calibration "at app startup"); PRD §3.2 (no login/account — none modelled).

### S2 — Hold-Still Calibration
- **Purpose:** prepare the phone before first use.
- **User sees:** an instruction to hold the phone still.
- **User does:** holds the phone still.
- **PRAMAAN communicates:** it is preparing the phone; keep it still.
- **Next state:** S3.
- **Transition condition:** calibration complete. (Calibration failure: out of source scope — §6.)
- **Source basis:** P1 J2, E1; PRD FR-3, §12.1 row 2.

### S3 — Capture Preparation (claimed site + GPS acquiring)
- **Purpose:** make sure the capture can be tied to the claimed registered site and a location fix.
- **User sees:** a live "acquiring GPS, accuracy: Xm" indicator; that capture is not yet allowed. How the claimed site is shown / chosen: **[D-4]**. Display of the accuracy value: **[D-7]**.
- **User does:** waits for location. Establishing the claimed site: mechanism **[D-4]**.
- **PRAMAAN communicates:** location is being acquired and how accurate it currently is.
- **Next state:** S4.
- **Transition condition:** (a) a GPS fix with an accuracy value is available — *P1 interpretation of FR-1 "before allowing capture to start"; the PRD sets no minimum accuracy* — **or** (b) the 15-second GPS timeout elapses (E3 — proceed with best-available fix). Claimed site established **[D-4]**.
- **Source basis:** P1 J3, E2, E3; PRD FR-1, FR-2, §6.2.1, §12.1 row 3.

### S4 — Ready to Capture
- **Purpose:** the surveyor can start a capture.
- **User sees:** the live camera view; current GPS accuracy (P1 J4 — continuation of the FR-1 indicator, no separate source line); the camera as the **only** capture entry point — **no gallery / upload option**.
- **User does:** starts capture.
- **PRAMAAN communicates:** ready; capture is camera-only. If S4 was reached via GPS timeout (E3), whether limited accuracy is communicated here or only in the result reasons: **[P2-Q1]**.
- **Next state:** S5.
- **Transition condition:** user starts capture.
- **Source basis:** P1 J4; PRD FR-1, FR-9, §5.

### S5 — Capturing
- **Purpose:** record the 3-second clip.
- **User sees:** that capture is in progress; the prompt "slowly move the phone left-to-right". Whether the 3-second duration itself is shown: not specified. User-facing word for the capture: **[D-3]**.
- **User does:** slowly pans the phone left-to-right.
- **PRAMAAN communicates:** keep the gentle pan going until capture ends.
- **Next state:** S6.
- **Transition condition:** the 3-second capture ends.
- **Source basis:** P1 J5; PRD FR-1, §12.2 row 3.
- **Not modelled:** any camera controls (zoom, flash, switch camera, etc.) — no source basis.

### S6 — Checking
- **Purpose:** show the surveyor that the capture is being checked.
- **User sees:** that the capture is going through PRAMAAN's three authenticity checks — Motion Consistency, Geofence / Location Binding, FFT-based Moiré / Recapture Detection — and a combined result is being prepared. Per-check progress: **[D-10]**.
- **User does:** user action: not defined by current source (waits).
- **PRAMAAN communicates:** the capture is being checked. Must **not** communicate: a processing time or duration, or any indication of actual computation (Plan §9, Day 3 P1 step 4; PRD NFR latency is an event target, not a prototype display).
- **Next state:** S7 (one variant).
- **Transition condition:** result available.
- **Source basis:** P1 J6; PRD §1.3, FR-5; Plan §3, Day 3 P1 step 4.

### S7 — Result
One state, three variants. The variant is determined by the Reality Score's verdict band from fusion of the available checks — no single check forces a band (PRD FR-5, FR-8; Plan §9). Relationship to the Plan's "verified / flagged" states: **[D-1]**.

**Common to all variants**
- **Purpose:** tell the surveyor the outcome and why.
- **User sees:** the Reality Score **[D-7]**; the verdict band; for each of the three checks, its status (§5) and a human-readable reason; the Geofence reason includes the distance to the registered site — "never a bare true/false" **[D-7]**.
- **User does:** reads the result; proceeds to the certificate.
- **PRAMAAN communicates:** the verdict combines the available checks — all three, or the remaining ones if a check is UNAVAILABLE; the reasons explain why. Must not read as confirming scene truthfulness (§7).
- **Next state:** S8. (New capture / retake: **[D-9]**.)
- **Transition condition:** user proceeds (P1 J7).
- **Source basis:** P1 J7, §5; PRD §3.1, FR-2, FR-5, FR-8, §9.

**S7-LG — Likely Genuine**
- Verdict label: "Likely Genuine".
- Meaning — *P1 interpretation, not PRD wording:* the capture shows the characteristics of a genuine on-site camera capture — capture authenticity only, not scene truthfulness.

**S7-NR — Needs Review**
- Verdict label: "Needs Review".
- Meaning — PRD wording: "routes to human follow-up". No follow-up procedure is defined; none modelled.

**S7-LF — Likely Fraudulent**
- Verdict label: "Likely Fraudulent".
- Meaning — *P1 interpretation, not PRD wording:* the capture shows characteristics inconsistent with a genuine on-site capture.

Band cutoffs exist in the PRD (FR-5) but are event-tuned (PRD §13.3; Plan §4) — no cutoff or score value is part of this state definition.

### S8 — Certificate
- **Purpose:** give the surveyor the portable proof of this capture for independent verification.
- **User sees:** a certificate for this capture carrying the verdict band, Reality Score, the three check statuses and reasons, location and accuracy, registered site and distance, timestamp, and device (manifest concept, PRD §7) **[D-7]**; the statement that this is **app-level signing, not hardware-attested**. In the prototype, the certificate is labelled "illustrative — not a real signed output".
- **User does:** views the certificate; shares / hands it over **[D-8]**.
- **PRAMAAN communicates:** this certificate is what a second party uses to check the capture independently.
- **Next state:** S9.
- **Transition condition:** user shares / hands over the certificate **[D-8]**.
- **Source basis:** P1 J8, §7; PRD FR-6, §7, §11.4 (certificates exist for every band); Plan §2, §3, Day 2 P2 step 5.
- **Prototype vs event:** representation only; real key generation and signing are event work (Plan §4).

### S9 — Hand-over
- **Purpose:** move the certificate from the surveyor to the ULB Supervisor / JE.
- **User sees:** not defined by the sources beyond the certificate being shared **[D-8]**.
- **User does:** shares / hands over the certificate file — mechanism **[D-8]**; must not rely on a cloud backend (PRD §3.2).
- **PRAMAAN communicates:** the certificate is intended for independent verification by a second party (carried from S8); no further messaging defined.
- **Next state:** S10.
- **Transition condition:** the certificate file is available to the ULB Supervisor / JE on the Verifier Desk laptop.
- **Source basis:** P1 J9; Plan §3; PRD FR-6, FR-7, §3.2.
- **Note:** whether S9 is a user-visible state or only a transition: **[P2-Q2]**.

### S10 — Verifier Desk — Open Certificate
- **Purpose:** the ULB Supervisor / JE brings a submitted certificate into the Verifier Desk.
- **User sees:** the certificate being accepted. Whether a distinct "no certificate opened yet" state exists before this: **[P2-Q5]**.
- **User does:** drops or opens the certificate file.
- **PRAMAAN communicates:** the certificate has been accepted.
- **Next state:** S11.
- **Transition condition:** certificate opened.
- **Source basis:** P1 J10; PRD FR-7; Plan Day 3 P1 step 3 ("drop certificate").

### S11 — Signature Check
- **Purpose:** let the verifier know whether the certificate is intact before relying on it ("tamper-evident", PRD FR-6).
- **User sees:** the result of the certificate's signature check.
- **User does:** user action: not defined by current source.
- **PRAMAAN communicates:** whether the certificate's signature is valid.
- **Next state:** S12. Invalid-signature presentation: out of source scope (§6).
- **Transition condition:** signature check result is valid. Automatic vs user-triggered transition: **[P2-Q3]**.
- **Source basis:** P1 J11; PRD FR-6, FR-7; Plan Day 3 P1 step 3 ("verify").
- **Prototype vs event:** represented "verify" step only; actual signature verification is event work (Plan §4).

### S12 — Verdict & Evidence Review (terminal)
- **Purpose:** the verifier understands the capture's authenticity result and the evidence behind it.
- **User sees:** overall Reality Score and verdict band; the three check scores, statuses and reasons; the FFT magnitude plot; the gyro-vs-flow trace; the geofence distance **[D-7]**. In the prototype, evidence visuals are Person 2's illustrations labelled "conceptual illustration, not measured data".
- **User does:** reviews the verdict, reasons and evidence.
- **PRAMAAN communicates:** why the capture received its verdict — "the reasons, not just the number". Must not read as confirming scene truthfulness (§7).
- **Next state:** none — journey end. Approve / reject / follow-up actions: not defined by the PRD (§6).
- **Transition condition:** n/a (terminal).
- **Source basis:** P1 J12; PRD FR-4 (FFT plot viewable at Verifier Desk), FR-5, FR-7, §4; Plan Day 2 P2 step 6.

## 4. Mapping to the Plan's State List

| Plan state (Day 1 P1 step 3) | P2 state(s) | Note |
|---|---|---|
| ready/idle | S4 | S1 is entry, not idle |
| capturing | S5 | — |
| checking | S6 | — |
| verified | S7 (variant relationship open) | **[D-1]** |
| flagged | S7 (variant relationship open) | **[D-1]** |
| certificate view | S8 | — |
| Verifier Desk view | S10 → S11 → S12 | laptop representation **[D-5]** |
| — (not in Plan list) | S1, S2, S3, S9 | sourced from PRD FR-3, FR-1/FR-2, Plan §3 via P1 |

Final state names are locked in P5 **[D-11]**.

## 5. Inline Conditions (not separate states)

| Condition | Where it appears | User-visible effect | Source |
|---|---|---|---|
| E1 Hold-still calibration | Is state S2 | — | FR-3 |
| E2 GPS acquiring | Is state S3 | — | FR-1 |
| E3 GPS timeout (15 s) | Transition S3 → S4 | Capture allowed with best-available fix; accuracy flagged in the reasons in S7 / S8 / S12 **[P2-Q1]** | FR-2, §12.1 r3 |
| PASS | Geofence status in S7, S8, S12 | Status + reason with distance | FR-2 |
| FAIL | Geofence status in S7, S8, S12 | Status + reason with distance; verdict still from fusion | FR-2, FR-5 |
| E4 LOW_CONFIDENCE | Geofence (GPS accuracy worse than threshold) or Motion (textureless scene) status in S7, S8, S12 | Status + reason; not presented as fraud; counts for less in the combined result | FR-2, FR-3, FR-5 |
| E5 UNAVAILABLE | Any check's status in S7, S8, S12 | Status + reason; result recalculated from the remaining checks | FR-8, FR-5 |
| "OK" | §7 schema example | Conflicts with PASS/FAIL — **[D-2]** | §7 |

- None of these creates its own state; they are information inside S7, S8 and S12 (P1 §5).
- Motion Consistency and FFT-based Moiré / Recapture Detection have no PRD-named normal-case status **[D-2]**.

## 6. Out of Source Scope (not modelled — team decision required)

Carried unchanged from P1 §6: camera/location permission denied; camera failure; capture interrupted/failed; calibration failure; no GPS fix at all at timeout; all three checks UNAVAILABLE; invalid-signature presentation at S11; retake / new capture **[D-9]**; approve / reject / follow-up at S12.
Excluded by the PRD (not decisions): login/account, cloud sync, network-failure states (PRD §3.2, §9).

## 7. Limitation and Claim Boundaries Across States

| Boundary | States it constrains | Source |
|---|---|---|
| Capture authenticity, **not** scene truthfulness — no verdict (incl. "Likely Genuine"), certificate or evidence view may read as confirming the real-world claim | S7, S8, S12 | PRD §1.4, §12.4; Plan §3, §9 |
| Limitation stated on its own screen or slide, and unmissable on screen | Placement **[D-6]** — not modelled as a state; if D-6 selects a dedicated in-prototype screen, a state must be added | Plan §3, §9, Day 2 P1 step 6 |
| App-level signing, not hardware-attested | S8 (on-screen, PRD FR-6); no hardware-attestation implication anywhere | PRD FR-6, §10.4 |
| Labelled prototype interaction; certificate "illustrative"; evidence visuals "conceptual illustration" | All states; S8; S12 | Plan §2, Day 2 P2 steps 5–6 |
| No processing time, accuracy, FP/FN rates | S6 especially; all states | Plan §9 |
| Numeric values (score, distance, accuracy) | S3, S4, S7, S8, S12 **[D-7]** | PRD FR-1, FR-2, FR-5, FR-7; Plan §9 |
| Camera-only, no gallery upload | S4, S5 | PRD FR-9 |

## 8. Decisions and Open Questions

**Carried from P1 (all unresolved — team decision required):**
D-1 verdict bands vs "verified / flagged" · D-2 PASS/FAIL vs "OK" and normal-case status for Motion/Moiré · D-3 "photo" vs "video/clip" wording · D-4 claimed-site mechanism · D-5 laptop Verifier Desk in phone-first prototype · D-6 limitation screen vs slide and placement · D-7 numeric display · D-8 certificate transfer to laptop · D-9 retake / new capture · D-10 per-check progress in Checking · D-11 terminology authority.

**New in P2:**

| ID | Question | States | Why open |
|---|---|---|---|
| P2-Q1 | After a GPS timeout, is limited accuracy communicated at S4, or only in the result reasons (S7/S8/S12)? | S4, S7 | PRD FR-2 says "flag accuracy in the reasons output"; P1 E3 is ambiguous about when |
| P2-Q2 | Is S9 Hand-over a user-visible state on the phone, or only a transition between surfaces? | S9 | Depends on D-8; no UI defined |
| P2-Q3 | Does S11 → S12 happen automatically or after a user action? | S11, S12 | PRD FR-7 does not say |
| P2-Q4 | Is backward navigation or exit between states (e.g. S8 → S7, leaving S12) supported? | All | Not defined by any source |
| P2-Q5 | Does the Verifier Desk have a distinct state before a certificate is opened? | S10 | PRD FR-7 implies accepting a file; P1 folds this into J10 |

## 9. Traceability

| State | P1 item | PRD / Plan basis | Traceable? |
|---|---|---|---|
| S1 | J1 | Plan §3; PRD FR-3, §3.2 | Yes |
| S2 | J2, E1 | PRD FR-3, §12.1 r2 | Yes |
| S3 | J3, E2, E3 | PRD FR-1, FR-2, §6.2.1, §12.1 r3 | Yes (site mechanism D-4; enable condition is P1 interpretation) |
| S4 | J4 | PRD FR-1, FR-9, §5 | Yes (accuracy display is P1 continuation of FR-1) |
| S5 | J5 | PRD FR-1, §12.2 r3 | Yes |
| S6 | J6 | PRD §1.3, FR-5; Plan §3, §9, Day 3 | Yes |
| S7 (+ variants) | J7, §5 | PRD §3.1, FR-2, FR-3, FR-5, FR-8, §9; Plan §9 | Yes (LG/LF meaning lines are P1 interpretation) |
| S8 | J8, §7 | PRD FR-6, §7, §11.4; Plan §2, §3 | Yes |
| S9 | J9 | Plan §3; PRD FR-6, FR-7, §3.2 | Yes (mechanism D-8) |
| S10 | J10 | PRD FR-7; Plan Day 3 | Yes |
| S11 | J11 | PRD FR-6, FR-7; Plan §4, Day 3 | Yes |
| S12 | J12 | PRD FR-4, FR-5, FR-7, §4; Plan Day 2 | Yes |
| Inline conditions | P1 §5, §6 | PRD FR-2, FR-3, FR-5, FR-8, §7 | Yes |
