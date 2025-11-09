import Button from "./button"

export default function WhatWeDo() {

    return (
        <div className="relative h-screen flex flex-col items-start px-4 lg:px-16 py-16 gap-8">
            <p className="text-lg opacity-60">Studio Parallel in Action.</p>
            <h2 className="text-6xl mb-16">What we do.</h2>
            <div className="self-end flex flex-col items-start max-w-3xl gap-8">
                <h3 className="text-4xl">We specialise in the development and integration of software solutions for business.</h3>
                <p className="text-lg">While commercial software solutions are great, we recognise that sometimes you need something a little more tailored.</p>
                <p className="text-lg">Reach out to see how we can help you today.</p>
                <Button text="See more" />
            </div>
        </div>
    )

}