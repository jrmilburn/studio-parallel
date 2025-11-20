import { Resend } from "resend";
import type { GetInTouchFormInput } from "./validation/get-in-touch";

const resend = new Resend(process.env.RESEND_API_KEY);

const projectTypeLabels: Record<string, string> = {
  new_product: "New product / SaaS",
  improve_existing: "Improve existing product",
  internal_tools: "Internal tools / automation",
  integrations: "Integrations (API / CRM / billing)",
  technical_guidance: "Software / technical guidance",
  not_sure: "Not sure yet",
};

const platformLabels: Record<string, string> = {
  web: "Web app in the browser",
  mobile: "Mobile app only",
  web_and_mobile: "Web + mobile experience",
  specialised: "Specialised setup (desktop / on-prem / hardware)",
  not_sure: "Not sure yet",
};

const budgetLabels: Record<string, string> = {
  "<5k": "< $5k",
  "5k_15k": "$5k – $15k",
  "15k_30k": "$15k – $30k",
  "30k_plus": "$30k+",
};

const timelineLabels: Record<string, string> = {
  asap: "ASAP (0–1 month)",
  one_three: "1–3 months",
  three_six: "3–6 months",
  flexible: "Flexible / just exploring",
};

const hearAboutLabels: Record<string, string> = {
  friend: "Friend / referral",
  google: "Google",
  social: "Social (Instagram, etc.)",
  other: "Other",
};

export async function sendGetInTouchEmail(data: GetInTouchFormInput) {
  const to = process.env.ENQUIRY_NOTIFICATION_EMAIL;
  if (!to) {
    console.warn("ENQUIRY_NOTIFICATION_EMAIL not set");
    return;
  }

  const subject = `New enquiry from ${data.name}`;

  const text = `
New enquiry from Studio Parallel website

[Contact]
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

[Experience]
Worked with developer/studio before: ${data.workedWithDeveloper === "yes" ? "Yes" : "No"}

[Project Type]
${data.projectTypes && data.projectTypes.map((t) => `- ${projectTypeLabels[t] ?? t}`).join("\n")}

[Platform / Day-to-day usage]
${data.platform && (platformLabels[data.platform] ?? data.platform)}

[Budget]
${data.budgetRange ? budgetLabels[data.budgetRange] ?? data.budgetRange : "-"}

[Timeline]
${data.timeline ? timelineLabels[data.timeline] ?? data.timeline : "-"}

[Project Brief]
${data.projectBrief}

[How they heard about Studio Parallel]
${data.hearAbout ? hearAboutLabels[data.hearAbout] ?? data.hearAbout : "-"}
${data.hearAbout === "other" && data.hearAboutOther
  ? `\nDetails: ${data.hearAboutOther}`
  : ""}
  `.trim();

  await resend.emails.send({
    from: "Studio Parallel <noreply@studioparallel.au>",
    to,
    subject,
    replyTo: data.email,
    text,
  });
}
