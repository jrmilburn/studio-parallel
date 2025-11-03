"use client";

import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

/* ----------------------------- data ----------------------------- */

type Review = {
  quote: string;
  author: string;
  role?: string;
  href?: string; // link to full review/case study
};

type Section = {
  id: string;
  title: string;
  tagline: string;
  bullets: string[];
  review: Review; // exactly one review per service
};

const SECTIONS: Section[] = [
  {
    id: "core",
    title: "Parallel Core",
    tagline: "Your embedded engineer — integrated directly into your team.",
    bullets: [
      "Reliable delivery without the hiring overhead.",
      "Architecture reviews, refactors, performance tuning.",
      "Works in your tools: Linear, Notion, Slack, Jira.",
    ],
    review: {
      quote:
        "They felt in-house within a week — velocity up, quality steady. Exactly what we needed.",
      author: "A. Morgan",
      role: "Head of Product",
      href: "/work#core",
    },
  },
  {
    id: "build",
    title: "Parallel Build",
    tagline: "From concept to product — we design, build, and ship.",
    bullets: [
      "Discovery → milestones → deploy. No ambiguity.",
      "Next.js + TypeScript + Prisma + modern CI/CD.",
      "Documentation and clean handover included.",
    ],
    review: {
      quote:
        "MVP in six weeks and still the foundation we scale on. Fast, pragmatic, dependable.",
      author: "L. Chen",
      role: "CEO",
      href: "/work#build",
    },
  },
  {
    id: "integrate",
    title: "Parallel Integrate",
    tagline: "Connect your tools and automate the busywork.",
    bullets: [
      "Robust APIs & webhooks (Stripe, Twilio, Xero, GHL).",
      "Retries, logging, monitoring baked in.",
      "Less manual ops, more signal.",
    ],
    review: {
      quote:
        "Support tickets dropped 40% after the pipelines went live — hours back every day.",
      author: "M. Silva",
      role: "Ops Lead",
      href: "/work#integrations",
    },
  },
];

/* ------------------------- primitives ------------------------- */

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-zinc-200">
      {items.map((b, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-white/40" />
          <span className="leading-relaxed">{b}</span>
        </li>
      ))}
    </ul>
  );
}

function ReviewCard({ r }: { r: Review }) {
  return (
    <blockquote
      className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7 backdrop-blur shadow-2xl will-change-transform"
      aria-label="Client review"
    >
      <p className="text-zinc-100 leading-relaxed">“{r.quote}”</p>
      <footer className="mt-4 text-sm text-zinc-400">
        <span className="font-medium text-zinc-200">{r.author}</span>
        {r.role ? ` — ${r.role}` : null}
      </footer>
      {r.href && (
        <Link
          href={r.href}
          className="mt-5 inline-block text-sm text-zinc-300 hover:text-white transition"
          aria-label="Read full review"
        >
          Read full review →
        </Link>
      )}
    </blockquote>
  );
}

/* ------------------------ section (sticky + one-time trigger) ------------------------ */

export function StickyServiceOneShot({
  s,
  trigger = 0.5, // progress threshold (0=start of section, 1=end)
  enter = { x: 0, opacity: 1, clipPath: "inset(0% 0% 0% 0%)" },
  exit = { x: 64, opacity: 0, clipPath: "inset(0% 0% 0% 100%)" },
}: {
  s: Section;
  trigger?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  enter?: Record<string, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  exit?: Record<string, any>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reviewControls = useAnimation();
  const revealedRef = useRef(false); // prevents re-trigger after first reveal

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Respect prefers-reduced-motion: immediately show review, skip animations
  useEffect(() => {
    const mql =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mql && mql.matches) {
      revealedRef.current = true;
      reviewControls.set(enter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // If user lands part-way through the section (already past trigger), start revealed
  useEffect(() => {
    const current = scrollYProgress.get();
    if (!revealedRef.current && current >= trigger) {
      revealedRef.current = true;
      reviewControls.set(enter);
    } else if (!revealedRef.current) {
      reviewControls.set(exit);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // One-shot trigger: reveal once on crossing threshold; never hide again
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (revealedRef.current) return;
    if (v >= trigger) {
      revealedRef.current = true;
      reviewControls.start({
        ...enter,
        transition: { duration: 0.5, ease: [0.22, 0.12, 0.18, 1] },
      });
    }
  });

  return (
    <section
      id={s.id}
      ref={ref}
      data-contrast="dark"
      className="relative min-h-[140vh]"
      aria-label={s.title}
    >
      <div className="sticky top-0 h-screen">
        <div className="mx-auto h-full w-full max-w-6xl px-6 md:px-8">
          <div className="grid h-full items-center gap-10 md:grid-cols-12">
            {/* Left: narrative */}
            <div className="md:col-span-5 will-change-transform">
              <h2 className="text-4xl md:text-5xl font-semibold text-white">
                {s.title}
              </h2>
              <p className="mt-4 text-zinc-300 text-lg leading-relaxed">
                {s.tagline}
              </p>
              <div className="mt-6 md:mt-8">
                <Bullets items={s.bullets} />
              </div>
            </div>

            {/* Right: review panel (reveals once, cannot be re-triggered) */}
            <div className="md:col-span-7 relative">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 md:p-6 overflow-hidden shadow-2xl">
                {/* edge fades for polish */}
                <div className="pointer-events-none absolute inset-y-4 left-4 w-10 bg-gradient-to-r from-black/30 to-transparent rounded-l-xl" />
                <div className="pointer-events-none absolute inset-y-4 right-4 w-10 bg-gradient-to-l from-black/30 to-transparent rounded-r-xl" />

                <motion.div initial={exit} animate={reviewControls}>
                  <ReviewCard r={s.review} />
                </motion.div>
              </div>

              {/* Slim progress bar (cosmetic) */}
              <div className="mt-4 h-1 w-full bg-white/10 rounded" aria-hidden>
                <motion.div
                  className="h-1 bg-white/70 rounded"
                  style={{
                    scaleX: scrollYProgress,
                    transformOrigin: "0% 50%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- page block ---------------------------- */

export default function StoryServicesOneReviewEach() {
  return (
    <div className="relative bg-[#0A0A0A]">
      {/* subtle ambient light */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(255,255,255,0.05),transparent)]"
      />
      {/* Minimal intro (CTAs live elsewhere) */}
      <section
        className="relative min-h-[50vh] md:min-h-[60vh] flex items-end md:items-center"
        data-contrast="dark"
      >
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <h1 className="text-5xl md:text-6xl font-semibold text-white">
            Your business, our code.
          </h1>
          <p className="mt-4 text-zinc-300 text-lg md:text-xl max-w-3xl">
            Three ways we build alongside you — and what clients say when it
            ships.
          </p>
        </div>
      </section>

      {SECTIONS.map((s) => (
        <StickyServiceOneShot key={s.id} s={s} trigger={0.52} />
      ))}
    </div>
  );
}
