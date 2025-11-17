"use client";

import { useState } from "react";
import { SystemDiagram } from "@/components/system-diagram"; // adjust path if needed

type Mode = "before" | "after";

export default function CaribeaePlatformDiagram() {
  const [mode, setMode] = useState<Mode>("before");
  const isBefore = mode === "before";

  // BEFORE — fragmented, manual admin process
  const beforeNodes = [
    {
      id: "spreadsheets",
      label: "Spreadsheets & Paper",
      role: "Timetables & enrolments",
      description:
        "Class schedules, enrolments and waitlists live across spreadsheets, printed timetables and notes.",
      tech: ["Excel / Google Sheets", "Printed rosters"],
      x: 22,
      y: 60,
    },
    {
      id: "admin",
      label: "Admin Team",
      role: "Manual coordination",
      description:
        "Staff juggle enrolments, changes and cancellations by checking multiple documents and updating them by hand.",
      tech: ["Phone calls", "Emails", "In-person updates"],
      x: 50,
      y: 35,
    },
    {
      id: "comms",
      label: "Ad-hoc Messaging",
      role: "Communication",
      description:
        "Parents are informed through one-off SMS, emails or calls — often sent individually or in small groups.",
      tech: ["SMS app", "Email", "Phone"],
      x: 78,
      y: 55,
    },
    {
      id: "payments",
      label: "Separate Payments",
      role: "Billing",
      description:
        "Payments are handled through separate systems or manual tracking, which makes it harder to see who is up-to-date.",
      tech: ["POS / bank transfer", "Manual reconciliation"],
      x: 60,
      y: 80,
    },
  ];

  const beforeEdges = [
    { from: "spreadsheets", to: "admin", label: "Check & update" },
    { from: "admin", to: "comms", label: "Notify parents" },
    { from: "admin", to: "payments", label: "Track who has paid" },
  ];

  // AFTER — single platform, shared source of truth
  const afterNodes = [
    {
      id: "admin-portal",
      label: "Admin Portal",
      role: "Staff view",
      description:
        "Staff manage classes, enrolments, waitlists and attendance from a single internal dashboard.",
      tech: ["Web platform"],
      x: 18,
      y: 60,
    },
    {
      id: "core-db",
      label: "Core Database",
      role: "Single source of truth",
      description:
        "Holds all classes, swimmers, enrolments and attendance in one place, so every part of the system sees the same information.",
      tech: ["Centralised data"],
      x: 50,
      y: 30,
    },
    {
      id: "client-portal",
      label: "Client Portal",
      role: "Families",
      description:
        "Parents can view classes, manage enrolments and request changes themselves, without needing to call the office.",
      tech: ["Web client portal"],
      x: 82,
      y: 60,
    },
    {
      id: "comms-payments",
      label: "Messaging & Payments",
      role: "Connected tools",
      description:
        "SMS, email and billing are connected to the platform, so reminders and payments are driven off the same, up-to-date data.",
      tech: ["Email & SMS", "Online payments"],
      x: 50,
      y: 80,
    },
  ];

  const afterEdges = [
    { from: "admin-portal", to: "core-db", label: "Manage data" },
    { from: "client-portal", to: "core-db", label: "Self-service updates" },
    { from: "core-db", to: "comms-payments", label: "Drive messages & billing" },
  ];

  return (
    <section className="px-6 lg:px-0 py-12 h-screen">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header + toggle */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="text-xs tracking-[0.25em] uppercase text-black/40">
              System Overview
            </p>
            <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight">
              From scattered tools to a single swim school platform.
            </h2>
            <p className="text-sm lg:text-base text-black/60 max-w-2xl">
              See how the day-to-day work changes — from juggling spreadsheets, calls and
              messages to running everything through one connected system.
            </p>
          </div>

          {/* Toggle */}
          <div className="inline-flex items-center rounded-full border border-black/10 bg-white p-1 text-xs lg:text-sm">
            <button
              type="button"
              onClick={() => setMode("before")}
              className={`px-4 py-1.5 rounded-full transition-colors ${
                isBefore
                  ? "bg-black text-white"
                  : "text-black/60 hover:text-black"
              }`}
            >
              Old workflow
            </button>
            <button
              type="button"
              onClick={() => setMode("after")}
              className={`px-4 py-1.5 rounded-full transition-colors ${
                !isBefore
                  ? "bg-black text-white"
                  : "text-black/60 hover:text-black"
              }`}
            >
              New platform
            </button>
          </div>
        </div>

        {/* Diagram */}
        {isBefore ? (
          <SystemDiagram
            title="Before — spreadsheets, calls and manual coordination."
            nodes={beforeNodes}
            edges={beforeEdges}
          />
        ) : (
          <SystemDiagram
            title="After — one platform for staff, families, messaging and payments."
            nodes={afterNodes}
            edges={afterEdges}
          />
        )}

        {/* Caption / explanation */}
        <div className="text-sm lg:text-base text-black/60 max-w-3xl">
          {isBefore ? (
            <p>
              Previously, running the swim school meant keeping track of classes, spots,
              changes and payments across spreadsheets, printed timetables and ad-hoc
              messages. Staff had to be the glue between all of it — constantly checking,
              updating and chasing information.
            </p>
          ) : (
            <p>
              With the new platform, there is a single place to manage the entire swim
              school. Staff use the admin portal, families use the client portal, and
              messaging and payments run off the same shared data. Less chasing, fewer
              surprises, and a clearer view of how the school is running day-to-day.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
