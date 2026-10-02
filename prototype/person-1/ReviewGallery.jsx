// Static review gallery: every screen and design-system component side by side. No navigation.
import SC01AppOpen from './core-screens/SC01AppOpen.jsx';
import SC02Calibration from './core-screens/SC02Calibration.jsx';
import SC03CapturePreparation from './core-screens/SC03CapturePreparation.jsx';
import SC04ReadyToCapture from './core-screens/SC04ReadyToCapture.jsx';
import SC05Capturing from './core-screens/SC05Capturing.jsx';
import SC06Checking from './core-screens/SC06Checking.jsx';
import SC07Result from './core-screens/SC07Result.jsx';
import SC08Certificate from './clickable-prototype/SC08Certificate.jsx';
import SC09HandOver from './clickable-prototype/SC09HandOver.jsx';
import VerifierDesk from './clickable-prototype/VerifierDesk.jsx';
import { SAMPLE_RESULTS, SAMPLE_SITE } from './core-screens/fixtures.js';
import {
  StatusCard,
  ScoreBadge,
  StatusChip,
  ReasonList,
  ReasonRow,
  PrimaryButton,
  LocationIndicator,
  CaptureInstruction,
  LimitationNotice,
  CertificateCard,
} from './design-system/components.jsx';
import { PanIcon } from './design-system/Icons.jsx';
import { VERDICTS, STATUSES, CHECKS } from './design-system/copy.js';

export default function ReviewGallery() {
  return (
    <>
      <section>
        <h2 className="gallery-section">Core screens (SC-01 to SC-07)</h2>
        <div className="gallery-grid">
          <SC01AppOpen />
          <SC02Calibration />
          <SC03CapturePreparation />
          <SC04ReadyToCapture />
          <SC04ReadyToCapture timeout />
          <SC05Capturing />
          <SC06Checking />
          <SC07Result variantId="V-LG" result={SAMPLE_RESULTS.likelyGenuine} />
          <SC07Result variantId="V-NR" result={SAMPLE_RESULTS.needsReview} />
          <SC07Result variantId="V-LF" result={SAMPLE_RESULTS.likelyFraudulent} />
        </div>
      </section>

      <section>
        <h2 className="gallery-section">Certificate (SC-08), Hand-over (SC-09) and Verifier Desk concept (SC-10–SC-12), Likely Genuine sample</h2>
        <div className="gallery-grid">
          <SC08Certificate result={SAMPLE_RESULTS.likelyGenuine} />
          <SC09HandOver result={SAMPLE_RESULTS.likelyGenuine} />
          <VerifierDesk result={SAMPLE_RESULTS.likelyGenuine} stage="drop" />
          <VerifierDesk result={SAMPLE_RESULTS.likelyGenuine} />
        </div>
      </section>

      <section>
        <h2 className="gallery-section">Design system components</h2>
        <div className="component-grid">
          <div className="component-cell">
            <h3>Status Card</h3>
            <StatusCard tone="genuine" title={VERDICTS.genuine} />
            <StatusCard tone="review" title={VERDICTS.review} />
            <StatusCard tone="fraudulent" title={VERDICTS.fraudulent} />
            <StatusCard tone="instruction" title="Instruction" />
            <StatusCard tone="warning" title="Warning" />
          </div>
          <div className="component-cell">
            <h3>Score Badge</h3>
            <ScoreBadge value="88" />
            <h3>Status chips</h3>
            <p className="chip-row">
              <StatusChip status={STATUSES.pass} /> <StatusChip status={STATUSES.fail} />{' '}
              <StatusChip status={STATUSES.lowConfidence} /> <StatusChip status={STATUSES.unavailable} />
            </p>
          </div>
          <div className="component-cell">
            <h3>Reason List Row</h3>
            <ReasonList>
              <ReasonRow check={CHECKS.motion} status={STATUSES.pass} reason="Phone movement matches the movement seen in the clip." />
            </ReasonList>
            <h3>Primary Button</h3>
            <PrimaryButton>Start 3-second clip</PrimaryButton>
            <PrimaryButton disabled disabledReason="Shown with a text reason when disabled.">
              Start 3-second clip
            </PrimaryButton>
          </div>
          <div className="component-cell">
            <h3>Location Indicator</h3>
            <LocationIndicator text="Acquiring GPS" accuracy="12 m" tone="warning" />
            <LocationIndicator text="GPS fix" accuracy="8.2 m" />
            <h3>Capture Instruction</h3>
            <CaptureInstruction icon={PanIcon} text="Slowly move the phone left-to-right" />
            <h3>Limitation Notice</h3>
            <LimitationNotice />
          </div>
          <div className="component-cell">
            <h3>Certificate Card</h3>
            <CertificateCard
              sections={[
                {
                  title: 'Result',
                  fields: [
                    ['Verdict band', VERDICTS.genuine],
                    ['Reality Score', '88', true],
                    ['Registered site', SAMPLE_SITE, true],
                  ],
                },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
