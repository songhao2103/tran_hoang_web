import type { ReactNode } from "react";
import Navbar from "./nav-bar";
import AdminHeader from "./header";
import AdminLayoutContent from "./AdminLayoutContent";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <div className="mb-6">
        <AdminHeader />
      </div>

      <div className="flex justify-between">
        <Navbar />

        <div className="w-full">
          <AdminLayoutContent>{children}</AdminLayoutContent>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
