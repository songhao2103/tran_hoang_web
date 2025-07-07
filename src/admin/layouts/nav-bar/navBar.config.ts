import { ROUTE_PATH } from "../../../routes/routePath";
import type { INavBarConfig } from "./navBar.type";

export const NAV_BAR_CONFIG: INavBarConfig[] = [
  {
    title: "Dash board",
    path: ROUTE_PATH.ADMIN,
  },
  {
    title: "Tin tức",
    path: ROUTE_PATH.ADMIN_NEWS,
  },
  {
    title: "Thông tin",
    path: ROUTE_PATH.ADMIN_INFORMATION,
  },
];
