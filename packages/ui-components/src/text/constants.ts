import { TextVariant } from "./types";

export const H1_VARIANTS: TextVariant[] = ["heading1"];

export const H2_VARIANTS: TextVariant[] = ["heading2"];

export const H3_VARIANTS: TextVariant[] = ["heading3"];

export const H4_VARIANTS: TextVariant[] = ["heading4", "heading4Small"];

export const SPAN_VARIANTS: TextVariant[] = [
  "smallBodyDark",
  "smallBodyLight",
  "regularBodyDark",
  "regularBodyDarkBolded",
  "regularBodyLight",
  "error",
  "label",
];

export const TEXT_SIZE_CLASS_MAPPER: Record<TextVariant, string> = {
  heading1: "text-3xl",
  heading2: "text-2xl",
  heading3: "text-2xl",
  heading4: "text-2xl",
  heading4Small: "text-sm",
  smallBodyLight: "text-sm",
  smallBodyDark: "text-sm",
  regularBodyDark: "text-base",
  regularBodyLight: "text-base",
  regularBodyDarkBolded: "text-base",
  error: "text-sm",
  label: "text-sm",
};

export const FONT_WEIGHT_CLASS_MAPPER: Record<TextVariant, string> = {
  heading1: "font-extrabold",
  heading2: "font-extrabold",
  heading3: "font-medium",
  heading4: "font-normal",
  heading4Small: "font-medium",
  smallBodyLight: "font-normal",
  smallBodyDark: "font-normal",
  regularBodyLight: "font-normal",
  regularBodyDarkBolded: "font-bold",
  regularBodyDark: "font-normal",
  error: "font-light",
  label: "font-medium",
};

export const TEXT_COLOR_CLASS_MAPPER: Record<TextVariant, string> = {
  heading1: "text-gray-700",
  heading2: "text-gray-700",
  heading3: "text-slate-800",
  heading4: "text-gray-700",
  heading4Small: "text-slate-800",
  smallBodyLight: "text-slate-500",
  smallBodyDark: "text-gray-900",
  regularBodyDark: "text-gray-700",
  regularBodyLight: "text-gray-500",
  regularBodyDarkBolded: "text-gray-700",
  label: "text-gray-700",
  error: "text-error",
};
