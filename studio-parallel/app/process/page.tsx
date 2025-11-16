"use client";

import GetInTouch from "@/components/get-in-touch";
import HeroSection from "./hero-section";

export default function ProcessPage() {
  return (
    <main className="bg-white text-black">
    <HeroSection />
      <ProcessIntro />
      <ProcessSteps />
      <ProcessServiceExamples />
      <ProcessCTA />
    </main>
  );
}

function ProcessIntro() {
  return (
    <section className="px-6 lg:px-16 py-20">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="space-y-4">
          <p className="text-xs tracking-[0.25em] uppercase text-black/40">
            Process
          </p>
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight">
            A simple process for complex systems.
          </h1>
          <p className="text-base lg:text-lg text-black/60 max-w-2xl">
            The specifics of every project are different, but the way we work is
            consistent: understand the system, design around constraints, ship
            something real, then keep improving it.
          </p>
        </div>
        <p className="text-sm lg:text-base text-black/50 max-w-2xl">
          Whether it’s ongoing support, a new build, or integrations between your
          existing tools, the same principles apply — clarity, communication and
          a bias toward getting working software into your hands quickly.
        </p>
      </div>
    </section>
  );
}

function ProcessSteps() {
  const steps = [
    {
      number: "01",
      title: "Discover & Map",
      body: "We start by understanding your current systems, workflows, and constraints. What’s working, what isn’t, and what ‘better’ actually looks like for your team.",
    },
    {
      number: "02",
      title: "Design the Approach",
      body: "We shape how the solution should work: data flows, integrations, user flows, and the smallest viable version that delivers value without breaking everything else.",
    },
    {
      number: "03",
      title: "Build & Integrate",
      body: "We implement the plan — building new features or tools, integrating with existing platforms, and putting the pieces together into a coherent system.",
    },
    {
      number: "04",
      title: "Refine & Support",
      body: "Once it’s live, we monitor, refine, and extend. Fixing edge cases, smoothing rough edges, and supporting your team as they actually use the system.",
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
            <div
              key={step.number}
              className="relative pl-10 lg:pl-16"
            >
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

/**
 * How the process looks specifically for CORE, BUILD, and INTEGRATE.
 */
function ProcessServiceExamples() {
  const examples = [
    {
      label: "Core",
      title: "Ongoing partnership.",
      body: "We work alongside you each month to maintain, improve and extend what you already have.",
      bullets: [
        "We start with a systems audit and backlog of fixes, improvements, and small experiments.",
        "Each month we prioritise together: bugs to remove, workflows to automate, features to ship.",
        "We handle the backend details — deployments, integrations, refactors — while you focus on running the business.",
      ],
    },
    {
      label: "Build",
      title: "A focused project.",
      body: "We treat your new system like a product: scoped, designed, built and launched with clear milestones.",
      bullets: [
        "We run a short discovery to define requirements, constraints, and success metrics.",
        "We design the architecture and user flows, then build in small, reviewable slices.",
        "We launch a first version quickly, then refine based on feedback and real usage.",
      ],
    },
    {
      label: "Integrate",
      title: "Your tools, connected.",
      body: "We design and implement the glue between existing platforms so your stack behaves like one system.",
      bullets: [
        "We map your current tools and data flows: where information starts, and where it needs to end up.",
        "We design an integration layer — APIs, webhooks, background jobs — that keeps systems in sync.",
        "We monitor real data running through the integrations and iterate to handle edge cases and failure modes.",
      ],
    },
  ];

  return (
    <section className="px-6 lg:px-16 pb-24">
      <div className="max-w-6xl mx-auto border-t border-black/10 pt-16 space-y-10">
        <div className="space-y-3 max-w-3xl">
          <p className="text-xs tracking-[0.25em] uppercase text-black/40">
            In Practice
          </p>
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight">
            How the process looks for each service style.
          </h2>
          <p className="text-sm lg:text-base text-black/60">
            The core steps stay the same, but the emphasis shifts depending on whether
            we’re in a CORE, BUILD, or INTEGRATE engagement.
          </p>
        </div>

        <div className="grid gap-10 lg:gap-8 lg:grid-cols-3">
          {examples.map((ex) => (
            <div
              key={ex.label}
              className="relative border border-black/10 rounded-3xl px-6 py-8 lg:px-7 lg:py-9 shadow-[0_18px_50px_rgba(15,23,42,0.06)] bg-white"
            >
              <p className="text-xs tracking-[0.25em] uppercase text-black/40 mb-1">
                {ex.label}
              </p>
              <h3 className="text-xl lg:text-2xl font-semibold mb-3">
                {ex.title}
              </h3>
              <p className="text-sm lg:text-base text-black/60 mb-4">
                {ex.body}
              </p>
              <ul className="space-y-2 text-sm lg:text-sm text-black/70">
                {ex.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-[6px] max-h-1.5 min-w-1.5 rounded-full bg-[#A64DFF]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
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
          Share where you are now and where you’d like to be. We’ll recommend the
          right way to work together and outline a concrete first step.
        </p>
        <GetInTouch />
      </div>
    </section>
  );
}
