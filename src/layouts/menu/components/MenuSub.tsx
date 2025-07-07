// src/components/MenuSub.tsx
import React, { useState } from "react";
import type { TMenuConfig } from "../type";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import { useHeader } from "../../header/constance";
import { motion, type Variants } from "framer-motion";
import useWindowWidth from "../../../hooks/dom/useWindownWidth";
import { isMenuActive } from "../constance";
import { useNavigate } from "react-router-dom";

interface MenuSubProps {
  menu: TMenuConfig;
  isChildren?: boolean;
}

const containerVariants: Variants = {
  rest: {},
  open: {},
};

const submenuVariants: Variants = {
  rest: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const MenuSub: React.FC<MenuSubProps> = ({ menu, isChildren }) => {
  const { toggleMenuOpen } = useHeader();
  const navigate = useNavigate();
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 1024;
  const location = useLocation();

  const active = isMenuActive(menu, location.pathname); // dùng cho style

  // state cho mobile: mở/đóng submenu
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  // handle click trên mobile
  const handleMobileClick = () => {
    if (menu.children) {
      setIsOpenMobile((prev) => !prev);
    } else {
      // vẫn đóng menu toàn cục khi bấm link con
      navigate(menu.path);
      toggleMenuOpen();
    }
  };

  // --- DÀNH CHO DESKTOP ---
  if (!isMobile) {
    return (
      <motion.div
        className="relative w-full"
        initial="rest"
        whileHover="open"
        variants={containerVariants}
      >
        <NavLink
          to={menu.path || "#"}
          className={`text-base font-semibold flex items-center justify-between px-4 py-2 rounded-md cursor-pointer select-none transition-colors duration-200 gap-x-1 ${
            active
              ? "text-secondary"
              : `hover:text-secondary ${
                  isChildren ? "text-dark" : "text-gray-200"
                }`
          }`}
          onClick={(e) => {
            toggleMenuOpen();
            if (menu.children) {
              e.preventDefault();
            }
          }}
        >
          <span
            className={`flex-shrink-0 ${
              isChildren && !active ? "text-gray-600" : ""
            }`}
          >
            {menu.title}
          </span>
          {menu.children && (
            <IoIosArrowDown
              className="flex-shrink-0 w-4 h-4 mt-1 transition-transform duration-200"
              style={{ transform: "rotate(0deg)" }}
            />
          )}
        </NavLink>

        {menu.children && (
          <motion.div
            className="absolute left-0 z-10 w-auto overflow-hidden bg-white rounded-md shadow-md top-full min-w-max"
            variants={submenuVariants}
          >
            <div className="p-1">
              {menu.children.map((child) => (
                <MenuSub
                  key={child.path || child.title}
                  menu={child}
                  isChildren
                />
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    );
  }

  // --- DÀNH CHO MOBILE ---
  return (
    <div className="flex flex-col w-full">
      <button
        className={`w-full text-left text-base font-semibold flex items-center justify-between px-4 py-2 rounded-md cursor-pointer select-none transition-colors duration-200 gap-x-1 hover:bg-gray-100 ${
          active ? "text-secondary" : "text-dark"
        }`}
        onClick={handleMobileClick}
      >
        <span
          className={`flex-shrink-0 w-full ${
            isChildren ? "text-gray-600 border-b pb-3" : ""
          }`}
        >
          {menu.title}
        </span>
        {menu.children && (
          <IoIosArrowDown
            className={`flex-shrink-0 w-5 h-5 transition-transform duration-200 ${
              isOpenMobile ? "rotate-180" : "rotate-0"
            }`}
          />
        )}
      </button>

      {menu.children && (
        <motion.div
          className="overflow-hidden"
          initial="rest"
          animate={isOpenMobile ? "open" : "rest"}
          variants={submenuVariants}
        >
          <div className="flex flex-col pl-4">
            {menu.children.map((child) => (
              <MenuSub
                key={child.path || child.title}
                menu={child}
                isChildren
              />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MenuSub;
