# Claim-Audit Log

**Owner:** Person 3 lane (Krishika, all lanes from Day 2) · **Started:** 2026-10-01 (Day 2 · Phase 5) · **Checklist:** `docs/claim-audit-checklist.md` (C-1 to C-13 + red-flag word scan)
One row per asset. Result: **PASS**, **PASS WITH NOTE** or **FAIL** (open violation with owner and fix-by).

## Method

1. Red-flag word scan (checklist regex) over `docs/` and all prototype source and docs, excluding `node_modules/` and `dist/`; every hit read in context.
2. Rendered-UI text scan of the running prototype (all three verdict branches, gallery, technical package) for forbidden terms, non-canonical sample labels, percentages and timings (Phases 2–4 QA).
3. Manual read of every Phase 5 sentence against C-1 to C-13 and the source it cites.

**Scan false positives (not violations):** "hardware-at*tested*" (required FR-6 wording) · "GPS accuracy" (PRD FR-1 wording, not a PRAMAAN performance claim) · negations such as "not tested", "nothing is … detected", "does not assert a benchmark" · the checklist's and evidence-base's own rule text · Anchor's verbatim public description ("on-device AI").

## Results

| Asset | Version | Result | Violations / notes | Owner | Fix-by |
|---|---|---|---|---|---|
| `docs/submission-draft.md` | Day 2 · Phase 5 | PASS | Two sentences corrected during drafting: "before it ever becomes a file someone could swap" (unsupported protection claim) → PRD §14.3 wording; "the tested screens" → "the screens used for tuning" (C-11). Items marked [TEAM INPUT] / [OPEN] are not claims | Krishika | — |
| `docs/evidence-narrative.md` | Day 2 · Phase 5 | PASS | Every sentence traces to `docs/evidence-base.md`; E1 in allegation language (C-6); E3 absent (C-5); CAG framed as test-check findings (C-4) | Krishika | — |
| `docs/submission-draft.md`, `docs/evidence-narrative.md` | Day 2 · Phase 5 re-audit (2026-10-02) | PASS | 10 wording fixes: present-tense capability in §4 → "designed to" / "will" (C-2); "Everything will be built live" contradicted the §10 pre-event disclosure → scoped to checks, signing, Verifier Desk; §10 put the laptop Verifier Desk "on the loaner iQOO 15"; §9 cited PRD §13.3 for verdict bands it does not cover; §11 "both are … systems" stated PRAMAAN as built; §12 limitations in present tense, and PRD §14.4 indoor-GPS geofence risk added; E1 geo-tagging line stated as fact and credited to OrissaPOST too → attributed to OmmCom only, allegation stated (C-6), in both files; one-line description now uses the canonical "verifiable as evidence"; C-13 note added | Krishika | — |
| `prototype/person-3/problem-evidence/ProblemEvidence.jsx` (rendered panel) | Day 2 · Phase 6 | PASS (after fix) | E1 line stated "photos … were never taken" as fact and credited it to OrissaPOST too; now attributed to OmmCom News, with the allegation stated (C-6), matching the Phase 5 re-audit | Krishika | — |
| `docs/evidence-base.md` line 80 (pitch one-liner) | Day 1 (P3) | **FAIL** (minor) | Same E1 wording stated as fact; source register, not shown in any submission asset or screen. Align with the attributed wording | Krishika (P3 lane) | Day 3 |
| Prototype, full rendered text (all screens, 1440 px and 390 px) | Day 2 · Phase 6 | PASS | Hits are negations, PRD FR-1 "GPS accuracy" wording and the E3 "could not be verified" note only. All five stamps and the limitation line render | Krishika | — |
| Prototype screens SC-01–SC-08, Verifier Desk | Phases 2–4 | PASS | Every screen stamped; every number labelled; no percentages, timings, weights, cutoffs or thresholds (rendered-text scans) | Krishika | — |
| Technical package (architecture, explainers, manifest, problem evidence) | Phase 4 | PASS | Architecture stamped "Proposed implementation for the event"; six visuals stamped on the image (C-9); manifest stamped; technology names "Proposed" (C-10); E3 figure never shown (C-5) | Krishika | — |
| `docs/architecture-concept.md` §6 | Day 1 (P2) | **FAIL** | "an offline pipeline removes a whole class of 'was this photo intercepted or altered in transit' questions": not in the PRD, and the certificate still travels from phone to laptop (HANDOFF D-8). Tamper-evidence comes from signing, not from being offline. Suggested fix: "keeps the capture pipeline independent of network connectivity" | Krishika (P2 lane) | Day 3 |
| `docs/architecture-concept.md` §4 | Day 1 (P2) | **FAIL** (factual) | "(all four checks, all three components)": there are three checks and four statuses. Suggested fix: "all four statuses, all three checks" | Krishika (P2 lane) | Day 3 |
| `docs/event-boundary.md` T-10 | Day 1 (P2) | **FAIL** (factual) | Says the demo-site simplification is disclosed in `architecture-concept.md` §4; §4 is Fusion and the file never mentions demo sites. It *is* disclosed in `docs/submission-draft.md` §12 | Krishika (P2 lane) | Day 3 |
| `docs/anchor-positioning-brief.md` §6 | Day 1 (P3) | **FAIL** | (a) Deck one-liner "…whether the picture is real": "real" can read as scene truthfulness (PRD §1.4). Suggested: "…whether the capture is genuine". (b) Stand-out draft "A correct GPS fix doesn't catch any of these": overclaims, since a location check can catch a capture at a different site. Superseded in `docs/submission-draft.md` §6 by "A correct location alone does not show whether an image was captured live or recaptured from a screen." (c) Calls PRAMAAN's object "the photo itself" (HANDOFF D-3: "the capture itself") | Krishika (P3 lane) | Day 3 |
| `prototype/person-1/day-1/primary-user-journey.md` §1 | Day 1 (P1) | PASS WITH NOTE | Product voice ("PRAMAAN checks the capture…") under the file's prototype-phase note; not a claim that anything is built | Krishika | — |
| `docs/architecture-concept.md` §6 (persona reason) | Day 1 (P2) | PASS WITH NOTE | "indoors, where connectivity is unreliable" is an interpretation, not PRD wording; not a performance claim | Krishika (P2 lane) | — |
| `docs/evidence-base.md`, `docs/rule-compliance-checklist.md`, `docs/claim-audit-checklist.md`, `docs/event-boundary.md` (other rows), `HANDOFF.md`, `prototype/person-2/README.md`, `TECHNICAL-PACKAGE.md`, Day 1 P1 package | Day 1–2 | PASS | Scan hits are rule text, negations or GPS-accuracy wording only | — | — |

## Open violations

7 items in 4 files (all FAIL rows above; the `evidence-base.md` item was added in Phase 6). None appears in any submission text or on any prototype screen; the submission draft uses corrected wording. Fix in the source files on Day 3 (Plan Day 3 P3 step 1: "log and fix any violation found").

## Not yet audited

Video script, deck and the final form fields (Day 3–4); final pass on Day 4 against the finished deck and video (Plan Day 4 P3 step 5).
