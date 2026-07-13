import React from "react";

/**
 * NotesPage
 * ---------
 * Standalone "Notes" listing page — matches the reference design:
 * soft pastel gradient backdrop, large rounded display heading,
 * centered subtitle, and a stacked list of note cards with a
 * title, description, and a colored icon avatar on the right.
 *
 * No header / footer included — drop this into your layout.
 */

interface NoteItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string; // tailwind bg class or inline gradient
}

const notes: NoteItem[] = [
  {
    id: "css-shell",
    title: "Learning Laravel Backend Framework",
    description: "Not all work needs to lead somewhere.",
    iconBg: "bg-gradient-to-br from-teal-600 to-teal-800",
    icon: (
      <div className="flex h-6 w-8 flex-col items-center justify-center rounded-[3px] bg-[#f3efe4] text-[5px] font-bold leading-tight text-teal-900 shadow-sm">
        <span className="text-[4px] tracking-tight">ARNE</span>
        <span className="text-[6px]">K.O.II</span>
      </div>
    ),
  },
  {
    id: "ai-leverage",
    title: "How to create and make AI Agent work",
    description: "Artificial intelligence is here to take over everything. And the person who uses it expertly will reap the greatest benefits.",
    iconBg: "bg-gradient-to-br from-amber-700 to-amber-900",
    icon: <span className="text-xl leading-none">🤖</span>,
  },
  {
    id: "throwaway-projects",
    title: "Football Match Coverage and Analysis",
    description: "Not all ideas are good ideas. But thats a good thing.",
    iconBg: "bg-gradient-to-br from-rose-700 to-red-900",
    icon: <span className="text-xl leading-none">🔥</span>,
  },
  {
    id: "cover-status",
    title: "Developing Communication and Problem-Solving Skills",
    description: "Focusing on communication skills and sharing useful ideas.",
    iconBg: "bg-gradient-to-br from-violet-700 to-indigo-900",
    icon: (
      <span className="text-base font-semibold tracking-[-0.05em] text-white/90">
        ǁOǁǁ
      </span>
    ),
  },
  {
    id: "flash-figma",
    title: "Schedule weekly get-togethers with friends",
    description: "Sometimes, fun moments with friends are life's most precious treasure.",
    iconBg: "bg-gradient-to-br from-red-700 to-rose-900",
    icon: <span className="text-lg italic font-bold text-white">f</span>,
  },
];
 
const NoteCard: React.FC<{ note: NoteItem }> = ({ note }) => {
  const Wrapper: React.ElementType = "div";

  return (
    <Wrapper
      className="group flex items-center justify-between gap-4 rounded-2xl border border-black/[0.04] bg-[#f6f2e8]/80 dark:bg-[#1a3a28] px-5 py-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.04] dark:ring-white/[0.06] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] dark:hover:bg-[#1a3a28]/80 sm:px-7 sm:py-6"
    >
      <div className="min-w-0 flex-1">
        <h3 className="text-base font-bold text-teal-900 dark:text-[#d4f5e0] transition-colors group-hover:text-teal-700 sm:text-lg">
          {note.title}
        </h3>
        <p className="mt-1.5 text-sm text-stone-500 dark:text-[#8ab5a0] sm:text-[15px]">
          {note.description}
        </p>
      </div>

      <div
        className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-white shadow-inner sm:h-14 sm:w-14 ${note.iconBg}`}
      >
        {note.icon}
      </div>
    </Wrapper>
  );
};

const NotesPage: React.FC = () => {
  return (
    <div className="relative pt-16 lg:pt-12 min-h-screen w-full overflow-hidden bg-[#efe9db] dark:bg-[#0a1f14] dark:bg-none dark:text-[#a3c9b8]">
      {/* Ambient gradient backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-90 dark:hidden"
        style={{
          background:
            "radial-gradient(120% 90% at 15% 0%, #eee3b8 0%, transparent 55%), radial-gradient(120% 90% at 85% 0%, #cbdcb3 0%, transparent 55%), #efe9db",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-4 pb-24 pt-16 sm:px-6 sm:pt-20 lg:pt-24">
        {/* Heading */}
        <div className="text-center">
           <h1 className="inline-flex items-center gap-2 font-extrabold tracking-tight text-[#0f3d2e] dark:text-[#d4f5e0] text-6xl sm:text-7xl">
          Notes
          <span className="text-white dark:text-[#d4f5e0] drop-shadow-sm text-4xl leading-none">
            ✦
          </span>
        </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-stone-600 dark:text-[#8ab5a0] sm:text-lg">
            Some thoughts, reflections, <em className="italic">&amp;</em> notes on
            design and development, along with some latest work in progress.
          </p>
        </div>

        {/* Notes list */}
        <div className="mt-12 flex flex-col gap-4 sm:mt-16 sm:gap-5">
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotesPage;