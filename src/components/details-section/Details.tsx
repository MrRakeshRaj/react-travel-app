import { Categories } from "./Categories";
import { TravelGuide } from "./TravelGuide";

export function Details(): JSX.Element {
  return (
    <>
      <div className="relative w-full max-sm:h-full lg:top-40 top-72 h-[550px] bg-[#E6F2F2]">
        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row left-12 h-full">
          <Categories />
          <TravelGuide />
        </div>
      </div>
    </>
  );
}
