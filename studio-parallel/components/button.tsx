"use client"

export default function Button({
  text,
  background,
  textcolor,
  onClick,
}: {
  text: string;
  background?: string;   // expects a Tailwind class e.g. "bg-[#2A2A2A]"
  textcolor?: string;    // expects a CSS color e.g. "#fff" or "white" or "black"
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        color: textcolor || "white",        // text color
      }}
      className={`
        ${background || "bg-[#A64DFF]"}
        px-4 py-2 rounded-full relative flex justify-between items-center
        gap-2 group cursor-pointer hover:scale-[1.01] transition-all
      `}
    >
      {text}

      <div className="relative w-[8px] h-[8px] flex items-center justify-center">
        <span
          className="absolute w-[8px] h-[8px] rounded-full transition-all"
          style={{
            border: "1px solid currentColor",            // border matches text
            backgroundColor: "transparent",
          }}
        />
      </div>

      {/* Hover behaviour handled here */}
      <style jsx>{`
        button:hover span {
          width: 3px;
          height: 3px;
          background-color: currentColor;  /* hover fill = text color */
        }
      `}</style>
    </button>
  );
}
