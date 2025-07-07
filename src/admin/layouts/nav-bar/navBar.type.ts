export interface INavBarConfig {
  title: string;
  icon?: string;
  path: string;
  children?: INavBarConfig[];
  isExternal?: boolean;
}

export interface NavbarContextType {
  openIndex: number | null;
  setOpenIndex: (index: number | null) => void;
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
}
