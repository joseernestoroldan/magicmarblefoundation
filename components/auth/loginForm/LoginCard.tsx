import React from "react";
import Separator from "../separator/Separator";
import Link from "next/link";
import LoginForm from "./LoginForm";
import LoginGoogle from "./LoginGoogle";

const LoginCard = () => {


  
  return (
    <div className="w-full flex flex-col items-center space-y-6">
      <h2 className="text-lg text-gray-500">
        Welcome back to Magic Marble Foundation
      </h2>

      <LoginForm />

      <Separator title="Or"/>

      <div className="flex flex-col space-y-4 disabled">
        <LoginGoogle/>
      </div>

      <p className="text-gray-500">
        New in Magic Marble Foundation?{" "}
        <Link href={"/register"} className="text-cyan-500 underline">
          Create Account
        </Link>
      </p>
    </div>
  );
};

export default LoginCard;
