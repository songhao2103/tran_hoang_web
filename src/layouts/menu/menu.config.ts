import { ROUTE_PATH } from "../../routes/routePath";
import type { TMenuConfig } from "./type";

export const MENU_CONFIG: TMenuConfig[] = [
  {
    title: "Trang chủ",
    path: ROUTE_PATH.HOME,
  },
  {
    title: "Giới thiệu",
    path: ROUTE_PATH.INTRODUCE,
  },
  {
    title: "Dich vụ",
    path: ROUTE_PATH.SERVICES,
  },
  {
    title: "Bảng giá",
    path: ROUTE_PATH.PRICE_LIST,
  },
  {
    title: "Tin tức",
    path: ROUTE_PATH.NEWS,
  },
  { title: "Liên hệ", path: ROUTE_PATH.CONTACT },
];
