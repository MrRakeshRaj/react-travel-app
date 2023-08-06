export function Card({ title, content, imgPath }): JSX.Element {
  return (
    <>
      <div className="max-w-sm mx-2 sm:shrink-0 sm:grow rounded-lg sm:basis-0 mt-6 flex flex-col justify-between shadow-lg shadow-[#E6F2F2] overflow-hidden">
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
          <button
            type="button"
            className="text-white bg-[#E6F2F2] hover:bg-teal-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center items-center justify-end mr-2"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="teal"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
            <span className="sr-only">Icon description</span>
          </button>
        </div>
      </div>
    </>
  );
}
