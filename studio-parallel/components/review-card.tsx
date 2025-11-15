import Image from "next/image"

export default function ReviewCard({ image, heading, name, position } : { image : string, heading : string, name : string, position : string}) {

    return (
        <div className="max-w-xl mx-auto w-full rounded border border-black/10 flex flex-col gap-4 p-8">
            <h3 className="text-2xl font-bold">{heading}</h3>
            <ReviewAvatar 
                image={image}
                name={name}
                subheading={position}
            />
        </div>
    )

}

function ReviewAvatar({ image, name, subheading } : { image : string, name : string, subheading : string}) {

    return(
        <div className="flex gap-4 items-center">
            <div className="w-8 h-8">
            <Image 
                src={image}
                height={128}
                width={128}
                alt="Profile image"
                className="w-full h-full"
            />
            </div>
            <div className="flex flex-col">
                <h4 className="text-sm font-bold">{name}</h4>
                <p className="text-sm opacity-60">{subheading}</p>
            </div>
        </div>
    )

}