import type {
  IIntroduceSectionItem,
  IMoreAboutUs,
  IServiceOverviewItem,
} from "./homepage.type";
import { PiWarehouse } from "react-icons/pi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoIosFlash } from "react-icons/io";
import bgcImage from "../../assets/images/banners/banner1.jpg";
import { LuPackageSearch } from "react-icons/lu";
import { PiFireTruck } from "react-icons/pi";
import { PiShippingContainerDuotone } from "react-icons/pi";
import { RiSecurePaymentLine } from "react-icons/ri";

export const INTRODUCE_SECTIONS_DATA: IIntroduceSectionItem[] = [
  {
    icon: PiWarehouse,
    title: "Kho bãi chính chủ Trung Việt",
    description:
      "Sở hữu kho hàng tại Trung Quốc và Việt Nam hoàn toàn chủ động nguồn hàng, xử lý nhanh chóng",
  },
  {
    icon: VscWorkspaceTrusted,
    title: "Trách nhiệm, tận tâm",
    description:
      "Luôn theo sát từng đơn hàng, đồng hành cùng khách đến khi hàng về an toàn, đúng tiến độ",
  },
  {
    icon: IoIosFlash,
    title: "Uy tín, nhanh chóng",
    description:
      " Vận chuyển chính ngạch, cung cấp hóa đơn VAT, hồ sơ pháp lý rõ ràng hỗ trợ hoàn thuế và kiểm toán dễ dàng",
  },
];

export const MORE_ABOUT_US_DATA: IMoreAboutUs = {
  title: "Trần Hoàng Logistics giải pháp vận chuyển Trung – Việt",
  descriptions: [
    "Trách nhiệm, tận tâm: Luôn theo sát từng đơn hàng, đồng hành cùng khách đến khi hàng về an toàn, đúng tiến độ.",
    "Uy tín, nhanh chóng: Vận chuyển chính ngạch, cung cấp hóa đơn VAT, hồ sơ pháp lý rõ ràng – hỗ trợ hoàn thuế và kiểm toán dễ dàng",
  ],
  buttonLabel: "Chi tiết",
  imageUrl: "../../../assets/images/introduces/introduce_homepage.jpg",
};

export const SERVICES_OVERVIEW_DATA: IServiceOverviewItem[] = [
  {
    icon: LuPackageSearch,
    title: "Tìm nguồn hàng Trung Quốc",
    description:
      "Tìm kiếm nguồn hàng chất lượng, giá tốt từ các nhà cung cấp Trung Quốc.",
    backgroundImage: bgcImage,
  },
  {
    icon: PiFireTruck,
    title: "Vận chuyển chính ngạch",
    description:
      "Tìm kiếm nguồn hàng chất lượng, giá tốt từ các nhà cung cấp Trung Quốc.",
    backgroundImage: bgcImage,
  },
  {
    icon: PiShippingContainerDuotone,
    title: "Ghép Container chính ngạch",
    description:
      "Tìm kiếm nguồn hàng chất lượng, giá tốt từ các nhà cung cấp Trung Quốc.",
    backgroundImage: bgcImage,
  },
  {
    icon: RiSecurePaymentLine,
    title: "Thanh toán hộ",
    description:
      "Tìm kiếm nguồn hàng chất lượng, giá tốt từ các nhà cung cấp Trung Quốc.",
    backgroundImage: bgcImage,
  },
];
