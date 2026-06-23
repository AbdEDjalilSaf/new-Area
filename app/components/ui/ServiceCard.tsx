import useReveal from '../../hooks/useReveal';

export default function ServiceCard({ service, index = 0 }: { service: any; index: number }) {
  const ref = useReveal();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="reveal hoverable group p-7 rounded-2xl bg-card border border-border hover-glow transition-all duration-500 hover:border-accent/30"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6 group-hover:bg-accent/20 transition-colors duration-300">
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={service.iconPath}
          />
        </svg>
      </div>
      <h3 className="text-lg font-bold mb-3 tracking-tight group-hover:text-accent transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-subtle text-sm leading-relaxed">{service.desc}</p>
    </div>
  );
}