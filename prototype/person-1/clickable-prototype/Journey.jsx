// Clickable journey: SC-01 → … → SC-07 → SC-08 → SC-09 → Verifier Desk concept (SC-10 → SC-11 → SC-12).
// Navigation only. The transitions below are a hardcoded list of "which screen comes next"; nothing is decided,
// measured or computed. Steps the PRD makes automatic (calibration, GPS fix or timeout, end of the 3-second clip,
// the certificate file reaching the laptop) are advanced by a labelled prototype control instead of a JS timer.
// The reviewer picks which sample result to show. Back and Restart are reviewer controls, not product features
// (Day 3, P2-Q4: the product journey is forward-only; D-9: no retake).
import { useState } from 'react';
import SC01AppOpen from '../core-screens/SC01AppOpen.jsx';
import SC02Calibration from '../core-screens/SC02Calibration.jsx';
import SC03CapturePreparation from '../core-screens/SC03CapturePreparation.jsx';
import SC04ReadyToCapture from '../core-screens/SC04ReadyToCapture.jsx';
import SC05Capturing from '../core-screens/SC05Capturing.jsx';
import SC06Checking from '../core-screens/SC06Checking.jsx';
import SC07Result from '../core-screens/SC07Result.jsx';
import SC08Certificate from './SC08Certificate.jsx';
import SC09HandOver from './SC09HandOver.jsx';
import VerifierDesk from './VerifierDesk.jsx';
import { SAMPLE_RESULTS } from '../core-screens/fixtures.js';

const VARIANTS = [
  { id: 'V-LG', key: 'likelyGenuine' },
  { id: 'V-NR', key: 'needsReview' },
  { id: 'V-LF', key: 'likelyFraudulent' },
];

const STEPS = {
  'SC-01': { events: [{ next: 'SC-02', label: 'the app has started' }] },
  'SC-02': { events: [{ next: 'SC-03', label: 'calibration is complete' }] },
  'SC-03': {
    events: [
      { next: 'SC-04', label: 'a GPS fix is available' },
      { next: 'SC-04T', label: 'GPS timed out (best-available fix)', alt: true },
    ],
  },
  'SC-04': { inScreen: 'Start 3-second clip' },
  'SC-04T': { inScreen: 'Start 3-second clip' },
  'SC-05': { events: [{ next: 'SC-06', label: 'the 3-second clip ends' }] },
  'SC-06': { chooseResult: true },
  'SC-07': { inScreen: 'View certificate' },
  'SC-08': { inScreen: 'Share certificate' },
  'SC-09': { events: [{ next: 'VD-drop', label: 'the certificate file reaches the Verifier Desk laptop' }] },
  'VD-drop': { inScreen: 'Open sample certificate' },
  'VD-opened': { inScreen: 'Verify signature' },
  'VD-verified': { inScreen: 'See evidence' },
  'VD-evidence': { end: true },
};

export default function Journey() {
  const [screen, setScreen] = useState('SC-01');
  const [variant, setVariant] = useState(null);
  const [history, setHistory] = useState([]);

  const go = (next, nextVariant = variant) => {
    setHistory((h) => [...h, { screen, variant }]);
    setScreen(next);
    setVariant(nextVariant);
  };
  const back = () => {
    const prev = history[history.length - 1];
    if (!prev) return;
    setHistory((h) => h.slice(0, -1));
    setScreen(prev.screen);
    setVariant(prev.variant);
  };
  const restart = () => {
    setScreen('SC-01');
    setVariant(null);
    setHistory([]);
  };

  const result = variant ? SAMPLE_RESULTS[variant.key] : null;
  const step = STEPS[screen];
  const onDesk = screen.startsWith('VD-');

  const view = {
    'SC-01': <SC01AppOpen />,
    'SC-02': <SC02Calibration />,
    'SC-03': <SC03CapturePreparation />,
    'SC-04': <SC04ReadyToCapture onStart={() => go('SC-05')} />,
    'SC-04T': <SC04ReadyToCapture timeout onStart={() => go('SC-05')} />,
    'SC-05': <SC05Capturing />,
    'SC-06': <SC06Checking />,
    'SC-07': result && <SC07Result variantId={variant.id} result={result} onViewCertificate={() => go('SC-08')} />,
    'SC-08': result && <SC08Certificate result={result} onShare={() => go('SC-09')} />,
    'SC-09': result && <SC09HandOver result={result} />,
  }[screen];

  return (
    <div className={`journey ${onDesk ? 'journey-wide' : ''}`}>
      <div className="journey-stage">
        {onDesk && result ? (
          <VerifierDesk
            result={result}
            stage={screen.slice(3)}
            onOpen={() => go('VD-opened')}
            onVerify={() => go('VD-verified')}
            onSeeEvidence={() => go('VD-evidence')}
          />
        ) : (
          view
        )}
      </div>

      <aside className="proto-controls" aria-label="Prototype controls">
        <p className="proto-controls-title">Prototype controls</p>
        <p className="support">Not part of the product. They move between hardcoded screens.</p>

        {step.events?.map((e) => (
          <button
            key={e.next}
            type="button"
            className={`proto-button ${e.alt ? '' : 'proto-button-primary'}`}
            onClick={() => go(e.next)}
          >
            Continue: {e.label}
          </button>
        ))}
        {step.events && <p className="support">In the product this step happens by itself; in the prototype you advance it with this control.</p>}

        {step.inScreen && (
          <p className="support">
            Use <strong>{step.inScreen}</strong> in the screen to continue.
          </p>
        )}

        {step.chooseResult && (
          <div className="proto-choice proto-choice-reveal">
            <p className="support">
              Choose which sample result to show. The prototype makes no decision. The short pause before these
              options appear is a simulated transition, not a measured processing time.
            </p>
            {VARIANTS.map((v) => (
              <button
                key={v.id}
                type="button"
                className="proto-button proto-button-primary"
                onClick={() => go('SC-07', v)}
              >
                Show sample result: {SAMPLE_RESULTS[v.key].verdict}
              </button>
            ))}
          </div>
        )}

        {step.end && <p className="support">End of the journey: the verifier has the verdict, reasons and evidence.</p>}

        <div className="proto-nav">
          <button type="button" className="proto-button" onClick={back} disabled={history.length === 0}>
            Back
          </button>
          <button type="button" className="proto-button" onClick={restart} disabled={screen === 'SC-01'}>
            Restart
          </button>
        </div>
      </aside>
    </div>
  );
}
