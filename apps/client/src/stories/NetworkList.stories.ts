import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import NetworkList from "@/components/home/networks/network-list";

const meta = {
  title: "Components/Home/Networks/NetworkList",
  component: NetworkList,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Animated list of network/social media links using data from constants.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NetworkList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
