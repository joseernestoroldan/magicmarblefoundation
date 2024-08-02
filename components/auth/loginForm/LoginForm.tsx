"use client";
import * as z from "zod";

import { loginSchema } from "@/schemas";

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
import { login } from "@/actions/login";
import { ImSpinner9 } from "react-icons/im";
import { FormConfirmation } from "../formConfirmation/FormConfirmation";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [confirmation, setConfirmation] = useState<string | undefined>("");

  const router = useRouter()

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    setError("");
    setConfirmation("");
    startTransition(async () => {
      const data = await login(values);
      data.error && setError(data.error);
      data.confirmation && setConfirmation(data.confirmation);
      if (data.success) {
        router.push("/profile");
        router.refresh()
      }
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" space-y-4 w-[80%]"
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

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
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
                <Link
                  className="text-cyan-500 underline"
                  href={"/reset"}
                >
                  Forgot password?
                </Link>
              </FormItem>
            )}
          />
        </div>
        <FormError message={error} />
        <FormConfirmation message={confirmation} />
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
          {!isPending && "Login"}
        </button>
      </form>
    </Form>
  );
};

export default LoginForm;
