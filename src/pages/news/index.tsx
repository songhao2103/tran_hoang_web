import { useMemo, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import LayoutContent from "../../layouts/LayoutContent";
import BlogItem from "./components/BlogItem";
import { BLOGS_DATA } from "./data";
import { scrollToTop } from "../../utils/doms/ScrollToTop";
import Card from "../../components/cards/Card";
import DateTime from "../../components/date-time/DateTime";
import { IoSearchOutline } from "react-icons/io5";

const PAGE_SIZE = 3; // số phần tử mỗi trang

const News = () => {
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
    <LayoutContent>
      <div className="flex justify-between">
        <div className="w-[30%]">
          <div className="flex items-stretch w-full p-4 shadow-lg mb-8">
            <input
              type="text"
              className="outline-none py-3 px-4 border placeholder:font-normal hover:border-gray-600 focus:border-secondary w-full"
              placeholder="Search..."
            />

            <div className="w-[100px] bg-secondary flex items-center justify-center cursor-pointer hover:-translate-y-1">
              <IoSearchOutline className="text-white text-xl" />
            </div>
          </div>

          <Card title="BÀI VIẾT GẦN ĐÂY">
            <div className="flex flex-col gap-y-4">
              {BLOGS_DATA.slice(0, 3).map((blog) => (
                <div className="flex items-center justify-between w-full gap-x-3">
                  <img
                    src={blog.mainImage}
                    alt=""
                    className="h-[120px] w-[120px] object-cover"
                  />
                  <div className="w-full flex flex-col gap-y-3">
                    <p className="title-h5 hover:text-secondary cursor-pointer">
                      {blog.title}
                    </p>
                    <DateTime dateTime={blog.createAt} type="dd/mm/yyyy" />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="w-[65%]">
          <div className="flex flex-col gap-y-10 ">
            {blogList.map((blog, index) => (
              <BlogItem key={index} blog={blog} />
            ))}
          </div>
          <div className="flex items-center gap-x-4 justify-center mt-8">
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
      </div>
    </LayoutContent>
  );
};

export default News;
