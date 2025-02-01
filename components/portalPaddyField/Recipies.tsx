import { getAllData } from "@/client";
import { QueryType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Recipies = async () => {
  const recipies: QueryType[] = await getAllData("recipies2");

  return (
    <div className="max-w-6xl w-full mx-auto flex flex-col items-center space-y-8">
      <h2 className="text-gray-500 text-3xl font-bold">Recipies</h2>
      <div className="w-full flex flex-row justify-between items-center paddyfield-scroll2">
        <RecipieComponent
          _id={recipies[0]._id}
          mainImage={recipies[0].mainImage}
          title={recipies[0].title}
          description={recipies[0].description}
        />
        <RecipieComponent
          _id={recipies[1]._id}
          mainImage={recipies[1].mainImage}
          title={recipies[1].title}
          description={recipies[1].description}
        />
        <RecipieComponent
          _id={recipies[2]._id}
          mainImage={recipies[2].mainImage}
          title={recipies[2].title}
          description={recipies[2].description}
        />
        <RecipieComponent
          _id={recipies[3]._id}
          mainImage={recipies[3].mainImage}
          title={recipies[3].title}
          description={recipies[3].description}
        />
      </div>
    </div>
  );
};

export default Recipies;

const RecipieComponent = ({
  _id,
  mainImage,
  title,
  description,
}: {
  _id: string;
  mainImage: string | null;
  title: string | null;
  description: string | null;
}) => {
  return (
    <Link href={`/paddyfield/morerecipies/${_id}`}>
      <div className="w-[260px] h-[260px] group bg-gray-500 rounded-[10px]">
        <div className="w-full h-full bg-gray-400 relative rounded-[5px] overflow-hidden hover:brightness-75 cursor-pointer">
          <Image
            src={mainImage || "/logo.jpg"}
            alt="recipies portal paddy field"
            fill
            className="object-cover"
          />
          <div className="absolute w-full h-1/3 bg-black bg-opacity-50 bottom-0 flex flex-col justify-center items-center">
            <h3 className="text-white text-lg font-medium px-1 text-center">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};
