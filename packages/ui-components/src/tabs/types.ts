import { ReactNode } from "react";

export type Tab = {
  text: string;
  feature: ReactNode;
};

export type TabsAndFeatures = {
  tabs: ReactNode[];
  features: ReactNode[];
};
