import { motion } from "motion/react";
import { networks } from "@/consts/networks";
import type { Network } from "@/types/network";
import NetworkListElement from "./network-list-element";

export default function NetworkList() {
  return (
    <div className="w-full max-w-md">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        {networks.map((network: Network, index) => (
          <motion.div
            key={network.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <NetworkListElement
              icon={network.icon}
              link={network.link}
              title={network.name}
              description={network.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
