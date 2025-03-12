"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { QueryType, SponsorProps } from "@/types/types";

const SponsorGrid = ({ sponsors }: SponsorProps) => {
  const [expand, setExpand] = useState<boolean>(false);

  // detects if the user is on a mobile device with useeffect

  const isMobile = global.innerWidth < 1024;

  useEffect(() => {
    if (isMobile) {
      setExpand(true);
    } else {
      setExpand(false);
    }
  }, [isMobile]);

  return (
    <div className="w-full max-w-5xl mx-auto flex justify-center items-center flex-col my-8 space-y-8">
      {<button
        className="text-cyan-500 border border-cyan-500 py-2 px-4 rounded-full max-w-[280px]"
        onClick={() => {
          setExpand(!expand);
        }}>
        {expand ? "Colapse Grid" : "Expand Grid To See More Animals"}
      </button>}

      {expand && (
        <div className="w-full max-w-5xl mx-auto flex flex-row flex-wrap justify-center gap-4">
          {sponsors.map((item: QueryType, index: number) => {
            const { hotSpotMain, mainImage } = item;
            const x = (hotSpotMain?.x ?? 0.5) * 100;
            const y = (hotSpotMain?.y ?? 0.5) * 100;

            return (
              <Link href={`/adoptions/${item._id}`} key={index}>
                <div
                  key={index}
                  className="w-[300px] h-[300px] bg-gray-200 rounded-[5px] relative">
                  <Image
                    src={mainImage ?? ""}
                    alt="Magic Adoptions"
                    fill
                    className={`object-cover rounded-2xl`}
                    style={{ objectPosition: `${x}% ${y}%` }}
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
