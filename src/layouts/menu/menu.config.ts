import { PREFIX_ROUTE_PATH } from "./../../routes/routePath";
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
    path: PREFIX_ROUTE_PATH.SERVICES,
    children: [
      {
        title: "Tìm nguồn hàng",
        path: ROUTE_PATH.FIND_SOURCE_GOODS,
      },
      {
        title: "Vận chuyển chính ngạch",
        path: ROUTE_PATH.OFFICIAL_TRANSPORTATION,
      },
      {
        title: "Ghép Containers",
        path: ROUTE_PATH.COMBINE_CONTAINERS,
      },
      {
        title: "Thanh toán hộ",
        path: ROUTE_PATH.PAY_ON_BEHALF,
      },
    ],
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
