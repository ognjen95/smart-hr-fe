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
  primary: "daisy-btn-primary",
  secondary: "daisy-btn-secondary",
  error: "daisy-btn-error",
  "accent-content": "daisy-btn-accent-content",
  success: "daisy-btn-success",
};

export { VARIANT_CLASS_MAPPER, SIZE_CLASS_MAPPER, COLOR_CLASS_MAPPER };
