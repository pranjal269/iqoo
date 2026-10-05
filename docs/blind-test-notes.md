# Day 4 Validation Notes — P2-B Internal Blind-Review Simulation

**Owner:** Person 1 lane · **Created:** 2026-10-03 (Day 4) · **Register:** T1–T4 (`docs/day-4-register.md`)

> **External human review was not conducted. Validation uses an internal blind-review simulation, automated regression, viewport testing, visual inspection, and cross-asset claim auditing.**
>
> Owner decision, 2026-10-03: the Plan's external blind test (Day 4 P1 steps 1–2, 5) is replaced by the P2-B INTERNAL BLIND-REVIEW SIMULATION below. No outside person took part. Nothing in this file is a user quote, a participant observation or a usability statistic.

| Item | Status |
|---|---|
| **P2-B VALIDATION** | **COMPLETE — INTERNAL BLIND-REVIEW SIMULATION** (§1) |
| **P2-C HARDENING** | **COMPLETE** — regression passed after every fix (§4) |
| External human review | Not conducted, and not represented as completed |

---

## 1. P2-B Internal blind-review simulation — results

**Method.** The running prototype (`prototype/person-1`, Vite dev server) was driven by a headless-Chrome script at 390 px and 1440 px, starting from the first screen with no explanation beyond what the page itself shows. For each task the script recorded what the prototype displays and whether the next control is reachable; the result was then rated from that evidence.

**Ratings.** PASS = the prototype displays what the task needs, and the control is reachable · CONFUSING = the task can be completed, but the explanation it needs is not visible in the journey · BLOCKED = the task cannot be completed from what the prototype displays.

