// SC-04 Ready to Capture (S4), V-NORMAL only (V-TIMEOUT deferred to Day 3, P2-Q1).
// Camera-only: the only entry point is the capture button; no gallery/upload control exists (PRD FR-9).
import {
  PhoneFrame,
  ScreenTitle,
  Viewfinder,
  LocationIndicator,
  PrimaryButton,
} from '../design-system/components.jsx';
import { CaptureIcon } from '../design-system/Icons.jsx';
import { CAPTURE } from '../design-system/copy.js';
import { SAMPLE_GPS } from './fixtures.js';

export default function SC04ReadyToCapture({ onStart }) {
  return (
    <PhoneFrame screenId="SC-04" title="Ready to Capture">
      <ScreenTitle support="Capture is camera-only. There is no gallery or upload option.">Ready to capture</ScreenTitle>
      <Viewfinder>
        <CaptureIcon />
      </Viewfinder>
      <LocationIndicator text="GPS fix" accuracy={SAMPLE_GPS.fixAccuracy} />
      <PrimaryButton onClick={onStart}>Start {CAPTURE}</PrimaryButton>
    </PhoneFrame>
  );
}
