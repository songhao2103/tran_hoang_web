import { useState } from "react";
import { NavbarContext } from "../constance";

export const NavbarProvider = ({ children }: { children: React.ReactNode }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <NavbarContext.Provider
      value={{ openIndex, setOpenIndex, collapsed, setCollapsed }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
