// import { MARQUEE_ITEMS } from '../../lib/data';

// export default function Marquee() {
//   return (
//     <div className="py-8 border-y border-border overflow-hidden">
//       <div className="animate-marquee flex gap-8 whitespace-nowrap">
//         {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
//           <span
//             key={i}
//             className="flex items-center gap-8 text-sm font-medium text-muted uppercase tracking-widest"
//           >
//             <span className="hover:text-accent transition-colors cursor-default">
//               {item}
//             </span>
//             <span className="text-accent text-xs">✦</span>
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }






import { MARQUEE_ITEMS } from '../../lib/data';

export default function Marquee() {
  // Duplicate items 4x for a seamless infinite loop with no empty gaps
  const items = [
    ...MARQUEE_ITEMS, 
    ...MARQUEE_ITEMS, 
    ...MARQUEE_ITEMS, 
    ...MARQUEE_ITEMS
  ];

  return (
    <div className="py-6 border-y border-border overflow-hidden">
      <div className="animate-marquee flex gap-12 whitespace-nowrap w-max">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-12 text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] select-none"
          >
            <span className="hover:text-primary transition-colors duration-300 cursor-default">
              {item}
            </span>
            <span className="text-primary/40 text-xs">&#10022;</span>
          </span>
        ))}
      </div>
    </div>
  );
}