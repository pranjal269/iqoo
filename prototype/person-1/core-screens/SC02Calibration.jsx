// SC-02 Hold-Still Calibration (S2). Instruction only; no progress bar, timer or sensor access.
import { PhoneFrame, ScreenTitle, CaptureInstruction, StatusCard } from '../design-system/components.jsx';
import { StillIcon } from '../design-system/Icons.jsx';

export default function SC02Calibration() {
  return (
    <PhoneFrame screenId="SC-02" title="Hold-Still Calibration">
      <ScreenTitle>Getting ready</ScreenTitle>
      <CaptureInstruction icon={StillIcon} text="Hold the phone still" detail="PRAMAAN is preparing the phone." />
      <div className="push-bottom">
        <StatusCard tone="instruction" title="Calibrating">
          Keep the phone still until this step finishes.
        </StatusCard>
      </div>
    </PhoneFrame>
  );
}
