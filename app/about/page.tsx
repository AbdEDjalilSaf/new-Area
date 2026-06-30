// import Image from "next/image";
// import Logo from "@/public/logo.jpg";



// export default function Page() {
//   return ( 
//     <main className="bg-amber-50 text-slate-700">
//       {/* Hero Section */}
//       <section className="px-6 min-h-screen pb-3 pt-32 md:pb-2 md:pt-40 max-w-6xl mx-auto">
//         <h1 className="text-5xl md:text-6xl font-bold text-teal-900 text-center mb-16 md:mb-24">
//           I&apos;m Abd El-Djalil.
//         </h1>

//         {/* Profile Section */}
//         <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
//           {/* Profile Image */}
//           <div className="flex justify-center md:justify-start">
//             <Image src={Logo} alt="Profile" className="w-72 h-80 md:w-88 md:h-92 rounded-t-full overflow-hidden bg-gradient-to-br from-teal-700 to-teal-900 flex-shrink-0" />
//           </div>

//           {/* Profile Info */}
//           <div className="space-y-6">
//             <h2 className="text-3xl md:text-4xl font-bold text-teal-900 leading-tight">
//               I&apos;m a Frontend Developer working remotely from 28°C Algeria.
//             </h2>
//             <p className="text-base md:text-lg text-slate-600 leading-relaxed">
//                I&apos;ve worked in various areas of digital development, including front-end development, engineering, and UI/UX. I&apos;m passionate about building things for good.
//             </p>
           
//           </div>
//         </div>

//         {/* Work Experience Badges */}
       
//       </section>

//      <section className="px-6  py-16 md:py-24 max-w-6xl mx-auto">
//  <div className="space-y-3 flex relative my-12 flex-col ">
//           <div className="inline-flex absolute right-0 top-0 items-center gap-3 bg-teal-700 text-white px-6 py-3 rounded-full whitespace-nowrap">
//             <span className="font-semibold">GiveDirectly</span>
//             <span className="text-sm">Senior Product Designer</span>
//             <span className="bg-white text-teal-700 px-3 py-1 rounded-full font-bold text-sm">
//               22~
//             </span>
//           </div>

//           <div className="inline-flex absolute right-0 top-16 items-center gap-3 bg-teal-600 text-white px-6 py-3 rounded-full whitespace-nowrap">
//             <span className="font-semibold">Help Boost</span>
//             <span className="text-sm">Senior Product Designer</span>
//             <span className="bg-white text-teal-600 px-3 py-1 rounded-full font-bold text-sm">
//               15-23
//             </span>
//           </div>

//           <div className="inline-flex absolute right-0 top-32 items-center gap-3 bg-teal-600 text-white px-6 py-3 rounded-full whitespace-nowrap">
//             <span className="font-semibold">Freelance</span>
//             <span className="text-sm">Design Consultant</span>
//             <span className="bg-white text-teal-600 px-3 py-1 rounded-full font-bold text-sm">
//               12~
//             </span>
//           </div>

//           <div className="inline-flex absolute right-0 top-48 items-center gap-3 bg-teal-700 text-white px-6 py-3 rounded-full whitespace-nowrap">
//             <span className="font-semibold">Outfadiem</span>
//             <span className="text-sm">Design / Dev</span>
//             <span className="bg-white text-teal-700 px-3 py-1 rounded-full font-bold text-sm">
//               10-14
//             </span>
//           </div>

//           <div className="inline-flex absolute right-0 top-64 items-center gap-3 bg-teal-800 text-white px-6 py-3 rounded-full whitespace-nowrap">
//             <span className="font-semibold">Cubic</span>
//             <span className="text-sm">Design / Dev</span>
//             <span className="bg-white text-teal-800 px-3 py-1 rounded-full font-bold text-sm">
//               7-10
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* Collaboration Section */}
//       <section className="px-6 py-20 md:py-28 max-w-6xl mx-auto">
//         <h2 className="text-3xl md:text-5xl font-bold text-teal-900 text-center mb-8 leading-tight">
//           Let&apos;s collaborate if you&apos;re committed to sustainability, education, equality, or carbon neutrality.
//         </h2>
//         <p className="text-center text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
//           I believe we should leave this Earth as good as or better than we found it for future generations; my goal is to contribute to those ideals in whatever way I can. If you feel the same, I&apos;d love to talk.
//         </p>
//       </section>

