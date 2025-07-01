import React, { memo, useMemo } from "react";

import Icons from "./Icon";
import styled from "styled-components";
import { iconMaps, sizeMaps, type ButtonSize, type IconKey } from "./button";
import Spinner from "./LoaderSprinner";
import type { IconType } from "react-icons";

interface IButtomCustomProps {
  //Title của tooltip
  title?: string;
  //Text của button
  label?: string;
  //Loại button
  type?: IconKey;
  //Kích thước icon
  iconSize?: number;
  //Màu icon
  iconColor?: string;
  //Kích thước button
  size?: ButtonSize;
  //Có hay không có icon
  hideIcon?: boolean;
  //Loading
  loading?: boolean;
  // disabled
  disabled?: boolean;
  // full width
  fullWidth?: boolean;
  //class cho component
  sx?: {
    //class cho button
    root?: React.CSSProperties;
    //class cho tex button
    label?: React.CSSProperties;
    //class cho icon
    icon?: React.CSSProperties;
  };
  //Hàm onclick cho button
  onClick?: () => void;
  //Type của button
  buttonType?: "button" | "submit" | "reset";
  //Icon
  icon?: IconType;
  //border
  border?: boolean;
}

const ButtonCustom: React.FC<IButtomCustomProps> = ({
  label,
  type = "default",
  size,
  iconSize,
  iconColor,
  sx,
  hideIcon = true,
  onClick,
  loading = false,
  fullWidth = false,
  disabled = false,
  buttonType = "button",
  icon,
  border = false,
}) => {
  const currentIconStyle = iconMaps[type];
  const currentButtonSize = sizeMaps[size ? size : "md"];
  const bgButton = currentIconStyle?.bgColor || "";
  const currentIconColor = iconColor ? iconColor : currentIconStyle.iconColor;
  const btn_h = currentButtonSize?.btn_h;
  const icon_size = iconSize ? iconSize : currentButtonSize?.icon_size;
  const btn_px = currentButtonSize?.btn_px;

  const currentDisabled = useMemo(() => {
    if (loading && !disabled) {
      return true;
    }
    return disabled;
  }, [loading, disabled]);

  return (
    <Button
      className={`flex items-center justify-center gap-x-3 rounded-[6px] cursor-pointer flex-shrink-0 transition transition-medium hover:-translate-y-[2px]`}
      onClick={onClick}
      $bgButton={bgButton}
      $height={btn_h}
      $padding={btn_px}
      $fullWidth={fullWidth}
      $disabled={currentDisabled}
      $border={border}
      $borderColor={currentIconColor}
      style={sx?.root || {}}
      type={buttonType}
    >
      {loading && <Spinner color={currentIconColor} />}

      {!hideIcon && !loading && (
        <Icons
          field={type}
          size={icon_size}
          color={currentIconColor}
          style={sx?.icon || null}
          icon={icon}
        />
      )}

      {label && (
        <Label
          className={`text-sm font-medium`}
          $colorLabel={currentIconColor}
          style={sx?.label || {}}
        >
          {label}
        </Label>
      )}
    </Button>
  );
};

export default memo(ButtonCustom);

interface IButtonStyleProps {
  $bgButton: string;
  $height: number;
  $padding: number;
  $fullWidth: boolean;
  $disabled: boolean;
  $border: boolean;
  $borderColor: string;
}

// Dùng transient props (gắn tiền tố $)
// Styled-components tự động lọc bỏ những props bắt đầu bằng $ khỏi việc forward xuống DOM.
const Button = styled.button<IButtonStyleProps>`
  background-color: ${(props) => props.$bgButton};
  height: ${(props) => props.$height}px;
  padding: 0 ${(props) => props.$padding}px;
  width: ${(props) => (props.$fullWidth ? "100%" : "auto")};
  opacity: ${(props) => (props.$disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  border: ${(props) =>
    props.$border ? `1px solid ${props.$borderColor}` : "none"};

  // Hint browser optimize
  will-change: transform, filter, box-shadow, background-color, opacity;

  transition: background-color 0.3s ease, filter 0.3s ease, box-shadow 0.3s ease,
    transform 0.15s ease, opacity 0.2s ease, border 0.2s ease;

  ${(props) =>
    !props.$disabled &&
    `
      &:hover {
        filter: brightness(1.1);
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
        transform: translateY(-1px);
      }

      &:active {
        transform: scale(0.97);
        filter: brightness(0.95);
      }

      &:focus-visible {
        outline: 2px solid ${props.$borderColor};
        outline-offset: 2px;
      }
  `};
`;

interface ILabelStyleProps {
  $colorLabel: string;
}

const Label = styled.p<ILabelStyleProps>`
  color: ${(props) => props.$colorLabel};
  transition: color 0.3s ease, filter 0.3s ease, transform 0.2s ease;
  will-change: filter, color;

  ${Button}:hover & {
    filter: brightness(1.05);
  }
`;
