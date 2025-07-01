import React, { useState } from "react";
import { MenuContext } from "./constance";

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const toggleOpen = (key: string) => {
    setOpenKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const isOpen = (key: string) => openKeys.includes(key);
  const isActive = (key: string) => activeKey?.startsWith(key);

  return (
    <MenuContext.Provider
      value={{
        openKeys,
        activeKey,
        toggleOpen,
        setActive: setActiveKey,
        isOpen,
        isActive,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
