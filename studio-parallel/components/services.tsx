"use client"

import { motion, type Variants, cubicBezier } from "framer-motion"

const ease = cubicBezier(0.25, 0.1, 0.25, 1) // ✅ typed EasingFunction

const container: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease,                 // ✅ use the function, not number[]
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease }, // ✅
  },
}

export default function Services() {
  return (
    <section className="relative bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-32">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-16"
        >
          <motion.div variants={item}>
            <ServiceCard
              title="Embedded Engineering"
              description="We integrate with your team as dedicated engineers, shipping code alongside you — not for you."
            />
          </motion.div>
          <motion.div variants={item}>
            <ServiceCard
              title="Product Delivery"
              description="From concept to production, we help shape, design, and build fast — focusing on outcomes, not just output."
            />
          </motion.div>
          <motion.div variants={item}>
            <ServiceCard
              title="Systems & Scale"
              description="We help teams harden performance, optimize architecture, and scale cleanly as you grow."
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}



interface ServiceCardProps {
  title: string
  description: string
}

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
      }}
      className="relative group rounded-2xl border border-white/10 bg-white/[0.03] p-8 
                 backdrop-blur-sm transition-all duration-300 hover:border-white/20"
    >
      {/* Subtle border glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-white/70 leading-relaxed">{description}</p>
    </motion.div>
  )
}
