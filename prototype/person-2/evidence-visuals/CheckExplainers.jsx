// Three-check technical explainers: what each check is designed to compare, with the conceptual visuals shown
// side by side for a consistent and an inconsistent case. Explanatory only: no check runs, nothing is measured.
// Sources: PRD FR-2, FR-3, FR-4, §5, §12.3; docs/architecture-concept.md §3.
import { CHECK_ORDER } from '../../person-1/design-system/copy.js';
import { MotionConcept, GeofenceConcept, MoireConcept } from './EvidenceVisuals.jsx';

function Explainer({ name, compares, reason, children }) {
  return (
    <article className="explainer">
      <h4>{name}</h4>
      <p>
        <strong>Designed to compare:</strong> {compares}
      </p>
      <p className="support">{reason}</p>
      <div className="explainer-visuals">{children}</div>
    </article>
  );
}

export default function CheckExplainers() {
  return (
    <div className="explainers">
      <Explainer
        name={CHECK_ORDER[0]}
        compares="the phone's own movement, from the gyroscope, with the movement seen in the frames of the 3-second clip."
        reason="Footage that did not come from this phone's movement, such as a filmed screen or an injected clip, is expected not to line up. A textureless scene is reported LOW_CONFIDENCE, not as fraud."
      >
        <MotionConcept state="match" title="Consistent (concept)" />
        <MotionConcept state="mismatch" title="Inconsistent (concept)" />
      </Explainer>

      <Explainer
        name={CHECK_ORDER[1]}
        compares="the capture-time GPS position with the pre-registered coordinate of the claimed site, and reports the distance."
        reason="A genuine capture at a different real site is expected to show up as distance from the claimed site. When GPS accuracy is too coarse, the check reports LOW_CONFIDENCE. A spoofed GPS reading is a known gap (PRD §12.3)."
      >
        <GeofenceConcept state="near" distance="6.4 m" title="At the claimed site (concept)" />
        <GeofenceConcept state="far" distance="140 m" title="Away from the claimed site (concept)" />
      </Explainer>

      <Explainer
        name={CHECK_ORDER[2]}
        compares="the frequency pattern of a captured frame with a baseline for real scenes."
        reason="Filming a screen tends to add periodic patterns (moiré) that show up as bright spots in the frequency view. At the event the baseline is tuned against real footage and the screens used are listed in the pitch (PRD FR-4)."
      >
        <MoireConcept state="clean" title="Real scene (concept)" />
        <MoireConcept state="peaks" title="Filmed screen (concept)" />
      </Explainer>
    </div>
  );
}
