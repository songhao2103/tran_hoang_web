import { TbUsers } from "react-icons/tb";
import LayoutContent from "../../../layouts/LayoutContent";
import { CgNotes } from "react-icons/cg";
import { LuPackage } from "react-icons/lu";
import MotionCounter from "../../../components/scrolls/MotionCounter";
import SlideInView from "../../../components/scrolls/SlideInView";
import SectionTitle from "../../../components/titles/SectionTitle";
import { SEARCH_DATA_SECTION_ID } from "../../../datas/pathSearchDatas";
import BackgroundLayoutSection from "../../../layouts/BackgroundLayoutSection";

const Statistical = () => {
  const currentYear = new Date().getFullYear();
  return (
    <BackgroundLayoutSection>
      <LayoutContent>
        <SlideInView>
          <div className="" id={SEARCH_DATA_SECTION_ID.statisticsHomepage}>
            <div>
              <SectionTitle title="05_SỐ LIỆU" className="text-center" />
              <p className="text-center title-h1">
                Số liệu ấn tượng năm <span>{currentYear}</span>
              </p>
            </div>

            <div className="flex justify-center">
              <div className="flex-col flex lg:flex-row gap-y-6 lg:gap-y-0 justify-between mt-[50px] lg:gap-x-[60px] xl:gap-x-[120px]">
                <div className="flex items-center gap-x-6">
                  <TbUsers size={45} />
                  <div>
                    <MotionCounter
                      end={10000}
                      delay={0.6}
                      className="text-4xl font-bold"
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
                      className="text-4xl font-bold"
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
                      className="text-4xl font-bold"
                    />
                    <p className="">Khối lượng hàng vận chuyển (tấn)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SlideInView>
      </LayoutContent>
    </BackgroundLayoutSection>
  );
};

export default Statistical;
