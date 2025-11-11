// components/navbar.tsx
import GetInTouch from "./get-in-touch"
import NavItem from "./navitem"
import RevealOnScroll from "./reveal-on-scroll"

export default function Navbar() {
  return (
    <nav className="w-full h-16 lg:h-24 flex items-center px-2 lg:px-16 fixed top-0 z-50">
      <RevealOnScroll delay={0}><h2 className="flex-1 text-white text-2xl">SP</h2></RevealOnScroll>

      <ul className="grow justify-center gap-6 text-white hidden md:flex">
        <RevealOnScroll delay={0.1}><li><NavItem text="Services," href="/" /></li></RevealOnScroll>
        <RevealOnScroll delay={0.2}><li><NavItem text="Process," href="/" /></li></RevealOnScroll>
        <RevealOnScroll delay={0.3}><li><NavItem text="Works" href="/" /></li></RevealOnScroll>
      </ul>

      <RevealOnScroll delay={0.4}>
      <div className="flex-1 flex justify-end items-center">
        <GetInTouch />
      </div>
      </RevealOnScroll>
    </nav>
  )
}
