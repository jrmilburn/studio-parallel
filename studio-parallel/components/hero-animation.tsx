"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimationBlock from "./animation-block";

export default function HeroAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll progress relative to the hero section
  const { scrollYProgress } = useScroll({
    target: ref,
    // Start scaling once the hero begins leaving viewport
    offset: ["start start", "end start"],
  });

  // Map scroll progress (0→1) to scale range (1→0.8)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      className="absolute inset-0 origin-center z-0"
    >
      <AnimationBlock pos="1" />
      <AnimationBlock pos="2" />
      <AnimationBlock pos="3" />
      <AnimationBlock pos="4" />
      <AnimationBlock pos="5" />
      <AnimationBlock pos="6" />
    </motion.div>
  );
}
