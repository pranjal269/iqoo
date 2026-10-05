# Video Walkthrough — Recording-Ready Package

**Owner:** Person 3 lane (recording) · team (voice-over, upload) · **Created:** 2026-10-03 (Day 4 · Phase 4) · **Form field:** Video Walkthrough URL (optional, Plan field list)

## Status: VIDEO PENDING

No video has been recorded. No video file exists in this repo, and no Video Walkthrough URL exists.

| Dependency | Why it blocks recording | Register ID |
|---|---|---|
| Narration voice | The script is narrated; no team voice is available in this environment | TI-9 |
| Screen recorder | No screen-recording or encoding tool (e.g. ffmpeg) is installed on this machine | — |
| Prototype changes | Record against the current prototype (after the P2-B simulation fixes F1, F2); re-record if it changes after the freeze | — |
| Public upload + URL | A public action only the team can take; the URL must not be invented | — |
| Allowed length | The form's length limit is not known | TI-6 |

## Script

The authoritative script is `docs/video-script.md` (11 beats, about 3 min 20 s target). Its narration is unchanged from Day 3. The only Day 4 change is a swap of beats 10 and 11, so the video **ends on the limitation**.

## Shot list (exact prototype controls)

Run the real prototype: `cd prototype/person-1 && npm install && npm run dev`. Record the browser window at 1440 px wide. Keep the prototype-controls panel visible: it says the controls are "not part of the product".

| Beat | View / screen | Click to reach it |
|---|---|---|
| 1 Problem | Technical and evidence package → 4 Problem evidence | "Technical and evidence package", scroll to section 4 |
| 2 Concept | Clickable journey → SC-01 | "Clickable journey" (this resets the journey to SC-01) |
| 3 Capture | SC-02 → SC-03 → SC-04 → SC-05 | "Continue: the app has started" → "Continue: calibration is complete" → "Continue: a GPS fix is available" (optional: "Continue: GPS timed out (best-available fix)") → in-screen "Start 3-second clip" |
| 4 Checking | SC-06 | "Continue: the 3-second clip ends"; wait for the sample-result options |
| 5 Result | SC-07 V-LG, V-NR, V-LF | "Show sample result: Likely Genuine" → "Back" → "Show sample result: Needs Review" → "Back" → "Show sample result: Likely Fraudulent" |
| 6 Certificate | SC-08 | In-screen "View certificate" |
| 7 Hand-over | SC-09 | In-screen "Share certificate" |
| 8 Verifier Desk | SC-10 → SC-11 | "Continue: the certificate file reaches the Verifier Desk laptop" → in-screen "Open sample certificate" → "Verify signature" |
| 9 Evidence | SC-12 | In-screen "See evidence" |
| 10 Close (event build) | Technical and evidence package → 1 Proposed architecture | "Technical and evidence package" |
| 11 Limitation (final) | Deck slide 7, full screen | Open `submission/deck.pdf`, page 7 |

## Must stay visible and audible

- "Prototype interaction — simulated result" on every phone and laptop screen.
- "sample value, prototype interaction" next to every number. Narrate numbers as "sample" or leave them unread.
- "Illustrative — not a real signed output" on SC-08. "Concept screen: not working software" and "illustrative result" on SC-11 and SC-12.
- "Conceptual illustration, not measured data" on each evidence visual. "Proposed implementation for the event" on the architecture.
- Canonical names only: Motion Consistency · Geofence / Location Binding · FFT-based Moiré / Recapture Detection · PASS / FAIL / LOW_CONFIDENCE / UNAVAILABLE · Likely Genuine / Needs Review / Likely Fraudulent · Reality Score · Certificate · Verifier Desk.
- Capability lines in "designed to" / "will" form. No accuracy, latency, performance or test claims. The SC-06 pause is narrated as a simulated transition, not a processing time.
- The final words: **"PRAMAAN proves capture authenticity, not scene truthfulness."**

## After recording (team)

1. Watch the recording once against the checklist above; any missing stamp means a re-record.
2. Upload publicly and record the URL in `docs/submission-manifest.md` (never before it exists).
3. Log the video in `docs/claim-audit-log.md` (Phase 5).
