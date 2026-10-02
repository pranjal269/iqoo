// Verifier Desk concept screen (S10–S12 as stages of one concept screen, HANDOFF P4-F1).
// Day 3 (P2-Q3 / P2-Q5, Plan §3 "drop certificate → verify → see evidence"): the stages are user-triggered:
//   'drop'     SC-10  no certificate opened yet; "Open sample certificate" (no file input, nothing is read)
//   'opened'   SC-11  certificate opened; "Verify signature"
//   'verified' SC-11  illustrative signature result; "See evidence"
//   'evidence' SC-12  verdict, per-check results and conceptual evidence (default, used by the gallery)
// Verifier-facing, laptop-framed (PRD FR-7). Nothing is opened, verified or computed; every value is a labelled sample.
import {
  LaptopFrame,
  StatusCard,
  ScoreBadge,
  StatusChip,
  SampleTag,
  LimitationNotice,
  PrimaryButton,
} from '../design-system/components.jsx';
import { SealIcon } from '../design-system/Icons.jsx';
import { SIGNING } from '../design-system/copy.js';
import { SAMPLE_CAPTURE } from '../core-screens/fixtures.js';
import { MoireConcept, MotionConcept, GeofenceConcept } from '../../person-2/evidence-visuals/EvidenceVisuals.jsx';

const STAGES = {
  drop: { screenId: 'SC-10', title: 'Verifier Desk concept · 1 Drop certificate' },
  opened: { screenId: 'SC-11', title: 'Verifier Desk concept · 2 Verify' },
  verified: { screenId: 'SC-11', title: 'Verifier Desk concept · 2 Verify' },
  evidence: { screenId: 'SC-12', title: 'Verifier Desk concept · 3 See evidence' },
};
const ORDER = ['drop', 'opened', 'verified', 'evidence'];

export default function VerifierDesk({ result, stage = 'evidence', onOpen, onVerify, onSeeEvidence }) {
  const reached = (s) => ORDER.indexOf(stage) >= ORDER.indexOf(s);
  const { screenId, title } = STAGES[stage];

  return (
    <LaptopFrame screenId={screenId} title={title}>
      {stage === 'drop' ? (
        <section className="vd-stage vd-drop">
          <p className="vd-stage-label">1 · Drop certificate</p>
          <SealIcon />
          <p>
            <strong>Drop a certificate file here</strong>
          </p>
          <p className="support">
            No certificate is opened yet. In the event build, the supervisor drops or opens the certificate file
            handed over from the phone. The prototype has no file input; the button opens the sample certificate.
          </p>
          <PrimaryButton onClick={onOpen}>Open sample certificate</PrimaryButton>
        </section>
      ) : (
        <div className="vd-stages">
          <section className="vd-stage">
            <p className="vd-stage-label">1 · Certificate opened</p>
            <p>
              <strong>{SAMPLE_CAPTURE.captureId}</strong> <SampleTag />
            </p>
            <p className="support">
              Site {SAMPLE_CAPTURE.site} · {SAMPLE_CAPTURE.timestamp} <SampleTag /> · {SAMPLE_CAPTURE.device}
            </p>
          </section>
          <section className="vd-stage">
            <p className="vd-stage-label">2 · Signature check</p>
            {reached('verified') ? (
              <p>
                <strong>Signature valid</strong> <span className="sample-tag">illustrative result</span>
              </p>
            ) : (
              <p>
                <strong>Not checked yet</strong>
              </p>
            )}
            <p className="support">
              No signature exists in this prototype. In the event build, the Verifier Desk checks the signature against
              the certificate's bundled public key. {SIGNING}.
            </p>
            {stage === 'opened' && <PrimaryButton onClick={onVerify}>Verify signature</PrimaryButton>}
            {stage === 'verified' && <PrimaryButton onClick={onSeeEvidence}>See evidence</PrimaryButton>}
          </section>
        </div>
      )}

      {stage === 'evidence' && (
        <section className="vd-stage">
          <p className="vd-stage-label">3 · Verdict and evidence</p>
          <div className="vd-verdict">
            <StatusCard tone={result.tone} title={result.verdict}>
              {result.summary}
            </StatusCard>
            <div>
              <ScoreBadge value={result.score} />
              <p className="support">{result.basis}</p>
            </div>
          </div>

          <div className="vd-table-wrap">
            <table className="vd-checks">
              <thead>
                <tr>
                  <th>Check</th>
                  <th>Status</th>
                  <th>Score</th>
                  <th>Reason</th>
                </tr>
              </thead>
              <tbody>
                {result.checks.map((c) => (
                  <tr key={c.check}>
                    <td className="vd-check-name" data-label="Check">{c.check}</td>
                    <td data-label="Status">
                      <StatusChip status={c.status} />
                    </td>
                    <td data-label="Score">
                      {c.score ? (
                        <>
                          {c.score} <SampleTag />
                        </>
                      ) : (
                        <span className="support">no score</span>
                      )}
                    </td>
                    <td className="support" data-label="Reason">
                      {c.reason} {c.hasSampleValue && <SampleTag />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="vd-visuals">
            <MoireConcept state={result.evidence.moire} />
            <MotionConcept state={result.evidence.motion} />
            <GeofenceConcept state={result.evidence.geofence} distance={result.distance} />
          </div>
        </section>
      )}

      <LimitationNotice />
    </LaptopFrame>
  );
}
