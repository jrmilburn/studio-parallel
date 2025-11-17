"use client"

import GetInTouch from "@/components/get-in-touch";

export default function Services() {

  return (
    <section className="px-6 lg:px-16 py-24 bg-white text-black space-y-24 flex flex-col gap-32 my-16">
      {/* 01 — CORE */}
      <Service
        number="01"
        heading="CORE"
        tagline="Your embedded engineer — on demand."
        body={`A flexible monthly retainer for continuous improvements, backend development, integrations, automations, and workflow optimisation. Ideal for teams that need senior technical support and ongoing development without the overhead of a full-time hire.`}
        included={[
          "Backend development & refactoring",
          "New features & enhancements",
          "Workflow automation & scripting",
          "API integrations",
          "System optimisation & cleanup",
          "Data syncing & internal tooling",
          "Technical guidance & architecture support",
          "Ongoing monitoring & improvements",
        ]}
      />

      {/* 02 — BUILD */}
      <Service
        number="02"
        heading="BUILD"
        tagline="Your system, fully custom."
        body={`Project-based engagements to design and build software that fits the way your business actually operates. From internal tools and client portals to full applications, we handle architecture, development, and launch so you end up with a system that feels built just for you — because it is.`}
        included={[
          "Discovery workshops & requirements definition",
          "User flows, UX structure & interface planning",
          "Technical architecture & system design",
          "Full-stack development (frontend, backend & database)",
          "Integration with existing tools & APIs",
          "Testing, QA & performance optimisation",
          "Deployment, hosting & environment setup",
          "Handover, documentation & transition into CORE for ongoing support",
        ]}
      />

      {/* 03 — INTEGRATE */}
      <Service
        number="03"
        heading="INTEGRATE"
        tagline="Make your tools talk to each other."
        body={`Focused integration and automation work to connect your existing systems, remove manual steps, and keep data flowing cleanly between tools. Ideal for teams drowning in copy–paste workflows, double entry, or systems that were never designed to work together.`}
        included={[
          "Audit of your current tools, data flows & bottlenecks",
          "Design of integration & automation architecture",
          "API integrations between key systems (CRM, billing, booking, internal apps, etc.)",
          "Webhook-based event handling & background jobs",
          "Data syncing, transformation & validation",
          "Internal dashboards or admin tools around integrated systems",
          "Logging, error handling & alerting for critical workflows",
          "Technical documentation & knowledge transfer",
        ]}
      />
    </section>
  );
}

function Service({
  number,
  heading,
  tagline,
  body,
  included,
}: {
  number: string;
  heading: string;
  tagline: string;
  body: string;
  included: string[];
}) {
  return (
    <div className="relative max-w-6xl mx-auto border-t border-black/10 pt-16 lg:pt-24">
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
    <section className="px-6 lg:px-16 py-20 bg-white text-black" id="services">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Label + Heading */}
        <div className="space-y-4">
          <p className="text-xs tracking-[0.25em] uppercase text-black/40">
            Services
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-8">
            Three ways to work with Studio Parallel.
          </h2>
          <p className="text-base lg:text-lg text-black/60 max-w-2xl mb-8">
            Every business we work with is different — but most needs fall into one
            of three patterns. Ongoing support, a new system, or better connections
            between the tools you already use. Our services are shaped around those
            realities so you get exactly what you need, without the noise.
          </p>
        </div>

        {/* Tiny overview of the three modes */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-2">
            <p className="text-xs tracking-[0.25em] uppercase text-black/40">
              01 · Core
            </p>
            <p className="text-sm lg:text-base text-black/70">
              A monthly embedded engineer to maintain, improve and extend your
              existing systems.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-xs tracking-[0.25em] uppercase text-black/40">
              02 · Build
            </p>
            <p className="text-sm lg:text-base text-black/70">
              Project-based builds for new products, internal tools, platforms and
              client-facing systems.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-xs tracking-[0.25em] uppercase text-black/40">
              03 · Integrate
            </p>
            <p className="text-sm lg:text-base text-black/70">
              Integrations and automations that connect your stack and remove
              manual, repetitive work.
            </p>
          </div>
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
          Ready to build something that fits your business?
        </h2>

        <p className="text-lg lg:text-xl text-black/60 max-w-2xl mx-auto">
          Tell us about your goals, systems, and challenges. We’ll prepare a tailored proposal
          and recommend the best way to work together.
        </p>

        <GetInTouch />

      </div>
    </section>
  );
}