| # | Task | Result | Evidence (what the prototype displays / how it behaves) |
|---|---|---|---|
| 1 | Understand what PRAMAAN checks | **PASS** | SC-01 displays "PRAMAAN is designed to prove that a 3-second clip was genuinely captured by this phone, at a registered site, at the moment claimed." The page header states the prototype is presentation-only. SC-06 lists the three checks |
| 2 | Navigate the main capture journey | **PASS** | Every forward control is reachable at both widths. On screens with no in-screen button (SC-01, SC-02, SC-03, SC-05, SC-06, SC-09) the "Continue: …" control is in the first viewport (390 px: top 369 px; 1440 px: top 290 px). The panel names the in-screen button where one is needed ("Use Start 3-second clip in the screen to continue"). At 390 px, SC-04's in-screen "Start 3-second clip" is below the fold (top 1172 px) and is reached by scrolling the frame. Before the §3 fix, the 390 px controls sat below the frame, outside the first viewport |
| 3 | Understand the three checks | **CONFUSING** | SC-06 displays Motion Consistency, Geofence / Location Binding and FFT-based Moiré / Recapture Detection by name only; no description of what each compares is visible there. Each SC-07 reason describes the outcome in plain language ("Phone movement matches the movement seen in the clip."; "Captured 6.4 m from the claimed registered site."; "No screen-pattern signs in the clip."). The explanation of each check is in the "Technical and evidence package" view; the journey does not point to it |
| 4 | Understand available / unavailable checks | **PASS** | The Needs Review sample displays "Based on the two available checks; one check was UNAVAILABLE.", "This check could not run for this capture. It is not counted as a failure; the result uses the remaining checks." and, for LOW_CONFIDENCE, "This is uncertainty, not a sign of fraud." These appear only in the Needs Review sample |
| 5 | Understand the three result bands | **PASS** | Each band displays a one-line meaning: Likely Genuine "This capture shows the characteristics of a genuine on-site capture."; Needs Review "This capture routes to human follow-up."; Likely Fraudulent "This capture could not be confirmed as a genuine on-site capture." No score scale or band ranges are visible (kept off-screen by the Day 2 decision), so how the Reality Score maps to a band is not shown |
| 6 | Distinguish sample / prototype values from real measurements | **PASS** | "Prototype interaction — simulated result" on every frame; the Reality Score and every data value carry "sample value, prototype interaction"; SC-08 shows "Illustrative — not a real signed output" and "none: placeholder only" for signature and key; SC-11 tags "Signature valid" as "illustrative result"; SC-12 shows "Conceptual illustration, not measured data" on 3 of 3 visuals |
| 7 | Understand the Certificate | **PASS** | SC-08 displays "For independent checking by a second party.", the verdict band, the Reality Score, each check's status and reason, capture, location and signature fields, and "App-level signing, not hardware-attested" |
| 8 | Understand the Verifier Desk | **PASS** | SC-09 displays "The certificate goes to the supervisor's Verifier Desk laptop."; the frame changes from phone to laptop; SC-10 to SC-12 display "Concept screen: not working software", "The prototype has no file input", and three numbered stages: drop, verify, see evidence |
| 9 | Understand the limitation | **CONFUSING** | "PRAMAAN proves capture authenticity, not scene truthfulness." is displayed, exactly, on SC-01, every SC-07 variant, SC-08 and every Verifier Desk stage (51 exact occurrences across the rendered views; no variants). No text in the journey explains "scene truthfulness" (that the checks cannot tell whether the work shown meets the scheme's criteria); that explanation is in deck slide 7, the written submission and the reviewer walkthrough |

**Summary:** 7 PASS · 2 CONFUSING (tasks 3 and 9) · 0 BLOCKED.

**Disposition of CONFUSING items.** Neither blocks a task; the canonical text is displayed in both cases. A fix would mean new explanatory copy on frozen Day 3 screens, which this phase does not add. Both are covered in the submission material: the reviewer walkthrough §4 and §12, deck slides 4 and 7, and the written Description. They are recorded as known, accepted risks.

## 2. Earlier internal UX risk audit (same day, before §1)

A first structured pass rated risks HIGH / MEDIUM / LOW for the same nine tasks:

- **HIGH:** 2.1, the 390 px controls placement. Fixed (§3).
- **MEDIUM:** 3.1, check descriptions only in the technical view; 5.1, no score scale; 9.1, "scene truthfulness" not explained.
- **LOW:** seven items, covering the two control types, the 1.6 s SC-06 transition, the disabled button on SC-03, raw status tokens, a few untagged spec values on SC-08, the long certificate, and the Verifier Desk first named on SC-08 / SC-09.

§1 supersedes this pass as the P2-B record.

## 3. Fixes (minimal, CSS only)

| # | Found by | Issue | Change | File |
|---|---|---|---|---|
| F1 | §2 risk audit (HIGH) | At ≤ 720 px the prototype-controls panel wrapped below the phone frame, so screens without an in-screen button showed no visible way forward (controls top 1063 px, viewport 844 px) | Controls panel placed above the frame at ≤ 720 px (`order: -1; width: 100%`). After: controls top 273 px | `prototype/person-1/clickable-prototype/journey.css` |
| F2 | Day 5 UX QA (register §4 cosmetic item), confirmed in the SC-08 screenshot | On SC-08 the label "Geofence / Location Binding" wrapped with "/" alone on a line | Certificate field labels get `min-width: 6.5em`, so "Geofence /" stays on one line (checked visually at 1440 px and 390 px) | `prototype/person-1/design-system/components.css` |

Neither fix changes product behaviour, copy, terminology, sample labels or stamps.

## 4. P2-C hardening — regression results

Headless Chrome against the dev server. The full harness was run after F1 (twice) and again after F2; every run gave the same results. Actual results only.

| Check | 1440 px | 390 px |
|---|---|---|
| Paths SC-01 → SC-12: Likely Genuine / Needs Review / Likely Fraudulent × GPS fix / GPS timeout | 6 / 6 | 6 / 6 |
| SC-07 shows the chosen verdict | Yes, every path | Yes |
| GPS timeout (SC-04 V-TIMEOUT) | Reached on 3 paths | Same |
| Back from SC-12 | 12 steps, ends on SC-01, every path | Same |
| Restart (from SC-07) | Returns to SC-01 | Same |
| Certificate (SC-08), hand-over (SC-09), Verifier Desk (SC-10 → SC-12) | Reached on every path; SC-12 shows the verdict, "Concept screen: not working software", "illustrative result", "Conceptual illustration, not measured data" and the limitation | Same |
| Steps driven / failed clicks | 154 / 0 | 154 / 0 |
| Console errors or warnings | 0 | 0 |
| External requests | 0 | 0 |
| URL changes | None (one URL: the start page) | None |
| Horizontal overflow | None | None |
| Screen stamp on every frame | Present | Present |
| Numbers without a sample label | None on any data screen* | Same |

\* The harness also flags SC-10 on every path (12 times per width). That screen's only numbers are its screen ID and the stage index "1", neither of which is data. It also flags one "stamp missing" after switching to the technical-package view, which has no phone frame. Both are harness artifacts, checked against the rendered text.

**Rendered-text terminology scan** (1440 px, 80 view states: all 6 journey paths, the gallery and the technical package):
- All canonical terms are present: Motion Consistency, Geofence / Location Binding, FFT-based Moiré / Recapture Detection, PASS, FAIL, LOW_CONFIDENCE, UNAVAILABLE, Likely Genuine, Needs Review, Likely Fraudulent, Reality Score, Certificate, Verifier Desk.
- The exact limitation appears 51 times, with 0 non-exact variants.
- 0 hits for non-canonical or red-flag terms: Verified, Flagged, OK, other check-name variants, percentages, millisecond timings, "detected", "validated", "tested", "guarantee", "tamper-proof", 0.97.

**Build and boundary:**
- `npm run build` passes.
- The code scan finds no camera, geolocation, motion-sensor, crypto, fetch / XHR / WebSocket, file-input, storage, JS-timer or URL-change API.

During development of the harness, one early run aborted with a "detached frame" (page reload). The cause was not determined, and it did not recur in any later run.

**Final screenshots:** 15 frame-only PNGs, re-captured after F2 and verified by a second independent capture: 14 byte-identical; SC-06 differs only in its CSS pulse animation (`prototype/person-1/screenshots-final/README.md`).
