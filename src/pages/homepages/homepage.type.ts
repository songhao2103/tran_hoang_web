import type { IconType } from "react-icons";

export interface IBannerItem {
  imageUrl: string;
  title: string;
}

export interface IIntroduceSectionItem {
  icon: IconType;
  title: string;
  description: string;
}

export interface IMoreAboutUs {
  title: string;
  descriptions: string[];
  buttonLabel: string;
  imageUrl: string;
}
