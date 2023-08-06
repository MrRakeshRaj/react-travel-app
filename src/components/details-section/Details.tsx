import { Categories } from "./Categories";
import { TravelGuide } from "./TravelGuide";

export function Details(): JSX.Element {
  return (
    <>
      <div className="relative w-full top-40 mb-2 h-[500px] bg-[#E6F2F2]">
        <div className="flex flex-row justify-center left-12 h-full">
          <Categories />
          <TravelGuide />
        </div>
      </div>
    </>
  );
}
