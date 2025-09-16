import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Logo from "@/components/system/logo";

const meta = {
  title: "Components/System/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Logo component with custom font (Bitcount Grid Double) linking to homepage.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Logo>;

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
