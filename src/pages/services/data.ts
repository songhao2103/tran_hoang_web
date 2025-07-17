import type { ReactNode } from "react";
import { ROUTE_PATH } from "../../routes/routePath";
import FindTheSource from "./components/services-items/FindTheSource";
import OfficialTransportation from "./components/services-items/OfficialTransportation";
import PayBeHalf from "./components/services-items/PayBeHalf";

export const SERVICIES_COMPONENT: Record<string, () => ReactNode> = {
  [ROUTE_PATH.FIND_SOURCE_GOODS]: FindTheSource,
  [ROUTE_PATH.OFFICIAL_TRANSPORTATION]: OfficialTransportation,
  [ROUTE_PATH.PAY_ON_BEHALF]: PayBeHalf,
};
