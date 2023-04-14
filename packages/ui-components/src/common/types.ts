import { FC, ReactNode } from "react";

type FCWithChildren<T = object> = FC<{ children?: ReactNode } & T>;

export type { FCWithChildren };
