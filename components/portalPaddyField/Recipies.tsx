import { getAllData } from "@/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Recipies = async () => {
  const recipies = await getAllData("recipies2");
  return (
    <div className="max-w-6xl w-full mx-auto flex flex-col items-center pt-8">
      <h2 className="text-green-950 text-2xl font-semibold">Recipies</h2>
      <div className="w-full h-[400px] flex flex-row justify-between items-center pt-8 overflow-x-scroll  paddyfield-scroll2">
        <Link href={`/paddyfield/morerecipies/${recipies[0]._id}`}>
          <div className="w-[260px] h-[350px] group">
            <div className="w-[260px] h-[260px] bg-gray-400 relative rounded-[5px] overflow-hidden hover:brightness-75 cursor-pointer">
              <Image
                src={recipies[0].mainImage}
                alt="recipies portal paddy field"
                fill
                className="object-cover"
              />
              <div className="absolute w-full h-1/3 bg-black bg-opacity-50 bottom-0 flex flex-col justify-center items-center">
                <h3 className="text-white text-lg font-medium px-1 text-center">
                  {recipies[0].title}
                </h3>
              </div>
            </div>
            <p className="text-green-950 text-base pt-4 px-1 text-center invisible group-hover:visible">
              {recipies[0].description}
            </p>
          </div>
        </Link>
        <Link href={`/paddyfield/morerecipies/${recipies[1]._id}`}>
          <div className="w-[260px] h-[350px] group">
            <div className="w-[260px] h-[260px] bg-gray-400 relative rounded-[5px] overflow-hidden hover:brightness-75 cursor-pointer">
              <Image
                src={recipies[1].mainImage}
                alt="recipies portal paddy field"
                fill
                className="object-cover"
              />
              <div className="absolute w-full h-1/3 bg-black bg-opacity-50 bottom-0 flex flex-col justify-center items-center">
                <h3 className="text-white text-lg font-medium px-1 text-center">
                  {recipies[1].title}
                </h3>
              </div>
            </div>
            <p className="text-green-950 text-base pt-4 px-1 text-center invisible group-hover:visible">
              {recipies[1].description}
            </p>
          </div>
        </Link>

        <Link href={`/paddyfield/morerecipies/${recipies[2]._id}`}>
          <div className="w-[260px] h-[350px] group">
            <div className="w-[260px] h-[260px] bg-gray-400 relative rounded-[5px] overflow-hidden hover:brightness-75 cursor-pointer">
              <Image
                src={recipies[2].mainImage}
                alt="recipies portal paddy field"
                fill
                className="object-cover"
              />
              <div className="absolute w-full h-1/3 bg-black bg-opacity-50 bottom-0 flex flex-col justify-center items-center">
                <h3 className="text-white text-lg font-medium px-1 text-center">
                  {recipies[2].title}
                </h3>
              </div>
            </div>
            <p className="text-green-950 text-base pt-4 px-1 text-center invisible group-hover:visible">
              {recipies[2].description}
            </p>
          </div>
        </Link>

        <Link href={`/paddyfield/morerecipies/${recipies[3]._id}`}>
          <div className="w-[260px] h-[350px] group">
            <div className="w-[260px] h-[260px] bg-gray-400 relative rounded-[5px] overflow-hidden hover:brightness-75 cursor-pointer">
              <Image
                src={recipies[3].mainImage}
                alt="recipies portal paddy field"
                fill
                className="object-cover"
              />
              <div className="absolute w-full h-1/3 bg-black bg-opacity-50 bottom-0 flex flex-col justify-center items-center">
                <h3 className="text-white text-lg font-medium px-1 text-center">
                  {recipies[3].title}
                </h3>
              </div>
            </div>
            <p className="text-green-950 text-base pt-4 px-1 text-center invisible group-hover:visible">
              {recipies[3].description}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Recipies;
