import React, { useMemo } from "react";
import type { TMenuConfig } from "../../../layouts/menu/type";
import { SERVICIES_COMPONENT } from "../data";

interface IServiceContentProps {
  activeService: TMenuConfig;
}

const ServiceContent: React.FC<IServiceContentProps> = ({ activeService }) => {
  const ServiceComponent = useMemo(() => {
    return SERVICIES_COMPONENT[activeService.path];
  }, [activeService]);

  if (!ServiceComponent) return null;

  return (
    <div className="w-full">
      <div className="">
        <ServiceComponent />
      </div>
    </div>
  );
};

export default ServiceContent;
