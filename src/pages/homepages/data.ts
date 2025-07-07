import type {
  IFeedbackItem,
  IIntroduceSectionItem,
  IMoreAboutUs,
  IServiceOverviewItem,
  IWorkflowStep,
} from "./homepage.type";
import { PiWarehouse } from "react-icons/pi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoIosFlash } from "react-icons/io";
import bgcImage from "../../assets/images/banners/banner1.jpg";
import imageUser1 from "../../assets/images/banners/banner1.jpg";
import imageUser2 from "../../assets/images/banners/banner2.png";
import imageUser3 from "../../assets/images/banners/banner3.jpg";
import { LuPackageSearch } from "react-icons/lu";
import { PiFireTruck } from "react-icons/pi";
import { PiShippingContainerDuotone } from "react-icons/pi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { ROUTE_PATH } from "../../routes/routePath";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   Thông tin về chúng tôi
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   Thông tin thêm
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const MORE_ABOUT_US_DATA: IMoreAboutUs = {
  title: "Trần Hoàng Logistics giải pháp vận chuyển Trung – Việt",
  descriptions: [
    "Trách nhiệm, tận tâm: Luôn theo sát từng đơn hàng, đồng hành cùng khách đến khi hàng về an toàn, đúng tiến độ.",
    "Uy tín, nhanh chóng: Vận chuyển chính ngạch, cung cấp hóa đơn VAT, hồ sơ pháp lý rõ ràng – hỗ trợ hoàn thuế và kiểm toán dễ dàng",
  ],
  buttonLabel: "Chi tiết",
  imageUrl: "../../../assets/images/introduces/introduce_homepage.jpg",
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   Danh sách dịch vụ
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const SERVICES_OVERVIEW_DATA: IServiceOverviewItem[] = [
  {
    icon: LuPackageSearch,
    title: "Tìm nguồn hàng Trung Quốc",
    description:
      "Tìm kiếm nguồn hàng chất lượng, giá tốt từ các nhà cung cấp Trung Quốc.",
    backgroundImage: bgcImage,
    path: ROUTE_PATH.FIND_SOURCE_GOODS,
  },
  {
    icon: PiFireTruck,
    title: "Vận chuyển chính ngạch",
    description:
      "Tìm kiếm nguồn hàng chất lượng, giá tốt từ các nhà cung cấp Trung Quốc.",
    backgroundImage: bgcImage,
    path: ROUTE_PATH.OFFICIAL_TRANSPORTATION,
  },
  {
    icon: PiShippingContainerDuotone,
    title: "Ghép Container chính ngạch",
    description:
      "Tìm kiếm nguồn hàng chất lượng, giá tốt từ các nhà cung cấp Trung Quốc.",
    backgroundImage: bgcImage,
    path: ROUTE_PATH.COMBINE_CONTAINERS,
  },
  {
    icon: RiSecurePaymentLine,
    title: "Thanh toán hộ",
    description:
      "Tìm kiếm nguồn hàng chất lượng, giá tốt từ các nhà cung cấp Trung Quốc.",
    backgroundImage: bgcImage,
    path: ROUTE_PATH.PAY_ON_BEHALF,
  },
];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   Quy trình làm việc
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const WORKFLOW_STEPS: IWorkflowStep[] = [
  {
    title: "Tiếp nhận và tư vấn",
    description:
      "Tìm kiếm nguồn hàng chất lượng, giá tốt từ các nhà cung cấp Trung Quốc.",
    imageUrl: bgcImage,
  },
  {
    title: "Thu gom hàng tại Trung Quốc",
    description:
      "Tìm kiếm nguồn hàng chất lượng, giá tốt từ các nhà cung cấp Trung Quốc.",
    imageUrl: bgcImage,
  },
  {
    title: "Thủ tục hải quan",
    description:
      "Tìm kiếm nguồn hàng chất lượng, giá tốt từ các nhà cung cấp Trung Quốc.",
    imageUrl: bgcImage,
  },
  {
    title: "Vận chuyển qua biên",
    description:
      "Tìm kiếm nguồn hàng chất lượng, giá tốt từ các nhà cung cấp Trung Quốc.",
    imageUrl: bgcImage,
  },
  {
    title: "Giao hàng tại Việt Nam",
    description:
      "Tìm kiếm nguồn hàng chất lượng, giá tốt từ các nhà cung cấp Trung Quốc.",
    imageUrl: bgcImage,
  },
  {
    title: " Theo dõi và hỗ trợ  ",
    description:
      "Tìm kiếm nguồn hàng chất lượng, giá tốt từ các nhà cung cấp Trung Quốc.",
    imageUrl: bgcImage,
  },
];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   Quy trình làm việc
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const FAKE_FEEDBACK_DATAS: IFeedbackItem[] = [
  {
    userImage: imageUser1,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum impedit corporis id omnis maxime assumenda sequi aliquid",
    userName: "Song Hào",
    note: "Nhân viên",
  },
  {
    userImage: imageUser2,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum impedit corporis id omnis maxime assumenda sequi aliquid",
    userName: "Song Hào",
    note: "Nhân viên",
  },
  {
    userImage: imageUser3,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum impedit corporis id omnis maxime assumenda sequi aliquid",
    userName: "Song Hào",
    note: "Nhân viên",
  },
];
