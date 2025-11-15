// components/RevealOnScroll.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

type RevealOnScrollProps = {
  children: React.ReactNode;
  direction?: "up" | "down";
  distance?: number;
  delay?: number;
  amount?: number;
  once?: boolean;
  staggerChildren?: boolean;
  duration?: number;
  /**
   * If provided, this manually controls whether the content
   * is shown or hidden, instead of using the in-view state.
   */
  active?: boolean;
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
  active,
}: RevealOnScrollProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once, amount });

  const y = prefersReducedMotion ? 0 : direction === "up" ? distance : -distance;

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
            delay: staggerChildren ? 0 : delay,
          },
    },
  };

  // If `active` is provided, it overrides inView.
  const shouldShow = typeof active === "boolean" ? active : inView;

  return (
    <motion.div
      ref={ref}
      variants={parent}
      initial="hidden"
      animate={shouldShow ? "show" : "hidden"}
      style={{ overflow: "hidden", willChange: "transform, opacity" }}
    >
      {staggerChildren ? (
        <div style={{ display: "inline-block" }}>
          {Array.isArray(children) ? (
            (children as React.ReactNode[]).map((c, i) => (
              <motion.span key={i} variants={child} style={{ display: "inline-block" }}>
                {c}
              </motion.span>
            ))
          ) : (
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
