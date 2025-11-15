export default function PricingButton({ link } : { link : string }) {

    return (
        <button className="bg-white text-black px-2 py-1 rounded-full relative flex justify-between items-center gap-2 group cursor-pointer hover:scale-[1.01] transition-all">
            Pricing {link}
            <div className="relative w-[8px] h-[8px] flex items-center justify-center">
                <span className="absolute w-[8px] h-[8px] bg-none border rounded-full border-black group-hover:h-[3px] group-hover:w-[3px] group-hover:bg-black transition-all"></span>
            </div>
        </button>
    )

}