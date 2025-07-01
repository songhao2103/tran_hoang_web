// src/components/MenuHeading.tsx
import React from "react";
import type { TMenuConfig } from "../type";
import MenuSub from "./MenuSub";

const MenuHeading: React.FC<{ menu: TMenuConfig }> = ({ menu }) => {
  return (
    <div className="lg:auto w-full border-b border-gray-100 lg:border-none">
      <MenuSub menu={menu} />
    </div>
  );
};

export default MenuHeading;
