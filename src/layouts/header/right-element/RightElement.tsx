import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import { useHeader } from "../constance";
import { IoMdClose } from "react-icons/io";

const RightElement = () => {
  const { isMenuOpen, toggleMenuOpen, toggleInputSearchOpen } = useHeader();
  return (
    <div className="flex items-center pr-1 lg:pr-6 sm:pr-3 gap-x-2">
      <IoSearchSharp
        className="text-sm cursor-pointer hover:text-secondary text-light lg:text-md xl:text-2xl"
        onClick={toggleInputSearchOpen}
      />
      <div
        onClick={toggleMenuOpen}
        className="h-[25px] w-[25px] bg-secondary text-white flex items-center justify-center lg:hidden cursor-pointer shadow-sm"
      >
        {isMenuOpen ? <IoMdClose /> : <MdOutlineMenu />}
      </div>
    </div>
  );
};

export default RightElement;
