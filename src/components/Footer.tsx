import { AlohaIcon } from "./AlohaIcon";

export function Footer(): JSX.Element {
  return (
    <>
      <footer className="bg-white left-0 relative -bottom-28 max-sm:-bottom-60">
        <div className="w-full mx-auto max-w-screen-2xl p-1 bg-[#001A1A]">
          <div className="font-normal text-5xl ml-16 p-2 max-sm:ml-3">
            <AlohaIcon color={true} />
          </div>
        </div>
      </footer>
    </>
  );
}
