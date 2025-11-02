"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion"

const Word = ({
  children,
  index,
  progress,
}: {
  children: string
  index: number
  progress: MotionValue<number>
}) => {
  // Staggered per-word windows along the 0→1 progress
  const start = index * 0.12
  const end = start + 0.18

  const opacity = useTransform(progress, [start, end], [0, 1])
  const y = useTransform(progress, [start, end], [24, 0])
  const blur = useTransform(progress, [start, end], [6, 0])
  const blurText = useTransform(blur, (b) => `blur(${b}px)`) // v7–v9 friendly

  return (
    <motion.span
      style={{ opacity, y, filter: blurText }}
      className="inline-block mr-3 will-change-transform"
    >
      {children}
    </motion.span>
  )
}

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // 0 when the section's top hits the viewport top (i.e., fully in view for the sticky h-screen),
    // 1 when the section's bottom hits the viewport top.
    offset: ["start start", "end start"],
  })

  // Smooth the progress so the motion eases to a stop when the user stops scrolling
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,   // lower = softer follow
    damping: 10,     // higher = less bounce
    mass: 0.35,
  })

  const tagline = ["Building", "what", "matters", "to", "YOU."]

  // Subline reveals toward the end of the section's scroll
  const subOpacity = useTransform(smoothProgress, [0.6, 0.65], [0, 1])
  const subY = useTransform(smoothProgress, [0.65, 0.85], [20, 0])

  return (
    <div ref={sectionRef} className="h-[300vh] bg-white">
      {/* Sticky viewport that occupies full screen while we scrub through progress */}
      <div className="sticky top-0 h-screen grid place-items-center">
        <div className="text-center px-6">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight">
            {tagline.map((word, i) => (
              <Word key={i} index={i} progress={smoothProgress}>
                {word}
              </Word>
            ))}
          </h2>

          <motion.div style={{ opacity: subOpacity, y: subY }} className="mt-6 text-black">
            <p className="text-base md:text-lg">
              Embedded engineers for ambitious teams.
            </p>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-white
                         bg-black hover:bg-black/90 transition-colors"
            >
              Let’s Talk
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15 border border-white/20">+</span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
