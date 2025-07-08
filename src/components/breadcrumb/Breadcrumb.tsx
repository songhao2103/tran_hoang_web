import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { MENU_CONFIG } from "../../layouts/menu/menu.config";
import type { TMenuConfig } from "../../layouts/menu/type";
import imageBreadcrumb from "../../assets/images/banners/banner1.jpg";
import LayoutContent from "../../layouts/LayoutContent";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const [namePage, setNamePage] = useState<string>("");
  const [breadcrumbList, setBreadcrumbList] = useState<TMenuConfig[]>([]);

  // 🧠 Tìm đường dẫn breadcrumb và tên trang
  useEffect(() => {
    let menuList = MENU_CONFIG;
    const items: TMenuConfig[] = [];

    pathnames.forEach((_, index) => {
      const currentPath = pathnames.slice(0, index + 1).join("/");
      const matched = menuList.find(
        (m) => m.path.replace(/^\/+/, "") === currentPath
      );

      if (matched) {
        items.push(matched);
        if (matched.children) {
          menuList = matched.children;
        }
      }
    });

    if (items.length > 0) {
      setNamePage(items[items.length - 1].title || "");
    }
    setBreadcrumbList(items);
  }, [location.pathname]);

  return (
    <nav className="text-sm text-gray-500 relative">
      <div className="inset-0 absolute h-[300px] -z-0">
        <img
          src={imageBreadcrumb}
          alt=""
          className="object-cover h-[300px] w-full"
        />
      </div>
      <LayoutContent>
        <div className="h-[300px] relative">
          <div className="flex flex-col gap-y-4 absolute lg:bottom-[50px] lg:left-[70px] bottom-[50px] left-[20px] ">
            {namePage && <p className="title-h1 !text-gray-100">{namePage}</p>}
            <div className="flex items-center gap-x-2 ">
              <Link to={"/"} className="text-lg font-bold text-gray-400">
                Trang chủ
              </Link>
              <ul className="flex items-center gap-1">
                {breadcrumbList.map((menu, index) => {
                  const isLast = index === breadcrumbList.length - 1;
                  const routeTo = menu.path;
                  if (menu.children) return null;

                  return (
                    <li key={index} className="flex items-center gap-1 gap-x-2">
                      <span className="text-secondary">-</span>
                      {isLast ? (
                        <span className="text-lg font-semibold text-white capitalize">
                          {menu.title}
                        </span>
                      ) : (
                        <Link
                          to={routeTo}
                          className="text-lg text-gray-400 capitalize hover:underline"
                        >
                          {menu.title}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </LayoutContent>
    </nav>
  );
};

export default Breadcrumb;
