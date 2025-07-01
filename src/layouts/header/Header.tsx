import React from "react";
import Logo from "./components/Logo";
import MenuProvider from "../menu";
import MenuHeading from "../menu/components/MenuHeading";
import { MENU_CONFIG } from "../menu/menu.config";

const Header = () => {
  return (
    <div>
      <Logo />
      <MenuProvider>
        {MENU_CONFIG.map((menu) => (
          <MenuHeading key={menu.title} menu={menu} />
        ))}
      </MenuProvider>
    </div>
  );
};

export default Header;
