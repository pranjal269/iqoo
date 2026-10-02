// Hardcoded prototype content for SC-01–SC-08 and the Verifier Desk concept (HANDOFF Day 2 · Phase 1 / Phase 3).
// Every number here is an authored SAMPLE VALUE, not a result: nothing is measured or computed.
// D-7: samples sit inside the PRD band they illustrate; the Likely Genuine sample reuses PRD §7 example values
// (realityScore 88; check scores 0.81 / 0.95 / 0.9; accuracyMeters 8.2; distanceToRegisteredMeters 6.4;
// registeredSiteId "demo-site-03"; lat 12.9716, lng 77.5946; timestamp 2026-10-10T09:14:22+05:30; model iQOO 15).
// No fusion weights, band cutoffs or thresholds appear on screens.
import { CHECKS, VERDICTS, STATUSES } from '../design-system/copy.js';

export const SAMPLE_SITE = 'demo-site-03';

export const SAMPLE_GPS = {
  acquiringAccuracy: '12 m',
  fixAccuracy: '8.2 m',
};

// Certificate fields shared by all variants (PRD §7 manifest schema). No hash, key or signature exists.
export const SAMPLE_CAPTURE = {
  version: '1.0',
  captureId: 'sample-capture-0001',
  timestamp: '2026-10-10T09:14:22+05:30',
  device: 'iQOO 15',
  androidVersion: 'not recorded in the prototype',
  location: '12.9716, 77.5946',
  lat: '12.9716',
  lng: '77.5946',
  durationSeconds: '3.0',
  site: SAMPLE_SITE,
  media: '3-second clip',
  mediaHash: 'none: not computed in the prototype',
  signatureAlg: 'ECDSA-SHA256 (proposed for the event build, PRD §7)',
  signature: 'none: placeholder only',
  publicKey: 'none: placeholder only',
};

export const SAMPLE_RESULTS = {
  likelyGenuine: {
    tone: 'genuine',
    verdict: VERDICTS.genuine,
    score: '88',
    summary: 'This capture shows the characteristics of a genuine on-site capture.',
    basis: 'Based on all three checks.',
    accuracy: '8.2 m',
    distance: '6.4 m',
    accuracyMeters: '8.2',
    distanceMeters: '6.4',
    checks: [
      {
        check: CHECKS.motion,
        status: STATUSES.pass,
        score: '0.81',
        reason: 'Phone movement matches the movement seen in the clip.',
      },
      {
        check: CHECKS.geofence,
        status: STATUSES.pass,
        score: '0.95',
        reason: 'Captured 6.4 m from the claimed registered site.',
        hasSampleValue: true,
      },
      {
        check: CHECKS.moire,
        status: STATUSES.pass,
        score: '0.9',
        reason: 'No screen-pattern signs in the clip.',
      },
    ],
    evidence: { motion: 'match', geofence: 'near', moire: 'clean' },
  },

  needsReview: {
    tone: 'review',
    verdict: VERDICTS.review,
    score: '61',
    summary: 'This capture routes to human follow-up.',
    basis: 'Based on the two available checks; one check was UNAVAILABLE.',
    accuracy: '30 m',
    distance: '9.7 m',
    accuracyMeters: '30',
    distanceMeters: '9.7',
    checks: [
      {
        check: CHECKS.motion,
        status: STATUSES.unavailable,
        score: null,
        reason: 'This check could not run for this capture. It is not counted as a failure; the result uses the remaining checks.',
      },
      {
        check: CHECKS.geofence,
        status: STATUSES.lowConfidence,
        score: '0.52',
        reason: 'GPS accuracy was 30 m, too coarse to confirm the site. This is uncertainty, not a sign of fraud.',
        hasSampleValue: true,
      },
      {
        check: CHECKS.moire,
        status: STATUSES.pass,
        score: '0.88',
        reason: 'No screen-pattern signs in the clip.',
      },
    ],
    evidence: { motion: 'unavailable', geofence: 'uncertain', moire: 'clean' },
  },

  likelyFraudulent: {
    tone: 'fraudulent',
    verdict: VERDICTS.fraudulent,
    score: '24',
    summary: 'This capture could not be confirmed as a genuine on-site capture.',
    basis: 'Based on all three checks.',
    accuracy: '7.5 m',
    distance: '5.1 m',
    accuracyMeters: '7.5',
    distanceMeters: '5.1',
    checks: [
      {
        check: CHECKS.motion,
        status: STATUSES.fail,
        score: '0.22',
        reason: 'Phone movement does not match the movement seen in the clip.',
      },
      {
        check: CHECKS.geofence,
        status: STATUSES.pass,
        score: '0.93',
        reason: 'Captured 5.1 m from the claimed registered site.',
        hasSampleValue: true,
      },
      {
        check: CHECKS.moire,
        status: STATUSES.fail,
        score: '0.15',
        reason: 'Screen-pattern signs in the clip, as when a screen is filmed.',
      },
    ],
    evidence: { motion: 'mismatch', geofence: 'near', moire: 'peaks' },
  },
};
