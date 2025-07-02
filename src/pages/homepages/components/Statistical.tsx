import React from "react";
import { TbUsers } from "react-icons/tb";
import LayoutContent from "../../../layouts/LayoutContent";
import { CgNotes } from "react-icons/cg";
import { LuPackage } from "react-icons/lu";
import MotionCounter from "../../../components/scrolls/MotionCounter";
import SlideInView from "../../../components/scrolls/SlideInView";

const Statistical = () => {
  const currentYear = new Date().getFullYear();
  return (
    <LayoutContent>
      <SlideInView>
        <div className="mt-[150px]">
          <p className="title-h1 text-center">
            Số liệu ấn tượng năm <span>{currentYear}</span>
          </p>
          <div className="flex justify-center">
            <div className="flex-col flex lg:flex-row gap-y-6 lg:gap-y-0 justify-between mt-[50px] lg:gap-x-[60px] xl:gap-x-[120px]">
              <div className="flex items-center gap-x-6">
                <TbUsers size={45} />
                <div>
                  <MotionCounter
                    end={10000}
                    delay={0.6}
                    className="font-bold text-4xl"
                  />
                  <p className="">Khách hàng</p>
                </div>
              </div>
              <div className="flex items-center gap-x-6">
                <CgNotes size={45} />
                <div>
                  <MotionCounter
                    end={50000}
                    delay={0.6}
                    className="font-bold text-4xl"
                  />
                  <p className="">Đơn hàng</p>
                </div>
              </div>
              <div className="flex items-center gap-x-6">
                <LuPackage size={45} />
                <div>
                  <MotionCounter
                    end={50000}
                    delay={0.6}
                    className="font-bold text-4xl"
                  />
                  <p className="">Khối lượng hàng vận chuyển (tấn)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SlideInView>
    </LayoutContent>
  );
};

export default Statistical;
