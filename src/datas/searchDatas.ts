import { SEARCH_DATA_SECTION_ID } from "./pathSearchDatas";
import type { ISearchDatas } from "./data.type";
import { ROUTE_PATH } from "../routes/routePath";

export const SEARCH_DATAS: ISearchDatas[] = [
  //Homepage
  {
    id: 1,
    title: "Trần Hoàng Logistics giải pháp vận chuyển Trung – Việt",
    path: ROUTE_PATH.HOME,
    sectionId: SEARCH_DATA_SECTION_ID.informationHomepage,
    content:
      "Trách nhiệm, tận tâm: Luôn theo sát từng đơn hàng, đồng hành cùng khách đến khi hàng về an toàn, đúng tiến độ. Uy tín, nhanh chóng: Vận chuyển chính ngạch, cung cấp hóa đơn VAT, hồ sơ pháp lý rõ ràng – hỗ trợ hoàn thuế và kiểm toán dễ dàng",
  },
  {
    id: 2,
    title: "Dịch vụ của chúng tôi",
    path: ROUTE_PATH.HOME,
    sectionId: SEARCH_DATA_SECTION_ID.serviciesHomepage,
    content:
      "Tìm nguồn hàng Trung Quốc, vận chuyển chính ngạch, ghép Container chính ngạch, thanh toán hộ",
  },
  {
    id: 3,
    title: "Quy trình thực hiện",
    path: ROUTE_PATH.HOME,
    sectionId: SEARCH_DATA_SECTION_ID.workflowHomepage,
    content:
      "Tiếp nhận và tư vấn, thu gom hàng tại Trung Quốc, thủ tục hải quan, vận chuyển qua biên, giao hàng tại Việt Nam, theo dõi và hỗ trợ",
  },
  {
    id: 4,
    title: "Khách hàng nói về chúng tôi",
    path: ROUTE_PATH.HOME,
    sectionId: SEARCH_DATA_SECTION_ID.feedbackHomePage,
    content: "Khách hàng nói về chúng tôi",
    description: "feedback, đánh giá",
  },
  {
    id: 5,
    title: "Số liệu ấn tượng",
    path: ROUTE_PATH.HOME,
    sectionId: SEARCH_DATA_SECTION_ID.statisticsHomepage,
    content:
      "10.000+ khách hàng, 50.000+ đơn hàng, 50.000 tấn hàng hóa được vận chuyển",
    description: "Số liệu ấn tượng",
  },

  //Introduce
  {
    id: 6,
    title:
      "Trần Hoàng Logistics – Giải pháp vận chuyển toàn diện tuyến Trung – Việt",
    path: ROUTE_PATH.INTRODUCE,
    sectionId: SEARCH_DATA_SECTION_ID.informationIntroduce,
    content:
      "Hiệu quả và độ tin cậy trong vận chuyển chính là yếu tố then chốt giúp kết nối doanh nghiệp – tiết kiệm chi phí – tăng tốc kinh doanh.",
    description: "Thông tin về công ty",
  },
  {
    id: 7,
    title: "Quy trình thực hiện",
    path: ROUTE_PATH.INTRODUCE,
    sectionId: SEARCH_DATA_SECTION_ID.workflowIntroduce,
    content:
      "Tiếp nhận và tư vấn, thu gom hàng tại Trung Quốc, thủ tục hải quan, vận chuyển qua biên, giao hàng tại Việt Nam, theo dõi và hỗ trợ",
  },
  {
    id: 8,
    title: "Lịch sử công ty",
    path: ROUTE_PATH.INTRODUCE,
    sectionId: SEARCH_DATA_SECTION_ID.companyHistoryIntroduce,
    content:
      "Thành lập công ty, phát triển kho bãi và đội ngũ vận hành, triển khai dịch vụ chính ngạch, mở rộng hệ thống kho và dịch vụ vận chuyển đường biển, số hóa quy trình & nâng cấp dịch vụ khách hàng, định hướng phát triển bền vững",
  },
  {
    id: 8,
    title: "Số liệu thống kê",
    path: ROUTE_PATH.INTRODUCE,
    sectionId: SEARCH_DATA_SECTION_ID.statisticsIntroduce,
    content:
      "10.000+ khách hàng, 50.000+ đơn hàng, 50.000 tấn hàng hóa được vận chuyển",
  },
];
