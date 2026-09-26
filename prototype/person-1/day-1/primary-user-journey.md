# PRAMAAN Primary User Journey

Owner: Person 1 — Product & UX Lead · Phase: Day 1 / P1 · Status: DRAFT v1 — pending audit
Intended location: `docs/primary-user-journey.md` (staged outside the repo until Person 3 creates `docs/`)
Sources: PRD = `PRAMAAN_PRD.docx` (product requirements). Plan = 5-Day Prototype Implementation Plan (prototype boundaries).
Open decisions are referenced as **[D-n]** and listed in §10.

> Prototype-phase note (Plan §2): every step below is represented in the prototype as a **labelled prototype interaction**, never as a measured result. No step is implemented before the event.

---

## 1. Journey Objective

A Field Surveyor captures evidence at a registered site; PRAMAAN checks the capture on the phone, shows a Reality Score with a verdict and per-check reasons, and produces a certificate; a ULB Supervisor / Junior Engineer opens that certificate on the Verifier Desk and independently sees the verdict and the evidence behind it.
(PRD §1.1, §4; Plan §3)

## 2. Primary Persona

- **Field Surveyor** — captures on-site; "moderately tech-literate government employee under productivity pressure"; goal: "Complete captures quickly; avoid rework". Uses the phone app. (PRD §2.3, §4)
- **ULB Supervisor / Junior Engineer** — second party; moderates captures before fund release; goal: "Catch fraud without slowing disbursement". Uses the laptop Verifier Desk. (PRD §2.3, §4, FR-7)

## 3. Journey Start and End

- **Start:** Field Surveyor opens the PRAMAAN app on-site. No onboarding, login, account or dashboard — the PRD excludes an account system and cloud backend (PRD §3.2).
- **End:** ULB Supervisor / Junior Engineer has opened the certificate on the Verifier Desk and seen the signature-check result, verdict, reasons and evidence.
- **Order:** the certificate step sits **before** independent verification; the certificate is the hand-over object between the two personas (PRD FR-6 → FR-7).

```
J1 Open app → J2 Calibration → J3 Capture preparation (site + GPS) → J4 Ready to capture
→ J5 Capturing → J6 Checking → J7 Result (one of three verdict bands)
→ J8 Certificate → J9 Hand-over → J10 Verifier opens certificate
→ J11 Signature check → J12 Verdict + evidence review → END
```

## 4. Canonical Happy Path

Each step: user goal · user action · user sees · PRAMAAN communicates · next · transition condition · basis.

**J1 — App open** (Field Surveyor)
- Goal: start a capture. Action: opens the app.
- Sees / communicates: the app is starting and will calibrate.
- Next: J2. Condition: app launched.
- Basis: Plan §3 ("open app"); PRD FR-3 (calibration "at app startup").

**J2 — Hold-still calibration**
- Goal: get the app ready. Action: holds the phone still.
- Sees / communicates: an instruction to hold the phone still while PRAMAAN prepares.
- Next: J3. Condition: calibration complete.
- Basis: PRD FR-3, §12.1 row 2. (Failure of calibration is not defined — §6.)

**J3 — Capture preparation: claimed site + GPS acquisition**
- Goal: be able to capture at the right site. Action: the claimed registered site is established — how is undefined **[D-4]**; waits for location.
- Sees: a live "acquiring GPS, accuracy: Xm" indicator; capture is not yet allowed.
- Communicates: location is being acquired and how accurate it currently is.
- Next: J4. Condition: a GPS fix with an accuracy value is available, **or** the 15-second timeout elapses (→ §6 E3). The PRD sets no minimum accuracy for enabling capture.
- Basis: PRD FR-1 (indicator gates capture), FR-2 (claimed site, timeout), §6.2.1 (registered sites).

**J4 — Ready to capture**
- Goal: start capturing. Action: starts capture from the camera view.
- Sees: live camera view; current GPS accuracy; the only capture entry point is the camera — **no gallery / upload option anywhere**.
- Communicates: ready; capture is camera-only.
- Next: J5. Condition: user starts capture.
- Basis: PRD FR-1, FR-9, §5.

