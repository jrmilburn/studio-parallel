import HoverAnimate from "./hover-animate";

export default function HeroButton({ text } : { text?: string }) {

    return (
        <button className="bg-[#A64DFF] px-4 py-2 rounded-full relative flex justify-between items-center text-white gap-2 group cursor-pointer transition-all z-10">
            <HoverAnimate>
            {text ? text : "See what we do"}
            </HoverAnimate>
            <div className="relative w-[8px] h-[8px] flex items-center justify-center">
                <span className="absolute w-[8px] h-[8px] bg-none border border-black rounded-full border-white group-hover:h-[3px] group-hover:w-[3px] group-hover:bg-white transition-all"></span>
            </div>
        </button>
    )

}