import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../style/banner.css";

import banner_1 from "../../../assets/images/slide-images/slide_image_1.png";
import banner_2 from "../../../assets/images/slide-images/slide_image_2.png";
import banner_3 from "../../../assets/images/slide-images/slide_image_3.png";
import type { IBannerItem } from "../homepage.type";

const bannerList: IBannerItem[] = [
  { imageUrl: banner_1, title: "Lorem, ipsum dolor sit amet" },
  { imageUrl: banner_2, title: "Lorem, ipsum dolor sit amet" },
  { imageUrl: banner_3, title: "Lorem, ipsum dolor sit amet" },
];

interface IBannerItemProps {
  banner: IBannerItem;
}
const BannerItem: React.FC<IBannerItemProps> = ({ banner }) => {
  // const swiperSlide = useSwiperSlide(); // biết slide này có active hay không

  return (
    <div className="relative w-full h-full">
      <img
        src={banner.imageUrl}
        alt="banner"
        className="object-cover w-full h-full"
      />
      {/* <motion.p
        className="absolute bottom-[200px] left-[50px] xl:bottom-[250px]  xl:left-[250px] !text-white title-h1 font-bold max-w-[400px]"
        initial={{ opacity: 0, y: 200 }}
        animate={
          swiperSlide.isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }
        }
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {banner.title}
      </motion.p> */}
    </div>
  );
};

const BannerSlide = () => {
  return (
    <div className="w-full h-[52vw] max-h-[947px]">
      <Swiper
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1500}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        loop
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="h-full overflow-hidden "
      >
        {bannerList.map((banner, idx) => (
          <SwiperSlide key={idx}>
            <BannerItem banner={banner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlide;
