import React from "react";
import { useNavbarContext } from "../constance";
import { type INavBarConfig } from "../navBar.type";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

interface NavItemProps {
  item: INavBarConfig;
  index: number;
}

const NavItem: React.FC<NavItemProps> = ({ item, index }) => {
  const { openIndex, setOpenIndex, collapsed } = useNavbarContext();
  const location = useLocation();
  const navigate = useNavigate();
  const isOpen = openIndex === index;

  const toggle = () => {
    setOpenIndex(isOpen ? null : index);
  };

  const handleNavigate = (item: INavBarConfig) => {
    if (item.path !== location.pathname && !item.children) {
      navigate(item.path);
    }
  };

  if (collapsed) return null;

  return (
    <div className="border-b border-gray-200">
      <div
        className="px-4 py-3 cursor-pointer hover:text-secondary flex justify-between items-center"
        onClick={item.children ? toggle : () => handleNavigate(item)}
      >
        <div className="font-medium flex-shrink-0">{item.title}</div>
        {item.children && (
          <IoIosArrowDown
            className={`flex-shrink-0 w-5 h-5 transition-transform duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        )}
      </div>

      <AnimatePresence>
        {isOpen && item.children && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col bg-gray-50 pl-6 overflow-hidden"
          >
            {item.children.map((child) => (
              <div
                key={child.title}
                onClick={() => handleNavigate(item)}
                className="py-2 text-sm hover:text-secondary border-b last:border-none flex-shrink-0"
              >
                {child.title}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavItem;
