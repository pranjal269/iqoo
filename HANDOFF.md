# HANDOFF.md — single source of truth

Decisions, assumptions, blockers and next actions for all three people.
**Rule:** a shared decision goes here *before* anyone consumes it. Renaming a folder or shared component also goes here first.
Each entry must list completed work, changed files, decisions, blockers and the next dependency. "Done" on its own is not an entry (plan §10).

---

## Ownership (plan §5–6)

| Area | Owner | Others may |
|---|---|---|
| `prototype/person-1/`, `docs/ux-requirements.md`, `docs/state-map.md` | Person 1 — Product & UX | read only |
| `prototype/person-2/`, `docs/architecture-concept.md`, `docs/event-boundary.md` | Person 2 — Technical & Architecture | read only |
| `prototype/person-3/`, `docs/evidence-base.md`, `docs/rule-compliance-checklist.md`, `docs/claim-audit-checklist.md`, `docs/anchor-positioning-brief.md`, later `docs/claim-audit-log.md`, `docs/traceability-matrix.md`, `docs/submission-draft.md`, `docs/video-script.md` | Person 3 — Evidence, Positioning & Integration | read only |
| `prototype/integration/` | That day's integrator, during the checkpoint only | — |
| `assets/` | Everyone, **add-only** | never overwrite |
| `submission/` | Person 3 (packaging); P1/P2 drop FINAL exports on Day 5 | — |
| `HANDOFF.md` | Everyone appends; nobody rewrites another person's entry | — |
| `CHANGELOG.md` | That day's integrator | — |

Names: Person 1 = Krishika Sureka · Person 2 = Pranjal Agarwal · Person 3 = Ishita Singh (from Day 1 commit authors).
**From Day 2 (2026-10-01), Krishika executes all three lanes.** The table above remains the file map; see the Day 2 · Phase 1 entry.

## Integrator rota (proposal, to confirm at the Day 1 checkpoint)
Day 1: P3 · Day 2: P1 · Day 3: P2 · Day 4: P3 · Day 5: P3 (submits)
Day 2 actual: P1 (Krishika), integrating on branch `krishika`. See the Day 2 · Phase 1 entry.

## Shared terminology — LOCKED Day 2 · Phase 1 (2026-10-01)
Originally proposed by P3 from plan §3/Day 1, with the rule "P1's state-map.md is canonical for state names… P1's win and this table gets updated". Updated per that rule to the P1 Day 1 terminology lock (`prototype/person-1/day-1/p5-terminology-lock.md`), which P2 already uses. The superseded Day 1 wording is recorded in the Day 2 · Phase 1 entry.

| Term | Canonical form |
|---|---|
| States (phone) | App Open → Hold-Still Calibration → Capture Preparation → Ready to Capture → Capturing → Checking → Result → Certificate (P1 S1–S8) |
| States (hand-over / verifier) | Hand-over → Verifier Desk: Open Certificate → Signature Check → Verdict & Evidence Review (P1 S9–S12) |
| Verdict bands | **Likely Genuine** · **Needs Review** · **Likely Fraudulent** (PRD FR-5). "Verified" / "Flagged" are not used as product terms |
| Three checks | **Motion Consistency** · **Geofence / Location Binding** · **FFT-based Moiré / Recapture Detection** (PRD §1.3) |
| Check statuses | **PASS** · **FAIL** · **LOW_CONFIDENCE** · **UNAVAILABLE**, for all three checks (P2 T-11, adopted Day 2) |
| Fusion | The step that combines the available checks. No single check decides the verdict; an UNAVAILABLE check is excluded and the result is based on the remaining checks |
| Reality Score | The fused score shown to the user (labelled sample values only in the prototype) |
| Capture | **3-second clip** (PRD FR-1, "3-second video clip"); neutral noun "capture". Camera-only, no gallery upload |
| Certificate | The signed manifest attached to the media (mockup only in the prototype); the data inside it is the "manifest" (PRD §7) |
| Signing | **"App-level signing, not hardware-attested"** (PRD FR-6). Hardware attestation is v2 roadmap only |
| Verifier Desk | The second-party laptop surface that checks a certificate independently (PRD FR-7) |
| Limitation line | "PRAMAAN proves capture authenticity, not scene truthfulness." |

