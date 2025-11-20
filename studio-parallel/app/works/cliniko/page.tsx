"use client";

import { useState } from "react";
import { SystemDiagram } from "@/components/system-diagram"; // adjust path if needed
import HeroSection from "./hero-section";

type Mode = "before" | "after";

export default function ClinikoIntegrationDiagram() {
  const [mode, setMode] = useState<Mode>("before");
  const isBefore = mode === "before";

  // BEFORE — manual process
  const beforeNodes = [
    {
      id: "cliniko",
      label: "Cliniko",
      role: "Source of truth",
      description:
        "Where the clinic team manages patients, practitioners and appointments in their day-to-day work.",
      tech: ["Cliniko"],
      x: 20,
      y: 60,
    },
    {
      id: "admin",
      label: "Admin Team",
      role: "Manual bridge",
      description:
        "Staff log into both systems, compare records and re-type information into GoHighLevel to keep things roughly in sync.",
      tech: ["Daily checks", "Manual updates"],
      x: 50,
      y: 35,
    },
    {
      id: "ghl",
      label: "GoHighLevel",
      role: "CRM & comms",
      description:
        "Used for communication, reminders and pipelines — but only as accurate as the last manual update.",
      tech: ["GoHighLevel"],
      x: 80,
      y: 60,
    },
  ];

  const beforeEdges = [
    { from: "cliniko", to: "admin", label: "Check for changes" },
    { from: "admin", to: "ghl", label: "Re-type / update data" },
  ];

  // AFTER — automated sync
  const afterNodes = [
    {
      id: "cliniko",
      label: "Cliniko",
      role: "Source of truth",
      description:
        "Still the main place where the clinic team manages patients and appointments — nothing changes for staff.",
      tech: ["Cliniko API"],
      x: 18,
      y: 65,
    },
    {
      id: "sync-service",
      label: "Sync Service",
      role: "Integration layer",
      description:
        "A small cloud service that regularly checks Cliniko for changes and updates GoHighLevel automatically in the background.",
      tech: ["Node.js", "Express", "Cron", "AWS EC2"],
      x: 50,
      y: 65,
    },
    {
      id: "ghl",
      label: "GoHighLevel",
      role: "CRM & comms",
      description:
        "Always has up-to-date information from Cliniko, so reminders, follow-ups and automation run off accurate data.",
      tech: ["GoHighLevel API"],
      x: 82,
      y: 65,
    },
    {
      id: "db",
      label: "Sync Database",
      role: "State & record",
      description:
        "Keeps a record of what has been synced, when it was synced and what changed, so nothing is missed and issues can be traced.",
      tech: ["PostgreSQL", "Prisma"],
      x: 50,
      y: 30,
    },
  ];

  const afterEdges = [
    { from: "cliniko", to: "sync-service", label: "Checks for changes" },
    { from: "sync-service", to: "db", label: "Stores sync history" },
    { from: "sync-service", to: "ghl", label: "Updates records" },
  ];

  return (
    <>
    <HeroSection />
    <section className="px-6 lg:px-0 py-12 min-h-screen" id="cliniko">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header + toggle */}
        <div className="flex flex-col gap-4 md:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="text-xs tracking-[0.25em] uppercase text-black/40">
              System Overview
            </p>
            <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight">
              From manual updates to a fully automatic sync.
            </h2>
            <p className="text-sm lg:text-base text-black/60 max-w-2xl">
              Switch between the old manual process and the new automated system to see
              where time was being spent — and how the integration removes it.
            </p>
          </div>

          {/* Toggle */}
          <div
            className="
              inline-flex
              w-fit
              self-center
              justify-start items-center
              rounded-full border border-black/10
              bg-white p-1
              text-xs lg:text-sm
            "
          >
            <button
              type="button"
              onClick={() => setMode("before")}
              className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                isBefore
                  ? "bg-black text-white"
                  : "text-black/60 hover:text-black hover:bg-gray-50"
              }`}
            >
              Old workflow
            </button>
            <button
              type="button"
              onClick={() => setMode("after")}
              className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                !isBefore
                  ? "bg-black text-white"
                  : "text-black/60 hover:text-black hover:bg-gray-50"
              }`}
            >
              New system
            </button>
          </div>
        </div>

        {/* Diagram */}
        {isBefore ? (
          <SystemDiagram
            title="Before — daily manual data entry."
            nodes={beforeNodes}
            edges={beforeEdges}
          />
        ) : (
          <SystemDiagram
            title="After — automated sync, no manual admin time."
            nodes={afterNodes}
            edges={afterEdges}
          />
        )}

        {/* Caption / explanation */}
        <div className="text-sm lg:text-base text-black/60 max-w-3xl">
          {isBefore ? (
            <p>
              Previously, the admin team had to act as the “integration” — logging into
              both Cliniko and GoHighLevel, checking for new or changed records and
              re-entering them by hand. It was slow, easy to forget on busy days, and
              there was no guarantee both systems truly matched.
            </p>
          ) : (
            <p>
              Now, staff simply continue using Cliniko as they always have. A cloud-based
              sync service quietly handles the rest: it checks for changes, records what
              it has synced, and keeps GoHighLevel up to date automatically. No daily
              data entry, fewer mistakes and a lot less mental load on the team.
            </p>
          )}
        </div>
      </div>
    </section>
    </>
  );
}
