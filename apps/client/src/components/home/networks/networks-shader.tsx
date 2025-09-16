"use client";
import { ImageDithering } from "@paper-design/shaders-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function NetworkShader() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const lightColors = {
    back: "#0A192F",
    front: "#3A506B",
    highlight: "#33658A",
  };

  const darkColors = {
    back: "#0A192F",
    front: "#5BC0BE",
    highlight: "#3DDC84",
  };

  const colors = mounted && theme === "dark" ? darkColors : lightColors;

  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="relative group"
    >
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse" />

      {/* Main container */}
      <div className="relative bg-background/80 backdrop-blur-sm rounded-2xl p-2 border border-border/50">
        <ImageDithering
          className="rounded-xl shadow-2xl w-full h-auto"
          image="/rt-photo/rt-durag.jpeg"
          style={{
            height: "320px",
            width: "320px",
            maxWidth: "100%",
          }}
          colorBack={colors.back}
          colorFront={colors.front}
          colorHighlight={colors.highlight}
          originalColors={false}
          type="8x8"
          pxSize={2}
          colorSteps={4}
          scale={1}
          fit="cover"
        />
      </div>

      {/* Floating accent */}
      <motion.div
        className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full shadow-lg"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
