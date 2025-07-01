import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "../style.css";

import banner1 from "../../../assets/images/banners/banner1.jpg";
import banner2 from "../../../assets/images/banners/banner2.png";
import banner3 from "../../../assets/images/banners/banner3.jpg";
import type { IBannerItem } from "../homepage.type";

const bannerList: IBannerItem[] = [
  { imageUrl: banner1, title: "Lorem, ipsum dolor sit amet" },
  { imageUrl: banner2, title: "Lorem, ipsum dolor sit amet" },
  { imageUrl: banner3, title: "Lorem, ipsum dolor sit amet" },
];

interface IBannerItemProps {
  banner: IBannerItem;
}
const BannerItem: React.FC<IBannerItemProps> = ({ banner }) => {
  const swiperSlide = useSwiperSlide(); // biết slide này có active hay không

  return (
    <div className="relative w-full h-full">
      <img
        src={banner.imageUrl}
        alt="banner"
        className="w-full h-full object-cover"
      />
      <motion.p
        className="absolute bottom-[250px]  left-[250px] text-white text-[50px] font-bold max-w-[400px]"
        initial={{ opacity: 0, y: 200 }}
        animate={
          swiperSlide.isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }
        }
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {banner.title}
      </motion.p>
    </div>
  );
};

const BannerSlide = () => {
  return (
    <div className="w-full h-[700px]">
      <Swiper
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1500}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className=" overflow-hidden h-full"
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
