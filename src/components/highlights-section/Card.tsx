import { ArrowButton } from "./ArrowButton";

type propsType = {
  title: string;
  content: string;
  imgPath: string;
};

export function Card({ title, content, imgPath }: propsType): JSX.Element {
  return (
    <>
      <div className="max-w-sm mx-2 max-sm:w-full sm:shrink-0 sm:grow rounded-lg sm:basis-0 mt-6 flex flex-col justify-between shadow-lg shadow-[#E6F2F2] overflow-hidden transform transition duration-500 hover:scale-90">
        <a href="#">
          <img
            className="rounded-t-lg w-full object-cover h-40"
            src={imgPath}
            alt={title}
          />
        </a>
        <div className="px-6 py-4 font-robotomono">
          <a href="#">
            <div className="mb-2 text-2xl text-teal-700 font-bold tracking-tight">
              {title}
            </div>
          </a>
          <p className="mb-3 text-black font-normal text-base">{content}</p>
        </div>
        <div className="px-6 py-4 flex flex-row justify-end">
          <ArrowButton bg={true} />
        </div>
      </div>
    </>
  );
}
