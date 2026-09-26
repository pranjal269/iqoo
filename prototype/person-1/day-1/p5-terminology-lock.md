# PRAMAAN P5 — Cross-Check & Terminology Lock

Owner: Person 1 — Product & UX Lead · Phase: Day 1 / P5 · Status: DRAFT v1 — pending audit
Staged outside the repo (`docs/` not yet created by Person 3).
Scope: P1 `primary-user-journey.md` · P2 `state-definition.md` · P3 `state-screen-requirements.md` · P4 `traceability-matrix.md`, checked against `PRAMAAN_PRD.docx` (product) and the 5-Day Plan (prototype scope).
Rule applied: normalize only where the PRD or Plan settles the term; otherwise leave open.

---

## 1. Canonical Terminology

| Term | Canonical form | Source | Used consistently in P1–P4? | Status |
|---|---|---|---|---|
| Product | **PRAMAAN** | PRD title, Plan | Yes | LOCKED |
| Fused result | **Reality Score** | PRD §1.3, FR-5; Plan §3 | Yes | LOCKED |
| Verifier surface | **Verifier Desk** | PRD FR-7; Plan §3 | Yes | LOCKED |
| Proof object | **Certificate** (user-facing); "manifest" = its data content (PRD §7) | PRD FR-6, §7; Plan §3 | Yes | LOCKED |
| Limitation — what is proven | **capture authenticity** | PRD §1.4, §12.4 | Yes | LOCKED |
| Limitation — what is not proven | **scene truthfulness** | PRD §1.4, §12.4 | Yes | LOCKED |
| Check 1 | **Motion Consistency** | PRD §1.3 | Yes | LOCKED |
| Check 2 | **Geofence / Location Binding** | PRD §1.3 | Yes | LOCKED |
| Check 3 | **FFT-based Moiré / Recapture Detection** | PRD §1.3 | **No** — shortened in P1 J6/§5, P2 S6/§5, P3 SC-06 | LOCKED — normalized in P5 (§6) |
| Verdict bands | **Likely Genuine · Needs Review · Likely Fraudulent** | PRD FR-5 | Yes | LOCKED |
| Plan result states | "verified" · "flagged" | Plan Day 1 P1 s3, Day 2, §9 | Used only as Plan references tied to D-1 | OPEN — D-1 |
| Check statuses | **PASS · FAIL · LOW_CONFIDENCE · UNAVAILABLE** | PRD FR-2, FR-3, FR-8 | Yes | LOCKED |
| "OK" | Appears only in the PRD §7 schema *example* (`"status": "OK"`), in no FR | PRD §7 | Used only as the D-2 conflict reference; never introduced as a UX term | OPEN — D-2 |
| Capture behaviour | **3-second clip** (PRD FR-1: "3-second video clip"); neutral noun **capture** | PRD FR-1 | Yes | LOCKED (behaviour) |
| User-facing capture word | "photo" / "video" / "clip" | PRD §1.1 "photo or video", §2 "geo-tagged photographs", FR-1 "video clip"; Plan Day 1 "geo-tagged photo" | Only inside D-3 references | OPEN — D-3 |
| Signing disclosure | **"app-level signing, not hardware-attested"** | PRD FR-6 | Yes | LOCKED |
| Not claimed | **hardware attestation** | PRD §10.4 ("Hardware key attestation"), FR-6 | Yes | LOCKED |
| Personas | **Field Surveyor**; **ULB Supervisor / Junior Engineer** (abbreviated "ULB Supervisor / JE" in P1–P4) | PRD §4 | Yes (abbreviation is internal) | LOCKED |
| Prototype certificate label | **"illustrative — not a real signed output"** | Plan Day 2 P2 s5 | Yes | LOCKED |
| Prototype evidence label | **"conceptual illustration, not measured data"** | Plan Day 2 P2 s6 | Yes | LOCKED |
| State names | P2 names S1–S12 (Person 1 set) | P2; Plan Day 1 hand-off | Consistent P2 ↔ P3 ↔ P4 | LOCKED for Person 1 documents; cross-team authority OPEN — D-11 |

Internal shorthand kept as-is (not user-facing): "Motion" / "Moiré" inside D-2 descriptions; "ULB Supervisor / JE".

## 2. Resolved Inconsistencies (source-settled)

