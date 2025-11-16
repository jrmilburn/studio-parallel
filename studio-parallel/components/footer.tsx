import Link from "next/link"
import RevealOnScroll from "./reveal-on-scroll"
import HoverAnimate from "./hover-animate"

export default function Footer() {

    return (
        <footer className="h-screen bg-[#A64DFF] p-8 flex flex-col justify-end text-black items-center">

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