// Problem evidence panel: why the problem matters (Plan §6: prototype/person-3).
// Source: docs/evidence-base.md only. E2 (VERIFIED, CAG Karnataka Report No. 13 of 2025) is the evidence;
// E1 (VERIFIED reporting of an allegation) is context only; E3 is UNVERIFIED and never shown (claim-audit C-5).
// Nothing here is a PRAMAAN result (claim-audit C-4). Quotes are the CAG's own words, so "photograph" is theirs
// (HANDOFF D-3 allows it when describing scheme evidence).
import { CHECK_ORDER } from '../../person-1/design-system/copy.js';

const E2_FINDINGS = [
  {
    quote: '“photograph captured from existing photograph was uploaded”',
    page: 'p. 116',
    pattern: 'Photo of a photo (recapture)',
    element: `${CHECK_ORDER[2]}, usually reinforced by ${CHECK_ORDER[0]} (PRD §5, §12.3)`,
  },
  {
    quote: '“photograph of another existing waste management shed was uploaded”',
    page: 'pp. 47–48',
    pattern: 'Photo of a different site',
    element: `${CHECK_ORDER[1]} (PRD §5, §12.3)`,
  },
  {
    quote: '“same photographs were uploaded for different stages of work”',
    page: 'pp. 45–46',
    pattern: 'Same photos reused across stages',
    element:
      'Camera-only capture with no gallery upload (PRD FR-9), so each stage needs a fresh capture. Not a detection check: reusing an earlier genuine capture of the same site is outside what a single capture check can see (PRD §5).',
  },
];

export default function ProblemEvidence() {
  return (
    <section className="evidence">
      <p className="evidence-framing">
        Why this matters. These are the CAG's test-check findings from sampled gram panchayats, not state-wide totals,
        and not results from PRAMAAN.
      </p>

      <h4>CAG Performance Audit of MGNREGS, Karnataka (Report No. 13 of 2025)</h4>
      <table className="evidence-table">
        <thead>
          <tr>
            <th>CAG found cases where…</th>
            <th>Pattern</th>
            <th>PRAMAAN design element it is aimed at (proposed)</th>
          </tr>
        </thead>
        <tbody>
          {E2_FINDINGS.map((f) => (
            <tr key={f.page}>
              <td>
                {f.quote} <span className="support">({f.page})</span>
              </td>
              <td>{f.pattern}</td>
              <td>{f.element}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4>Context: Kandhamal, Odisha (reported July 2026)</h4>
      <p>
        Odisha Vigilance arrested two MGNREGS engineers over an alleged ₹42-lakh fraud{' '}
        <span className="support">(OmmCom News, OrissaPOST)</span>. According to OmmCom News, the mandatory geo-tagging
        of the sites, the payment gate, was never done. These are arrests on allegation, not convictions.
      </p>
      <p className="support">
        This shows the photo gate exists and is failing. PRAMAAN cannot force a capture to happen: where no capture is
        made, there is nothing to check.
      </p>

      <p className="support">
        One further figure cited in early planning is not used, because its source could not be verified
        (docs/evidence-base.md, E3).
      </p>
    </section>
  );
}
