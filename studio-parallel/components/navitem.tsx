// NavItem.tsx
import Link from "next/link"

export default function NavItem({ text, href }: { text: string; href: string }) {
  return (
    <Link
      href={href}
      className="relative inline-block h-[1em] leading-[1em] overflow-y-clip group cursor-pointer align-middle"
    >
      {/* sizes the link but stays hidden; gives real width */}
      <span className="invisible">{text}</span>

      {/* animated stack */}
      <span className="absolute h-[200%] inset-0 transition-transform duration-300 will-change-transform group-hover:-translate-y-1/2">
        <span className="block">{text}</span>
        <span className="block">{text}</span>
      </span>
    </Link>
  )
}
