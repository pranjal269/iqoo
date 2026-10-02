// Proposed architecture for the event build (Plan §6: prototype/person-2/architecture; Plan Day 2 P2 steps 1–4).
// Sources: PRD §1.3, §6, §8.1–8.3; docs/architecture-concept.md §2–§6; docs/event-boundary.md.
// Everything here is PROPOSED: nothing is implemented, tested or measured. No weights, thresholds, cutoffs,
// accuracy or latency are shown. Technology names are labels only.
import { CHECK_ORDER, VERDICTS, STATUSES, SIGNING } from '../../person-1/design-system/copy.js';

const STAMP = 'Proposed implementation for the event';

function Stage({ n, title, children, tech }) {
  return (
    <div className="arch-stage">
      <p className="arch-stage-title">
        <span className="arch-stage-n">{n}</span> {title}
      </p>
      <div className="arch-stage-body">{children}</div>
      {tech && <p className="arch-tech">Proposed: {tech}</p>}
    </div>
  );
}

const Arrow = ({ label }) => (
  <div className="arch-arrow" aria-hidden="true">
    ↓{label && <span>{label}</span>}
  </div>
);

export default function ArchitectureDiagram() {
  return (
    <section className="arch">
      <header className="arch-head">
        <h3>PRAMAAN architecture</h3>
        <p className="arch-stamp">{STAMP}</p>
      </header>

      <div className="arch-boundary">
        <p className="arch-boundary-label">Phone app · on-device and offline: no network, cloud or account (PRD §3.2, §9)</p>

        <Stage n="1" title="Capture" tech="CameraX">
          3-second clip, camera-only: no gallery upload (PRD FR-1, FR-9)
        </Stage>
        <Arrow />
        <Stage n="2" title="Signal collection" tech="SensorManager">
          Video frames · gyroscope log · one GPS fix with its accuracy (PRD FR-1)
        </Stage>
        <Arrow />
        <div className="arch-stage">
          <p className="arch-stage-title">
            <span className="arch-stage-n">3</span> Three checks, each able to run, fail and report a reason on its own (PRD §8.3)
          </p>
          <div className="arch-checks">
            <div className="arch-check">
              <strong>{CHECK_ORDER[0]}</strong>
              <span>Motion implied by the gyroscope vs motion seen in the frames (PRD FR-3)</span>
            </div>
            <div className="arch-check">
              <strong>{CHECK_ORDER[1]}</strong>
              <span>Capture-time GPS vs the claimed registered site (PRD FR-2)</span>
            </div>
            <div className="arch-check">
              <strong>{CHECK_ORDER[2]}</strong>
              <span>Frequency pattern of a frame vs a real-scene baseline (PRD FR-4)</span>
            </div>
          </div>
          <p className="arch-tech">Proposed: OpenCV / FFT (deterministic signal processing, no trained model)</p>
        </div>
        <Arrow />
        <Stage n="4" title="Available check results">
          Each check reports {STATUSES.pass}, {STATUSES.fail}, {STATUSES.lowConfidence} or {STATUSES.unavailable} with a
          human-readable reason. An {STATUSES.unavailable} check is left out; the rest carry on (PRD FR-8).
        </Stage>
        <Arrow />
        <Stage n="5" title="Fusion → Reality Score">
          One fixed, explainable rule combines the available checks. No single check decides the result (PRD FR-5).
        </Stage>
        <Arrow />
        <Stage n="6" title="Verdict">
          {VERDICTS.genuine} · {VERDICTS.review} · {VERDICTS.fraudulent}
        </Stage>
        <Arrow />
        <Stage n="7" title="Certificate + signing" tech="Android Keystore">
          Manifest (PRD §7) + media + signature + public key in one file. {SIGNING}.
        </Stage>
      </div>

      <Arrow label="Hand-over to the verifier's laptop (mechanism not decided, HANDOFF D-8)" />

      <div className="arch-boundary arch-boundary-laptop">
        <p className="arch-boundary-label">Laptop</p>
        <Stage n="8" title="Verifier Desk">
          Checks the signature, then shows the verdict band, Reality Score, each check's score and reason, and the
          evidence: FFT magnitude plot, gyro vs optical-flow trace, geofence distance (PRD FR-7).
        </Stage>
      </div>

      <table className="arch-table">
        <thead>
          <tr>
            <th>Stage</th>
            <th>In this prototype</th>
            <th>Proposed for the event build</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Capture, signals</td><td>Screens with a camera placeholder; no camera or sensor access</td><td>Real 3-second clip, gyroscope and GPS on the loaner iQOO 15</td></tr>
          <tr><td>Three checks</td><td>Named on screen; no check runs</td><td>Real motion, geofence and moiré checks written during the event</td></tr>
          <tr><td>Fusion, verdict</td><td>Hardcoded sample results, chosen by the reviewer</td><td>Real fixed-rule fusion, tuned during the event</td></tr>
          <tr><td>Certificate, signing</td><td>Illustrative certificate; no key, hash or signature</td><td>Real app-level signing with Android Keystore</td></tr>
          <tr><td>Verifier Desk</td><td>Concept screen; nothing is opened or verified</td><td>Real laptop app that verifies the signature and shows the evidence</td></tr>
        </tbody>
      </table>
    </section>
  );
}
