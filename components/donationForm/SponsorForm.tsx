"use client";

import * as z from "zod";
import { donationSchema } from "@/schemas";

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

type SponsorFormProps = {
  name: string | null;
  firstName: string | null;
  secondName: string | null;
  email: string | null;
  country: string | null;
  codeNumber: string | null;
  number: string | null;
  address: string | null;
};

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

  const [formData, setFormData] = useState<z.infer<typeof donationSchema>>({
    email: email ?? "",
    firstName: firstName ?? "",
    secondName: secondName ?? "",
    country: country ?? "",
    codeNumber: "",
    telephone: "",
    address: address ?? "",
    amount: "",
  });

  const predefinedAmounts = ["10", "20", "50", "100", "200", "500"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAmountChange = (value: string) => {
    setFormData((prevData) => ({ ...prevData, amount: value }));
  };

  const handleNext = () => {
    setStage((prevStage) => prevStage + 1);
  };

  const handleBack = () => {
    setStage((prevStage) => prevStage - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your server or payment processor
    setLoading(true);
    const finalAmount = formData.amount;

    try {
      const response = await fetch("/api/create-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: finalAmount,
          frequency: 1,
          interval: "MONTH",
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Subscription creation error:", error);
    }

    // try {
    //   const response = await fetch("/api/create-subscription", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ amount: finalAmount }),
    //   });

    //   const data = await response.json();

    //   if (response.ok) {
    //     router.push(data.approvalUrl);
    //   } else {
    //     throw new Error(data.message || "Failed to create subscription");
    //   }
    // } catch (error) {
    //   console.error("Subscription creation error:", error);
    // } finally {
    //   setLoading(false);
    // }

    // sponsorCompleted(
    //   formData.email,
    //   formData.amount,
    //   formData.firstName,
    //   formData.secondName,
    //   formData.country,
    //   formData.address,
    //   formData.telephone
    // );
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-transparent">
      <Card className="w-full max-w-md">
        <div className="flex justify-center mb-4 pt-6">
          <div className="flex items-center">
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
                      formData.amount === amount
                        ? "bg-cyan-500 text-white"
                        : "bg-gray-200 hover:bg-gray-200/80"
                    }`}
                    aria-pressed={formData.amount === amount}
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
                  id="customAmount"
                  name="amount"
                  type="number"
                  placeholder="Enter custom amount"
                  value={
                    predefinedAmounts.includes(formData.amount)
                      ? ""
                      : formData.amount
                  }
                  onChange={handleInputChange}
                  className="text-lg rounded-full border border-gray-400 focus:border-cyan-500"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button
                onClick={handleNext}
                className="w-36 px-8 bg-cyan-500 hover:bg-cyan-400 text-white rounded-full"
                disabled={!formData.amount}
              >
                Next
              </Button>
            </CardFooter>
          </>
        )}

        {stage === 2 && (
          <>
            <CardHeader>
              <CardTitle className="text-cyan-500">Personal Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="border border-gray-400 rounded-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="secondName">Second Name</Label>
                  <Input
                    id="secondName"
                    name="secondName"
                    placeholder="Second Name"
                    value={formData.secondName}
                    onChange={handleInputChange}
                    required
                    className="border border-gray-400 rounded-full"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Select
                  name="country"
                  onValueChange={handleSelectChange("country")}
                >
                  <SelectTrigger className="border border-gray-400 rounded-full">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {countries.map((item: any, index: number) => {
                      return (
                        <SelectItem key={index} value={item.value}>
                          {item.label}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="123 Main St, City, State, ZIP"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-400 rounded-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telephone">Telephone Number</Label>
                <Input
                  id="telephone"
                  name="telephone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.telephone}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-400 rounded-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-400 rounded-full"
                />
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
                onClick={handleSubmit}
                className="w-36 px-8 bg-cyan-500 hover:bg-cyan-400 text-white rounded-full"
              >
                Sponsor with ${formData.amount}
              </Button>
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  );
}
