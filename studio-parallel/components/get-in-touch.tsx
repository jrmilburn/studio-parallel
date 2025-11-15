"use client"

import GetInTouchForm from "./get-in-touch-form"

import { useState } from "react"

export default function GetInTouch(){

    const [formShown, setFormShown] = useState(false)

    return(
        <>
        <button 
            className="bg-[#A64DFF] px-4 py-2 rounded-full flex justify-between items-center text-white gap-2 group cursor-pointer transition-all"
            onClick={() => setFormShown(true)}
            >
            Get in touch
            <div className="relative w-[8px] h-[8px] flex items-center justify-center">
                <span className="absolute w-[8px] h-[8px] bg-none border border-black rounded-full border-white group-hover:h-[3px] group-hover:w-[3px] group-hover:bg-white transition-all"></span>
            </div>
        </button>

        <GetInTouchForm 
            visible={formShown}
            setVisible={setFormShown}
        />
        </>
    )

}