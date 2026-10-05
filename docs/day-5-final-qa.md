# Day 5 Final QA — PRAMAAN

**Owner:** Krishika (all lanes) · **Run:** 2026-10-03/04 · **Branch:** `ishita` (Day 4 P2–P6 and Day 5 work uncommitted; nothing pushed)

> **External human review was not conducted. Validation uses an internal blind-review simulation, automated regression, viewport testing, visual inspection, and cross-asset claim auditing.** External human review is not represented as completed anywhere in this package.

## 1. Results

| # | QA gate | Method (actually run) | Result |
|---|---|---|---|
| Q1 | Repository QA | `git status`; untracked-file list; media-file location check; `.gitignore` checks; secrets grep; manifest path check | PASS. No PNG / PDF / media outside `prototype/person-1/screenshots-final/` and `submission/deck.pdf`. Deck captures, `node_modules/` and `dist/` ignored. No secrets. Every manifest path exists. Largest new file: `submission/deck.pdf` (848 KB) |
| Q2 | Prototype regression | Headless-Chrome harness, 1440 px and 390 px, after the last CSS change; `npm run build`; boundary code scan | PASS. 6 / 6 paths per width (3 verdicts × GPS fix / timeout) to SC-12; Back 12 steps to SC-01 on every path; Restart to SC-01; 154 steps, 0 failed clicks per width; 0 console errors or warnings; 0 external requests; 1 URL; no horizontal overflow; stamp on every frame; build passes; boundary scan no hits. Detail: `docs/blind-test-notes.md` §4 |
| Q3 | Final UX QA | Internal blind-review simulation (9 tasks); visual check of SC-08 | PASS with 2 accepted CONFUSING items (check descriptions; "scene truthfulness" not explained in the journey; both covered in the submission material). Cosmetic SC-08 label wrap fixed (F2, CSS only) |
| Q4 | Screenshot QA | Re-captured after F2; second independent capture compared byte-wise and pixel-wise; images inspected | PASS. 15 frame-only images; 14 byte-identical on re-capture; SC-06 differs only in its CSS pulse (284 px in one band). Stamps and sample labels visible; no controls, captions or browser chrome |
| Q5 | Claim audit | Red-flag scan in context over all submission, Day 4 and prototype text; rendered-text scan (80 view states) | PASS. Zero open violations (`docs/claim-audit-log.md`) |
| Q6 | Deck audit | 9 slides re-rendered for overflow; screenshots refreshed from the current prototype; text scan | PASS. 9 pages; no overflow; every screenshot stamped; slide tags (prototype interaction / conceptual illustration / proposed for the event); limitation slide; team box marked [TEAM INPUT PENDING] |
| Q7 | Video-script audit | Script and shot list checked against the prototype's control labels | PASS for the package. Ends on the limitation. **Video itself not recorded** (PENDING) |
| Q8 | Written-submission audit | Placeholder, terminology, limitation and claim scans | PASS. Technical summary added verbatim from the technical explainer. Placeholders kept: Prior builds, Android proficiency, LLM proficiency ([TEAM INPUT]); Prototype URL, Video URL ([PENDING]) |
| Q9 | Manifest audit | Every row checked against the files on disk | PASS. Statuses current; no invented URLs or platform fields |
| Q10 | Roadmap / event-map consistency | Event hours compared across the validation plan, roadmap and deck | PASS. All 10 hour rows match in all three files; map covers 22 / 22 register items plus 10 boundary items |
| Q11 | Final terminology audit | Rendered text (80 states) + file-level scan | PASS. All canonical terms present; 0 non-canonical variants; the exact limitation appears 51 times in the rendered views, with 0 variants |

## 2. Day 5 Plan items (register §4)