//       {/* Four Pillars Section */}
//       <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-8 md:gap-12">
//           {/* Card 01 */}
//           <div className="space-y-4">
//             <h3 className="text-teal-900 font-bold text-sm tracking-widest">01</h3>
//             <h4 className="text-2xl md:text-3xl font-bold text-teal-900">Make it</h4>
//             <p className="text-slate-600 text-base leading-relaxed">
//               I sketch wireframes and make prototypes. Talking through tactile designs explains ideas best—working hard to get the details right. The small should be realized with a big team can rally around.
//             </p>
//           </div>

//           {/* Card 02 */}
//           <div className="space-y-4">
//             <h3 className="text-teal-900 font-bold text-sm tracking-widest">02</h3>
//             <h4 className="text-2xl md:text-3xl font-bold text-teal-900">Collaborate</h4>
//             <p className="text-slate-600 text-base leading-relaxed">
//               Good design is not created in a vacuum but rather in a shared space. It must be facilitated and iterated upon as a team. I like to include stakeholders in my design process and create a collaborative environment that welcomes and encourages feedback.
//             </p>
//           </div>

//           {/* Card 03 */}
//           <div className="space-y-4">
//             <h3 className="text-teal-900 font-bold text-sm tracking-widest">03</h3>
//             <h4 className="text-2xl md:text-3xl font-bold text-teal-900">Accessible FTW</h4>
//             <p className="text-slate-600 text-base leading-relaxed">
//               I aim to make everything I design accessible to all for one reason—it&apos;s the right thing to do. Accessible products benefit the many, not the few.
//             </p>
//           </div>

//           {/* Card 04 */}
//           <div className="space-y-4">
//             <h3 className="text-teal-900 font-bold text-sm tracking-widest">04</h3>
//             <h4 className="text-2xl md:text-3xl font-bold text-teal-900">Keep experimenting</h4>
//             <p className="text-slate-600 text-base leading-relaxed">
//               Everything I create is subject to change and experimentation. Not everything will go well, but it&apos;s worth trying—and learning from what doesn&apos;t.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Biography Section */}
//       <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
//         <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
//           <p>
//             Before I stepped into the world of product design, I was a web developer. One of my earliest jobs involved writing HTML, emails, in a time before email client litmus. Lots of wishing, hoping, and finger-crossing that you email arrived in a recipient&apos;s inbox in one piece.
//           </p>
//           <p>
//             Coding emails focused me to understand how HTML worked together; a skill set I carried and kept fresh in the years since. My side project work is just an excuse to satisfy my curiosity about technologies and understandings how the web is moving forward.
//           </p>
//           <p>
//             Outside work, I enjoy good coffee near my home by the sea, listening to and playing music, exploring the world with my partner, and playing with Labrante pup, Louis.
//           </p>
//         </div>
//       </section>

//       {/* Images Section */}
//       <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Black and white architectural image placeholder */}
//           <div className="aspect-video md:aspect-square bg-gradient-to-br from-slate-900 to-slate-700 rounded-lg overflow-hidden">
//             <div className="w-full h-full flex items-center justify-center text-white text-center p-6">
//               <p className="text-lg font-semibold">Architectural Image</p>
//             </div>
//           </div>

//           {/* Red tram image placeholder */}
//           <div className="aspect-video md:aspect-square bg-gradient-to-br from-sky-300 to-sky-100 rounded-lg overflow-hidden">
//             <div className="w-full h-full flex items-center justify-center text-slate-600 text-center p-6">
//               <p className="text-lg font-semibold">Red Tram Scene</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Bottom spacing */}
//       <div className="h-16 md:h-24" />
//     </main>
//   )
// }








import Image from "next/image";
import Logo from "@/public/logo.jpg";

const EXPERIENCE = [
  { id: 1, company: "GiveDirectly", role: "Senior Product Designer", years: "22~", shade: "bg-teal-700", top: 2,    left: 78.5, width: 19 },
  { id: 2, company: "Help Scout",   role: "Senior Product Designer", years: "15-23", shade: "bg-teal-600", top: 22,   left: 44.3, width: 38 },
  { id: 3, company: "Freelance",    role: "Design Consultant",       years: "12~",  shade: "bg-teal-600", top: 42,   left: 36.8, width: 60 },
  { id: 4, company: "Dotfusion",    role: "Design / Dev",            years: "10-14",shade: "bg-teal-500", top: 62.5, left: 21.4, width: 23 },
  { id: 5, company: "Cubic",        role: "Design / Dev",            years: "7-10", shade: "bg-teal-800", top: 82.5, left: 2.5,  width: 19 },
];

