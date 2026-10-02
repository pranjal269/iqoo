// SC-06 Checking (S6). One non-quantitative checking state (D-10): the three check names, no per-check
// progress, no percentages, no durations. Day 3 (Plan Day 3 P1 step 4): a CSS-only "in progress" motion so checking
// visibly takes a moment. It is not tied to any measurement, has no JS timer and stops under reduced motion.
import { PhoneFrame, ScreenTitle, StatusCard } from '../design-system/components.jsx';
import { CHECK_ORDER } from '../design-system/copy.js';
import { CheckingIcon } from '../design-system/Icons.jsx';

export default function SC06Checking() {
  return (
    <PhoneFrame screenId="SC-06" title="Checking">
      <ScreenTitle>Checking the capture</ScreenTitle>
      <StatusCard tone="instruction" title="Checking" icon={CheckingIcon}>
        The capture goes through three authenticity checks, which are combined into one result.
      </StatusCard>
      <div className="checking-motion" role="img" aria-label="Checking in progress (illustration, not a measured time)">
        <span />
        <span />
        <span />
      </div>
      <ul className="check-list">
        {CHECK_ORDER.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </PhoneFrame>
  );
}
