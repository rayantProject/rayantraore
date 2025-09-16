"use client";

import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

interface EarthProps {
  scale?: number;
  position?: [number, number, number];
  [key: string]: unknown;
}

function Earth(props: EarthProps) {
  const { scene } = useGLTF("/models/earth-cartoon.glb");
  return (
    <primitive object={scene} scale={1.5} position={[0, 0, 0]} {...props} />
  );
}

export default function ContactEarth() {
  const { resolvedTheme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="w-full h-[350px] md:h-[450px] lg:h-[500px] relative rounded-2xl overflow-hidden  cursor-pointer"
    >
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={resolvedTheme === "dark" ? 0.4 : 1.2} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={resolvedTheme === "dark" ? 0.8 : 1.2}
        />
        <pointLight
          position={[-5, -5, 5]}
          intensity={resolvedTheme === "dark" ? 0.3 : 0.5}
          color={resolvedTheme === "dark" ? "#4F46E5" : "#60A5FA"}
        />

        <Earth />

        <OrbitControls
          autoRotate
          autoRotateSpeed={0.8}
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={(3 * Math.PI) / 4}
        />
      </Canvas>
    </motion.div>
  );
}