---

## Open questions

| # | Question | Raised | Owner | Needed by |
|---|---|---|---|---|
| Q1 | **Where is the source of the "CAG ₹0.97-crore duplication finding"?** It couldn't be found on 2026-09-26 (see evidence-base.md E3). Can whoever did the earlier research share the exact link and page? Until then it's banned from assets and replaced by CAG Karnataka 13/2025 (E2) | P3, D1 | whole team | Day 2 standup |
| Q2 | The plan says the Odisha case came from "a UNI News report". The UNI article found is a different ₹9.24-cr R&B case. Was a different UNI link used? Current citations: OmmCom + OrissaPOST | P3, D1 | whole team | Day 2 |
| Q3 | Prior builds & hackathons: real content needed from each member for the form field | P3, D1 | all | Day 2 |
| Q4 | Hard cutoff date/time for idea-screening submission, to confirm on the Reskilll platform (plan §12.4) | P3, D1 | P3 | Day 2 |
| Q5 | Prototype tool: Figma or equivalent? Does it support page-level ownership? | P3, D1 | P1 | Day 1 checkpoint |
| Q6 | Is this folder going to a shared git remote? It's a local git repo today, not pushed | P3, D1 | whole team | Day 1 checkpoint |

**Status at Day 2 · Phase 1 (2026-10-01):** Q5 answered (React + Vite, presentation-only; see Day 2 entry, P1 Q5) · Q6 answered (remote `github.com/pranjal269/iqoo`; branches `main`, `krishika`, `ishita`, `pranjal`) · Q1, Q2 still open (worked around: E2, OmmCom/OrissaPOST) · Q3 still open (needs real input from Ishita and Pranjal; must not be invented) · Q4 still open.

---

## Entries

### 2026-09-26 · Day 1 · Person 3
**Completed**
- Evidence base filed with sources and verification status → `docs/evidence-base.md`
  - E1 Odisha Kandhamal ₹42-lakh MGNREGS engineers case: VERIFIED (OmmCom, OrissaPOST)
  - E2 CAG Karnataka Report No. 13 of 2025: VERIFIED, with verbatim quotes on recaptured, reused and wrong-site geotagged photos. **This is the strongest fit for PRAMAAN's recapture check**
  - E3 CAG ₹0.97 cr: **UNVERIFIED, banned** (Q1)
- Rule-compliance daily checklist → `docs/rule-compliance-checklist.md`
- Claim-audit checklist (13 rules, red-flag word scan, exact stamp wording) → `docs/claim-audit-checklist.md`
- Anchor positioning brief draft (known / unknown / overlap / distinction / uncertainty / draft copy) → `docs/anchor-positioning-brief.md`
- Folder structure per plan §6, with an ownership README in each area; HANDOFF.md, CHANGELOG.md, local git repo

**Decisions (P3 lane; flag at checkpoint if you disagree)**
- D1. E2 replaces E3 in all pitch material until E3 is verified
- D2. Lead the differentiation with **recapture + certificate**, not geofencing, because location is where we overlap with Anchor
- D3. Odisha case described as "arrested / alleged". Work years are not quoted (sources conflict)
- D4. Exact stamp wording fixed in claim-audit-checklist.md so all three use identical labels

**Blockers:** Q1, Q2 (evidence provenance). Neither blocks Day 2 work, because E2 covers the gap.

**Next dependency**
- → P1 and P2: apply `rule-compliance-checklist.md` and `claim-audit-checklist.md` to your Day 2 work. Use the exact stamp wording
- → P1: confirm state names at the checkpoint, and use the limitation line from the terminology table
- → P2: send your technical-assumptions list to P3 for the claim-audit (plan Day 1, P2 step 5)
- → P3 (Day 2): evidence narrative, submission draft (title, description, stand-out), claim-audit of Day 1 docs

---

### 2026-10-01 · Day 2 · Phase 1 (Entry & Decision Lock) · Krishika (all three lanes)

ID note: "P1 D-n", "P2-Qn", "P3-Qn", "P4-Fn" are Person 1's Day 1 decision IDs (`prototype/person-1/day-1/`). "P3 D1–D4" are Person 3's decisions in the entry above. "T-n" / "B-n" are Person 2's (`docs/event-boundary.md`).

