import { NavList } from "./NavList";
import { Button } from "./Button";

export function MobileNav({ openNav, handleBooking }): JSX.Element {
  return (
    <nav>
      <div className="container mx-auto mt-16 font-medium text-xl ml-3">
        <NavList openNav={openNav} />
        <Button
          handleBooking={handleBooking}
          className="rounded-lg bg-teal-700 py-3 px-6 font-sans text-sm font-semibold text-white shadow-md shadow-teal-700/20 transition-all hover:shadow-lg hover:shadow-teal-700/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none focus:outline-none  focus:z-10 focus:ring-4 focus:ring-teal-700"
        />
      </div>
    </nav>
  );
}
