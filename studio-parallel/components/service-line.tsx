import ServiceItem from "./service-item";

export default function ServiceLine() {
  return (
    <div className="flex flex-col max-w-2xl self-end">
      <div className="w-full bg-white h-[1px]" />

      <ServiceItem
        heading="Integrate"
        body="Connect the tools you already use so data moves automatically and your team stops copy-pasting."
        learnlink="/services#integrate"
      />

      <div className="w-full bg-white h-[1px]" />

      <ServiceItem
        heading="Build"
        body="Design and build a system around how your business actually works — not how off-the-shelf tools think it should."
        learnlink="/services#build"
      />

      <div className="w-full bg-white h-[1px]" />

      <ServiceItem
        heading="Core"
        body="Keep an embedded engineer on your side to maintain, improve and extend your systems month after month."
        learnlink="/services#core"
      />

      <div className="w-full bg-white h-[1px]" />
    </div>
  );
}