**Completed**
- Day 1 inputs confirmed present on `krishika`: P1 package (`prototype/person-1/day-1/`, 9 files), P2 `docs/architecture-concept.md`, `docs/event-boundary.md`, `prototype/person-2/README.md`, P3 four `docs/` files, `prototype/person-3/README.md`, this file, `CHANGELOG.md`. Merged files are byte-identical to their source branches.
- Role consolidation, integration workflow, Day 2 decisions, screen scope and terminology recorded (this entry and the tables above).

**Changed files:** `HANDOFF.md` (names line, rota note, terminology table updated per its own rule, open-question status line, this entry) · `CHANGELOG.md` (Day 1 close-out / Day 2 transition entry). Nothing else.

**Workstream ownership and integration (workflow decision, not a scope change)**
- Krishika Sureka executes all three Day 2 lanes: Person 1 (UX / screens / design system), Person 2 (architecture / technical visuals), Person 3 (evidence / submission).
- Day 1 branches were merged into `krishika` (merge `e6c45d0`: `origin/ishita` `839a6d8` + `origin/pranjal` `4fb47a2` on top of `35639af`).
- `krishika` is the temporary Day 2 integrated working branch. Day 2 is built, audited, committed and pushed there.
- Final integration into `main` is intentionally deferred. `main` stays at `35639af` until then.
- Prototype scope, the 5-Day Plan and the PRD are unchanged by this arrangement.

**Superseded Day 1 terminology (kept for history):** States were `Ready → Capturing → Checking → Verified / Flagged → Certificate → Verifier Desk`; checks were "Motion consistency · Location binding · Recapture detection (screen/moiré)". Replaced by the locked table above.

**Decisions**

