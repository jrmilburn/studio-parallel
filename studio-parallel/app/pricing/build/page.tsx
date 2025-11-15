import PricingSection, { PricingSectionData } from "@/components/pricing-cards";

const pricingData: PricingSectionData = {
  label: "BUILD",
  heading: "Build Pricing",
  description:
    "Outcome-focused pricing designed for any stage — whether you're shipping a lean MVP or a fully-featured platform.",
  plans: [
    {
      title: "Starter Build",
      price: 5000,
      features: [
        "Lightweight MVP or tool",
        "Core screens & simple flows",
        "Database + API setup",
        "Production deployment",
        "Basic handover documentation",
        "2–3 week delivery"
      ],
      buttonText: "Start Starter Build"
    },
    {
      title: "Growth Build",
      price: 15000,
      mostPopular: true,
      features: [
        "Full custom web application",
        "Advanced flows & business logic",
        "Integrations (Clerk, Twilio, Email, Storage, Payments)",
        "Admin panel included",
        "Documentation + video walkthrough",
        "3 months post-launch support"
      ],
      buttonText: "Start Growth Build"
    },
    {
      title: "Premium Build",
      price: 30000,
      features: [
        "High-scale platform or SaaS",
        "Multi-portal (admin, staff, client)",
        "Real-time features & scheduling",
        "Custom API integrations",
        "Performance & security optimisation",
        "Ongoing technical partnership option"
      ],
      buttonText: "Book Consultation"
    }
  ],
  type: "ONE-OFF"
};

export default function BuildPage() {

    return (
        <PricingSection 
            data={pricingData}
        />
    )

}
