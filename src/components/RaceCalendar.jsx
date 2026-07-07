import { profile } from '../data/profile.js';
import { useModal } from './Modal.jsx';
import { Tags, Results } from './ModalBits.jsx';
import Reveal from './Reveal.jsx';

const CIRCUITS = [
  'M6 20 Q4 6 20 8 T44 6 Q56 8 52 20 T30 28 Q10 30 6 20Z',
  'M8 24 Q2 10 22 12 T50 10 Q56 22 40 24 T8 24Z',
  'M6 16 Q10 4 30 8 T54 18 Q48 28 30 26 T6 16Z',
];

function Circuit({ i }) {
  return (
    <svg className="circuit" viewBox="0 0 60 34" aria-hidden="true">
      <path d={CIRCUITS[i % CIRCUITS.length]} />
    </svg>
  );
}

function ExpModal({ job }) {
  return (
    <>
      <div className="m-eyebrow">{job.round}</div>
      <h3>{job.role}</h3>
      <div className="m-sub">
        {job.org} · {job.dates}
      </div>
      <h4>Tools Used</h4>
      <Tags items={job.tools} />
      <h4>Race Results</h4>
      <Results items={job.results} />
    </>
  );
}

export default function RaceCalendar() {
  const { open } = useModal();
  return (
    <section id="calendar">
      <span className="sec-num">03</span>
      <div className="wrap">
        <Reveal as="span" className="eyebrow">
          Race Calendar
        </Reveal>
        <Reveal as="h2" className="section-title">
          Season so far
        </Reveal>
        <p className="note">Click a Grand Prix for the full race report — role, results &amp; tools used.</p>
        <Reveal className="cal">
          {profile.experience.map((job, i) => (
            <button
              key={job.id}
              className="gp clickable"
              onClick={() => open(<ExpModal job={job} />)}
              aria-label={`Open ${job.role} at ${job.org}`}
            >
              <span className="dates">{job.dates}</span>
              <div className="rd">{job.round}</div>
              <h3>{job.role}</h3>
              <div className="org">{job.org}</div>
              <ul>
                <li>{job.short}</li>
              </ul>
              <Circuit i={i} />
            </button>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