| Decision | Source evidence | Resolution | Day 2 impact |
|---|---|---|---|
| P1 D-1 Verdict model | PRD FR-5; P1 `state-definition.md` S7; P2 `event-boundary.md` T-4; Plan Day 1/Day 2 "verified / flagged" | **Resolved.** The three PRD bands (Likely Genuine · Needs Review · Likely Fraudulent) are canonical on screens, architecture, certificate, evidence and submission. "Verified" / "Flagged" are retired as product terms. The Plan's "verified / flagged" core screens are delivered as SC-07's three variants. The Plan's "verified-checkmark" / "flagged-warning" are icon names only; every verdict is also stated in text (P1 A1) | Phases 2–5 |
| P1 D-2 / T-11 Check statuses | PRD FR-2 (PASS/FAIL/LOW_CONFIDENCE, Geofence), FR-3 (LOW_CONFIDENCE, Motion), FR-8 (UNAVAILABLE), §7 example "OK"; P2 T-11 | **Resolved by owner decision (2026-10-01): adopt T-11.** PASS / FAIL / LOW_CONFIDENCE / UNAVAILABLE for all three checks, on screens and the certificate. "OK" is not used. Recorded caveat: extending PASS / FAIL to Motion Consistency and FFT-based Moiré / Recapture Detection goes beyond PRD FR-3/FR-4 wording; it is a prototype vocabulary decision, re-confirmed at the event | Phases 2, 3, 4B |
| P1 D-6 Limitation placement | Plan §3, §9 ("own screen or slide"), Day 2 P1 step 6 ("where a reviewer can't miss it"); P3 claim-audit C-8 | **Resolved (C-8).** An on-screen limitation line on every SC-07 variant, plus a dedicated slide in the Day 4 deck. No separate in-prototype limitation screen (SC-L) is built. Wording exactly: "PRAMAAN proves capture authenticity, not scene truthfulness." Day 3 certificate / Verifier Desk screens must also not read as scene truth; their line placement is decided on Day 3 | Phases 2, 3; Day 3–4 |
| P1 D-7 / P2 B-4 Numbers on screens | PRD FR-2, FR-5, §7; P3 claim-audit C-1, C-3; P1 VRD-09; P2 B-4 | **Resolved by owner decision: labelled samples, no weights.** Reality Score, per-check scores, geofence distance and GPS accuracy appear only as fixed sample values, each labelled "sample value, prototype interaction" (C-3). PRD fusion weights and band cutoffs never appear on screens. They may appear only on the Phase 4 architecture diagram, labelled as PRD defaults to be tuned at the event. Sample values are authored illustrations placed inside the band they illustrate; the Likely Genuine sample may reuse the PRD §7 example values. None is a result | Phases 2, 3, 4A, 4B |
| P1 Q5 (P3 Q5) Prototype tool | Plan §6 ("Figma or equivalent"); P3 rule-compliance A1, A4, A6, A7, C1, D1 | **Resolved by owner decision: React + Vite with plain CSS and hardcoded prototype states, presentation-only.** Conditions below | Phases 2, 3; Day 3 linking |
| P1 D-3 Capture wording | PRD FR-1 "3-second video clip"; PRD §1.1, §2 and P3 docs "photo" | **Resolved.** PRAMAAN's own capture is always a **"3-second clip"** (neutral noun "capture"); UI and product copy never call it a "photo". "Geo-tagged photo(graph)s" stays correct only when describing existing scheme practice and evidence (E1, E2), as those sources say | Phases 2, 3, 5 |
| P1 D-4 Claimed site | PRD FR-2 ("the claimed site"), §6.2.1 (3–5 hardcoded demo sites), §7 `registeredSiteId` | **Resolved by owner decision: display-only sample.** SC-03 shows the claimed registered site read-only, labelled as a sample value. How a site is chosen stays open (Day 3, with linking) | Phase 3 (SC-03) |
| P1 D-10 Per-check progress | P1 SC-06, G2, CHK-03; Plan §9, Day 3 P1 step 4 | **Resolved.** SC-06 shows one non-quantitative "checking" state listing the three canonical check names. No per-check progress or completion order, no percentages, no durations, no timers | Phase 3 (SC-06) |
| P1 P3-Q1 First screen | Plan §9 ("purpose within the first screen"); P3 rule-compliance Day 5 check (prototype labels on the first screen); P1 S1 | **Resolved.** SC-01 is the prototype's first screen. It carries the screen stamp and one purpose line taken from the PRD §1.1 one-line description, in claim-audit C-2 form ("designed to…"), plus S1's "starting; calibration next". No new product message | Phases 2, 3 (SC-01) |
| P1 P4-F2 3-second duration | PRD FR-1; P1 G2; D-3 above | **Resolved.** SC-05 names the capture a "3-second clip" (a capture specification, not a measurement). No countdown, timer, progress bar or elapsed time | Phase 3 (SC-05) |
| Headline-check emphasis | PRD §1.3 (Geofence = "headline check", built first); P2 `architecture-concept.md` §3; P3 D2 (lead with recapture + certificate) | **Resolved by scope; no conflict in substance.** Architecture unchanged: PRD check numbering and build order. Screens list the checks in PRD order (Motion Consistency, Geofence / Location Binding, FFT-based Moiré / Recapture Detection). Positioning and submission lead with recapture + certificate (P3 D2). No copy may present any single check as deciding the verdict | Phases 3, 4A, 5 |
| P1 D-11 Naming authority | Plan Day 1 P1 handoff; P3 terminology rule; single owner from Day 2 | **Resolved:** one owner, terminology table above | — |
| P1 P4-F1 Single Verifier Desk concept screen | Plan §3, Day 3 P1 step 3, §11; P1 P5 R4 | **Adopted as source-resolved** (one concept screen, three stages). Built Day 3 | Day 3 |

**P1 Q5: React + Vite boundary conditions (binding for every Day 2–3 prototype file)**
- Lives in `prototype/person-1/` only. Screens and components go to the Plan's paths `prototype/person-1/design-system/` and `prototype/person-1/core-screens/`; project config is set up in Phase 2 inside `prototype/person-1/`. `day-1/` is not touched. `node_modules/` and build output are never committed.
- Allowed: static components, plain CSS, hardcoded state fixtures (every value labelled per D-7), a simple way to display a chosen state for review, and (Day 3) plain navigation between screens.
- Forbidden: any code that computes a Reality Score, verdict, check status, distance, weight or threshold; timers or animations presented as processing time or progress; browser camera / microphone (`getUserMedia` / MediaDevices), Geolocation, DeviceMotion / DeviceOrientation or Generic Sensor APIs; Web Crypto or any hashing / signing; FFT, image-processing or ML libraries (e.g. OpenCV.js); network calls or backends; storing captures.
- Dependencies limited to React, React DOM, Vite and the Vite React plugin. Each is recorded in `docs/attributions.md` on first use (rule-compliance C1); any further dependency goes in this file first.
- Disclosure: this web prototype is a presentation surface only. The event product is the Android app (PRD §8.2, Kotlin / Jetpack Compose), built during the event window; no prototype code is carried into it (playbook R1; rule-compliance A7).
- Phone-first: every screen renders in a phone frame (rule-compliance D1).

