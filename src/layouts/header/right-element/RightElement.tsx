import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import { useHeader } from "../constance";
import { IoMdClose } from "react-icons/io";

const RightElement = () => {
  const { isMenuOpen, toggleMenuOpen } = useHeader();
  return (
    <div className="pr-6 flex items-center gap-x-2">
      <IoSearchSharp className="cursor-pointer hover:text-secondary" />
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
