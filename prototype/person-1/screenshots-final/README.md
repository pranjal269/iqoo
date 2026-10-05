# Final screenshots (Day 4 · T4; verified in Day 5 QA)

Captured 2026-10-03 from the running prototype (headless Chrome, 1440 px viewport, 2× scale), after the P2-B internal blind-review simulation fixes and P2-C hardening (`docs/blind-test-notes.md`).

- **Frame only:** each image is the phone frame (`.phone`) or, for SC-10 to SC-12, the Verifier Desk laptop frame (`.laptop`). No browser chrome, caption, prototype controls or view switch.
- Every frame carries "Prototype interaction — simulated result"; every data value keeps "sample value, prototype interaction"; the Verifier Desk keeps "Concept screen: not working software", "illustrative result" and "Conceptual illustration, not measured data".
- SC-08 to SC-12 use the Needs Review sample. SC-08's certificate scrolls inside the phone frame, so the image shows its top section.
- These are images of a presentation-only prototype. No value in them is a measurement.

Day 5 QA: an independent re-capture of all 15 screens after the last fix gave 14 byte-identical images. SC-06 differed in 284 of about 1.07 M pixels, in one 20-pixel band (rows 496–515): its CSS "checking" pulse animation, caught at a different frame.

If the prototype changes after the freeze, re-capture this set.
