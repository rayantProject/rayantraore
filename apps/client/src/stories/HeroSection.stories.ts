import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import HeroSection from "@/components/home/hero-section";

const meta = {
  title: "Components/Home/HeroSection",
  component: HeroSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Hero section with animated text and shader background for the homepage.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutAnimation: Story = {
  parameters: {
    docs: {
      description: {
        story: "Hero section with animations disabled for testing purposes.",
      },
    },
  },
};
