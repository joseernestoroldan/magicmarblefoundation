import React from "react";
import Photo from "@/components/photo/photo";
import { FocusCardProps } from "@/types/types";
import EnterElement from "@/components/animations/enterElement/EnterElement";
import Link from "next/link";

const FocusCard = ({ src, alt, title, body, _id }: FocusCardProps) => {
  return (
 
      <Link href={`/about/focusAreas/${_id}`}>
        <div className="bg-cyan-500 hover:brightness-90 ${color} w-fit h-fit flex flex-col items-center justify-start rounded-2xl p-4">
          <Photo
            objectFit="object-cover"
            width="lg:w-[300px] w-[200px]"
            height="lg:h-[300px] h-[200px]"
            src={src}
            alt={alt}
            borderRadius="rounded-2xl"
          />

          <h2 className="lg:text-2xl md:text-lg font-bold text-white h-10 my-4 ">
            {title}
          </h2>
          <p className=" h-52 max-w-[300px] text-base lg:text-md font-medium indent-6 text-white text-justify">
            {body}
          </p>
        </div>
      </Link>
   
  );
};

export default FocusCard;
