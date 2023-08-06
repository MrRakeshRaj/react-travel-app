import { menuItems } from "../../helpers/menuItems";

export function NavList({ openNav }): JSX.Element {
  return (
    <ul className="mb-4 mt-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {menuItems.map((item, i) => {
        return (
          <li key={i}>
            <a
              href="#"
              className={`${
                openNav ? "text-lg" : ""
              } font-bold text-base flex items-center p-2 focus:outline-none rounded-md hover:border hover:border-teal-700 hover:text-teal-700 focus:z-10 focus:ring-4 focus:ring-teal-700`}
            >
              {item.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
