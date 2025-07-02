export interface TMenuConfig {
  title: string;
  icon?: string;
  path: string;
  children?: TMenuConfig[];
  isExternal?: boolean;
  isActive?: boolean;
}

export interface IMenuItemProps {
  menu: TMenuConfig;
}

export interface MenuContextType {
  openKeys: string[];
  activeKey: string | null;
  toggleOpen: (key: string) => void;
  setActive: (key: string) => void;
  isOpen: (key: string) => boolean;
  isActive: (key: string) => boolean | undefined;
}
