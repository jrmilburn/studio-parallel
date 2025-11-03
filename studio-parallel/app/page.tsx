"use client"

import { motion, useAnimation } from "framer-motion"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import SocialProof from "@/components/call-to-action"
import Services from "@/components/services"

/* ---------------------- helpers ---------------------- */

function useScrollLock() {
  const y = useRef(0)
  const lock = useCallback(() => {
    if (typeof window === "undefined") return
    y.current = window.scrollY
    const b = document.body
    b.style.position = "fixed"
    b.style.top = `-${y.current}px`
    b.style.left = "0"
    b.style.right = "0"
    b.style.width = "100%"
    b.style.overflow = "hidden"
  }, [])
  const unlock = useCallback(() => {
    if (typeof window === "undefined") return
    const b = document.body
    b.style.position = ""
    b.style.top = ""
    b.style.left = ""
    b.style.right = ""
    b.style.width = ""
    b.style.overflow = ""
    window.scrollTo(0, y.current)
  }, [])
  return { lock, unlock }
}

function useScrollDirection(opts: { threshold?: number } = {}) {
  const { threshold = 6 } = opts
  const lastY = useRef(0)
  const [dir, setDir] = useState<"up" | "down">("up")

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        const d = y - lastY.current
        if (Math.abs(d) > threshold) {
          setDir(d > 0 ? "down" : "up")
          lastY.current = y
        }
        ticking = false
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [threshold])

  return dir
}

function useTopContrast() {
  const [contrast, setContrast] = useState<"dark" | "light">("dark")
  useEffect(() => {
    const pick = () => {
      const el = document.elementFromPoint(window.innerWidth / 2, 72)
      let node = (el as HTMLElement) ?? null
      let found: "dark" | "light" | null = null
      while (node && node !== document.body) {
        const v = node.getAttribute?.("data-contrast")
        if (v === "dark" || v === "light") { found = v; break }
        node = node.parentElement as HTMLElement
      }
      if (found && found !== contrast) setContrast(found)
    }
    const handler = () => requestAnimationFrame(pick)
    pick()
    window.addEventListener("scroll", handler, { passive: true })
    window.addEventListener("resize", handler)
    return () => {
      window.removeEventListener("scroll", handler)
      window.removeEventListener("resize", handler)
    }
  }, [contrast])
  return contrast
}

/* ---------------------- page ---------------------- */

export default function Home() {
  const dockControls = useAnimation()    // title docking (position/scale)
  const navControls = useAnimation()     // nav items in
  const barControls = useAnimation()     // shared visibility for nav + title
  const { lock, unlock } = useScrollLock()

  // lock until intro finishes
  useEffect(() => { lock(); return () => unlock() }, [lock, unlock])

  const onSecondWordComplete = useCallback(async () => {
    await new Promise((r) => setTimeout(r, 600))
    await dockControls.start("dock")
    await navControls.start("show")
    await barControls.start({ y: "0%", opacity: 1 }) // ensure visible after intro
    unlock()
  }, [dockControls, navControls, barControls, unlock])

  // hide on down, show on up (drives nav + title together)
  const dir = useScrollDirection({ threshold: 8 })
  useEffect(() => {
    if (dir === "down") {
      barControls.start({ y: "-120%", opacity: 0.9, transition: { duration: 0.28, ease: [0.2, 0, 0.2, 1] } })
    } else {
      barControls.start({ y: "0%", opacity: 1, transition: { duration: 0.28, ease: [0.2, 0, 0.2, 1] } })
    }
  }, [dir, barControls])

  // dynamic coloring based on section underneath the bar
  const contrast = useTopContrast()
  const isDark = contrast === "dark"
  const textCls = isDark ? "text-white/95" : "text-black/90"
  const hoverCls = isDark ? "hover:opacity-80" : "hover:opacity-70"
  const pillCls = useMemo(
    () =>
      isDark
        ? "text-white/95 bg-white/10 hover:bg-white/15 border border-white/15"
        : "text-black/90 bg-black/[0.06] hover:bg-black/[0.1] border border-black/10",
    [isDark]
  )

  const list = {
    hidden: { opacity: 0, y: -8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.08, delayChildren: 0.1 } },
  }
  const item = {
    hidden: { opacity: 0, y: -6 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <>
      {/* HERO (dark) */}
      <div data-contrast="dark" className="w-full min-h-screen bg-black">
        {/* TITLE: visibility controlled by barControls, position/docking by dockControls */}
        <motion.div
          // full-screen wrapper so inner y:"40vh" is relative to the viewport again
          className="fixed inset-0 z-50 pointer-events-none"
          initial={{ y: 0, opacity: 1 }}
          animate={barControls} // slides out on scroll down, back in on up
        >
          {/* Inner: same centering/docking as your original */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 will-change-transform"
            initial="center"
            animate={dockControls}
            variants={{
              center: { y: "40vh", scale: 1 },
              dock: {
                y: 16,
                scale: 0.4,
                transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
              },
            }}
            style={{ originX: 0.5, originY: 0.5 }}
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
        </motion.div>


        {/* NAVBAR (shares barControls visibility) */}
        <motion.nav
          className="fixed top-4 left-0 right-0 z-40 h-16"
          initial={{ y: "-120%", opacity: 0 }}
          animate={barControls}
        >
          <div className="mx-auto h-full w-full px-6">
            <div className="flex h-full items-center">
              <motion.ul
                className={`flex-1 flex items-center justify-around uppercase tracking-wide text-md ${textCls}`}
                initial="hidden"
                animate={navControls}
                variants={list}
              >
                <motion.li variants={item}>
                  <a href="#projects" className={`${hoverCls} transition-opacity`}>Projects</a>
                </motion.li>
                <motion.li variants={item}>
                  <a href="#services" className={`${hoverCls} transition-opacity`}>Services</a>
                </motion.li>
              </motion.ul>

              <div className="w-0 pointer-events-none flex-1" />

              <motion.div
                className="flex-1 flex items-center justify-around"
                initial="hidden"
                animate={navControls}
                variants={list}
              >
                <motion.a variants={item} href="#about" className={`uppercase tracking-wide text-md ${textCls} ${hoverCls} transition-opacity`}>
                  About
                </motion.a>

                <motion.a
                  variants={item}
                  href="#contact"
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-md font-medium transition-colors backdrop-blur-md ${pillCls}`}
                >
                  Let’s Talk
                  <span className={`grid h-6 w-6 place-items-center rounded-full ${isDark ? "bg-white/15 border-white/20" : "bg-black/[0.08] border-black/15"} border`}>+</span>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.nav>
      </div>

      {/* Subsequent sections declare contrast so nav/title color switches correctly */}
      <div id="social" data-contrast="light">
        <SocialProof />
      </div>

      <div id="services" data-contrast="light">
        <Services />
      </div>
    </>
  )
}
