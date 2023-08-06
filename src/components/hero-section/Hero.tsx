import { BackgroundImage } from "./BackgroundImage";
import { Heading } from "./Heading";
import { Navbar } from "./Navbar";

export function Hero(): JSX.Element {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Heading />
        <BackgroundImage />
      </div>
    </>
  );
}

export default Hero;
