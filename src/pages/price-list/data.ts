import type { ICostOfOrder } from "./priceList.type";

export const;

export const COST_OF_ORDER_LIST: ICostOfOrder[] = [
  {
    name: "1. Giá sản phẩm",
    description: "Là giá được niêm yết trên website Trung Quốc",
    required: true,
  },
  {
    name: "2. Phí dịch vụ",
    description: "Phí giao dịch mua hàng khách trả cho Báo Đen",
    required: true,
  },
  {
    name: "3. Phí ship Trung Quốc",
    description:
      "Phí chuyển hàng từ nhà cung cấp tới kho của Báo Đen tại Trung Quốc",
    required: true,
  },
  {
    name: "4. Phí vận chuyển",
    description:
      "Phí vận chuyển từ kho Trung Quốc về kho của Báo Đen tại Việt Nam (Đơn vị Kg)",
    required: true,
  },
  {
    name: "5. Phí kiểm đếm",
    description:
      "Dịch vụ đảm bảo sản phẩm của khách không bị nhà cung cấp giao sai hoặc thiếu",
    required: false,
  },
  {
    name: "6. Phí đóng gói",
    description:
      "Hình thức đảm bảo an toàn, hạn chế rủi ro đối với hàng dễ vỡ, dễ biến dạng",
    required: false,
  },
  {
    name: "7. Phí ship tận nhà",
    description:
      "Là phí vận chuyển hàng từ kho của Báo Đen tại Việt Nam tới nhà của quý khách",
    required: false,
  },
];
