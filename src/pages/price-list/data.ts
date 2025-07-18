import CostOfOrder from "./components/CostOfOrder";
import Batch from "./components/Batch";
import PurchasingService from "./components/PurchasingService";
import TimberFee from "./components/TimberFee";
import type {
  IBatchItem,
  ICostOfOrder,
  IPriceList,
  IPurchasingService,
  IVolumePackagingFee,
  IWeightPackagingFee,
} from "./priceList.type";

export const PRICE_LIST: IPriceList[] = [
  { title: "Chi tiết một đơn hàng order", component: CostOfOrder, value: 1 },
  {
    title: "Bảng giá dịch vụ mua hàng",
    component: PurchasingService,
    value: 2,
  },
  {
    title: "Bảng giá hàng lô",
    component: Batch,
    value: 3,
  },
  {
    title: "Phí đóng gỗ",
    component: TimberFee,
    value: 4,
  },
];

//Dữ liệu bảng chi phí của một đơn hàng
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

//Dữ liệu của bảng dịch vụ mua hàng

export const PURCHASING_SERVICE: IPurchasingService[] = [
  { orderValueRange: ">=100tr", serviceFeePercent: 1 },
  { orderValueRange: "50-100tr", serviceFeePercent: 1.5 },
  { orderValueRange: "30-50tr", serviceFeePercent: 2 },
  { orderValueRange: "20-30tr", serviceFeePercent: 3 },
];

export const BATCH_LIST: IBatchItem[] = [
  {
    id: 1,
    category: "Hàng siêu nặng 1m³ ≥ 2000kg",
    haNoiKg: 3_700,
    hcmKg: 5_700,
  },
  {
    id: 2,
    category: "Hàng siêu nặng 1m³ = 1500–2000kg",
    haNoiKg: 4_000,
    hcmKg: 6_000,
  },
  {
    id: 3,
    category: "Hàng siêu nặng 1m³ = 1000–1500kg",
    haNoiKg: 4_500,
    hcmKg: 6_500,
  },
  {
    id: 4,
    category: "Hàng siêu nặng 1m³ = 700–1000kg",
    haNoiKg: 5_000,
    hcmKg: 7_000,
  },
  {
    id: 5,
    category: "Hàng siêu nặng 1m³ = 500–700kg",
    haNoiKg: 6_000,
    hcmKg: 8_000,
  },
  {
    id: 6,
    category: "Phụ kiện điện thoại không thương hiệu",
    haNoiKg: 8_000,
    haNoiKhoi: 1_800_000,
    hcmKg: 10_000,
    hcmKhoi: 2_300_000,
  },
  {
    id: 7,
    category: "Hàng thường: Không có động cơ, nhái, fake…",
    haNoiKg: 8_000,
    haNoiKhoi: 1_800_000,
    hcmKg: 10_000,
    hcmKhoi: 2_300_000,
  },
  {
    id: 8,
    category: "Hàng máy móc không thương hiệu",
    haNoiKg: 8_000,
    haNoiKhoi: 1_800_000,
    hcmKg: 10_000,
    hcmKhoi: 2_300_000,
  },
  {
    id: 9,
    category: "Đèn trang trí nội thất, đèn để võ",
    haNoiKg: 8_000,
    haNoiKhoi: 1_800_000,
    hcmKg: 10_000,
    hcmKhoi: 2_300_000,
  },
  {
    id: 10,
    category: "Quần áo, túi, giày dép không thương hiệu",
    haNoiKg: 10_000,
    haNoiKhoi: 2_000_000,
    hcmKg: 12_000,
    hcmKhoi: 2_500_000,
  },
  {
    id: 11,
    category: "Mỹ phẩm, thực phẩm",
    haNoiKg: 11_000,
    haNoiKhoi: 2_200_000,
    hcmKg: 13_000,
    hcmKhoi: 2_700_000,
  },
  {
    id: 12,
    category: "Hóa chất",
    haNoiKg: 10_000,
    haNoiKhoi: 2_000_000,
    hcmKg: 12_000,
    hcmKhoi: 2_500_000,
  },
  {
    id: 13,
    category: "Nội thất bàn ghế, Sofa",
    haNoiKg: 8_000,
    haNoiKhoi: 1_800_000,
    hcmKg: 10_000,
    hcmKhoi: 2_300_000,
  },
  {
    id: 14,
    category: "Mặt hàng nhỏ thương hiệu quốc tế – Hàng có pin",
    haNoiKg: 10_000,
    haNoiKhoi: 2_000_000,
    hcmKg: 12_000,
    hcmKhoi: 2_500_000,
  },
  {
    id: 15,
    category: "Hàng thường 1 mặt hàng ≥ 20m³",
    haNoiKhoi: 1_600_000,
    hcmKhoi: 2_100_000,
  },
  {
    id: 16,
    category: "Hàng thường 1 mặt hàng ≥ 30m³",
    haNoiKhoi: 1_500_000,
    hcmKhoi: 2_000_000,
  },
  {
    id: 17,
    category: "Hàng thường 1 mặt hàng ≥ 40m³",
    haNoiKhoi: 1_400_000,
    hcmKhoi: 1_900_000,
  },
  {
    id: 18,
    category: "Hàng thường 1 mặt hàng ≥ 50m³",
    haNoiKhoi: 1_300_000,
    hcmKhoi: 1_800_000,
  },
];

export const WEIGHT_PACKAGING_FEE: IWeightPackagingFee = {
  label: "Phí đóng kiện",
  firstKgPrice: 80_000,
  nextKgPrice: 3_500,
};

export const VOLUME_PACKAGING_FEES: IVolumePackagingFee[] = [
  {
    volumeRange: "≤0.01m³",
    feeDescription: "80 000 VND",
  },
  {
    volumeRange: "0.01m³ < x ≤ 0.1m³",
    feeDescription:
      "80 000 VND cho 0.01m³ đầu tiên + 15 000 VND cho mỗi 0.01m³ tiếp theo",
  },
  {
    volumeRange: "0.1m³ < x ≤ 1m³",
    feeDescription:
      "205 000 VND cho 0.1m³ đầu tiên + 50 000 VND cho mỗi 0.1m³ tiếp theo",
  },
  {
    volumeRange: ">1m³",
    feeDescription: "655 000 VND/m³",
  },
];
