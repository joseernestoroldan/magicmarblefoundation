"use server";
import * as z from "zod";
import { updateSchema } from "@/schemas";
import { db } from "@/db";

export const update = async (
  values: z.infer<typeof updateSchema>,
  id: string
) => {
  const validateFields = updateSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: "Invalid Fields!" };
  }
  const { country, codeNumber, number, address, subscribed } =
    validateFields.data;

  await db.user.update({
    where: { id: id },
    data: { country, codeNumber, number, address, subscribed },
  });
  return { success: "the data has been updated" };
};
