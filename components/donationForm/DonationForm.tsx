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
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PaypalButton from "./PaypalButton";

type SessionAdoptionFormProps = {
  email: string | null | undefined;
  firstName: string | null | undefined;
  secondName: string | null | undefined;
  country: string | null | undefined;
  codeNumber: string | null | undefined;
  number: string | null | undefined;
  address: string | null | undefined;
};

export default function DonationForm({
  email,
  firstName,
  secondName,
  country,
  codeNumber,
  number,
  address,
}: SessionAdoptionFormProps) {
  const [stage, setStage] = useState(1);

  const [formData, setFormData] = useState<z.infer<typeof donationSchema>>({
    email: email ? email : "",
    firstName: firstName ? firstName : "",
    secondName: secondName ? secondName : "",
    country: country ? country : "",
    telephone: codeNumber && number ? codeNumber + " " + number : "",
    address: address ? address : "",
    amount: "",
  });

  const predefinedAmounts = ["10", "25", "50", "100", "200", "500"];

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
       // Here you would typically send the data to your server or payment processor
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
              <CardTitle className="text-cyan-500">Donation Amount</CardTitle>
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
                className="w-32 px-8 bg-cyan-500 hover:bg-cyan-400 text-white rounded-full"
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
                className="w-32 px-8 bg-cyan-500 text-white rounded-full hover:bg-cyan-400"
              >
                Back
              </Button>
              <Button
                onClick={handleNext}
                className="w-32 px-8 bg-cyan-500 text-white rounded-full hover:bg-cyan-400"
              >
                Next
              </Button>
            </CardFooter>
          </>
        )}
        {stage === 3 && (
          <PayPalScriptProvider
            options={{
              clientId:
                "AexCIXsRYCnf0s8wmXEQ37db_xsRg0N1h3O6ZTeFunn2HOZxL2qVYxqQyXeQbWyXmqFh4ZNjwIjUUtUb",
            }}
          >
            <>
              <CardHeader>
                <CardTitle className="text-cyan-500">Payment Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4"></CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  onClick={handleBack}
                  className="w-32 px-8 bg-cyan-500 hover:bg-cyan-400 text-white rounded-full"
                >
                  Back
                </Button>

                <PaypalButton
                  totalValue={formData.amount}
                  invoice=""
                  email={formData.email}
                  firstName={formData.firstName}
                  secondName={formData.secondName}
                  address={formData.address}
                  country={formData.country}
                  telephone={formData.telephone}
                />
              </CardFooter>
            </>
          </PayPalScriptProvider>
        )}
      </Card>
    </div>
  );
}
