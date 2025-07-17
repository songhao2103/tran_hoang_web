import { type ICompanyHistoryItem } from "./introduce.type";
import ls_2017 from "../../assets/images/histories/lich_su_2017.jpg";
import ls_2019 from "../../assets/images/histories/lich_su_2019.jpg";
import ls_2021 from "../../assets/images/histories/lich_su_2021.jpg";
import ls_2023 from "../../assets/images/histories/lich_su_2023.jpg";
import image from "../../assets/images/histories/lich_su_2019.jpg";

export const COMPANY_HISTORIES_DATA: ICompanyHistoryItem[] = [
  {
    image: ls_2017,
    title: "Thành lập công ty",
    description:
      "Trần Hoàng Logistics chính thức đi vào hoạt động, cung cấp dịch vụ vận chuyển tuyến Trung – Việt.",
    year: 2017,
  },
  {
    image: ls_2019,
    title: "Phát triển kho bãi và đội ngũ vận hành",
    description:
      "Mở rộng kho tại Hà Nội và thiết lập kho đối tác tại Bằng Tường (Trung Quốc), hoàn thiện bộ máy vận hành.",
    year: 2019,
  },
  {
    image: ls_2021,
    title: "Triển khai dịch vụ chính ngạch",
    description:
      "Trần Hoàng chuyển hướng chiến lược, cung cấp dịch vụ vận chuyển chính ngạch với đầy đủ hóa đơn – chứng từ – hỗ trợ hoàn thuế.",
    year: 2021,
  },
  {
    image: ls_2023,
    title: "Mở rộng hệ thống kho và dịch vụ vận chuyển đường biển",
    description:
      "Thiết lập kho chính chủ tại Pò Chài (Trung Quốc) và cảng Hải Phòng. Triển khai dịch vụ vận chuyển container.",
    year: 2023,
  },
  {
    image: image,
    title: "Số hóa quy trình & nâng cấp dịch vụ khách hàng",
    description:
      "Ứng dụng công nghệ vào quản lý đơn hàng, cho phép theo dõi vận đơn 24/7. Đồng thời triển khai đội ngũ hỗ trợ khách hàng.",
    year: 2024,
  },
  {
    image: image,
    title: "Định hướng phát triển bền vững",
    description:
      "Tiếp tục khẳng định uy tín bằng dịch vụ an toàn – minh bạch – nhanh chóng, hướng tới trở thành đơn vị logistics chính ngạch hàng đầu tuyến Trung – Việt.",
    year: 2025,
  },
];
