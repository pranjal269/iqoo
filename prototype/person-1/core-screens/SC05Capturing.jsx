// SC-05 Capturing (S5). Names the capture a "3-second clip" (P4-F2); no countdown, timer or progress bar.
import { PhoneFrame, ScreenTitle, Viewfinder, CaptureInstruction } from '../design-system/components.jsx';
import { PanIcon } from '../design-system/Icons.jsx';
import { CAPTURE } from '../design-system/copy.js';

export default function SC05Capturing() {
  return (
    <PhoneFrame screenId="SC-05" title="Capturing">
      <ScreenTitle>Capturing {CAPTURE}</ScreenTitle>
      <Viewfinder>
        <PanIcon />
      </Viewfinder>
      <CaptureInstruction
        icon={PanIcon}
        text="Slowly move the phone left-to-right"
        detail="Keep the gentle pan going until capture ends."
      />
    </PhoneFrame>
  );
}
