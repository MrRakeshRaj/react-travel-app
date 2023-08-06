import { Headings } from "../Headings";
import { categories } from "../../data/categories";
import { ArrowButton } from "../highlights-section/ArrowButton";

export function Categories(): JSX.Element {
  return (
    <>
      <div className="flex flex-col w-[544px] mt-10 ml-24">
        <Headings title={"Categories"} />

        <div className="flex flex-col mt-2 p-2 gap-2">
          {categories.map((item, i) => (
            <div
              key={i}
              className="bg-white flex flex-row font-robotomono font-light text-sm justify-between items-center text-black max-w-md rounded-xl w-[544px] h-[68px]"
            >
              <div className="ml-2 pl-3">{item.title}</div>
              <div className="m1-2 pr-2">
                <ArrowButton bg={false} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
