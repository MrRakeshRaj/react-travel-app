import { Headings } from "../Headings";
import { Cards } from "./Cards";

export function Highlights(): JSX.Element {
  return (
    <>
      <div className="relative left-12 lg:top-48 lg:left-40 top-80 mb-2 h-[500px]">
        <Headings title={"Highlights"} />
        <Cards />
      </div>
    </>
  );
}

export default Highlights;
