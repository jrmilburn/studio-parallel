"use client";

import Link from "next/link";
import RevealOnScroll from "./reveal-on-scroll";
import HoverAnimate from "./hover-animate";

export default function ServiceItem({
  heading,
  body,
  learnlink,
}: {
  heading: string;
  body: string;
  learnlink: string;
}) {
  return (
    <RevealOnScroll>
      {/* KEY FIX: items-start on mobile, items-center on md+ */}
      <div className="w-full flex flex-col justify-start md:flex-row md:justify-between items-start md:items-center py-6 md:gap-8 gap-4 text-white">
        
        <h3 className="text-2xl md:text-4xl max-w-sm w-full">{heading}</h3>

        {/* right side */}
        <div className="flex flex-col items-start gap-6 w-full">
          <p className="text-sm md:text-base opacity-80">{body}</p>

          <Link href={learnlink} className="flex flex-col group">
            <HoverAnimate>Learn more</HoverAnimate>
            <div className="w-[0] bg-white group-hover:w-full transition-all h-[1px]" />
          </Link>
        </div>

      </div>
    </RevealOnScroll>
  );
}
