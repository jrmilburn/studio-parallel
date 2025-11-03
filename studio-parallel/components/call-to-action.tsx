"use client"

import { useRef } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion"

type WordProps = {
  children: string
  index: number
  progress: MotionValue<number>   // 0→1 reveal window
  fade: MotionValue<number>       // 1→0 fade-out multiplier
}

const Word = ({ children, index, progress, fade }: WordProps) => {
  const perWord = 0.10
  const gap = 0.06
  const start = index * (perWord + gap)
  const end = start + perWord

  const baseOpacity = useTransform(progress, [start, end], [0, 1], { clamp: true })
  const y = useTransform(progress, [start, end], [24, 0], { clamp: true })
  const blur = useTransform(progress, [start, end], [6, 0], { clamp: true })
  const blurText = useTransform(blur, (b) => `blur(${b}px)`)

  // combine reveal * fade (typed tuple)
  const opacity = useTransform<[number, number], number>(
    [baseOpacity, fade],
    ([o, f]) => o * f
  )

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

  // Section scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 35%"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 18,
    mass: 0.3,
  })

  // Reveal window (earlier and shorter scrub)
  const WINDOW_START = 0.10
  const WINDOW_END = 0.40
  const windowed = useTransform(smoothProgress, [WINDOW_START, WINDOW_END], [0, 1], { clamp: true })

  // Abrupt fade near the end of the section
  const FADE_START = 0.90
  const FADE_END = 0.96
  const fade = useTransform(smoothProgress, [FADE_START, FADE_END], [1, 0], { clamp: true })

  const tagline = ["Building", "what", "matters", "to", "YOU."]

  // Subline (reveal → then fade)
  const subOpacityBase = useTransform(windowed, [0.65, 0.85], [0, 1], { clamp: true })
  const subOpacity = useTransform<[number, number], number>(
    [subOpacityBase, fade],
    ([o, f]) => o * f
  )
  const subY = useTransform(windowed, [0.75, 1], [20, 0], { clamp: true })

  // CTA reveal late, then fade abruptly with everything else
  const ctaOpacityBase = useTransform(windowed, [0.9, 1], [0, 1], { clamp: true })
  const ctaOpacity = useTransform<[number, number], number>(
    [ctaOpacityBase, fade],
    ([o, f]) => o * f
  )
  const ctaYReveal = useTransform(windowed, [0.9, 1], [12, 0], { clamp: true })
  const ctaYAway = useTransform(smoothProgress, [FADE_START, FADE_END], [0, 10], { clamp: true })
  const ctaY = useTransform<[number, number], number>(
    [ctaYReveal, ctaYAway],
    ([a, b]) => a + b
  )
  const ctaScale = useTransform(windowed, [0.9, 1], [0.96, 1], { clamp: true })
  const ctaEvents = useTransform<number, "auto" | "none">(
    windowed,
    (v) => (v >= 0.95 ? "auto" : "none")
  )

  return (
    <div ref={sectionRef} className="h-[200vh] bg-white">
      <div className="sticky top-0 h-screen grid place-items-center">
        <div className="text-center px-6">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight">
            {tagline.map((word, i) => (
              <Word key={i} index={i} progress={windowed} fade={fade}>
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

        {/* Bottom-right CTA */}
        <motion.a
          href="#services"
          style={{ opacity: ctaOpacity, y: ctaY, scale: ctaScale, pointerEvents: ctaEvents }}
          className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full px-5 py-2
                     text-sm md:text-base font-medium text-white bg-neutral-900/95 hover:bg-neutral-900
                     border border-neutral-800 shadow-lg backdrop-blur-sm transition"
          aria-label="See what we do"
        >
          See what we do
          <span className="grid h-6 w-6 place-items-center rounded-full bg-white/10 border border-white/20">→</span>
        </motion.a>
      </div>
    </div>
  )
}
