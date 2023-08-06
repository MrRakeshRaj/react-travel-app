import { travelGuideDetails } from "../../data/travelGuide";
import { TravelGuideImage } from "./TravelGuideImage";
import { Headings } from "../Headings";

export function TravelGuide(): JSX.Element {
  return (
    <>
      <div className="relative right-16 flex flex-col w-[560px] mt-10 mr-10">
        <Headings title={"Travel Guide"} />
        <div className="flex flex-row justify-between items-center w-full h-[190px] bg-white mt-4 rounded-lg">
          <div className="flex flex-col mr-4">
            <div className="pl-6 pr-6 font-robotomono">
              <h5 className="text-2xl -mt-5 font-semibold leading-tight text-black ">
                {travelGuideDetails[0]?.name}
              </h5>
              <p className="mb-10 text-lg text-black">
                {travelGuideDetails[0]?.content}
              </p>
              <button
                type="button"
                className="font-bold font-robotomono text-lg text-teal-700 border border-teal-700 items-center p-1 pr-4 pl-4  focus:outline-none rounded-md hover:border hover:bg-teal-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-teal-700"
              >
                Contact
              </button>
            </div>
          </div>
          <div className="mr-3 pr-3">
            <TravelGuideImage />
          </div>
        </div>
      </div>
    </>
  );
}
