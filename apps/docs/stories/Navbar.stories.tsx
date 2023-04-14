import { ComponentMeta, ComponentStory } from "@storybook/react/";
import { Navbar } from "ui-components";

export default {
  title: "Example/Navbar",
  component: Navbar,
  args: {
    logo: "React Bundle",
    navItems: [
      {
        title: "Home",
        push: () => {},
      },
      {
        title: "About",
        push: () => {},
      },
      {
        title: "Contact",
        push: () => {},
      },
    ],
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const MediumNavbar = Template.bind({});
MediumNavbar.args = {};
