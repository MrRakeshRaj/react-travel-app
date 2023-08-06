import { useState, useEffect } from "react";
import { NavList } from "./NavList";
import { Button } from "./Button";
import { IconButton } from "./IconButton";
import { MobileNav } from "./MobileNav";
import { AlohaIcon } from "./AlohaIcon";
import "animate.css";

const handleBooking = () => {
  console.log("clicked booking");
};

export function Navbar(): JSX.Element {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <nav
      className={`relative top-0 lg:top-5 z-10 mx-auto ${
        openNav
          ? "h-screen mr-0 ml-6 top-0 animate__animated animate__fadeInTopRight"
          : "top-0"
      } max-w-screen-lg py-2 px-4 lg:px-8 lg:py-4 shadow-md rounded-lg font-robotomono bg-white`}
    >
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <div className="flex lg:justify-between lg:items-center flex-col lg:flex-row">
          <div className="font-normal text-5xl">
            {!openNav ? <AlohaIcon /> : ""}
          </div>
          <div className="hidden lg:block">
            <NavList openNav={openNav} />
          </div>
        </div>
        <Button
          handleBooking={handleBooking}
          className="hidden lg:inline-block center rounded-lg bg-teal-700 py-2 lg:px-5 font-sans lg:text-sm text-xs font-semibold text-white shadow-md shadow-teal-700/20 transition-all hover:shadow-lg hover:shadow-teal-700/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none focus:outline-none  focus:z-10 focus:ring-4 focus:ring-teal-700"
        />

        <IconButton openNav={openNav} setOpenNav={setOpenNav} />
      </div>
      {openNav ? (
        <MobileNav openNav={openNav} handleBooking={handleBooking} />
      ) : (
        ""
      )}
    </nav>
  );
}
