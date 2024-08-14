"use client";

import Image from "next/image";
import { FormSuccess } from "../auth/formSuccess/FormSuccess";
import { FormError } from "../auth/formError/FormError";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { subscribeAgain, unsubscribe } from "@/actions/unsubscribe";
import { BeatLoader } from "react-spinners";
import Link from "next/link";

const UnsubscribeForm = () => {
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();

    const SearchParams = useSearchParams();
    const email= SearchParams.get("email");

    const onSubmit = useCallback(() => {
        if (!email) {
          setError("Missing email");
          return;
        }
        unsubscribe(email)
          .then((data) => {
            setSuccess(data.success);
            setError(data.error);
          })
          .catch((err) => {
            setError("Something went wrong!");
          });
      }, [email]);

      const handleClick = useCallback(() => {
        if (!email) {
          setError("Missing email");
          return;
        }
        subscribeAgain(email)
          .then((data) => {
            setSuccess(data.success);
            setError(data.error);
          })
          .catch((err) => {
            setError("Something went wrong!");
          });
      }, [email]);

    useEffect(() => {
        onSubmit();
      }, [onSubmit]);

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col justify-center items-center">
      <div className="w-[300px] md:w-[600px] h-[450px] my-8 flex flex-col items-center space-y-8">
        <div className="relative h-[150px] w-[150px]">
          <Image src={"/logo.jpg"} fill alt="mmf" />
        </div>
        <h2 className="text-gray-500 text-2xl font-medium">
          {!success && "Unsubscribing to Diaries..." }
          {success && success === "Email unsubscribed" && "Email Unsubscribed" }
          {success && success !== "Email unsubscribed" && "Email Subscribed Again"}
        </h2>
        {!success && !error && <BeatLoader color="#5cc8cf" />}

        <FormSuccess message={success} />
        <FormError message={error} /> 
        {success && success === "Email unsubscribed" && <button onClick={handleClick} className="bg-cyan-500 text-white px-4 py-2 rounded-full">Subscribe Again</button>}
        {success && success !== "Email unsubscribed" && <Link className="text-lg underline text-cyan-500 hover:text-cyan-400" href={"/profile"}>Go to Profile</Link>}
      </div>
    </div>
  );
};

export default UnsubscribeForm;
