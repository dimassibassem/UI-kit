import type { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/test";
import { createButtonComponent } from "@repo/ui";
import type { ComponentProps } from "react";

const Button = createButtonComponent();

type ButtonProps = ComponentProps<typeof Button>;

const meta: Meta<ButtonProps> = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },

  // Default args
  args: {
    onClick: fn(),
    children: "Button",
    variant: "primary",
    size: "md",
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Button",
  },
};
