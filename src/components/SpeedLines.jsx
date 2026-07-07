import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../hooks/useReducedMotion.js';

// Faint red motion streaks that flash across the screen during fast scrolling.
export default function SpeedLines() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    let lastY = window.scrollY;
    let timer;
    const onScroll = () => {
      const dy = Math.abs(window.scrollY - lastY);
      lastY = window.scrollY;
      if (dy > 55) {
        el.classList.add('on');
        clearTimeout(timer);
        timer = setTimeout(() => el.classList.remove('on'), 150);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(timer);
    };
  }, []);

  return <div id="speedlines" ref={ref} aria-hidden="true" />;
}
