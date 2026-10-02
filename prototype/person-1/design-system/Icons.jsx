// Hand-drawn inline SVG icons (no third-party icon set). Decorative: the adjacent text always carries the meaning.
const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export function CaptureIcon() {
  return (
    <svg {...base}>
      <rect x="3" y="6" width="18" height="14" rx="2" />
      <path d="M8 6l1.5-2h5L16 6" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  );
}

export function CheckingIcon() {
  return (
    <svg {...base}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4.5 4.5" />
    </svg>
  );
}

export function InfoIcon() {
  return (
    <svg {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5.5M12 7.5h.01" />
    </svg>
  );
}

export function GenuineIcon() {
  return (
    <svg {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l2.7 2.7L16 9.8" />
    </svg>
  );
}

export function ReviewIcon() {
  return (
    <svg {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.5a2.5 2.5 0 1 1 3.3 2.4c-.6.2-.8.6-.8 1.1v.5" />
      <path d="M12 16.5h.01" />
    </svg>
  );
}

export function FraudulentIcon() {
  return (
    <svg {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 9l6 6M15 9l-6 6" />
    </svg>
  );
}

export function WarningIcon() {
  return (
    <svg {...base}>
      <path d="M12 3.5L21.5 20h-19L12 3.5z" />
      <path d="M12 10v4.5M12 17.5h.01" />
    </svg>
  );
}

export function LocationIcon() {
  return (
    <svg {...base}>
      <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.3" />
    </svg>
  );
}

export function SealIcon() {
  return (
    <svg {...base}>
      <circle cx="12" cy="10" r="6" />
      <path d="M9 15.2L8 21l4-2 4 2-1-5.8" />
      <path d="M9.8 10l1.6 1.6 2.8-2.8" />
    </svg>
  );
}

// Phone with a single arrow pointing right: "move the phone left-to-right".
export function PanIcon() {
  return (
    <svg {...base}>
      <rect x="3" y="6" width="7" height="12" rx="1.5" />
      <path d="M13 12h8" />
      <path d="M18 9l3 3-3 3" />
    </svg>
  );
}

export function StillIcon() {
  return (
    <svg {...base}>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M11 18h2" />
      <path d="M3 9v6M21 9v6" />
    </svg>
  );
}
