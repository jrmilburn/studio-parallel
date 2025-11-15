import PricingSection, { PricingSectionData } from "@/components/pricing-cards";

const pricingData: PricingSectionData = {
  label: "INTEGRATE",
  heading: "Integration & Automation Pricing",
  description:
    "Connect your systems, automate operations, and eliminate double handling with clean, reliable integrations.",
  plans: [
    {
      title: "Basic Integration",
      price: 1500,
      features: [
        "Single workflow automation",
        "API-to-API sync or Zapier/Make cleanup",
        "Basic validation & data mapping",
        "Error handling & testing included",
        "1–2 week delivery"
      ],
      buttonText: "Start Basic Integration"
    },
    {
      title: "Standard Integration",
      price: 4000,
      mostPopular: true,
      features: [
        "Multi-step automations",
        "Custom webhook handling",
        "Scheduled jobs & triggers",
        "Automated reporting and notifications",
        "Integration monitoring & error alerts",
        "2–4 week delivery"
      ],
      buttonText: "Start Standard Integration"
    },
    {
      title: "Premium Integration",
      price: 10000,
      features: [
        "Large-scale process automation",
        "Multi-system orchestration",
        "Full data migration & reconciliation",
        "Custom API microservices",
        "Advanced error monitoring dashboard",
        "Post-deployment support included"
      ],
      buttonText: "Book Consultation"
    }
  ],
  type: "ONE-OFF"
};

export default function IntegratePage() {
  return <PricingSection data={pricingData} />;
}
