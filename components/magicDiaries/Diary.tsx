import React from "react";
import { DiaryProps } from "@/types/types";
import Link from "next/link";
import Image from "next/image";

const Diary = ({ _id, title, mainImage, description, crop }: DiaryProps) => {
  const left = crop ? Math.trunc(crop?.left * 100) : 50;
  const top = crop ? Math.trunc(crop?.top * 100) : 50;
  return (
    <Link href={`/diaries/${_id}`}>
      <div
        className={`group bg-black w-[300px] h-[auto] flex justify-around items-center rounded-2xl border-gray-300 border border-card shadow-xl relative m-4`}
      >
        <div className="flex justify-center items-center group-hover:opacity-60 ">
          <div
            className={`w-[300px] h-[300px] relative overflow-hidden rounded-2xl`}
          >
            <Image
              className={`object-cover
                     ${left < 20 && top < 20 && "object-[0%_0%]"} ${left > 20 && left < 40 && top < 20 && "object-[20%_0%]"} ${left > 40 && left < 60 && top < 20 && "object-top"} ${left > 60 && left < 80 && top < 20 && "object-[60%_0%]"} ${left > 80 && left < 100 && top < 20 && "object-[80%_0%]"}
                     ${left < 20 && top > 20 && top < 40 && "object-[0%_20%]"} ${left > 20 && left < 40 && top > 20 && top < 40 && "object-[20%_20%]"} ${left > 40 && left < 60 && top > 20 && top < 40 && "object-[40%_20%]"} ${left > 60 && left < 80 && top > 20 && top < 40 && "object-[60%_20%]"} ${left > 80 && left < 100 && top > 20 && top < 40 && "object-[80%_20%]"}
                     ${left < 20 && top > 40 && top < 60 && "object-[0%_40%]"} ${left > 20 && left < 40 && top > 40 && top < 60 && "object-[20%_40%]"} ${left > 40 && left < 60 && top > 40 && top < 60 && "object-[40%_40%]"} ${left > 60 && left < 80 && top > 40 && top < 60 && "object-[60%_40%]"} ${left > 80 && left < 100 && top > 40 && top < 60 && "object-[80%_40%]"}
                     ${left < 20 && top > 60 && top < 80 && "object-[0%_60%]"} ${left > 20 && left < 40 && top > 60 && top < 80 && "object-[20%_60%]"} ${left > 40 && left < 60 && top > 60 && top < 80 && "object-[40%_60%]"} ${left > 60 && left < 80 && top > 60 && top < 80 && "object-[60%_60%]"} ${left > 80 && left < 100 && top > 60 && top < 80 && "object-[80%_60%]"}
                     ${left < 20 && top > 80 && top < 100 && "object-[0%_80%]"} ${left > 20 && left < 40 && top > 80 && top < 100 && "object-[20%_80%]"} ${left > 40 && left < 60 && top > 80 && top < 100 && "object-[40%_80%]"} ${left > 60 && left < 80 && top > 80 && top < 100 && "object-[60%_80%]"} ${left > 80 && left < 100 && top > 80 && top < 100 && "object-[80%_80%]"}

                      rounded-2xl`}
              src={mainImage}
              fill
              alt="magic marble foundation diaries"
              priority={true}
            />
          </div>
        </div>
        <div className="invisible group-hover:visible bg-black bg-opacity-50 absolute z-10 bottom-0 left-0 right-0 flex flex-col justify-start space-y-2 p-6 rounded-b-2xl">
          <h2 className="text-base font-bold  text-white">{title}</h2>
          <p className="text-sm font-medium  w-full h-min text-left max-w-[500px] text-white ">
            {description
              ? description?.substring(0, 70)
              : "Magic Marble Foundation"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Diary;
