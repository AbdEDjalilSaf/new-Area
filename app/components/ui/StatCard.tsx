import useReveal from '../../hooks/useReveal';

export default function StatCard({ stat, index = 0 }: { stat: any; index: number }) {
  const ref = useReveal();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="reveal p-6 rounded-2xl bg-card border border-border hover-glow transition-all duration-300 hoverable"
      style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
    >
      <p className="text-3xl lg:text-4xl font-black text-accent mb-1">
        {stat.num}
      </p>
      <p className="text-xs text-muted uppercase tracking-wider font-medium">
        {stat.label}
      </p>
    </div>
  );
}