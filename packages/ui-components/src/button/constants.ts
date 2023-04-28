import { ButtonColor, ButtonSize, ButtonVariant } from "./types";

const VARIANT_CLASS_MAPPER: Record<ButtonVariant, string> = {
  outlined: "daisy-btn-outline",
  link: "daisy-btn-link",
  text: "daisy-btn-ghost",
  contained: "",
};

const SIZE_CLASS_MAPPER: Record<ButtonSize, string> = {
  small: "daisy-btn-sm",
  medium: "",
  large: "daisy-btn-lg",
};

const COLOR_CLASS_MAPPER: Record<ButtonColor, string> = {
  primary: "daisy-btn-primary text-accent-content",
  error: "daisy-btn-error",
  secondary: "bg-accent-content hover:bg-primary hover:text-white text-primary border-none",
  success: "daisy-btn-success",
  "accent-content": "bg-accent-content hover:bg-primary hover:text-white text-primary",
};

export { VARIANT_CLASS_MAPPER, SIZE_CLASS_MAPPER, COLOR_CLASS_MAPPER };
