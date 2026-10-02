// Verifier Desk concept screen (S10–S12 as three stages of one concept screen, HANDOFF P4-F1).
// Verifier-facing, laptop-framed (PRD FR-7). Shows what the verifier would see for the certificate shared from
// SC-08. Nothing is opened, verified or computed; every value is a hardcoded, labelled sample.
import {
  LaptopFrame,
  StatusCard,
  ScoreBadge,
  StatusChip,
  SampleTag,
  LimitationNotice,
} from '../design-system/components.jsx';
import { SIGNING } from '../design-system/copy.js';
import { SAMPLE_CAPTURE } from '../core-screens/fixtures.js';
import { MoireConcept, MotionConcept, GeofenceConcept } from '../../person-2/evidence-visuals/EvidenceVisuals.jsx';

export default function VerifierDesk({ result }) {
  return (
    <LaptopFrame screenId="SC-10–SC-12" title="Verifier Desk concept">
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
          <p>
            <strong>Signature valid</strong> <span className="sample-tag">illustrative result</span>
          </p>
          <p className="support">
            No signature exists in this prototype. In the event build, the Verifier Desk checks the signature against
            the certificate's bundled public key. {SIGNING}.
          </p>
        </section>
      </div>

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
                <td className="vd-check-name">{c.check}</td>
                <td>
                  <StatusChip status={c.status} />
                </td>
                <td>
                  {c.score ? (
                    <>
                      {c.score} <SampleTag />
                    </>
                  ) : (
                    <span className="support">no score</span>
                  )}
                </td>
                <td className="support">{c.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="vd-visuals">
          <MoireConcept state={result.evidence.moire} />
          <MotionConcept state={result.evidence.motion} />
          <GeofenceConcept state={result.evidence.geofence} distance={result.distance} />
        </div>
      </section>

      <LimitationNotice />
    </LaptopFrame>
  );
}
