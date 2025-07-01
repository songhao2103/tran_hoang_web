import { createContext, useContext } from "react";
import type { MenuContextType } from "./type";

export const MenuContext = createContext<MenuContextType | undefined>(
  undefined
);

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context)
    throw new Error("useMenuContext must be used within MenuProvider");
  return context;
};
