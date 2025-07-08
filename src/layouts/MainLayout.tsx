import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ScrollToTop from "../components/scrolls/ScrollToTop";
import Footer from "./footer";
import HeaderAnimation from "./header/components/HeaderAnimation";
import { HeaderProvider } from "./header/HeaderContext";
import FloatingActions from "./utils/FloatingActions";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.state?.hash;

    debugger;
    if (hash) {
      const el = document.querySelector("#" + hash);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="absolute inset-0 -z-50 bg-light"></div>
      <HeaderProvider>
        <HeaderAnimation />
      </HeaderProvider>

      {location.pathname !== "/" && <Breadcrumb />}

      <div className="flex-1 max-w-[1820px] w-full mx-auto px-4 xl:px-2 text-gray-600 font-medium">
        {children}
      </div>

      <div className="w-full mt-auto">
        <Footer />
      </div>

      <ScrollToTop />

      <div className="fixed z-50 bottom-8 right-4">
        <FloatingActions />
      </div>
    </div>
  );
};

export default MainLayout;
