import clsx from "clsx";
import { memo } from "react";

import {
  FONT_WEIGHT_CLASS_MAPPER,
  H1_VARIANTS,
  H2_VARIANTS,
  H3_VARIANTS,
  H4_VARIANTS,
  SPAN_VARIANTS,
  TEXT_COLOR_CLASS_MAPPER,
  TEXT_SIZE_CLASS_MAPPER,
} from "./constants";
import { TextColor, TextVariant } from "./types";
import { FCWithChildren } from "../common/types";

export type TextProps = {
  variant?: TextVariant;
  color?: TextColor;
};

const Text: FCWithChildren<TextProps> = ({ variant = 'regularBodyLight', children, color = "white" }) => {
  const classes = clsx(
    TEXT_SIZE_CLASS_MAPPER[variant],
    FONT_WEIGHT_CLASS_MAPPER[variant],
    !color && TEXT_COLOR_CLASS_MAPPER[variant],
    { "text-primary": color === "primary", "#a6adbb": color === "white" },

  );

  if (H1_VARIANTS.includes(variant)) {
    return <h1 className={classes}>{children}</h1>;
  }

  if (H2_VARIANTS.includes(variant)) {
    return <h2 className={classes}>{children}</h2>;
  }

  if (H3_VARIANTS.includes(variant)) {
    return <h3 className={classes}>{children}</h3>;
  }

  if (H4_VARIANTS.includes(variant)) {
    return <h4 className={classes}>{children}</h4>;
  }

  if (SPAN_VARIANTS.includes(variant)) {
    return <span className={classes}>{children}</span>;
  }

  return null;
};

export default memo(Text);
