// Clickable journey: SC-01 → … → SC-07 → SC-08 → Verifier Desk concept.
// Navigation only. The transitions below are a hardcoded list of "which screen comes next"; nothing is decided,
// measured or computed. Steps the PRD makes automatic (calibration, GPS fix, end of the 3-second clip) are advanced
// by a labelled prototype control instead of a timer. The reviewer picks which sample result to show.
import { useState } from 'react';
import SC01AppOpen from '../core-screens/SC01AppOpen.jsx';
import SC02Calibration from '../core-screens/SC02Calibration.jsx';
import SC03CapturePreparation from '../core-screens/SC03CapturePreparation.jsx';
import SC04ReadyToCapture from '../core-screens/SC04ReadyToCapture.jsx';
import SC05Capturing from '../core-screens/SC05Capturing.jsx';
import SC06Checking from '../core-screens/SC06Checking.jsx';
import SC07Result from '../core-screens/SC07Result.jsx';
import SC08Certificate from './SC08Certificate.jsx';
import VerifierDesk from './VerifierDesk.jsx';
import { SAMPLE_RESULTS } from '../core-screens/fixtures.js';

const VARIANTS = [
  { id: 'V-LG', key: 'likelyGenuine' },
  { id: 'V-NR', key: 'needsReview' },
  { id: 'V-LF', key: 'likelyFraudulent' },
];

const STEPS = {
  'SC-01': { next: 'SC-02', event: 'the app has started' },
  'SC-02': { next: 'SC-03', event: 'calibration is complete' },
  'SC-03': { next: 'SC-04', event: 'a GPS fix is available' },
  'SC-04': { inScreen: 'Start 3-second clip' },
  'SC-05': { next: 'SC-06', event: 'the 3-second clip ends' },
  'SC-06': { chooseResult: true },
  'SC-07': { inScreen: 'View certificate' },
  'SC-08': {
    inScreen: 'Share certificate',
    note: 'How the certificate moves from the phone to the Verifier Desk is not decided (HANDOFF D-8). The prototype goes straight to the Verifier Desk.',
  },
  VD: { end: true },
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

  const view = {
    'SC-01': <SC01AppOpen />,
    'SC-02': <SC02Calibration />,
    'SC-03': <SC03CapturePreparation />,
    'SC-04': <SC04ReadyToCapture onStart={() => go('SC-05')} />,
    'SC-05': <SC05Capturing />,
    'SC-06': <SC06Checking />,
    'SC-07': result && <SC07Result variantId={variant.id} result={result} onViewCertificate={() => go('SC-08')} />,
    'SC-08': result && <SC08Certificate result={result} onShare={() => go('VD')} />,
    VD: result && <VerifierDesk result={result} />,
  }[screen];

  return (
    <div className={`journey ${screen === 'VD' ? 'journey-wide' : ''}`}>
      <div className="journey-stage">{view}</div>

      <aside className="proto-controls" aria-label="Prototype controls">
        <p className="proto-controls-title">Prototype controls</p>
        <p className="support">Not part of the product. They move between hardcoded screens.</p>

        {step.event && (
          <button type="button" className="proto-button proto-button-primary" onClick={() => go(step.next)}>
            Continue: {step.event}
          </button>
        )}
        {step.event && <p className="support">In the product this step happens by itself; the prototype has no timers.</p>}

        {step.inScreen && (
          <p className="support">
            Use <strong>{step.inScreen}</strong> in the screen to continue.
          </p>
        )}
        {step.note && <p className="support">{step.note}</p>}

        {step.chooseResult && (
          <div className="proto-choice">
            <p className="support">Choose which sample result to show. The prototype makes no decision.</p>
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
