import { PricingSwitcher } from "./pricing-switcher"

export default function PricingLayout({ children }: { children: React.ReactNode }) {

 return(
    <section 
        id="hero"
        className="relative h-[calc(100vh-24px)] overflow-hidden bg-[#1C1C1E] rounded-b-4xl lg:mx-8 flex items-center"
        data-nav-theme="dark"
    >
        <PricingSwitcher />
        {children}
    </section>
 )

}