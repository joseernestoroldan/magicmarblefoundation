"use server";
import { db } from "@/db";
import { sendAdminDonateEmail, sendDonatorEmail } from "@/app/lib/mail";

export const donationCompleted = async (
  email: string,
  totalValue: string,
  firstName: string,
  secondName: string,
  country: string,
  address: string,
  telephone: string
) => {
  const invoice = {
    email,
    totalValue,
    firstName,
    secondName,
    country,
    address,
    telephone,
  };

  await db.donation.create({
    data: {
      email,
      amount: totalValue,
      firstName,
      secondName,
      country,
      address,
      telephone,
    },
  });

  await sendAdminDonateEmail(invoice);
  await sendDonatorEmail(invoice);
};
