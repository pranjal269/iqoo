# CHANGELOG

Short, dated record of what was integrated each day. Written by that day's integrator at the checkpoint.

## 2026-09-26 — Day 1 (integrator: Person 3)

**Added**
- Repo structure: `docs/`, `prototype/person-1|2|3/`, `prototype/integration/`, `assets/` (add-only), `submission/`, plus ownership READMEs
- `HANDOFF.md`: ownership table, integrator rota, shared terminology, open questions Q1–Q6, P3 Day 1 entry
- `docs/evidence-base.md` (P3): E1 VERIFIED, E2 VERIFIED, E3 UNVERIFIED/banned
- `docs/rule-compliance-checklist.md` (P3)
- `docs/claim-audit-checklist.md` (P3)
- `docs/anchor-positioning-brief.md` (P3, draft)

**Pending from P1:** `docs/ux-requirements.md`, `docs/state-map.md`
**Pending from P2:** `docs/architecture-concept.md`, `docs/event-boundary.md`

**Day 1 exit gate**
- [ ] UX requirement sheet + state map complete and shared (P1)
- [ ] Architecture concept + event-boundary matrix complete, every box labeled prototype vs. event (P2)
- [x] Evidence base filed with sources; rule-compliance checklist exists (P3)
- [x] Folder structure + HANDOFF.md + CHANGELOG.md live (P3)

**Rule-compliance check (Day 1):** A1–A7 ✅ (no code in repo) · B: n/a (no visuals yet) · C2 ✅ (only VERIFIED evidence in draft copy) · E1–E3 ✅

## 2026-10-01 — Day 1 close-out / Day 2 transition · Phase 1 (integrator: Person 1, Krishika, all lanes)

**Day 1 work (as pushed)**
- P1 `35639af`: `prototype/person-1/day-1/`: journey, state definition, screen requirements, traceability, terminology lock, handoff, README, status
- P3 `839a6d8`: `HANDOFF.md`, this file, `docs/evidence-base.md`, `docs/rule-compliance-checklist.md`, `docs/claim-audit-checklist.md`, `docs/anchor-positioning-brief.md`, `prototype/person-3/README.md`
- P2 `4fb47a2`: `docs/architecture-concept.md`, `docs/event-boundary.md`, `prototype/person-2/README.md`

**Integrated**
- `origin/ishita` and `origin/pranjal` merged into `krishika` (`e6c45d0`). No overlapping files, no conflicts; merged files byte-identical to source.
- `main` untouched at `35639af`. Integration into `main` deferred by decision (see HANDOFF, Day 2 · Phase 1).

**Changed**
- From Day 2, one person (Krishika) runs all three lanes. `krishika` is the Day 2 integrated working branch.
- HANDOFF.md: names filled, terminology table locked to the P1 terminology lock, Q5 and Q6 answered, Day 2 · Phase 1 decision entry added.

**Day 1 exit gate (status at close-out)**
- [x] UX requirement sheet + state map complete and shared (P1): content in `prototype/person-1/day-1/`; `docs/ux-requirements.md` and `docs/state-map.md` still not filed
- [x] Architecture concept + event-boundary matrix complete, every box labeled prototype vs. event (P2)
- [x] Evidence base filed with sources; rule-compliance checklist exists (P3)
- [ ] Folder structure + HANDOFF.md + CHANGELOG.md live (P3): **partial**. The files are live; `prototype/integration/`, `assets/`, `submission/` and the P1/P2 ownership READMEs were not in the pushed commit

