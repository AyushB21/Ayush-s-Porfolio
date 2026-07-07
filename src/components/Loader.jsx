import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '../hooks/useReducedMotion.js';

const PATH = 'M60 150 C10 150 10 60 70 55 C140 49 150 120 210 118 C290 116 280 40 330 40 C385 40 390 150 320 152 C240 154 160 152 60 150 Z';

// A red F1 car completes a flying lap; the racing line lights up and a timer
// counts up. When the lap finishes it hands control back via onDone().
export default function Loader({ onDone }) {
  const [done, setDone] = useState(false);
  const pathRef = useRef(null);
  const litRef = useRef(null);
  const carRef = useRef(null);
  const timeRef = useRef(null);
  const pctRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const lit = litRef.current;
    const car = carRef.current;
    if (!path || !lit || !car) return;

    const len = path.getTotalLength();
    lit.style.strokeDasharray = String(len);
    lit.style.strokeDashoffset = String(len);

    const reduce = prefersReducedMotion();
    const DUR = reduce ? 300 : 2600;
    const t0 = performance.now();
    let raf;
    const ease = (x) => (x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2);

    const frame = (now) => {
      const raw = Math.min(1, (now - t0) / DUR);
      const f = ease(raw);
      lit.style.strokeDashoffset = String(len * (1 - f));
      const pt = path.getPointAtLength(len * f);
      const pt2 = path.getPointAtLength(Math.min(len, len * f + 1));
      const ang = (Math.atan2(pt2.y - pt.y, pt2.x - pt.x) * 180) / Math.PI;
      car.setAttribute('transform', `translate(${pt.x},${pt.y}) rotate(${ang})`);
      if (timeRef.current) timeRef.current.textContent = (raw * 82.361).toFixed(3);
      if (pctRef.current) pctRef.current.textContent = Math.round(raw * 100) + '%';
      if (raw < 1) {
        raf = requestAnimationFrame(frame);
      } else {
        if (timeRef.current) timeRef.current.textContent = '1:22.361';
        setTimeout(() => {
          setDone(true);
          onDone && onDone();
        }, 450);
      }
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <div id="loader" className={done ? 'done' : ''} aria-hidden={done}>
      <div className="loader-inner">
        <div className="loader-team">
          AB<span>·</span>MOTORSPORT
        </div>
        <svg className="loader-track" viewBox="0 0 400 200" aria-hidden="true">
          <path ref={pathRef} className="tk" d={PATH} />
          <path ref={litRef} className="tk-lit" d={PATH} />
          <line className="sf" x1="60" y1="140" x2="60" y2="160" />
          <g ref={carRef} className="loader-car">
            <rect x="-14" y="-4" width="28" height="8" rx="3" fill="#e10600" />
            <rect x="-4" y="-8" width="9" height="5" rx="2" fill="#0b0b0d" />
            <circle cx="-9" cy="5" r="4" fill="#111" />
            <circle cx="9" cy="5" r="4" fill="#111" />
          </g>
        </svg>
        <div className="loader-meta">
          <span className="lap">Lap 1 / 1 · Flying Lap</span>
          <span className="time" ref={timeRef}>0.000</span>
          <span className="pct" ref={pctRef}>0%</span>
        </div>
      </div>
    </div>
  );
}
