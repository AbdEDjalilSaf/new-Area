"use client";

import useReveal from '../../hooks/useReveal';
import { SERVICES } from '../../lib/data';
import ServiceCard from '../ui/ServiceCard';

export default function Services() {
  const headingRef = useReveal();

  return (
    <section id="services" className="px-6 lg:px-12 py-24 lg:py-36 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <div ref={headingRef as React.RefObject<HTMLDivElement>} className="reveal text-center mb-16">
          <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
            What I Do
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter">
            Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}