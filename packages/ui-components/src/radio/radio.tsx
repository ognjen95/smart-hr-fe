import clsx from "clsx";
import { ChangeEventHandler, FC } from "react";

import { RADIO_SIZE_CLASS_MAPPER } from "./constants";
import { Option, RadioSize } from "./types";
import Text from "../text";

export type RadioProps = {
  name: string;
  options: Option[];
  size?: RadioSize;
  label?: string;
  errorMessage?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const Radio: FC<RadioProps> = ({
  name,
  options,
  label,
  errorMessage,
  size = "medium",
  onChange,
}) => (
  <div>
    {label && (
      <label className="daisy-label">
        <Text variant="label">{label}</Text>
      </label>
    )}
    {options.map((option) => (
      <div key={option.value} className="flex flex-row justify-start">
        <label className="daisy-label py-1 daisy-cursor-pointer">
          <input
            type="radio"
            name={name}
            className={clsx(
              "daisy-radio",
              "daisy-radio-primary",
              RADIO_SIZE_CLASS_MAPPER[size]
            )}
            value={option.value}
            onChange={onChange}
          />
          <span className="daisy-label-text ml-2">
            <Text variant="label">{option.content}</Text>
          </span>
        </label>
      </div>
    ))}
    <div className="field-error">
      <Text variant="error">{errorMessage}</Text>
    </div>
  </div>
);

export default Radio;
