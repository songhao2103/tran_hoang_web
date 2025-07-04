import React from "react";
import type { IBlogItem } from "../new.type";
import { motion } from "framer-motion";

interface IBlogItemProps {
  blog: IBlogItem;
}

const BlogItem: React.FC<IBlogItemProps> = ({ blog }) => {
  return (
    <div className="border-b shadow-lg pb-12 rounded-[10px]">
      <div className="relative mb-10 overflow-hidden shadow">
        <motion.img
          src={blog.mainImage}
          alt="Main"
          className="w-full rounded-tl-[10px] rounded-tr-[10px]"
          whileHover={{
            scale: 1.1,
            filter: "brightness(1.1) contrast(1.05)",
          }}
          transition={{
            type: "keyframes",
            duration: 1,
            stiffness: 400, // vào nhanh
            damping: 20, // chậm dần mượt mà
          }}
        />
        <div className="text-sm bg-secondary w-[60px] h-[60px] flex items-center justify-center flex-col text-white shadow-md absolute right-[20px] bottom-[10px] rounded-[5px]">
          <p className="font-bold text-2xl">
            {new Date(blog.createAt).toLocaleDateString("en-US", {
              day: "2-digit",
            })}
          </p>
          <p>
            {new Date(blog.createAt).toLocaleDateString("en-US", {
              month: "short",
            })}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-y-4 mt-10 px-10">
        <p className="title-h3 !font-semibold cursor-pointer hover:!text-secondary">
          {blog.title}
        </p>
        <div className="line-clamp-2">{blog.content}</div>
      </div>

      {/* <div className="px-10">
        <div className="text-lg leading-relaxed text-gray-800">
          {blog.content.split("\n\n").map((paragraph, idx) => (
            <p key={idx} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="flex gap-x-10 mt-6 justify-center ">
          {blog.contentImage?.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Content ${i}`}
              className="w-[200px] h-[200px] object-cover rounded-md"
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default BlogItem;
