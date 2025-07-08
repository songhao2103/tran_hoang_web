import { PATH_SEARCH_DATA } from "./pathSearchDatas";
import type { ISearchDatas } from "./data.type";

export const SEARCH_DATAS: ISearchDatas[] = [
  {
    id: 1,
    title: "Trần Hoàng Logistics giải pháp vận chuyển Trung – Việt",
    path: "/information-homepage",
    content:
      "Trách nhiệm, tận tâm: Luôn theo sát từng đơn hàng, đồng hành cùng khách đến khi hàng về an toàn, đúng tiến độ. Uy tín, nhanh chóng: Vận chuyển chính ngạch, cung cấp hóa đơn VAT, hồ sơ pháp lý rõ ràng – hỗ trợ hoàn thuế và kiểm toán dễ dàng",
  },
  {
    id: 2,
    title: "Dịch vụ của chúng tôi",
    path: PATH_SEARCH_DATA.serviciesHomepage,
    content:
      "Tìm nguồn hàng Trung Quốc, vận chuyển chính ngạch, ghép Container chính ngạch, thanh toán hộ",
  },
  {
    id: 3,
    title: "Quy trình thực hiện",
    path: PATH_SEARCH_DATA.workflowHomepage,
    content:
      "Tiếp nhận và tư vấn, thu gom hàng tại Trung Quốc, thủ tục hải quan, vận chuyển qua biên, giao hàng tại Việt Nam, theo dõi và hỗ trợ",
  },
  {
    id: 4,
    title: "Khách hàng nói về chúng tôi",
    path: PATH_SEARCH_DATA.feedbackHomePage,
    content: "Khách hàng nói về chúng tôi",
    description: "feeback, đánh giá",
  },
  {
    id: 5,
    title: "Số liệu ấn tượng",
    path: PATH_SEARCH_DATA.statisticsHomepage,
    content:
      "10.000+ khách hàng, 50.000+ đơn hàng, 50.000 tấn hàng hóa được vận chuyển",
    description: "Số liệu ấn tượng",
  },
];
