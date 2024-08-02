"use client";
import * as z from "zod";

import { updateSchema } from "@/schemas";
import { codes, countries } from "@/utils/countries";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdUnsubscribe } from "react-icons/md";
import { MdOutlineUnsubscribe } from "react-icons/md";
import { MdPerson } from "react-icons/md";

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

import { Checkbox } from "@/components/ui/checkbox";

import { Input } from "@/components/ui/input";
import { FormError } from "../formError/FormError";


import { ImSpinner9 } from "react-icons/im";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import { FaSearch } from "react-icons/fa";
import { update } from "@/actions/update";
import { useRouter } from "next/navigation";

const UpdateForm = ({ data }: any) => {
  const { id, number, codeNumber, country, subscribed, address } = data.data;

  const [open, setOpen] = useState<boolean>(false);
  const [openCode, setOpenCode] = useState<boolean>(false);
  const [enable, setEnable] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof updateSchema>>({
    resolver: zodResolver(updateSchema),
    defaultValues: {
      country: country,
      codeNumber: codeNumber,
      number: number,
      address: address,
      subscribed: subscribed,
    },
  });

  const onSubmit = (values: z.infer<typeof updateSchema>) => {
    setError("");
    startTransition(async () => {
      const data = await update(values, id);
      setError(data.error);
      if (data.success) {
        router.push("/profile");
      }
    });
  };

  return (
    <div className="flex flex-col space-y-8">
      <button
        className="w-[100px] border border-cyan-500 text-cyan-500 rounded-[5px] py-2"
        onClick={() => setEnable(!enable)}
      >
        {enable ? "Cancel" : "Edit"}
      </button>

      {!enable && (
        <div className="space-y-4 w-[420px] max-w-5xl mx-auto text-cyan-500 border border-cyan-500 rounded-[5px] px-4 py-8">
          <div className="w-full flex flex-col text-2xl font-medium text-gray-500 items-center justify-center">
            <MdPerson />
            <h3 className="text-xl text-gray-500">Your personal info</h3>
          </div>
          <div className="w-full  flex gap-x-1">
            <p className="font-medium">Telephone:</p>
            <p>({codeNumber})</p>
            <p>{number}</p>
          </div>
          <div className="w-full flex gap-x-1">
            <p className="font-medium">Country:</p>
            <p>{country}</p>
          </div>
          <div className="w-full flex gap-x-1">
            <p className="font-medium">Address:</p>
            <p>{address}</p>
          </div>

          {subscribed && (
            <div className="w-full flex gap-x-1 items-center font-medium">
              <MdUnsubscribe />
              <p>Suscribed to the Newsletter</p>
            </div>
          )}

          {!subscribed && (
            <div className="w-full flex gap-x-1 items-center font-medium">
              <MdOutlineUnsubscribe />
              <p>Unsuscribed to the Newsletter</p>
            </div>
          )}
        </div>
      )}

      {enable && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 w-[420px] max-w-5xl mx-auto text-gray-500 "
          >
            <div className="space-y-2 w-full">
              <div className="w-full flex justify-between items-end">
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
                                "w-[200px] justify-between border-gray-200 focus-within:border-cyan-500"
                              )}
                            >
                              {field.value
                                ? codes.find(
                                    (code) => code.phoneCode === field.value
                                  )?.phoneCode
                                : codeNumber}
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
                          className="w-[200px] text-gray-500 rounded-[5px] border-gray-200 focus-within:border-cyan-500"
                          {...field}
                          placeholder={number}
                          type="tel"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full flex justify-between">
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
                                "w-[200px] justify-between border-gray-200 focus-within:border-cyan-500"
                              )}
                            >
                              {field.value
                                ? countries.find(
                                    (country) => country.value === field.value
                                  )?.label
                                : country}
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

                <FormField
                  control={form.control}
                  name="subscribed"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-end space-x-2">
                      <FormControl className="">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>

                      <FormLabel className="">
                        Suscribe to our Newsletter
                      </FormLabel>
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
                        className="w-full text-gray-500 rounded-[5px] border-gray-200 focus-within:border-cyan-500"
                        {...field}
                        placeholder={address}
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
              {!isPending && "Update"}
            </button>
          </form>
        </Form>
      )}
    </div>
  );
};

export default UpdateForm;
