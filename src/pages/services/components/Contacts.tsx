import React from "react";
import { FiPhone } from "react-icons/fi";
import { MdLocationOn, MdOutlineMail } from "react-icons/md";

const Contacts = () => {
  return (
    <div className="shadow-lg inline-block w-full">
      <div className="bg-white w-full font-sans">
        <h3 className="bg-[#0d2e36] text-white px-4 py-3 font-bold uppercase text-sm">
          LIÊN HỆ
        </h3>

        <ul className="mt-2 space-y-4 w-full p-5">
          <li className="flex items-center gap-x-4">
            <div className="flex items-center justify-center bg-secondary rounded-full w-[40px] h-[40px] flex-shrink-0">
              <MdOutlineMail size={20} className="text-white" />
            </div>

            <div>
              <p className="title-h6">Email</p>
              <p className="text-sm">tranhoang@gmail.com</p>
            </div>
          </li>
          <li className="flex items-center gap-x-4">
            <div className="flex items-center justify-center bg-secondary rounded-full w-[40px] h-[40px] flex-shrink-0">
              <FiPhone size={20} className="text-white" />
            </div>

            <div>
              <p className="title-h6">Số điện thoại</p>
              <p className="text-sm">0123123123</p>
            </div>
          </li>
          <li className="flex items-center gap-x-4">
            <div className="flex items-center justify-center bg-secondary rounded-full w-[40px] h-[40px] flex-shrink-0">
              <MdLocationOn size={20} className="text-white" />
            </div>

            <div>
              <p className="title-h6">Địa chỉ</p>
              <p className="text-sm">33 ngõ 41 Thái Hà, Đống Đa, Hà Nội</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
