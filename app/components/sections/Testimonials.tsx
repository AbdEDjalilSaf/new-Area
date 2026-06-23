"use client";

import useReveal from '../../hooks/useReveal';
import { TESTIMONIALS } from '../../lib/data';

function TestimonialCard({ testimonial, index = 0 }: { testimonial: any; index?: number }) {
  const ref = useReveal();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="reveal hoverable p-8 rounded-2xl bg-card border border-border hover-glow transition-all duration-300"
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {Array.from({ length: 5 }).map((_, j) => (
          <svg
            key={j}
            className="w-4 h-4 text-accent"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="text-subtle leading-relaxed mb-6 text-sm">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      <div>
        <p className="text-fg font-semibold text-sm">{testimonial.name}</p>
        <p className="text-muted text-xs">{testimonial.role}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const headingRef = useReveal();

  return (
    <section className="px-6 lg:px-12 py-24 lg:py-36 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <div ref={headingRef as React.RefObject<HTMLDivElement>} className="reveal text-center mb-16">
          <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter">
            Kind Words
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}