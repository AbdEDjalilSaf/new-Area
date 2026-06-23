"use client";

import { useState, useEffect } from 'react';
import { isDesktop } from '../../lib/utils';

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isDesktop()) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    // Attach hover listeners to all interactive elements
    const attachHover = () => {
      document.querySelectorAll('a, button, .hoverable').forEach((el) => {
        el.addEventListener('mouseenter', () => setHovering(true));
        el.addEventListener('mouseleave', () => setHovering(false));
      });
    };
    attachHover();

    // Re-attach periodically for lazy-loaded content
    const interval = setInterval(attachHover, 2000);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      clearInterval(interval);
    };
  }, []);

  // Smooth ring follow with RAF
  useEffect(() => {
    let raf: number;
    const tick = () => {
      setRingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.15,
        y: prev.y + (pos.y - prev.y) * 0.15,
      }));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [pos]);

  if (!mounted || !isDesktop()) return null;

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          left: pos.x - 4,
          top: pos.y - 4,
          opacity: visible ? 1 : 0,
          transform: hovering ? 'scale(2.5)' : 'scale(1)',
        }}
      />
      <div
        className="cursor-ring"
        style={{
          left: ringPos.x - (hovering ? 30 : 20),
          top: ringPos.y - (hovering ? 30 : 20),
          opacity: visible ? 1 : 0,
          width: hovering ? 60 : 40,
          height: hovering ? 60 : 40,
        }}
      />
    </>
  );
}
