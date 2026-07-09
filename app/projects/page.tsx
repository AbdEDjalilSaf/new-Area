// "use client";

// import { ReactNode } from "react";

// /**
//  * ProjectsGrid
//  * -------------------------------------------------------------------------
//  * A standalone "Projects" section styled after a soft-gradient, rounded-card
//  * showcase: dark forest-green display type, a warm cream→sage→blush
//  * background wash, and off-white cards with colored icon chips, optional
//  * status badges, and optional mini "live preview" mockups.
//  *
//  * No header / footer / nav is included by design — drop this into any
//  * Next.js route or page and it will fill the content area.
//  *
//  * Usage:
//  *   import ProjectsGrid from "@/components/ProjectsGrid";
//  *   export default function ProjectsPage() {
//  *     return <ProjectsGrid />;
//  *   }
//  *
//  * Customize the `projects` array below with your own work.
//  * -------------------------------------------------------------------------
//  */

// interface Project {
//   title: string;
//   description: string;
//   /** Tailwind classes for the icon chip background, e.g. "bg-emerald-100" */
//   chipBg: string;
//   /** The glyph/emoji/initial shown inside the icon chip */
//   icon: ReactNode;
//   /** Optional pill badge, e.g. "Soon", "New", "Beta" */
//   badge?: string;
//   /** Optional mini preview rendered under the card copy */
//   preview?: ReactNode;
//   /** Optional external link */
//   href?: string;
// }

// const projects: Project[] = [
//   {
//     title: "Pulse Admin",
//     description:
//       "Next.js + Appwrite admin dashboard for content, notes, and client contacts — full CRUD, search, and modals.",
//     chipBg: "bg-emerald-100 dark:bg-emerald-900/50",
//     icon: <span className="text-emerald-700 dark:text-emerald-300 text-lg">◱</span>,
//     preview: (
//         <div className="rounded-xl bg-[#0f3d2e] dark:bg-[#0a1f14] p-3 mt-4">
//         <div className="flex items-center justify-between mb-2">
//           <span className="text-emerald-200 text-xs font-medium">
//             Articles
//           </span>
//           <span className="h-2 w-2 rounded-full bg-emerald-400" />
//         </div>
//         <div className="space-y-1.5">
//           <div className="h-2 rounded-full bg-emerald-800/60 dark:bg-emerald-700/50 w-full" />
//           <div className="h-2 rounded-full bg-emerald-800/60 dark:bg-emerald-700/50 w-4/5" />
//           <div className="h-2 rounded-full bg-emerald-800/60 dark:bg-emerald-700/50 w-3/5" />
//         </div>
//       </div>
//     ),
//   },
//   {
//     title: "Agriplot",
//     description:
//       "EUDR compliance platform — typed data modules, plot mapping, and risk reporting for supply-chain teams.",
//     chipBg: "bg-lime-100 dark:bg-lime-900/50",
//     icon: <span className="text-lime-700 dark:text-lime-300 text-lg">⬢</span>,
//   },
//   {
//     title: "Outline Kit",
//     description:
//       "Spec-out-your-designs helper: instantly annotate spacing, radius, and color tokens for handoff.",
//     chipBg: "bg-sky-100 dark:bg-sky-900/50",
//     icon: <span className="text-sky-700 dark:text-sky-300 text-lg">▭</span>,
//     preview: (
//         <div className="rounded-xl bg-white dark:bg-[#1a3a28] border border-black/5 dark:border-white/[0.06] p-3 mt-4 shadow-sm">
//           <div className="flex items-center justify-between mb-2">
//             <span className="text-[11px] font-medium text-slate-500 dark:text-[#8ab5a0]">
//             Outline
//           </span>
//           <span className="text-slate-300 dark:text-slate-500 text-xs">×</span>
//         </div>
//         <div className="relative rounded-md bg-sky-50 dark:bg-sky-950/50 border border-dashed border-sky-300 dark:border-sky-700 h-10 mb-2 flex items-center justify-center">
//           <span className="text-[10px] text-sky-400 dark:text-sky-300">radius 20</span>
//         </div>
//         <div className="flex gap-1.5">
//           {["bg-sky-500", "bg-violet-400", "bg-pink-400", "bg-amber-400", "bg-emerald-400"].map(
//             (c) => (
//               <span key={c} className={`h-3 w-3 rounded-full ${c}`} />
//             )
//           )}
//         </div>
//       </div>
//     ),
//   },
//   {
//     title: "Custoji",
//     description:
//       "Generate custom emoji-that-should-not-be — quick, silly, and just detailed enough to look real.",
//     chipBg: "bg-pink-100 dark:bg-pink-900/50",
//     icon: <span className="text-lg">🫠</span>,
//   },
//   {
//     title: "Cabinet Calculator",
//     description:
//       "Cleaned-up pricing calculator for a kitchen-cabinet client — rebuilt for production deployment.",
//     chipBg: "bg-amber-100 dark:bg-amber-900/50",
//     icon: <span className="text-amber-700 dark:text-amber-300 text-lg">▤</span>,
//   },
//   {
//     title: "Annotator",
//     description: "Flag accessibility concerns directly on designs to start conversations with developers.",
//     chipBg: "bg-emerald-50 dark:bg-emerald-900/40",
//     icon: <span className="text-emerald-700 dark:text-emerald-300 text-lg">✎</span>,
//     badge: "Soon",
//   },
//   {
//     title: "Droplette",
//     description:
//       "AI-assisted color palette generator that respects an existing design system's tokens.",
//     chipBg: "bg-violet-100 dark:bg-violet-900/50",
//     icon: <span className="text-violet-700 dark:text-violet-300 text-lg">◐</span>,
//     preview: (
//         <div className="rounded-xl bg-[#1c1c1e] dark:bg-[#0a1f14] p-3 mt-4">
//         <div className="flex items-center gap-2 mb-3">
//           <span className="h-6 w-6 rounded-full bg-neutral-700 dark:bg-neutral-600 flex items-center justify-center text-[10px]">
//             ✦
//           </span>
//           <span className="h-6 w-6 rounded-full bg-violet-500" />
//         </div>
//         <div className="flex gap-1.5">
//           {["bg-red-500", "bg-orange-500", "bg-amber-400", "bg-emerald-500", "bg-violet-500"].map(
//             (c) => (
//               <span key={c} className={`h-4 w-4 rounded-full ${c} ring-2 ring-transparent`} />
//             )
//           )}
//         </div>
//       </div>
//     ),
//   },
//   {
//     title: "Browso",
//     description: "See all your machine's details — rendered like it's still 1999.",
//     chipBg: "bg-blue-100 dark:bg-blue-900/50",
//     icon: <span className="text-blue-800 dark:text-blue-300 text-lg">▦</span>,
//   },
//   {
//     title: "Cover Status",
//     description: "Lightweight status thumbnails so people know what's currently in progress.",
//     chipBg: "bg-indigo-100 dark:bg-indigo-900/50",
//     icon: <span className="text-indigo-700 dark:text-indigo-300 text-lg">●</span>,
//   },
// ];

