// SC-03 Capture Preparation (S3). Claimed site is display-only (D-4); GPS indicator uses PRD FR-1 wording;
// "capture not yet allowed" is stated in text (A4). All values are labelled samples (D-7).
import {
  PhoneFrame,
  ScreenTitle,
  LocationIndicator,
  StatusCard,
  PrimaryButton,
  SampleTag,
} from '../design-system/components.jsx';
import { CAPTURE } from '../design-system/copy.js';
import { SAMPLE_SITE, SAMPLE_GPS } from './fixtures.js';

export default function SC03CapturePreparation() {
  return (
    <PhoneFrame screenId="SC-03" title="Capture Preparation">
      <ScreenTitle>Preparing to capture</ScreenTitle>
      <div>
        <p className="support">Claimed registered site</p>
        <p>
          <strong>{SAMPLE_SITE}</strong> <SampleTag />
        </p>
      </div>
      <LocationIndicator text="Acquiring GPS" accuracy={SAMPLE_GPS.acquiringAccuracy} tone="warning" />
      <StatusCard tone="warning" title="Capture not yet allowed">
        Location is still being acquired.
      </StatusCard>
      <div className="push-bottom">
        <PrimaryButton disabled disabledReason="Capture is not yet allowed while GPS is acquiring.">
          Start {CAPTURE}
        </PrimaryButton>
      </div>
    </PhoneFrame>
  );
}
