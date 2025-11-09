import HeroSection from "@/components/hero-section"
import WhatWeDo from "@/components/what-we-do"
import HowWeIntegrate from "@/components/how-we-integrate"

export default function Home() {

  return (
    <main className="w-full h-full bg-white">
      <HeroSection />
      <WhatWeDo />
      <HowWeIntegrate />
    </main>
  )

}