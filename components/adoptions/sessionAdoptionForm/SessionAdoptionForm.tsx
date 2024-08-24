"use client";
import * as z from "zod";

import { adoptionSchema } from "@/schemas";
import { codes, countries } from "@/utils/countries";
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

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Input } from "@/components/ui/input";
import { FormError } from "@/components/auth/formError/FormError";
import { FormSuccess } from "@/components/auth/formSuccess/FormSuccess";

import { ImSpinner9 } from "react-icons/im";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import { FaSearch } from "react-icons/fa";
import { adopt } from "@/actions/adopt";

type SessionAdoptionFormProps = {
  email: string | null | undefined;
  firstName: string | null | undefined;
  secondName: string | null | undefined;
  country: string | null | undefined;
  codeNumber: string | null | undefined;
  number: string | null | undefined;
  address: string | null | undefined;
  animalName: string;
  animalId: string;
  animalImage: string
};

const SessionAdoptionForm = ({
  email,
  firstName,
  secondName,
  country,
  codeNumber,
  number,
  address,
  animalId,
  animalName,
  animalImage
}: SessionAdoptionFormProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [openCode, setOpenCode] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof adoptionSchema>>({
    resolver: zodResolver(adoptionSchema),
    defaultValues: {
      email: email ? email : "",
      firstName: firstName ? firstName : "",
      secondName: secondName ? secondName : "",
      country: country ? country : "",
      codeNumber: codeNumber ? codeNumber : "",
      number: number ? number : "",
      address: address ? address : "",
    },
  });

  const onSubmit = (values: z.infer<typeof adoptionSchema>) => {
    setError("");
    setSuccess("");
    startTransition(async () => {
      const data = await adopt(values, animalId, animalName, animalImage);
      setError(data.error);
      setSuccess(data.success);
    });
  };

  if (success || success !== "") {
    return <FormSuccess message={success} />;
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" space-y-4 w-[90%]"
      >
        <div className="space-y-2 w-full">
          <div className="w-full flex flex-col justify-center sm:justify-between sm:flex-row">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full sm:w-[200px] md:w-[220px] text-gray-500 rounded-full border-gray-200 focus-within:border-cyan-500"
                      {...field}
                      placeholder="First Name"
                      type="text"
                      // disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="secondName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Second Name</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full sm:w-[200px] md:w-[220px] text-gray-500 rounded-full border-gray-200 focus-within:border-cyan-500"
                      {...field}
                      placeholder="Second Name"
                      type="text"
                      // disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className=" text-gray-500 rounded-full border-gray-200 focus-within:border-cyan-500"
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
          <div className="w-full flex flex-col justify-center sm:justify-between sm:flex-row items-start sm:items-end">
            <FormField
              control={form.control}
              name="codeNumber"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Code Number</FormLabel>
                  <Popover open={openCode} onOpenChange={setOpenCode}>
                    <PopoverTrigger asChild>
                      <FormControl className="border-gray-200 focus-within:border-cyan-500">
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-[200px] justify-between border-gray-200 focus-within:border-cyan-500 rounded-full"
                          )}
                        >
                          {field.value
                            ? codes.find(
                                (code) => code.phoneCode === field.value
                              )?.phoneCode
                            : "Select Code"}
                          <FaSearch className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0 bg-white">
                      <Command>
                        <CommandInput
                          placeholder="Search Code"
                          className="h-9 "
                        />
                        <CommandList className="">
                          <CommandEmpty>No Code found.</CommandEmpty>
                          <CommandGroup>
                            {codes.map((code) => (
                              <CommandItem
                                className=" hover:cursor-pointer hover:bg-cyan-500 space-x-1 flex justify-start"
                                value={code.phoneCode}
                                key={code.name}
                                onSelect={() => {
                                  console.log(code.phoneCode);
                                  form.setValue(
                                    "codeNumber",
                                    code.phoneCode.toString()
                                  );
                                  setOpenCode(false);
                                }}
                              >
                                <p>{code.name}</p>
                                <p> {code.phoneCode}</p>

                                <CheckIcon
                                  className={cn(
                                    "ml-auto h-4 w-4",
                                    code.phoneCode === field.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telephone Number</FormLabel>
                  <FormControl>
                    <Input
                      className="w-[200px] text-gray-500 rounded-full border-gray-200 focus-within:border-cyan-500"
                      {...field}
                      placeholder="Telephone Number"
                      type="tel"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full flex flex-col justify-center sm:justify-between sm:flex-row items-start sm:items-end">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Country</FormLabel>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-[200px] justify-between border-gray-200 rounded-full"
                          )}
                        >
                          {field.value
                            ? countries.find(
                                (country) => country.value === field.value
                              )?.label
                            : "Select Country"}
                          <FaSearch className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0 bg-white">
                      <Command>
                        <CommandInput
                          placeholder="Search Country"
                          className="h-9 "
                        />
                        <CommandList className="">
                          <CommandEmpty>No Country found.</CommandEmpty>
                          <CommandGroup>
                            {countries.map((country) => (
                              <CommandItem
                                className=" hover:cursor-pointer hover:bg-cyan-500"
                                value={country.value}
                                key={country.value}
                                onSelect={() => {
                                  console.log(country.value);
                                  form.setValue(
                                    "country",
                                    country.value.toString()
                                  );
                                  setOpen(false);
                                }}
                              >
                                {country.label}
                                <CheckIcon
                                  className={cn(
                                    "ml-auto h-4 w-4",
                                    country.value === field.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Shipping Address</FormLabel>
                <FormControl>
                  <Input
                    className="w-full text-gray-500 rounded-full border-gray-200 focus-within:border-cyan-500"
                    {...field}
                    placeholder="Shipping Address"
                    type="text"
                    aria-multiline
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
          className="bg-cyan-500 hover:bg-opacity-80 text-white w-full py-3 rounded-full"
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
          {!isPending && "Send Application"}
        </button>
      </form>
    </Form>
  );
};

export default SessionAdoptionForm;
