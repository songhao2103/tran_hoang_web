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
    children: [
      { title: "Tin tức 1", path: "/news/news-1" },
      { title: "Tin tức 2", path: "/news/news-2" },
      { title: "Tin tức 3", path: "/news/news-3" },
    ],
  },
  { title: "Liên hệ", path: ROUTE_PATH.CONTACT },
];
