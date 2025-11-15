"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { label: "Core", href: "/pricing/core" },
  { label: "Build", href: "/pricing/build" },
  { label: "Integrate", href: "/pricing/integrate" },
];

export function PricingSwitcher() {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-center mt-8 absolute left-5 top-20">
      <div className="flex bg-[#2A2A2D] rounded-full p-1 shadow-inner border border-[#2e2e30]">
        {routes.map((r) => {
          const active = pathname === r.href;

          return (
            <Link
              key={r.href}
              href={r.href}
              className={`
                px-4 py-1.5 rounded-full text-sm transition-all
                ${active 
                  ? "bg-[#A64DFF] text-white shadow-[0_4px_12px_rgba(166,77,255,0.35)]" 
                  : "text-slate-400 hover:text-slate-200"
                }
              `}
            >
              {r.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
