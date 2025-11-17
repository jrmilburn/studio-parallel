import Link from "next/link"
import RevealOnScroll from "./reveal-on-scroll"
import HoverAnimate from "./hover-animate"
import GetInTouch from "./get-in-touch"

export default function Footer() {

    return (
        <footer className="h-screen bg-[#A64DFF] p-8 flex flex-col justify-end text-black items-center">

            <div className="flex justify-around mb-16 w-full flex-wrap">
                <ul className="flex flex-col gap-1 self-start">
                    <li className="text-xs mb-4">Navigation</li>
                    <Link className="text-5xl" href="/"><HoverAnimate>Home</HoverAnimate></Link>
                    <Link className="text-5xl" href="/services"><HoverAnimate>Services</HoverAnimate></Link>
                    <Link className="text-5xl" href="/process"><HoverAnimate>Process</HoverAnimate></Link>
                    <Link className="text-5xl" href="/works"><HoverAnimate>Works</HoverAnimate></Link>
                    <GetInTouch text="Contact" className="text-5xl" />
                </ul>
                <ul className="flex flex-col self-start">
                    <li className="text-xs mb-4">Info</li>
                    <li className="text-lg"><strong>E:</strong> joe@studioparallel.au</li>
                    <li className="text-lg"><strong>P:</strong> 0412337616</li>
                    <li className="text-lg"><strong>H:</strong> Monday to Friday, 8:30am to 5pm</li>
                </ul>
            </div>

            <div className="flex w-full justify-between">
                <p className="text-[1.5vw]">© 2025 Studio Parallel. All Rights Reserved.</p>
                <div className="flex gap-2">
                    <Link className="text-[1.5vw]" href="/"><HoverAnimate>LinkedIn</HoverAnimate></Link>
                    <Link className="text-[1.5vw]" href="/"><HoverAnimate>Legal Terms</HoverAnimate></Link>
                </div>
            </div>
            <div className="bg-black h-[1px] w-full mb-16"></div>
            <RevealOnScroll>
            <h3 className="text-[10vw]">STUDIO PARALLEL</h3>
            </RevealOnScroll>

        </footer>
    )

}