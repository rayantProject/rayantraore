import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import NetworkShader from "@/components/home/networks/networks-shader";

const meta = {
  title: "Components/Home/Networks/NetworkShader",
  component: NetworkShader,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Animated shader effect displaying a dithered image with theme-aware colors.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NetworkShader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHover: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Hover over the component to see the scale and rotation animations.",
      },
    },
  },
};
