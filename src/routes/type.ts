import type { JSX } from "react";

export interface RouteConfig {
  path: string;
  component: () => JSX.Element;
  layout?: () => JSX.Element;
}
