import AdoptionTemplate from "@/components/emailTemplates/AdoptionTemplate";
import DonationTemplate from "@/components/emailTemplates/DonationTemplate";
import DonatorTemplate from "@/components/emailTemplates/DonatorTemplate";
import EmailTemplate from "@/components/emailTemplates/EmailTemplate";
import NewAdoptionTemplate from "@/components/emailTemplates/NewAdoptionTemplate";
import SponsorAdminTemplate from "@/components/emailTemplates/SponsorAdminTemplate";
import SponsorTemplate from "@/components/emailTemplates/SponsorTemplate";
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
    react: AdoptionTemplate(animalName, firstName),
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
  address: string
) => {
  await resend.emails.send({
    from: "info@magicmarblefoundation.org",
    to: "info@magicmarblefoundation.org",
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
      address
    ),
  });
};

type invoice = {
  email: string;
  totalValue: string;
  firstName: string;
  secondName: string;
  country: string;
  address: string;
  telephone: string;
};

export const sendAdminDonateEmail = async (invoice: invoice) => {

  await resend.emails.send(
    {
      from: "info@magicmarblefoundation.org",
      to: "info@magicmarblefoundation.org",
      subject: "New Donation Has Been Done",
      react: DonationTemplate(invoice),
    }
  )
};

export const sendDonatorEmail = async (invoice: invoice) => {

  await resend.emails.send(
    {
      from: "info@magicmarblefoundation.org",
      to: invoice.email,
      subject: `You have done a donation for $${invoice.totalValue}`,
      react: DonatorTemplate(invoice),
    }
  )
};

export const sendAdminSponsorEmail = async (invoice: invoice) => {

  await resend.emails.send(
    {
      from: "info@magicmarblefoundation.org",
      to: "info@magicmarblefoundation.org",
      subject: "New Sponsor Has Subscribed",
      react: SponsorAdminTemplate(invoice),
    }
  )
};

export const sendSponsorEmail = async (invoice: invoice) => {

  await resend.emails.send(
    {
      from: "info@magicmarblefoundation.org",
      to: invoice.email,
      subject: `You have subscribed a sponsorship for $${invoice.totalValue}`,
      react: SponsorTemplate(invoice),
    }
  )
};