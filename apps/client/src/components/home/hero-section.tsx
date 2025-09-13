"use client";
import { motion } from "motion/react";
import ShaderBackground from "@/components/system/shader-background";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <ShaderBackground>
      <div className="flex flex-col items-start justify-center min-h-screen px-6 md:px-12 lg:px-24 py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
              },
            },
          }}
          className="text-left"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-6xl md:leading-16 tracking-tight font-light  mb-4"
          >
            <span className="font-medium italic instrument">Welcome to</span> RT
            <br />
            <span className="font-light tracking-tight">Experience</span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-xs font-light mb-4 leading-relaxed"
          >
            I'm Rayan Traore, a passionate developer and just a guy with a lot
            of ideas. This portfolio showcases my best work and skills in
            action.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex gap-4 mt-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button variant="outline">Projects</Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button>Contact</Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </ShaderBackground>
  );
}
