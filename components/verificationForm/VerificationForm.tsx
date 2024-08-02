"use client";

import Image from "next/image";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { NewVerification } from "@/actions/new-verification";
import { FormError } from "../auth/formError/FormError";
import { FormSuccess } from "../auth/formSuccess/FormSuccess";
import { FormExpired } from "../auth/formExpired/FormExpired";
import Link from "next/link";

const VerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [expired, setExpired] = useState<string | undefined>();
  const SearchParams = useSearchParams();
  const token = SearchParams.get("token");

  const onSubmit = useCallback(() => {
    if (!token) {
      setError("Missing Token");
      return;
    }
    NewVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
        setExpired(data.expired);
      })
      .catch((err) => {
        setError("Something went wrong!");
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col justify-center items-center">
      <div className="w-[300px] md:w-[600px] h-[450px] my-8 flex flex-col items-center space-y-8">
        <div className="relative h-[150px] w-[150px]">
          <Image src={"logo.jpg"} fill alt="mmf" />
        </div>
        <h2 className="text-gray-500 text-2xl font-medium">
          {!success? "Confirming your verification..." : "Account verified!"}
          
          
        </h2>
        {!success && !error && !expired && <BeatLoader color="#5cc8cf" />}

        <FormSuccess message={success} />
        <FormError message={error} />
        <FormExpired message={expired}/>
        {success && <p className="text-lg text-gray-500">Please  <Link className="text-cyan-500 underline font-medium text-lg" href={"/login"}>Sign In</Link> </p>}
      </div>
    </div>
  );
};

export default VerificationForm;
