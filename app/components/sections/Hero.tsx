"use client";

import { useState, useEffect } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Small delay to let CSS transitions trigger
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 pt-20 overflow-hidden">
      {/* Ambient gradient orbs */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full">
        {/* Status Badge */}
        <div className={`animate-fade-up ${loaded ? '' : 'opacity-0'} mb-8`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface/50 backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs font-medium text-subtle tracking-wide uppercase">
              Available for Freelance
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-7xl lg:text-[110px] xl:text-[130px] font-black leading-[0.9] tracking-tighter mb-8">
          <span className={`block animate-fade-up ${loaded ? '' : 'opacity-0'}`}>
            Creative
          </span>
          <span
            className={`block animate-fade-up delay-100 ${loaded ? '' : 'opacity-0'}`}
          >
            Dev<span className="text-accent">el</span>oper
          </span>
          <span
            className={`block text-stroke animate-fade-up delay-200 ${loaded ? '' : 'opacity-0'}`}
          >
            &amp; Engineer
          </span>
        </h1>

        {/* Sub text + CTA */}
        <div
          className={`flex flex-col sm:flex-row sm:items-end justify-between gap-8 animate-fade-up delay-400 ${
            loaded ? '' : 'opacity-0'
          }`}
        >
          <p className="max-w-md text-subtle text-base lg:text-lg leading-relaxed">
            I craft immersive digital experiences that blend bold design with
            clean, performant code. Based in Dublin, working globally.
          </p>

        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-border">
        <div
          className={`h-full bg-accent/30 animate-fade-in delay-700 ${loaded ? '' : 'opacity-0'}`}
        />
      </div>
    </section>
  );
}