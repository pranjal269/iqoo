# Attributions

Created 2026-10-01 (Day 2 · Phase 2) on first use of third-party material, per `docs/rule-compliance-checklist.md` C1 and playbook R2 ("Open-source libraries and frameworks are fine with attribution").

## Direct dependencies — `prototype/person-1/` (presentation-only prototype, HANDOFF Day 2 · Phase 1, P1 Q5)

| Package | Version | Licence | Use |
|---|---|---|---|
| react | 19.3.0 | MIT | UI components |
| react-dom | 19.3.0 | MIT | Rendering in the browser |
| vite | 8.3.1 | MIT | Dev server and build (development only) |
| @vitejs/plugin-react | 6.1.1 | MIT | JSX support for Vite (development only) |

Transitive packages installed by the above (not used directly): rolldown, @rolldown/binding-win32-x64-msvc, @rolldown/pluginutils, @oxc-project/types, postcss, nanoid, picocolors, picomatch, tinyglobby, fdir, scheduler, source-map-js (MIT / ISC / BSD-3-Clause); lightningcss, lightningcss-win32-x64-msvc (MPL-2.0); detect-libc (Apache-2.0). Exact versions are pinned in `prototype/person-1/package-lock.json`.

None of these packages provides camera, sensor, location, cryptography, FFT, image-processing or ML functionality to the prototype, and none is used for it (HANDOFF P1 Q5 boundary).

## Fonts, icons, images

- Fonts: system font stack only; no font files are bundled.
- Icons: drawn for this project as inline SVG (`prototype/person-1/design-system/Icons.jsx`); no icon set used.
- Images: none.
