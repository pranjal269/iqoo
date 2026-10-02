# PRAMAAN Design System (Day 2 · Phase 2)

Owner: Person 1 lane (Krishika, all lanes from Day 2) · Stack: React + Vite, plain CSS (HANDOFF Day 2 · Phase 1, P1 Q5)

## Purpose

One visual language for every PRAMAAN prototype screen: phone frame, type, spacing, status tones, icons and reusable components. Presentation only.

## Files

| File | Contents |
|---|---|
| `tokens.css` | Type scale (title 22 / heading 17 / body 15 / support 13 / micro 11), 4px spacing scale, status tones, phone frame size (360 × 740) |
| `components.css` | Component styles |
| `copy.js` | Canonical wording from HANDOFF: stamps, limitation line, signing line, check names, verdict bands, statuses, "3-second clip" |
| `Icons.jsx` | Hand-drawn inline SVG: capture, checking, info, genuine, review, fraudulent, warning, location, seal, pan (phone + right arrow), still |
| `components.jsx` | Components below |

## Components

| Component | Notes |
|---|---|
| `PhoneFrame` | Every screen carries the stamp "Prototype interaction — simulated result" |
| `StatusCard` | Tones: `genuine`, `review`, `fraudulent` (the three verdict bands, D-1), `instruction`, `warning`. Title text always states the status |
| `ScoreBadge` | Reality Score, display only, always with the sample tag |
| `SampleTag` | "sample value, prototype interaction" (D-7), on every number |
| `StatusChip` | PASS / FAIL / LOW_CONFIDENCE / UNAVAILABLE (D-2 / T-11). LOW_CONFIDENCE and UNAVAILABLE use a neutral tone, never the FAIL tone (Day 1 A6) |
| `ReasonRow`, `ReasonList` | Check name + status + human-readable reason |
| `PrimaryButton` | No handlers. When disabled, a text reason is shown (Day 1 A4) |
| `LocationIndicator` | PRD FR-1 wording "…, accuracy: X"; accuracy always a sample |
| `CaptureInstruction` | Explicit text instruction (Day 1 A3) |
| `LimitationNotice` | "PRAMAAN proves capture authenticity, not scene truthfulness." (D-6) |
| `CertificateCard` | Sections of `[label, value, isSample]` fields; sample values carry the full sample label. Stamped "Illustrative — not a real signed output" + "App-level signing, not hardware-attested". No signature, key or hash |
| `Viewfinder` | Camera view placeholder, labelled "no camera access in the prototype" |
| `LaptopFrame` | Laptop-proportioned frame for the Verifier Desk concept (PRD FR-7), with the screen stamp (Phase 3) |
| `ConceptVisual` | Frame for a conceptual visual, stamped "Conceptual illustration, not measured data" on the visual (Phase 3) |

`PrimaryButton` takes an optional `onClick`, used only for navigation between hardcoded screens (Phase 3).

## Rules

- Status is never conveyed by colour alone; the text label carries the meaning (Day 1 A1, A2).
- Import wording from `copy.js`; don't retype canonical strings.
- The Plan's icon names "verified-checkmark" / "flagged-warning" map to `GenuineIcon` / `FraudulentIcon`. "Verified" and "Flagged" are not used as product terms (D-1).

## Prototype boundary

No component computes, measures, detects, scores or signs anything. Nothing accesses camera, microphone, location, motion sensors, cryptography or the network. All values are passed in as hardcoded, labelled prototype content.
