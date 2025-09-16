import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Github,
  Instagram as InstagramIcon,
  Linkedin,
  Twitter as TwitterIcon,
} from "lucide-react";
import NetworkListElement from "@/components/home/networks/network-list-element";

const meta = {
  title: "Components/Home/Networks/NetworkListElement",
  component: NetworkListElement,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Individual network link element with hover animations and icon.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: false,
      description: "React node representing the network icon",
    },
    link: {
      control: "text",
      description: "URL to the network profile",
    },
    title: {
      control: "text",
      description: "Name of the network",
    },
    description: {
      control: "text",
      description: "Optional description of the network",
    },
  },
} satisfies Meta<typeof NetworkListElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GitHub: Story = {
  args: {
    icon: <Github />,
    link: "https://github.com/rayantProject",
    title: "GitHub",
    description: "Explore my open source projects and contributions",
  },
};

export const LinkedIn: Story = {
  args: {
    icon: <Linkedin />,
    link: "https://linkedin.com/in/rayan-traore",
    title: "LinkedIn",
    description: "Connect professionally and view my experience",
  },
};

export const Twitter: Story = {
  args: {
    icon: <TwitterIcon />,
    link: "https://twitter.com/rayantraore_",
    title: "Twitter",
    description: "Follow my thoughts and tech updates",
  },
};

export const Instagram: Story = {
  args: {
    icon: <InstagramIcon />,
    link: "https://instagram.com/rayantraore_",
    title: "Instagram",
    description: "Discover my creative side and daily moments",
  },
};

export const WithoutDescription: Story = {
  args: {
    icon: <Github />,
    link: "https://github.com/rayantProject",
    title: "GitHub",
  },
};
