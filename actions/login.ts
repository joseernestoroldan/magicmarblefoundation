"use server";
import * as z from "zod";
import { loginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { GenerateVerificationToken } from "@/app/lib/tokens";
import { getUserByEmail } from "@/data/user";
import { sendVerificationEmail } from "@/app/lib/mail";

export const login = async (values: z.infer<typeof loginSchema>) => {
  const validatedFields = loginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email)
   if(!existingUser || !existingUser.password || !existingUser.email){
    return {error: "Account does not exist"}
   }
   if(!existingUser.emailVerified){
    const verificationToken = await GenerateVerificationToken(existingUser.email)
    await sendVerificationEmail(verificationToken.email, verificationToken.token)
    return {confirmation: "We have sent you a confirmation email."}
   }

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    return { success: "Email Sent!" };
  } catch (error) {
  
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CallbackRouteError":
          return { error: "Wrong Credentials" };
        case "CredentialsSignin":
          return { error: "Invalid Credentials" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
};
