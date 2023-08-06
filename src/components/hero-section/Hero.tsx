import { Navbar } from "./Navbar";

export function Hero(): JSX.Element {
  return (
    <>
      <div className="relative">
        <Navbar />
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
