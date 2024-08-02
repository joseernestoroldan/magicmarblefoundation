"use client";
import { sigInGoogle } from "@/actions/signInGoogle";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useSearchParams } from "next/navigation";


const LoginGoogle = () => {
  const searchParams = useSearchParams();
  const oauthError = searchParams.get("error") ?? "1";
  return (
    <div className="flex flex-col items-center space-y-4">
      <button
        onClick={async () => {
          await sigInGoogle();
        }}
        className="flex flex-row justify-center text-gray-500 items-center w-[250px] py-3 hover:bg-gray-100 gap-x-4 border border-gray-200 border-solid rounded-[5px]"
      >
        <FcGoogle className="text-lg" />
        Sign in with Google
      </button>
      {oauthError === "OAuthAccountNotLinked" && (
        <div className="bg-red-200 p-3 flex flex-col justify-center items-center gap-x-2 text-base text-red-600 rounded-[5px]">
          <p>Your email is already register with other credentials</p>
          <p>Please try either other email or other method!</p>
        </div>
      )}
    </div>
  );
};

export default LoginGoogle;