| # | Old ambiguity | Resolving source | Canonical wording / behaviour |
|---|---|---|---|
| R1 | Check 3 shortened to "Moiré / Recapture Detection" | PRD §1.3 "Check 3 — FFT-based Moiré / Recapture Detection" | "FFT-based Moiré / Recapture Detection". This is the check's name; the prototype still shows no FFT processing (G3). |
| R2 | P1 said the verdict combines "all three checks" (§5 intro, J7), contradicting P2/P3 and PRD FR-8 | PRD FR-5, FR-8 ("recomputes … over the remaining available checks") | "the available checks — all three, or the remaining ones if a check is UNAVAILABLE" |
| R3 | VRD-05: SC-07 V-LF "reasons show which check outcomes contributed" (and its P1 origin "e.g. which check(s) contributed") | PRD FR-5 ("a human-readable reason string per check") | "shows the reason for each of the three checks" |
| R4 | P4-F1: Plan's single Verifier Desk concept screen vs P3's SC-10 / SC-11 / SC-12 as separate screens | Plan §3 ("a 'Verifier Desk' screen"), Day 3 P1 s3 ("the Verifier Desk concept screen — a linked prototype screen showing 'drop certificate → verify → see evidence'"), §11 ("Linked prototype screen showing the concept") | One Verifier Desk concept screen in the prototype; SC-10 / SC-11 / SC-12 are its three stages. How the screen moves between stages stays open (P2-Q3); laptop framing stays open (D-5). |
| R5 | P1 J12 goal "decide whether to trust the capture" implied a decision action the PRD doesn't define; conflicted with P1's own end state and P2 S12 | PRD §4 (verifier goal), FR-7 (no approve/reject defined) | "understand the capture's authenticity result and the evidence behind it" |
| R6 | P4 classified the same Plan §9 rule as DIRECT (CHK-03) and PROTOTYPE SCOPE (PRT-02) | Plan §9 is a prototype Definition of Done | CHK-03 → PROTOTYPE SCOPE |
| R7 | P4 VDK-04 marked DIRECT, but FR-7 says "verifies" without requiring the result to be displayed | PRD FR-7; Plan Day 3 "verify" step | VDK-04 → INTERPRETATION |
| R8 | P4 §6 listed expected phases for D-5, D-10, P2-Q1, P3-Q1 that no source defines | Plan (no such phase defined) | "No phase defined by source" |

Checked and found consistent (no change needed): Reality Score, Verifier Desk, Certificate, capture authenticity, scene truthfulness, Motion Consistency, Geofence / Location Binding, the three verdict labels, PASS / FAIL / LOW_CONFIDENCE / UNAVAILABLE, "app-level signing, not hardware-attested", the prototype labels, and all limitation wording.

**Verdict mapping check (P5.3):** no P1–P3 text treats "verified" or "flagged" as equivalent to a PRD band. Every occurrence is either a D-1 reference or P2 §4's mapping table, where both rows say "variant relationship open".

## 3. Open Decisions

| ID | Status | Note |
|---|---|---|
| D-1 | STILL OPEN | Sources define no mapping between the Plan's "verified / flagged" and PRD FR-5's three bands. |
| D-2 | STILL OPEN | "OK" appears only in the §7 schema example; no FR defines normal-case wording for Motion Consistency or FFT-based Moiré / Recapture Detection. |
| D-3 | STILL OPEN | Behaviour settled (3-second clip); the user-facing word isn't. |
| D-4 | STILL OPEN | — |
| D-5 | STILL OPEN | Now scoped to laptop framing of the single Verifier Desk concept screen (R4). |
| D-6 | STILL OPEN | — |
| D-7 | STILL OPEN | — |
| D-8 | STILL OPEN | — |
| D-9 | STILL OPEN | — |
| D-10 | STILL OPEN | — |
| D-11 | STILL OPEN | Check names are now settled by PRD §1.3 (R1); D-11 remains only about cross-team authority over state names (Person 1 vs Person 2). |
| P2-Q1 | STILL OPEN | — |
| P2-Q2 | STILL OPEN | — |
| P2-Q3 | STILL OPEN | Now: how the single concept screen moves from "verify" to "see evidence". |
| P2-Q4 | STILL OPEN | — |
| P2-Q5 | STILL OPEN | Now: whether the concept screen has an empty stage before "drop certificate". |
| P3-Q1 | STILL OPEN | — |
| P3-Q2 | STILL OPEN | Depends on Person 2's manifest mockup. |
| P4-F1 | **SOURCE-RESOLVED** | See R4. |
| P4-F2 | STILL OPEN | See §4. |

## 4. P4 Findings Disposition

| Finding | Disposition | Detail |
|---|---|---|
| VRD-05 (unsupported) | **FIXED** | R3. P1 §5 (origin) and P3 SC-07 V-LF corrected; P4 row VRD-05 now DIRECT (FR-5). |
| P4-F1 (Verifier Desk screen count) | **SOURCE-RESOLVED** | R4. P3 inventory, §2 note, §4 intro, SC-11 and SC-12 lines updated; P4 VDK-15 now DIRECT. |
| P4-F2 (show the 3-second duration?) | **STILL OPEN** | PRD FR-1 fixes the capture at 3 seconds; neither PRD nor Plan requires showing the duration. No UI element added; the behavioural requirement is unchanged. Whether to show it is a team / Day 2 decision. |
| P4 audit: CHK-03 vs PRT-02 classification | FIXED | R6. |
| P4 audit: VDK-04 classification | FIXED | R7. |
| P4 audit: inferred "expected to settle" phases | FIXED | R8. |
| P4 audit: EXC-03 overlaps D-9 and VDK-18 | Not changed | Duplication only; no contradiction. |

