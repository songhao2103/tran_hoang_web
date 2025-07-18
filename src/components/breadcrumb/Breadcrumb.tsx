import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { MENU_CONFIG } from "../../layouts/menu/menu.config";
import type { TMenuConfig } from "../../layouts/menu/type";
import imageBreadcrumb from "../../assets/images/slide-images/bgc-breadcrumb.png";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const [breadcrumbList, setBreadcrumbList] = useState<TMenuConfig[]>([]);

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

    setBreadcrumbList(items);
  }, [location.pathname]);

  return (
    <nav className="relative text-sm text-gray-500">
      <div className="">
        <img src={imageBreadcrumb} alt="" className="object-cover w-full" />
      </div>

      <div className="px-3 py-2 bg-dark xl:py-6">
        <div className="flex flex-col gap-y-4 lg:bottom-[50px] lg:left-[70px] bottom-[50px] left-[20px] max-w-[1820px] mx-auto ">
          {/* {namePage && <p className="title-h1 !text-gray-100">{namePage}</p>} */}
          <div className="flex items-center gap-x-2">
            <Link to={"/"} className="title-h3 font-bold !text-gray-400">
              Trang chủ
            </Link>
            <ul className="flex items-center gap-x-1">
              {breadcrumbList.map((menu, index) => {
                const isLast = index === breadcrumbList.length - 1;
                const routeTo = menu.path;
                if (menu.children) return null;

                return (
                  <li
                    key={index}
                    className="flex items-center gap-1 mt-1 gap-x-2"
                  >
                    <span className="text-xl font-bold text-secondary">-</span>
                    {isLast ? (
                      <span className="title-h4 font-semibold !text-light capitalize">
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
    </nav>
  );
};

export default Breadcrumb;
