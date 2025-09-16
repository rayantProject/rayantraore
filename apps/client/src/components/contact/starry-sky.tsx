"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
}

interface StarrySkyProps {
  children: React.ReactNode;
  className?: string;
  disableAnimation?: boolean;
  starCount?: number;
}

export default function StarrySky({
  children,
  className,
  disableAnimation = false,
  starCount = 150,
}: StarrySkyProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: starCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      duration: Math.random() * 3 + 2,
    }));
  }, [starCount]);

  if (!mounted) {
    return (
      <div className={cn("relative min-h-screen overflow-hidden", className)}>
        {children}
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className={cn("relative min-h-screen overflow-hidden", className)}>
      {/* Background gradient */}
      <div
        className={cn(
          "absolute inset-0 transition-all duration-1000",
          isDark
            ? "bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800"
            : "bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300",
        )}
      />
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className={cn(
              "absolute rounded-full",
              isDark ? "bg-white" : "bg-blue-600",
            )}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              boxShadow: isDark
                ? `0 0 ${star.size * 3}px rgba(255,255,255,${star.opacity})`
                : `0 0 ${star.size * 3}px rgba(37,99,235,${star.opacity})`,
            }}
            animate={
              disableAnimation
                ? {}
                : {
                    opacity: [
                      star.opacity * 0.3,
                      star.opacity,
                      star.opacity * 0.3,
                    ],
                    scale: [0.9, 1.1, 0.9],
                  }
            }
            transition={
              disableAnimation
                ? {}
                : {
                    duration: star.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
          />
        ))}
      </div>

      <div
        className={cn(
          "absolute inset-0",
          isDark ? "bg-black/30" : "bg-white/20",
        )}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
