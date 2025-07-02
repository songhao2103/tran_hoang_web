import type { JSX, ReactNode } from "react";

export interface RouteConfig {
  path: string;
  component: () => JSX.Element;
  layout?: (props: { children: ReactNode }) => JSX.Element;
}
