
"use client";

export interface PricingPlan {
  title: string;
  price: number;
  features: string[];
  buttonText: string;
  mostPopular?: boolean;
}

export interface PricingSectionData {
  label?: string;       // e.g. "PRICING"
  heading: string;      // e.g. "Our Pricing Plans"
  description?: string; // subtitle paragraph
  plans: PricingPlan[];
  type: string;
}

// components/pricing-section.tsx
import React from "react";
import HoverAnimate from "./hover-animate";

export interface PricingPlan {
  title: string;
  price: number;
  features: string[];
  buttonText: string;
  mostPopular?: boolean;
}

export interface PricingSectionData {
  label?: string;
  heading: string;
  description?: string;
  plans: PricingPlan[];
}

interface PricingSectionProps {
  data: PricingSectionData;
  // Optional: hook into button clicks if you want (e.g. open modal, checkout, etc.)
  onPlanSelect?: (plan: PricingPlan) => void;
}

const ACCENT = "#A64DFF";

export default function PricingSection({ data, onPlanSelect }: PricingSectionProps) {
  const { label, heading, description, plans, type } = data;

  return (
    <div className="w-full">
      {/* Header */}
      {label && (
        <p className="text-center uppercase tracking-[0.2em] text-xs font-semibold" style={{ color: ACCENT }}>
          {label}
        </p>
      )}

      <h3 className="text-3xl md:text-4xl font-semibold text-center mx-auto mt-2 text-slate-50">
        {heading}
      </h3>

      {description && (
        <p className="text-sm md:text-base text-slate-400 text-center mt-4 max-w-xl mx-auto">
          {description}
        </p>
      )}

      {/* Cards */}
      <div className="mt-12 flex flex-wrap items-stretch justify-center gap-6 w-full">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className={`relative p-6 rounded-2xl max-w-xs w-full shadow-[0_18px_60px_rgba(0,0,0,0.6)] border
              bg-slate-900/70
              border-slate-800
              ${plan.mostPopular ? "border-[var(--accent)] bg-slate-900/90" : ""}
            `}
            style={
              plan.mostPopular
                ? ({ ["--accent" as any]: ACCENT } as React.CSSProperties)
                : undefined
            }
          >
            {/* Most Popular Badge */}
            {plan.mostPopular && (
              <div
                className="flex items-center text-[11px] gap-1 py-1.5 px-2 absolute top-4 right-4 rounded-full font-medium shadow-lg"
                style={{ backgroundColor: ACCENT, color: "#F9FAFB" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0"
                >
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                  <path d="M20 2v4" />
                  <path d="M22 4h-4" />
                  <circle cx="4" cy="20" r="2" />
                </svg>
                <span>Most Popular</span>
              </div>
            )}

            {/* Title & Price */}
            <p className="font-medium text-slate-100">{plan.title}</p>
            <h4 className="text-3xl font-semibold mt-1 text-slate-50">
              ${plan.price}
              {type === "MONTHLY" && (
                <span className="font-normal text-sm text-slate-400 ml-1">/mo</span>
              )}
            </h4>

            <hr className="my-8 border-slate-800" />

            {/* Features */}
            <div className="space-y-2 text-sm text-slate-300">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={ACCENT}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Button */}
            <button
              className={`mt-8 w-full py-3 rounded-full flex justify-center font-medium text-sm tracking-wide transition-colors border
                ${
                  plan.mostPopular
                    ? "text-white shadow-[0_12px_40px_rgba(166,77,255,0.55)]"
                    : "bg-slate-900 text-slate-100 border-slate-700 hover:bg-slate-800"
                }
              `}
              style={
                plan.mostPopular
                  ? ({
                      backgroundColor: ACCENT,
                      borderColor: ACCENT,
                    } as React.CSSProperties)
                  : ({} as React.CSSProperties)
              }
              onClick={() => onPlanSelect?.(plan)}
            >
              <HoverAnimate><span className="w-full h-full">{plan.buttonText}</span></HoverAnimate>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

