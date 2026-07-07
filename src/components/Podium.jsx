import { profile } from '../data/profile.js';
import Reveal from './Reveal.jsx';

const stepClass = { P1: 'p1', P2: 'p2', P3: 'p3' };

// Podium (achievements / certifications). Top 3 on the steps, rest as points.
export default function Podium() {
  return (
    <section id="podium" style={{ background: 'var(--panel)' }}>
      <span className="sec-num">05</span>
      <div className="wrap" style={{ textAlign: 'center' }}>
        <Reveal as="span" className="eyebrow">
          Podium
        </Reveal>
        <Reveal as="h2" className="section-title">
          Championship honours
        </Reveal>
        <Reveal className="podium">
          {profile.podium.map((p) => (
            <div className={`step ${stepClass[p.pos] || ''}`} key={p.pos}>
              <div className="pos">{p.pos}</div>
              <div className="ttl">{p.title}</div>
            </div>
          ))}
        </Reveal>
        <Reveal className="points">
          {profile.pointsFinishes.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
