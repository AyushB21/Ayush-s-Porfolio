// Fixed header with team wordmark and the DRS day/night (light/dark) toggle.
export default function TopBar({ theme, onToggleTheme }) {
  const isLight = theme === 'light';
  return (
    <div className="topbar">
      <div className="team">
        AB<span>·</span>MOTORSPORT
      </div>
      <button
        className="drs"
        onClick={onToggleTheme}
        aria-label={`Switch to ${isLight ? 'night' : 'day'} race mode`}
      >
        <span className="dot" /> DRS <b>{isLight ? 'DAY' : 'NIGHT'}</b>
      </button>
    </div>
  );
}