**Still open after Phase 1:** P2-Q1 (SC-04 timeout variant, Day 3), P1 D-5, D-8, D-9, P2-Q2 to Q5 (Day 3), HANDOFF Q1–Q4 (Q3 needs teammates' input).

**Rule-compliance check (Day 2 · Phase 1):** A1–A7 ✅ (Markdown only; no code added) · B: n/a (no visuals yet) · rule-compliance E3 (today's HANDOFF entry) ✅

## 2026-10-01 → 2026-10-02 — Day 2 · Phases 2–6 (integrator: Krishika, all lanes)

**Phase 2 · Design system + core screens**
- Vite + React presentation-only project in `prototype/person-1/` (React, React DOM, Vite, Vite React plugin only; `docs/attributions.md` created)
- Design system (`design-system/`): tokens, components, inline-SVG icons, canonical copy and stamps
- Core screens SC-01 → SC-07 (`core-screens/`), with SC-07 in all three verdict variants and the limitation line on each

**Phase 3 · Clickable prototype, Certificate, Verifier Desk** (pulled forward from Day 3 by owner instruction; schedule only)
- Clickable journey SC-01 → SC-08 → Verifier Desk concept, all three verdict branches; Back / Restart as prototype-only controls (`clickable-prototype/`)
- SC-08 Certificate (PRD §7 fields, illustrative) and Verifier Desk concept (laptop frame, three stages)

**Phase 4 · Technical and evidence package**
- Architecture diagram, certificate manifest mockup, three-check explainers and evidence visuals (`prototype/person-2/`); problem-evidence panel (`prototype/person-3/problem-evidence/`); shown in the app under "Technical and evidence package"
- Evidence visuals consolidated into `prototype/person-2/evidence-visuals/`; fusion weights omitted from the diagram

**Phase 5 · Evidence, positioning and submission package**
- `docs/evidence-narrative.md`, `docs/submission-draft.md` (13 sections + form field map), `docs/claim-audit-log.md`
- Re-audit (2026-10-02): 10 wording fixes in the submission draft and evidence narrative (logged)

**Phase 6 · Integration, QA and freeze**
- Full journey re-run in headless Chrome (dev server) at 1440 px and 390 px: all three branches, SC-08, Verifier Desk, Back to SC-01, Restart, all three views; no click failures, external requests or URL changes
- Fixes: problem-evidence panel E1 line attributed to OmmCom News and stated as allegation (matches Phase 5 wording); explainer and architecture-check columns stack below 560 px (they spilled past a phone-width page); empty inline favicon (removes the only console error)
- Rendered-text and source scans: no forbidden terms, numbers or claims; no camera, location, sensor, FFT, crypto, timer, network or storage code
- `prototype/person-3/problem-evidence/README.md` and `core-screens/STATUS.md` updated to match

**Day 2 exit gate**
- [x] Design system + core screens (idle, capture, checking, all three verdicts)
- [x] Architecture diagram + certificate mockup + 3 illustrative evidence visuals, each stamped
- [x] Idea Title, Description, standout paragraph drafted
- [x] Claim-audit pass on all Day 1–2 written docs; violations logged (7 open, fix-by Day 3)
- [x] HANDOFF.md / CHANGELOG.md current

**Rule-compliance check (Day 2 · Phase 6):** A1–A7 ✅ (presentation-only code; no detection, scoring, signing, sensor, Android or backend code; no key generated) · B1–B4 ✅ (all five stamps rendered; claim audit logged) · C1–C4 ✅ · D1–D3 ✅ · E1 n/a (one owner executes all lanes, HANDOFF Day 2 · Phase 1) · E2 ✅ (`assets/` untouched) · E3 ✅

## 2026-10-03 — Day 3 (integrator: Krishika, all lanes)

**Phase 1 · Carry-forward closure & Day 3 lock**
- 7 Day 1 claim-audit violations and `event-boundary.md` B-4 fixed; Anchor public description re-checked (unchanged)
- Filed `docs/state-map.md`, `docs/ux-requirements.md`; Day 1 P1 cleanup resolved there (`day-1/` unchanged)
- Decided D-8, P2-Q2, D-9, P2-Q4, P2-Q1, P2-Q3 / P2-Q5 and the checking transition (HANDOFF Day 3 · Phase 1)

**Phase 2 · Clickable prototype**
- Added SC-04 V-TIMEOUT (GPS-timeout path from SC-03), SC-09 Hand-over, stepped Verifier Desk (SC-10 drop → SC-11 verify → SC-12 see evidence)
- SC-06: CSS-only checking motion; sample-result choice appears after a brief CSS transition, labelled "not a measured processing time" (no JS timer)
- Phone-width fit: laptop frame shrinks, Verifier Desk grids stack, checks table becomes labelled blocks

**Phase 3 · Certificate + Verifier Desk + technical consistency**
- Architecture diagram hand-over arrow and table match D-8; canonical check names in the event column
- Prototype READMEs and STATUS brought up to the Day 3 state

**Phase 4 · Technical walkthrough & validation**
- `prototype/person-2/technical-explainer/technical-explainer.md` (241 words + screen mapping)
- `prototype/person-2/validation-plan/validation-plan.md` (template with empty result fields + known-risks slide from PRD §12)

**Phase 5 · Claim audit, traceability, submission**
- `docs/traceability-matrix.md` (draft), `docs/video-script.md` (skeleton), `docs/submission-draft.md` (Prototype URL placeholder + what it will link to), `docs/claim-audit-log.md` (Day 3 rows; zero open violations)

**Phase 6 · Integration & exit audit**
- Headless Chrome on the dev server, 1440 px and 390 px: all three branches end to end (one through the GPS-timeout path), Back through all 13 steps, Restart, all three views; no failed clicks, console errors, external requests, overflow or unstamped screens

**Day 3 exit gate**
- [x] Clickable prototype covers the full journey including certificate detail + Verifier Desk concept, no dead ends
- [x] Technical explainer + validation-plan + risk slide complete and consistent with the prototype
- [x] Claim-audit pass complete with zero open violations
- [x] Traceability matrix drafted (not yet final)

**Rule-compliance check (Day 3):** A1–A7 ✅ (no detection, scoring, signing, sensor, file-input, timer, network or Android code; dependencies unchanged) · B1–B4 ✅ · C1–C4 ✅ · D1–D3 ✅ · E2 ✅ · E3 ✅

**Separate phase audits (2026-10-03, one brief per phase, existing work audited, not rebuilt)**
- P1: B-4 wording corrected; verdict bands and statuses named in `docs/ux-requirements.md`
- P2: prototype-controls note no longer says "no timers" (it contradicted the SC-06 pause)
- P3: SC-08 gains the PRD §7 media duration field; sample labels added to reason numbers on SC-08, SC-12 and the manifest mockup
- P4: explainer states prototype vs event build and uses "will"; validation plan gains an evidence column, and unfixable limits are split from risks "addressed live"
- P5: present tense fixed in the submission draft; brief core line and judge answer corrected; video script reordered to the story; story-level traceability rows; every citation checked
- P6: full journey at 1440 px and 390 px (all three branches, plus all three through the GPS-timeout path); one terminology fix in the submission draft; Day 3 records corrected; every carry-forward given a disposition (`docs/day-3-handoff.md` §4)
