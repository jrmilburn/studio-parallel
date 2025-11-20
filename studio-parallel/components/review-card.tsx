import Image from "next/image";
import HoverAnimate from "./hover-animate";
import Link from "next/link";

export default function ReviewCard({
  image,
  heading,
  name,
  position,
  casestudy,
}: {
  image: string;
  heading: string;
  name: string;
  position: string;
  casestudy?: string;
}) {
  return (
    <div className="max-w-xl mx-auto w-full rounded-2xl border border-black/10 bg-white/60 p-6 sm:p-8 flex flex-col gap-5">
      {/* Heading */}
      <h3 className="text-lg sm:text-2xl font-semibold leading-snug">
        {heading}
      </h3>

      {/* Avatar + link */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <ReviewAvatar image={image} name={name} subheading={position} />
        {casestudy && (
          <Link href={casestudy} className="sm:self-end group flex gap-2">
            <HoverAnimate>View case study</HoverAnimate><span aria-hidden className="group-hover:translate-x-[2px] transition-all">→</span>
          </Link>
        )}
      </div>
    </div>
  );
}

function ReviewAvatar({
  image,
  name,
  subheading,
}: {
  image: string;
  name: string;
  subheading: string;
}) {
  return (
    <div className="flex gap-3 items-center">
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden">
        <Image
          src={image}
          height={128}
          width={128}
          alt="Profile image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col">
        <h4 className="text-sm font-semibold">{name}</h4>
        <p className="text-xs sm:text-sm opacity-60">{subheading}</p>
      </div>
    </div>
  );
}
