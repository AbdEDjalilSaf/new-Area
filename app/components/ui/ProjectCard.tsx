import useReveal from '../../hooks/useReveal';

export default function ProjectCard({ project, index = 0 }: { project: any; index: number }) {
  const ref = useReveal();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="reveal project-card group hoverable"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-card border border-border hover-glow">
        {/* Image */}
        <div className="relative h-[280px] sm:h-[340px] lg:h-[400px] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="project-img w-full h-full object-cover transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500" />
        </div>

        {/* Info */}
        <div className="p-6 lg:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-2 group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-subtle text-sm leading-relaxed max-w-sm">
                {project.desc}
              </p>
            </div>
            <div className="project-arrow w-10 h-10 rounded-full border border-border flex items-center justify-center shrink-0 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
              <svg
                className="w-4 h-4 text-subtle group-hover:text-accent transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-5">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium text-muted bg-surface rounded-full border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}