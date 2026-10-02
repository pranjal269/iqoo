// SC-07 Result (S7). Renders one hardcoded result fixture: verdict, sample Reality Score, per-check status and
// reason. Nothing is calculated. Limitation line on every variant (D-6). "View certificate" navigates to SC-08
// in the clickable prototype.
import {
  PhoneFrame,
  StatusCard,
  ScoreBadge,
  ReasonList,
  ReasonRow,
  LimitationNotice,
  PrimaryButton,
} from '../design-system/components.jsx';

export default function SC07Result({ variantId, result, onViewCertificate }) {
  return (
    <PhoneFrame screenId={`SC-07 ${variantId}`} title={`Result: ${result.verdict}`}>
      <StatusCard tone={result.tone} title={result.verdict}>
        {result.summary}
      </StatusCard>
      <ScoreBadge value={result.score} />
      <p className="support">{result.basis}</p>
      <ReasonList>
        {result.checks.map((c) => (
          <ReasonRow key={c.check} {...c} />
        ))}
      </ReasonList>
      <LimitationNotice />
      <div className="push-bottom">
        <PrimaryButton onClick={onViewCertificate}>View certificate</PrimaryButton>
      </div>
    </PhoneFrame>
  );
}
