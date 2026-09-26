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

Names (fill in): Person 1 = ______ · Person 2 = ______ · Person 3 = ______

## Integrator rota (proposal, to confirm at the Day 1 checkpoint)
Day 1: P3 · Day 2: P1 · Day 3: P2 · Day 4: P3 · Day 5: P3 (submits)

## Shared terminology (lock at the Day 1 checkpoint)
Proposed by P3 from plan §3/Day 1. **P1's state-map.md is canonical for state names**, and P2 aligns with it. If P1's names differ, P1's win and this table gets updated.

| Term | Meaning |
|---|---|
| States | `Ready` → `Capturing` → `Checking` → `Verified` / `Flagged` → `Certificate` → `Verifier Desk` |
| Three checks | **Motion consistency** · **Location binding** · **Recapture detection** (screen/moiré) |
| Fusion | The step that combines the three checks. No single check decides the verdict |
| Reality Score | The fused score shown to the user (sample values only in the prototype) |
| Certificate | The signed manifest attached to the media (mockup only in the prototype) |
| Verifier Desk | The second-party screen that checks a certificate independently |
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
