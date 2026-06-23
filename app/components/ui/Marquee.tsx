import { MARQUEE_ITEMS } from '../../lib/data';

export default function Marquee() {
  return (
    <div className="py-8 border-y border-border overflow-hidden">
      <div className="animate-marquee flex gap-8 whitespace-nowrap">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 text-sm font-medium text-muted uppercase tracking-widest"
          >
            <span className="hover:text-accent transition-colors cursor-default">
              {item}
            </span>
            <span className="text-accent text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}