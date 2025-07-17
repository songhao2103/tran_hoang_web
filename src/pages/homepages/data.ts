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
import thanh_toan from "../../assets/images/services/thanh_toan.jpg";
import van_chuyen from "../../assets/images/services/van_chuyen.jpg";
import tim_nguon_hang from "../../assets/images/services/tim_nguon_hang.jpg";

import avatar_dinh_tu from "../../assets/images/feedbacks/avatar_dinh_tu.jpg";
import avatar_duc_anh from "../../assets/images/feedbacks/avatar_duc_anh.jpg";
import avatar_my_kieu from "../../assets/images/feedbacks/avatar_my_kieu.jpg";
import avatar_thanh_ha from "../../assets/images/feedbacks/avatar_thanh_ha.jpg";
import avatar_tien_dat from "../../assets/images/feedbacks/avatar_tien_dat.jpg";

import { LuPackageSearch } from "react-icons/lu";
import { PiFireTruck } from "react-icons/pi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { ROUTE_PATH } from "../../routes/routePath";

import bgcImage from "../../assets/images/slide-images/slide_image_3.png";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   Thông tin về chúng tôi
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const INTRODUCE_SECTIONS_DATA: IIntroduceSectionItem[] = [
  {
    icon: PiWarehouse,
    title: "Kho bãi Trung-Việt",
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
    backgroundImage: tim_nguon_hang,
    path: ROUTE_PATH.FIND_SOURCE_GOODS,
  },
  {
    icon: PiFireTruck,
    title: "Vận chuyển chính ngạch",
    description:
      "Tìm kiếm nguồn hàng chất lượng, giá tốt từ các nhà cung cấp Trung Quốc.",
    backgroundImage: van_chuyen,
    path: ROUTE_PATH.OFFICIAL_TRANSPORTATION,
  },

  {
    icon: RiSecurePaymentLine,
    title: "Thanh toán hộ",
    description:
      "Tìm kiếm nguồn hàng chất lượng, giá tốt từ các nhà cung cấp Trung Quốc.",
    backgroundImage: thanh_toan,
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
//   Feedback
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const FAKE_FEEDBACK_DATAS: IFeedbackItem[] = [
  {
    userImage: avatar_tien_dat,
    content:
      "Anh đã có trải nghiệm tuyệt vời khi sử dụng dịch vụ vận chuyển của các bạn. Các bạn giúp anh rất nhiều khi giao hàng đến nơi một các an toàn và kịp thời. Anh đã mở rộng thị trường xuất khẩu và xây dựng mối quan hệ kinh doanh lâu dài với các đối tác quốc tế. Hi vọng tương lai, anh và Trần Hoàng sẽ có nhiều cơ hội hợp tác bền vừng và thuận lợi.",
    userName: "Mr. Trần Tiến Đạt",
    note: "Business Ngành Hàng Thương Mại",
  },
  {
    userImage: avatar_my_kieu,
    content:
      "Trần Hoàng Logistics không chỉ cung cấp dịch vụ vận chuyển chất lượng mà còn có giá cả hợp lý. Mình luôn tin tưởng và lựa chọn Trần Hoàng cho mọi nhu cầu vận chuyển của mình. Sự linh hoạt trong các gói dịch vụ và cam kết đáp ứng đúng hẹn đã khiến mình trở thành một khách hàng trung thành của Trần Hoàng Logistics",
    userName: "Ms. Mỹ Kiều",
    note: "Business ngành hàng nội thất",
  },
  {
    userImage: avatar_dinh_tu,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum impedit corporis id omnis maxime assumenda sequi aliquid",
    userName: "Mr. Nguyễn Đình Tú",
    note: "Bussiness Ngành hàng máy móc công nghiệp",
  },
  {
    userImage: avatar_duc_anh,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum impedit corporis id omnis maxime assumenda sequi aliquid",
    userName: "Mr. Nguyễn Đức Anh",
    note: "Business Ngành hàng nội thất",
  },
  {
    userImage: avatar_thanh_ha,
    content:
      "Trần Hoàng Logistics đã giúp tớ tiết kiệm thời gian và công sức khi order hàng. Quy trình đặt hàng cũng thuận tiện cho mình thao tác và giao nhận cũng khó nhanh chóng. Hơn nữa, các bạn cung cấp các dịch vụ bổ sung như bảo hiểm hàng hóa và theo dõi đơn hàng trực tuyến, giúp tớ cảm thấy an tâm hơn khi gửi hàng",
    userName: "Ms. Thanh Hà",
    note: "Business ngành hàng trang trí",
  },
];
