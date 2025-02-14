"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailSchema } from "@/schemas";
import { useState } from "react";

type SubscriptionsType =
  | {
      id: string;
      name: string | null;
      firstName: string | null;
      secondName: string | null;
      email: string | null;
      country: string | null;
      telephone: string | null;
      address: string | null;
      amount: string | null;
      idSub: string | null;
    }[]
  | null;

type CancelSponsorFunction = (data: { email: string }) => Promise<{
  success: boolean;
  message: string;
  subscriptions: SubscriptionsType;
}>;

export default function FormSponsorCancel({
  cancelSponsor,
}: {
  cancelSponsor: CancelSponsorFunction;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(emailSchema),
  });

  const [subscriptions, setSubscriptions] = useState<SubscriptionsType>(null);

  const onSubmit = async (data: any) => {
    const response = await cancelSponsor(data);
    if (response.success) setSubscriptions(response.subscriptions);
    console.log(response.message);
  };

  return (
    <div className="flex flex-col items-center py-4 w-full ">
      <h1 className="text-2xl font-bold mb-4 text-gray-500">
        Cancel Sponsorship
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 w-full max-w-xs"
      >
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="rounded-full mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">
              {String(errors.username.message)}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-full flex justify-center py-2 px-4 border border-transparent shadow-sm text-base font-medium text-white bg-cyan-500 hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
        >
          Find my subscriptions
        </button>
      </form>
      {subscriptions && (
        <div className="w-full max-w-xl flex flex-col">
          <h2 className="text-xl font-bold mt-4 text-gray-500 text-center">
            This are the products you are subscribed
          </h2>
          {subscriptions.map((sub) => (
            <div
              key={sub.id}
              className="flex justify-between border border-gray-200 text-gray-500 p-4 rounded-lg mt-4"
            >
              <p className="text-lg">ID: {sub.id}</p>
              <p className="text-lg">Amount: {sub.amount}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
