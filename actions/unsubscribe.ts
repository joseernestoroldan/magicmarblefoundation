"use server";
import { db } from "@/db";

export const unsubscribe = async (email: string) => {
  const user = await db.user.findFirst({ where: { email } });
  if(!user) return {error: "The email does not exist"}

  await db.user.update({where:{email}, data:{subscribed: false}})
  return {success: "Email unsubscribed"}
};

export const subscribeAgain = async (email: string) => {
    const user = await db.user.findFirst({ where: { email } });
    if(!user) return {error: "The email does not exist"}

    await db.user.update({where:{email}, data:{subscribed: true}})
    return {success: "Email Subscribed Again"}

}

