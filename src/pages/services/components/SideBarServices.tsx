import React, { memo } from "react";
import { IoMdArrowForward } from "react-icons/io";
import type { TMenuConfig } from "../../../layouts/menu/type";
import { useNavigate } from "react-router-dom";

interface ISideBarServicesProps {
  activeService: TMenuConfig;
  services: TMenuConfig[];
}

const SideBarServices: React.FC<ISideBarServicesProps> = ({
  activeService,
  services,
}) => {
  const navigate = useNavigate();

  const handleToggleService = (path: string, isActive: boolean) => {
    if (!isActive) {
      navigate(path);
    }
  };
  return (
    <div className="shadow-lg inline-block w-full">
      <div className="bg-white w-full font-sans">
        <h3 className="bg-[#0d2e36] text-white px-4 py-3 font-bold uppercase text-sm">
          DỊCH VỤ
        </h3>

        <ul className="mt-2 space-y-2 w-full p-5">
          {services.map((service) => {
            const isActive = service.path === activeService.path;
            return (
              <li
                key={service.path}
                className={`group flex items-center justify-between px-4 py-3 border transition-all duration-500 cursor-pointer ${
                  isActive
                    ? "bg-secondary text-white font-semibold"
                    : "text-[#2d3e50] hover:bg-secondary hover:text-white"
                }`}
                onClick={() => handleToggleService(service.path, isActive)}
              >
                <span className="truncate">{service.title}</span>
                <span
                  className={`text-lg transition-transform duration-300 pl-[30px] ${
                    isActive ? "" : "group-hover:translate-x-1 "
                  }`}
                >
                  <IoMdArrowForward />
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default memo(SideBarServices);
