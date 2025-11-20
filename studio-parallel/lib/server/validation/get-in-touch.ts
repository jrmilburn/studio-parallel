// lib/validation/get-in-touch.ts
import { z } from "zod";

export const workedWithDeveloperValues = ["yes", "no"] as const;
export const projectTypeValues = [
  "new_product",
  "improve_existing",
  "internal_tools",
  "integrations",
  "technical_guidance",
  "not_sure",
] as const;

export const budgetRangeValues = ["<5k", "5k_15k", "15k_30k", "30k_plus"] as const;
export const timelineValues = ["asap", "one_three", "three_six", "flexible"] as const;
export const hearAboutValues = ["friend", "google", "social", "other"] as const;
export const platformValues = [
  "web",
  "mobile",
  "web_and_mobile",
  "specialised",
  "not_sure",
] as const;

export const GetInTouchFormSchema = z.object({
  name: z.string().min(1).nullable(),
  email: z.string().email(),
  phone: z.string().min(4).nullable(),

  workedWithDeveloper: z.enum(workedWithDeveloperValues).nullable(),

  projectTypes: z
    .array(z.enum(projectTypeValues))
    .min(1, "Select at least one project type").nullable(),

  platform: z.enum(platformValues).nullable(),

  budgetRange: z.enum(budgetRangeValues).nullable(), // optional in your UI
  timeline: z.enum(timelineValues).nullable(),

  projectBrief: z.string().min(10).nullable(),

  hearAbout: z.enum(hearAboutValues).nullable(),
  hearAboutOther: z.string().optional().default("").nullable(),
});

export type GetInTouchFormInput = z.infer<typeof GetInTouchFormSchema>;
