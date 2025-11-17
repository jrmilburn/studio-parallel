"use client"

import { useEffect, useState } from "react";
import HeroAnimation from "./hero-animation"
import HeroButton from "./hero-button"
import HoverAnimate from "./hover-animate"
import RevealOnScroll from "./reveal-on-scroll"

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
                <h1 className="text-5xl lg:text-8xl text-white">Your Business.</h1>
                <h1 className="text-5xl lg:text-8xl text-white">Your Code.</h1>
                </RevealOnScroll>
                </div>
                <RevealOnScroll delay={0.2}>
                <p className="text-lg lg:text-3xl text-white lg:max-w-1/2 leading-relaxed z-10">Building and integrating custom software solutions into your workflows to maximise productivity.</p>
                </RevealOnScroll>
                <RevealOnScroll delay={0.3}><Link href="#what-we-do"><HeroButton /></Link></RevealOnScroll>
            </div>
                  <Link
                      href="#what-we-do"
                      className={`
                        text-white hidden md:inline-block fixed bottom-10 right-15 z-20 transition-opacity duration-500
                        ${hideScrollLink ? "opacity-0 pointer-events-none" : "opacity-60"}
                      `}
                    >
                      <HoverAnimate>Scroll down</HoverAnimate>
                    </Link>
        </section>
    )

}