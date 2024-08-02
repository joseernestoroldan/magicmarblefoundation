"use client";
import * as z from "zod";

import { newPasswordSchema } from "@/schemas";

import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { redirect, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormError } from "../formError/FormError";
import { FormSuccess } from "../formSuccess/FormSuccess";
import { ImSpinner9 } from "react-icons/im";
import Link from "next/link";
import { newPassword } from "@/actions/new-password";

const NewPasswordForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof newPasswordSchema>>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: "",
      repeatPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof newPasswordSchema>) => {
    setError("");
    setSuccess("");

    startTransition(async () => {
      const data = await newPassword(values, token);
      data.error && setError(data.error);
      data.success && setSuccess(data.success);
      if (data.success) {
        redirect("/login");
      }
    });
  };

  return (
    <div className="w-full mx-auto flex flex-col items-center">
      <h2 className="text-2xl text-center text-gray-500">Enter a new password</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" space-y-4 w-[80%]"
        >
          <div className="space-y-4 w-full">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New password</FormLabel>
                  <FormControl>
                    <Input
                      className="text-gray-500 rounded-[5px] border-gray-200 focus-within:border-cyan-500"
                      {...field}
                      placeholder="******"
                      type="password"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="repeatPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Repeat Password</FormLabel>
                  <FormControl>
                    <Input
                      className="text-gray-500 rounded-[5px] border-gray-200 focus-within:border-cyan-500"
                      {...field}
                      placeholder="******"
                      type="password"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />

          <button
            className="bg-cyan-500 hover:bg-opacity-80 text-white w-full py-3 rounded-[5px]"
            type="submit"
            disabled={isPending}
          >
            {isPending && (
              <div className="w-full flex justify-center items-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  viewBox="0 0 24 24"
                >
                  <ImSpinner9 className="text-2xl" />
                </svg>
              </div>
            )}
            {!isPending && "Reset password"}
          </button>
        </form>
      </Form>
      <Link href={"/login"} className="text-cyan-500 underline text-center my-4">
        Back to Login
      </Link>
    </div>
  );
};

export default NewPasswordForm;
