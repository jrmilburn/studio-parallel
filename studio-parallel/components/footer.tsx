import Link from "next/link";
import RevealOnScroll from "./reveal-on-scroll";
import HoverAnimate from "./hover-animate";
import GetInTouch from "./get-in-touch";

export default function Footer() {
  return (
    <footer className="bg-[#A64DFF] text-black">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-end px-4 py-10 sm:px-6 lg:px-12">

        {/* Nav + Info */}
        <div className="mb-12 flex w-full flex-wrap items-start justify-between gap-10 md:gap-16">
          <ul className="flex flex-col gap-2 self-start">
            <li className="mb-3 text-[0.7rem] uppercase tracking-[0.12em] text-black/70">
              Navigation
            </li>

            <Link
              className="leading-[0.9] text-3xl sm:text-4xl lg:text-5xl"
              href="/"
            >
              <HoverAnimate>Home</HoverAnimate>
            </Link>
            <Link
              className="leading-[0.9] text-3xl sm:text-4xl lg:text-5xl"
              href="/services"
            >
              <HoverAnimate>Services</HoverAnimate>
            </Link>
            <Link
              className="leading-[0.9] text-3xl sm:text-4xl lg:text-5xl"
              href="/process"
            >
              <HoverAnimate>Process</HoverAnimate>
            </Link>
            <Link
              className="leading-[0.9] text-3xl sm:text-4xl lg:text-5xl"
              href="/works"
            >
              <HoverAnimate>Works</HoverAnimate>
            </Link>

            <GetInTouch
              text="Contact"
              className=" leading-[0.9] text-3xl sm:text-4xl lg:text-5xl"
            />
          </ul>

          <ul className="flex flex-col self-start gap-1">
            <li className="mb-3 text-[0.7rem] uppercase tracking-[0.12em] text-black/70">
              Info
            </li>
            <li className="text-sm sm:text-base md:text-lg">
              <strong>E:</strong> joe@studioparallel.au
            </li>
            <li className="text-sm sm:text-base md:text-lg">
              <strong>P:</strong> 0412337616
            </li>
            <li className="text-sm sm:text-base md:text-lg">
              <strong>H:</strong> Monday to Friday, 8:30am to 5pm
            </li>
          </ul>
        </div>

        {/* Bottom bar */}
        <div className="mt-4 flex w-full flex-col gap-4 border-t border-black/40 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs sm:text-sm md:text-base">
            © 2025 Studio Parallel. All Rights Reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              className="text-xs sm:text-sm md:text-base"
              href="/"
            >
              <HoverAnimate>LinkedIn</HoverAnimate>
            </Link>
            <Link
              className="text-xs sm:text-sm md:text-base"
              href="/"
            >
              <HoverAnimate>Legal Terms</HoverAnimate>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 mb-8 h-px w-full bg-black/70" />

        {/* Brand wordmark */}
        <RevealOnScroll>
          <h3 className="text-center leading-none tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-[8vw]">
            STUDIO PARALLEL
          </h3>
        </RevealOnScroll>
      </div>
    </footer>
  );
}
