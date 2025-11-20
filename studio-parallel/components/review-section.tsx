"use client";


import AnimationBlock from "./animation-block"
import ReviewCard from "./review-card";

export default function ReviewSection() {


    return (
        <section className="h-[150vh] relative lg:mx-12" data-nav-theme="light">
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

            <AnimationBlock 
                pos="11"
                className="!top-auto !left-auto !bottom-5 !right-1 block11x"
                triggerOnScroll={true}
            />
            <AnimationBlock 
                pos="12"
                className="!top-auto !left-auto !bottom-5 !right-1 block12y"
                triggerOnScroll={true}
            />
             <AnimationBlock 
                pos="13"
                className="!top-auto !left-auto !bottom-5 !right-1 block13xy"
                triggerOnScroll={true}
            />
            <AnimationBlock 
                pos="14"
                className="!top-auto !left-auto !bottom-5 !right-1 block14y"
                triggerOnScroll={true}
                threshold={0.95}
            />
            <div className=" relative h-[75%] flex flex-col justify-between">


            <div className="max-w-5xl mx-auto flex justify-end w-full">
                <h2 className="text-6xl mt-52 md:mt-24 text-right pr-4 lg:pr-0">The Parallel <br/>difference.</h2>
            </div>
            <ReviewCard 
                image="/"
                heading={`“Admin time is the number one take away from my business. Studio Parallel’s integration meant I no longer spend time double handling data.”`}
                name="Rachele Milburn"
                position="Manager, Caribeae Swimming Academy"
                casestudy="/works/caribeae"
            />
            <ReviewCard 
                image="/hayden.jpeg"
                heading={`“Handling client and scheduling data manually was the biggest thing holding our business back. SP’s custom software for our business has taken the stress off data handling and given me hours of time back.”`}
                name="Hayden Richardson"
                position="Founder, Flowchannels"
                casestudy="/works/cliniko"
            />
            </div>
        </section>
    )

}