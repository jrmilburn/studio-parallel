"use client";

import { useState } from "react";
import HoverAnimate from "./hover-animate";

type WorkedWithDeveloper = "yes" | "no" | null;

type ProjectType =
  | "new_product"
  | "improve_existing"
  | "internal_tools"
  | "integrations"
  | "technical_guidance"
  | "not_sure";

type BudgetRange = "<5k" | "5k_15k" | "15k_30k" | "30k_plus" | null;

type Timeline =
  | "asap"
  | "one_three"
  | "three_six"
  | "flexible"
  | null;

type HearAbout =
  | "friend"
  | "google"
  | "social"
  | "other"
  | null;

  type Platform =
  | "web"
  | "mobile"
  | "web_and_mobile"
  | "specialised"
  | "not_sure"
  | null;


export interface GetInTouchFormData {
  name: string;
  email: string;
  phone: string;
  workedWithDeveloper: WorkedWithDeveloper;
  projectTypes: ProjectType[];
  platform: Platform;          // 👈 NEW
  budgetRange: BudgetRange;
  timeline: Timeline;
  projectBrief: string;
  hearAbout: HearAbout;
  hearAboutOther: string;
}

interface MultiStepGetInTouchProps {
  onComplete?: (data: GetInTouchFormData) => void;
}

const TOTAL_STEPS = 7;

function optionButtonBase(active: boolean) {
  return [
    "w-full text-center py-4 px-4 rounded-md text-sm md:text-base font-medium transition-colors",
    active
      ? "bg-[#2E2E30] text-white"
      : "bg-[#F5F5F5] text-black hover:bg-[#E5E5E5]",
  ].join(" ");
}

