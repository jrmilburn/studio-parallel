"use client";

import GetInTouch from "@/components/get-in-touch";
import HeroSection from "./hero-section";

export default function ProcessPage() {
  return (
    <main className="bg-white text-black">
      <HeroSection />
      <ProcessIntro />
      <ProcessSteps />
      <ProcessCTA />
    </main>
  );
}

function ProcessIntro() {
  return (
    <section className="px-6 lg:px-16 py-20" id="process">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="space-y-4">
          <p className="text-xs tracking-[0.25em] uppercase text-black/40">
            Process
          </p>
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight">
            A simple path from mess to working software.
          </h1>
          <p className="text-base lg:text-lg text-black/60 max-w-2xl">
            Every engagement runs through the same backbone: a focused
            conversation, a clear Blueprint, and a deliberate implementation.
            Whether the right move is integrations, a new build, or ongoing
            support, we follow the same structure so you always know what’s next.
          </p>
        </div>
        <p className="text-sm lg:text-base text-black/50 max-w-2xl">
          The aim is simple — understand how your business actually works, turn
          that into a concrete plan, then ship software and automations that
          support it. No mystery, no black box, just a repeatable process that
          scales from small integrations to full platforms.
        </p>
      </div>
    </section>
  );
}

function ProcessSteps() {
  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      body:
        "We start with a short, focused call to understand your business, how work currently gets done, and where things are breaking down. We capture pain points, constraints, and what ‘better’ would actually look like for you and your team.",
    },
    {
      number: "02",
      title: "Blueprint",
      body:
        "Next, we map key workflows, data flows and interfaces into a simple Blueprint: what should happen, who it affects, and which systems are involved. You’ll see the proposed architecture and, where useful, lightweight UI mockups and example flows — before any serious build begins.",
    },
    {
      number: "03",
      title: "Implement",
      body:
        "With the Blueprint agreed, we choose the right implementation path. Sometimes that’s INTEGRATE — connecting and automating the tools you already use. Other times it’s BUILD — creating a new internal tool, portal or platform that fits your workflows. In both cases, we deliver in small, reviewable slices.",
    },
    {
      number: "04",
      title: "Stabilise & Evolve",
      body:
        "Once something real is in your hands, we tighten it up: handle edge cases, refine UX, and make sure the system behaves reliably under real usage. From here, you can either wrap up the project or move into CORE — a steady cadence of improvements with an embedded engineer on your side.",
    },
  ];

  return (
    <section className="px-6 lg:px-16 pb-24">
      <div className="max-w-6xl mx-auto border-t border-black/10 pt-12 lg:pt-16 space-y-10">
        <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight">
          The way we work, step by step.
        </h2>

        <div className="space-y-10">
          {steps.map((step) => (
            <div key={step.number} className="relative pl-10 lg:pl-16">
              {/* Ghost number */}
              <span className="pointer-events-none select-none absolute -top-4 left-0 text-4xl lg:text-5xl font-light text-black/5">
                {step.number}
              </span>

              <div className="space-y-2">
                <p className="text-xs tracking-[0.25em] uppercase text-black/40">
                  Step {step.number}
                </p>
                <h3 className="text-xl lg:text-2xl font-semibold">
                  {step.title}
                </h3>
                <p className="text-sm lg:text-base text-black/60 max-w-3xl">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessCTA() {
  return (
    <section className="px-6 lg:px-16 py-24 border-t border-black/10">
      <div className="max-w-4xl mx-auto text-center space-y-6 flex flex-col items-center">
        <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
          Have a system in mind — or just a mess to untangle?
        </h2>
        <p className="text-base lg:text-lg text-black/60 max-w-2xl">
          Share where your tools, workflows and team are today. We’ll run your
          situation through this process, suggest a first step, and show whether
          Integrate, Build or Core is the right way to start.
        </p>
        <GetInTouch />
      </div>
    </section>
  );
}
