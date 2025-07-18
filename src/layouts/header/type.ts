export interface HeaderContextType {
  isScrolled: boolean;
  setIsScrolled: (value: boolean) => void;
  isMenuOpen: boolean;
  toggleMenuOpen: () => void;
  isInputSearchOpen: boolean;
  toggleInputSearchOpen: () => void;
}
