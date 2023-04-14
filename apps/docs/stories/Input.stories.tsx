import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "ui-components";

export default {
  title: "Example/Input",
  component: Input,
  args: {
    size: "normal",
    color: "primary",
    type: "text",
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const PrimaryInput = Template.bind({});
PrimaryInput.args = {
  label: "Input",
};

export const ErrorInput = Template.bind({});
ErrorInput.args = {
  label: "Error Input",
  color: "error",
};

export const CompactInput = Template.bind({});
CompactInput.args = {
  label: "Compact Input",
  size: "small",
};
