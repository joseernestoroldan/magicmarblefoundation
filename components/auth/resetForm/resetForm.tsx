"use client";
import * as z from "zod";

import { resetSchema } from "@/schemas";

import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
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
import { reset } from "@/actions/reset";
import { ImSpinner9 } from "react-icons/im";

const ResetForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof resetSchema>>({
    resolver: zodResolver(resetSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (value: z.infer<typeof resetSchema>) => {
    setError("");
    setSuccess("");

    startTransition(async () => {
      const data = await reset(value);
      data.error && setError(data.error);
      data.success && setSuccess(data.success);
      if (data.success) {
        // redirect("/settings");
        //todo what should be done
      }
    });
  };

  return (
    <div className="w-full mx-auto flex flex-col justify-center items-center space-y-8">
      <h2 className="text-2xl text-center font-medium text-gray-500">
        Reset Password
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" space-y-8 w-[80%]"
        >
          <div className="space-y-4 w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="text-gray-500 rounded-[5px] border-gray-200 focus-within:border-cyan-500"
                      {...field}
                      placeholder="magicmarble@example.com"
                      type="email"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />

          <button
            className="bg-cyan-500 hover:bg-opacity-80 text-white w-full py-2 rounded-[5px] text-lg"
            type="submit"
            disabled={isPending}
          >
            {isPending && (
              <div className="w-full flex justify-center items-center text-lg">
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  viewBox="0 0 24 24"
                >
                  <ImSpinner9 className="text-2xl" />
                </svg>
              </div>
            )}
            {!isPending && !success && "Send reset email"}
            {!isPending && success && "Resend reset email"}
          </button>
          <FormSuccess message={success} />
        </form>
      </Form>
    </div>
  );
};

export default ResetForm;
