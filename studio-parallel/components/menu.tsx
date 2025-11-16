import Link from "next/link"
import AnimateIn from "./animate-in"
import HoverAnimate from "./hover-animate"

export default function Menu({ open, setOpen } : { open : boolean, setOpen : React.Dispatch<React.SetStateAction<boolean>>}) {

    return (
        <div className={`fixed inset-0 bg-black flex justify-between z-[100] transition-all duration-1000 overflow-hidden ${open ? "translate-y-[0]" : "translate-y-[-100%]"} ${open === false && "delay-500"}`}>
            <div className={`fixed inset-0 p-12 flex justify-between ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
            <div className="flex flex-col justify-between text-white">
                <h3 className="text-3xl">STUDIO PARALLEL</h3>
                <ul className="flex flex-col">
                    <Link className="text-[5vw]" href="/services"><AnimateIn shown={open} delay={open === false ? "delay-500" : "delay-400"}><HoverAnimate>Services</HoverAnimate></AnimateIn></Link>
                    <Link className="text-[5vw]" href="/works"><AnimateIn shown={open} delay={open === false ? "delay-400" : "delay-500"}><HoverAnimate>Works</HoverAnimate></AnimateIn></Link>
                    <Link className="text-[5vw]" href="/process"><AnimateIn shown={open} delay={open === false ? "delay-300" : "delay-600"}><HoverAnimate>Process</HoverAnimate></AnimateIn></Link>
                </ul>
                <div className="flex flex-col">
                    <Link href="/"><AnimateIn shown={open} delay={open === false ? "delay-200" : "delay-700"}><HoverAnimate>INSTAGRAM</HoverAnimate></AnimateIn></Link>
                    <div className="flex flex-col">
                        <Link href="/"><AnimateIn shown={open} delay={open === false ? "delay-100" : "delay-800"}><HoverAnimate>LEGAL TERMS</HoverAnimate></AnimateIn></Link>
                    </div>
                </div>
            </div>
            <button className="font-semibold text-white" onClick={() => setOpen(false)}><AnimateIn shown={open} delay={open === false ? "delay-300" : "delay-600"}><HoverAnimate>Close</HoverAnimate></AnimateIn></button>
            </div>
        </div>
    )

}