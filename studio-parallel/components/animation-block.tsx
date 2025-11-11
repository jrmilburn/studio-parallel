"use client";

import { useInViewOnce } from "./useInView";
import clsx from "clsx";

export default function AnimationBlock({
  pos,
  className = "",
  triggerOnScroll = false,
}: {
  pos: string;
  className?: string;
  triggerOnScroll?: boolean;
}) {
  const { ref, inView } = useInViewOnce({ threshold: 0.95 });

  return (
    <div
      ref={triggerOnScroll ? ref : null}
      className={clsx(
        "absolute rounded bg-[#A64DFF]",
        className,
        triggerOnScroll ? 
        triggerOnScroll && inView && `block${pos}`
        :
        `block${pos}`
      )}
      style={
        {
          "--cap": "min(20vw, 20vh)",
          height: "var(--cap)",
          aspectRatio: "17 / 20",
          "--w": "calc(var(--cap) * 17 / 20)",
          right: "calc(var(--w) * 2)",
          top: "20vh",
        } as React.CSSProperties
      }
    />
  );
}
