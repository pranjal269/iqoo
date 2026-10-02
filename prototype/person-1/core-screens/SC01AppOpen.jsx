// SC-01 App Open (S1). First screen of the prototype (HANDOFF P3-Q1): screen stamp + purpose line from the
// meaning of PRD §1.1, phrased "designed to…" (claim-audit C-2), without "photo" (D-3). Limitation line added.
import { PhoneFrame, ScreenTitle, StatusCard, LimitationNotice } from '../design-system/components.jsx';
import { CAPTURE } from '../design-system/copy.js';

export default function SC01AppOpen() {
  return (
    <PhoneFrame screenId="SC-01" title="App Open">
      <ScreenTitle support="Capture-time evidence for field surveyors">PRAMAAN</ScreenTitle>
      <p>
        PRAMAAN is designed to prove that a {CAPTURE} was genuinely captured by this phone, at a registered
        site, at the moment claimed.
      </p>
      <LimitationNotice />
      <div className="push-bottom">
        <StatusCard tone="instruction" title="Starting">
          Calibration comes next.
        </StatusCard>
      </div>
    </PhoneFrame>
  );
}