**Canonical stamps** (P3 claim-audit "Mandatory stamps"; rule-compliance B1 is met by the full screen stamp)
- Screens: "Prototype interaction — simulated result"
- Sample numbers: "sample value, prototype interaction"
- Technical visuals: "Conceptual illustration, not measured data"
- Architecture: "Proposed implementation for the event"
- Certificate: "Illustrative — not a real signed output"

**Day 2 screen scope** (canonical: `state-definition.md`, `state-screen-requirements.md`)

| Screen | Day 2 |
|---|---|
| SC-01 App Open | In scope, standalone |
| SC-02 Hold-Still Calibration | In scope, standalone |
| SC-03 Capture Preparation | In scope (claimed site display-only sample, D-4) |
| SC-04 Ready to Capture | In scope: V-NORMAL. V-TIMEOUT deferred to Day 3 (P2-Q1 open) |
| SC-05 Capturing | In scope |
| SC-06 Checking | In scope (non-quantitative, D-10) |
| SC-07 Result | In scope: V-LG, V-NR, V-LF, each with the limitation line (D-6) |

SC-01 and SC-04 are separate screens; the Plan's "ready/idle" is SC-04.
**Deferred to Day 3:** certificate detail (SC-08), hand-over (SC-09, conditional), Verifier Desk concept screen (SC-10–SC-12), interactive linking, SC-04 V-TIMEOUT, retake / new capture (P1 D-9), back / exit (P2-Q4), P1 D-5, D-8, P2-Q2, P2-Q3, P2-Q5, P3-Q2 (answered by the Phase 4B certificate mockup).

**Blockers:** none for Phase 2.

**Carry-forward (not decided here)**
- Claim-audit items for Phase 5D: P2 `architecture-concept.md` §6 "altered in transit" (unsupported), §4 "all four checks", `event-boundary.md` T-10 wrong cross-reference; P3 `anchor-positioning-brief.md` "whether the picture is real"; P1 journey §1 product voice. Log in `docs/claim-audit-log.md`.
- `docs/attributions.md` created on first third-party use (Phase 2).
- Plan Day 1 files `docs/ux-requirements.md`, `docs/state-map.md` still not filed (CHANGELOG "Pending from P1"). Not Day 2 scope.
- Open: Q1, Q2, Q3 (ask Ishita and Pranjal for prior builds), Q4; E3 (₹0.97 cr) stays banned.

**Next dependency**
- → Phase 2: design system in React + Vite under the Q5 conditions, applying D-1, D-2, D-3, D-6, D-7 and the canonical stamps.
- → Phase 3: SC-01–SC-07 per the scope table.
- → Phases 4–5: use the locked terminology; weights only on the architecture diagram (D-7).

---

### 2026-10-01 · Day 2 · Phase 3 (Clickable prototype + Certificate + Verifier Desk) · Krishika (all lanes)

**Scope change (owner instruction, 2026-10-01):** the Phase 1 entry deferred SC-08, the Verifier Desk concept and linking to Day 3. They were pulled forward into Day 2 Phase 3. This is schedule only; the prototype boundary is unchanged.

**Completed**
- Clickable journey SC-01 → … → SC-07 → SC-08 → Verifier Desk concept, all three verdict branches, in `prototype/person-1/clickable-prototype/` (Plan Day 3 path). React state is used for navigation only.
- SC-08 Certificate (PRD §7 manifest fields) and the Verifier Desk concept (PRD FR-7 content), both illustrative.
- Phase 2 carry-forward fixes: gallery CSS scoped; certificate sample label; info icon; left-to-right pan icon.

