import Link from "next/link"

import PricingButton from "./pricing-button"
import RevealOnScroll from "./reveal-on-scroll"

export default function ServiceItem({ heading, body, learnlink, pricinglink} : { heading : string, body : string, learnlink : string, pricinglink : string}) {

    return (
        <RevealOnScroll>
        <div className="w-full flex justify-between items-center py-12 gap-16 text-white">
            <h3 className="text-4xl w-sm">{heading}</h3>
            <div className="flex flex-col items-start gap-6">
                <p className="">{body}</p>
                <div className="flex gap-4 items-center">
                    <Link href={learnlink} className="flex flex-col group">Learn more<div className="w-[0] bg-white group-hover:w-full transition-all h-[1px]"></div></Link>
                    <PricingButton link={pricinglink} />
                </div>
            </div>
        </div>
        </RevealOnScroll>
    )

}