**J5 — Capturing (3-second clip)**
- Goal: complete the capture. Action: slowly pans the phone left-to-right while capture runs.
- Sees: that capture is in progress; the prompt "slowly move the phone left-to-right". (Capture length is fixed at 3 seconds by the PRD; whether the duration is shown to the user is not specified.)
- Communicates: keep the gentle pan going until capture ends.
- Next: J6. Condition: the 3-second capture ends.
- Basis: PRD FR-1, §12.2 row 3. User-facing word for the capture ("photo" / "video" / "clip") **[D-3]**.

**J6 — Checking**
- Goal: learn whether the capture is authentic. Action: none required — waits.
- Sees / communicates: the capture is going through PRAMAAN's three authenticity checks (Motion Consistency, Geofence / Location Binding, FFT-based Moiré / Recapture Detection) and a combined result is being prepared. Whether each check's progress is shown separately **[D-10]**.
- Must not communicate: a processing time or duration (Plan Day 3 P1 step 4, Plan §9).
- Next: J7. Condition: result available.
- Basis: PRD §1.3, FR-5; Plan §3 ("see it checked").

**J7 — Result**
- Goal: understand the outcome. Action: reads the result; proceeds to the certificate.
- Sees: the **Reality Score**, its **verdict band** (exactly one of: Likely Genuine / Needs Review / Likely Fraudulent), and for **each of the three checks** its outcome and a human-readable reason (Geofence reason includes the distance to the registered site — "never a bare true/false"). How numeric values are shown in the prototype **[D-7]**.
- Communicates: the verdict reflects the available checks combined — all three, or the remaining ones if a check is UNAVAILABLE — not any single one; the reasons explain why.
- Next: J8. Condition: user proceeds. Branch detail in §5.
- Basis: PRD §3.1, FR-2, FR-5, §9 (auditability); Plan §9.

**J8 — Certificate**
- Goal: obtain proof of the capture. Action: views the certificate; shares it **[D-8]**.
- Sees: a certificate for this capture carrying the verdict, Reality Score, the three check results with reasons, location and accuracy, timestamp and device (manifest content, PRD §7); the statement that this is **app-level signing, not hardware-attested**.
- Communicates: this certificate is what a second party uses to check the capture independently.
- Next: J9. Condition: user shares / hands over the certificate.
- Basis: PRD FR-6, §7; Plan §3. Detail in §7.

**J9 — Hand-over** (Field Surveyor → ULB Supervisor / JE)
- Goal: get the certificate to the second party for independent verification.
- Action: shares / hands over the certificate file (Plan §3 "view/share a certificate"). The transfer mechanism is not defined by the sources and must not rely on a cloud backend (PRD §3.2) **[D-8]**.
- Sees: not defined by the sources beyond the certificate being shared; any hand-over confirmation depends on the mechanism **[D-8]**.
- Communicates: the certificate is intended for independent verification by a second party (carried from J8). No further hand-over messaging is defined.
- Next: J10.
- Condition: the certificate file is available to the ULB Supervisor / JE on the Verifier Desk laptop (PRD FR-7 "accepts a dropped/opened certificate file").
- Basis: Plan §3; PRD FR-6 (single certificate file), FR-7, §3.2.

**J10 — Verifier opens the certificate** (ULB Supervisor / JE, laptop)
- Goal: check a submitted capture. Action: drops or opens the certificate file on the Verifier Desk.
- Sees: the certificate being accepted.
- Next: J11. Condition: certificate opened.
- Basis: PRD FR-7.

**J11 — Signature check** (ULB Supervisor / JE, laptop)
- Goal: know whether the certificate is intact before relying on its verdict and evidence (certificate is "tamper-evident", PRD FR-6).
- Action: none defined by the PRD — the Verifier Desk "accepts … and verifies" the certificate once it is opened (PRD FR-7).
- Sees: the result of the certificate's signature check.
- Communicates: whether the certificate's signature is valid.
- Next: J12. Presentation of an invalid signature is not defined (§6).
- Condition: signature check result is valid. Whether J12 follows automatically or after a user action is not defined by the PRD.
- Prototype vs event: in the prototype this is the represented "verify" step of "drop certificate → verify → see evidence" (Plan Day 3 P1 step 3), not working software; actual signature verification is event-time implementation (Plan §4).
- Basis: PRD FR-6, FR-7 (verification against the bundled public key); Plan §4, Day 3.

