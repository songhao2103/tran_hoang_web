import type { ReactNode } from "react";
import Header from "./header/Header";
import { HeaderProvider } from "./header/HeaderContext";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="px-0 xl:px-2 w-full max-w-[1820px] bg-red-50 mx-auto text-gray-600 font-medium pb-[400px]">
      <HeaderProvider>
        <Header />
      </HeaderProvider>
      <div className="mt-6">{children}</div>
    </div>
  );
};

export default MainLayout;
