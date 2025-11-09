export default function AnimationBlock({ pos }: { pos: string }) {
  return (
    <div
      style={{
        // cap is the smaller of 20% vw or 20% vh
        "--cap": "min(20vw, 20vh)",
        // block keeps a 17:20 aspect ratio
        height: "var(--cap)",
        aspectRatio: "17 / 20",
        // compute the actual width from the cap + ratio
        "--w": "calc(var(--cap) * 17 / 20)",
        // place the block two widths from the right edge
        right: "calc(var(--w) * 2)",
        // set top as you like (example keeps your 20vh)
        top: "20vh",
      } as React.CSSProperties}
      className={`absolute rounded bg-[#A64DFF] block${pos}`}
    />
  );
}
