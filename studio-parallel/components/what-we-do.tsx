"use client"

import { useState, useEffect } from "react"

import Button from "./button"
import RevealOnScroll from "./reveal-on-scroll"
import Link from "next/link"
import HoverAnimate from "./hover-animate"

export default function WhatWeDo() {

  const [hideScrollLink, setHideScrollLink] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10000) setHideScrollLink(true);
      else setHideScrollLink(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

    return (
        <div className="relative h-screen flex flex-col items-start px-4 lg:px-16 py-16 gap-8" data-nav-theme="light" id="what-we-do">
            <p className="text-lg opacity-60">Studio Parallel in Action.</p>
            <h2 className="text-6xl mb-16">What we do.</h2>
            <div className="self-end flex flex-col items-start max-w-3xl gap-8">
                <RevealOnScroll><h3 className="text-4xl">We specialise in the development and integration of software solutions for business.</h3></RevealOnScroll>
                <RevealOnScroll><p className="text-lg">While commercial software solutions are great, we recognise that sometimes you need something a little more tailored.</p></RevealOnScroll>
                <RevealOnScroll><p className="text-lg">Reach out to see how we can help you today.</p></RevealOnScroll>
                <Link href="#how-we-integrate"><Button text="See more" textcolor="#FFF" /></Link>
            </div>
        </div>
    )

}