import { useMemo, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { NAV_BAR_CONFIG } from "./nav-bar/navBar.config";

const AdminLayoutContent = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const title = useMemo(() => {
    const menu = NAV_BAR_CONFIG.find((item) => item.path === location.pathname);
    return menu?.title;
  }, [location.pathname]);
  return (
    <>
      <div className="py-4 shadow-md px-6 bg-dark/20 mb-6">
        <p className="title-h5 ">{title}</p>
      </div>
      <div className="px-2">{children}</div>
    </>
  );
};

export default AdminLayoutContent;