## 5. Cross-Document Consistency Results (after P5 edits)

| Pair | Result | Notes |
|---|---|---|
| P1 ↔ P2 | Consistent | R2 and R5 remove the two wording differences between J7/J12 and S7/S12. |
| P2 ↔ P3 | Consistent | S1–S12 map to SC-01–SC-12; the SC-10–SC-12 stages still map one-to-one to S10–S12. |
| P3 ↔ P4 | Consistent | Affected rows updated (VRD-05, VDK-04, VDK-15, CHK-03, §2 FR-7, §3, §4, §6, §7, §8 counts). |
| P1 ↔ PRD | Consistent | Check 3 name (R1); FR-8 behaviour (R2); FR-5 reasons (R3). |
| P2 ↔ PRD | Consistent | R1. |
| P3 ↔ PRD | Consistent | R1, R3. |
| P4 ↔ PRD | Consistent | FR coverage unchanged. |
| All ↔ Plan | Consistent | R4 aligns the Verifier Desk with Plan §3 / Day 3 / §11. |

Specifically checked, no contradictions found: state names, screen names, verdict names, capture wording, check names, certificate wording, limitation wording, and implementation boundaries (prototype vs event).

**Interpretation audit (P5.10):** the 22 INTERPRETATION rows in P4 were reviewed. Two had been written as hard requirements that overstated or contradicted the source: R2 (the "all three checks" wording) and R5 (the implied decision action). Both are corrected. The rest stay as labelled interpretations and are already tagged in P2/P3 or registered in P4. CRT-01 (certificate for every band) and PRT-01 (label on every screen) are kept as written: both are safe readings of the source, and P4 marks them as interpretations.

**Accessibility (P5.11):** A1–A6 are recorded in P4 as Person 1 UX / accessibility requirements (Plan §5 ownership), never as PRD requirements. No change.

**Global prototype rules (P5.12):** G1–G10 checked against P1 §9, P2 §7 and P4 PRT / LIM rows. Wording is consistent; no change.

## 6. Change Log

