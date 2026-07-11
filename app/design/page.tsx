"use client";

import { ReactNode } from "react";

/**
 * DesignGrid
 * -------------------------------------------------------------------------
 * A standalone "Design" section styled after a soft-gradient, rounded-card
 * showcase: dark forest-green display type, a warm cream→sage→blush
 * background wash in light mode, and the same deep forest-green dark mode
 * used on the About page (#0a1f14 background, #d4f5e0 headings, #8ab5a0
 * body copy, #1a3a28 card surfaces).
 *
 * No header / footer / nav is included by design — drop this into any
 * Next.js route or page and it will fill the content area.
 *
 * Usage:
 *   import DesignGrid from "@/components/DesignGrid";
 *   export default function DesignPage() {
 *     return <DesignGrid />;
 *   }
 *
 * Customize the `Design` array below with your own work.
 * -------------------------------------------------------------------------
 */

interface Design {
  title: string;
  /** Tailwind classes for the icon chip background, e.g. "bg-emerald-100" */
  chipBg: string;
  /** The glyph/emoji/initial shown inside the icon chip */
  icon: ReactNode;
  /** Optional mini preview rendered under the card copy */
  preview?: ReactNode;
  link: string;
}

const Design: Design[] = [
  {
    title: "Jones & Brown Legal",
    chipBg: "bg-emerald-100 dark:bg-emerald-900/40",
    link: "https://www.figma.com/site/sotKOfFrYLHuNHmYcygDnt/Untitled?node-id=1-607&t=Ew6K3xLg5tfv6zJb-0",
    icon: <span className="text-emerald-700 dark:text-emerald-300 text-lg">◱</span>,
    preview: (
      <div className="rounded-xl bg-[#0f3d2e] dark:bg-[#0a1f14] p-3 mt-4 dark:ring-1 dark:ring-white/[0.06]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-emerald-200 text-xs font-medium">
            Articles
          </span>
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
        </div>
        <div className="space-y-1.5">
          <div className="h-2 rounded-full bg-emerald-800/60 dark:bg-emerald-700/40 w-full" />
          <div className="h-2 rounded-full bg-emerald-800/60 dark:bg-emerald-700/40 w-4/5" />
          <div className="h-2 rounded-full bg-emerald-800/60 dark:bg-emerald-700/40 w-3/5" />
        </div>
      </div>
    ),
  },
  {
    title: "Simple layout page",
    chipBg: "bg-lime-100 dark:bg-lime-900/40",
    link: "https://www.figma.com/make/5AVLfwVDq8wwiq9tVo7JBx/Simple-Landing-Page?t=Ew6K3xLg5tfv6zJb-0",
    icon: <span className="text-lime-700 dark:text-lime-300 text-lg">⬢</span>,
    preview: (
      <div className="rounded-xl bg-[#1a2e1a] dark:bg-[#0a1f14] p-3 mt-4 dark:ring-1 dark:ring-white/[0.06]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-lime-200 text-xs font-medium">التقويم</span>
          <span className="text-lime-400 text-[10px]">mar 2026</span>
        </div>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {Array.from({ length: 28 }, (_, i) => (
            <span
              key={i}
              className={`h-2.5 w-2.5 rounded-full ${
                i === 12
                  ? "bg-lime-400 ring-1 ring-lime-300"
                  : i > 20
                  ? "bg-lime-700/40"
                  : "bg-lime-800/50"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="h-6 w-6 rounded-full bg-lime-500/30 flex items-center justify-center text-[10px] text-lime-300">✓</span>
          <div className="flex-1">
            <div className="h-1.5 rounded-full bg-lime-700/50 w-3/4" />
            <div className="h-1 rounded-full bg-lime-800/40 w-1/2 mt-1" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Morphix ui components",
    chipBg: "bg-sky-100 dark:bg-sky-900/40",
    link: "https://www.figma.com/design/x1YHiH0u5bPAgt98jAKoSp/Morphex-UI---Premium-Multi-Purpose-Landing-Page-Bundle---Mobile-App----Property---Personal-Website--Preview-?t=Ew6K3xLg5tfv6zJb-0",
    icon: <span className="text-sky-700 dark:text-sky-300 text-lg">▭</span>,
    preview: (
      <div className="rounded-xl bg-white dark:bg-[#0a1f14] border border-black/5 dark:border-white/[0.06] p-3 mt-4 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-medium text-slate-500 dark:text-[#8ab5a0]">
            Outline
          </span>
          <span className="text-slate-300 dark:text-[#8ab5a0]/60 text-xs">×</span>
        </div>
        <div className="relative rounded-md bg-sky-50 dark:bg-sky-950/40 border border-dashed border-sky-300 dark:border-sky-800 h-10 mb-2 flex items-center justify-center">
          <span className="text-[10px] text-sky-400 dark:text-sky-300">radius 20</span>
        </div>
        <div className="flex gap-1.5">
          {["bg-sky-500", "bg-violet-400", "bg-pink-400", "bg-amber-400", "bg-emerald-400"].map(
            (c) => (
              <span key={c} className={`h-3 w-3 rounded-full ${c}`} />
            )
          )}
        </div>
      </div>
    ),
  },
  {
    title: "Saas base Schools",
    link: "https://www.figma.com/design/n19cV3bgdkjUAjm2mwATco/SAAS-base-school--Coaching-automation-platform--Community-?t=Ew6K3xLg5tfv6zJb-0",
    chipBg: "bg-violet-100 dark:bg-violet-900/40",
    icon: <span className="text-violet-700 dark:text-violet-300 text-lg">◐</span>,
    preview: (
      <div className="rounded-xl bg-[#1c1c1e] dark:bg-[#0a1f14] p-3 mt-4 dark:ring-1 dark:ring-white/[0.06]">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-6 w-6 rounded-full bg-neutral-700 dark:bg-neutral-600 flex items-center justify-center text-[10px]">
            ✦
          </span>
          <span className="h-6 w-6 rounded-full bg-violet-500" />
        </div>
        <div className="flex gap-1.5">
          {["bg-red-500", "bg-orange-500", "bg-amber-400", "bg-emerald-500", "bg-violet-500"].map(
            (c) => (
              <span key={c} className={`h-4 w-4 rounded-full ${c} ring-2 ring-transparent`} />
            )
          )}
        </div>
      </div>
    ),
  },
  {
    title: "Tution Class app",
    link: "https://www.figma.com/design/vhhkgmeDF43oNZSUrFL2a2/Tution-Class-app--Community-?t=Ew6K3xLg5tfv6zJb-0",
    chipBg: "bg-blue-100 dark:bg-blue-900/40",
    icon: <span className="text-blue-800 dark:text-blue-300 text-lg">▦</span>,
    preview: (
      <div className="rounded-xl bg-[#121a2e] dark:bg-[#0a1f14] p-3 mt-4 dark:ring-1 dark:ring-white/[0.06]">
        <div className="flex items-center justify-between mb-3">
          <span className="text-blue-200 text-xs font-medium">Cart</span>
          <span className="bg-blue-500 text-[9px] text-white px-1.5 py-0.5 rounded-full">2</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-lg bg-blue-800/50 shrink-0" />
            <div className="flex-1">
              <div className="h-1.5 rounded-full bg-blue-700/50 w-3/4" />
              <div className="h-1 rounded-full bg-blue-800/40 w-1/3 mt-1" />
            </div>
            <span className="text-blue-300 text-[10px] font-medium">$24</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-lg bg-blue-800/50 shrink-0" />
            <div className="flex-1">
              <div className="h-1.5 rounded-full bg-blue-700/50 w-2/3" />
              <div className="h-1 rounded-full bg-blue-800/40 w-1/4 mt-1" />
            </div>
            <span className="text-blue-300 text-[10px] font-medium">$18</span>
          </div>
        </div>
        <div className="mt-3 pt-2 border-t border-blue-800/40 flex items-center justify-between">
          <span className="text-blue-400 text-[10px]">Total</span>
          <span className="text-blue-200 text-xs font-bold">$42</span>
        </div>
      </div>
    ),
  },
  {
    title: "MaxSkills - Online Learning",
    link: "https://www.figma.com/design/fH4uOrAEK6TGnOypsZcobp/MaxSkills---Online-Learning-Platform-Admin-Dashboard--Preview-?node-id=1248-4&p=f&t=Ew6K3xLg5tfv6zJb-0",
    chipBg: "bg-indigo-100 dark:bg-indigo-900/40",
    icon: <span className="text-indigo-700 dark:text-indigo-300 text-lg">●</span>,
    preview: (
      <div className="rounded-xl bg-[#161429] dark:bg-[#0a1f14] p-3 mt-4 dark:ring-1 dark:ring-white/[0.06]">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-8 w-8 rounded-lg bg-indigo-500/30 flex items-center justify-center text-indigo-300 text-xs">D</span>
          <div>
            <div className="h-1.5 rounded-full bg-indigo-600/50 w-20" />
            <div className="h-1 rounded-full bg-indigo-800/40 w-14 mt-1" />
          </div>
        </div>
        <div className="space-y-1.5 mb-3">
          {[85, 62, 94, 40].map((w, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-1 rounded-full bg-indigo-800/40 flex-1">
                <div className="h-full rounded-full bg-indigo-500/60" style={{ width: `${w}%` }} />
              </div>
              <span className="text-[9px] text-indigo-400 w-6 text-right">{w}%</span>
            </div>
          ))}
        </div>
        <div className="flex gap-1.5">
          {["bg-indigo-500", "bg-purple-400", "bg-sky-400"].map((c) => (
            <span key={c} className={`h-5 w-14 rounded-full ${c}/30`} />
          ))}
        </div>
      </div>
    ),
  },
];

export default function DesignGrid() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden px-6 pb-20 pt-32 sm:px-10 lg:px-16 bg-amber-50 bg-[linear-gradient(135deg,#dfe6cf_0%,#ece4ce_30%,#f1e6d8_55%,#ecdad8_78%,#e9d3d8_100%)] dark:bg-[#0a1f14] dark:bg-none dark:text-[#a3c9b8]"
    >
      {/* Hero */}
      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="inline-flex items-center gap-2 font-extrabold tracking-tight text-[#0f3d2e] dark:text-[#d4f5e0] text-6xl sm:text-7xl">
          UI Design
          <span className="text-white dark:text-[#d4f5e0] drop-shadow-sm text-4xl leading-none">
            ✦
          </span> 
        </h1>
        <p className="mt-6 text-base sm:text-lg text-[#3d4a3f]/80 dark:text-[#8ab5a0] leading-relaxed">
          A collection of tools and designs I've built — some useful,
          <br className="hidden sm:block" />
          some experimental.
        </p>
      </div>

      {/* Grid */}
      <div className="relative mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Design.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Design }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col rounded-3xl bg-[#f7f2e9]/90 dark:bg-[#1a3a28] backdrop-blur-sm p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.04] dark:ring-white/[0.06] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md dark:hover:bg-[#1a3a28]/80"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-bold text-[#0f3d2e] dark:text-[#d4f5e0]">
            {project.title}
          </h3>
          
        </div>

        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${project.chipBg}`}
        >
          {project.icon}
        </span>
      </div> 
      {project.preview && <div className="mt-auto">{project.preview}</div>}
    </a>
  );
}