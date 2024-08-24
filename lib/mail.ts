import AdoptionTemplate from "@/components/emailTemplates/AdoptionTemplate";
import EmailTemplate from "@/components/emailTemplates/EmailTemplate";
import NewAdoptionTemplate from "@/components/emailTemplates/NewAdoptionTemplate";
import SubscriptionTemplate from "@/components/emailTemplates/SubscriptionTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.NEXT_PUBLIC_APP_URL;

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

export const sendSubscriptionEmail = async (
  email: string,
  id: string,
  title: string,
  image: string,
  description: string
) => {
  const subscriptionLink = `${domain}/diaries/${id}`;
  const unSubscriptionLink = `${domain}/diaries/unsubscribe?email=${email}`;
  const message = "subscription";

  await resend.emails.send({
    from: "info@magicmarblefoundation.org",
    to: email,
    subject: "New Magic Diary",
    react: SubscriptionTemplate(
      subscriptionLink,
      message,
      title,
      image,
      description,
      unSubscriptionLink
    ),
  });
};

export const sendUserAdoptingEmail = async (
  email: string,
  animalName: string,
  animalImage: string,
  firstName: string
) => {
  await resend.emails.send({
    from: "info@magicmarblefoundation.org",
    to: email,
    subject: "Adoption Form",
    react: AdoptionTemplate(animalName, animalImage, firstName),
  });
};

export const sendAdminAdoptingEmail = async (
  animalName: string,
  animalId: string,
  firstName: string,
  secondName: string,
  email: string,
  country: string,
  codeNumber: string,
  number: string,
  address:string,
) => {
  await resend.emails.send({
    from: "info@magicmarblefoundation.org",
    to: "joseernestoroldan@gmail.com",
    subject: "New Potetial Adopter",
    react: NewAdoptionTemplate(
      animalName,
      animalId,
      firstName,
      secondName,
      email,
      country,
      codeNumber,
      number,
      address,
    ),
  });
};
