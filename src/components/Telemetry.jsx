import { useState } from 'react';
import { profile } from '../data/profile.js';
import Reveal from './Reveal.jsx';

// Skills as tyre "stints": click one and the tyre spins to the left while the
// skills churn out beside it, each with an animated throttle-bar proficiency.
export default function Telemetry() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((cur) => (cur === id ? null : id));
  const onKey = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle(id);
    }
  };

  return (
    <section id="telemetry" style={{ background: 'var(--panel)' }}>
      <span className="sec-num">02</span>
      <div className="wrap">
        <Reveal as="span" className="eyebrow">
          Telemetry
        </Reveal>
        <Reveal as="h2" className="section-title">
          Skills readout
        </Reveal>
        <p className="note">Click a stint — the tyre spins &amp; churns out the skills.</p>
        <Reveal className="stints">
          {profile.skillSectors.map((s) => {
            const isOpen = openId === s.id;
            return (
              <div
                key={s.id}
                className={`stint ${isOpen ? 'open' : ''}`}
                tabIndex={0}
                role="button"
                aria-expanded={isOpen}
                onClick={() => toggle(s.id)}
                onKeyDown={(e) => onKey(e, s.id)}
              >
                <div className={`tyre ${s.compound}`}>
                  <span className="tyre-face">{s.code}</span>
                </div>
                <div className="stint-body">
                  <div className="stint-title">
                    <small>{s.sector}</small>
                    {s.title}
                  </div>
                  <div className="stint-cue">{isOpen ? 'Click to close ▾' : 'Click to churn skills ▸'}</div>
                  <div className="skill-out" aria-hidden={!isOpen}>
                    {s.skills.map(([name, lvl]) => (
                      <div className="skill-row" key={name}>
                        <span className="sname">{name}</span>
                        <span className="thr" title={`${lvl}/5`}>
                          <span className="track">
                            <i style={{ '--w': `${lvl * 20}%` }} />
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
