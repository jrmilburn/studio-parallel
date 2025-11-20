"use client";

import ServiceLine from "./service-line";

export default function HowWeIntegrate() {
  return (
    <section
      data-nav-theme="dark"
      id="how-we-integrate"
      className="relative min-h-screen overflow-hidden bg-[#1C1C1E] rounded-4xl lg:mx-8 flex flex-col items-start px-4 lg:px-16 py-16 gap-8"
    >
      <h2 className="text-5xl md:text-7xl text-white leading-tight">
        How we integrate
      </h2>

      <p className="self-end text-base md:text-lg opacity-60 text-white max-w-sm md:max-w-md mt-10 text-right">
        Choose the mode that fits: connect your existing tools, build something
        new, or keep an embedded engineer improving things every month.
      </p>

      <ServiceLine />
    </section>
  );
}
