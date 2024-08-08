import React from "react";
import Link from "next/link";
import Image from "next/image";

const Venmo = () => {
  return (
    <Link
      href={
        "https://account.venmo.com/payment-link?recipients=magicmarble&txn=pay"
      }
    >
      <button className="flex space-x-4 rounded-xl bg-white m-4 justify-center items-center h-12 w-52 border ">
        <Image height={50} width={150} src="/venmo.webp" alt="paypal"/>
      </button>
    </Link>
  );
};

export default Venmo;
