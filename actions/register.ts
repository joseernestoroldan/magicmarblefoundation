"use server";
import * as z from "zod";
import { registerSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { db } from "@/db";
import { getUserByEmail } from "@/data/user";
import { GenerateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (values: z.infer<typeof registerSchema>) => {
  
  const validateFields = registerSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid Fields!" };
  }

  const {
    firstName,
    secondName,
    email,
    password,
    repeatPassword,
    country,
    codeNumber,
    number,
    address,
    subscribed,
  } = validateFields.data;

  if (password !== repeatPassword) {
    return { error: "Passwords must match" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "This email address is already registered" };
  }

  await db.user.create({
    data: {
      firstName,
      secondName,
      email,
      password: hashedPassword,
      country,
      codeNumber,
      number,
      address,
      subscribed,
    },
  });

  const verificationToken = await GenerateVerificationToken(email);
  
  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return { success: "We have sent a verification email to your inbox." };
};
