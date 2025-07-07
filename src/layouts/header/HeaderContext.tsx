import { useEffect, useState } from "react";
import { type ReactNode } from "react";
import { HeaderContext } from "./constance";
import useWindowWidth from "../../hooks/dom/useWindownWidth";

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInputSearchOpen, setIsInputSearchOpen] = useState(false);

  const windownWidth = useWindowWidth();

  useEffect(() => {
    setIsMenuOpen(windownWidth > 1024);
  }, [windownWidth]);

  const handleToggleMenuOpen = () => {
    if (windownWidth > 1024) return;
    setIsMenuOpen(!isMenuOpen);
  };

  const handleToggleInputSearchOpen = () => {
    setIsInputSearchOpen(!isInputSearchOpen);
  };
  return (
    <HeaderContext.Provider
      value={{
        isScrolled,
        setIsScrolled,
        isMenuOpen,
        toggleMenuOpen: handleToggleMenuOpen,
        isInputSearchOpen,
        toggleInputSearchOpen: handleToggleInputSearchOpen,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
