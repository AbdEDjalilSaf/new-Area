interface HomeProps {
  Hero: React.ReactNode;
  Marquee: React.ReactNode;
  WorkCards: React.ReactNode;

}

export default function Home({ Hero, Marquee, WorkCards }: HomeProps) {
  return (
    <main>
      {Hero}
      {Marquee}
      {WorkCards}

    </main>
  );
}