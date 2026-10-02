// SC-08 Certificate (S8). Certificate detail showing every PRD §7 manifest field (complete since Phase 4),
// for the result shown on SC-07. The full JSON-style manifest is prototype/person-2/certificate-mockup/.
// Illustrative only: no key, hash or signature exists. "Share certificate" navigates to the Verifier Desk concept.
import {
  PhoneFrame,
  ScreenTitle,
  StatusCard,
  CertificateCard,
  LimitationNotice,
  PrimaryButton,
} from '../design-system/components.jsx';
import { SAMPLE_CAPTURE } from '../core-screens/fixtures.js';

export default function SC08Certificate({ result, onShare }) {
  const sections = [
    {
      title: 'Result',
      fields: [
        ['Verdict band', result.verdict],
        ['Reality Score', result.score, true],
      ],
    },
    {
      title: 'Checks',
      fields: result.checks.flatMap((c) => [
        [c.check, `${c.status}: ${c.reason}`],
        [`${c.check} score`, c.score ?? 'no score (UNAVAILABLE)', c.score !== null],
      ]),
    },
    {
      title: 'Capture',
      fields: [
        ['Manifest version', SAMPLE_CAPTURE.version],
        ['Capture ID', SAMPLE_CAPTURE.captureId, true],
        ['Timestamp', SAMPLE_CAPTURE.timestamp, true],
        ['Device', SAMPLE_CAPTURE.device],
        ['Android version', SAMPLE_CAPTURE.androidVersion],
        ['Media', SAMPLE_CAPTURE.media],
        ['Media hash', SAMPLE_CAPTURE.mediaHash],
      ],
    },
    {
      title: 'Location',
      fields: [
        ['Claimed registered site', SAMPLE_CAPTURE.site, true],
        ['Coordinates', SAMPLE_CAPTURE.location, true],
        ['GPS accuracy', result.accuracy, true],
        ['Distance to registered site', result.distance, true],
      ],
    },
    {
      title: 'Signature',
      fields: [
        ['Algorithm', SAMPLE_CAPTURE.signatureAlg],
        ['Signature', SAMPLE_CAPTURE.signature],
        ['Public key', SAMPLE_CAPTURE.publicKey],
      ],
    },
  ];

  return (
    <PhoneFrame screenId="SC-08" title="Certificate">
      <ScreenTitle support="For independent checking by a second party.">Certificate</ScreenTitle>
      <StatusCard tone={result.tone} title={result.verdict} />
      <CertificateCard sections={sections} />
      <LimitationNotice />
      <div className="sticky-action">
        <PrimaryButton onClick={onShare}>Share certificate</PrimaryButton>
      </div>
    </PhoneFrame>
  );
}
