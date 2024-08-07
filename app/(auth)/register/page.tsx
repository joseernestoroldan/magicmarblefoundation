import RegisterCard from "@/components/auth/registerForm/RegisterCard";
import Button from "@/components/button/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RegisterPage = async () => {
  return (
    <div className="w-full h-auto sm:h-[90vh] flex flex-col justify-center items-center max-w-5xl mx-auto">
      <div className="w-full h-auto sm:h-[90vh] flex justify-center">
        <div className="hidden lg:w-1/2 md:h-[70%] lg:h-[90%] relative rounded-[10px] overflow-hidden lg:block">
          <Image
            className="object-cover object-center"
            src={"sanctuary.webp"}
            alt="Magic Marble Foundation"
            fill
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-10 backdrop-brightness-90">
            <Link href={"/donations"}>
              <Button>Donate</Button>
            </Link>
            <h2 className="text-white text-4xl font-bold text-center">
              Your Choices Can Change The World
            </h2>
          </div>
        </div>
        <div className="w-[90%] sm:w-[70%] lg:w-1/2">
          <RegisterCard />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
