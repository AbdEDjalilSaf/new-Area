"use client";

import useReveal from '../../hooks/useReveal';
import { STATS } from '../../lib/data';
import StatCard from '../ui/StatCard';

export default function About() {
  const ref1 = useReveal();
  const ref2 = useReveal();
  const ref3 = useReveal();

  return (
    <section id="about" className="px-6 lg:px-12 py-24 lg:py-36 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div>
            <div ref={ref1 as React.RefObject<HTMLDivElement>} className="reveal">
              <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
                About Me
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-8">
                Building the <span className="text-accent">future</span>, one
                pixel at a time.
              </h2>
            </div>

            <div ref={ref2 as React.RefObject<HTMLDivElement>} className="reveal" style={{ transitionDelay: '0.15s' }}>
              <p className="text-subtle leading-relaxed mb-6">
                I'm a creative developer based in Dublin, Ireland with a passion
                for building immersive web experiences. I sit at the
                intersection of design and engineering — turning bold ideas into
                polished, performant digital products.
              </p>
              <p className="text-subtle leading-relaxed mb-8">
                Over the past 8 years, I've worked with startups, agencies, and
                global brands to create websites and applications that don't
                just function — they captivate. I believe every interaction is an
                opportunity to delight.
              </p>
              <a
                href="#contact"
                className="hoverable inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-widest group"
              >
                <span>Get in Touch</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            <div ref={ref3 as React.RefObject<HTMLDivElement>} className="reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="relative rounded-2xl overflow-hidden h-[300px] lg:h-[380px]">
                <img
                  src="https://picsum.photos/seed/seanportrait/800/600.jpg"
                  alt="Portrait"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-fg font-bold text-lg">Sean Halpin</p>
                  <p className="text-subtle text-sm">Dublin, Ireland</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}