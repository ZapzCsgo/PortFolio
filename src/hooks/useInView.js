import { useEffect, useRef, useState } from 'react';

const useInView = (options = { threshold: 0.15 }) => {
  const ref = useRef(null);
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [isInView, setIsInView] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion || !ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(ref.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, isInView];
};

export default useInView;
