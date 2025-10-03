"use server";

import { db } from "@/db";
import { sendAdminSponsorEmail, sendSponsorEmail } from "@/app/lib/mail";

const findSubscribed = async (id: string) => {
  const idSubcription = await db.sponsor.findFirst({ where: { idSub: id } });
  return idSubcription;
};

export const sponsorCompleted = async (
  email: string | null,
  totalValue: string | null,
  firstName: string | null,
  secondName: string | null,
  telephone: string | null,
  address: string | null,
  country: string | null,
  idSubscription: string | null
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

  if (idSubscription) {
    const isSubscribed = await findSubscribed(idSubscription);
    if (!isSubscribed) {
      await db.sponsor.create({
        data: {
          email,
          amount: totalValue,
          firstName,
          secondName,
          idSub: idSubscription,
          telephone,
          address,
          country,
        },
      });
    }
  }

  // await sendAdminSponsorEmail(invoice)
  // await sendSponsorEmail(invoice)
 
};
