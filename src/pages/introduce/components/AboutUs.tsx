import React from "react";
import world from "../../../assets/icons/world-about-us.png";
import car from "../../../assets/icons/car-about-us.png";

const AboutUs = () => {
  return (
    <div className="w-full lg:w-[45%] ">
      <div className="flex flex-col gap-y-6">
        <p className="title-h2 !font-bold">
          Trần Hoàng Logistics – Giải pháp vận chuyển toàn diện tuyến Trung –
          Việt
        </p>
        <p>
          Hiệu quả và độ tin cậy trong vận chuyển chính là yếu tố then chốt giúp
          kết nối doanh nghiệp – tiết kiệm chi phí – tăng tốc kinh doanh.
        </p>
      </div>

      <div className="flex flex-col gap-y-4 mt-4">
        <div className="flex items-center gap-x-6">
          <img src={world} alt="" className="w-[80px] h-[80px] object-cover" />
          <div>
            <p className="title-h5">Dịch vụ quốc tế</p>
            <p>
              Chúng tôi luôn mang đến giải pháp logistics trọn gói, hỗ trợ nhập
              khẩu hàng hóa từ Trung Quốc về Việt Nam một cách hợp pháp, minh
              bạch và tối ưu nhất cho mọi doanh nghiệp
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-6">
          <img src={car} alt="" className="w-[80px] h-[80px] object-cover" />
          <div>
            <p className="title-h5">Dịch vụ quốc tế</p>
            <p>
              Chúng tôi luôn mang đến giải pháp logistics trọn gói, hỗ trợ nhập
              khẩu hàng hóa từ Trung Quốc về Việt Nam một cách hợp pháp, minh
              bạch và tối ưu nhất cho mọi doanh nghiệp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
