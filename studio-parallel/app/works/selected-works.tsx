"use client";

import Link from "next/link";

import HoverAnimate from "@/components/hover-animate";

type Work = {
  number: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  stack: string;
  outcome: string;
  href?: string; // optional if case study not live yet
};

const works: Work[] = [
  {
    number: "01",
    title: "Caribeae Swim School Platform",
    tagline: "End-to-end scheduling, enrolment and client portal for a high-volume swim school.",
    description:
      "A custom web platform for managing classes, enrolments, staff, and client self-service — replacing spreadsheets and manual processes with a single, integrated system.",
    role: "Architecture, full-stack development, integrations",
    stack: "Next.js, Prisma, PostgreSQL, Tailwind, Stripe, Twilio",
    outcome:
      "Reduced admin friction, clearer visibility across classes and enrolments, and a foundation for future automation.",
    href: "/works/caribeae", // or leave undefined for “Coming soon”
  },
    {
      number: "02",
      title: "Cliniko → GoHighLevel Sync Engine",
      tagline: "A one-way data pipeline that keeps GoHighLevel updated from Cliniko in near real time.",
      description:
        "A custom integration service that synchronises patients, appointments, and practitioners from Cliniko into GoHighLevel. The system eliminates manual double-entry, prevents inconsistencies, and ensures the CRM always reflects the source of truth stored in Cliniko.",
      role: "Systems design, API integration, automation architecture, full-stack development",
      stack: "Node.js, Express, Prisma, PostgreSQL, Cron jobs, GoHighLevel API, Cliniko API, AWS EC2",
      outcome:
        "A dependable, self-correcting sync system that updates GoHighLevel whenever Cliniko data changes. Reduces administrative overhead, removes repetitive data entry, and ensures accurate records across systems without relying on third-party middleware.",
      href: "/works/cliniko-integration" // optional
    },
  {
    number: "03",
    title: "Studio Parallel Internal Toolkit",
    tagline: "A modular internal toolkit for managing leads, projects and experiments.",
    description:
      "A set of internal tools for tracking opportunities, project pipelines, and technical experiments — built to test ideas quickly and keep everything in one place.",
    role: "Product design, backend & frontend",
    stack: "Next.js, Prisma, PostgreSQL, Tailwind",
    outcome:
      "Faster decision-making, less context switching, and a clearer view of where to invest development time.",
    href: "/works/studio-toolkit",
  },
];

export default function WorksSection() {
  return (
    <section
      id="works"
      className="px-6 lg:px-16 py-24 bg-white text-black"
      data-nav-theme="light"
    >
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Intro */}
        <div className="space-y-4">
          <p className="text-xs tracking-[0.25em] uppercase text-black/40">
            Works
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
            Selected work.
          </h2>
          <p className="text-base lg:text-lg text-black/60 max-w-2xl">
            A small set of projects that represent how Studio Parallel works:
            embedded, technical, and focused on systems that actually get used.
          </p>
        </div>
      </div>

      {/* Projects */}
      <div className="max-w-6xl mx-auto mt-16 space-y-16 lg:space-y-20">
        {works.map((work) => (
          <WorkCard key={work.number} work={work} />
        ))}
      </div>
    </section>
  );
}

function WorkCard({ work }: { work: Work }) {
  const { number, title, tagline, description, role, stack, outcome, href } = work;

  return (
    <article className="relative border-t border-black/10 pt-12 lg:pt-16">
      {/* Ghost number */}
      <span className="pointer-events-none select-none absolute -top-6 lg:-top-10 -left-1 lg:-left-4 text-4xl lg:text-[4.5rem] font-light text-black/5 leading-none">
        {number}
      </span>

      <div className="grid gap-10 lg:gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
        {/* Left: main story */}
        <div className="space-y-4">
          <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight">
            {title}
          </h3>
          <p className="text-base lg:text-lg text-black/80">{tagline}</p>
          <p className="text-sm lg:text-base text-black/60 max-w-xl">
            {description}
          </p>
        </div>

        {/* Right: meta */}
        <div className="space-y-4 text-sm lg:text-base">
          <div className="space-y-1">
            <p className="text-xs tracking-[0.25em] uppercase text-black/40">
              Role
            </p>
            <p className="text-black/80">{role}</p>
          </div>

          <div className="space-y-1">
            <p className="text-xs tracking-[0.25em] uppercase text-black/40">
              Stack
            </p>
            <p className="text-black/70">{stack}</p>
          </div>

          <div className="space-y-1">
            <p className="text-xs tracking-[0.25em] uppercase text-black/40">
              Outcome
            </p>
            <p className="text-black/70">{outcome}</p>
          </div>

          <div className="pt-4">
            {href ? (
              <Link
                href={href}
                className="inline-flex items-center gap-2 text-black/80 text-sm lg:text-base group"
              >
                <span className="underline underline-offset-4 decoration-black/30 group-hover:decoration-black">
                  <HoverAnimate>View case study</HoverAnimate>
                </span>
                <span className="text-xs translate-y-[1px] group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </Link>
            ) : (
              <span className="inline-flex items-center text-black/40 text-sm italic">
                Case study coming soon
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
