import { profile } from '../data/profile.js';
import repos from '../data/repos.json';
import { useModal } from './Modal.jsx';
import { Stats, Tags, Results, ModalLinks } from './ModalBits.jsx';
import Reveal from './Reveal.jsx';

const compoundClass = { soft: 't-soft', med: 't-med', hard: 't-hard' };

// Enrich a project with build-time GitHub data (stars / description) if present.
function enrich(p) {
  const match = repos.find((r) => r.name.toLowerCase() === (p.repoName || '').toLowerCase());
  return {
    ...p,
    points: match && match.stars ? match.stars : p.points,
    short: match && match.description ? match.description : p.short,
    github: (match && match.url) || p.github,
    demo: (match && match.homepage) || p.demo,
  };
}

function ProjectModal({ p }) {
  return (
    <>
      <div className="m-eyebrow">Garage · {p.badge}</div>
      <h3>{p.name}</h3>
      <div className="m-sub">{p.subtitle}</div>
      <Stats items={p.stats} />
      <h4>Tyre Compounds (Stack)</h4>
      <Tags items={p.stack} />
      <h4>Race Report</h4>
      <p>{p.overview}</p>
      <Results items={p.results} />
      <ModalLinks github={p.github} demo={p.demo} />
    </>
  );
}

export default function Garage() {
  const { open } = useModal();
  const projects = profile.projects.map(enrich);

  return (
    <section id="garage">
      <span className="sec-num">01</span>
      <div className="wrap">
        <Reveal as="span" className="eyebrow">
          The Garage
        </Reveal>
        <Reveal as="h2" className="section-title">
          Projects in the pit lane
        </Reveal>
        <p className="note">Click any bay to open its spec sheet · live repos pulled from GitHub (AyushB21) at build time.</p>
        <Reveal className="grid-cards">
          {projects.map((p) => (
            <button
              key={p.id}
              className="bay"
              onClick={() => open(<ProjectModal p={p} />)}
              aria-label={`Open ${p.name} details`}
            >
              <div className="head">
                <span className={`tyre-tag ${compoundClass[p.badgeCompound]}`}>{p.badge}</span>
                <div className="pts">
                  ★ {p.points}
                  <small>Points</small>
                </div>
              </div>
              <h3>{p.name}</h3>
              <p>{p.short}</p>
              <div className="compounds">
                {p.stack.slice(0, 3).map((t, i) => (
                  <span className={`tyre-tag ${['t-soft', 't-med', 't-hard'][i] || 't-hard'}`} key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
