import { Headings } from "../Headings";
import { Card } from "./Card";

export function Highlights(): JSX.Element {
  return (
    <>
      <div className="relative left-12 lg:top-48 lg:left-40 top-80 mb-2 h-[500px]">
        <Headings title={"Highlights"} />
        <div className="grid-cols-1 sm:grid md:grid-cols-2 lg:grid-cols-4">
          <Card
            title={"Surfing"}
            content={"Best Hawaiian islands for surfing."}
            imgPath={"src/assets/surfing.jpg"}
          />
          <Card
            title={"Hula"}
            content={"Try it yourself."}
            imgPath={"src/assets/hula.jpg"}
          />
          <Card
            title={"Vulcanoes"}
            content={"Volcanic conditions can change at any time."}
            imgPath={"src/assets/volcano.jpg"}
          />
        </div>
      </div>
    </>
  );
}

export default Highlights;
