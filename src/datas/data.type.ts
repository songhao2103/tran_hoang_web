import type { ReactNode } from "react";

export interface ISearchDatas {
  id: number;
  sectionId: string;
  description?: string;
  path: string;
  content: ReactNode;
  title: string;
  image?: string;
}
