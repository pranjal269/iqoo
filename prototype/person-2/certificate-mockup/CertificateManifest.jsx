// Certificate manifest mockup (Plan §6: prototype/person-2/certificate-mockup).
// JSON-style rendering of the complete PRD §7 schema for one hardcoded sample result. Display only: nothing is
// hashed, signed, generated or verified. Key names follow PRD §7 exactly; statuses follow HANDOFF D-2 / T-11.
import { STAMPS, SIGNING } from '../../person-1/design-system/copy.js';
import { SAMPLE_CAPTURE } from '../../person-1/core-screens/fixtures.js';

const q = (s) => `"${s}"`;

export default function CertificateManifest({ result }) {
  const [motion, geofence, moire] = result.checks;
  const check = (key, c, last) => [
    [2, `${q(key)}: {`],
    [3, `"score": ${c.score ?? 'null'},`, c.score !== null],
    [3, `"status": ${q(c.status)},`],
    [3, `"reason": ${q(c.reason)}`, Boolean(c.hasSampleValue)],
    [2, last ? '}' : '},'],
  ];

  // [indent, text, isSample]
  const lines = [
    [0, '{'],
    [1, `"version": ${q(SAMPLE_CAPTURE.version)},`],
    [1, `"captureId": ${q(SAMPLE_CAPTURE.captureId)},`, true],
    [1, `"timestamp": ${q(SAMPLE_CAPTURE.timestamp)},`, true],
    [1, '"device": {'],
    [2, `"model": ${q(SAMPLE_CAPTURE.device)},`],
    [2, `"androidVersion": ${q(SAMPLE_CAPTURE.androidVersion)}`],
    [1, '},'],
    [1, '"location": {'],
    [2, `"lat": ${SAMPLE_CAPTURE.lat},`, true],
    [2, `"lng": ${SAMPLE_CAPTURE.lng},`, true],
    [2, `"accuracyMeters": ${result.accuracyMeters},`, true],
    [2, `"registeredSiteId": ${q(SAMPLE_CAPTURE.site)},`, true],
    [2, `"distanceToRegisteredMeters": ${result.distanceMeters}`, true],
    [1, '},'],
    [1, '"media": {'],
    [2, `"sha256": ${q(SAMPLE_CAPTURE.mediaHash)},`],
    [2, `"durationSeconds": ${SAMPLE_CAPTURE.durationSeconds}`],
    [1, '},'],
    [1, '"checks": {'],
    ...check('motionConsistency', motion),
    ...check('geofence', geofence),
    ...check('moire', moire, true),
    [1, '},'],
    [1, '"fusion": {'],
    [2, `"realityScore": ${result.score},`, true],
    [2, `"verdict": ${q(result.verdict)}`],
    [1, '},'],
    [1, '"signature": {'],
    [2, '"alg": "ECDSA-SHA256",'],
    [2, `"publicKey": ${q(SAMPLE_CAPTURE.publicKey)},`],
    [2, `"value": ${q(SAMPLE_CAPTURE.signature)}`],
    [1, '}'],
    [0, '}'],
  ];

  return (
    <section className="manifest">
      <header className="manifest-head">
        <h3>Certificate manifest (PRD §7 schema)</h3>
        <p className="certificate-stamp">{STAMPS.certificate}</p>
      </header>
      <pre className="manifest-code">
        {lines.map(([indent, text, isSample], i) => (
          <div key={i} className="manifest-line">
            {'  '.repeat(indent)}
            {text}
            {isSample && <span className="manifest-comment">{`  // ${STAMPS.sample}`}</span>}
          </div>
        ))}
      </pre>
      <p className="support">
        Signature algorithm as named in PRD §7, proposed for the event build. No key, hash or signature exists in the
        prototype. {SIGNING}.
      </p>
    </section>
  );
}
