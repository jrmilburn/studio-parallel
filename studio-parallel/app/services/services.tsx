"use client";

import GetInTouch from "@/components/get-in-touch";
import HoverAnimate from "@/components/hover-animate";
import Link from "next/link";

export default function Services() {
  return (
    <section className="px-6 lg:px-16 py-24 bg-white text-black space-y-24 flex flex-col gap-32 my-16">
      {/* 01 — INTEGRATE */}
      <div className="h-[70vh] md:h-screen flex items-center" id="integrate">
        <Service
          number="01"
          heading="INTEGRATE"
          tagline="Make your tools talk to each other."
          body={`We connect the tools you already use so data moves automatically and your team stops copy-pasting. Perfect when the problem is “too many disconnected systems”, not “no system at all.”`}
          processFit={`Often the first implementation step after the Blueprint when your main issue is disconnected tools. We start with the highest-friction workflow and automate it end-to-end.`}
          included={[
            "Audit of current tools, data flows & bottlenecks",
            "Integration & automation architecture design",
            "API integrations between key systems (CRM, billing, booking, etc.)",
            "Webhook-based event handling & background jobs",
            "Data syncing, transformation & validation",
            "Internal dashboards or admin tools over integrated systems",
            "Logging, error handling & alerts for critical workflows",
            "Technical documentation & knowledge transfer",
          ]}
        />
      </div>

      {/* 02 — BUILD */}
      <div className="h-[70vh] md:h-screen flex items-center" id="build">
        <Service
          number="02"
          heading="BUILD"
          tagline="Your system, fully custom."
          body={`We design and build software around how your business actually works — internal tools, client portals, or full platforms. You get a system that maps to your workflows instead of forcing you to bend to someone else’s product.`}
          processFit={`Used after the Discovery Call + Blueprint when you need a new system. We turn the agreed plan into a working product, delivered in clear, testable slices.`}
          included={[
            "Discovery & requirements based on your Blueprint",
            "User flows, UX structure & interface planning",
            "Technical architecture & system design",
            "Full-stack development (frontend, backend, database)",
            "Integration with existing tools & APIs",
            "Testing, QA & performance optimisation",
            "Deployment, hosting & environment setup",
            "Handover, documentation & option to move into CORE",
          ]}
        />
      </div>

      {/* 03 — CORE */}
      <div className="h-[70vh] md:h-screen flex items-center" id="core">
        <Service
          number="03"
          heading="CORE"
          tagline="Your embedded engineer — on demand."
          body={`A flexible monthly retainer for continuous improvements, fixes and small builds. Ideal once your main system or integrations are live and you want a trusted partner to keep everything moving.`}
          processFit={`Comes after a Build or Integrate project once the main system is in place. We keep your stack healthy, ship from a shared backlog and respond to new priorities each month.`}
          included={[
            "Small features and improvements shipped regularly",
            "Backend development & refactoring",
            "Workflow automation tweaks & scripting",
            "New or updated API integrations",
            "Performance, reliability & cleanup work",
            "Internal tools and dashboards",
            "Architecture & technical guidance",
            "Monitoring, bug triage & fixes",
          ]}
        />
      </div>
    </section>
  );
}

