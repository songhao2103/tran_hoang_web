import { IoSearchOutline } from "react-icons/io5";
import Card from "../../../components/cards/Card";
import DateTime from "../../../components/date-time/DateTime";
import { BLOGS_DATA } from "../data";
import type { ReactNode } from "react";

const LayoutNew = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col justify-between lg:flex-row gap-y-6 lg:gap-y-0 px-2 lg:px-6 xl:px-10">
      <div className="w-full lg:w-[30%]">
        <div className="flex items-stretch w-full p-4 mb-8 shadow-lg">
          <input
            type="text"
            className="w-full px-4 py-3 border outline-none placeholder:font-normal hover:border-gray-600 focus:border-secondary"
            placeholder="Search..."
          />

          <div className="w-[100px] bg-secondary flex items-center justify-center cursor-pointer hover:-translate-y-1">
            <IoSearchOutline className="text-xl text-white" />
          </div>
        </div>

        <Card title="BÀI VIẾT GẦN ĐÂY">
          <div className="flex flex-col gap-y-4">
            {BLOGS_DATA.slice(0, 3).map((blog, index) => (
              <div
                className="flex items-center justify-between w-full gap-x-3"
                key={index}
              >
                <img
                  src={blog.mainImage}
                  alt=""
                  className="h-[120px] w-[120px] object-cover"
                />
                <div className="flex flex-col w-full gap-y-3">
                  <p className="cursor-pointer title-h5 hover:text-secondary">
                    {blog.title}
                  </p>
                  <DateTime dateTime={blog.createAt} type="dd/mm/yyyy" />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="w-full lg:w-[65%]">{children}</div>
    </div>
  );
};

export default LayoutNew;
