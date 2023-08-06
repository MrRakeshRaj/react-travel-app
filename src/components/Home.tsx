import { Footer } from "./Footer";
import { Details } from "./details-section/Details";
import { Hero } from "./hero-section/Hero";
import Highlights from "./highlights-section/Highlights";

export function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <Highlights />
      <Details />
      <Footer />
    </>
  );
}

export default Home;