**Changed files:** `prototype/person-1/` (`App.jsx`, `main.jsx`, `ReviewGallery.jsx`, `gallery.css`, `clickable-prototype/*`, `design-system/components.jsx|css`, `design-system/Icons.jsx`, `design-system/copy.js`, `design-system/README.md`, `core-screens/SC04ReadyToCapture.jsx`, `SC06Checking.jsx`, `SC07Result.jsx`, `fixtures.js`, `README.md`, `STATUS.md`), this file.

**Decisions**

| Decision | Resolution |
|---|---|
| P1 D-5 Laptop surface | The Verifier Desk is shown in a laptop-proportioned frame beside the phone journey (PRD FR-7 "laptop application") |
| P4-F1 / P2-Q3 / P2-Q5 | One Verifier Desk concept screen shows its three stages together (1 certificate opened, 2 signature check, 3 verdict and evidence). No separate empty state and no step-by-step transition |
| P3-Q2 Certificate fields | SC-08 shows the PRD §7 manifest fields: verdict, Reality Score, check statuses and reasons, capture ID, timestamp, device, media, media hash, site, coordinates, accuracy, distance, signature algorithm, signature, public key. Hash, signature and key read "none"; sample values carry the sample label |
| Automatic steps | SC-01, SC-02, SC-03 and SC-05 advance through a labelled prototype control naming the simulated event; no timers |
| Showing the three verdicts | At SC-06 the reviewer chooses which sample result to show; the prototype makes no decision |
| Per-check scores | Shown on the Verifier Desk only (PRD FR-7), as labelled samples; the Likely Genuine sample uses PRD §7 values |
| Signature check | Shown as "Signature valid", labelled an illustrative result, with the statement that no signature exists in the prototype |
| Evidence visuals | Hand-drawn static SVG concepts stamped "Conceptual illustration, not measured data"; no data behind them. The Phase 4 package may replace them |

**Still open:** D-8 (transfer mechanism; the prototype jumps straight to the Verifier Desk and says so) · P2-Q2 (no hand-over screen) · D-9 retake and P2-Q4 back / exit as product features (Back and Restart exist only as prototype controls) · P2-Q1 (SC-04 V-TIMEOUT).

**Blockers:** none.

**Next dependency**
- → Phase 4: architecture diagram, certificate manifest mockup and evidence visuals should match SC-08's fields and the Verifier Desk's three evidence types, or replace `ConceptVisuals.jsx`.

---

### 2026-10-01 · Day 2 · Phase 4 (Technical visual + evidence package) · Krishika (all lanes)

**Completed**
- Architecture diagram, certificate manifest mockup and evidence visuals in the Plan's Person 2 folders (`prototype/person-2/architecture/`, `certificate-mockup/`, `evidence-visuals/`); problem-evidence panel in `prototype/person-3/problem-evidence/`. Shown in the app under "Technical and evidence package".
- SC-08 now shows every PRD §7 field (added manifest version, Android version, per-check scores).
- Phase 3 audit carry-forward fixed: the Verifier Desk stage 1 line now uses the canonical sample label.

