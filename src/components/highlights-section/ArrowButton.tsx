export function ArrowButton({ bg }): JSX.Element {
  return (
    <>
      <button
        type="button"
        className={`text-white ${
          bg ? "bg-[#E6F2F2]" : ""
        } hover:bg-teal-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center items-center justify-end mr-2`}
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
      </button>
    </>
  );
}
