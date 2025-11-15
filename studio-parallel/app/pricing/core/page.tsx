import PricingSection, { PricingSectionData } from "@/components/pricing-cards";

const pricingData: PricingSectionData = {
  label: "CORE",
  heading: "Core Retainer Pricing",
  description:
    "A monthly technical partnership designed to give you an embedded engineer — without the full-time cost.",
  plans: [
    {
      title: "Core Lite",
      price: 1200,
      features: [
        "Up to 4 technical sessions per month",
        "Light optimisations & fixes",
        "Small improvements to existing systems",
        "Strategy guidance & technical review",
        "48–72 hour response time"
      ],
      buttonText: "Start Core Lite"
    },
    {
      title: "Core Standard",
      price: 2400,
      mostPopular: true,
      features: [
        "Up to 8 sessions or tasks per month",
        "Priority 24-hour response time",
        "Ongoing optimisation & improvements",
        "Small integrations (email, automations, UI tweaks)",
        "Monthly systems roadmap check-in"
      ],
      buttonText: "Start Core Standard"
    },
    {
      title: "Core Premium",
      price: 5000,
      features: [
        "Up to 16 tasks per month",
        "Same-day priority support",
        "Custom automation & workflow support",
        "Proactive monitoring of key systems",
        "Quarterly improvement planning",
        "Dedicated direct communication line"
      ],
      buttonText: "Book Consultation"
    }
  ],
  type: "MONTHLY"
};

export default function CorePage() {
  return <PricingSection data={pricingData} />;
}
