"use client";

import { motion } from "motion/react";
import NetworkList from "./networks/network-list";
import NetworkShader from "./networks/networks-shader";

export default function NetworkSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-24 bg-gradient-to-br from-background via-background/95 to-muted/30">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
          Find me across different platforms and let's start a conversation
        </p>
      </motion.div>

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-end"
        >
          <NetworkShader />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-start"
        >
          <NetworkList />
        </motion.div>
      </div>
    </section>
  );
}
