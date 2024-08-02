import React from "react";
import Separator from "../separator/Separator";
import Link from "next/link";
import RegisterForm from "./RegisterForm";
import LoginGoogle from "../loginForm/LoginGoogle";

const RegisterCard = () => {
  return (
    <div className="w-full flex flex-col items-center space-y-6">
      <h2 className="text-2xl font-medium text-gray-500 text-center">
        Welcome to Magic Marble Foundation
      </h2>

      <RegisterForm />

      <Separator title="Or" />

      <div className="flex justify-between items-center space-x-2">
        <LoginGoogle/>
      </div>

      <p className="text-gray-500">
        Already have an Account?{" "}
        <Link href={"/login"} className="text-cyan-500 underline">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default RegisterCard;
