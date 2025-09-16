"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import { Bitcount_Grid_Double } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const bitcountGridDouble = Bitcount_Grid_Double({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={cn(
              "text-8xl md:text-9xl font-bold text-primary mb-6",
              bitcountGridDouble.className,
            )}
          >
            404
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Page Not Found
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-muted-foreground mb-8 max-w-md mx-auto"
          >
            The page you're looking for doesn't exist or has been moved. Let's
            get you back on track.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button asChild size="lg">
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </Button>

            <Button variant="outline" size="lg" onClick={() => router.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 pt-8 border-t border-border"
          >
            <p className="text-muted-foreground mb-4">
              Or explore these sections:
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/projects"
                className="text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline"
              >
                Contact
              </Link>
            </div>
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 opacity-5"
          >
            <div className="w-96 h-96 rounded-full border-4 border-primary" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
