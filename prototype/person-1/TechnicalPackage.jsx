// Technical & evidence package view (Phase 4). Assembles the Person 2 technical visuals and the Person 3 problem
// evidence. Conceptual and proposed only: nothing here runs, measures or verifies anything.
import ArchitectureDiagram from '../person-2/architecture/ArchitectureDiagram.jsx';
import CheckExplainers from '../person-2/evidence-visuals/CheckExplainers.jsx';
import CertificateManifest from '../person-2/certificate-mockup/CertificateManifest.jsx';
import ProblemEvidence from '../person-3/problem-evidence/ProblemEvidence.jsx';
import { LimitationNotice } from './design-system/components.jsx';
import { SAMPLE_RESULTS } from './core-screens/fixtures.js';

export default function TechnicalPackage() {
  return (
    <div className="tech-package">
      <section>
        <h2 className="gallery-section">1 · Proposed architecture</h2>
        <ArchitectureDiagram />
      </section>

      <section>
        <h2 className="gallery-section">2 · What the three checks are designed to compare</h2>
        <CheckExplainers />
      </section>

      <section>
        <h2 className="gallery-section">3 · Certificate manifest (Likely Genuine sample)</h2>
        <CertificateManifest result={SAMPLE_RESULTS.likelyGenuine} />
      </section>

      <section>
        <h2 className="gallery-section">4 · Problem evidence</h2>
        <ProblemEvidence />
      </section>

      <LimitationNotice />
    </div>
  );
}
