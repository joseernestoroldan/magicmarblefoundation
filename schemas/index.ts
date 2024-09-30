import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const resetSchema = z.object({
  email: z.string().email({ message: "Email is requiered" }),
});

export const newPasswordSchema = z
  .object({
    password: z.string().min(6, {
      message: "Minimum 6 characters required",
    }),
    repeatPassword: z
      .string()
      .min(6, { message: "Minimum 6 characters required" }),
  })
  .superRefine(({ repeatPassword, password }, ctx) => {
    if (repeatPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["repeatPassword"],
      });
    }
  });

export const registerSchema = z
  .object({
    email: z.string().email().min(1, { message: "Email is required" }),
    password: z.string().min(6, {
      message: "Minimum 6 characters required",
    }),
    repeatPassword: z
      .string()
      .min(6, { message: "Minimum 6 characters required" }),
    firstName: z.string().min(1, { message: "Name is required" }),
    secondName: z.string().min(1, { message: "Second name is required" }),
    country: z.string(),
    codeNumber: z.string(),
    number: z.string(),
    address: z.string(),
    subscribed: z.boolean(),
  })
  .superRefine(({ repeatPassword, password }, ctx) => {
    if (repeatPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["repeatPassword"],
      });
    }
  });

export const adoptionSchema = z.object({
  email: z.string().email().min(1, { message: "Email is required" }),
  firstName: z.string().min(1, { message: "Name is required" }),
  secondName: z.string().min(1, { message: "Second name is required" }),
  country: z.string(),
  codeNumber: z.string(),
  number: z.string(),
  address: z.string(),
});

export const donationSchema = z.object({
  amount: z.string(),
  email: z.string().email().min(1, { message: "Email is required" }),
  firstName: z.string().min(1, { message: "Name is required" }),
  secondName: z.string().min(1, { message: "Second name is required" }),
  country: z.string(),
  telephone: z.string(),
  address: z.string(),
});

export const updateSchema = z.object({
  country: z.string(),
  codeNumber: z.string(),
  number: z.string(),
  address: z.string(),
  subscribed: z.boolean(),
});
