import EmailTemplate from "@/components/emailTemplates/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/new-verification?token=${token}`;
  const message = "verification";

  await resend.emails.send({
    from: "info@magicmarblefoundation.org",
    to: email,
    subject: "Verification Email - Magic Marble Foundation",
    react: EmailTemplate(confirmLink, message),
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/new-password?token=${token}`;
  const message = "reset";

  await resend.emails.send({
    from: "info@magicmarblefoundation.org",
    to: email,
    subject: "Reset Password Link - Magic Marble Foundation",
    react: EmailTemplate(resetLink, message),
  });
};
