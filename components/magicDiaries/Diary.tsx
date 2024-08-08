import React from "react";
import { DiaryProps } from "@/types/types";
import Link from "next/link";
import Image from "next/image";

const Diary = ({ _id, title, mainImage, description }: DiaryProps) => {
  return (
    <Link href={`/diaries/${_id}`}>
      <div
        className={`group bg-black w-[300px] h-[auto] flex justify-around items-center rounded-2xl border-gray-300 border border-card shadow-xl relative`}
      >
        <div className="flex justify-center items-center group-hover:opacity-60 ">
          <div
            className={`w-[300px] h-[300px] relative overflow-hidden rounded-2xl`}
          >
            <Image
              className={`object-cover object-center rounded-2xl`}
              src={mainImage}
              fill
              alt=""
              priority={true}
            />
          </div>
        </div>
        <div className="invisible group-hover:visible bg-black bg-opacity-50 absolute z-10 bottom-1 left-1 flex flex-col justify-start space-y-2 p-6 rounded-b-2xl">
          <h2 className="text-lg font-bold  text-white">{title}</h2>
          <p className="text-sm font-medium  w-full h-min text-justify max-w-[500px] text-transparent bg-gradient-to-r from-white via-white to-transparent bg-clip-text ">
            {description?.substring(0, 70)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Diary;