**J12 — Verdict and evidence review** (journey end)
- Goal: understand the capture's authenticity result and the evidence behind it. Action: reviews.
- Sees: overall Reality Score and verdict band; the three check scores and reasons; the FFT magnitude plot; the gyro-vs-flow trace; the geofence distance.
- Communicates: why the capture received its verdict — "the reasons, not just the number".
- End state: verifier understands the capture's authenticity result and its evidence. Any approve/reject action is not defined by the PRD (§6).
- Basis: PRD FR-5, FR-7, §4.

## 5. Verdict Branches

All three branches share J7 → J8 → J9 → J10 → J11 → J12. The branch changes what is communicated, not the path. The verdict band is produced by fusion of the available checks — all three, or the remaining ones if a check is UNAVAILABLE (PRD FR-8); the PRD defines no rule where a single check alone forces a band (PRD FR-5; Plan §9). Mapping of these bands to the Plan's "verified / flagged" screen names **[D-1]**.

### Likely Genuine
- Sees: verdict "Likely Genuine", Reality Score, three check outcomes + reasons.
- Meaning: the capture shows the characteristics of a genuine on-site camera capture — **capture authenticity only, not scene truthfulness** (§9).
- Next action: view / share certificate → Verifier Desk.
- Certificate: available.

### Needs Review
- Sees: verdict "Needs Review", Reality Score, three check outcomes + reasons.
- Meaning (PRD wording): "routes to human follow-up".
- Next action: view / share certificate → Verifier Desk. No further follow-up procedure is defined by the PRD; none is added here.
- Certificate: available.

### Likely Fraudulent
- Sees: verdict "Likely Fraudulent", Reality Score, three check outcomes + reasons.
- Meaning: the capture shows characteristics inconsistent with a genuine on-site capture.
- Next action: view / share certificate → Verifier Desk. Retake / new capture not defined **[D-9]**.
- Certificate: available — the PRD's own sample set includes certificates for failed captures (PRD §11.4).

### Check-status behaviour (within J7, J8, J12)

| Status | Source | Separate journey state? | Effect on what the user sees |
|---|---|---|---|
| PASS | FR-2 (Geofence) | No | Shown as that check's outcome + reason (with distance) |
| FAIL | FR-2 (Geofence) | No | Shown as that check's outcome + reason (with distance); verdict still comes from fusion |
| LOW_CONFIDENCE | FR-2 (Geofence, poor GPS accuracy), FR-3 (Motion, textureless scene) | No | Shown as that check's outcome + reason; explicitly **not** presented as fraud; the check counts for less in the combined result |
| UNAVAILABLE | FR-8 (any check) | No | Shown as that check's outcome + reason; result is still produced from the remaining checks |
| "OK" | §7 schema example | — | **Conflict with PASS/FAIL — unresolved [D-2]** |

- Motion Consistency and FFT-based Moiré / Recapture Detection have no PRD-named normal-case status (only scores); **[D-2]**.
- None of these statuses creates its own screen/state; all are information inside the result, certificate and Verifier Desk.

## 6. PRD-Supported Exceptional Flows

| ID | Condition | User sees | User does | PRAMAAN communicates | Journey continues at |
|---|---|---|---|---|---|
| E1 | Hold-still calibration (app startup) | Hold-still instruction | Holds phone still | Preparing the phone | J3 |
| E2 | GPS acquiring | Live "acquiring GPS, accuracy: Xm"; capture not yet allowed | Waits | Location is being acquired and its accuracy | J4 once fix available |
| E3 | GPS timeout (15 s) | Capture becomes allowed with the best-available fix | Proceeds to capture | Location accuracy is limited — this is flagged in the reasons, not blocking | J4 → J5; accuracy flag appears in the J7/J8/J12 reasons |
| E4 | LOW_CONFIDENCE (Geofence or Motion) | That check marked LOW_CONFIDENCE with a reason | Nothing extra | Result is less certain for that check; not treated as fraud | Stays within J7 → J8 → J12 |
| E5 | UNAVAILABLE (any check) | That check marked UNAVAILABLE with a reason | Nothing extra | Result is based on the remaining checks | Stays within J7 → J8 → J12 |

