// Authoritative conceptual evidence visuals (Plan §6: prototype/person-2/evidence-visuals).
// Used by the Verifier Desk concept and the technical package. Moved here from
// prototype/person-1/clickable-prototype/ConceptVisuals.jsx in Phase 4 (single source; that file was removed).
//
// Hand-authored static SVG shapes: no data, no FFT, no optical flow, no distance calculation.
// Each carries "Conceptual illustration, not measured data" on the visual (claim-audit C-9).
import { ConceptVisual, SampleTag } from '../../person-1/design-system/components.jsx';

const svgProps = { viewBox: '0 0 200 120', role: 'img' };

// FFT magnitude plot (concept). "clean": no periodic peaks. "peaks": periodic peaks, as when a screen is filmed.
export function MoireConcept({ state, title = 'FFT magnitude plot (concept)' }) {
  return (
    <ConceptVisual title={title}>
      <svg {...svgProps} aria-label="Concept sketch of a frequency plot">
        <rect x="0" y="0" width="200" height="120" rx="6" fill="#f3f5f8" />
        <ellipse cx="100" cy="60" rx="70" ry="42" fill="none" stroke="#c9d0d9" />
        <ellipse cx="100" cy="60" rx="45" ry="27" fill="none" stroke="#b8c1cc" />
        <ellipse cx="100" cy="60" rx="20" ry="12" fill="#dde3ea" stroke="#a9b3bf" />
        {state === 'peaks' && (
          <g fill="#a8322a">
            <circle cx="55" cy="33" r="5" />
            <circle cx="145" cy="87" r="5" />
            <circle cx="145" cy="33" r="5" />
            <circle cx="55" cy="87" r="5" />
          </g>
        )}
      </svg>
      <p className="support">
        {state === 'peaks'
          ? 'Sketch: periodic bright spots of the kind a filmed screen produces.'
          : 'Sketch: no periodic bright spots.'}
      </p>
    </ConceptVisual>
  );
}

// Gyro-implied motion vs optical flow (concept). "match" | "mismatch" | "unavailable".
export function MotionConcept({ state, title = 'Gyro vs optical-flow trace (concept)' }) {
  const flow = {
    match: 'M10 73 C40 45, 70 43, 100 63 S160 88, 190 53',
    mismatch: 'M10 62 L50 64 L90 60 L130 63 L170 61 L190 62',
  }[state];
  return (
    <ConceptVisual title={title}>
      <svg {...svgProps} aria-label="Concept sketch of two motion traces">
        <rect x="0" y="0" width="200" height="120" rx="6" fill="#f3f5f8" />
        <path d="M10 70 C40 40, 70 40, 100 60 S160 90, 190 50" fill="none" stroke="#1f5fa8" strokeWidth="2.5" />
        {flow && <path d={flow} fill="none" stroke="#515b68" strokeWidth="2.5" strokeDasharray="5 4" />}
        {state === 'unavailable' && (
          <text x="100" y="108" textAnchor="middle" fontSize="10" fill="#515b68">
            optical-flow trace unavailable
          </text>
        )}
      </svg>
      <p className="support">
        Solid: motion implied by the gyroscope. Dashed: motion seen in the clip.{' '}
        {state === 'match' && 'Sketch: the two follow each other.'}
        {state === 'mismatch' && 'Sketch: the two do not follow each other.'}
        {state === 'unavailable' && 'Sketch: this check was UNAVAILABLE.'}
      </p>
    </ConceptVisual>
  );
}

// Geofence distance (concept). "near" | "far" | "uncertain". Distance is an authored sample value; no threshold
// or boundary is drawn.
const capturePos = { near: [125, 48], uncertain: [125, 48], far: [178, 22] };

export function GeofenceConcept({ state, distance, title = 'Geofence distance (concept)' }) {
  const [cx, cy] = capturePos[state];
  return (
    <ConceptVisual title={title}>
      <svg {...svgProps} aria-label="Concept sketch of capture position and registered site">
        <rect x="0" y="0" width="200" height="120" rx="6" fill="#f3f5f8" />
        {state === 'uncertain' && <circle cx={cx} cy={cy} r="36" fill="#e8f0fb" stroke="#9bb8dc" strokeDasharray="4 3" />}
        <line x1="80" y1="68" x2={cx} y2={cy} stroke="#515b68" strokeWidth="1.5" strokeDasharray="4 3" />
        <path d="M80 72 c-9-9-12-15-12-20 a12 12 0 0 1 24 0 c0 5-3 11-12 20z" fill="#1b1f24" />
        <circle cx="80" cy="52" r="4" fill="#f3f5f8" />
        <circle cx={cx} cy={cy} r="6" fill="#1f5fa8" />
        <text x="80" y="92" textAnchor="middle" fontSize="10" fill="#1b1f24">registered site</text>
        <text x={cx} y={cy + 20} textAnchor="middle" fontSize="10" fill="#1b1f24">capture</text>
      </svg>
      <p className="support">
        Distance to the registered site: {distance} <SampleTag />
        {state === 'uncertain' && ' Shaded area: coarse GPS accuracy (LOW_CONFIDENCE).'}
        {state === 'far' && ' Sketch: captured away from the claimed site.'}
      </p>
    </ConceptVisual>
  );
}
