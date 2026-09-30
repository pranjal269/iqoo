# prototype/person-2 — Technical & Architecture Lead

**Owner: Person 2 only.** Person 1 and Person 3 read but never edit these source files.

Expected contents (per the 5-Day Plan §5–6): architecture diagrams, certificate schema
mockup, illustrative technical visuals (FFT-plot concept, gyro-trace concept,
geofence-distance concept), technology labels — all stamped as proposed/illustrative,
never as measured or built.

## Day 1 status

Day 1 outputs are filed in `docs/` (shared area), not here, per the Plan's file list
for Person 2 Day 1 (`docs/architecture-concept.md`, `docs/event-boundary.md`):

- `docs/architecture-concept.md` — proposed pipeline, the three checks, fusion,
  signing, offline requirement, on-device-AI wording, iQOO/Office Kit roles
- `docs/event-boundary.md` — the event-boundary matrix (B-1…B-14) and the
  technical-assumptions list (T-1…T-13) for Person 3's claim-audit pass

## Day 1 handoff

- **To Person 1:** terminology in `docs/architecture-concept.md` matches Krishika's
  terminology lock (`prototype/person-1/day-1/p5-terminology-lock.md`). The status
  vocabulary decision (T-11 in `docs/event-boundary.md`) resolves D-2: all three
  checks use PASS/FAIL/LOW_CONFIDENCE/UNAVAILABLE, on every screen and on the
  certificate.
- **To Person 3:** the technical-assumptions list (`docs/event-boundary.md` §3) is
  ready for the claim-audit pass. Nothing in it should read as already validated —
  every row points to the event, not to this week.
- **Blockers:** none. `HANDOFF.md` / `CHANGELOG.md` exist on the `ishita` branch but
  not yet on `pranjal` as of this commit — this file stands in as the Day 1 handoff
  record until the integrator merges branches. No entry was added to `HANDOFF.md`
  directly, to avoid a merge conflict with Person 3's file.
- **Next (Day 2):** architecture diagram, certificate manifest mockup, three
  illustrative evidence visuals — each stamped "Conceptual illustration, not measured
  data" (or the certificate's "Illustrative — not a real signed output") directly on
  the image, per `docs/claim-audit-checklist.md` (Person 3, on the `ishita` branch).

## Explicitly not done here

No code, model file, captured sensor data, or working detection/signing/verification
logic exists in this folder or anywhere in this repo, in any language.
