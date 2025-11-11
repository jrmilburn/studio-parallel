"use client";


import AnimationBlock from "./animation-block"
import RevealOnScroll from "./reveal-on-scroll";

export default function ReviewSection() {


    return (
        <section className="h-screen">
            <div className="lg:mx-12 relative h-full flex flex-col">
            <AnimationBlock 
                pos="7"
                className="top-5! left-1!"
                triggerOnScroll={true}
            />
            <AnimationBlock 
                pos="8"
                className="top-5! left-1!"
                triggerOnScroll={true}
            />
             <AnimationBlock 
                pos="9"
                className="top-5! left-1!"
                triggerOnScroll={true}
            />
            <AnimationBlock 
                pos="10"
                className="top-5! left-1!"
                triggerOnScroll={true}
            />

            <div className="max-w-5xl mx-auto flex justify-end w-full">
                <h2 className="text-6xl mt-24 text-right">The Parallel <br/>difference.</h2>
            </div>

            </div>
        </section>
    )

}