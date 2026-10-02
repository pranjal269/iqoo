// SC-06 Checking (S6). One non-quantitative checking state (D-10): the three check names, no per-check
// progress, no percentages, no durations, no animation standing in for processing.
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
      <ul className="check-list">
        {CHECK_ORDER.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </PhoneFrame>
  );
}
