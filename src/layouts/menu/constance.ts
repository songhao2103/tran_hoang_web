import { createContext, useContext } from "react";
import type { MenuContextType, TMenuConfig } from "./type";

export const MenuContext = createContext<MenuContextType | undefined>(
  undefined
);

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context)
    throw new Error("useMenuContext must be used within MenuProvider");
  return context;
};

export const isMenuActive = (
  menu: TMenuConfig,
  currentPath: string
): boolean => {
  if (menu.children) {
    const segmentsCurrentPath = currentPath.split("/").filter(Boolean);
    const cleanedMenuPath = menu.path.replace(/^\//, "");
    if (!cleanedMenuPath && segmentsCurrentPath.length === 0) return true;

    return segmentsCurrentPath.includes(cleanedMenuPath);
  }

  return menu.path === currentPath;
};
