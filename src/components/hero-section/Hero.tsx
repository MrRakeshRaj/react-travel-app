import { Navbar } from "./Navbar";

export function Hero(): JSX.Element {
  return (
    <>
      <div className="relative">
        <Navbar />
        <div className="relative z-20 all:top-32 sm:top-32 md:top-32 lg:top-10 2xl:top-9 top-32 xl:top-10 flex flex-col justify-center items-center">
          <h1 className="sm:text-7xl md:text-7xl lg:text-9xl xl:text-9xl text-7xl max-w-screen-md font-robotomono font-black text-white opacity-60">
            Welcome
          </h1>
          <h1 className="sm:text-7xl md:text-7xl lg:text-9xl xl:text-9xl text-7xl max-w-screen-md font-robotomono font-black text-white opacity-90">
            to hawaii
          </h1>
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            height: "500px",
            backgroundImage:
              "url('https://unsplash.com/photos/fd1cQ3mmBTE/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkxMjYwNDU0fA&force=true&w=1920')",
          }}
        ></div>
      </div>
    </>
  );
}

export default Hero;