| Item | Status |
|---|---|
| Final UX QA, incl. SC-08 label wrap | DONE (Q3, F2) |
| Re-export final screenshots | DONE (Q4) |
| Freeze the prototype source | **NOT DONE**: a freeze is a commit / tag; not committed by instruction |
| Prototype URL incognito check | Awaiting team input: runs once the Prototype URL exists (TI-5) |
| Person 2 technical audit | DONE within Q5, Q10 |
| Package technical assets into `submission/` | Referenced from the manifest; copying depends on the form's upload slots (TI-6) |
| One-paragraph technical summary | DONE (Q8) |
| Final package against the form fields | Awaiting platform input: field list and limits (TI-6), if required |
| Truthful confirmation checkbox | At submission, by the team |
| `EVENT-START-HANDOFF.md` | DONE (repo root; no implementation code; built only from existing docs) |
| Final joint read-through | Not held |
| Submission | **NOT DONE** (team action) |
| Anchor re-read | Due the day before the Finale (8 Oct 2026) |
| Integration into `main` | **NOT DONE** (requires commits) |

## 3. Status

| Item | Status |
|---|---|
| TECHNICAL QA | COMPLETE (11 / 11 gates PASS) |
| REGRESSION | PASS |
| CLAIM AUDIT | ZERO OPEN VIOLATIONS |
| SCREENSHOTS | FINAL |
| DECK | READY |
| WRITTEN SUBMISSION | READY SUBJECT TO TEAM INPUT |
| MANIFEST | COMPLETE |
| VIDEO SCRIPT | COMPLETE |
| ROADMAP | COMPLETE |
| EVENT IMPLEMENTATION MAP | COMPLETE |
| EVENT-START-HANDOFF | COMPLETE |

**No technical blockers. Only real submission inputs remain** (§4): Prototype URL, video recording and Video URL, team and proficiency fields, the platform's field limits if required, the confirmation checkbox and the submission itself. These are team / platform inputs, not engineering blockers. The repository is ready to freeze; the freeze is an owner commit.

## 4. Final submission checklist

> External human review was not conducted and is not represented as completed.

**LOCAL / PROJECT COMPLETE**

| Item | Where | Evidence |
|---|---|---|
| Technical QA | `docs/day-5-final-qa.md` §1 | 11 / 11 gates PASS |
| Regression | `docs/blind-test-notes.md` §4 | 1440 px and 390 px: 6 / 6 paths, Back, Restart, 0 console errors, 0 external requests, 1 URL, no overflow |
| Claim audit | `docs/claim-audit-log.md` | Zero open violations |
| Screenshots | `prototype/person-1/screenshots-final/` | 15 frame-only PNGs, independently re-captured |
| Deck | `submission/deck.pdf` (source `submission/deck-source/`) | 9 slides; image and cited-file references resolve |
| Written submission | `submission/written-submission-fields.md` | Matches the audited draft section by section; technical summary verbatim from the technical explainer |
| Manifest | `docs/submission-manifest.md` | Every artifact with path, status, owner, dependency |
| Video script | `docs/video-script.md`, `submission/video/README.md` | Shot list matches the prototype's controls; ends on the limitation |
| Roadmap | `prototype/person-2/roadmap/roadmap.md` | Hours match the validation plan and deck |
| Event implementation map | `prototype/person-2/roadmap/event-implementation-map.md` | 22 / 22 coverage items plus 10 boundary items |
| Event-start handoff | `EVENT-START-HANDOFF.md` | No code; pointers to existing docs only |
| Day 4 validation | `docs/blind-test-notes.md` §1 | P2-B VALIDATION: COMPLETE — INTERNAL BLIND-REVIEW SIMULATION (7 PASS · 2 CONFUSING · 0 BLOCKED; internal objective results, not human feedback) |
| UX hardening | `docs/blind-test-notes.md` §3 | P2-C HARDENING: COMPLETE (F1, F2; CSS only) |

**REAL TEAM / PLATFORM INPUT ONLY (not engineering blockers)**

| Item | Marker | Needed from |
|---|---|---|
| Prototype URL, then the incognito check | [PENDING] (TI-5) | Team: hosting decision |
| Video recording and Video Walkthrough URL | [PENDING] (TI-9) | Team: narration voice, recording, public upload |
| Prior builds & hackathons; deck slide 9 team box | [TEAM INPUT] (TI-1) | Each team member |
| Android proficiency | [TEAM INPUT] (TI-2) | Team |
| LLM proficiency | [TEAM INPUT] (TI-3) | Team |
| Platform field list and character limits; final fit of each field | [PENDING] (TI-6) | Platform |
| Confirmation checkbox | At submission | Team |
| Freeze commit, push, submission | — | Owner / team |