// export default function ProjectsGrid() {
//   return (
//     <section
//       className="relative min-h-screen w-full overflow-hidden px-6 pb-20 pt-32 sm:px-10 lg:px-16 bg-amber-50 bg-[linear-gradient(135deg,#dfe6cf_0%,#ece4ce_30%,#f1e6d8_55%,#ecdad8_78%,#e9d3d8_100%)] dark:bg-[#0a1f14] dark:text-[#a3c9b8]"
//     >
//       {/* Hero */}
//       <div className="relative mx-auto max-w-3xl text-center">
//         <h1 className="inline-flex items-center gap-2 font-extrabold tracking-tight text-[#0f3d2e] dark:text-[#d4f5e0] text-6xl sm:text-7xl">
//           Projects
//           <span className="text-white dark:text-[#d4f5e0] drop-shadow-sm text-4xl leading-none">
//             ✦
//           </span>
//         </h1>
//         <p className="mt-6 text-base sm:text-lg text-[#3d4a3f]/80 dark:text-[#8ab5a0] leading-relaxed">
//           A collection of tools and sites I&apos;ve built — some useful,
//           <br className="hidden sm:block" />
//           some experimental, all shipped for the fun of it.
//         </p>
//       </div>

//       {/* Grid */}
//       <div className="relative mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
//         {projects.map((project) => (
//           <ProjectCard key={project.title} project={project} />
//         ))}
//       </div>
//     </section>
//   );
// }

// function ProjectCard({ project }: { project: Project }) {
//   const Wrapper = project.href ? "a" : "div";

//   return (
//     <Wrapper
//       {...(project.href ? { href: project.href } : {})}
//       className="group relative flex flex-col rounded-3xl bg-[#f7f2e9]/90 dark:bg-[#1a3a28]/90 backdrop-blur-sm p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.04] dark:ring-white/[0.06] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
//     >
//       <div className="flex items-start justify-between gap-4">
//         <div className="flex items-center gap-2">
//           <h3 className="text-lg font-bold text-[#0f3d2e] dark:text-[#d4f5e0]">
//             {project.title}
//           </h3>
//           {project.badge && (
//             <span className="rounded-full bg-[#0f3d2e] dark:bg-[#d4f5e0] px-2.5 py-0.5 text-[11px] font-medium text-white dark:text-[#0a1f14]">
//               {project.badge}
//             </span>
//           )}
//         </div>

//         <span
//           className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${project.chipBg}`}
//         >
//           {project.icon}
//         </span>
//       </div>

//       <p className="mt-2 text-sm leading-relaxed text-[#4b5348]/80 dark:text-[#8ab5a0]">
//         {project.description}
//       </p>

//       {project.preview && <div className="mt-auto">{project.preview}</div>}
//     </Wrapper>
//   );
// }













"use client";

import { ReactNode } from "react";

