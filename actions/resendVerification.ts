"use server";
import { db } from "@/db";
import { sendVerificationEmail } from "@/lib/mail";
import { GenerateVerificationToken } from "@/lib/tokens";
export const resendVerification = async (token: string | null) => {
  if (token) {
    const userByVerificationToken = await db.verificationToken.findUnique({
      where: { token },
    });
    if (userByVerificationToken) {
      const verificationToken = await GenerateVerificationToken(userByVerificationToken?.email);
      if(verificationToken){
        await sendVerificationEmail(verificationToken.email, verificationToken.token)
        return {success: "Verification token resend"}
      }
    }
  }
  return{error: "something went wrrong"}
};
