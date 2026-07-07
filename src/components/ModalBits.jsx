// Small building blocks reused inside the glassmorphism popups.

export function Tags({ items }) {
  return (
    <div className="compounds inline">
      {items.map((t) => (
        <span className="tyre-tag t-hard" key={t}>
          {t}
        </span>
      ))}
    </div>
  );
}

export function Stats({ items }) {
  return (
    <div className="m-stat">
      {items.map((s) => (
        <div className="s" key={s.label}>
          <b>{s.value}</b>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  );
}

export function Results({ items }) {
  return (
    <ul>
      {items.map((r) => (
        <li key={r.label}>
          <b>{r.label}:</b> {r.text}
        </li>
      ))}
    </ul>
  );
}

export function ModalLinks({ github, demo }) {
  return (
    <div className="m-links">
      {github && (
        <a className="btn primary" href={github} target="_blank" rel="noopener noreferrer">
          ◀ Telemetry (GitHub)
        </a>
      )}
      <a className="btn" href={demo || '#'} target="_blank" rel="noopener noreferrer">
        Onboard (Demo) ▶
      </a>
    </div>
  );
}
