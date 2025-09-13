"use client";
import { MeshGradient } from "@paper-design/shaders-react";
import { useTheme } from "next-themes";
import type React from "react";

interface ShaderBackgroundProps {
  children: React.ReactNode;
}

export default function ShaderBackground({ children }: ShaderBackgroundProps) {
  const { theme } = useTheme();

  // 🎨 Palette avec plus de contraste mais toujours dans le même esprit
  const lightColors = {
    primary: ["#E6EEF7", "#A7C7E7", "#5A8FB7", "#33658A", "#E6EEF7"],
    secondary: ["#A7C7E7", "#E6EEF7", "#5A8FB7", "#A7C7E7"],
  };

  const darkColors = {
    primary: ["#0A192F", "#112D4E", "#3A506B", "#5BC0BE", "#0A192F"],
    secondary: ["#112D4E", "#0A192F", "#3A506B", "#112D4E"],
  };

  const colors = theme === "dark" ? darkColors : lightColors;

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Gradient principal */}
      <MeshGradient
        className="absolute inset-0 w-full h-full -z-20"
        colors={colors.primary}
        distortion={0.7}
        swirl={0.12}
        scale={1}
        speed={0.6}
      />

      {/* Gradient secondaire (accent doux en arrière-plan) */}
      <MeshGradient
        className="absolute inset-0 w-full h-full -z-30 opacity-45"
        colors={colors.secondary}
        distortion={0.9}
        swirl={0.1}
        scale={1.2}
        speed={0.25}
      />

      {/* Overlay pour lisibilité */}
      <div className="absolute inset-0 -z-10 bg-black/20 dark:bg-black/40 backdrop-blur-sm" />

      {/* Contenu */}
      <div className="relative z-10 text-gray-900 dark:text-gray-100">
        {children}
      </div>
    </div>
  );
}
