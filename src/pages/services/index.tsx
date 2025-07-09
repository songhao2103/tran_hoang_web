import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import BackgroundLayoutSection from "../../layouts/BackgroundLayoutSection";
import { MENU_CONFIG } from "../../layouts/menu/menu.config";
import type { TMenuConfig } from "../../layouts/menu/type";
import { PREFIX_ROUTE_PATH } from "../../routes/routePath";
import Contacts from "./components/Contacts";
import ServiceContent from "./components/ServiceContent";
import SideBar from "./components/SideBarServices";

const Services = () => {
  const location = useLocation();
  const [activeService, setActiveService] = useState<TMenuConfig | undefined>(
    undefined
  );

  const services = useMemo(() => {
    return (
      MENU_CONFIG.find(
        (menu: TMenuConfig) => menu.path === PREFIX_ROUTE_PATH.SERVICES
      )?.children || []
    );
  }, [MENU_CONFIG]);

  useEffect(() => {
    if (services) {
      const currentService = services?.find(
        (service: TMenuConfig) => service.path === location.pathname
      );
      setActiveService(currentService);
    }
  }, [location]);

  return (
    <BackgroundLayoutSection>
      <div className="flex gap-x-10 flex-col-reverse xl:flex-row px-2 lg:px-6 xl:px-10">
        {activeService && (
          <div className="flex flex-col gap-y-10 md:flex-row md:gap-x-6 mt-10 xl:mt-0 xl:flex-col xl:gap-y-10">
            <SideBar activeService={activeService} services={services} />
            <Contacts />
          </div>
        )}

        {activeService && (
          <div className="w-full">
            <ServiceContent activeService={activeService} />
          </div>
        )}
      </div>
    </BackgroundLayoutSection>
  );
};

export default Services;
