import clsx from "clsx";
import { FC } from "react";

import { COLORS_CLASS_MAPPER, SIZES_CLASS_MAPPER } from "./constants";

export type InputProps = {
  placeholder?: string;
  type?: "text" | "email" | "number" | "password";
  size?: "small" | "normal" | "large";
  color?: "primary" | "error" | "success" | "info" | "warning";
  label?: string;
  fullWidth?: boolean;
  textArea?: boolean
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  errorMessage?: string
};

const Input: FC<InputProps> = ({
  placeholder = "Type something",
  type = "text",
  size = "normal",
  color = "primary",
  label,
  textArea,
  fullWidth = true,
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
          "daisy-input-bordered",
          "rounded-xl",
          "h-24",
          COLORS_CLASS_MAPPER[color],
          SIZES_CLASS_MAPPER[size]
        )}
        placeholder={placeholder}
        {...props}
      />
    ) : (
      <input
        className={clsx(
          "daisy-input",
          "daisy-textarea-primary",
          "w-full",
          "daisy-input-bordered",
          "rounded-xl",
          COLORS_CLASS_MAPPER[color],
          SIZES_CLASS_MAPPER[size]
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
