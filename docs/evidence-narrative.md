# Evidence Narrative — PRAMAAN

**Owner:** Person 3 lane (Krishika, all lanes from Day 2) · **Created:** 2026-10-01 (Day 2 · Phase 5) · **Source:** `docs/evidence-base.md` only
**Rules applied:** claim-audit C-4 (evidence ≠ PRAMAAN results), C-5 (VERIFIED items only; E3 banned), C-6 (allegation language for E1). Quotes are the CAG's and OmmCom's own words; "photograph" in them describes existing scheme practice (HANDOFF D-3).

---

## The problem in one line

In MGNREGS, the geo-tagged site photograph is the proof that releases payment, and auditors have documented it being faked in simple ways.

## E2 — CAG Performance Audit of MGNREGS, Karnataka (Report No. 13 of 2025) · VERIFIED · the core evidence

1. In its performance audit of MGNREGS in Karnataka (Report No. 13 of 2025), the Comptroller and Auditor General found cases where, "instead of geo-tagged onsite photograph, photograph captured from existing photograph was uploaded" to substantiate a work's completion (Appendix, Illustration-1, p. 116).
2. In Babalad (IK) gram panchayat, Kalaburagi, a "photograph of another existing waste management shed was uploaded … to show the execution of the work"; physical verification found no structure at that location, and the CAG described the ₹18.45 lakh spent as "probable embezzlement of Government funds" (pp. 47–48).
3. The CAG also found payments made where "same photographs were uploaded for different stages of work" (pp. 45–46).
4. These are the CAG's test-check findings from sampled gram panchayats, not state-wide totals.

## E1 — Kandhamal, Odisha (reported 1 July 2026) · VERIFIED reporting of an allegation · context only

1. Odisha Vigilance arrested two MGNREGS engineers, an Assistant Engineer and a Junior Engineer, in Kandhamal district over an **alleged** fraud of more than ₹42 lakh (OmmCom News; OrissaPOST).
2. According to the reports, ₹49.83 lakh was released for works, including an Amrit Sarovar pond project, found to be worth about ₹7.42 lakh on the ground.
3. OmmCom News reported that "mandatory digital geo-tagging of the project sites at various stages — a compulsory requirement under MGNREGA guidelines — was never done."
4. These are arrests on allegation, not convictions; the case shows that the photo gate exists and is failing, not that any capture tool would have caught it.

## How the evidence motivates PRAMAAN's design (proposed)

| Documented pattern (source) | PRAMAAN design element it is aimed at | Honest limit |
|---|---|---|
| Photo of an existing photo uploaded as a site photo (E2, p. 116) | **FFT-based Moiré / Recapture Detection**, usually reinforced by **Motion Consistency** (PRD §5, §12.3) | Designed for, not demonstrated; tuned at the event against specific screens (PRD FR-4) |
| Photo of a different structure uploaded (E2, pp. 47–48) | **Geofence / Location Binding** (PRD §5, §12.3) | GPS spoofing with a mock-location app is a known gap (PRD §12.3) |
| Same photos reused across work stages (E2, pp. 45–46) | Camera-only capture with no gallery upload (PRD FR-9) | Not a detection check: reusing an earlier genuine capture of the same site is outside what a single capture check can see (PRD §5) |
| Mandatory geo-tagging never done (E1) | None | PRAMAAN cannot force a capture to happen; with no capture, there is nothing to check |

PRAMAAN proves capture authenticity, not scene truthfulness: none of the above tells whether the work itself meets the scheme's criteria.

## Pitch-ready lines (claim-audited)

- "In its 2025 audit of MGNREGS in Karnataka, the CAG found geo-tagged photos 'captured from existing photograph', a photo of a different shed, and the same photos reused across work stages, used to release payments." (E2)
- "In Odisha this July, Vigilance arrested two MGNREGS engineers over an alleged ₹42-lakh fraud. According to OmmCom News, the mandatory geo-tagging of the sites, the payment gate, was never done." (E1, context; allegation)
- "The photo is the proof of work. Today, nothing proves the photo." (framing, no numeric claim; from `docs/evidence-base.md`)

## Not used

- **E3:** one figure cited in early planning is not used anywhere, because its source could not be verified (`docs/evidence-base.md` E3; claim-audit C-5).
- **E1 work years:** sources conflict, so no years are quoted.
- **E2 ₹28.17 crore:** a work-splitting irregularity, not a photo-fraud total; not used.
