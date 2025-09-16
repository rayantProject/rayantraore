import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Label } from "@/components/ui/label";

const meta = {
  title: "Components/UI/Label",
  component: Label,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Accessible label component built on Radix UI with consistent styling.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Label text content",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Label text",
  },
};

export const WithFormField: Story = {
  args: {
    children: "Email address",
    htmlFor: "email",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          width: "200px",
        }}
      >
        <Story />
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          style={{
            padding: "8px 12px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            fontSize: "14px",
          }}
        />
      </div>
    ),
  ],
};

export const Required: Story = {
  args: {
    children: (
      <>
        Full name <span style={{ color: "red" }}>*</span>
      </>
    ),
    htmlFor: "fullname",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          width: "200px",
        }}
      >
        <Story />
        <input
          id="fullname"
          type="text"
          placeholder="Enter your full name"
          style={{
            padding: "8px 12px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            fontSize: "14px",
          }}
        />
      </div>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    children: "Disabled field",
    htmlFor: "disabled-field",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          width: "200px",
        }}
        data-disabled="true"
      >
        <Story />
        <input
          id="disabled-field"
          type="text"
          placeholder="This field is disabled"
          disabled
          style={{
            padding: "8px 12px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            fontSize: "14px",
          }}
        />
      </div>
    ),
  ],
};
