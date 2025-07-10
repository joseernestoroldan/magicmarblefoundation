import Link from "next/link";
import React from "react";
import Image from "next/image";

const Paypal = () => {
  return (
    <Link href={"https://www.paypal.com/donate?hosted_button_id=8LVLMN3NBRABS"}>
      <button className="flex space-x-4 rounded-xl bg-yellow-400  justify-center items-center h-12 w-52">
        <Image src="/paypal.webp" width={20} height={20} alt="paypal" />

        <p className="italic text-xl">
          <span className=" text-blue-800 font-bold ">Pay</span>
          <span className=" text-blue-400 font-bold">Pal</span>
        </p>
      </button>
    </Link>
  );
};

export default Paypal;
