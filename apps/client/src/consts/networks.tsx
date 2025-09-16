import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import type { Network } from "@/types/network";

export const networks: Network[] = [
  {
    id: "github",
    name: "GitHub",
    description: "Explore my open source projects and contributions",
    icon: <Github />,
    link: "https://github.com/rayantProject",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    description: "Connect professionally and view my experience",
    icon: <Linkedin />,
    link: "https://linkedin.com/in/rayan-traore",
  },
  {
    id: "twitter",
    name: "Twitter",
    description: "Follow my thoughts and tech updates",
    icon: <Twitter />,
    link: "https://twitter.com/ray_azaman",
  },
  {
    id: "instagram",
    name: "Instagram",
    description: "Discover my creative side and daily moments",
    icon: <Instagram />,
    link: "https://instagram.com/ray_azaman",
  },
];
