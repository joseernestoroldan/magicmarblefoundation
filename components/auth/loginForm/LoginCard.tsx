import React from "react";
import Separator from "../separator/Separator";
import Link from "next/link";
import LoginForm from "./LoginForm";
import LoginGoogle from "./LoginGoogle";

const LoginCard = () => {
  return (
    <div className="w-full flex flex-col items-center space-y-6">
      <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-500 text-center">
        Welcome back to Magic Marble Foundation
      </h2>

      <LoginForm />

      <Separator title="Or" />

      <div className="flex flex-col space-y-4 disabled">
        <LoginGoogle />
      </div>

      <div className="flex flex-col sm:flex-row sm:gap-x-2 items-center">
        <p className="text-gray-500 text-center">
          New in Magic Marble Foundation?
        </p>
        <Link href={"/register"} className="text-cyan-500 underline">
          Create Account
        </Link>
      </div>
    </div>
  );
};

export default LoginCard;
