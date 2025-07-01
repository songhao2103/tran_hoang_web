import type { RouteConfig } from "./type";
import HomePage from "../pages/homepages";
import MainLayout from "../layouts/MainLayout";
import { ROUTE_PATH } from "./routePath";

export const publicRoutes: RouteConfig[] = [
  { path: ROUTE_PATH.HOME, component: HomePage, layout: MainLayout },
];