function Service({
  number,
  heading,
  tagline,
  body,
  processFit,
  included,
}: {
  number: string;
  heading: string;
  tagline: string;
  body: string;
  processFit: string;
  included: string[];
}) {
  return (
    <div className="relative max-w-6xl mx-auto border-t border-black/10 pt-8 lg:pt-24">
      {/* Ghost number */}
      <span className="pointer-events-none select-none absolute -top-8 lg:-top-16 -left-2 lg:-left-6 text-6xl lg:text-[8rem] font-light text-black/5 leading-none">
        {number}
      </span>

      <div className="grid gap-12 lg:gap-20 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        {/* Left column */}
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs tracking-[0.25em] uppercase text-black/40">
              Service
            </p>
            <h3 className="text-4xl lg:text-5xl font-semibold tracking-tight">
              {heading}
            </h3>
          </div>

          <div className="space-y-3">
            <p className="text-lg lg:text-xl text-black/80">{tagline}</p>
            <p className="text-base lg:text-lg text-black/60 max-w-xl">
              {body}
            </p>
          </div>

          {/* Where this fits */}
          <div className="space-y-1">
            <p className="text-xs tracking-[0.25em] uppercase text-black/40">
              Where this fits
            </p>
            <p className="text-sm lg:text-base text-black/70 max-w-xl">
              {processFit}
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-4 self-center">
          <p className="text-xs tracking-[0.25em] uppercase text-black/40">
            What’s Included
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 text-sm lg:text-base">
            {included.map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="mt-[6px] min-h-1.5 min-w-1.5 rounded-full bg-[#A64DFF]" />
                <span className="text-black/70 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServicesIntro() {
  return (
    <section className="px-6 lg:px-16 py-10 bg-white text-black" id="services">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Label + Heading */}
        <div className="space-y-4">
          <p className="text-xs tracking-[0.25em] uppercase text-black/40">
            Services
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
            Three ways to work with Studio Parallel.
          </h2>
          <p className="text-base lg:text-lg text-black/60 max-w-2xl">
            Most work falls into one of three modes: connecting the tools you already
            use, building something new around your workflows, or keeping an embedded
            engineer on your side long-term.
          </p>
        </div>

        {/* Overview of the three modes */}
        <div className="grid gap-8 md:grid-cols-3 pt-4">
          <div className="space-y-2">
            <p className="text-xs tracking-[0.25em] uppercase text-black/40">
              <Link href="#integrate">
                <HoverAnimate>01 · Integrate</HoverAnimate>
              </Link>
            </p>
            <p className="text-sm lg:text-base text-black/70">
              When your tools are fine, but they don’t talk. We connect them and
              automate the repetitive work.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-xs tracking-[0.25em] uppercase text-black/40">
              <Link href="#build">
                <HoverAnimate>02 · Build</HoverAnimate>
              </Link>
            </p>
            <p className="text-sm lg:text-base text-black/70">
              When your Blueprint shows you need a new product, portal or internal
              system built around your workflows.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-xs tracking-[0.25em] uppercase text-black/40">
              <Link href="#core">
                <HoverAnimate>03 · Core</HoverAnimate>
              </Link>
            </p>
            <p className="text-sm lg:text-base text-black/70">
              Ongoing help from an embedded engineer once your core system or
              integrations are in place.
            </p>
          </div>
        </div>

        {/* How it works – below, non-numbered */}
        <div className="pt-6 border-t border-black/10 mt-4 space-y-4">
          <div className="space-y-3 text-sm lg:text-base text-black/70">
            <p className="font-medium">How it works in practice:</p>

            <ul className="space-y-2 list-disc list-outside">
              <li>
                <span className="font-medium">Discovery call</span> — we talk through
                your business, systems and bottlenecks.
              </li>
              <li>
                <span className="font-medium">Blueprint</span> — we map the key
                workflows, interfaces and implementation options.
              </li>
              <li>
                <span className="font-medium">Implementation</span> — we execute
                through <span className="font-semibold">Integrate</span> or{" "}
                <span className="font-semibold">Build</span>, then support you
                long-term with <span className="font-semibold">Core</span> if it
                makes sense.
              </li>
            </ul>
          </div>

          {/* Subtle Process Page Link */}
          <Link
            href="/process"
            className="text-xs lg:text-sm text-black/40 transition-colors flex items-center gap-1 group"
          >
            <HoverAnimate>View the full process</HoverAnimate> <span aria-hidden className="group-hover:translate-x-[2px] transition-all">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}



export function ServicesCTA() {
  return (
    <section className="px-6 lg:px-16 py-32 bg-white text-black border-t border-black/10">
      <div className="max-w-4xl mx-auto text-center space-y-8 flex flex-col items-center">
        <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
          Start with a simple conversation.
        </h2>

        <p className="text-lg lg:text-xl text-black/60 max-w-2xl mx-auto">
          Share where your systems are today and where you want them to be. We’ll
          recommend a path, outline a Blueprint, and show whether Integrate, Build
          or Core is the best next step.
        </p>

        <GetInTouch />
      </div>
    </section>
  );
}
