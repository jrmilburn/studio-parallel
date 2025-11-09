import HeroAnimation from "./hero-animation"
import HeroButton from "./hero-button"

export default function HeroSection() {

    return(
        <section className="relative h-[calc(100vh-24px)] overflow-hidden bg-[#1C1C1E] rounded-b-4xl lg:mx-8">
            <HeroAnimation />
            <div className="container relative h-full flex flex-col items-start px-4 lg:px-16 gap-36 lg:gap-24 w-full justify-center">
                <div className="flex flex-col w-full gap-2 z-10">
                <h1 className="text-5xl lg:text-8xl text-white">Your Business.</h1>
                <h1 className="text-5xl lg:text-8xl text-white">Your Code.</h1>
                </div>
                <p className="text-lg lg:text-3xl text-white lg:max-w-1/2 leading-relaxed z-10">Building and integrating custom software solutions into your workflows to maximise productivity.</p>
                <HeroButton />
            </div>
        </section>
    )

}