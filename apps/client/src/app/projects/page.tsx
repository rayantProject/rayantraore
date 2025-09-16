"use client";

import { Bitcount_Grid_Double } from "next/font/google";
import { cn } from "@/lib/utils";

const bitcountGridDouble = Bitcount_Grid_Double({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1
        className={cn(
          "text-5xl md:text-6xl font-bold mb-6 text-foreground",
          bitcountGridDouble.className,
        )}
      >
        Projects
      </h1>
    </div>
  );
}
