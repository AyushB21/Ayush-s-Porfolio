import { forwardRef } from 'react';
import { profile } from '../data/profile.js';

// Big parked race car (Modern Hybrid livery). The parent toggles the `driving`
// class and applies a scroll-driven transform so it launches off the line.
const HeroCar = forwardRef(function HeroCar(_props, ref) {
  const num = profile.driver.number;
  return (
    <div className="hero-car" ref={ref} aria-hidden="true">
      <svg viewBox="0 0 620 260" width="100%">
        <ellipse cx="310" cy="232" rx="270" ry="18" fill="rgba(0,0,0,.35)" />
        {/* rear wing */}
        <rect x="18" y="70" width="70" height="12" rx="3" fill="#0b0b0d" />
        <rect x="30" y="82" width="10" height="70" fill="#0b0b0d" />
        <rect x="66" y="82" width="10" height="70" fill="#0b0b0d" />
        {/* body */}
        <path
          className="rev"
          d="M60 150 L110 150 C130 118 170 108 230 108 L300 108 C320 88 360 82 410 84 C470 86 520 96 560 120 L600 132 C608 136 606 150 596 152 L120 156 C90 156 66 154 60 150 Z"
          fill="url(#carbody)"
        />
        <path d="M300 108 C330 88 360 84 400 86 L392 108 Z" fill="#b60500" />
        {/* halo + cockpit */}
        <path d="M300 110 C300 92 320 86 340 88" fill="none" stroke="#111" strokeWidth="7" />
        <ellipse cx="320" cy="112" rx="20" ry="10" fill="#0b0b0d" />
        <circle cx="322" cy="108" r="6" fill="#1b1b1f" />
        {/* number on sidepod */}
        <text x="240" y="150" fontFamily="Arial Narrow, sans-serif" fontWeight="900" fontSize="38" fill="#fff">
          {num}
        </text>
        {/* front wing */}
        <rect x="556" y="150" width="52" height="10" rx="3" fill="#0b0b0d" />
        <rect x="580" y="118" width="24" height="34" rx="3" fill="#0b0b0d" />
        {/* exhaust / speed streaks (shown while driving) */}
        <g className="exhaust">
          <line x1="-70" y1="120" x2="30" y2="120" stroke="#e10600" strokeWidth="5" strokeLinecap="round" />
          <line x1="-90" y1="150" x2="20" y2="150" stroke="#ff5a52" strokeWidth="4" strokeLinecap="round" />
          <line x1="-60" y1="180" x2="40" y2="180" stroke="#e10600" strokeWidth="4" strokeLinecap="round" />
          <line x1="-100" y1="135" x2="0" y2="135" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity=".5" />
          <line x1="-80" y1="165" x2="10" y2="165" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity=".5" />
        </g>
        {/* wheels (spin while driving) */}
        <g className="wheel">
          <circle cx="150" cy="168" r="46" fill="#0c0c0e" />
          <circle cx="150" cy="168" r="24" fill="#1a1a1e" />
          <rect x="147" y="146" width="6" height="44" rx="2" fill="#33333a" />
          <rect x="128" y="165" width="44" height="6" rx="2" fill="#33333a" />
          <circle cx="150" cy="168" r="9" fill="#e10600" />
        </g>
        <g className="wheel">
          <circle cx="470" cy="168" r="46" fill="#0c0c0e" />
          <circle cx="470" cy="168" r="24" fill="#1a1a1e" />
          <rect x="467" y="146" width="6" height="44" rx="2" fill="#33333a" />
          <rect x="448" y="165" width="44" height="6" rx="2" fill="#33333a" />
          <circle cx="470" cy="168" r="9" fill="#e10600" />
        </g>
        <defs>
          <linearGradient id="carbody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ff2a24" />
            <stop offset="1" stopColor="#c20500" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
});

export default HeroCar;
