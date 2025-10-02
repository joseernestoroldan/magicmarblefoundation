import { getAllData } from "@/client";
import { QueryType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Recipies = async () => {
  const recipies: QueryType[] = await getAllData("recipes");

  return (
    <section className="max-w-7xl w-full rounded-[5px] mx-auto flex flex-col items-center space-y-8 p-4 bg-gray-500/10">
      <h2 className="text-2xl font-bold text-gray-700">Recipes</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {recipies.slice(0, 4).map((r) => (
          <RecipieComponent
            key={r._id}
            _id={r._id}
            mainImage={r.mainImage}
            title={r.title}
            description={r.description}
          />
        ))}
      </div>
      <div className="w-full py-0 text-gray-500 underline text-sm font-bold text-center">
        <Link href={"/paddyfield/morerecipies"}>Get More Recipies</Link>
      </div>
    </section>
  );
};

export default Recipies;

const RecipieComponent = ({
  _id,
  mainImage,
  title,
}: {
  _id: string;
  mainImage: string | null;
  title: string | null;
  description: string | null;
}) => (
  <Link href={`/paddyfield/morerecipies/${_id}`}>
    <div className="w-[260px] h-[260px] rounded-lg overflow-hidden shadow-md group">
      <div className="relative w-full h-full">
        <Image
          src={mainImage || "/logo.jpg"}
          alt="recipes portal paddy field"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-0 w-full bg-black bg-opacity-60 p-3 flex justify-center items-center">
          <h3 className="text-white text-lg font-semibold text-center line-clamp-2">
            {title}
          </h3>
        </div>
      </div>
    </div>
  </Link>
);
