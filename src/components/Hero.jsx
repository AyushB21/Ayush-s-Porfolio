import { useEffect, useRef, useState } from 'react';
import { profile } from '../data/profile.js';
import { prefersReducedMotion } from '../hooks/useReducedMotion.js';
import HeroCar from './HeroCar.jsx';

// Hero: start-lights sequence (after loader) + driver board, with the car
// driving off the line as the visitor scrolls down.
export default function Hero({ started }) {
  const { driver } = profile;
  const [lit, setLit] = useState([false, false, false, false, false]);
  const carRef = useRef(null);

  // start-lights sequence once the loader hands over
  useEffect(() => {
    if (!started) return;
    if (prefersReducedMotion()) {
      setLit([true, true, true, true, true]);
      return;
    }
    const ups = [];
    for (let i = 0; i < 5; i++) {
      ups.push(setTimeout(() => setLit((p) => p.map((v, idx) => (idx === i ? true : v))), 150 + i * 380));
    }
    const off = setTimeout(() => setLit([false, false, false, false, false]), 150 + 5 * 380 + 600);
    return () => {
      ups.forEach(clearTimeout);
      clearTimeout(off);
    };
  }, [started]);

  // scroll-driven drive-off
  useEffect(() => {
    const car = carRef.current;
    const hero = car && car.closest('.hero');
    if (!car || !hero) return;
    if (prefersReducedMotion()) return;
    let ticking = false;
    const update = () => {
      ticking = false;
      const h = hero.offsetHeight || window.innerHeight;
      const f = Math.min(1, Math.max(0, window.scrollY / (h * 0.85)));
      car.classList.toggle('driving', f > 0.008 && f < 0.995);
      const e = f * f;
      car.style.transform = `translateX(${e * 175}%) translateY(${-e * 10}%) rotate(${-f * 2}deg) scale(${1 - f * 0.14})`;
      car.style.filter = `drop-shadow(0 30px 40px rgba(0,0,0,.55)) blur(${f * 2.4}px)`;
      car.style.opacity = String(1 - f * 0.78);
      car.style.pointerEvents = f > 0.05 ? 'none' : 'auto';
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="hero" id="top">
      <div className="wrap">
        <HeroCar ref={carRef} />
        <div className="hero-copy">
          <div className="lights" aria-hidden="true">
            {lit.map((on, i) => (
              <div key={i} className={`light ${on ? 'on' : ''}`} />
            ))}
          </div>
          <div className="board">
            <div className="name">
              <div className="first">{driver.firstName}</div>
              <div className="last">{driver.lastName}</div>
            </div>
            <div className="num">{driver.number}</div>
          </div>
          <p className="title">
            {driver.title} · <b>{driver.team}</b>
          </p>
          <p className="hero-sub">{driver.tagline}</p>
          <div className="hero-cta">
            <a className="btn primary" href="#garage">
              Enter the Garage ▶
            </a>
            <a className="btn" href="#contact">
              Pit Wall Radio
            </a>
          </div>
          <div className="scroll-cue">▼ Formation lap — scroll to start</div>
        </div>
      </div>
    </header>
  );
}
