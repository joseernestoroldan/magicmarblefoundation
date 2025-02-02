"use server";
import { UpdateSuscriptionStatus } from "@/client";
import { db } from "@/db";
import { sendSubscriptionEmail } from "@/lib/mail";
import { revalidatePath } from "next/cache";

export const notifyDiary = async (dairyId: string, title: string, image: string, description:string, numberNotifications: number) => {
  const listOfEmail = await db.user.findMany({
    where: { subscribed: true },
    select: { email: true },
  });

  if (listOfEmail.length === 0)
    return { error: "There is no user suscriptions" };

  listOfEmail.forEach((item) => {
    const { email } = item;

    if (email) {
      sendSubscriptionEmail(email, dairyId, title, image, description);
    }
  });

  await UpdateSuscriptionStatus(dairyId, numberNotifications);
  revalidatePath("/profile");

  return { success: "Notification Emails Sent" };
};
