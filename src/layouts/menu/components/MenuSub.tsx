// src/components/MenuSub.tsx
import React from "react";
import type { TMenuConfig } from "../type";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useHeader } from "../../header/constance";

interface MenuSubProps {
  menu: TMenuConfig;
}

const MenuSub: React.FC<MenuSubProps> = ({ menu }) => {
  const { toggleMenuOpen } = useHeader();
  return (
    <div className="group relative w-full">
      {/* Heading */}
      <NavLink
        to={menu.path || "#"}
        className={({ isActive }) =>
          `text-base font-semibold flex items-center gap-x-2 justify-between px-4 py-2 rounded-md cursor-pointer select-none transition-colors duration-200 ${
            isActive ? "text-secondary" : "hover:text-secondary"
          }`
        }
        onClick={toggleMenuOpen}
      >
        <span className="flex-shrink-0">{menu.title}</span>

        {menu.children && (
          <span>
            <IoIosArrowDown size={15} className="mt-1" />
          </span>
        )}
      </NavLink>

      {/* Submenu */}
      {menu.children && (
        <div
          className={`
            absolute left-0 top-full w-full mt-0
            overflow-hidden rounded-md shadow-md
            opacity-0 max-h-0
            group-hover:opacity-100 group-hover:max-h-screen
            transition-[max-height,opacity] duration-300 ease-in-out
            bg-white
          `}
        >
          <div className="p-1">
            {menu.children.map((child) => (
              <MenuSub
                key={child.path || child.title}
                menu={child}
                // active={child.path === /* cái path active của bạn */}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuSub;
