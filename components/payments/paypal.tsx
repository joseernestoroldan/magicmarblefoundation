import Link from "next/link";
import React from "react";
import Image from "next/image";

const Paypal = () => {
  return (
    <Link href={"https://www.paypal.com/donate?hosted_button_id=8LVLMN3NBRABS"}>
      <div className=" w-60 h-60 border border-gray-300 flex flex-col justify-center items-center rounded-[10px] space-y-4 hover:bg-gray-50">
        <button className="flex space-x-4 rounded-xl bg-yellow-400  justify-center items-center h-12 w-52">
          <Image src="/paypal.webp" width={20} height={20} alt="paypal" />
          <p className="italic text-xl">
            <span className=" text-blue-800 font-bold ">Pay</span>
            <span className=" text-blue-400 font-bold">Pal</span>
          </p>
        </button>

        <div className="w-full h-4 flex justify-center items-center">
          <div className="bg-gray-300 w-1/3 h-[1px] mx-2"></div>
          <span className="text-gray-400 text-base font-medium">Or</span>
          <div className="bg-gray-300 w-1/3 h-[1px] mx-2"></div>
        </div>

        <p className="text-cyan-500 text-base font-medium text-center mx-6 capitalize">
          Donate with your Credit or Debit Card
        </p>
      </div>
    </Link>
  );
};

export default Paypal;
