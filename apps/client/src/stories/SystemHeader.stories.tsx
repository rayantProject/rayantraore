import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Header from "@/components/system/header";

const meta = {
  title: "Components/System/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Fixed header component containing logo and theme toggle navigation.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: "200px", position: "relative" }}>
        <Story />
        <div style={{ padding: "80px 20px 20px", textAlign: "center" }}>
          <p>Content below the fixed header</p>
        </div>
      </div>
    ),
  ],
};
