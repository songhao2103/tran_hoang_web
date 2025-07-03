import type { IServiceItem } from "./service.type";
import image1 from "../../assets/images/banners/banner1.jpg";
import image2 from "../../assets/images/banners/banner2.png";
import image3 from "../../assets/images/banners/banner3.jpg";
import { ROUTE_PATH } from "../../routes/routePath";

export const SERVICES_DATA: Record<string, IServiceItem> = {
  [ROUTE_PATH.FIND_SOURCE_GOODS]: {
    image: image1,
    description:
      "Dịch Vụ Đặt Hàng Hộ Trung Quốc Trọn Gói – Trần Hoàng Logistics Giải pháp tối ưu cho hoạt động nhập hàng kinh doanh. Trần Hoàng Logistics tự hào là đơn vị tiên phong trong lĩnh vực logistics và chuỗi cung ứng Trung – Việt, mang đến dịch vụ đặt hàng hộ Trung Quốc nhanh chóng, uy tín và chuyên nghiệp. Với kinh nghiệm dày dặn và mạng lưới đối tác rộng khắp, chúng tôi cam kết tối ưu chi phí, đảm bảo chất lượng hàng hóa và mang lại hiệu quả vượt trội cho hoạt động nhập khẩu của bạn",
    titlePart: "Các Giải Pháp Đặt Hàng Hộ Trung Quốc Tại Trần Hoàng Logistics",
    parts: [
      {
        title: "1. Đặt Hàng Trực Tiếp Từ Xưởng Và Chợ Đầu Mối Tại Trung Quốc",
        content:
          "Chúng tôi kết nối trực tiếp với các xưởng sản xuất, nhà máy và chợ đầu mối lớn tại Trung Quốc như Quảng Châu, Phúc Kiến, Nghĩa Ô,... để mang lại nguồn hàng chất lượng với giá gốc. Hỗ trợ thương lượng giá cả: Đảm bảo mức giá cạnh tranh nhất cho khách hàng. Kiểm tra mẫu mã và chất lượng: Đội ngũ chuyên viên kiểm tra kỹ lưỡng sản phẩm trước khi vận chuyển. Phù hợp với khách buôn sỉ: Tối ưu chi phí cho các đơn hàng số lượng lớn, lý tưởng cho đại lý và doanh nghiệp kinh doanh quy mô.",
      },
      {
        title: "2. Đặt Hàng Qua Các Nền Tảng Thương Mại Điện Tử Trung Quốc",
        content:
          "Trần Hoàng Logistics hỗ trợ đặt hàng từ các trang thương mại điện tử hàng đầu như Taobao, 1688, Tmall, Pinduoduo, giúp bạn tiếp cận nguồn hàng phong phú và đa dạng. Xử lý thanh toán nhanh chóng: Hỗ trợ thanh toán quốc tế, quản lý đơn hàng minh bạch. Đánh giá độ uy tín của shop: Kiểm tra kỹ lưỡng chất lượng sản phẩm và uy tín nhà cung cấp. Phù hợp cho khách lẻ và kinh doanh online: Đáp ứng nhu cầu nhập hàng linh hoạt, từ số lượng nhỏ đến lớn.",
      },
      {
        title:
          "3. Kết Nối Nguồn Hàng Từ Chợ Đầu Mối Và Chợ Cửa Khẩu Tại Việt Nam",
        content:
          "Chúng tôi cung cấp giải pháp nhập hàng nhanh từ các chợ đầu mối và cửa khẩu lớn như Móng Cái, Tân Thanh, Lào Cai,... đáp ứng nhu cầu hàng gấp của doanh nghiệp. Nguồn hàng rõ ràng: Cam kết hàng hóa có nguồn gốc minh bạch, giá cả cạnh tranh. Thời gian giao hàng nhanh chóng: Phù hợp với các đơn hàng cần giao gấp. Hỗ trợ tư vấn chuyên sâu: Đảm bảo doanh nghiệp tiếp cận được nguồn hàng chất lượng cao.",
      },
      {
        title: "4. Tư Vấn Nguồn Hàng Chất Lượng – Tìm Xưởng Uy Tín",
        content:
          "Đội ngũ chuyên gia của Trần Hoàng Logistics am hiểu thị trường Trung Quốc, liên tục cập nhật nguồn hàng hot trend và hỗ trợ khách hàng tìm kiếm nhà cung cấp đáng tin cậy. Tư vấn theo ngành hàng: Hỗ trợ tìm nguồn hàng phù hợp cho các lĩnh vực như thời trang, nội thất, đồ gia dụng, máy móc, thiết bị,... Kiểm tra độ tin cậy: Đánh giá xưởng, shop cung cấp để hạn chế rủi ro nhập khẩu. Đảm bảo chất lượng: Cam kết hàng hóa đạt tiêu chuẩn, đáp ứng nhu cầu kinh doanh của bạn.",
      },
      {
        title:
          "Lợi Ích Khi Sử Dụng Dịch Vụ Đặt Hàng Hộ Tại Trần Hoàng Logistics",
        content:
          "Quy trình minh bạch: Báo giá nhanh chóng, rõ ràng, không phát sinh chi phí ẩn. Kiểm tra và đóng gói chuyên nghiệp: Hàng hóa được kiểm tra kỹ lưỡng, đóng gói theo tiêu chuẩn xuất khẩu. Vận chuyển chính ngạch: Đầy đủ hóa đơn, chứng từ, hỗ trợ thủ tục hải quan. Bảo hiểm hàng hóa 100%: Cam kết bồi thường toàn bộ giá trị hàng hóa nếu xảy ra sự cố. Hỗ trợ hoàn thuế lên đến 10%: Tối ưu chi phí cho doanh nghiệp. Hệ thống kho bãi hiện đại: Kho riêng tại Trung Quốc và Việt Nam, hỗ trợ giao hàng tận nơi nhanh chóng.",
      },
    ],
  },
  [ROUTE_PATH.OFFICIAL_TRANSPORTATION]: {
    image: image2,
    description:
      "Dịch Vụ Đặt Hàng Hộ Trung Quốc Trọn Gói – Trần Hoàng Logistics Giải pháp tối ưu cho hoạt động nhập hàng kinh doanh. Trần Hoàng Logistics tự hào là đơn vị tiên phong trong lĩnh vực logistics và chuỗi cung ứng Trung – Việt, mang đến dịch vụ đặt hàng hộ Trung Quốc nhanh chóng, uy tín và chuyên nghiệp. Với kinh nghiệm dày dặn và mạng lưới đối tác rộng khắp, chúng tôi cam kết tối ưu chi phí, đảm bảo chất lượng hàng hóa và mang lại hiệu quả vượt trội cho hoạt động nhập khẩu của bạn",
    titlePart: "Các Giải Pháp Đặt Hàng Hộ Trung Quốc Tại Trần Hoàng Logistics",
    parts: [
      {
        title: "1. Đặt Hàng Trực Tiếp Từ Xưởng Và Chợ Đầu Mối Tại Trung Quốc",
        content:
          "Chúng tôi kết nối trực tiếp với các xưởng sản xuất, nhà máy và chợ đầu mối lớn tại Trung Quốc như Quảng Châu, Phúc Kiến, Nghĩa Ô,... để mang lại nguồn hàng chất lượng với giá gốc. Hỗ trợ thương lượng giá cả: Đảm bảo mức giá cạnh tranh nhất cho khách hàng. Kiểm tra mẫu mã và chất lượng: Đội ngũ chuyên viên kiểm tra kỹ lưỡng sản phẩm trước khi vận chuyển. Phù hợp với khách buôn sỉ: Tối ưu chi phí cho các đơn hàng số lượng lớn, lý tưởng cho đại lý và doanh nghiệp kinh doanh quy mô.",
      },
      {
        title: "2. Đặt Hàng Qua Các Nền Tảng Thương Mại Điện Tử Trung Quốc",
        content:
          "Trần Hoàng Logistics hỗ trợ đặt hàng từ các trang thương mại điện tử hàng đầu như Taobao, 1688, Tmall, Pinduoduo, giúp bạn tiếp cận nguồn hàng phong phú và đa dạng. Xử lý thanh toán nhanh chóng: Hỗ trợ thanh toán quốc tế, quản lý đơn hàng minh bạch. Đánh giá độ uy tín của shop: Kiểm tra kỹ lưỡng chất lượng sản phẩm và uy tín nhà cung cấp. Phù hợp cho khách lẻ và kinh doanh online: Đáp ứng nhu cầu nhập hàng linh hoạt, từ số lượng nhỏ đến lớn.",
      },
      {
        title:
          "3. Kết Nối Nguồn Hàng Từ Chợ Đầu Mối Và Chợ Cửa Khẩu Tại Việt Nam",
        content:
          "Chúng tôi cung cấp giải pháp nhập hàng nhanh từ các chợ đầu mối và cửa khẩu lớn như Móng Cái, Tân Thanh, Lào Cai,... đáp ứng nhu cầu hàng gấp của doanh nghiệp. Nguồn hàng rõ ràng: Cam kết hàng hóa có nguồn gốc minh bạch, giá cả cạnh tranh. Thời gian giao hàng nhanh chóng: Phù hợp với các đơn hàng cần giao gấp. Hỗ trợ tư vấn chuyên sâu: Đảm bảo doanh nghiệp tiếp cận được nguồn hàng chất lượng cao.",
      },
      {
        title: "4. Tư Vấn Nguồn Hàng Chất Lượng – Tìm Xưởng Uy Tín",
        content:
          "Đội ngũ chuyên gia của Trần Hoàng Logistics am hiểu thị trường Trung Quốc, liên tục cập nhật nguồn hàng hot trend và hỗ trợ khách hàng tìm kiếm nhà cung cấp đáng tin cậy. Tư vấn theo ngành hàng: Hỗ trợ tìm nguồn hàng phù hợp cho các lĩnh vực như thời trang, nội thất, đồ gia dụng, máy móc, thiết bị,... Kiểm tra độ tin cậy: Đánh giá xưởng, shop cung cấp để hạn chế rủi ro nhập khẩu. Đảm bảo chất lượng: Cam kết hàng hóa đạt tiêu chuẩn, đáp ứng nhu cầu kinh doanh của bạn.",
      },
      {
        title:
          "Lợi Ích Khi Sử Dụng Dịch Vụ Đặt Hàng Hộ Tại Trần Hoàng Logistics",
        content:
          "Quy trình minh bạch: Báo giá nhanh chóng, rõ ràng, không phát sinh chi phí ẩn. Kiểm tra và đóng gói chuyên nghiệp: Hàng hóa được kiểm tra kỹ lưỡng, đóng gói theo tiêu chuẩn xuất khẩu. Vận chuyển chính ngạch: Đầy đủ hóa đơn, chứng từ, hỗ trợ thủ tục hải quan. Bảo hiểm hàng hóa 100%: Cam kết bồi thường toàn bộ giá trị hàng hóa nếu xảy ra sự cố. Hỗ trợ hoàn thuế lên đến 10%: Tối ưu chi phí cho doanh nghiệp. Hệ thống kho bãi hiện đại: Kho riêng tại Trung Quốc và Việt Nam, hỗ trợ giao hàng tận nơi nhanh chóng.",
      },
    ],
  },
  [ROUTE_PATH.PAY_ON_BEHALF]: {
    image: image3,
    description:
      "Dịch Vụ Đặt Hàng Hộ Trung Quốc Trọn Gói – Trần Hoàng Logistics Giải pháp tối ưu cho hoạt động nhập hàng kinh doanh. Trần Hoàng Logistics tự hào là đơn vị tiên phong trong lĩnh vực logistics và chuỗi cung ứng Trung – Việt, mang đến dịch vụ đặt hàng hộ Trung Quốc nhanh chóng, uy tín và chuyên nghiệp. Với kinh nghiệm dày dặn và mạng lưới đối tác rộng khắp, chúng tôi cam kết tối ưu chi phí, đảm bảo chất lượng hàng hóa và mang lại hiệu quả vượt trội cho hoạt động nhập khẩu của bạn",
    titlePart: "Các Giải Pháp Đặt Hàng Hộ Trung Quốc Tại Trần Hoàng Logistics",
    parts: [
      {
        title: "1. Đặt Hàng Trực Tiếp Từ Xưởng Và Chợ Đầu Mối Tại Trung Quốc",
        content:
          "Chúng tôi kết nối trực tiếp với các xưởng sản xuất, nhà máy và chợ đầu mối lớn tại Trung Quốc như Quảng Châu, Phúc Kiến, Nghĩa Ô,... để mang lại nguồn hàng chất lượng với giá gốc. Hỗ trợ thương lượng giá cả: Đảm bảo mức giá cạnh tranh nhất cho khách hàng. Kiểm tra mẫu mã và chất lượng: Đội ngũ chuyên viên kiểm tra kỹ lưỡng sản phẩm trước khi vận chuyển. Phù hợp với khách buôn sỉ: Tối ưu chi phí cho các đơn hàng số lượng lớn, lý tưởng cho đại lý và doanh nghiệp kinh doanh quy mô.",
      },
      {
        title: "2. Đặt Hàng Qua Các Nền Tảng Thương Mại Điện Tử Trung Quốc",
        content:
          "Trần Hoàng Logistics hỗ trợ đặt hàng từ các trang thương mại điện tử hàng đầu như Taobao, 1688, Tmall, Pinduoduo, giúp bạn tiếp cận nguồn hàng phong phú và đa dạng. Xử lý thanh toán nhanh chóng: Hỗ trợ thanh toán quốc tế, quản lý đơn hàng minh bạch. Đánh giá độ uy tín của shop: Kiểm tra kỹ lưỡng chất lượng sản phẩm và uy tín nhà cung cấp. Phù hợp cho khách lẻ và kinh doanh online: Đáp ứng nhu cầu nhập hàng linh hoạt, từ số lượng nhỏ đến lớn.",
      },
      {
        title:
          "3. Kết Nối Nguồn Hàng Từ Chợ Đầu Mối Và Chợ Cửa Khẩu Tại Việt Nam",
        content:
          "Chúng tôi cung cấp giải pháp nhập hàng nhanh từ các chợ đầu mối và cửa khẩu lớn như Móng Cái, Tân Thanh, Lào Cai,... đáp ứng nhu cầu hàng gấp của doanh nghiệp. Nguồn hàng rõ ràng: Cam kết hàng hóa có nguồn gốc minh bạch, giá cả cạnh tranh. Thời gian giao hàng nhanh chóng: Phù hợp với các đơn hàng cần giao gấp. Hỗ trợ tư vấn chuyên sâu: Đảm bảo doanh nghiệp tiếp cận được nguồn hàng chất lượng cao.",
      },
      {
        title: "4. Tư Vấn Nguồn Hàng Chất Lượng – Tìm Xưởng Uy Tín",
        content:
          "Đội ngũ chuyên gia của Trần Hoàng Logistics am hiểu thị trường Trung Quốc, liên tục cập nhật nguồn hàng hot trend và hỗ trợ khách hàng tìm kiếm nhà cung cấp đáng tin cậy. Tư vấn theo ngành hàng: Hỗ trợ tìm nguồn hàng phù hợp cho các lĩnh vực như thời trang, nội thất, đồ gia dụng, máy móc, thiết bị,... Kiểm tra độ tin cậy: Đánh giá xưởng, shop cung cấp để hạn chế rủi ro nhập khẩu. Đảm bảo chất lượng: Cam kết hàng hóa đạt tiêu chuẩn, đáp ứng nhu cầu kinh doanh của bạn.",
      },
      {
        title:
          "Lợi Ích Khi Sử Dụng Dịch Vụ Đặt Hàng Hộ Tại Trần Hoàng Logistics",
        content:
          "Quy trình minh bạch: Báo giá nhanh chóng, rõ ràng, không phát sinh chi phí ẩn. Kiểm tra và đóng gói chuyên nghiệp: Hàng hóa được kiểm tra kỹ lưỡng, đóng gói theo tiêu chuẩn xuất khẩu. Vận chuyển chính ngạch: Đầy đủ hóa đơn, chứng từ, hỗ trợ thủ tục hải quan. Bảo hiểm hàng hóa 100%: Cam kết bồi thường toàn bộ giá trị hàng hóa nếu xảy ra sự cố. Hỗ trợ hoàn thuế lên đến 10%: Tối ưu chi phí cho doanh nghiệp. Hệ thống kho bãi hiện đại: Kho riêng tại Trung Quốc và Việt Nam, hỗ trợ giao hàng tận nơi nhanh chóng.",
      },
    ],
  },
  [ROUTE_PATH.COMBINE_CONTAINERS]: {
    image: image3,
    description:
      "Dịch Vụ Đặt Hàng Hộ Trung Quốc Trọn Gói – Trần Hoàng Logistics Giải pháp tối ưu cho hoạt động nhập hàng kinh doanh. Trần Hoàng Logistics tự hào là đơn vị tiên phong trong lĩnh vực logistics và chuỗi cung ứng Trung – Việt, mang đến dịch vụ đặt hàng hộ Trung Quốc nhanh chóng, uy tín và chuyên nghiệp. Với kinh nghiệm dày dặn và mạng lưới đối tác rộng khắp, chúng tôi cam kết tối ưu chi phí, đảm bảo chất lượng hàng hóa và mang lại hiệu quả vượt trội cho hoạt động nhập khẩu của bạn",
    titlePart: "Các Giải Pháp Đặt Hàng Hộ Trung Quốc Tại Trần Hoàng Logistics",
    parts: [
      {
        title: "1. Đặt Hàng Trực Tiếp Từ Xưởng Và Chợ Đầu Mối Tại Trung Quốc",
        content:
          "Chúng tôi kết nối trực tiếp với các xưởng sản xuất, nhà máy và chợ đầu mối lớn tại Trung Quốc như Quảng Châu, Phúc Kiến, Nghĩa Ô,... để mang lại nguồn hàng chất lượng với giá gốc. Hỗ trợ thương lượng giá cả: Đảm bảo mức giá cạnh tranh nhất cho khách hàng. Kiểm tra mẫu mã và chất lượng: Đội ngũ chuyên viên kiểm tra kỹ lưỡng sản phẩm trước khi vận chuyển. Phù hợp với khách buôn sỉ: Tối ưu chi phí cho các đơn hàng số lượng lớn, lý tưởng cho đại lý và doanh nghiệp kinh doanh quy mô.",
      },
      {
        title: "2. Đặt Hàng Qua Các Nền Tảng Thương Mại Điện Tử Trung Quốc",
        content:
          "Trần Hoàng Logistics hỗ trợ đặt hàng từ các trang thương mại điện tử hàng đầu như Taobao, 1688, Tmall, Pinduoduo, giúp bạn tiếp cận nguồn hàng phong phú và đa dạng. Xử lý thanh toán nhanh chóng: Hỗ trợ thanh toán quốc tế, quản lý đơn hàng minh bạch. Đánh giá độ uy tín của shop: Kiểm tra kỹ lưỡng chất lượng sản phẩm và uy tín nhà cung cấp. Phù hợp cho khách lẻ và kinh doanh online: Đáp ứng nhu cầu nhập hàng linh hoạt, từ số lượng nhỏ đến lớn.",
      },
      {
        title:
          "3. Kết Nối Nguồn Hàng Từ Chợ Đầu Mối Và Chợ Cửa Khẩu Tại Việt Nam",
        content:
          "Chúng tôi cung cấp giải pháp nhập hàng nhanh từ các chợ đầu mối và cửa khẩu lớn như Móng Cái, Tân Thanh, Lào Cai,... đáp ứng nhu cầu hàng gấp của doanh nghiệp. Nguồn hàng rõ ràng: Cam kết hàng hóa có nguồn gốc minh bạch, giá cả cạnh tranh. Thời gian giao hàng nhanh chóng: Phù hợp với các đơn hàng cần giao gấp. Hỗ trợ tư vấn chuyên sâu: Đảm bảo doanh nghiệp tiếp cận được nguồn hàng chất lượng cao.",
      },
      {
        title: "4. Tư Vấn Nguồn Hàng Chất Lượng – Tìm Xưởng Uy Tín",
        content:
          "Đội ngũ chuyên gia của Trần Hoàng Logistics am hiểu thị trường Trung Quốc, liên tục cập nhật nguồn hàng hot trend và hỗ trợ khách hàng tìm kiếm nhà cung cấp đáng tin cậy. Tư vấn theo ngành hàng: Hỗ trợ tìm nguồn hàng phù hợp cho các lĩnh vực như thời trang, nội thất, đồ gia dụng, máy móc, thiết bị,... Kiểm tra độ tin cậy: Đánh giá xưởng, shop cung cấp để hạn chế rủi ro nhập khẩu. Đảm bảo chất lượng: Cam kết hàng hóa đạt tiêu chuẩn, đáp ứng nhu cầu kinh doanh của bạn.",
      },
      {
        title:
          "Lợi Ích Khi Sử Dụng Dịch Vụ Đặt Hàng Hộ Tại Trần Hoàng Logistics",
        content:
          "Quy trình minh bạch: Báo giá nhanh chóng, rõ ràng, không phát sinh chi phí ẩn. Kiểm tra và đóng gói chuyên nghiệp: Hàng hóa được kiểm tra kỹ lưỡng, đóng gói theo tiêu chuẩn xuất khẩu. Vận chuyển chính ngạch: Đầy đủ hóa đơn, chứng từ, hỗ trợ thủ tục hải quan. Bảo hiểm hàng hóa 100%: Cam kết bồi thường toàn bộ giá trị hàng hóa nếu xảy ra sự cố. Hỗ trợ hoàn thuế lên đến 10%: Tối ưu chi phí cho doanh nghiệp. Hệ thống kho bãi hiện đại: Kho riêng tại Trung Quốc và Việt Nam, hỗ trợ giao hàng tận nơi nhanh chóng.",
      },
    ],
  },
};
