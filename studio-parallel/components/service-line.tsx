import ServiceItem from "./service-item";

export default function ServiceLine(){

    return(
        <div className="flex flex-col max-w-2xl self-end" >
            <div className="w-full bg-white h-[1px]"></div>
            <ServiceItem 
                heading="Core"
                body="Parallel core provides a technical partner to work alongside your businesss. An in house tech guy, without the overhead."
                learnlink="/"
                pricinglink=""
            />
            <div className="w-full bg-white h-[1px]"></div>
            <ServiceItem 
                heading="Build"
                body="Parallel build is about providing you with the opportunity to build a custom software application that directly serves your business needs."
                learnlink="/"
                pricinglink=""
            />
            <div className="w-full bg-white h-[1px]"></div>
            <ServiceItem 
                heading="Integrate"
                body="Parallel integrate focuses on developing systems to integrate your existing or new software seamlessly to remove double handling of data."
                learnlink="/"
                pricinglink=""
            />
            <div className="w-full bg-white h-[1px]"></div>

        </div>
    )

}