"use client"

import { useEffect, useState } from "react";
import HeroAnimation from "../../components/hero-animation"
import HeroButton from "../../components/hero-button"
import HoverAnimate from "../../components/hover-animate"
import RevealOnScroll from "../../components/reveal-on-scroll"

import Link from "next/link"

export default function HeroSection() {

  const [hideScrollLink, setHideScrollLink] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) setHideScrollLink(true);
      else setHideScrollLink(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

    return(
        <section 
            id="hero"
            data-hero="hero"
            className="relative h-[calc(100vh-24px)] overflow-hidden bg-[#1C1C1E] rounded-b-4xl lg:mx-8"
            data-nav-theme="dark"
            >
            <HeroAnimation />
            <div className="container relative h-full flex flex-col items-start px-4 lg:px-16 gap-36 lg:gap-24 w-full justify-center">
                <div className="flex flex-col w-full gap-2 z-10">
                <RevealOnScroll delay={0.1}>
                <h1 className="text-5xl lg:text-5xl text-white mb-2">Every Business is Different.</h1>
                <h1 className="text-5xl lg:text-5xl text-white pb-2">So is Every Solution.</h1>
                </RevealOnScroll>
                </div>
                <RevealOnScroll delay={0.2}>
                <p className="text-lg lg:text-3xl text-white lg:max-w-[60%] leading-relaxed z-10">Your systems, your workflows, your constraints, your goals.</p>
                </RevealOnScroll>
                <RevealOnScroll delay={0.3}><HeroButton /></RevealOnScroll>
            </div>
                  <Link
                      href="#what-we-do"
                      className={`
                        text-white hidden md:inline-block fixed bottom-10 right-15 z-20 transition-opacity duration-500
                        ${hideScrollLink ? "opacity-0 pointer-events-none" : "opacity-60"}
                      `}
                    >
                    </Link>
        </section>
    )

}