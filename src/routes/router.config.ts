import type { RouteConfig } from "./type";
import MainLayout from "../layouts/MainLayout";
import { PREFIX_ROUTE_PATH, ROUTE_PATH } from "./routePath";
import HomePage from "../pages/homepages";
import Introduce from "../pages/introduce";
import Contact from "../pages/contact";
import News from "../pages/news";
import PriceList from "../pages/price-list";
import Services from "../pages/services";
import NewDetail from "../pages/news/NewDetail";

export const publicRoutes: RouteConfig[] = [
  { path: ROUTE_PATH.HOME, component: HomePage, layout: MainLayout },
  { path: ROUTE_PATH.INTRODUCE, component: Introduce, layout: MainLayout },
  { path: ROUTE_PATH.CONTACT, component: Contact, layout: MainLayout },
  { path: ROUTE_PATH.NEWS, component: News, layout: MainLayout },
  { path: ROUTE_PATH.PRICE_LIST, component: PriceList, layout: MainLayout },
  {
    path: PREFIX_ROUTE_PATH.SERVICES + "/:slug",
    component: Services,
    layout: MainLayout,
  },
  {
    path: ROUTE_PATH.NEW_DETAIL,
    component: NewDetail,
    layout: MainLayout,
  },
];
