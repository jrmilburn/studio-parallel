"use client";

import { useEffect, useState } from "react";
import HeroAnimation from "../../components/hero-animation";
import HeroButton from "../../components/hero-button";
import HoverAnimate from "../../components/hover-animate";
import RevealOnScroll from "../../components/reveal-on-scroll";
import Link from "next/link";

export default function WorksHeroSection() {
  const [hideScrollLink, setHideScrollLink] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) setHideScrollLink(true);
      else setHideScrollLink(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      data-hero="hero"
      className="relative h-[calc(100vh-24px)] overflow-hidden bg-[#1C1C1E] rounded-b-4xl lg:mx-8"
      data-nav-theme="dark"
    >
      <HeroAnimation />

      <div className="container relative h-full flex flex-col items-start px-4 lg:px-16 gap-24 lg:gap-20 w-full justify-center">
        {/* Heading */}
        <div className="flex flex-col w-full gap-2 z-10">
          <RevealOnScroll delay={0.1}>
            <p className="text-xs tracking-[0.25em] uppercase text-white/60 mb-1">
              Selected Work
            </p>
            <h1 className="text-4xl lg:text-4xl text-white mb-2">
              Systems that actually get used.
            </h1>
            <h2 className="text-xl lg:text-2xl text-white/80">
              Real projects. Real constraints. Real outcomes.
            </h2>
          </RevealOnScroll>
        </div>

        {/* Subcopy + CTA */}
        <RevealOnScroll delay={0.2}>
          <p className="text-lg lg:text-2xl text-white/80 lg:max-w-[60%] leading-relaxed z-10 mb-6">
            A small set of projects that show how Studio Parallel embeds into teams,
            builds around existing workflows, and ships software that actually moves
            the needle.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 z-10">
            {/* Primary CTA – same HeroButton for consistency */}
            <HeroButton />
          </div>
        </RevealOnScroll>
      </div>

      {/* Scroll down hint */}
      <Link
        href="#works"
        className={`
          text-white hidden md:inline-block fixed bottom-10 right-10 z-20 
          transition-opacity duration-500
          ${hideScrollLink ? "opacity-0 pointer-events-none" : "opacity-60"}
        `}
      >
        <HoverAnimate>See works</HoverAnimate>
      </Link>
    </section>
  );
}
