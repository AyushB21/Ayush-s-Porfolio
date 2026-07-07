import { profile } from '../data/profile.js';
import Reveal from './Reveal.jsx';

const CIRCUITS = [
  'M8 20 Q6 8 26 10 T52 14 Q54 26 34 26 T8 20Z',
  'M8 24 Q2 10 22 12 T50 10 Q56 22 40 24 T8 24Z',
  'M6 16 Q10 4 30 8 T54 18 Q48 28 30 26 T6 16Z',
];

// The Academy (education) — static cards, no popup.
export default function Academy() {
  return (
    <section id="academy">
      <span className="sec-num">04</span>
      <div className="wrap">
        <Reveal as="span" className="eyebrow">
          The Academy
        </Reveal>
        <Reveal as="h2" className="section-title">
          Junior formula &amp; feeder series
        </Reveal>
        <Reveal className="cal">
          {profile.education.map((ed, i) => (
            <div className="gp" key={ed.title}>
              <span className="dates">{ed.dates}</span>
              <div className="rd">{ed.formula}</div>
              <h3>{ed.title}</h3>
              <div className="org">{ed.org}</div>
              {ed.notes && (
                <ul>
                  <li>
                    <b>{ed.notes}</b>
                  </li>
                </ul>
              )}
              <svg className="circuit" viewBox="0 0 60 34" aria-hidden="true">
                <path d={CIRCUITS[i % CIRCUITS.length]} />
              </svg>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
