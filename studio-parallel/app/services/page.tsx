import HeroSection from "./hero-section"
import Services from "./services"
import { ServicesIntro, ServicesCTA } from "./services"


export default function ServicesPage() {

    return (
        <main className="w-full h-full bg-white">
            <HeroSection />
            <ServicesIntro />
            <Services />
            <ServicesCTA />
        </main>
    )

}