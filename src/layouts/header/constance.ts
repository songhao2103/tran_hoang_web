import type { HeaderContextType } from "./type";
import { createContext, useContext } from "react";

export const useHeader = () => {
  const context = useContext(HeaderContext);
  if (!context)
    throw new Error("useHeader must be used within a HeaderProvider");
  return context;
};

export const HeaderContext = createContext<HeaderContextType | undefined>(
  undefined
);
