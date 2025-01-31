import { QueryType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainPost = ({ paddyFields }: { paddyFields: QueryType[] }) => {
  const mainArticle = paddyFields[0];
  const { _id, mainImage, title, description } = mainArticle;
  console.log("Crop:",mainArticle.crop)
  console.log("Hotspot:", mainArticle.hotSpot)
  return (
    <div className="md:w-2/3 w-full flex flex-col space-y-8">
      {_id && mainImage && (
        <Link href={`paddyfield/${_id}`}>
          <div className="bg-gray-400 h-[50vh] w-full rounded-l-[10px] relative overflow-hidden hover:brightness-75 cursor-pointer">
            <Image
              src={mainImage}
              className="object-cover z-0"
              alt="portal paddy field"
              fill
            />
            <div className="h-[55vh] w-[300px] bg-green-950 absolute bg-opacity-65 flex flex-col space-y-4 justify-start items-center pt-8 pl-4">
              <h2 className="w-[300px] text-white text-2xl font-semibold">
                {title}
              </h2>
              <p className="w-[300px] text-white text-base">{description}</p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default MainPost;
