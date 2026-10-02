// PRAMAAN design-system components — Day 2 Phase 2.
// Presentation only: every value is passed in as hardcoded prototype content. Nothing here computes,
// measures, detects, scores or signs anything, and nothing touches camera, sensor, location or crypto APIs.
import { STAMPS, LIMITATION, SIGNING } from './copy.js';
import {
  GenuineIcon,
  ReviewIcon,
  FraudulentIcon,
  WarningIcon,
  InfoIcon,
  LocationIcon,
  SealIcon,
} from './Icons.jsx';

/* Phone frame: every screen carries the screen stamp (claim-audit C-3, HANDOFF canonical stamps). */
export function PhoneFrame({ screenId, title, children }) {
  return (
    <figure className="phone-wrap">
      <figcaption className="phone-caption">
        <span className="phone-caption-id">{screenId}</span> {title}
      </figcaption>
      <div className="phone">
        <div className="phone-stamp">{STAMPS.screen}</div>
        <div className="phone-body">{children}</div>
      </div>
    </figure>
  );
}

export function ScreenTitle({ children, support }) {
  return (
    <header className="screen-title">
      <h2>{children}</h2>
      {support && <p className="support">{support}</p>}
    </header>
  );
}

/* Label for any number shown on a screen (D-7: labelled sample values only). */
export function SampleTag() {
  return <span className="sample-tag">{STAMPS.sample}</span>;
}

/* Status card. Tones: genuine | review | fraudulent (verdict bands, D-1) | instruction | warning. */
const toneIcons = {
  genuine: GenuineIcon,
  review: ReviewIcon,
  fraudulent: FraudulentIcon,
  instruction: InfoIcon,
  warning: WarningIcon,
};

export function StatusCard({ tone, title, icon, children }) {
  const Icon = icon || toneIcons[tone];
  return (
    <section className={`status-card tone-${tone}`}>
      <div className="status-card-head">
        <span className="status-card-icon">
          <Icon />
        </span>
        <h3>{title}</h3>
      </div>
      {children && <div className="status-card-body">{children}</div>}
    </section>
  );
}

/* Reality Score badge: display only, always a labelled sample value. */
export function ScoreBadge({ value }) {
  return (
    <div className="score-badge">
      <span className="score-badge-label">Reality Score</span>
      <span className="score-badge-value">{value}</span>
      <SampleTag />
    </div>
  );
}

/* Check status chip: the status word itself is the label (A2); colour is secondary. */
export function StatusChip({ status }) {
  return <span className={`status-chip status-${status}`}>{status}</span>;
}

/* Reason list row: check name + status + human-readable reason. */
export function ReasonRow({ check, status, reason, hasSampleValue }) {
  return (
    <li className="reason-row">
      <div className="reason-row-head">
        <span className="reason-row-check">{check}</span>
        <StatusChip status={status} />
      </div>
      <p className="reason-row-text">
        {reason} {hasSampleValue && <SampleTag />}
      </p>
    </li>
  );
}

export function ReasonList({ children }) {
  return <ul className="reason-list">{children}</ul>;
}

/* Primary button. The optional onClick only navigates between hardcoded prototype screens.
   When disabled, the reason is stated in text (A4). */
export function PrimaryButton({ children, disabled, disabledReason, onClick }) {
  return (
    <div className="primary-button-wrap">
      <button type="button" className="primary-button" disabled={disabled} onClick={disabled ? undefined : onClick}>
        {children}
      </button>
      {disabled && disabledReason && <p className="button-reason">{disabledReason}</p>}
    </div>
  );
}

/* Location indicator (PRD FR-1 wording "acquiring GPS, accuracy: Xm"). The accuracy is a labelled sample. */
export function LocationIndicator({ text, accuracy, tone = 'info' }) {
  return (
    <div className={`location-indicator tone-${tone}`}>
      <LocationIcon />
      <div>
        <p className="location-indicator-text">
          {text}, accuracy: {accuracy}
        </p>
        <SampleTag />
      </div>
    </div>
  );
}

/* Capture instruction: explicit text instruction with a decorative icon (A3). */
export function CaptureInstruction({ icon: Icon, text, detail }) {
  return (
    <div className="capture-instruction">
      <span className="capture-instruction-icon">
        <Icon />
      </span>
      <div>
        <p className="capture-instruction-text">{text}</p>
        {detail && <p className="support">{detail}</p>}
      </div>
    </div>
  );
}

/* Limitation notice: exact locked wording (D-6). */
export function LimitationNotice() {
  return (
    <p className="limitation-notice" role="note">
      {LIMITATION}
    </p>
  );
}

/* Certificate card: illustrative only. No signature, key or hash exists in this prototype.
   sections: [{ title, fields: [[label, value, isSample]] }]. Sample values carry the full sample label (D-7). */
export function CertificateCard({ sections }) {
  return (
    <section className="certificate-card">
      <div className="certificate-card-head">
        <SealIcon />
        <h3>Certificate</h3>
      </div>
      <p className="certificate-stamp">{STAMPS.certificate}</p>
      {sections.map((section) => (
        <div key={section.title} className="certificate-section">
          <h4>{section.title}</h4>
          <dl className="certificate-fields">
            {section.fields.map(([label, value, isSample]) => (
              <div key={label} className="certificate-field">
                <dt>{label}</dt>
                <dd>
                  {value}
                  {isSample && (
                    <>
                      <br />
                      <SampleTag />
                    </>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
      <p className="certificate-signing">{SIGNING}</p>
    </section>
  );
}

/* Conceptual visual frame: the stamp sits on the visual itself (claim-audit C-9). */
export function ConceptVisual({ title, children }) {
  return (
    <figure className="concept-visual">
      <figcaption>{title}</figcaption>
      {children}
      <p className="concept-stamp">{STAMPS.concept}</p>
    </figure>
  );
}

/* Laptop frame for the Verifier Desk concept (PRD FR-7: laptop application). Carries the screen stamp. */
export function LaptopFrame({ screenId, title, children }) {
  return (
    <figure className="laptop-wrap">
      <figcaption className="phone-caption">
        <span className="phone-caption-id">{screenId}</span> {title}
      </figcaption>
      <div className="laptop">
        <div className="phone-stamp">{STAMPS.screen}</div>
        <div className="laptop-titlebar">
          <span>PRAMAAN Verifier Desk (laptop)</span>
          <span className="support">Concept screen: not working software</span>
        </div>
        <div className="laptop-body">{children}</div>
      </div>
    </figure>
  );
}

/* Viewfinder placeholder: an illustration of the camera view. No camera is accessed. */
export function Viewfinder({ children }) {
  return (
    <div className="viewfinder" role="img" aria-label="Camera view placeholder (no camera access in the prototype)">
      <span className="viewfinder-note">Camera view placeholder: no camera access in the prototype</span>
      {children}
    </div>
  );
}
