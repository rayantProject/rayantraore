import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Underline,
} from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

const meta = {
  title: "Components/UI/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Toggle component built on Radix UI with multiple variants and sizes.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline"],
      description: "Visual style variant",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
      description: "Size of the toggle",
    },
    pressed: {
      control: "boolean",
      description: "Whether the toggle is pressed (controlled)",
    },
    disabled: {
      control: "boolean",
      description: "Whether the toggle is disabled",
    },
    children: {
      control: false,
      description: "Toggle content (text or icon)",
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Toggle",
  },
};

export const WithIcon: Story = {
  args: {
    children: <Bold />,
    "aria-label": "Bold text",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: <Italic />,
    "aria-label": "Italic text",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: <Underline />,
    "aria-label": "Underline text",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Toggle",
  },
};

export const Pressed: Story = {
  args: {
    pressed: true,
    children: <Bold />,
    "aria-label": "Bold text (pressed)",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: <Bold />,
    "aria-label": "Bold text (disabled)",
  },
};

export const TextFormattingToolbar: Story = {
  decorators: [
    () => (
      <div
        style={{
          display: "flex",
          gap: "4px",
          padding: "8px",
          border: "1px solid #e5e5e5",
          borderRadius: "8px",
        }}
      >
        <Toggle aria-label="Bold">
          <Bold />
        </Toggle>
        <Toggle aria-label="Italic">
          <Italic />
        </Toggle>
        <Toggle aria-label="Underline">
          <Underline />
        </Toggle>
        <div style={{ width: "1px", background: "#e5e5e5", margin: "0 4px" }} />
        <Toggle aria-label="Align left">
          <AlignLeft />
        </Toggle>
        <Toggle aria-label="Align center">
          <AlignCenter />
        </Toggle>
        <Toggle aria-label="Align right">
          <AlignRight />
        </Toggle>
      </div>
    ),
  ],
};
