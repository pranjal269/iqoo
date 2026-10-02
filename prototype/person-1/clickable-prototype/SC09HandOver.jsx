// SC-09 Hand-over (S9). Day 3 decisions D-8 / P2-Q2: a visible phone screen. The certificate is one file
// (PRD FR-6) that moves from the phone to the verifier's laptop without a cloud service (PRD §3.2); the Verifier Desk
// opens a dropped / opened file (PRD FR-7). The transfer method is chosen in the event build. Nothing is sent here.
import { PhoneFrame, ScreenTitle, StatusCard, SampleTag } from '../design-system/components.jsx';
import { SealIcon } from '../design-system/Icons.jsx';
import { SAMPLE_CAPTURE } from '../core-screens/fixtures.js';

export default function SC09HandOver({ result }) {
  return (
    <PhoneFrame screenId="SC-09" title="Hand-over">
      <ScreenTitle support="The certificate goes to the supervisor's Verifier Desk laptop.">Hand over the certificate</ScreenTitle>
      <div className="handover-file">
        <SealIcon />
        <div>
          <p className="handover-file-name">
            Certificate file: {SAMPLE_CAPTURE.captureId}
          </p>
          <SampleTag />
          <p className="support">Verdict band in the file: {result.verdict}</p>
        </div>
      </div>
      <StatusCard tone="instruction" title="Offline hand-over">
        The file moves from this phone to the laptop without a cloud service. The transfer method is chosen in the event
        build. Nothing is sent in this prototype.
      </StatusCard>
    </PhoneFrame>
  );
}
