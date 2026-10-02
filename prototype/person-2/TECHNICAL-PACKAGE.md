# PRAMAAN Technical Package (Day 2 · Phase 4; Day 3 additions)

Owner: Person 2 lane (Krishika, all lanes from Day 2) · Plan Day 2 P2 folders · Shown in the prototype under **Technical and evidence package** (`cd prototype/person-1 && npm run dev`).

Everything here is **conceptual or proposed**. Nothing runs, measures, signs or verifies anything.

| Folder | File | Contents | Stamp |
|---|---|---|---|
| `architecture/` | `ArchitectureDiagram.jsx` | Proposed event pipeline: capture → signal collection → three checks → available check results → fusion / Reality Score → verdict → certificate + signing, inside an on-device / offline boundary; hand-over; Verifier Desk on the laptop. Technology names (CameraX, SensorManager, OpenCV / FFT, Android Keystore) are labels only. Table of "in this prototype" vs "proposed for the event build" | "Proposed implementation for the event" |
| `certificate-mockup/` | `CertificateManifest.jsx` | JSON-style manifest with every PRD §7 field (version, captureId, timestamp, device model and androidVersion, location, media, per-check score / status / reason, fusion, signature). Every sample value carries an inline `// sample value, prototype interaction` | "Illustrative — not a real signed output" |
| `evidence-visuals/` | `EvidenceVisuals.jsx` | **The single authoritative set** of conceptual visuals: FFT magnitude plot, gyro vs optical-flow trace, geofence distance. Used by the Verifier Desk and the explainers | "Conceptual illustration, not measured data" (on each visual) |
| `evidence-visuals/` | `CheckExplainers.jsx` | What each check is designed to compare, with consistent vs inconsistent concept visuals side by side | as above |
| `technical-explainer/` | `technical-explainer.md` | Day 3: 150–250-word explainer for a non-technical judge, and where each pipeline step appears in the prototype | "Proposed implementation for the event" |
| `validation-plan/` | `validation-plan.md` | Day 3: template for how each part is built and checked during the event (PRD §11 build plan, referenced, not re-executed): what is built, what is checked, evidence to collect, empty result fields; and the "Known risks — addressed live during the event" slide (PRD §12; risks addressed live vs limits stated openly; none solved yet) | Template; nothing run or measured |

Sources: PRD §1.3, §5, §6, §7, §8, §12.3; `docs/architecture-concept.md`; `docs/event-boundary.md`.

Not shown anywhere: fusion weights, band cutoffs, thresholds, accuracy, latency, test or validation results. No data feeds the visuals; they are hand-drawn static SVG.

The components import the design system from `../person-1/design-system/` and are rendered by the app in `../person-1/`.
