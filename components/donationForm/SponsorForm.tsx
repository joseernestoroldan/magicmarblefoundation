"use client";

import * as z from "zod";
import { donationSchema } from "@/schemas";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { countries } from "@/utils/countries";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CreditCardIcon, DollarSignIcon, UserIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { sponsorCompleted } from "@/actions/sponsor";
import { SponsorFormProps } from "@/types/types";
import {
  createPlan,
  createSubscriber,
} from "@/lib/apiCalls";
import { FaSortAmountDown } from "react-icons/fa";

export default function SponsorForm({
  sessionUser,
}: {
  sessionUser: SponsorFormProps;
}) {
  const [stage, setStage] = useState(1);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { email, firstName, secondName, country, codeNumber, number, address } =
    sessionUser;

  const form = useForm<z.infer<typeof donationSchema>>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      email: email ?? "",
      firstName: firstName ?? "",
      secondName: secondName ?? "",
      country: country ?? "",
      codeNumber: codeNumber ?? "",
      telephone: number ?? "",
      address: address ?? "",
      amount: "",
    },
  });

  const {
    handleSubmit,
    control,
    setValue,
    trigger,
    formState: { errors },
  } = form;

  const predefinedAmounts = ["10", "20", "50", "100", "200", "500"];

  const handleAmountChange = (value: string) => {
    setValue("amount", value);
  };

  const handleNext = async () => {
    let fieldsToValidate: (keyof z.infer<typeof donationSchema>)[] = [];

    switch (stage) {
      case 1:
        fieldsToValidate = ["amount"];
        break;
      case 2:
        fieldsToValidate = [
          "firstName",
          "secondName",
          "country",
          "address",
          "telephone",
          "email",
        ];
        break;
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid) setStage((s) => s + 1);
  };

  const handleBack = () => {
    setStage((s) => s - 1);
  };

  const onSubmit = async (data: z.infer<typeof donationSchema>) => {
    const { amount, email, firstName, secondName, codeNumber, telephone, address, country } = data;

    try {
      setLoading(true);

      const planId = await createPlan(amount);
      console.log(planId);
      const response = await createSubscriber(email, planId, firstName, secondName, amount);
      const data = await response.json();
      const { subscription } = data;
      console.log("Subscription:", subscription);

      window.location.href = subscription.links.find(
        (link: any) => link.rel === "approve"
      ).href;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to create subscription");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-transparent">
      <Card className="w-full max-w-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <ProgressBarComponent stage={stage} />

          {stage === 1 && (
            <>
              <CardHeader>
                <CardTitle className="text-cyan-500">
                  Sponsorship Amount
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleAmountChange(amount)}
                      className={`h-20 flex items-center justify-center text-lg font-semibold rounded-[10px] transition-colors ${
                        form.watch("amount") === amount
                          ? "bg-cyan-500 text-white"
                          : "bg-gray-200 hover:bg-gray-200/80"
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="customAmount" className="text-cyan-500">
                    Custom amount
                  </Label>

                  <Input
                    {...control.register("amount")}
                    id="customAmount"
                    type="number"
                    placeholder="Enter custom amount"
                    className="text-lg rounded-full border border-gray-400 focus:border-cyan-500"
                  />
                  {errors.amount && (
                    <p className="text-red-500 text-sm">
                      {errors.amount.message}
                    </p>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button
                  onClick={handleNext}
                  className="w-36 px-8 bg-cyan-500 hover:bg-cyan-400 text-white rounded-full"
                  disabled={!form.watch("amount")}
                >
                  Next
                </Button>
              </CardFooter>
            </>
          )}

          {stage === 2 && (
            <>
              <CardHeader>
                <CardTitle className="text-cyan-500">
                  Personal Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      {...control.register("firstName")}
                      id="firstName"
                      placeholder="First Name"
                      required
                      className="border border-gray-400 rounded-full"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="secondName">Second Name</Label>
                    <Input
                      {...control.register("secondName")}
                      id="secondName"
                      placeholder="Second Name"
                      required
                      className="border border-gray-400 rounded-full"
                    />
                    {errors.secondName && (
                      <p className="text-red-500 text-sm">
                        {errors.secondName.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Controller
                    name="country"
                    control={control}
                    render={({ field }) => (
                      <>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger className="border border-gray-400 rounded-full">
                            <SelectValue placeholder="Select a country" />
                          </SelectTrigger>
                          <SelectContent>
                            {countries.map((item: any) => (
                              <SelectItem key={item.value} value={item.value}>
                                {item.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.country && (
                          <p className="text-red-500 text-sm">
                            {errors.country.message}
                          </p>
                        )}
                      </>
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    {...control.register("address")}
                    id="address"
                    placeholder="123 Main St, City, State, ZIP"
                    required
                    className="border border-gray-400 rounded-full"
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm">
                      {errors.address.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telephone">Telephone Number</Label>
                  <Input
                    {...control.register("telephone")}
                    id="telephone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    required
                    className="border border-gray-400 rounded-full"
                  />
                  {errors.telephone && (
                    <p className="text-red-500 text-sm">
                      {errors.telephone.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    {...control.register("email")}
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="border border-gray-400 rounded-full"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  onClick={handleBack}
                  className="w-36 px-8 bg-cyan-500 text-white rounded-full hover:bg-cyan-400"
                >
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  className="w-36 px-8 bg-cyan-500 text-white rounded-full hover:bg-cyan-400"
                >
                  Next
                </Button>
              </CardFooter>
            </>
          )}
          {stage === 3 && (
            <>
              <CardHeader>
                <CardTitle className="text-cyan-500">Payment Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4"></CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  onClick={handleBack}
                  className="w-36 px-8 bg-cyan-500 hover:bg-cyan-400 text-white rounded-full"
                >
                  Back
                </Button>

                <Button
                  type="submit"
                  className="w-36 px-8 bg-cyan-500 hover:bg-cyan-400 text-white rounded-full"
                  disabled={loading}
                >
                  {loading
                    ? "Processing..."
                    : `Sponsor with $${form.watch("amount")}`}
                </Button>
              </CardFooter>
            </>
          )}
        </form>
      </Card>
    </div>
  );
}

const ProgressBarComponent = ({ stage }: { stage: number }) => {
  return (
    <div className="flex justify-center items-center pb-6 pt-6">
      <div className="flex items-center justify-center">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${stage >= 1 ? "bg-cyan-500 text-white" : "bg-gray-200"}`}
        >
          <DollarSignIcon className="h-6 w-6" />
        </div>
        <div
          className={`w-16 h-1 ${stage >= 2 ? "bg-cyan-200" : "bg-gray-200"}`}
        />
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${stage >= 2 ? "bg-cyan-500 text-white" : "bg-gray-200"}`}
        >
          <UserIcon className="h-6 w-6" />
        </div>
        <div
          className={`w-16 h-1 ${stage >= 3 ? "bg-cyan-200" : "bg-gray-200"}`}
        />
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${stage >= 3 ? "bg-cyan-500 text-white" : "bg-gray-200"}`}
        >
          <CreditCardIcon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};
