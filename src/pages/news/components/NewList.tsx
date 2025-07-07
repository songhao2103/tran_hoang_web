import { useMemo, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { scrollToTop } from "../../../utils/doms/ScrollToTop";
import { BLOGS_DATA } from "../data";
import BlogItem from "./BlogCard";

const PAGE_SIZE = 3; // số phần tử mỗi trang
interface INewListProps {
  searchKey?: string;
}

const NewList = () => {
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [searchKey, setSearchKey] = useState<string>("");

  const blogList = useMemo(() => {
    const start = (pageIndex - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    return BLOGS_DATA.slice(start, end);
  }, [pageIndex]);

  const totalPage = useMemo(() => {
    return Math.ceil(BLOGS_DATA.length / PAGE_SIZE);
  }, [PAGE_SIZE, BLOGS_DATA]);

  const handleNavigation = (key?: "next" | "prev" | number) => {
    if (key === "next" && pageIndex !== totalPage) {
      setPageIndex((prev) => prev + 1);
      scrollToTop();
      return;
    }

    if (key === "prev" && pageIndex !== 1) {
      setPageIndex((prev) => prev - 1);
      scrollToTop();
      return;
    }

    if (typeof key === "number" && key !== pageIndex) {
      setPageIndex(Number(key));
      scrollToTop();
    }
  };

  const handleSetSearchKey = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(e.target.value);
  };

  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col gap-y-10 ">
        {blogList.map((blog, index) => (
          <BlogItem key={index} blog={blog} />
        ))}
      </div>
      <div className="flex items-center justify-center mt-8 gap-x-4">
        <div
          className={`${
            pageIndex != 1
              ? "border hover:border-none hover:bg-secondary cursor-pointer hover:text-white"
              : "cursor-no-drop"
          } flex items-center justify-center h-10 w-10 rounded-[3px]  active:scale-[0.98] border`}
          onClick={() => handleNavigation("prev")}
        >
          <IoIosArrowBack size={20} />
        </div>
        <div className="flex items-center gap-x-4">
          {new Array(totalPage).fill(null).map((_, index: number) => (
            <p
              className={`${
                pageIndex == index + 1 ? "bg-secondary text-white" : ""
              } flex items-center justify-center h-10 w-10 rounded-[3px] border hover:border-none hover:bg-secondary cursor-pointer hover:text-white text-lg active:scale-[0.98]`}
              onClick={() => handleNavigation(index + 1)}
              key={`${pageIndex} - ${index}`}
            >
              {index + 1}
            </p>
          ))}
        </div>
        <div
          className={`${
            pageIndex != totalPage
              ? "border hover:border-none hover:bg-secondary cursor-pointer hover:text-white"
              : "cursor-no-drop"
          } flex items-center justify-center h-10 w-10 rounded-[3px]  active:scale-[0.98] border`}
          onClick={() => handleNavigation("next")}
        >
          <IoIosArrowForward size={20} className="" />
        </div>
      </div>
    </div>
  );
};

export default NewList;
