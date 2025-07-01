import Logo from "./components/Logo";
import MenuProvider from "../menu";
import MenuHeading from "../menu/components/MenuHeading";
import { MENU_CONFIG } from "../menu/menu.config";
import RightElement from "./right-element/RightElement";
import { useHeader } from "./constance";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import useWindowWidth from "../../hooks/dom/useWindownWidth";

const Header = () => {
  const { isMenuOpen, toggleMenuOpen } = useHeader();
  const menuRef = useRef<HTMLDivElement>(null);
  const windownWidth = useWindowWidth();

  const slideVariants: Variants = {
    closed: {
      opacity: 0,
      height: 0,
      paddingBottom: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      paddingBottom: windownWidth < 1024 ? "16px" : "0px",
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        toggleMenuOpen();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen, toggleMenuOpen]);

  return (
    <div className="flex items-center justify-between relative">
      <Logo />
      <MenuProvider>
        <motion.div
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          variants={slideVariants}
          className="absolute top-full left-0 w-full px-4 pb-4 lg:pb-0 lg:px-0 max-w-screen-xl mx-auto overflow-hidden origin-top lg:static lg:w-auto lg:bg-transparent"
        >
          <div
            className="flex flex-col lg:flex-row items-start gap-x-2 shadow-lg lg:shadow-none rounded-[5px]"
            ref={menuRef}
          >
            {MENU_CONFIG.map((menu) => (
              <MenuHeading key={menu.title} menu={menu} />
            ))}
          </div>
        </motion.div>
      </MenuProvider>
      <RightElement />
    </div>
  );
};

export default Header;
