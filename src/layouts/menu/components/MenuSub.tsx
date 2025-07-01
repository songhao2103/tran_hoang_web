// src/components/MenuSub.tsx
import React from "react";
import { useMenuContext } from "../constance";
import type { TMenuConfig } from "../type";
import MenuArrow from "./MenuArrow";

interface MenuSubProps {
  menu: TMenuConfig;
  parentPath?: string;
}

const MenuSub: React.FC<MenuSubProps> = ({ menu, parentPath = "" }) => {
  const { isOpen, isActive, toggleOpen, setActive } = useMenuContext();
  const fullKey = parentPath ? `${parentPath}/${menu.title}` : menu.title;

  const handleClick = () => {
    toggleOpen(fullKey);
    setActive(fullKey);
  };

  return (
    <div className="w-full">
      <div
        onClick={handleClick}
        className={`flex justify-between items-center cursor-pointer px-4 py-2 transition hover:bg-gray-100 rounded-md ${
          isActive(fullKey) ? "bg-gray-200 font-semibold" : ""
        }`}
      >
        <span>{menu.title}</span>
        {menu.children && <MenuArrow isOpen={isOpen(fullKey)} />}
      </div>

      {menu.children && (
        <div
          className={`pl-4 overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen(fullKey) ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {menu.children.map((child: TMenuConfig) => (
            <MenuSub
              key={child.path || child.title}
              menu={child}
              parentPath={fullKey}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuSub;
