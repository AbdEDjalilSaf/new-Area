"use client";

import { useEffect, useRef } from 'react';

/**
 * Observes an element and adds 'visible' class when it enters the viewport.
 * @param {number} threshold - IntersectionObserver threshold (0-1)
 * @returns {React.RefObject} ref to attach to the target element
 */
export default function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}