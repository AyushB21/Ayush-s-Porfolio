import { useEffect, useRef } from 'react';

const MAP = 'M12 40 Q6 14 40 16 T96 12 Q114 20 104 40 T60 52 Q20 54 12 40Z';
const TOTAL_SECTORS = 6;

// Corner mini-map: the racing line fills and a marker travels it as you scroll,
// and it reports which section ("sector") the visitor is currently in.
export default function SectorMap() {
  const progRef = useRef(null);
  const curRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const prog = progRef.current;
    const cur = curRef.current;
    const label = labelRef.current;
    if (!prog) return;
    const len = prog.getTotalLength();
    prog.style.strokeDasharray = String(len);
    prog.style.strokeDashoffset = String(len);
    const sections = Array.from(document.querySelectorAll('header, section'));

    let ticking = false;
    const update = () => {
      ticking = false;
      const max = document.body.scrollHeight - window.innerHeight;
      const f = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      prog.style.strokeDashoffset = String(len * (1 - f));
      const pt = prog.getPointAtLength(len * f);
      cur.setAttribute('cx', pt.x);
      cur.setAttribute('cy', pt.y);
      let n = 1;
      sections.forEach((s, i) => {
        if (window.scrollY + window.innerHeight * 0.4 >= s.offsetTop) n = Math.min(i + 1, TOTAL_SECTORS);
      });
      if (label) label.textContent = String(n);
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="minimap" aria-hidden="true">
      <div className="mlbl">
        Sector <span ref={labelRef}>1</span> / {TOTAL_SECTORS}
      </div>
      <svg viewBox="0 0 120 60">
        <path className="track" d={MAP} />
        <path className="prog" ref={progRef} d={MAP} />
        <circle className="cur" ref={curRef} r="4" cx="12" cy="40" />
      </svg>
    </div>
  );
}
