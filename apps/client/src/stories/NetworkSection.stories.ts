import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import NetworkSection from "@/components/home/networks-section";

const meta = {
  title: "Components/Home/NetworkSection",
  component: NetworkSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Network section displaying social media links with animated network visualization.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NetworkSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
