interface HomeProps {
  Hero: React.ReactNode;
  Marquee: React.ReactNode;
  WorkCards: React.ReactNode;
  // Work: React.ReactNode;
  // About: React.ReactNode;
  // Services: React.ReactNode;
  // Testimonials: React.ReactNode;
  // Contact: React.ReactNode;
}

export default function Home({ Hero, Marquee, WorkCards }: HomeProps) {
  return (
    <main>
      {Hero}
      {Marquee}
      {WorkCards}
      {/* {Work} */}
      {/* {About}
      {Services}
      {Testimonials} */}
      {/* {Contact} */}
    </main>
  );
}