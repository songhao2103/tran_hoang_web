export type Variant = "outlined" | "filled" | "standard";

export type SizeInput = "small" | "medium";

export interface InputCommonProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
  variant?: Variant;
  type?: React.InputHTMLAttributes<unknown>["type"];
  disabled?: boolean;
  name?: string;
  id?: string;
  required?: boolean;
  size?: SizeInput;
  autoFocus?: boolean;
  multiple?: boolean;
  rows?: number;
}