**OUT OF CURRENT P1 SOURCE SCOPE — TEAM DECISION REQUIRED** (not added to the journey):
- Camera or location permission denied
- Camera failure / capture interrupted or failed
- Calibration failure
- No GPS fix at all when the 15 s timeout elapses ("best-available fix" assumes one exists)
- All three checks UNAVAILABLE
- Invalid / failed signature presentation at the Verifier Desk
- Retake / start a new capture after a result **[D-9]**
- Any approve / reject / follow-up action at the Verifier Desk

**Excluded by the PRD (not decisions):** login / account flows, cloud sync, network-failure flow — the pipeline is on-device and offline by design (PRD §3.2, §9).

## 7. Certificate Flow

- **When available:** after the result (J7), for **every** verdict band (PRD FR-6, §11.4).
- **What the user can do:** view it; share / hand it over for independent verification (Plan §3) — mechanism **[D-8]**.
- **What it conceptually exposes:** verdict and Reality Score; three check scores, statuses and reasons; GPS coordinates and accuracy; registered site and distance to it; timestamp; device model; media hash and duration; signature (PRD §7).
- **Connection to verdict:** the certificate carries the verdict and its reasons — it is the portable form of J7.
- **Connection to verification:** it is the object the Verifier Desk opens (J10).
- **Mandatory disclosure:** on-screen statement that it is app-level signing, not hardware-attested (PRD FR-6).
- **Prototype vs event:**
  - Prototype: a certificate *representation*, labelled "illustrative — not a real signed output", styled around Person 2's manifest mockup (Plan §2, Day 2 P2, Day 3 P1).
  - Event: actual key generation and signing (Plan §4; PRD FR-6).

## 8. Verifier Desk Flow

- **User:** ULB Supervisor / Junior Engineer. **Surface:** laptop (PRD §4, FR-7, §8.2).
- **Flow:** receives certificate (J9) → drops/opens it (J10) → signature-check result (J11) → verdict band + Reality Score (J12) → three check scores + reasons (J12) → evidence: FFT magnitude plot, gyro-vs-flow trace, geofence distance (J12) → understands why the capture got its verdict (end).
- **Prototype vs event:**
  - Prototype: linked concept screen "drop certificate → verify → see evidence", not working software (Plan Day 3 P1 step 3); evidence visuals are Person 2's illustrations labelled "conceptual illustration, not measured data" (Plan Day 2 P2 step 6).
  - Event: real signature verification and evidence rendering (Plan §4, PRD FR-7).
- **Presentation of a laptop surface in a phone-first prototype: unresolved [D-5].**

## 9. Mandatory UX / Claim Boundaries

1. **Capture authenticity, not scene truthfulness.** PRAMAAN proves "a real camera captured this scene, at this place, at this moment"; it "does not and cannot prove scene truthfulness" (PRD §1.4, §12.4).
   - Required: stated on its own screen or slide, not buried (Plan §3, §9); on-screen line "where a reviewer can't miss it" (Plan Day 2 P1 step 6).
   - Journey implication: no verdict (including "Likely Genuine"), certificate or Verifier Desk step may read as confirming the real-world claim.
   - Dedicated in-prototype screen vs deck slide, and exact touchpoints: **[D-6]**.
2. **App-level signing, not hardware-attested** — stated on-screen (PRD FR-6); no implication of hardware attestation (PRD §10.4).
3. **Prototype labelling** — every simulated step labelled as a prototype interaction; certificate labelled illustrative; evidence visuals labelled conceptual (Plan §2).
4. **No fabricated measurement** — no measured accuracy, processing time, or FP/FN rates; no displayed duration for Checking (Plan §9, Day 3). Numeric display policy **[D-7]**.
5. **No gallery upload** anywhere in the capture flow (PRD FR-9).
6. **Verdict from fusion, not a single check** (PRD FR-5; Plan §9).

