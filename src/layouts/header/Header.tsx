// src/components/Header.tsx
import Logo from "./components/Logo";
import MenuProvider from "../menu";
import MenuHeading from "../menu/components/MenuHeading";
import { MENU_CONFIG } from "../menu/menu.config";
import RightElement from "./right-element/RightElement";
import { useHeader } from "./constance";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const menuVariants: Variants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: "easeInOut" },
      opacity: { duration: 0.2 },
    },
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.4, ease: "easeInOut" },
      opacity: { duration: 0.3 },
    },
  },
};

const Header = () => {
  const { isMenuOpen, toggleMenuOpen } = useHeader();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        toggleMenuOpen();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen, toggleMenuOpen]);

  return (
    <div className="relative flex items-center justify-between w-full px-1 py-2 shadow-md xl:px-4 lg:shadow-none max-w-[1820px] mx-auto">
      <div className="px-6">
        <Logo />
      </div>

      <MenuProvider>
        {/* desktop: luôn show */}
        <div className="hidden lg:flex lg:flex-row lg:items-center lg:gap-x-2">
          {MENU_CONFIG.map((menu) => (
            <MenuHeading key={menu.title} menu={menu} />
          ))}
        </div>

        {/* mobile: AnimatePresence + motion */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              className="absolute left-0 z-20 w-full overflow-hidden bg-white shadow-lg top-full lg:hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="flex flex-col px-4 py-2 gap-y-1">
                {MENU_CONFIG.map((menu) => (
                  <MenuHeading key={menu.title} menu={menu} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </MenuProvider>

      <RightElement />
    </div>
  );
};

export default Header;
