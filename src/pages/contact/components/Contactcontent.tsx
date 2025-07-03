import React from "react";
import { FiPhone } from "react-icons/fi";
import { MdLocationOn, MdOutlineMail } from "react-icons/md";

const Contactcontent = () => {
  return (
    <div>
      {" "}
      <div className="bg-dark w-full font-sans p-10">
        <h2 className="title-h2 !text-white">LIÊN HỆ</h2>
        <p className="text-gray-300">
          Nếu bạn cần hỗ trợ về dịch vụ vận chuyển hoặc tư vấn đặt hàng, hãy
          liên hệ ngay với chúng tôi. Đội ngũ Trần Hoàng Logistics luôn sẵn sàng
          phục vụ bạn!
        </p>

        <ul className="mt-2 space-y-4 w-full p-5">
          <li className="flex items-center gap-x-8 pb-4 border-b border-gray-500">
            <MdOutlineMail size={35} className="text-secondary" />

            <div>
              <p className="title-h6 !text-light">Email</p>
              <p className="!text-light">tranhoang@gmail.com</p>
            </div>
          </li>
          <li className="flex items-center gap-x-8 pb-4 border-b border-gray-500">
            <FiPhone size={35} className="text-secondary" />

            <div>
              <p className="title-h6 !text-light">Số điện thoại</p>
              <p className="!text-light">0123123123</p>
            </div>
          </li>
          <li className="flex items-center gap-x-8 pb-4 border-b border-gray-500">
            <MdLocationOn size={35} className="text-secondary" />

            <div>
              <p className="title-h6 !text-light">Địa chỉ</p>
              <p className="!text-light">33 ngõ 41 Thái Hà, Đống Đa, Hà Nội</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contactcontent;
