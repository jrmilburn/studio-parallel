import Image from "next/image";
import RevealOnScroll from "@/components/reveal-on-scroll";
import Link from "next/link";
import HeroButton from "@/components/hero-button";

export default function HeroSection() {
  return (
    <section
      id="hero"
      data-hero="hero"
      data-nav-theme="light"
      className="
        relative
        h-[calc(100vh-16px)]
        lg:h-[calc(100vh-24px)]
        bg-white 
        lg:mx-8 
        text-black
      "
    >
      <div className="relative h-full flex flex-col lg:flex-row">

        {/* Portrait side */}
        <div
          className="
            w-full lg:w-5/12
            relative
            h-64 sm:h-80 lg:h-full
            mb-6 lg:mb-0
          "
        >
          <Image
            src="/hayden.jpeg"
            alt="Founder of Flowchannels"
            fill
            priority
            className="object-cover object-center rounded-3xl"
          />
        </div>

        {/* Text side */}
        <div className="flex-1 flex items-center">
          <div className="w-full px-6 pb-12 pt-2 lg:px-16 lg:py-12 space-y-10">

            {/* Label */}
            <RevealOnScroll delay={0.1}>
            <p className="text-xs tracking-[0.25em] uppercase text-black/40">
              Case Study · Integration
            </p>
            </RevealOnScroll>

            {/* Title + Subtitle */}
            <div className="space-y-4 max-w-2xl">
            <RevealOnScroll delay={0.2}>
              <h1 className="text-2xl md:text-5xl font-semibold tracking-tight">
                Cliniko → GoHighLevel Sync Service
              </h1>
              </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <p className="text-base md:text-xl text-black/70 max-w-xl">
                A fully automated data flow built for Flowchannels, syncing a
                clinic’s Cliniko records directly into GoHighLevel — no manual updates, no bottlenecks.
              </p>
              </RevealOnScroll>
            </div>

            {/* Quote */}
            <figure className="max-w-xl space-y-3 pt-4">
            <RevealOnScroll delay={0.3}>
              <blockquote className="relative pl-4 border-l-2 border-[#A64DFF] text-base md:text-lg text-black/70">
                “We used to lose an hour every morning updating GoHighLevel. Now it just
                happens in the background — we don’t even think about it.”
              </blockquote>
              <figcaption className="text-xs md:text-sm text-black/50 my-2">
                Hayden Richardson, Founder — Flowchannels
              </figcaption>
              </RevealOnScroll>
            </figure>

            {/* Meta row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs md:text-sm max-w-3xl pt-4">
            <RevealOnScroll>
              <div>
                <p className="text-black/40 uppercase tracking-[0.2em] text-[10px] mb-1">
                  Industry
                </p>
                <p className="font-medium">Allied Health</p>
              </div>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
              <div>
                <p className="text-black/40 uppercase tracking-[0.2em] text-[10px] mb-1">
                  Services
                </p>
                <p className="font-medium">API Integration</p>
              </div>
              </RevealOnScroll>
              <RevealOnScroll delay={0.2}>
              <div>
                <p className="text-black/40 uppercase tracking-[0.2em] text-[10px] mb-1">
                  Timeline
                </p>
                <p className="font-medium">~4 weeks</p>
              </div>
              </RevealOnScroll>
              <RevealOnScroll delay={0.3}>
              <div>
                <p className="text-black/40 uppercase tracking-[0.2em] text-[10px] mb-1">
                  Outcome
                </p>
                <p className="font-medium">Admin workload eliminated</p>
              </div>
              </RevealOnScroll>
            </div>

          </div>
        </div>
      </div>

      {/* Explore button */}
      <RevealOnScroll
        delay={0.3}
        className="hidden md:block absolute bottom-8 right-10"
      >
        <Link href="#cliniko">
          <HeroButton text="Explore integration" />
        </Link>
      </RevealOnScroll>
    </section>
  );
}
