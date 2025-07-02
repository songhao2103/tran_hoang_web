import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ROUTE_PATH } from "../../routes/routePath";

const services: Record<string, string> = {
  [ROUTE_PATH.FIND_SOURCE_GOODS]: "Tìm nguồn hàng Trung Quốc",
  [ROUTE_PATH.OFFICIAL_TRANSPORTATION]: "Vận chuyển chính ngạch",
  [ROUTE_PATH.COMBINE_CONTAINERS]: "Ghép Containets",
  [ROUTE_PATH.PAY_ON_BEHALF]: "Thanh toán hộ",
};
const Services = () => {
  const location = useLocation();
  const [serviceType, setServiceType] = useState<string | undefined>(undefined);

  useEffect(() => {
    setServiceType(location.pathname);
  }, [location]);

  return (
    <div>
      <h1>{serviceType ? services?.[serviceType] : "Chưa xác định"}</h1>
    </div>
  );
};

export default Services;
