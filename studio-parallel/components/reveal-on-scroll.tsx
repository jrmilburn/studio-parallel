// components/RevealOnScroll.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

type RevealOnScrollProps = {
  children: React.ReactNode;
  /** "up" means it moves up into place, "down" moves down into place */
  direction?: "up" | "down";
  /** How far (in px) it travels before settling */
  distance?: number;
  /** Delay (s) before the animation starts once in view */
  delay?: number;
  /** Portion of element that must be visible to trigger (0–1) */
  amount?: number;
  /** Only animate once (recommended) */
  once?: boolean;
  /** Stagger children if you pass multiple inline nodes */
  staggerChildren?: boolean;
  /** Fixed animation duration in seconds */
  duration?: number;
};

export default function RevealOnScroll({
  children,
  direction = "up",
  distance = 24,
  delay = 0,
  amount = 0.25,
  once = true,
  staggerChildren = false,
  duration = 0.5,
}: RevealOnScrollProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once, amount });

  const y = prefersReducedMotion ? 0 : (direction === "up" ? distance : -distance);

  const parent = {
    hidden: {},
    show: {
      transition: staggerChildren
        ? { staggerChildren: 0.06, delayChildren: delay }
        : { delay: 0 },
    },
  };

  const child = {
    hidden: { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : {
            duration,
            ease: "easeOut",
            // When not staggering, apply delay on the child
            delay: staggerChildren ? 0 : delay,
          },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={parent}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      style={{ overflow: "hidden", willChange: "transform, opacity" }}
    >
      {staggerChildren ? (
        <div style={{ display: "inline-block" }}>
          {Array.isArray(children)
            ? (children as React.ReactNode[]).map((c, i) => (
                <motion.span key={i} variants={child} style={{ display: "inline-block" }}>
                  {c}
                </motion.span>
              ))
            : (
              <motion.span variants={child} style={{ display: "inline-block" }}>
                {children}
              </motion.span>
            )}
        </div>
      ) : (
        <motion.div variants={child} style={{ display: "inline-block" }}>
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}
