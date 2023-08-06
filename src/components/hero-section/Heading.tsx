export function Heading(): JSX.Element {
  return (
    <>
      <div className="relative z-20 all:top-32 sm:top-32 md:top-32 lg:top-10 2xl:top-9 top-32 xl:top-10 flex flex-col justify-center items-center">
        <h1 className="sm:text-7xl md:text-7xl lg:text-9xl xl:text-9xl text-7xl max-w-screen-md font-robotomono font-black text-white opacity-60">
          Welcome
        </h1>
        <h1 className="sm:text-7xl md:text-7xl lg:text-9xl xl:text-9xl text-7xl max-w-screen-md font-robotomono font-black text-white opacity-90">
          to hawaii
        </h1>
      </div>
    </>
  );
}
