/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Đặt tên class tuỳ ý
        primary: "#1e40af", // xanh dương đậm
        secondary: "#F94735 ", // hồng đỏ
        accent: "#10b981", // xanh ngọc
        dark: "#0f313a", // đen xám
        light: "#f1f5f9", // xám sáng
      },
    },
  },
  plugins: [],
};
