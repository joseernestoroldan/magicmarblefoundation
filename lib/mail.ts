import EmailTemplate from "@/components/emailTemplates/EmailTemplate";
import SubscriptionTemplate from "@/components/emailTemplates/SubscriptionTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.NEXT_PUBLIC_APP_URL

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/new-verification?token=${token}`;
  const message = "verification";

  await resend.emails.send({
    from: "info@magicmarblefoundation.org",
    to: email,
    subject: "Verification Email - Magic Marble Foundation",
    react: EmailTemplate(confirmLink, message),
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/new-password?token=${token}`;
  const message = "reset";

  await resend.emails.send({
    from: "info@magicmarblefoundation.org",
    to: email,
    subject: "Reset Password Link - Magic Marble Foundation",
    react: EmailTemplate(resetLink, message),
  });
};

export const sendSubscriptionEmail = async (email: string, id:string, title: string, image: string, description: string) => {
  const subscriptionLink = `${domain}/diaries/${id}`;
  const unSubscriptionLink =`${domain}/diaries/unsubscribe?email=${email}`
  const message = "subscription";
  console.log(subscriptionLink)

  await resend.emails.send({
    from: "info@magicmarblefoundation.org",
    to: email,
    subject: "New Magic Diary",
    react: SubscriptionTemplate(subscriptionLink, message, title, image, description,unSubscriptionLink ),
  });
};
