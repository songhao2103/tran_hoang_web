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
    if (!hash) return;

    // tìm element
    const el = document.querySelector("#" + hash);
    if (el) {
      // vị trí thực tế so với top của page
      const topPos = el.getBoundingClientRect().top + window.scrollY;
      // scroll tới trên element 100px
      window.scrollTo({ top: topPos - 200, behavior: "smooth" });
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
