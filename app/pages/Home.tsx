interface HomeProps {
  Hero: React.ReactNode;
  Marquee: React.ReactNode;
  // Work: React.ReactNode;
  About: React.ReactNode;
  Services: React.ReactNode;
  Testimonials: React.ReactNode;
  // Contact: React.ReactNode;
}

export default function Home({ Hero, Marquee, About, Services, Testimonials }: HomeProps) {
  return (
    <main>
      {Hero}
      {Marquee}
      {/* {Work} */}
      {About}
      {Services}
      {Testimonials}
      {/* {Contact} */}
    </main>
  );
}