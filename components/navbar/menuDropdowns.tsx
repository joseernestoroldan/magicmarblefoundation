"use client";

import Link from "next/link";

const MenuDropdowns = () => {
  return (
    <div className="hidden flex-row space-x-3 font-medium items-center lg:flex">
      <Link href={"/"}>
        <div className="text-nowrap cursor-pointer hover:drop-shadow-md rounded-lg text-cyan-500 hover:text-gray-500 text-lg font-medium">
          Home
        </div>
      </Link>
    </div>
  );
};

export default MenuDropdowns;
