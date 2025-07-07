import { createContext, useContext } from "react";
import type { NavbarContextType } from "./navBar.type";

export const NavbarContext = createContext<NavbarContextType | undefined>(
  undefined
);

export const useNavbarContext = () => {
  const context = useContext(NavbarContext);
  if (!context)
    throw new Error("useNavbarContext must be used within NavbarProvider");
  return context;
};