## 10. Unresolved Decisions

| ID | Decision | Why open | Affects |
|---|---|---|---|
| D-1 | How the PRD's three bands map to the Plan's "verified / flagged" screens and state names | Plan (2 states) vs PRD (3 bands) | P2 states, Day 2 screens, Person 2 labels |
| D-2 | Per-check status vocabulary: PASS/FAIL (FR-2) vs "OK" (§7); normal status for Motion and Moiré not named | PRD internal inconsistency | J7/J8/J12 copy; Person 2 schema mockup |
| D-3 | User-facing term for the capture: "photo" (Plan Day 1, PRD §2) vs "video/clip" (PRD FR-1) | Behaviour is settled (3-s clip); wording isn't | All copy |
| D-4 | How the claimed / registered site is indicated before capture | PRD requires a claimed site; no UI defined | J3 |
| D-5 | How the laptop Verifier Desk is presented in a phone-first prototype | PRD = laptop; Plan = phone-first | J10–J12 |
| D-6 | Dedicated limitation screen inside the prototype vs deck slide only; which journey touchpoints carry the limitation line | Plan allows "screen or slide" | §9 item 1 |
| D-7 | Whether/how Reality Score, per-check scores, distance and accuracy values appear in the prototype without reading as measured | PRD requires a displayed score; Plan forbids implied measurement | J3, J7, J8, J12 — needs Person 3 claim-audit ruling |
| D-8 | Certificate share / hand-over mechanism from phone to laptop (offline) | Not specified; no cloud allowed | J8, J9 |
| D-9 | Post-result surveyor actions: retake / new capture | Not specified | J7, J8 |
| D-10 | Whether Checking shows each check's progress individually | Not specified | J6 |
| D-11 | Final authority on shared terminology (Person 1 vs Person 2) | Plan has two-way hand-off | P5 lock |

## 11. Source Traceability

| Journey element | PRD / Plan basis | Why it exists |
|---|---|---|
| J1 App open | Plan §3 | Journey entry |
| J2 Hold-still calibration | PRD FR-3, §12.1 r2 | Required at app startup |
| J3 Claimed site | PRD FR-2, §6.2.1 | Geofence compares against a claimed registered site (UI = D-4) |
| J3 GPS indicator | PRD FR-1 | Indicator shown before capture is allowed |
| J4 Camera-only entry | PRD FR-1, FR-9, §5 | Structurally prevents injected/gallery media |
| J5 3-s clip + pan prompt | PRD FR-1, §12.2 r3 | Defines capture; ensures motion signal |
| J6 Checking | PRD §1.3, FR-5; Plan §3, Day 3 | User sees the capture being checked |
| J7 Reality Score + band + reasons | PRD §3.1, FR-2, FR-5, §9 | Explainable single result |
| Verdict bands (3) | PRD FR-5 | Canonical verdict model |
| Check statuses | PRD FR-2, FR-3, FR-8, §7 | Per-check outcome shown in reasons |
| E3 GPS timeout | PRD FR-2, §12.1 r3 | Non-blocking with accuracy flagged |
| E4 LOW_CONFIDENCE | PRD FR-2, FR-3, §12.1 r1 | Uncertainty not shown as fraud |
| E5 UNAVAILABLE | PRD FR-8 | Result still produced from remaining checks |
| J8 Certificate | PRD FR-6, §7, §11.4; Plan §3 | Portable, tamper-evident proof |
| J8 Signing disclosure | PRD FR-6 | No hardware-attestation implication |
| J9 Hand-over | Plan §3 ("share"); PRD FR-7 | Connects surveyor to verifier (mechanism = D-8) |
| J10–J12 Verifier Desk | PRD FR-7, §4, §8.2; Plan Day 3 | Independent verification by second party |
| Limitation | PRD §1.4, §12.4; Plan §3, §9, Day 2 | Claim boundary |
| Prototype labelling | Plan §2 | Prohibition on implied measured results |
