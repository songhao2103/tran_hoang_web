import customer from "../../../assets/icons/customer-about-us.png";
import experience from "../../../assets/icons/experience-about-us.png";
import transport from "../../../assets/icons/transport-about-us.png";
import image from "../../../assets/images/introduces/introduce_homepage.jpg";
import MotionCounter from "../../../components/scrolls/MotionCounter";
import SlideInView from "../../../components/scrolls/SlideInView";
import LayoutContent from "../../../layouts/LayoutContent";

const StatisticalIntroduce = () => {
  return (
    <div className="mt-[100px] relative py-[70px]">
      <img
        src={image}
        alt=""
        className="absolute inset-0 object-cover w-full h-full -z-10"
      />
      <div className="absolute inset-0 bg-black -z-[9] opacity-50"></div>

      <LayoutContent>
        <SlideInView>
          <div className="flex justify-center">
            <div className="flex-col flex lg:flex-row gap-y-6 lg:gap-y-0 justify-between lg:gap-x-[60px] xl:gap-x-[120px]">
              <div className="flex flex-col items-center justify-center gap-y-6">
                <img
                  src={experience}
                  alt="Kinh nghiệm"
                  className="w-[100px] h-[100px] mb-4 bg-secondary p-6"
                />
                <div className="flex flex-col justify-center text-center gap-y-4 item-center">
                  <MotionCounter
                    plusKey={false}
                    end={8}
                    delay={0.6}
                    className="text-4xl font-bold text-light"
                  />
                  <p className="text-lg text-center text-light">
                    + Năm kinh nghiệm
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-y-6">
                <img
                  src={transport}
                  alt="Vận chuyển"
                  className="w-[100px] h-[100px] mb-4 bg-secondary p-6"
                />
                <div className="flex flex-col justify-center text-center gap-y-4 item-center">
                  <MotionCounter
                    plusKey={false}
                    end={10000}
                    delay={0.6}
                    className="text-4xl font-bold text-center text-light"
                  />
                  <p className="text-lg text-center text-light">+ Đơn hàng</p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center text-center gap-y-6">
                <img
                  src={customer}
                  alt="Kinh nghiệm"
                  className="w-[100px] h-[100px] mb-4 bg-secondary p-6"
                />
                <div className="flex flex-col justify-center gap-y-4 item-center">
                  <MotionCounter
                    plusKey={false}
                    end={10000}
                    delay={0.6}
                    className="text-4xl font-bold text-center text-light"
                  />
                  <p className="text-lg text-center text-light">+ Khách hàng</p>
                </div>
              </div>
            </div>
          </div>
        </SlideInView>
      </LayoutContent>
    </div>
  );
};

export default StatisticalIntroduce;
