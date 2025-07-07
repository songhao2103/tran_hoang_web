export const PREFIX_ROUTE_PATH = {
  SERVICES: "/dich-vu",
};

export const ROUTE_PATH = {
  //public
  HOME: "/",
  NOT_FOUND: "*",
  INTRODUCE: "/gioi-thieu",
  PRICE_LIST: "/bang-gia",
  NEWS: "/tin-tuc",
  CONTACT: "/lien-he",
  NEW_DETAIL: "/tin-tuc/:id",
  FIND_SOURCE_GOODS: PREFIX_ROUTE_PATH.SERVICES + "/tim-nguon-hang",
  OFFICIAL_TRANSPORTATION:
    PREFIX_ROUTE_PATH.SERVICES + "/van-chuyen-chinh-ngach",
  COMBINE_CONTAINERS: PREFIX_ROUTE_PATH.SERVICES + "/ghep-cotainers",
  PAY_ON_BEHALF: PREFIX_ROUTE_PATH.SERVICES + "/thanh-toan-ho",

  //admin
  ADMIN: "/admin",
  ADMIN_AUTH: "/admin/auth",
  ADMIN_NEWS: "/admin/news",
  ADMIN_INFORMATION: "/admin/information",
};
