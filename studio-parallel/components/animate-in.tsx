export default function AnimateIn({ shown, delay, children } : { shown : boolean, delay : string, children: React.ReactNode }) {

    return (
        <div className={`overflow-clip`}>
            <div className={`h-full ${shown ? "translate-y-[0%]" : "translate-y-[100%]"} transition-all duration-500 ${delay}`}>
                {children}
            </div>
        </div>
    )

}