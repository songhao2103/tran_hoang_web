export const formatInputQuantity = {
  display: (value: string | number | null | undefined): string => {
    // Nếu null/undefined/empty string
    if (value === null || value === undefined || value === "") return "";

    // Ép thành string ngay lập tức
    let str = String(value); // bây giờ str luôn là string, có method startsWith
    // Nếu bắt đầu bằng ".", thêm "0" để thành "0.xxx"
    if (str.startsWith(".")) {
      str = "0" + str;
    }
    // Tách phần nguyên và phần thập phân
    const [intPartRaw, decimalPartRaw] = str.split(".");
    // Loại bỏ số 0 đầu (nếu nhiều) nhưng giữ "0" nếu toàn bộ là "0" hoặc "0.xxx"
    let intPart = intPartRaw.replace(/^0+(?=\d)/, "");
    if (intPart === "") intPart = "0";
    // Thêm dấu chấm phân tách hàng nghìn
    const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    if (decimalPartRaw !== undefined) {
      // Nếu phần thập phân rỗng (user vừa gõ "."), decimalPartRaw === '' vẫn render thành "1.234,"
      return `${formattedInt},${decimalPartRaw}`;
    }
    return formattedInt;
  },

  handleKeyDown: (
    e: React.KeyboardEvent<HTMLInputElement>,
    rawValue: string | number
  ) => {
    if (e.key === "." || e.key === ",") {
      e.preventDefault();
      // Nếu raw chưa có dấu '.', thêm vào cuối
      if (!rawValue.toString().includes(".")) {
        const newRaw = rawValue === "" ? "0." : rawValue + ".";
        return newRaw;
      }
    }

    return "";
  },

  // Xử lý onChange: đổi display value → raw string lưu Formik
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    let rawCandidate = e.target.value
      .replace(/\./g, "") // bỏ dấu chấm phân tách hàng nghìn
      .replace(/,/g, "."); // đổi dấu phẩy hiển thị → dấu chấm raw
    // Chỉ giữ chữ số và dấu chấm
    rawCandidate = rawCandidate.replace(/[^0-9.]/g, "");
    // Chỉ 1 dấu chấm
    const parts = rawCandidate.split(".");
    if (parts.length > 2) {
      rawCandidate = parts.shift() + "." + parts.join("");
    }
    // Loại số 0 đầu (giữ "0" nếu bắt đầu "0.xxx")
    rawCandidate = rawCandidate.replace(/^0+(?=\d)/, "");
    return rawCandidate;
  },
};

export const formatCurrencyInput = {
  /**
   * Hiển thị cho người dùng:
   * - Dấu . phân tách hàng nghìn (format phần nguyên)
   * - Dấu , nối phần thập phân, giữ nguyên chuỗi sau dấu thập phân
   */
  display: (value: string | number): string => {
    if (value === null || value === undefined || value === "") {
      return "";
    }

    const str = value.toString();
    const [intPart, decimalPart] = str.split(".");

    const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return decimalPart !== undefined
      ? `${formattedInt},${decimalPart}`
      : formattedInt;
  },

  /**
   * Chuẩn hóa input người dùng thành chuỗi số chuẩn JS:
   * - Bỏ tất cả ký tự không phải 0–9, dấu . hoặc ,
   * - Nếu raw === "0" hoặc raw.startsWith("0,") → giữ nguyên
   * - Ngược lại → loại bỏ hết số 0 đầu dòng
   * - Bỏ dấu . (hàng nghìn)
   * - Đổi , thành . (thập phân)
   */
  setState: (value: string): string => {
    if (!value) return "";

    // 1) Giữ 0–9, . và ,
    let raw = value.replace(/[^0-9.,]/g, "");

    // 2) Nếu không phải "0" đứng một mình, và không bắt đầu bằng "0,",
    //    thì xoá hết số 0 ở đầu
    if (raw !== "0" && !raw.startsWith("0,")) {
      raw = raw.replace(/^0+/, "");
    }

    // 3) Bỏ dấu . (hàng nghìn)
    raw = raw.replace(/\./g, "");

    // 4) Đổi dấu , thành . (thập phân)
    raw = raw.replace(/,/g, ".");

    return raw;
  },
};
