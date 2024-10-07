"use server";

import { db } from "@/db";
import { sendAdminSponsorEmail, sendSponsorEmail } from "@/lib/mail";

export const sponsorCompleted = async (
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

    await db.sponsor.create({data:{
        email,
        amount: totalValue,
        firstName,
        secondName,
        country,
        address,
        telephone,
    }})

    await sendAdminSponsorEmail(invoice)
    await sendSponsorEmail(invoice)
  console.log("hola");
};
