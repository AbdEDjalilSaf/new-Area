
import Image from "next/image";
import Logo from "@/public/logo.jpg";
import All from "@/public/all.jpg";
import One from "@/public/one.jpg";

const EXPERIENCE = [
  { id: 1, company: "GiveDirectly", role: "Frontend Engineer", years: "4", shade: "bg-teal-700", top: 2,    left: 78.5, width: 23 },
  { id: 2, company: "Help Scout",   role: "Frontend Engineer", years: "2-3", shade: "bg-teal-600", top: 22,   left: 44.3, width: 38 },
  { id: 3, company: "Freelance",    role: "Freelance Developer",       years: "3~",  shade: "bg-teal-600", top: 42,   left: 36.8, width: 60 },
  { id: 4, company: "Dotfusion",    role: "Design / Dev",            years: "1-2",shade: "bg-teal-500", top: 62.5, left: 21.4, width: 29 },
  { id: 5, company: "Cubic",        role: "Development",            years: "1~", shade: "bg-teal-800", top: 82.5, left: 2.5,  width: 25 },
];

export default function Page() {
  return (
    <main className="bg-amber-50 dark:bg-[#0a1f14] text-slate-700 dark:text-[#a3c9b8]">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 min-h-screen pb-3 pt-24 sm:pt-32 md:pb-2 md:pt-40 max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-teal-900 dark:text-[#d4f5e0] text-center mb-12 sm:mb-16 md:mb-24">
          I&apos;m Abd El-Djalil.
        </h1>

        {/* Profile Section */}
        <div className="grid  px-20 md:px-10 md:grid-cols-2 gap-8 md:gap-12 items-start mb-16 md:mb-20">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-52 h-60 sm:w-64 sm:h-72 md:w-80 md:h-96 rounded-t-full overflow-hidden bg-gradient-to-br from-teal-700 to-teal-900 dark:from-teal-800 dark:to-[#0a1f14] flex-shrink-0">
              <Image
                src={Logo}
                alt="Portrait of Abd El-Djalil"
                fill
                sizes="(min-width: 768px) 320px, 256px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Profile Info */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-900 dark:text-[#d4f5e0] leading-tight">
              I&apos;m a Frontend Developer working remotely from 28°C Algeria.
            </h2>
            <p className="text-base md:text-lg text-slate-600 dark:text-[#8ab5a0] leading-relaxed">
              I&apos;ve worked in various areas of digital development, including front-end development, engineering, and UI/UX. I&apos;m passionate about building things for good.
            </p>
          </div>
        </div>
      </section>

   {/* Work Experience Timeline */}
<section className="px-4 sm:px-6 py-14 md:py-24 max-w-6xl mx-auto">

  {/* نسخة الشاشات الكبيرة: نفس ترتيب السلم بالصورة */}
  <div className="hidden lg:block relative w-full aspect-[1531/521]">
    {EXPERIENCE.map((job) => (
      <div
        key={job.id}
        className={`absolute flex flex-row items-center justify-between gap-3 ${job.shade} text-white px-6 py-3 rounded-full whitespace-nowrap`}
        style={{ top: `${job.top}%`, left: `${job.left}%`, width: `${job.width}%` }}
      >
        <span className="font-semibold truncate">{job.company}</span>
        <span className="text-sm text-white/85 truncate hidden xl:inline">{job.role}</span>
        <span className="bg-white text-teal-900 px-3 py-1 rounded-full font-bold text-sm shrink-0">
          {job.years}
        </span>
      </div>
    ))}
  </div>

  {/* نسخة الموبايل والتابلت: عمودية */}
  <div className="flex lg:hidden flex-col gap-3">
    {EXPERIENCE.map((job) => (
      <div
        key={job.id}
        className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 ${job.shade} text-white px-5 sm:px-6 py-3 rounded-2xl sm:rounded-full`}
      >
        <span className="font-semibold">{job.company}</span>
        <span className="text-sm text-white/85">{job.role}</span>
        <span className="bg-white text-teal-900 px-3 py-1 rounded-full font-bold text-sm w-fit">
          {job.years}
        </span>
      </div>
    ))} 
  </div>
</section>

      {/* Collaboration Section */}
      <section className="px-4 sm:px-6 py-16 md:py-28 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-teal-900 dark:text-[#d4f5e0] text-center mb-6 md:mb-8 leading-tight">
          Let&apos;s collaborate if you&apos;re committed to sustainability, education, equality.
        </h2>
        <p className="text-center text-slate-600 dark:text-[#8ab5a0] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          I believe we should leave this Earth as good as or better than we found it for future generations; my goal is to contribute to those ideals in whatever way I can. If you feel the same, I&apos;d love to talk.
        </p>
      </section>

      {/* Four Pillars Section */}
      <section className="px-4 sm:px-6 py-14 md:py-24 bg-[#f2eee8] dark:bg-[#1a3a28] rounded-3xl max-w-6xl mx-5 xl:mx-auto">
        <div className="grid sm:grid-cols-2 gap-8  md:gap-12">
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-teal-900 dark:text-[#a3c9b8] font-bold text-sm tracking-widest">01</h3>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-teal-900 dark:text-[#d4f5e0]">Make it</h4>
            <p className="text-slate-600 dark:text-[#8ab5a0] text-base leading-relaxed">
              I develope softwares and make prototypes. Talking through tactile designs explains ideas best—working hard to get the details right. The small should be realized with a big team can rally around.
            </p>
          </div>

          <div className="space-y-3 md:space-y-4">
            <h3 className="text-teal-900 dark:text-[#a3c9b8] font-bold text-sm tracking-widest">02</h3>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-teal-900 dark:text-[#d4f5e0]">Collaborate</h4>
            <p className="text-slate-600 dark:text-[#8ab5a0] text-base leading-relaxed">
              Good software is not created in a vacuum but rather in a shared space. It must be facilitated and iterated upon as a team. I like to include stakeholders in my development process and create a collaborative environment that welcomes and encourages feedback.
            </p>
          </div>

          <div className="space-y-3 md:space-y-4">
            <h3 className="text-teal-900 dark:text-[#a3c9b8] font-bold text-sm tracking-widest">03</h3>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-teal-900 dark:text-[#d4f5e0]">Accessible FTW</h4>
            <p className="text-slate-600 dark:text-[#8ab5a0] text-base leading-relaxed">
              I strive to make everything I develop accessible to everyone for one reason: it is the right thing to do. Products that are easy to access and use benefit the many, not the few.
            </p>
          </div>

          <div className="space-y-3 md:space-y-4">
            <h3 className="text-teal-900 dark:text-[#a3c9b8] font-bold text-sm tracking-widest">04</h3>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-teal-900 dark:text-[#d4f5e0]">Keep experimenting</h4>
            <p className="text-slate-600 dark:text-[#8ab5a0] text-base leading-relaxed">
              Everything I create is subject to change and experimentation. Not everything will go well, but it&apos;s worth trying—and learning from what doesn&apos;t.
            </p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="px-4 sm:px-6 py-14 md:py-24 max-w-4xl mx-auto">
        <div className="space-y-6 text-slate-600 dark:text-[#8ab5a0] text-base md:text-lg leading-relaxed">
          <p>
            Before entering the world of web development, I was simply a coder; one of my early roles involved writing HTML for small web pages—a phase filled with hopes and wishes that the final design would turn out exactly as I had envisioned.          </p>
          <p>
            Working with HTML and CSS helped me understand websites and how they come together—a skill I have diligently honed and mastered over the years. As for my side projects, I view them as a way to explore new experiences and keep pace with the evolution of the web.          </p>
          <p>
            In my personal life, I enjoy sipping delicious coffee near a beautiful park and listening to poetry and its eloquent beauty. I also love reading the Quran daily; it clears my mind, brings me a sense of peace, and allows me to disconnect from a world filled with overwhelming thoughts.          </p>
        </div>
      </section>

      {/* Images Section */}
      <section className="px-4 sm:px-6 py-14 md:py-24 max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-[1.6fr_1fr] gap-4 md:gap-6">
          <div className="relative group aspect-video sm:aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden">
            <Image
              src={All}
              alt="Group photo at CNTIC workshop"
              fill
              sizes="(min-width: 640px) 55vw, 100vw"
              className="object-cover "
            />
            <span className="absolute group-hover:opacity-100 opacity-0 transition-opacity duration-300 bottom-4 left-4 bg-amber-50/90 dark:bg-[#0a1f14]/90 text-teal-900 dark:text-[#d4f5e0] text-sm font-medium px-4 py-2 rounded-full">
              CNTIC Workshop
            </span>
          </div>

          <div className="relative group aspect-video sm:aspect-[3.35/4] rounded-2xl md:rounded-3xl overflow-hidden">
            <Image
              src={One}
              alt="Abd El-Djalil at the CNTIC deep learning workshop"
              fill
              sizes="(min-width: 640px) 35vw, 100vw"
              className="object-cover"
            />
            <span className="absolute group-hover:opacity-100 opacity-0 transition-opacity duration-300 bottom-4 left-4 bg-amber-50/90 dark:bg-[#0a1f14]/90 text-teal-900 dark:text-[#d4f5e0] text-sm font-medium px-4 py-2 rounded-full">
              AI Workshop
            </span>
          </div>
        </div>
      </section>

      {/* Bottom spacing */}
      <div className="h-12 sm:h-16 md:h-24" />
    </main>
  );
}