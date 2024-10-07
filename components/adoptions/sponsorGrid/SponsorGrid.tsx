"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SponsorProps } from "@/types/types";

const SponsorGrid = ({ sponsors }: SponsorProps) => {
  const [expand, setExpand] = useState<boolean>(false);

  return (
    <div className="w-full max-w-5xl mx-auto flex justify-center items-center flex-col my-8 space-y-8">
      <button
        className="text-cyan-500 border border-cyan-500 py-2 px-4 rounded-full max-w-[280px]"
        onClick={() => {
          setExpand(!expand);
        }}
      >
        {expand ? "Colapse Grid" : "Expand Grid To See More Animals"}
      </button>

      {expand && (
        <div className="w-full max-w-5xl mx-auto flex flex-row flex-wrap justify-center gap-4">
          {sponsors.map((item: any, index: number) => {
            const left = item.crop ? Math.trunc(item.crop?.left * 100) : 50;
            const top = item.crop ? Math.trunc(item.crop?.top * 100) : 50;
            return (
              <Link href={`/adoptions/${item._id}`} key={index}>
                <div
                  key={index}
                  className="w-[300px] h-[300px] bg-gray-200 rounded-[5px] relative"
                >
                  <Image
                    src={item.mainImage}
                    alt="Magic Adoptions"
                    fill
                    className={`object-cover
                     ${left < 20 && top < 20 && "object-[0%_0%]"} ${left > 20 && left < 40 && top < 20 && "object-[20%_0%]"} ${left > 40 && left < 60 && top < 20 && "object-top"} ${left > 60 && left < 80 && top < 20 && "object-[60%_0%]"} ${left > 80 && left < 100 && top < 20 && "object-[80%_0%]"}
                     ${left < 20 && top > 20 && top < 40 && "object-[0%_20%]"} ${left > 20 && left < 40 && top > 20 && top < 40 && "object-[20%_20%]"} ${left > 40 && left < 60 && top > 20 && top < 40 && "object-[40%_20%]"} ${left > 60 && left < 80 && top > 20 && top < 40 && "object-[60%_20%]"} ${left > 80 && left < 100 && top > 20 && top < 40 && "object-[80%_20%]"}
                     ${left < 20 && top > 40 && top < 60 && "object-[0%_40%]"} ${left > 20 && left < 40 && top > 40 && top < 60 && "object-[20%_40%]"} ${left > 40 && left < 60 && top > 40 && top < 60 && "object-[40%_40%]"} ${left > 60 && left < 80 && top > 40 && top < 60 && "object-[60%_40%]"} ${left > 80 && left < 100 && top > 40 && top < 60 && "object-[80%_40%]"}
                     ${left < 20 && top > 60 && top < 80 && "object-[0%_60%]"} ${left > 20 && left < 40 && top > 60 && top < 80 && "object-[20%_60%]"} ${left > 40 && left < 60 && top > 60 && top < 80 && "object-[40%_60%]"} ${left > 60 && left < 80 && top > 60 && top < 80 && "object-[60%_60%]"} ${left > 80 && left < 100 && top > 60 && top < 80 && "object-[80%_60%]"}
                     ${left < 20 && top > 80 && top < 100 && "object-[0%_80%]"} ${left > 20 && left < 40 && top > 80 && top < 100 && "object-[20%_80%]"} ${left > 40 && left < 60 && top > 80 && top < 100 && "object-[40%_80%]"} ${left > 60 && left < 80 && top > 80 && top < 100 && "object-[60%_80%]"} ${left > 80 && left < 100 && top > 80 && top < 100 && "object-[80%_80%]"}

                      rounded-2xl`}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SponsorGrid;