export default function Page() {
  return (
    <main className="bg-amber-50 text-slate-700">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 min-h-screen pb-3 pt-24 sm:pt-32 md:pb-2 md:pt-40 max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-teal-900 text-center mb-12 sm:mb-16 md:mb-24">
          I&apos;m Abd El-Djalil.
        </h1>

        {/* Profile Section */}
        <div className="grid px-20 md:px-10 md:grid-cols-2 gap-8 md:gap-12 items-start mb-16 md:mb-20">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-56 h-64 sm:w-64 sm:h-72 md:w-80 md:h-96 rounded-t-full overflow-hidden bg-gradient-to-br from-teal-700 to-teal-900 flex-shrink-0">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-900 leading-tight">
              I&apos;m a Frontend Developer working remotely from 28°C Algeria.
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
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
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-teal-900 text-center mb-6 md:mb-8 leading-tight">
          Let&apos;s collaborate if you&apos;re committed to sustainability, education, equality.
        </h2>
        <p className="text-center text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          I believe we should leave this Earth as good as or better than we found it for future generations; my goal is to contribute to those ideals in whatever way I can. If you feel the same, I&apos;d love to talk.
        </p>
      </section>

      {/* Four Pillars Section */}
      <section className="px-4 sm:px-6 py-14 md:py-24 max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-teal-900 font-bold text-sm tracking-widest">01</h3>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-teal-900">Make it</h4>
            <p className="text-slate-600 text-base leading-relaxed">
              I sketch wireframes and make prototypes. Talking through tactile designs explains ideas best—working hard to get the details right. The small should be realized with a big team can rally around.
            </p>
          </div>

          <div className="space-y-3 md:space-y-4">
            <h3 className="text-teal-900 font-bold text-sm tracking-widest">02</h3>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-teal-900">Collaborate</h4>
            <p className="text-slate-600 text-base leading-relaxed">
              Good design is not created in a vacuum but rather in a shared space. It must be facilitated and iterated upon as a team. I like to include stakeholders in my design process and create a collaborative environment that welcomes and encourages feedback.
            </p>
          </div>

          <div className="space-y-3 md:space-y-4">
            <h3 className="text-teal-900 font-bold text-sm tracking-widest">03</h3>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-teal-900">Accessible FTW</h4>
            <p className="text-slate-600 text-base leading-relaxed">
              I aim to make everything I design accessible to all for one reason—it&apos;s the right thing to do. Accessible products benefit the many, not the few.
            </p>
          </div>

          <div className="space-y-3 md:space-y-4">
            <h3 className="text-teal-900 font-bold text-sm tracking-widest">04</h3>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-teal-900">Keep experimenting</h4>
            <p className="text-slate-600 text-base leading-relaxed">
              Everything I create is subject to change and experimentation. Not everything will go well, but it&apos;s worth trying—and learning from what doesn&apos;t.
            </p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="px-4 sm:px-6 py-14 md:py-24 max-w-4xl mx-auto">
        <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
          <p>
            Before I stepped into the world of product design, I was a web developer. One of my earliest jobs involved writing HTML, emails, in a time before email client litmus. Lots of wishing, hoping, and finger-crossing that you email arrived in a recipient&apos;s inbox in one piece.
          </p>
          <p>
            Coding emails focused me to understand how HTML worked together; a skill set I carried and kept fresh in the years since. My side project work is just an excuse to satisfy my curiosity about technologies and understandings how the web is moving forward.
          </p>
          <p>
            Outside work, I enjoy good coffee near my home by the sea, listening to and playing music, exploring the world with my partner, and playing with Labrante pup, Louis.
          </p>
        </div>
      </section>

      {/* Images Section */}
      <section className="px-4 sm:px-6 py-14 md:py-24 max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          <div className="aspect-video sm:aspect-square bg-gradient-to-br from-slate-900 to-slate-700 rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-white text-center p-6">
              <p className="text-lg font-semibold">Architectural Image</p>
            </div>
          </div>

          <div className="aspect-video sm:aspect-square bg-gradient-to-br from-sky-300 to-sky-100 rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-slate-600 text-center p-6">
              <p className="text-lg font-semibold">Red Tram Scene</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom spacing */}
      <div className="h-12 sm:h-16 md:h-24" />
    </main>
  );
}