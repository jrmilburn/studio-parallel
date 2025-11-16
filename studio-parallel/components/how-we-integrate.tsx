import ServiceLine from "./service-line"

export default function HowWeIntegrate() {

    return (
        <section
            data-nav-theme="dark" id="how-we-integrate"
            className="relative min-h-screen overflow-hidden bg-[#1C1C1E] rounded-4xl lg:mx-8 flex flex-col items-start px-4 lg:px-16 py-16 gap-8">
            <h2 className="text-7xl text-white">How we <br/>integrate.</h2>
            <p className="self-end text-lg opacity-60 text-white">Parallel...</p>
            <ServiceLine />
        </section>

    )

}