// utils/scroll.ts
export const scrollToTop = () => {
  if (typeof window !== "undefined") {
    console.log("pre-scrollY:", window.scrollY);
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log("post-scrollY:", window.scrollY);
  }
};
