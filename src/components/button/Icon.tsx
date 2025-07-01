import React from "react";
import type { IconKey } from "./button";
import { iconMaps } from "./button";
import type { IconType } from "react-icons";

interface IIconsProps {
  field: IconKey;
  size?: number;
  color?: string;
  style?: React.CSSProperties | null;
  icon?: IconType;
}

const Icons: React.FC<IIconsProps> = ({ field, size, color, style, icon }) => {
  const Icon = icon || iconMaps[field].icon;

  return <Icon size={size} color={color} style={style || {}} />;
};

export default Icons;
