# Claim-Audit Checklist

**Owner:** Person 3 · **Created:** 2026-09-26 (Day 1)
**Applies to:** every screen, diagram, visual, doc, deck slide, video line and form field before it is called final (plan §7, "PRAMAAN-specific rule").
**Log results in:** `docs/claim-audit-log.md` (starts Day 2/3), one row per asset: asset · version · pass/fail · violations · owner · fix-by.

## The one test
> Could a judge reasonably read this as "it's already built", "it's been measured", or "we know how Anchor works"?
> If yes → fail.

## Rules

| ID | Rule | ❌ Fails | ✅ Passes |
|---|---|---|---|
| C-1 | **No invented numbers about PRAMAAN.** No accuracy, precision, recall, FP/FN rate, latency, processing time, battery cost or confidence | "98% detection", "verifies in 1.2 s" | "target to be measured during the event" |
| C-2 | **Future tense for capability.** Checks *will* detect or are *designed to*; they have not detected anything | "PRAMAAN detects screen recapture" | "PRAMAAN is designed to detect…" / "will check…" |
| C-3 | **Every simulated output is labeled.** Reality Scores, verdicts and certificate hashes on screens are sample values | "Reality Score 87" with no label | "Reality Score 87 · *sample value, prototype interaction*" |
| C-4 | **Evidence ≠ our results.** Odisha/CAG facts justify the problem; they are never framed as what PRAMAAN caught | "PRAMAAN would have stopped the ₹42-lakh fraud" | "Cases like this show why the photo gate needs to be trustworthy" |
| C-5 | **Only VERIFIED evidence** from `evidence-base.md`. E3 (₹0.97 cr) is banned until verified | Any ₹0.97-crore mention | CAG Karnataka 13/2025 quotes |
| C-6 | **Allegation language for E1.** Arrests are not convictions | "engineers convicted of…" | "arrested over alleged…" |
| C-7 | **No overclaim about the competitor.** Describe Anchor only from its public one-liner | "Anchor can't detect spoofing", "Anchor uses X model" | "Anchor's public description focuses on location trust" |
| C-8 | **Limitation stated on its own screen/slide**: capture authenticity ≠ scene truthfulness | Limitation only in a footnote | Dedicated slide + a line on the verdict screen |
| C-9 | **Visuals stamped.** FFT/gyro/geofence graphics carry "Conceptual illustration, not measured data" *on the image* | Stamp only in the caption or speaker notes | Stamp inside the exported PNG |
| C-10 | **Architecture = proposed.** Tech names (CameraX, SensorManager, OpenCV/FFT, Android Keystore, Office Kit) are listed as planned, not integrated | "Built on Android Keystore" | "Proposed: Android Keystore signing (event build)" |
| C-11 | **No "tested", "validated", "benchmarked", "proven", "field-tested", "pilot" or "deployed"** about PRAMAAN | "validated on 200 photos" | "validation plan for the event" |
| C-12 | **No fake users or endorsements.** No invented testimonials, partner logos or government adoption | "Used by Kandhamal district" | — |
| C-13 | **Anti-fraud ≠ anti-worker.** Don't imply field workers are presumed guilty; mention that honest captures should pass with no extra friction | "catch cheating workers" | "make honest evidence provable" |

## Red-flag word scan
Search every text asset for these words. Each hit needs a human check against the rules above:

`detects · detected · accuracy · % · ms · seconds · proven · validated · tested · benchmark · deployed · pilot · real-time · guarantees · impossible to fake · 100% · tamper-proof · convicted · 0.97`

Quick scan for text files:
```sh
grep -rniE "detects|detected|accuracy|proven|validated|tested|benchmark|deployed|pilot|guarantee|impossible to fake|tamper-proof|100%|convicted|0\.97" docs prototype submission
```

## Mandatory stamps (exact wording, so everyone uses the same labels)
- Screens: **Prototype interaction — simulated result**
- Technical visuals: **Conceptual illustration, not measured data**
- Architecture: **Proposed implementation for the event**
- Certificate: **Illustrative — not a real signed output**
