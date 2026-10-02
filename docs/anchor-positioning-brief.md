# Anchor-Aware Positioning Brief (draft v1)

**Owner:** Person 3 · **Created:** 2026-09-26 (Day 1) · **Status:** draft. To be refined on Day 2 for the form's "What makes you stand out" field, after P1/P2 visuals exist.

## 1. What is known (verified, public)

**Source:** official iQOO Community post "RECAP iQOO Hackathon | Bengaluru City Battle", https://community.iqoo.com/in/thread/169162 (posted 1 Sep 2026; read 2026-09-26)

- Team: **Team Nexus**, Students bucket, **1st Runner-Up**, Bengaluru City Battle (29–30 Aug 2026)
- Project: **Anchor**
- Public description, verbatim: Anchor *"verifies whether your phone's location can be trusted by cross-checking GNSS with physical sensors and on-device AI, even without internet connectivity."*
- Holds a **direct Wild Card entry** to the Grand Finale, Bengaluru, 9–11 Oct 2026. **We will likely be in the same room as them.**

## 2. What is NOT known (don't state or imply any of this)
- Their model, their sensors, their accuracy, their UI
- Whether Anchor inspects the photo/video at all, or only the location fix
- Whether Anchor signs its output or issues a verifiable certificate
- Whether Anchor targets government/welfare use cases
- How Anchor will have evolved by the Finale (48-hour rebuild)

## 3. Honest overlap
Both projects are **offline, on-device, sensor-fusion trust systems**, and both cross-check GNSS against physical sensors. A judge who saw Anchor in Bengaluru **will** notice the similarity. **We name it first**, rather than hope nobody notices.

## 4. The real distinction

| | Anchor (from its public one-liner) | PRAMAAN (proposed) |
|---|---|---|
| Question answered | *Can this phone's **location** be trusted?* | *Was this **photo/video** genuinely captured live, here, now, by this camera?* |
| Object of trust | The device's position | The **media artifact** |
| Location's role | The whole answer | **One of three checks** (with Motion Consistency and FFT-based Moiré / Recapture Detection), fused together |
| Attack in focus | GPS/location spoofing | Photo-of-a-photo / screen recapture, reused old images, photos of a different site (CAG Karnataka 13/2025, evidence E2) |
| Output | (not publicly stated) | A **certificate** attached to the media, which a **second party** can check independently (Verifier Desk) |

**Core line:** *Anchor-style location trust answers "where is the phone?" PRAMAAN is designed to answer "is this capture genuine evidence?" A correct location alone does not show whether an image was captured live or recaptured from a screen, and the CAG documented a photo "captured from existing photograph" (E2, p. 116).*

Note to self: this argument holds **regardless** of how good Anchor is. It rests on the object of trust, not on Anchor being weak. Keep it that way.

## 5. Where honest uncertainty remains
- Anchor may already do (or add at the Finale) some media checks. Our distinction then narrows to FFT-based Moiré / Recapture Detection + a verifiable certificate + the welfare-audit framing.
- Geofence / Location Binding is the component where we overlap most, so we should **not** lead with geofencing. Lead with recapture (E2 quote 1), then the certificate.
- Whether judges score "complementary" or "duplicate". Mitigation: frame it as layers, "location trust is necessary, not sufficient."

## 6. Draft copy (claim-audited: C-7 pass)

**Stand-out paragraph (form, draft; Day 3: replaced with the audited `docs/submission-draft.md` §6 text):**
> Offline, on-device trust tools for location already exist; at the Bengaluru City Battle, Team Nexus's Anchor was one. PRAMAAN targets a different object: the capture itself. In MGNREGS the geo-tagged photograph is the proof that releases public money, and the CAG's 2025 Karnataka audit found photos "captured from existing photograph", a photo of a different shed, and the same photos reused across stages. A correct location alone does not show whether an image was captured live or recaptured from a screen. PRAMAAN is designed to fuse three checks, Motion Consistency, Geofence / Location Binding and FFT-based Moiré / Recapture Detection, into a certificate a second party can check independently. The checks, the certificate signing and the Verifier Desk will all be built live during the event, the phone app on the iQOO 15.

**One-liner for the deck:** "Location trust tells you where the phone is. PRAMAAN is designed to tell you whether the capture is genuine."

**If a judge asks, "Isn't this Anchor?":**
> "We respect Anchor, and it's closest to our location check. But location is one of our three signals. Our target is the capture: recapture from a screen and photos of a different site, cases the CAG documented. Reused photos are addressed by camera-only capture, not by a check. The output is a certificate that someone else can verify."

## 7. Re-verify before the Finale
- [x] Re-read thread 169162 on 2026-10-03: description, placing (1st Runner Up, Students bucket) and Wild Card entry (Grand Finale, Bengaluru, 9–11 Oct) unchanged, verbatim. Other Team Nexus posts (e.g. LinkedIn) not checked
- [x] §1 and §5 need no update (description unchanged). Re-read once more on the day before the Finale
