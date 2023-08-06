import { Hero } from "./hero-section/Hero";
import Highlights from "./highlights-section/Highlights";

export function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <Highlights />
    </>
  );
}

export default Home;
