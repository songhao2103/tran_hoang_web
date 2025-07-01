import type { IconType } from "react-icons";
import { AiOutlineDelete, AiOutlineTool } from "react-icons/ai";
import {
  IoIosClose,
  IoMdArrowRoundBack,
  IoMdCloudUpload,
} from "react-icons/io";
import { LuImport } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";
import { RiAddLine } from "react-icons/ri";
import { TbInfoHexagon, TbLockCheck } from "react-icons/tb";

export type IconKey =
  | "add"
  | "edit"
  | "delete"
  | "roll_back"
  | "close"
  | "setting"
  | "import"
  | "upload"
  | "confirm"
  | "block"
  | "submit"
  | "info"
  | "reset"
  | "agree"
  | "default";

export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

export type IButtonStyle = {
  icon: IconType;
  bgColor: string;
  iconColor: string;
};

export type IButtonSize = {
  btn_h: number; //chiều cao button
  icon_size: number; //size icon
  btn_px: number; //padding x button
};

export const sizeMaps: Record<ButtonSize, IButtonSize> = {
  xs: {
    btn_h: 25,
    icon_size: 15,
    btn_px: 10,
  },
  sm: {
    btn_h: 30,
    icon_size: 18,
    btn_px: 10,
  },
  md: {
    btn_h: 38,
    icon_size: 24,
    btn_px: 25,
  },
  lg: {
    btn_h: 42,
    icon_size: 24,
    btn_px: 10,
  },
  xl: {
    btn_h: 50,
    icon_size: 29,
    btn_px: 10,
  },
};

export const iconMaps: Record<IconKey, IButtonStyle> = {
  default: {
    icon: RiAddLine,
    bgColor: "#f43f5e",
    iconColor: "#fff",
  },
  add: {
    icon: RiAddLine,
    bgColor: "#0b8432",
    iconColor: "#fff",
  },

  edit: {
    icon: AiOutlineTool,
    bgColor: "#0b8432",
    iconColor: "#fff",
  },

  delete: {
    icon: AiOutlineDelete,
    bgColor: "#f1b7b7",
    iconColor: "#a30505",
  },

  close: {
    icon: IoClose,
    bgColor: "#dbdbdb",
    iconColor: "#a0a2a0",
  },

  roll_back: {
    icon: IoMdArrowRoundBack,
    bgColor: "#fff",
    iconColor: "#9c9c9c",
  },

  setting: {
    icon: MdOutlineSettings,
    bgColor: "#0b8432",
    iconColor: "#fff",
  },

  import: {
    icon: LuImport,
    bgColor: "#0b8432",
    iconColor: "#fff",
  },

  upload: {
    icon: IoMdCloudUpload,
    bgColor: "#0b8432",
    iconColor: "#fff",
  },

  confirm: {
    icon: RiAddLine,
    bgColor: "#0b8432",
    iconColor: "#fff",
  },

  block: {
    icon: TbLockCheck,
    bgColor: "#c73d3d",
    iconColor: "#ffffff",
  },
  submit: {
    icon: RiAddLine,
    bgColor: "#0b8432",
    iconColor: "#fff",
  },
  info: {
    icon: TbInfoHexagon,
    bgColor: "#c7e9ff",
    iconColor: "#087ec9",
  },
  reset: {
    icon: IoIosClose,
    bgColor: "#dbdbdb",
    iconColor: "#a0a2a0",
  },
  agree: {
    icon: IoMdCheckmark,
    bgColor: "#0b8432",
    iconColor: "#fff",
  },
};
