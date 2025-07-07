import type { IFormLogin, IFormRegister } from "./auth.type";

export const INITIAL_VALUES_REGISTER: IFormRegister = {
  userName: "",
  accountName: "",
  password: "",
  repassword: "",
};

export const INITIAL_VALUES_LOGIN: IFormLogin = {
  accountName: "",
  password: "",
};
