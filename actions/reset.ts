"use server";
import * as z from "zod";
import { resetSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { GeneratePasswordResetToken } from "@/app/lib/tokens";
import { sendPasswordResetEmail } from "@/app/lib/mail";

export const reset = async (value: z.infer<typeof resetSchema>) => {
  const validatedFields = resetSchema.safeParse(value);

  if (!validatedFields.success) {
    return { error: "Invalid Email" };
  }

  const { email } = validatedFields.data;
  const exixtingUser = await getUserByEmail(email);

  if (!exixtingUser) {
    return { error: "Email not found" };
  }

  const passwordResetToken = await GeneratePasswordResetToken(email);
  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token
  );

  //todo generete token and send email

  return { success: "We have sent a reset link to your email." };
};
