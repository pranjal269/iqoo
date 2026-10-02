// Canonical wording locked in HANDOFF.md (Day 2 · Phase 1). Import from here; do not retype these strings.

export const STAMPS = {
  screen: 'Prototype interaction — simulated result',
  sample: 'sample value, prototype interaction',
  certificate: 'Illustrative — not a real signed output',
  concept: 'Conceptual illustration, not measured data',
};

export const LIMITATION = 'PRAMAAN proves capture authenticity, not scene truthfulness.';

export const SIGNING = 'App-level signing, not hardware-attested';

export const CHECKS = {
  motion: 'Motion Consistency',
  geofence: 'Geofence / Location Binding',
  moire: 'FFT-based Moiré / Recapture Detection',
};

// PRD check order (HANDOFF: headline-check emphasis).
export const CHECK_ORDER = [CHECKS.motion, CHECKS.geofence, CHECKS.moire];

export const VERDICTS = {
  genuine: 'Likely Genuine',
  review: 'Needs Review',
  fraudulent: 'Likely Fraudulent',
};

export const STATUSES = {
  pass: 'PASS',
  fail: 'FAIL',
  lowConfidence: 'LOW_CONFIDENCE',
  unavailable: 'UNAVAILABLE',
};

export const CAPTURE = '3-second clip';