/**
 * ProjectsGrid
 * -------------------------------------------------------------------------
 * A standalone "Projects" section styled after a soft-gradient, rounded-card
 * showcase: dark forest-green display type, a warm cream→sage→blush
 * background wash in light mode, and the same deep forest-green dark mode
 * used on the About page (#0a1f14 background, #d4f5e0 headings, #8ab5a0
 * body copy, #1a3a28 card surfaces).
 *
 * No header / footer / nav is included by design — drop this into any
 * Next.js route or page and it will fill the content area.
 *
 * Usage:
 *   import ProjectsGrid from "@/components/ProjectsGrid";
 *   export default function ProjectsPage() {
 *     return <ProjectsGrid />;
 *   }
 *
 * Customize the `projects` array below with your own work.
 * -------------------------------------------------------------------------
 */

interface Project {
  title: string;
  description: string;
  /** Tailwind classes for the icon chip background, e.g. "bg-emerald-100" */
  chipBg: string;
  /** The glyph/emoji/initial shown inside the icon chip */
  icon: ReactNode;
  /** Optional mini preview rendered under the card copy */
  preview?: ReactNode;
  link: string;
}

const projects: Project[] = [
  {
    title: "GoScore",
    description:
      "Next.js + .Net backend dashboard for test and courses teacher scores and quality assessment.",
    chipBg: "bg-emerald-100 dark:bg-emerald-900/40",
    link: "https://github.com/AbdEDjalilSaf/go-score",
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
    title: "TafawaQ",
    description:
      "welcome to Tafawaq for see all Packages in your contry and state for your study career.",
    chipBg: "bg-lime-100 dark:bg-lime-900/40",
    link: "https://github.com/AbdEDjalilSaf/tafawaq",
    icon: <span className="text-lime-700 dark:text-lime-300 text-lg">⬢</span>,
  },
  {
    title: "Admin Panel",
    description:
      "Admin panel for see all Admin's opration and classes inuser,products,waiting products,sub-category and banners.",
    chipBg: "bg-sky-100 dark:bg-sky-900/40",
    link: "https://github.com/AbdEDjalilSaf/Admin-Panel",
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
    title: "job-portal",
    description:
      "small platform for sell some products by orders.",
    link: "https://github.com/AbdEDjalilSaf/job-portal",
    chipBg: "bg-pink-100 dark:bg-pink-900/40",
    icon: <span className="text-lg">🫠</span>,
  },
  {
    title: "Prayer-Times",
    description:
      "Prayer Times for Muslims around my country.",
    chipBg: "bg-amber-100 dark:bg-amber-900/40",
    link: "https://github.com/AbdEDjalilSaf/Prayer-Times",
    icon: <span className="text-amber-700 dark:text-amber-300 text-lg">▤</span>,
  },
  {
    title: "Cywork_App",
    link: "https://github.com/AbdEDjalilSaf/Cywork_App",
    description: "welcome to Cywork App for see all Events and News of Cywork Club.",
    chipBg: "bg-emerald-50 dark:bg-emerald-900/30",
    icon: <span className="text-emerald-700 dark:text-emerald-300 text-lg">✎</span>,
  },
  {
    title: "Reayah",
    link: "https://github.com/AbdEDjalilSaf/Reayah",
    description:
      "welcome to Reayah Health System for see all patients and appioments.",
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
    title: "ShopFlow_wasydoo",
    link: "https://github.com/AbdEDjalilSaf/ShopFlow_wasydoo",
    description: "ShopFlow for see all products and users and categories and look for details and create , delete, update your products and users.",
    chipBg: "bg-blue-100 dark:bg-blue-900/40",
    icon: <span className="text-blue-800 dark:text-blue-300 text-lg">▦</span>,
  },
  {
    title: "Disol Agency",
    link: "https://github.com/AbdEDjalilSaf/Disol-learning-platform",
    description: "welcome to Disol learning platform for see all courses and and sessions to get hire great developers.",
    chipBg: "bg-indigo-100 dark:bg-indigo-900/40",
    icon: <span className="text-indigo-700 dark:text-indigo-300 text-lg">●</span>,
  },
];

export default function ProjectsGrid() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden px-6 pb-20 pt-32 sm:px-10 lg:px-16 bg-amber-50 bg-[linear-gradient(135deg,#dfe6cf_0%,#ece4ce_30%,#f1e6d8_55%,#ecdad8_78%,#e9d3d8_100%)] dark:bg-[#0a1f14] dark:bg-none dark:text-[#a3c9b8]"
    >
      {/* Hero */}
      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="inline-flex items-center gap-2 font-extrabold tracking-tight text-[#0f3d2e] dark:text-[#d4f5e0] text-6xl sm:text-7xl">
          Projects
          <span className="text-white dark:text-[#d4f5e0] drop-shadow-sm text-4xl leading-none">
            ✦
          </span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-[#3d4a3f]/80 dark:text-[#8ab5a0] leading-relaxed">
          A collection of tools and sites I&apos;ve built — some useful,
          <br className="hidden sm:block" />
          some experimental, all shipped for the fun of it.
        </p>
      </div>

      {/* Grid */}
      <div className="relative mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
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

      <p className="mt-2 text-sm leading-relaxed text-[#4b5348]/80 dark:text-[#8ab5a0]">
        {project.description}
      </p>

      {project.preview && <div className="mt-auto">{project.preview}</div>}
    </a>
  );
}