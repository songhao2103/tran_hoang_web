// src/components/MenuArrow.tsx
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const MenuArrow = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <span className="ml-2">
      {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
    </span>
  );
};

export default MenuArrow;
