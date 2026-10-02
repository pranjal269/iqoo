# Video Walkthrough Script — SKELETON

**Owner:** Person 3 lane (Krishika, all lanes) · **Created:** 2026-10-03 (Day 3 · Phase 5) · **Status:** SKELETON for the optional "Video Walkthrough URL" form field. Not recorded (recording is Plan Day 4). Screen owner for review: Person 1 lane.
**Aligned with:** the clickable prototype as built on Day 3 (`prototype/person-1/`, view "Clickable journey"). Segment lengths are a recording plan for the video, not product timings.
**Rules:** every line in claim-audit form ("designed to" / "will"); no PRAMAAN numbers; sample values called samples; E1 as an allegation; limitation stated on its own.

| # | Story beat | Target length | On screen (actual screen IDs) | Narration (draft) | Must stay visible |
|---|---|---|---|---|---|
| 1 | Problem | ~20 s | "Technical and evidence package" view → 4 Problem evidence | "In MGNREGS the geo-tagged photo releases payment. The CAG's 2025 Karnataka audit found photos 'captured from existing photograph', a photo of a different shed, and the same photos reused across stages." | CAG report name and page numbers |
| 2 | PRAMAAN concept | ~15 s | "Clickable journey" → SC-01 App Open | "PRAMAAN is designed to make a field capture independently verifiable as evidence at the moment it is captured. This is a presentation-only prototype: nothing here captures, measures or signs anything, and every result is a labelled sample." | "Prototype interaction — simulated result" stamp; purpose line |
| 3 | Capture | ~25 s | SC-02 → SC-03 → SC-04 → SC-05 | "After a hold-still calibration, the app shows the claimed site and GPS accuracy, both samples. Capture is camera-only: a 3-second clip with a slow pan. There is no gallery upload." | Sample labels; "Camera view placeholder" note |
| 4 | Checking | ~15 s | SC-06 | "Three checks are designed to run: Motion Consistency, Geofence / Location Binding, and FFT-based Moiré / Recapture Detection. The pause here is a simulated transition, not a measured time." | Three check names |
| 5 | Result | ~35 s | SC-07 V-LG, then Back to SC-06 and SC-07 V-NR, then SC-07 V-LF | "A fixed, explainable rule will combine the checks into a Reality Score and one of three bands: Likely Genuine, Needs Review, Likely Fraudulent. These are sample results. Uncertainty, like coarse GPS, is designed to give LOW_CONFIDENCE, not a fraud verdict." | Sample labels; limitation line |
| 6 | Certificate | ~15 s | SC-08 | "The result will be sealed in a certificate, with app-level signing, not hardware-attested. In the prototype no key, hash or signature exists." | "Illustrative — not a real signed output" |
| 7 | Offline hand-over | ~10 s | SC-09 | "The certificate is one file, handed to the supervisor's laptop without a cloud service. The transfer method is chosen at the event." | "Nothing is sent in this prototype" |
| 8 | Verifier Desk | ~15 s | SC-10 Drop certificate → SC-11 Verify | "On the Verifier Desk, a supervisor will open the certificate and check its signature. This is a concept screen, not working software; the signature result is illustrative." | "Concept screen: not working software"; "illustrative result" |
| 9 | Evidence | ~20 s | SC-12 See evidence | "The desk is designed to show the verdict, each check's reason, and the evidence: an FFT magnitude plot, a gyro versus optical-flow trace and the geofence distance. These visuals are conceptual, not measured data." | "Conceptual illustration, not measured data" on each visual |
| 10 | Limitation | ~15 s | Limitation line on SC-12 | "PRAMAAN proves capture authenticity, not scene truthfulness. It cannot tell whether the work itself meets the scheme's criteria." | Limitation line on its own |
| 11 | Close (event build) | ~15 s | "Technical and evidence package" view → 1 Proposed architecture | "The checks, fusion, signing and the Verifier Desk will all be built during the event, on the iQOO 15 and a laptop." | "Proposed implementation for the event" stamp |

**Total target:** about 3 minutes 20 seconds. If the form needs it shorter, trim beat 5 (show one result plus the other two briefly) and beat 3 first.

**Open for Day 4:** record against the frozen prototype; confirm the length allowed by the form (not known); decide whether the GPS-timeout path (SC-04 V-TIMEOUT) is shown in beat 3.
