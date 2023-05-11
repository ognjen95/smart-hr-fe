/* eslint-disable import/no-extraneous-dependencies */
import * as TabsRadix from "@radix-ui/react-tabs";
import { motion } from 'framer-motion'
import { FC, memo, useMemo } from "react";

import { Tab, TabsAndFeatures } from "./types";
import Text from "../text/text";

export type TabsProps = {
  tabs: Tab[];
};

const Tabs: FC<TabsProps> = ({ tabs }) => {
  const tabsAndFeatures: TabsAndFeatures = useMemo(
    () =>
      tabs.reduce<TabsAndFeatures>(
        (componentObject, tab, index) => {
          componentObject.tabs.push(
            <motion.span
              {...{
                initial: { opacity: .7, scale: 0 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.4, delay: index * 0.1 },
              }}
            >
              <TabsRadix.Trigger
                key={tab.text}
                value={tab.text}
                className="data-[state=active]:text-white hover:bg-primary-focus duration-300 data-[state=active]:bg-primary active:scale-50 px-4 py-2 rounded-full bg-base-100 shadow shadow-neutral my-5"
              >
                <Text>{tab.text}</Text>
              </TabsRadix.Trigger>
            </motion.span>
          );
          componentObject.features.push(
            <TabsRadix.Content key={tab.text} value={tab.text}>
              {tab.feature}
            </TabsRadix.Content>
          );

          return componentObject;
        },
        { tabs: [], features: [] }
      ),
    [tabs]
  );

  return (
    <TabsRadix.Root defaultValue={tabs[0].text}>
      <TabsRadix.List
        className="flex gap-8">
        {tabsAndFeatures.tabs}
      </TabsRadix.List>
      {tabsAndFeatures.features}
    </TabsRadix.Root>
  );
};

export default memo(Tabs);