export default function MultiStepGetInTouchForm({
  onComplete,
}: MultiStepGetInTouchProps) {
  const [step, setStep] = useState(1);

  const [data, setData] = useState<GetInTouchFormData>({
    name: "",
    email: "",
    phone: "",
    workedWithDeveloper: null,
    projectTypes: [],
    platform: null,              // 👈 NEW
    budgetRange: null,
    timeline: null,
    projectBrief: "",
    hearAbout: null,
    hearAboutOther: "",
  });

  const update = <K extends keyof GetInTouchFormData>(
    key: K,
    value: GetInTouchFormData[K]
  ) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const toggleProjectType = (type: ProjectType) => {
    setData((prev) => {
      const exists = prev.projectTypes.includes(type);
      return {
        ...prev,
        projectTypes: exists
          ? prev.projectTypes.filter((t) => t !== type)
          : [...prev.projectTypes, type],
      };
    });
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return data.name.trim() && data.email.trim() && data.phone.trim();
      case 2:
        return data.workedWithDeveloper !== null;
      case 3:
        return data.projectTypes.length > 0;
      case 4:
        return data.platform !== null;           // 👈 NEW
      case 5:
        return data.budgetRange !== null;
      case 6:
        return data.timeline !== null;
      case 7:
        return data.projectBrief.trim().length > 0;
      default:
        return true;
    }
  };


  const handleNext = () => {
    if (!isStepValid()) return;

    if (step < TOTAL_STEPS) {
      setStep((s) => s + 1);
    } else {
      onComplete?.(data);
      // You could also reset here if you want:
      // setStep(1);
      // setData(initialState);
    }
  };

  const handleBack = () => {
    if (step === 1) return;
    setStep((s) => s - 1);
  };

  const nextLabel = step === TOTAL_STEPS ? "Submit form" : "Next";

  return (
    <section className="flex flex-col h-full bg-black text-slate-50">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] uppercase">
            {step <= 2 ? "Your personal details" : "Project particulars"}
          </p>
        </div>
        <p className="text-xs md:text-sm font-medium text-slate-300">
          ({String(step).padStart(2, "0")}/{String(TOTAL_STEPS).padStart(2, "0")}
          )
        </p>
      </header>

      <hr className="border-slate-800 mb-6" />

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-16">
        {step === 1 && (
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm md:text-base font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full bg-[#E4ECFF] text-black rounded-md py-3 px-4 text-sm md:text-base outline-none"
                value={data.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Joe Milburn"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm md:text-base font-medium">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full bg-[#E4ECFF] text-black rounded-md py-3 px-4 text-sm md:text-base outline-none"
                value={data.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm md:text-base font-medium">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                className="w-full bg-[#E4ECFF] text-black rounded-md py-3 px-4 text-sm md:text-base outline-none"
                value={data.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="0412 337 616"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <p className="text-sm md:text-base font-medium">
              Have you worked with a developer or software studio before?{" "}
              <span className="text-red-500">*</span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                type="button"
                className={optionButtonBase(data.workedWithDeveloper === "yes")}
                onClick={() => update("workedWithDeveloper", "yes")}
              >
                YES
              </button>
              <button
                type="button"
                className={optionButtonBase(data.workedWithDeveloper === "no")}
                onClick={() => update("workedWithDeveloper", "no")}
              >
                NO
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <p className="text-sm md:text-base font-medium">
              What type of project are you looking for?{" "}
              <span className="text-red-500">*</span>
              <span className="text-slate-400 text-xs ml-1">
                (you can choose multiple)
              </span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                type="button"
                className={optionButtonBase(
                  data.projectTypes.includes("new_product")
                )}
                onClick={() => toggleProjectType("new_product")}
              >
                NEW PRODUCT / SAAS
              </button>
              <button
                type="button"
                className={optionButtonBase(
                  data.projectTypes.includes("improve_existing")
                )}
                onClick={() => toggleProjectType("improve_existing")}
              >
                IMPROVE EXISTING PRODUCT
              </button>
              <button
                type="button"
                className={optionButtonBase(
                  data.projectTypes.includes("internal_tools")
                )}
                onClick={() => toggleProjectType("internal_tools")}
              >
                INTERNAL TOOLS / AUTOMATION
              </button>
              <button
                type="button"
                className={optionButtonBase(
                  data.projectTypes.includes("integrations")
                )}
                onClick={() => toggleProjectType("integrations")}
              >
                INTEGRATIONS (API / CRM / BILLING)
              </button>
              <button
                type="button"
                className={optionButtonBase(
                  data.projectTypes.includes("technical_guidance")
                )}
                onClick={() => toggleProjectType("technical_guidance")}
              >
                SOFTWARE / TECHNICAL GUIDANCE
              </button>
              <button
                type="button"
                className={optionButtonBase(
                  data.projectTypes.includes("not_sure")
                )}
                onClick={() => toggleProjectType("not_sure")}
              >
                NOT SURE YET
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <p className="text-sm md:text-base font-medium">
              How will people use this software day to day?{" "}
              <span className="text-red-500">*</span>
              <span className="text-slate-400 text-xs ml-1">
                (this helps me understand whether it&apos;s web, mobile, or something else)
              </span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                type="button"
                className={optionButtonBase(data.platform === "web")}
                onClick={() => update("platform", "web")}
              >
                WEB APP IN THE BROWSER  
                <span className="block text-[11px] mt-1 text-slate-300">
                  (laptop / desktop / phone via a website)
                </span>
              </button>

              <button
                type="button"
                className={optionButtonBase(data.platform === "mobile")}
                onClick={() => update("platform", "mobile")}
              >
                MOBILE APP ONLY  
                <span className="block text-[11px] mt-1 text-slate-300">
                  (downloaded from the App Store / Google Play)
                </span>
              </button>

              <button
                type="button"
                className={optionButtonBase(data.platform === "web_and_mobile")}
                onClick={() => update("platform", "web_and_mobile")}
              >
                WEB + MOBILE EXPERIENCE  
                <span className="block text-[11px] mt-1 text-slate-300">
                  (works in the browser and has a mobile presence)
                </span>
              </button>

              <button
                type="button"
                className={optionButtonBase(data.platform === "specialised")}
                onClick={() => update("platform", "specialised")}
              >
                SPECIALISED SETUP  
                <span className="block text-[11px] mt-1 text-slate-300">
                  (desktop software, on-prem systems, hardware, etc.)
                </span>
              </button>

              <button
                type="button"
                className={optionButtonBase(data.platform === "not_sure")}
                onClick={() => update("platform", "not_sure")}
              >
                NOT SURE YET  
                <span className="block text-[11px] mt-1 text-slate-300">
                  I&apos;d like guidance on the best approach
                </span>
              </button>
            </div>
          </div>
        )}


        {step === 5 && (
          <div className="space-y-4">
            <p className="text-sm md:text-base font-medium">
              Project budget range (if known)
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                type="button"
                className={optionButtonBase(data.budgetRange === "<5k")}
                onClick={() => update("budgetRange", "<5k")}
              >
                {"< $5k"}
              </button>
              <button
                type="button"
                className={optionButtonBase(data.budgetRange === "5k_15k")}
                onClick={() => update("budgetRange", "5k_15k")}
              >
                $5k – $15k
              </button>
              <button
                type="button"
                className={optionButtonBase(data.budgetRange === "15k_30k")}
                onClick={() => update("budgetRange", "15k_30k")}
              >
                $15k – $30k
              </button>
              <button
                type="button"
                className={optionButtonBase(data.budgetRange === "30k_plus")}
                onClick={() => update("budgetRange", "30k_plus")}
              >
                $30k+
              </button>
            </div>

            <p className="text-xs text-slate-500">
              This helps set expectations — we’ll still tailor a proposal to your
              exact needs.
            </p>
          </div>
        )}

        {step === 6 && (
          <div className="space-y-4">
            <p className="text-sm md:text-base font-medium">
              Project timeline for design and/or build (if known)
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                type="button"
                className={optionButtonBase(data.timeline === "asap")}
                onClick={() => update("timeline", "asap")}
              >
                ASAP (0–1 MONTH)
              </button>
              <button
                type="button"
                className={optionButtonBase(data.timeline === "one_three")}
                onClick={() => update("timeline", "one_three")}
              >
                1–3 MONTHS
              </button>
              <button
                type="button"
                className={optionButtonBase(data.timeline === "three_six")}
                onClick={() => update("timeline", "three_six")}
              >
                3–6 MONTHS
              </button>
              <button
                type="button"
                className={optionButtonBase(data.timeline === "flexible")}
                onClick={() => update("timeline", "flexible")}
              >
                FLEXIBLE / JUST EXPLORING
              </button>
            </div>
          </div>
        )}

        {step === 7 && (
          <div className="space-y-5">
            <div className="space-y-2">
              <p className="text-sm md:text-base font-medium">
                Design brief / project details{" "}
                <span className="text-red-500">*</span>
              </p>
              <textarea
                className="w-full min-h-[160px] bg-[#1F1F1F] text-slate-100 rounded-md py-3 px-4 text-sm md:text-base outline-none resize-y"
                value={data.projectBrief}
                onChange={(e) => update("projectBrief", e.target.value)}
                placeholder="Tell me about your project, goals, constraints, and anything else that would help."
              />
            </div>

            <div className="space-y-3">
              <p className="text-sm md:text-base font-medium">
                How did you hear about Studio Parallel?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  type="button"
                  className={optionButtonBase(data.hearAbout === "friend")}
                  onClick={() => update("hearAbout", "friend")}
                >
                  FRIEND / REFERRAL
                </button>
                <button
                  type="button"
                  className={optionButtonBase(data.hearAbout === "google")}
                  onClick={() => update("hearAbout", "google")}
                >
                  GOOGLE
                </button>
                <button
                  type="button"
                  className={optionButtonBase(data.hearAbout === "social")}
                  onClick={() => update("hearAbout", "social")}
                >
                  SOCIAL (INSTAGRAM, ETC.)
                </button>
                <button
                  type="button"
                  className={optionButtonBase(data.hearAbout === "other")}
                  onClick={() => update("hearAbout", "other")}
                >
                  OTHER
                </button>
              </div>

              {data.hearAbout === "other" && (
                <input
                  type="text"
                  className="w-full bg-[#1F1F1F] text-slate-100 rounded-md py-3 px-4 text-sm md:text-base outline-none"
                  placeholder="Please provide details…"
                  value={data.hearAboutOther}
                  onChange={(e) => update("hearAboutOther", e.target.value)}
                />
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer navigation */}
      <footer className="flex items-center justify-between mt-4">
        <button
          type="button"
          disabled={step === 1}
          onClick={handleBack}
          className={`text-xs md:text-sm font-semibold tracking-wide mr-4 ${
            step === 1
              ? "text-slate-600 cursor-default"
              : "text-slate-100 hover:text-white"
          }`}
        >
          {step === 1 ? "" : "BACK"}
        </button>

        <button
          type="button"
          onClick={handleNext}
          disabled={!isStepValid()}
          className={`
            flex items-center justify-center px-6 md:px-8 py-3 rounded-full text-xs md:text-sm font-semibold tracking-wide
            transition-colors
            ${isStepValid()
              ? "bg-white text-black hover:bg-slate-100"
              : "bg-slate-600 text-slate-300 cursor-not-allowed"}
          `}
        >
          <HoverAnimate>{nextLabel.toUpperCase()} →</HoverAnimate>
        </button>
      </footer>
    </section>
  );
}
