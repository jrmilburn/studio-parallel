// components/navbar.tsx
import GetInTouch from "./get-in-touch"
import NavItem from "./navitem"

export default function Navbar() {
  return (
    <nav className="w-full h-16 lg:h-24 flex items-center px-2 lg:px-16 fixed top-0 z-50">
      <h2 className="flex-1 text-white text-2xl">SP</h2>

      <ul className="grow justify-center gap-6 text-white hidden md:flex">
        <li><NavItem text="Services," href="/" /></li>
        <li><NavItem text="Process," href="/" /></li>
        <li><NavItem text="Works" href="/" /></li>
      </ul>

      <div className="flex-1 flex justify-end items-center">
        <GetInTouch />
      </div>
    </nav>
  )
}
