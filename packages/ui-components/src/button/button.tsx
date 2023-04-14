import clsx from "clsx";
import { forwardRef, memo, ReactNode } from "react";

import {
  COLOR_CLASS_MAPPER,
  SIZE_CLASS_MAPPER,
  VARIANT_CLASS_MAPPER,
} from "./constants";
import { ButtonColor, ButtonSize, ButtonVariant } from "./types";

export type ButtonProps = {
  onClick?: () => void;
  formName?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  loading?: boolean;
  fullWidth?: boolean;
  children?: ReactNode;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      onClick,
      children,
      formName,
      variant = "contained",
      size = "medium",
      color = "primary",
      loading = false,
      fullWidth = false,
    },
    ref
  ) => (
    <button
      type="submit"
      className={clsx(
        "daisy-btn",
        VARIANT_CLASS_MAPPER[variant],
        SIZE_CLASS_MAPPER[size],
        COLOR_CLASS_MAPPER[color],
        'rounded-xl',
        {
          "daisy-loading": loading,
          "w-full": fullWidth,
        },
        )}
      form={formName}
      ref={ref}
      onClick={onClick}
    >
      {children}
    </button>
  )
);

export default memo(Button);
