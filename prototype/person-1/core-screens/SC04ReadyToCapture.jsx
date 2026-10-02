// SC-04 Ready to Capture (S4). V-NORMAL, and V-TIMEOUT (Day 3, P2-Q1): after a GPS timeout the PRD continues with
// the best-available fix and reports the limited accuracy in the reasons (PRD FR-2). No timeout duration is shown.
// Camera-only: the only entry point is the capture button; no gallery/upload control exists (PRD FR-9).
import {
  PhoneFrame,
  ScreenTitle,
  Viewfinder,
  LocationIndicator,
  StatusCard,
  PrimaryButton,
} from '../design-system/components.jsx';
import { CaptureIcon } from '../design-system/Icons.jsx';
import { CAPTURE } from '../design-system/copy.js';
import { SAMPLE_GPS } from './fixtures.js';

export default function SC04ReadyToCapture({ onStart, timeout = false }) {
  return (
    <PhoneFrame screenId={timeout ? 'SC-04 V-TIMEOUT' : 'SC-04'} title="Ready to Capture">
      <ScreenTitle support="Capture is camera-only. There is no gallery or upload option.">Ready to capture</ScreenTitle>
      <Viewfinder>
        <CaptureIcon />
      </Viewfinder>
      {timeout ? (
        <>
          <LocationIndicator text="Best available GPS fix" accuracy={SAMPLE_GPS.timeoutAccuracy} tone="warning" />
          <StatusCard tone="warning" title="Location accuracy is limited">
            GPS did not reach a precise fix in time. Capture can continue; the limited accuracy is reported in the
            result reasons.
          </StatusCard>
        </>
      ) : (
        <LocationIndicator text="GPS fix" accuracy={SAMPLE_GPS.fixAccuracy} />
      )}
      <PrimaryButton onClick={onStart}>Start {CAPTURE}</PrimaryButton>
    </PhoneFrame>
  );
}
