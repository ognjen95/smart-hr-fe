import { ComponentMeta, ComponentStory } from "@storybook/react/";
import { Modal } from "ui-components";

export default {
  title: "Example/Modal",
  component: Modal,
  args: {
    title: "Modal Title",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, quidem.",
    isOpen: true,
    leftButton: {
      buttonText: "Cancel",
    },
    rightButton: {
      buttonText: "Ok",
    },
    position: "middle",
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const MediumModal = Template.bind({});
MediumModal.args = {
  size: "medium",
};
