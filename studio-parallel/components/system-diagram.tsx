"use client";

import { useState } from "react";

type NodeId = string;

export type Node = {
  id: NodeId;
  label: string;
  role: string;
  description: string;
  tech: string[];
  x: number; // still used for desktop layout
  y: number;
};

export type Edge = {
  from: NodeId;
  to: NodeId;
  label?: string;
};

type SystemDiagramProps = {
  title?: string;
  nodes: Node[];
  edges: Edge[];
};

export function SystemDiagram({ title, nodes, edges }: SystemDiagramProps) {
  const [activeId, setActiveId] = useState<NodeId | null>(nodes[0]?.id ?? null);
  const activeNode = nodes.find((n) => n.id === activeId) ?? nodes[0];

  return (
    <section className="w-full border border-black/10 rounded-3xl p-6 lg:p-8 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
      {title && (
        <h3 className="text-lg lg:text-xl font-semibold mb-4">
          {title}
        </h3>
      )}

      <div className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-stretch">
        {/* LEFT: Diagram / list */}
        <div className="space-y-4">
          {/* Desktop / tablet: canvas diagram */}
          <div className="hidden md:block relative aspect-[16/9] rounded-3xl bg-[#F5F5F7] overflow-hidden">
            {/* Edges */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="8"
                  markerHeight="8"
                  refX="6"
                  refY="3"
                  orient="auto"
                >
                  <path d="M0,0 L6,3 L0,6 z" fill="rgba(15,23,42,0.35)" />
                </marker>
              </defs>

              {edges.map((edge, i) => {
                const from = nodes.find((n) => n.id === edge.from);
                const to = nodes.find((n) => n.id === edge.to);
                if (!from || !to) return null;

                return (
                  <g key={i}>
                    <line
                      x1={`${from.x}%`}
                      y1={`${from.y}%`}
                      x2={`${to.x}%`}
                      y2={`${to.y}%`}
                      stroke="rgba(15,23,42,0.25)"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      markerEnd="url(#arrowhead)"
                    />
                  </g>
                );
              })}
            </svg>

            {/* Nodes */}
            {nodes.map((node) => {
              const isActive = node.id === activeNode?.id;

              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setActiveId(node.id)}
                  className={`
                    absolute -translate-x-1/2 -translate-y-1/2
                    min-w-[140px] max-w-[190px]
                    rounded-[999px] px-4 py-2.5 lg:px-5 lg:py-3
                    bg-white text-left border text-xs lg:text-sm
                    transition-all duration-200
                    ${
                      isActive
                        ? "border-[#A64DFF] shadow-md shadow-purple-200/40 scale-[1.03]"
                        : "border-black/10 hover:border-black/20 hover:shadow-sm"
                    }
                  `}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  <p className="text-[10px] uppercase tracking-[0.22em] text-black/45 mb-0.5">
                    {node.role}
                  </p>
                  <p className="font-medium text-black text-sm leading-snug">
                    {node.label}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Mobile: vertical stack */}
          <div className="md:hidden space-y-2">
            {nodes.map((node) => {
              const isActive = node.id === activeNode?.id;

              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setActiveId(node.id)}
                  className={`
                    w-full text-left rounded-2xl px-4 py-3
                    border bg-white text-sm
                    flex flex-col gap-1
                    transition-colors
                    ${
                      isActive
                        ? "border-[#A64DFF] bg-[#F5F0FF]"
                        : "border-black/10 hover:border-black/20"
                    }
                  `}
                >
                  <span className="text-[10px] uppercase tracking-[0.22em] text-black/45">
                    {node.role}
                  </span>
                  <span className="font-medium text-black">
                    {node.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT: Details panel (moves below on mobile) */}
        {activeNode && (
          <div className="flex flex-col justify-between h-full gap-6">
            <div className="space-y-3">
              <p className="text-xs tracking-[0.25em] uppercase text-black/40">
                Component
              </p>
              <h4 className="text-xl lg:text-2xl font-semibold">
                {activeNode.label}
              </h4>
              <p className="text-sm lg:text-base text-black/70">
                {activeNode.description}
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xs tracking-[0.25em] uppercase text-black/40">
                Tech & responsibilities
              </p>
              <ul className="flex flex-wrap gap-2 text-[11px] lg:text-xs">
                {activeNode.tech.map((t) => (
                  <li
                    key={t}
                    className="px-2.5 py-1 rounded-full bg-slate-100 text-black/70"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
