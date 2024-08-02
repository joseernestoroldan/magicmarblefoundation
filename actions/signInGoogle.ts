"use server";
import { signIn } from "@/auth";

export const sigInGoogle = async () => {
    await signIn("google", { redirect: true, redirectTo: "/profile" });
  };