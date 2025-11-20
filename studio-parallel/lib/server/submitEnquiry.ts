"use server";

import {
  GetInTouchFormSchema,
  type GetInTouchFormInput,
} from "./validation/get-in-touch";
import { sendGetInTouchEmail } from "./email";

type SubmitResult =
  | { ok: true }
  | { ok: false; errors: Record<string, string[]> };

export async function submitGetInTouch(
  input: GetInTouchFormInput
): Promise<SubmitResult> {
  // Validate again on the server to avoid trusting the client
  const parsed = GetInTouchFormSchema.safeParse(input);
  if (!parsed.success) {
    return {
      ok: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const data = parsed.data;

  // TODO: optional – save to DB before sending email
  // await prisma.enquiry.create({ data: { ... } });

  await sendGetInTouchEmail(data);

  return { ok: true };
}
