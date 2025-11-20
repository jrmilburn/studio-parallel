// components/RevealOnScroll.tsx
"use client";

import {
  motion,
  useReducedMotion,
  useInView,
  type Variants,
  type Transition,
} from "framer-motion";
import { useRef } from "react";

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
  className?: string;
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
  className,
}: RevealOnScrollProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once, amount });

  const y = prefersReducedMotion ? 0 : direction === "up" ? distance : -distance;

  // Build a base transition so we don't create a union type
  const baseChildTransition: Transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration, ease: "easeOut" };

  const parent: Variants = {
    hidden: {},
    show: {
      transition: {
        // When staggerChildren is false these just become 0, which is fine
        staggerChildren: staggerChildren ? 0.06 : 0,
        delayChildren: staggerChildren ? delay : 0,
      },
    },
  };

  const child: Variants = {
    hidden: { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ...baseChildTransition,
        // Only actually matters when NOT staggering, but always defined
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
      className={className}
    >
      {staggerChildren ? (
        <div style={{ display: "inline-block" }}>
          {Array.isArray(children) ? (
            (children as React.ReactNode[]).map((c, i) => (
              <motion.span
                key={i}
                variants={child}
                style={{ display: "inline-block" }}
              >
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
