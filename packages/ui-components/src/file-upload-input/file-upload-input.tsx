import clsx from "clsx";
import { ChangeEventHandler, FC } from "react";

import { SIZE_CLASS_MAPPER } from "./constants";
import { InputSize } from "./types";

export type FileUploadInputProps = {
  label?: string;
  disabled?: boolean;
  errorMessage?: string;
  value?: string | number | readonly string[];
  placeholder?: string;
  accept?: string;
  size?: InputSize;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
};

const FileUploadInput: FC<FileUploadInputProps> = ({
  label,
  accept,
  errorMessage,
  value,
  onChange,
  disabled = false,
  placeholder = "Click to select file",
  size = "medium",
}) => (
  <div>
    <label className="daisy-label">{label}</label>
    <input
      type="file"
      className={clsx(
        "daisy-file-input",
        "daisy-file-input-bordered",
        SIZE_CLASS_MAPPER[size],
        {
          "daisy-file-input-primary": !errorMessage,
          "daisy-file-input-error": errorMessage,
        }
      )}
      disabled={disabled}
      placeholder={placeholder}
      accept={accept}
      value={value}
      onChange={onChange}
    />
    <p className="text-error">{errorMessage}</p>
  </div>
);

export default FileUploadInput;
