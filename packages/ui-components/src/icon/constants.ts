import { IconSize } from "./enums";

export const SIZE_REGISTER: Record<
  IconSize,
  { width: string; height: string }
> = {
  [IconSize.SMALL]: { width: "20px", height: "20px" },
  [IconSize.MEDIUM]: { width: "24px", height: "24px" },
  [IconSize.LARGE]: { width: "32px", height: "32px" },
  [IconSize.EXTRA_LARGE]: { width: "40px", height: "40px" },
};

export const SIZE_CLASS_MAPPER: Record<IconSize, string> = {
  [IconSize.SMALL]: "w-5 h-5",
  [IconSize.MEDIUM]: "w-6 h-6",
  [IconSize.LARGE]: "w-8 h-8",
  [IconSize.EXTRA_LARGE]: "w-10 h-10",
};
