import clsx from "clsx";
import { FC } from "react";

import { COLORS_CLASS_MAPPER, SIZES_CLASS_MAPPER } from "./constants";

export type InputProps = {
  placeholder?: string;
  type?: "text" | "email" | "number" | "password";
  size?: "small" | "normal" | "large";
  color?: "primary" | "error" | "success" | "info" | "warning" | "secondary";
  label?: string;
  fullWidth?: boolean;
  textArea?: boolean
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  errorMessage?: string
  rounded?: boolean
};

const Input: FC<InputProps> = ({
  placeholder = "Type something",
  type = "text",
  size = "normal",
  color = 'secondary',
  label,
  textArea,
  fullWidth = true,
  rounded = true,
  errorMessage,
  ...props
}) => (
  <div className={clsx("daisy-form-control", "w-full", fullWidth ? "" : "max-w-xs")}>
    {label && (
      <label className="daisy-label">
        <span className="daisy-label-text">{label}</span>
      </label>
    )}
    {textArea ? (
      <textarea
        className={clsx(
          " daisy-textarea",
          "w-full",
          "daisy-textarea-primary",
          "daisy-input-bordered",
          rounded ? "rounded-full" : "rounded-xl",
          "h-24",
          COLORS_CLASS_MAPPER[color],
          SIZES_CLASS_MAPPER[size],
        )}
        placeholder={placeholder}
        {...props}
      />
    ) : (
      <input
        className={clsx(
          "daisy-input",
          "w-full",
          "daisy-input-bordered",
          rounded ? "rounded-full" : "rounded-xl",
          COLORS_CLASS_MAPPER[color],
          SIZES_CLASS_MAPPER[size],
          "bg-base-100 shadow-inner",
        )}
        type={type}
        placeholder={placeholder}
        {...props}
      />
    )}
    <p className="text-error text-sm pl-1">{errorMessage}</p>
  </div>
);

export default Input;
