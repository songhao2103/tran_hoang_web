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
import AuthPage from "../admin/pages/auth/index";
import NewsAdmin from "../admin/pages/news/index";
import AdminLayout from "../admin/layouts/AdminLayout";
import DashBoard from "../admin/pages/dashboard";
import Informations from "../admin/pages/informations";

export const publicRoutes: RouteConfig[] = [
  // public routes
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

  // Admin routes

  {
    path: ROUTE_PATH.ADMIN_AUTH,
    component: AuthPage,
  },
  {
    path: ROUTE_PATH.ADMIN,
    component: DashBoard,
    layout: AdminLayout,
  },
  {
    path: ROUTE_PATH.ADMIN_NEWS,
    component: NewsAdmin,
    layout: AdminLayout,
  },

  {
    path: ROUTE_PATH.ADMIN_INFORMATION,
    component: Informations,
    layout: AdminLayout,
  },
];
