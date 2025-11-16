"use client"

import Link from "next/link"

import RevealOnScroll from "./reveal-on-scroll"
import HoverAnimate from "./hover-animate"

export default function ServiceItem({ heading, body, learnlink } : { heading : string, body : string, learnlink : string, pricinglink : string}) {


    return (
        <>
        <RevealOnScroll>
        <div className="w-full flex justify-between items-center py-12 gap-16 text-white">
            <h3 className="text-4xl w-sm">{heading}</h3>
            <div className="flex flex-col items-start gap-6">
                <p className="">{body}</p>
                <div className="flex gap-4 items-center">
                    <Link href={learnlink} className="flex flex-col group"><HoverAnimate>Learn more</HoverAnimate><div className="w-[0] bg-white group-hover:w-full transition-all h-[1px]"></div></Link>
                </div>
            </div>
        </div>
        </RevealOnScroll>
        </>
    )

}