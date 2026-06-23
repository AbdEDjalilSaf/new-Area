"use client";

import useReveal from '../../hooks/useReveal';
import { PROJECTS } from '../../lib/data';
import ProjectCard from '../ui/ProjectCard';

export default function Work() {
  const headingRef = useReveal();

  return (
    <section id="work" className="px-6 lg:px-12 py-24 lg:py-36">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <div
          ref={headingRef as React.RefObject<HTMLDivElement>}
          className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
              Selected Work
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter">
              Recent
              <br />
              Projects
            </h2>
          </div>
          <p className="text-subtle text-sm max-w-xs leading-relaxed">
            A curated selection of projects where design meets engineering to
            create memorable experiences.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}