export default function HoverAnimate({ children } : {children : React.ReactNode}){

    return(
        <div className={`overflow-clip h-full group cursor-pointer`}>
            <div className={`h-full relative`}>
                <div className="invisible">{children}</div>
                <div className="absolute top-0 left-0 flex flex-col translate-y-[0%] group-hover:translate-y-[-50%] transition-all duration-300">
                    <span>{children}</span>
                    <span>{children}</span>
                </div>
            </div>
        </div>
    )

}