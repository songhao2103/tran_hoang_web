import { NAV_BAR_CONFIG } from "./navBar.config";
import { NavbarProvider } from "./components/NavBarContext";
import { useNavbarContext } from "./constance";
import NavItem from "./components/NavBarItem";
import { motion } from "framer-motion";
import { IoClose, IoMenu } from "react-icons/io5";
import Logo from "../../../layouts/header/components/Logo";

export const NavbarInner = () => {
  const { collapsed, setCollapsed } = useNavbarContext();
  return (
    <div className="">
      <motion.div
        initial={{
          width: collapsed ? 40 : 0,
          height: collapsed ? 40 : 0,
          margin: collapsed ? 16 : 0,
        }}
        animate={{
          width: collapsed ? 40 : 0,
          height: collapsed ? 40 : 0,
          margin: collapsed ? 16 : 0,
        }}
        transition={{ duration: 0.3 }}
        onClick={() => setCollapsed(!collapsed)}
        className="flex items-center justify-center bg-secondary shadow-md cursor-pointer rounded-md hover:shadow-lg fixed left-0 top-0"
      >
        <IoMenu size={25} className="text-light" />
      </motion.div>

      <motion.div
        initial={{ width: collapsed ? 0 : 300 }}
        animate={{ width: collapsed ? 0 : 300 }}
        transition={{ duration: 0.3 }}
        className="bg-white shadow-md overflow-hidden"
        style={{ maxWidth: 400 }}
      ></motion.div>

      <motion.div
        initial={{ width: collapsed ? 0 : 300 }}
        animate={{ width: collapsed ? 0 : 300 }}
        transition={{ duration: 0.3 }}
        className="bg-dark shadow-md overflow-hidden fixed left-0 top-0 text-light h-screen"
        style={{ maxWidth: 400 }}
      >
        <div className="flex justify-between items-center p-2 shadow-md">
          <Logo />
          <IoClose
            size={20}
            onClick={() => setCollapsed(!collapsed)}
            className="cursor-pointer hover:text-secondary"
          />
        </div>
        <div className="flex flex-col">
          {NAV_BAR_CONFIG.map((item, index) => (
            <NavItem key={item.title} item={item} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Navbar = () => (
  <NavbarProvider>
    <NavbarInner />
  </NavbarProvider>
);

export default Navbar;