**Changed files:** new `prototype/person-2/architecture/ArchitectureDiagram.jsx`, `certificate-mockup/CertificateManifest.jsx`, `evidence-visuals/EvidenceVisuals.jsx`, `evidence-visuals/CheckExplainers.jsx`, `TECHNICAL-PACKAGE.md`; new `prototype/person-3/problem-evidence/ProblemEvidence.jsx`, `README.md`; new `prototype/person-1/TechnicalPackage.jsx`, `technical-package.css`; changed `prototype/person-1/App.jsx`, `main.jsx`, `vite.config.js`, `clickable-prototype/SC08Certificate.jsx`, `clickable-prototype/VerifierDesk.jsx`, `clickable-prototype/README.md`, `core-screens/fixtures.js`, `core-screens/STATUS.md`; **removed** `prototype/person-1/clickable-prototype/ConceptVisuals.jsx`. `prototype/person-2/README.md` (Pranjal's Day 1 file) is unchanged.

**Decisions**

| Decision | Resolution |
|---|---|
| Evidence-visual ownership | One authoritative set in `prototype/person-2/evidence-visuals/EvidenceVisuals.jsx`. The Phase 3 copy in Person 1's folder was moved there and removed; the Verifier Desk imports it |
| Cross-folder imports | The Vite app in `prototype/person-1/` imports the Person 2 / Person 3 components (`resolve.dedupe` for React, `server.fs.allow: ['..']`). No new dependencies |
| Fusion weights on the architecture diagram | **Omitted.** Phase 1 D-7 allowed them there, labelled as PRD defaults; the Phase 4 instruction not to show weights is the stricter rule |
| Signing zone | Included ("Certificate + signing", Android Keystore, app-level, not hardware-attested), per Plan Day 2 P2 step 1 |
| E3 | Never shown, not even as a figure in a "not used" note (claim-audit C-5). The panel says only that one unverified figure is excluded |
| "Photo" in the evidence panel | Kept in the CAG's own quotes and the E1 description (HANDOFF D-3 permits it for scheme evidence) |
| Geofence "away" example | The explainer uses a 140 m sample distance for the "away from the claimed site" concept; no threshold or boundary is drawn |

**Blockers:** none.

**Next dependency**
- → Phase 5: written package (evidence narrative, submission draft, claim audit) must reuse the E2 / E1 framing above and the locked terminology.
- → Phase 6: CHANGELOG entry for Phases 2–4 (not yet written).

---

### 2026-10-01 · Day 2 · Phase 5 (Evidence, positioning and submission package) · Krishika (all lanes)

**Completed**
- `docs/evidence-narrative.md`: E2 and E1 in 3–4 sourced sentences each, evidence → design mapping with honest limits, pitch lines (Plan Day 2 P3 step 1).
- `docs/submission-draft.md`: form field map plus the 13 sections (title, one-line, problem, solution, how it works, stand-out, evidence, prototype status, event roadmap, originality, competitive positioning, limitations, compliance notes) (Plan Day 2 P3 steps 2–4).
- `docs/claim-audit-log.md`: claim audit of Day 1–2 written docs and the prototype (Plan Day 2 P3 step 5; Day 2 exit gate).

**Changed files:** new `docs/evidence-narrative.md`, `docs/submission-draft.md`, `docs/claim-audit-log.md`; this file. No prototype, Day 1 or teammate files changed.

**Decisions**

| Decision | Resolution |
|---|---|
| Idea Title | PRD title: "PRAMAAN — A Capture-Time Reality Certificate for Phone Cameras" |
| One-line description | Based on PRD §1.1, in "designed to" form, "3-second clip" not "photo" (D-3), framed as making a field capture independently verifiable at the moment it is captured |
| Stand-out paragraph | Refined from `anchor-positioning-brief.md` §6: "the capture itself" instead of "the photo itself"; the overclaiming "A correct GPS fix doesn't catch any of these" replaced |
| Originality disclosure | The pre-event web prototype is disclosed as code written before the event, presentation-only, not carried into the event build (playbook R1, R3) |
| Claim-audit violations in Day 1 docs | Logged, not silently edited (6 items in 3 files, fix-by Day 3); none reaches submission text or screens |

**Open questions (team input):** Q3 prior builds and hackathons (still open; must not be invented) · Android / LLM proficiency field (no project source; needs team input) · Prototype URL (prototype runs locally; public hosting not decided) · Q1, Q2, Q4 unchanged.

**Blockers:** none for Phase 6. The form cannot be finalised without the team-input fields.

**Next dependency**
- → Phase 6: integration and freeze, including the CHANGELOG entry for Phases 2–5.
- → Day 3: fix the logged violations; video-walkthrough script; decide Prototype URL hosting.

**Phase 5 audit addendum (2026-10-02, Krishika):** re-audited the Phase 5 package against the PRD, `evidence-base.md` and `anchor-positioning-brief.md`. 10 wording fixes in `docs/submission-draft.md` and `docs/evidence-narrative.md`, logged in `docs/claim-audit-log.md`. No prototype, Day 1 or teammate files changed. Prototype build re-run: passes. The 6 Day 1 violations remain open, fix-by Day 3.

---

### 2026-10-02 · Day 2 · Phase 6 (Integration, QA and freeze) · Krishika (all lanes) — **Day 2 complete**

**Day 2 state at freeze**
- **Ownership:** Krishika executed all three lanes for Day 2 (Phase 1 entry); the ownership table remains the file map.
- **Prototype:** clickable phone-first journey SC-01 → SC-07 (three verdict branches) → SC-08 Certificate → Verifier Desk concept, plus the all-screens gallery. Presentation-only: hardcoded sample results, every screen and number stamped. Builds with `npm run build`.
- **Technical package:** architecture ("Proposed implementation for the event"), three-check explainers and evidence visuals ("Conceptual illustration, not measured data"), certificate manifest ("Illustrative — not a real signed output"), problem-evidence panel.
- **Evidence / submission:** `docs/evidence-narrative.md`, `docs/submission-draft.md` (13 sections), `docs/claim-audit-log.md`. E2 core, E1 allegation-only context, E3 excluded.

**Completed this phase**
- Full browser QA (headless Chrome over the dev server, 1440 px and 390 px): every step of all three branches, Back to SC-01, Restart, all three views. No dead ends, broken routes, external requests or console errors after fixes.
- Fixes (claim safety / QA defects only, no redesign): E1 line in `prototype/person-3/problem-evidence/ProblemEvidence.jsx` now attributes the geo-tagging point to OmmCom News and states the allegation (it contradicted the Phase 5 re-audit); narrow-screen stacking for the explainer and architecture-check grids (`technical-package.css`); empty inline favicon (`index.html`).
- Final scans: rendered text (all screens, both widths) and source; repo-wide check for prohibited implementation. All clean.

**Changed files:** `prototype/person-3/problem-evidence/ProblemEvidence.jsx`, `prototype/person-3/problem-evidence/README.md`, `prototype/person-1/technical-package.css`, `prototype/person-1/index.html`, `prototype/person-1/core-screens/STATUS.md`, `docs/claim-audit-log.md`, `CHANGELOG.md`, this file.

**Day 3 carry-forwards (recorded, not fixed)**
- Claim-audit violations, fix-by Day 3 (`docs/claim-audit-log.md`):
  - `docs/architecture-concept.md` §6: "altered in transit" claim, unsupported by the PRD
  - `docs/architecture-concept.md` §4: "all four checks, all three components" should read "all four statuses, all three checks"
  - `docs/event-boundary.md` T-10: wrong cross-reference; demo sites are disclosed in `submission-draft.md` §12, not `architecture-concept.md` §4
  - `docs/anchor-positioning-brief.md` §6: (a) deck one-liner "…whether the picture is real" reads as scene truthfulness, suggested "…whether the capture is genuine"; (b) "A correct GPS fix doesn't catch any of these" overclaims; (c) "the photo itself" should be "the capture itself"
  - New in Phase 6: `docs/evidence-base.md` line 80 pitch one-liner states the E1 geo-tagging point as fact ("were never taken"); align it with the attributed wording now used in the narrative, the draft and the panel
- Verifier Desk laptop frame (and the gallery that contains it) is wider than a phone-width page (by design, D-5). Decide how it should appear before a public Prototype URL is shared.
- Still open from earlier phases: D-8 transfer mechanism, P2-Q1 SC-04 V-TIMEOUT, P2-Q2 hand-over screen, D-9 / P2-Q4 retake and back/exit as product features; `docs/ux-requirements.md` and `docs/state-map.md` not filed; Plan Day 3 work (video-walkthrough script, traceability matrix, validation-plan template).

**Unresolved team-supplied inputs (must not be invented)**
- Q3 Prior builds & hackathons (all members)
- Android / LLM proficiency field
- Prototype URL (runs locally only; hosting not decided)
- Q1 E3 source, Q2 UNI link, Q4 submission cutoff

**Statement:** no Day 3 implementation has started. Nothing was built beyond Phases 1–6.

**Next dependency:** → Day 3 (Plan Day 3): fix the logged violations first, then the Day 3 lanes.

**Day 2 final audit and handoff (2026-10-03):** PASS WITH CARRY-FORWARD. Next-session reference: `docs/day-2-handoff.md` (Day 2 state, Day 1 carry-forwards resolved vs deferred, Day 3 starting points). The audit found two items not previously recorded: the stale `docs/event-boundary.md` B-4 row and the due Anchor re-verification (brief section 7).
