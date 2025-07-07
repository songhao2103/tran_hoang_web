import Logo from "../header/components/Logo";
import { FaFacebookF, FaFacebookMessenger } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black p-10 flex justify-center w-full mt-[50px] md:mt-[100px] xl:mt-[150px] flex-col lg:flex-row">
      <div className="flex max-w-[1820px] gap-x-[100px] flex-col lg:flex-row">
        <div className="flex flex-col gap-y-6">
          <Logo />
          <p className="title-h4 !text-white">Trần Hoàng Logistics</p>
        </div>
        <div className="flex flex-col gap-y-4">
          <p className="title-h5 !text-white">Thông tin liên hệ</p>
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-x-3">
              <p className="text-sm font-semibold text-white">Địa chỉ:</p>
              <p className="text-sm text-gray-400">
                33 ngõ 41 Thái Hà, Đống Đa, Hà Nội
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <p className="text-sm font-semibold text-white">Email:</p>
              <p className="text-sm text-gray-400">tranhoang@gmail.com</p>
            </div>
            <div className="flex items-center gap-x-3">
              <p className="text-sm font-semibold text-white">Phone:</p>
              <p className="text-sm text-gray-400">0967044241</p>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <a href="">
              <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
                <FaFacebookF className="text-gray-800" size={18} />
              </div>
            </a>

            <a href="">
              <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
                <FaFacebookMessenger className="text-gray-800" size={18} />
              </div>
            </a>
            <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
              <p className="text-xs font-bold text-gray-800">Zalo</p>
            </div>
          </div>
        </div>
        <div className="max-w-[400px] h-[250px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.566409383384!2d105.81868137596933!3d21.010010888420883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac82768df277%3A0x69fc0ba419dcd498!2zMzMgTmcuIDQxIFAuIFRow6FpIEjDoCwgVHJ1bmcgTGnhu4d0LCDEkOG7kW5nIMSQYSwgSMOgIE7hu5lpIDExNTI1LCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1751439376343!5m2!1svi!2s"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
