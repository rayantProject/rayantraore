import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ThemeToggle from "@/components/system/theme-toggle";

const meta = {
  title: "Components/System/ThemeToggle",
  component: ThemeToggle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Theme toggle button that switches between light and dark modes.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InHeader: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "20px",
          backgroundColor: "var(--background)",
          border: "1px solid var(--border)",
        }}
      >
        <Story />
      </div>
    ),
  ],
};
