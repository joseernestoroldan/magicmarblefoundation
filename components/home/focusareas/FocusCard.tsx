import React from "react";
import { FocusCardProps } from "@/types/types";
import Link from "next/link";
import Image from "next/image";

const FocusCard = ({ src, alt, title, body, _id }: FocusCardProps) => {
  return (
    <Link href={`/about/focusAreas/${_id}`}>
      <div className="bg-cyan-500 hover:brightness-90 ${color} w-fit h-fit flex flex-col items-center justify-start rounded-2xl p-4">
        <div
          className={`lg:h-[300px] h-[200px] lg:w-[300px] w-[200px] relative overflow-hidden rounded-2xl`}
        >
          <Image
            className={`object-cover object-top rounded-2xl`}
            src={src}
            fill
            alt={alt}
            priority={true}
          />
        </div>

        <h2 className="md:text-lg font-bold text-white h-10 my-4 text-center">
          {title}
        </h2>
        <p className=" h-52 max-w-[300px] text-base lg:text-md font-medium indent-6 text-white text-center">
          {body}
        </p>
      </div>
    </Link>
  );
};

export default FocusCard;
