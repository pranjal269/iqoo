// Two views: the clickable journey (default) and the static screen gallery.
import { useState } from 'react';
import Journey from './clickable-prototype/Journey.jsx';
import ReviewGallery from './ReviewGallery.jsx';
import TechnicalPackage from './TechnicalPackage.jsx';

export default function App() {
  const [view, setView] = useState('journey');
  return (
    <div className="gallery">
      <header className="gallery-header">
        <h1>PRAMAAN prototype</h1>
        <p>
          Presentation-only prototype. Every screen shows a prototype interaction with a simulated result; nothing is
          captured, measured, detected, scored, signed or verified.
        </p>
        <div className="view-switch" role="group" aria-label="View">
          <button type="button" className="proto-button" aria-pressed={view === 'journey'} onClick={() => setView('journey')}>
            Clickable journey
          </button>
          <button type="button" className="proto-button" aria-pressed={view === 'gallery'} onClick={() => setView('gallery')}>
            All screens and components
          </button>
          <button type="button" className="proto-button" aria-pressed={view === 'technical'} onClick={() => setView('technical')}>
            Technical and evidence package
          </button>
        </div>
      </header>
      {view === 'journey' && <Journey />}
      {view === 'gallery' && <ReviewGallery />}
      {view === 'technical' && <TechnicalPackage />}
    </div>
  );
}