| # | File | Section / item | Old | New | Reason | Source |
|---|---|---|---|---|---|---|
| C1 | primary-user-journey.md | J6 | "Moiré / Recapture Detection" | "FFT-based Moiré / Recapture Detection" | R1 | PRD §1.3 |
| C2 | primary-user-journey.md | §5 status note | "Moiré / Recapture Detection have no PRD-named…" | "FFT-based Moiré / Recapture Detection have no PRD-named…" | R1 | PRD §1.3 |
| C3 | primary-user-journey.md | §5 intro | "produced by fusion of all three checks;" | "produced by fusion of the available checks — all three, or the remaining ones if a check is UNAVAILABLE (PRD FR-8);" | R2 | PRD FR-5, FR-8 |
| C4 | primary-user-journey.md | J7 Communicates | "the verdict reflects all three checks combined, not any single one" | "the verdict reflects the available checks combined — all three, or the remaining ones if a check is UNAVAILABLE — not any single one" | R2 | PRD FR-5, FR-8 |
| C5 | primary-user-journey.md | §5 Likely Fraudulent | "three check outcomes + reasons (e.g. which check(s) contributed)." | "three check outcomes + reasons." | R3 | PRD FR-5 |
| C6 | primary-user-journey.md | J12 Goal | "decide whether to trust the capture." | "understand the capture's authenticity result and the evidence behind it." | R5 | PRD §4, FR-7 |
| C7 | state-definition.md | S6 User sees | "Moiré / Recapture Detection" | "FFT-based Moiré / Recapture Detection" | R1 | PRD §1.3 |
| C8 | state-definition.md | §5 note | "Moiré / Recapture Detection have no PRD-named…" | "FFT-based Moiré / Recapture Detection have no PRD-named…" | R1 | PRD §1.3 |
| C9 | state-screen-requirements.md | SC-06 Required information | "Moiré / Recapture Detection (`DEPENDENCY: D-11` for final names)" | "FFT-based Moiré / Recapture Detection (PRD §1.3 names; `DEPENDENCY: D-11` for naming authority)" | R1 | PRD §1.3 |
| C10 | state-screen-requirements.md | SC-07 V-LF | "reasons show which check outcomes contributed." | "shows the reason for each of the three checks (PRD FR-5)." | R3 | PRD FR-5 |
| C11 | state-screen-requirements.md | §2 inventory SC-10 / SC-11 / SC-12 | "Dedicated screen…" / "Dedicated screen **or** inline status on SC-12…" / "Dedicated screen" | "Stage 1 / 2 / 3 of the single Verifier Desk concept screen" | R4 | Plan §3, Day 3 P1 s3, §11 |
| C12 | state-screen-requirements.md | §2 note | "States with no independent screen: none beyond SC-09 (conditional)." | S10–S12 share one concept screen (three stages; P2-Q3 for movement); S9 has no independent screen (SC-09 conditional) | R4 | same |
| C13 | state-screen-requirements.md | §4 intro | laptop-representation line only | adds that SC-10–SC-12 are the three stages of the single concept screen | R4 | same |
| C14 | state-screen-requirements.md | SC-11 Required UI elements | "Whether this is its own screen or an inline status on SC-12: P2-Q3, D-5." | "Presented as the 'verify' stage of the single Verifier Desk concept screen; how it advances to SC-12: P2-Q3." | R4 | same |
| C15 | state-screen-requirements.md | SC-12 Required information | "Signature-check result if SC-11 is inline P2-Q3." | "Signature-check result from the 'verify' stage (SC-11), on the same concept screen." | R4 | same |
| C16 | traceability-matrix.md | VRD-05 row | UNSUPPORTED — REVIEW REQUIRED | corrected requirement; DIRECT (FR-5) | R3 | PRD FR-5 |
| C17 | traceability-matrix.md | VDK-15 row | OPEN QUESTION (P4-F1) | one concept screen, three stages; DIRECT | R4 | Plan §3, Day 3, §11 |
| C18 | traceability-matrix.md | VDK-04 row | DIRECT (concept) | INTERPRETATION | R7 | PRD FR-7 |
| C19 | traceability-matrix.md | CHK-03 row | DIRECT (Plan) | PROTOTYPE SCOPE | R6 | Plan §9 |
| C20 | traceability-matrix.md | §2 FR-7; §3 two rows; §4 Check 3 row; §6 D-5, D-10, P2-Q1, P3-Q1, P4-F1; §7 two lines | P4-F1 open / "Shortened" / inferred phases / VRD-05 unsupported | resolved / normalized / "No phase defined by source" / none remaining | R1, R3, R4, R8 | as above |
| C21 | traceability-matrix.md | §8 counts | 42 / 21 / 13 / 8 / 7 / 1 | 42 / 22 / 13 / 9 / 6 / 0 (recounted by script; 92 rows) | follows C16–C19 | — |

Not modified: `p1-source-inventory.md` (a record of source text, not the spec).

## 7. P5 Self-Audit

1. Terminology consistent where sources settle it — yes (§1, §2).
2. Source ambiguity kept open — yes: D-1 to D-11, P2-Q1 to P2-Q5, P3-Q1, P3-Q2 and P4-F2 are all open.
3. Three-check naming consistent — yes; no short form remains in P1–P3 (verified by search).
4. Verdict naming consistent — yes; no equivalence to "verified / flagged" asserted.
5. Status naming consistent — yes; "OK" not introduced.
6. Capture terminology consistent — yes; behaviour = 3-second clip; wording D-3.
7. Certificate wording safe — yes; illustrative label + app-level statement; no transfer mechanism; no new fields.
8. Verifier Desk consistent — yes (R4); D-5, P2-Q3, P2-Q5 preserved.
9. VRD-05 — fixed (R3).
10. P4-F2 — dispositioned, still open.
11. No unsupported requirement introduced — the new wording in R3 and R5 is quoted from or tied to the PRD; R4 quotes the Plan.
12. Prototype/event boundary not weakened — the Check 3 name carries "FFT-based" but the checking screen still forbids depicting computation (G3, SC-06).
13–15. No visual design, no implementation, Person 1 boundary intact.
16. P4 traceability accurate after changes — affected rows updated; counts recounted (92 rows).

**Points for the P5 audit to examine:**
- R4 is the most substantive change: it turns SC-10 / SC-11 / SC-12 from separate screens into stages of one screen, based on three Plan references. If the team reads the Plan's "linked prototype screen" differently, R4 is the change to revisit.
- R1 puts "FFT-based" into the user-visible check name. It's the PRD's name, but the claim-audit (Person 3) should confirm it doesn't read as a claim that FFT processing exists in the prototype.
- "flagged" also appears as a verb in the GPS-timeout wording ("accuracy flagged in the reasons", from PRD FR-2 "flag accuracy"). It could be confused with the Plan's "flagged" state in Day 2 copy. Not changed, since it's source wording.
