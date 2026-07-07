import { useEffect, useState } from 'react';

// Easter egg: pressing "P" triggers a pit-stop overlay with a fake stop timer.
export default function PitStopEgg() {
  const [active, setActive] = useState(false);
  const [t, setT] = useState(0);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key.toLowerCase() === 'p' && !active) {
        const tag = (e.target && e.target.tagName) || '';
        if (tag === 'INPUT' || tag === 'TEXTAREA') return;
        setActive(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  useEffect(() => {
    if (!active) return;
    setT(0);
    let cur = 0;
    const iv = setInterval(() => {
      cur += 0.1;
      setT(cur);
      if (cur >= 2.3) {
        clearInterval(iv);
        setTimeout(() => setActive(false), 900);
      }
    }, 40);
    return () => clearInterval(iv);
  }, [active]);

  if (!active) return null;
  return (
    <div id="pitstop" onClick={() => setActive(false)}>
      <div>
        <div className="lbl">PIT STOP</div>
        <div className="t">{t.toFixed(1)}s</div>
        <div className="pb">NEW PERSONAL BEST</div>
      </div>
    </div>
  );
}
