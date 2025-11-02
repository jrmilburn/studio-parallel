"use client"

import { motion, useAnimation } from "framer-motion"
import { useCallback } from "react"

export default function Home() {
  const dockControls = useAnimation()
  const navControls = useAnimation()

  const onSecondWordComplete = useCallback(async () => {
    await new Promise((resolve) => setTimeout(resolve, 600)) // pause after both words
    await dockControls.start("dock") // keeps the scale change (1 -> 0.4)
    navControls.start("show")        // reveal full-width navbar
  }, [dockControls, navControls])

  const list = {
    hidden: { opacity: 0, y: -8 },
    show: {
      opacity: 1, y: 0,
      transition: { duration: 0.5, staggerChildren: 0.08, delayChildren: 0.1 }
    }
  }
  const item = {
    hidden: { opacity: 0, y: -6 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  }

  return (
    <div className="w-full min-h-screen bg-black">
      {/* Centered title that docks to the top and scales down */}
      <motion.div
        className="fixed left-1/2 -translate-x-1/2 z-50 will-change-transform"
        initial="center"
        animate={dockControls}
        variants={{
          center: { y: "40vh", scale: 1 },
          dock: {
            y: 16,           // adjust to align with navbar height
            scale: 0.4,      // <-- size change preserved
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
          },
        }}
      >
        <h1 className="flex gap-4 text-white font-semibold tracking-tight">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl"
          >
            STUDIO
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            onAnimationComplete={onSecondWordComplete}
            className="text-5xl sm:text-6xl md:text-7xl"
          >
            PARALLEL
          </motion.span>
        </h1>
      </motion.div>

      {/* Full-width navbar, evenly spaced around the centered title */}
      <nav className="fixed top-4 left-0 right-0 z-40 h-16">
        <div className="mx-auto h-full w-full px-6">
          <div className="flex h-full items-center">
            {/* Left group */}
            <motion.ul
              className="flex-1 flex items-center justify-around text-white/95 uppercase tracking-wide text-md"
              initial="hidden"
              animate={navControls}
              variants={list}
            >
              <motion.li variants={item}>
                <a href="#projects" className="hover:opacity-80 transition-opacity">Projects</a>
              </motion.li>
              <motion.li variants={item}>
                <a href="#services" className="hover:opacity-80 transition-opacity">Services</a>
              </motion.li>
            </motion.ul>

            {/* Title sits centered above (z-50). This spacer preserves symmetry. */}
            <div className="w-0 pointer-events-none flex-1" />

            {/* Right group */}
            <motion.div
              className="flex-1 flex items-center justify-around"
              initial="hidden"
              animate={navControls}
              variants={list}
            >
              <motion.a variants={item} href="#about" className="text-white/95 uppercase tracking-wide text-md hover:opacity-80 transition-opacity">
                About
              </motion.a>

              <motion.a
                variants={item}
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-md font-medium text-white/95
                           bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 transition-colors"
              >
                Let’s Talk
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15 border border-white/20">+</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </nav>
    </div>
  )
}
