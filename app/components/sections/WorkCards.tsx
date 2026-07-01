const works = [
  {
    id: 1,
    title: 'Frontend',
    subtitle: 'HELP SCOUT',
    bgColor: 'bg-[#d4a5e0]', // pastel purple
    mockup: (
      <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
        <div className="h-6 bg-[#1a73e8] flex items-center px-3 gap-1.5">
          <div className="w-2 h-2 rounded-full bg-white/30" />
          <div className="w-2 h-2 rounded-full bg-white/30" />
          <div className="w-2 h-2 rounded-full bg-white/30" />
        </div>
        <div className="p-4 space-y-3">
          <div className="h-2 bg-gray-200 rounded w-3/4" />
          <div className="h-2 bg-gray-200 rounded w-1/2" />
          <div className="bg-gray-50 rounded p-3 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-purple-200" />
              <div className="h-2 bg-gray-300 rounded w-20" />
            </div>
            <div className="h-2 bg-gray-200 rounded w-full" />
            <div className="h-2 bg-gray-200 rounded w-5/6" />
            <div className="h-2 bg-gray-200 rounded w-4/6" />
          </div>
          <div className="flex gap-2">
            <div className="h-6 bg-purple-100 rounded w-16" />
            <div className="h-6 bg-purple-500 rounded w-20" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Articles',
    subtitle: 'HELP SCOUT',
    bgColor: 'bg-[#a8ddd8]', // pastel teal
    mockup: (
      <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
        <div className="h-6 bg-[#1a73e8] flex items-center px-3 gap-1.5">
          <div className="w-2 h-2 rounded-full bg-white/30" />
          <div className="w-2 h-2 rounded-full bg-white/30" />
          <div className="w-2 h-2 rounded-full bg-white/30" />
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-4 h-4 rounded-full bg-gray-200" />
            <div className="h-2 bg-gray-200 rounded w-24" />
          </div>
          <div className="flex justify-end gap-2 mb-4">
            <div className="h-5 bg-gray-100 rounded w-14 border border-gray-200" />
            <div className="h-5 bg-blue-500 rounded w-16" />
          </div>
          <div className="inline-block px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full mb-2">
            Published
          </div>
          <div className="h-4 bg-gray-800 rounded w-3/4 mb-3" />
          <div className="space-y-2">
            <div className="h-2 bg-gray-200 rounded w-full" />
            <div className="h-2 bg-gray-200 rounded w-full" />
            <div className="h-2 bg-gray-200 rounded w-5/6" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Plugins',
    subtitle: 'FIGMA',
    bgColor: 'bg-[#e8b89d]', // pastel peach
    mockup: (
      <div className="w-full bg-[#2c2c2c] rounded-lg shadow-lg overflow-hidden">
        <div className="h-6 bg-[#1a1a1a] flex items-center px-3 gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
        <div className="p-6 flex justify-center items-center gap-4">
          <div className="w-20 h-20 bg-pink-100 rounded border-2 border-pink-300 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-pink-400 rounded-full" />
            <div className="w-6 h-6 border-2 border-pink-400 rounded-full -ml-3" />
          </div>
          <div className="w-20 h-20 bg-slate-700 rounded flex items-center justify-center">
            <div className="w-6 h-6 bg-blue-300 rounded-full" />
            <div className="w-4 h-4 bg-blue-500 rounded-full -ml-2 mt-2" />
          </div>
          <div className="w-20 h-20 bg-blue-100 rounded border-2 border-blue-200" />
        </div>
      </div>
    ),
  },
 
];

export default function WorkCards() {
  return ( 
    <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">
          {works.map((work) => (
            <article
              key={work.id}
              className={`group relative ${work.bgColor} ${work.id === 1 || work.id === 4 ? 'w-full lg:w-3/4' : ''} ${work.id === 2  ? 'lg:-ml-28 lg:w-[120%] xl:w-[110%] ' : ''} ${work.id === 3  ? 'lg:-mr-28 lg:w-[120%] xl:w-[110%] ' : ''}  rounded-[2rem] p-6 sm:p-8 lg:p-10 overflow-hidden transition-transform duration-300 hover:scale-[1.02] cursor-pointer`}
            >
              {/* Header */}
              <div className="text-right mb-6">
                <p className="text-xs font-semibold tracking-widest text-gray-700/80 uppercase">
                  {work.subtitle}
                </p>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-1">
                  {work.title}
                </h3>
              </div>

              {/* Mockup Preview */}
              <div className="relative w-full transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                {work.mockup}
              </div>

              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 rounded-[2rem]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}