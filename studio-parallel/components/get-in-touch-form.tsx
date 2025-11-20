"use client";

import { useState, useTransition } from "react";
import { createPortal } from "react-dom";

import MultiStepGetInTouchForm, {
  type GetInTouchFormData,
} from "./form-flow";
import AnimateIn from "./animate-in";
import HoverAnimate from "./hover-animate";
import { submitGetInTouch } from "@/lib/server/submitEnquiry";

export default function GetInTouchForm({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  // On the server, `document` doesn't exist, so just render nothing.


  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isPending, startTransition] = useTransition();

  if (typeof document === "undefined") {
    return null;
  }

  const handleComplete = (data: GetInTouchFormData) => {
    setStatus("idle");

    startTransition(async () => {
      const res = await submitGetInTouch(data);

      if (res.ok) {
        setStatus("success");
        // optional: close after a short delay
        // setTimeout(() => setVisible(false), 1600);
      } else {
        setStatus("error");
        console.error(res.errors);
      }
    });
  };

  return createPortal(
    <div
      className={`
        fixed inset-0 z-[99] transition-all duration-700
        ${
          visible
            ? "bg-black/30 pointer-events-auto"
            : "bg-black/0 pointer-events-none"
        }
      `}
    >
      <div
        className={`
          fixed right-0 top-0 bottom-0 max-w-3xl w-full z-[100] transition-all duration-700
          bg-black flex flex-col p-4 py-8 justify-between
          ${
            visible
              ? "translate-x-0 pointer-events-auto"
              : "translate-x-full pointer-events-none"
          }
        `}
      >
        <div className="md:max-w-[25%] w-full absolute left-0 top-0 h-[4px] bg-white z-[101]" />

        <div className="flex justify-between gap-16 text-white">
          <div className="flex flex-col gap-8 flex-2 md:flex-1">
            <AnimateIn
              shown={visible}
              delay={visible === false ? "delay-100" : "delay-300"}
            >
              <h3>Enquiry</h3>
            </AnimateIn>
            <AnimateIn
              shown={visible}
              delay={visible === false ? "delay-0" : "delay-400"}
            >
              <p>
                To make an enquiry, we ask you provide some initial information
                about your goals so we can determine if we are the right fit for
                each other. We will review your request and get back to you within
                2 business days.
              </p>
            </AnimateIn>
          </div>

          <div className="md:flex-1 flex flex-col gap-8">
            <button
              className="self-end cursor-pointer font-semibold"
              onClick={() => setVisible(false)}
            >
              <AnimateIn
                shown={visible}
                delay={visible === false ? "delay-0" : "delay-500"}
              >
                <HoverAnimate>Close</HoverAnimate>
              </AnimateIn>
            </button>
          </div>
        </div>

        <div className="mt-8 flex-1 flex flex-col">
          <MultiStepGetInTouchForm onComplete={handleComplete} />

          {/* Status / feedback */}
          <div className="mt-3 text-xs text-slate-300 min-h-[1.5rem]">
            {isPending && <span>Sending your enquiry…</span>}
            {status === "success" && (
              <span className="text-emerald-400">
                Thanks — I&apos;ll review this and get back to you within 2
                business days.
              </span>
            )}
            {status === "error" && (
              <span className="text-red-400">
                Something went wrong sending your enquiry. Please try again.
              </span>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
