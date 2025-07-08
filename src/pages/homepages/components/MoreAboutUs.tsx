import { MORE_ABOUT_US_DATA } from "../data";
import { IoMdCheckmark } from "react-icons/io";
import introduceImage from "../../../assets/images/introduces/introduce_homepage.jpg";
import LayoutContent from "../../../layouts/LayoutContent";
import ButtonCustom from "../../../components/button/ButtonCustom";
import SlideInView from "../../../components/scrolls/SlideInView";
import useWindowWidth from "../../../hooks/dom/useWindownWidth";
import SectionTitle from "../../../components/titles/SectionTitle";
import { SEARCH_DATA_SECTION_ID } from "../../../datas/pathSearchDatas";

const MoreAboutUs = () => {
  const windowWidth = useWindowWidth();
  return (
    <LayoutContent>
      <div
        className="flex flex-col md:flex-row items-center justify-center gap-x-10 mt-[100px]"
        id={SEARCH_DATA_SECTION_ID.informationHomepage}
      >
        {/* Nội dung trượt lên */}
        <SlideInView
          direction="up"
          triggerOnce
          className="w-full p-10 overflow-hidden"
        >
          <div>
            <SectionTitle title="01_THÔNG TIN VỀ CHÚNG TÔI" />
            <p className="mb-10 title-h1">{MORE_ABOUT_US_DATA.title}</p>
          </div>

          {MORE_ABOUT_US_DATA.descriptions.map((desc, index) => (
            <div key={index} className="flex mb-4 gap-x-4">
              <div className="w-[50px] h-[50px] rounded-full flex-shrink-0 flex items-center justify-center border border-secondary text-secondary">
                <IoMdCheckmark size={22} />
              </div>
              <p>{desc}</p>
            </div>
          ))}
          <div className="mt-10">
            <ButtonCustom label="Chi tiết" />
          </div>
        </SlideInView>

        {/* Ảnh trượt từ phải sang */}
        {windowWidth > 1024 && (
          <SlideInView direction="up" delay={0.2} className="w-full">
            <img
              src={introduceImage}
              alt=""
              className="object-cover w-full h-auto"
            />
          </SlideInView>
        )}
      </div>
    </LayoutContent>
  );
};

export default MoreAboutUs;
