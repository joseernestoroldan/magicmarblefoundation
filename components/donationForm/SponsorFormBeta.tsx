"use client";
import * as z from "zod";
import { sponsorSchema } from "@/schemas";
import { countries } from "@/utils/countries";
import { useState } from "react";
import { CreditCardIcon, DollarSignIcon, UserIcon } from "lucide-react";

type DataType = {
  amount: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  country: string | null;
  number: string | null;
  address: string | null;
  name: string | null;
};

const initialData: DataType = {
  amount: null,
  firstName: null,
  lastName: null,
  email: null,
  country: null,
  number: null,
  address: null,
  name: null,
};

const SponsorFormBeta = () => {
  const predefinedAmounts = ["10", "20", "50", "100", "200", "500"];
  const [stage, setStage] = useState<number>(1);
  const [amount, setAmount] = useState<string | null>(null);
  const [data, setData] = useState<DataType>(initialData);
  const [errors, setErrors] = useState<string[]>([]);

  const handleAmountChange = (value: string) => {
    setAmount(value);
  };

  const handleBack = () => {
    if (stage > 1) {
      setStage(stage - 1);
    }
    if (stage === 1) {
      setData(initialData);
      setAmount(null);
    }
  };

  const handleNext = () => {
    if (stage === 1) {
      setData({ ...data, amount: amount });
      setStage(stage + 1);
      setErrors([]);
    }
    if (stage === 2) {
      // validate data with zod
      try {
        const result = sponsorSchema.parse(data);
        if (result) {
          setData({
            ...data,
            name: data.firstName + " " + data.lastName,
            firstName: data.firstName,
            lastName: data.lastName,
            number: data.number,
            address: data.address,
            country: data.country,
            email: data.email,
          });
          setStage(stage + 1);
          setErrors([]);
        }
      } catch (error) {
        console.log(error);
        if (error instanceof z.ZodError) {
          const validationErrors = error.errors.map((issue) => issue.message);
          console.log(validationErrors);
          setErrors(validationErrors);
        }
      }
    }
  };

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send data to your server or payment gateway
    console.log("Form submitted with data:", data);
    }

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="w-full py-4 max-w-md border border-gray-200 rounded-[10px] flex flex-col items-center space-y-4">
        <ProgressBarComponent stage={stage} />
        <form action="" className="flex flex-col items-center">
          {stage === 1 && (
            <div className="flex flex-col items-center space-y-4 min-h-[500px]">
              <h1 className="w-full text-2xl text-cyan-500 font-semibold">
                Sponsorship Amount
              </h1>
              <div className="w-full grid grid-cols-2 gap-4 mb-4">
                {predefinedAmounts.map((predefined) => (
                  <button
                    key={predefined}
                    type="button"
                    onClick={() => handleAmountChange(predefined)}
                    className={`h-20 w-44 flex items-center justify-center text-lg font-semibold rounded-[10px] transition-colors
            ${
              amount === predefined
                ? "bg-cyan-500 text-white"
                : "bg-gray-200 text-gray-500 hover:bg-gray-200/80"
            }`}>
                    ${predefined}
                  </button>
                ))}
              </div>
              <div className="flex flex-col space-y-2 w-full">
                <label
                  className="text-xs font-bold text-gray-500 w-full text-left"
                  htmlFor="customAmount">
                  Custom amount
                </label>
                <input
                  type="text"
                  value={amount ?? ""}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter custom amount"
                  className="text-sm w-full py-1 px-4 rounded-full border border-gray-400 focus:border-cyan-500 outline-none"
                />
              </div>
              <div className="flex flex-col items-end w-full">
                <button
                  type="button"
                  className="w-36 py-1 px-6 bg-cyan-500 hover:bg-cyan-400 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!amount}
                  onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>
          )}
          {stage === 2 && (
            <div className="flex flex-col items-center space-y-4 px-4 min-h-[500px] w-full">
              <h1 className="w-full text-2xl text-cyan-500 font-semibold">
                Personal Details
              </h1>

              <div className="w-full flex flex-col space-y-2">
                <div className="flex justify-between items-center gap-4">
                  {/* first name */}
                  <div className="flex flex-col space-y-2 w-full sm:w-48">
                    <label
                      className="text-xs font-bold text-gray-500 w-full text-left"
                      htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      className="border text-sm outline-none border-gray-400 rounded-full w-full py-1 px-4"
                      placeholder="Enter your first name"
                      type="text"
                      id="firstName"
                      value={data.firstName ?? ""}
                      onChange={(e) =>
                        setData({ ...data, firstName: e.target.value })
                      }
                    />
                  </div>
                  {/* last name */}
                  <div className="flex flex-col  space-y-2 w-full sm:w-48">
                    <label
                      className="text-xs font-bold text-gray-500 w-full text-left"
                      htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      className="border text-sm outline-none border-gray-400 w-full rounded-full py-1 px-4"
                      placeholder="Enter your last name"
                      type="text"
                      id="lastName"
                      value={data.lastName ?? ""}
                      onChange={(e) =>
                        setData({ ...data, lastName: e.target.value })
                      }
                    />
                  </div>
                </div>
                {/* address */}
                <div className="flex flex-col  space-y-2 w-full">
                  <label
                    className="text-xs font-bold text-gray-500 w-full text-left"
                    htmlFor="email">
                    Address
                  </label>
                  <input
                    className="border text-sm outline-none w-full border-gray-400 rounded-full  py-1 px-4"
                    placeholder="Enter your address"
                    type="text"
                    id="address"
                    value={data.address ?? ""}
                    onChange={(e) =>
                      setData({ ...data, address: e.target.value })
                    }
                  />
                </div>
                {/* country */}
                <div className="flex flex-col space-y-2">
                  <label
                    className="text-xs font-bold text-gray-500 w-full text-left"
                    htmlFor="country">
                    Country
                  </label>
                  <select
                    id="country"
                    className="border text-sm outline-none text-gray-500 border-gray-400 rounded-full py-1 px-4 w-full"
                    value={data.country ?? ""}
                    onChange={(e) =>
                      setData({ ...data, country: e.target.value })
                    }>
                    <option value="">Select your country</option>
                    {countries.map((country) => (
                      <option key={country.value} value={country.label}>
                        {country.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* code number */}
                <div className="flex flex-col w-full space-y-2">
                  <label
                    className="text-xs font-bold text-gray-500 w-full text-left"
                    htmlFor="number">
                    Phone Number
                  </label>
                  <input
                    className="border outline-none border-gray-400 rounded-full py-1 px-4 text-sm w-full"
                    placeholder="Enter your phone number"
                    type="text"
                    id="number"
                    value={data.number ?? ""}
                    onChange={(e) =>
                      setData({ ...data, number: e.target.value })
                    }
                  />
                </div>

                {/* email */}

                <div className="flex flex-col space-y-2 w-full">
                  <label
                    className="text-xs font-bold text-gray-500 w-full text-left"
                    htmlFor="email">
                    Email
                  </label>
                  <input
                    className="border outline-none text-sm w-full border-gray-400 rounded-full py-1 px-4"
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    value={data.email ?? ""}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                  />
                </div>

                <div className="flex justify-between items-center pt-4 w-full">
                  <button
                    type="button"
                    className="w-36 py-1 px-8 bg-cyan-500 hover:bg-cyan-400 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handleBack}>
                    Back
                  </button>
                  <button
                    type="button"
                    className="w-36 py-1 px-8 bg-cyan-500 hover:bg-cyan-400 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!data.email || !data.number}
                    onClick={handleNext}>
                    Next
                  </button>
                </div>
                <div className="w-full">
                  {errors.length > 0 && (
                    <ul className="text-red-500">
                      {errors.map((error, index) => (
                        <li
                          key={index}
                          className="border-red-500 text-red-600 bg-red-200 text-center">
                          {error}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          )}
          {stage === 3 && (
            <div className="flex flex-col items-center space-y-4 px-4 min-h-[500px] w-full">
              <h1 className="w-full text-2xl text-cyan-500 font-semibold">
                Payment Details
              </h1>
              <div className="w-full flex flex-col space-y-2">
                <div className="flex flex-col space-y-2 w-full">
                  {/* Print a message confirming the donation details */}
                  <p className="text-gray-500">
                    You are about to make a generous donation of{" "}
                    <span className="font-semibold">{data.amount}</span>!
                  </p>
                  <p className="text-gray-500">
                    We have received the following details:
                  </p>
                  <ul className="list-disc list-inside">
                    <li>
                      <span className="font-semibold">Name:</span> {data.name}
                    </li>
                    <li>
                      <span className="font-semibold">Email:</span> {data.email}
                    </li>
                    <li>
                      <span className="font-semibold">Phone Number:</span>{" "}
                      {data.number}
                    </li>
                    <li>
                      <span className="font-semibold">Amount:</span>{" "}
                      {data.amount}
                    </li>
                  </ul>
                </div>
                <div className="flex justify-between items-center pt-4 w-full">
                    <button
                      type="button"
                      className="w-36 py-1 px-8 bg-cyan-500 hover:bg-cyan-400 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={handleBack}>
                      Back
                    </button>
                    <button
                      type="submit"
                      className="w-36 py-1 px-8 bg-cyan-500 hover:bg-cyan-400 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={!data.email || !data.number}
                      onClick={handleSubmit}>
                      Donate
                    </button>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
export default SponsorFormBeta;

const ProgressBarComponent = ({ stage }: { stage: number }) => {
  return (
    <div className="flex justify-center items-center pb-6 pt-6">
      <div className="flex items-center justify-center">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${stage >= 1 ? "bg-cyan-500 text-white" : "bg-gray-200"}`}>
          <DollarSignIcon className="h-6 w-6" />
        </div>
        <div
          className={`w-16 h-1 ${stage >= 2 ? "bg-cyan-200" : "bg-gray-200"}`}
        />
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${stage >= 2 ? "bg-cyan-500 text-white" : "bg-gray-200"}`}>
          <UserIcon className="h-6 w-6" />
        </div>
        <div
          className={`w-16 h-1 ${stage >= 3 ? "bg-cyan-200" : "bg-gray-200"}`}
        />
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${stage >= 3 ? "bg-cyan-500 text-white" : "bg-gray-200"}`}>
          <CreditCardIcon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};
