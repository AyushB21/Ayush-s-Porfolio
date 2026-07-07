import { useEffect, useRef, useState } from 'react';

// Wraps children in a scroll-reveal container that fades/launches up when visible.
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${seen ? 'in' : ''} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
