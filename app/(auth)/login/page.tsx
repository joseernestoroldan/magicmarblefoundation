import LoginCard from "@/components/auth/loginForm/LoginCard";
import Button from "@/components/button/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="w-full h-[90vh] flex flex-col justify-center items-center max-w-5xl mx-auto">
      <div className="w-full flex h-[80%]">
        <div className="w-1/2 relative rounded-[10px] overflow-hidden">
          <Image
            className="object-cover object-center"
            src={"sterilization.webp"}
            alt="Magic Marble Foundation"
            fill
          />

          <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-end items-center gap-10 backdrop-brightness-50 pb-16">
            <h2 className="text-white text-3xl font-bold text-center">
              Be Change You Want For the World
            </h2>
            <Link href={"/donations"}>
              <Button>Donate</Button>
            </Link>{" "}
          </div>
        </div>
        <div className=" w-1/2">
          <LoginCard />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
