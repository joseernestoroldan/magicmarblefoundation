import React from "react";
import { AuthorProps } from "@/types/types";
import Image from "next/image";

const Author = ({ data }: AuthorProps) => {
  return (
    <div className="w-min relative">
      <div className="absolute left-[50%] -translate-x-[50%] text-center w-full  bg-white text-gray-500 font-semibold text-base">
        The Author
      </div>
      <div className="flex flex-col w-[150px] h-[200px] space-y-1 items-center border-card shadow-xl relative justify-center rounded-xl">
        <div
          className={`w-[100px] h-[100px] relative overflow-hidden rounded-[50%]`}
        >
          <Image
            className={`object-cover object-top rounded-2xl`}
            src={data[0].authorImage}
            fill
            alt=""
            priority={true}
          />
        </div>
        <p className=" text-base font-medium text-gray-500 text-center">
          {data[0].author}
        </p>
      </div>
    </div>
  );
};

export default Author;
