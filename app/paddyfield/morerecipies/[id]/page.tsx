import { getOne } from "@/client";
import PaddyParagraphs from "@/components/parrafos/PaddyParagraphs";
import Image from "next/image";

import React from "react";

const RecipiePage = async ({
  params: { id: _Id },
}: {
  params: { id: string };
}) => {
  const [data] = await getOne(_Id);

  const ingredients = data.ingredients;
  const instructions = data.instructions;

  return (
    <div className="w-full bg-gradient-to-b from-white via-green-300 to-white flex flex-col items-center justify-center space-y-8">
      <div className="w-full max-w-5xl mx-auto flex flex-col space-y-8 items-center">
        <h2 className="w-full text-center text-2xl text-green-950 font-medium">
          {data.title}
        </h2>
        <div className="w-full flex">
          <div className="w-1/2 flex flex-col justify-start items-start group relative">
            <div className="w-full bg-gray-400 h-[300px] relative overflow-hidden rounded-[5px] group-hover:scale-75 origin-top-left duration-700">
              <Image
                src={data.mainImage}
                alt="Portal Paddy FIeld Recipe"
                fill
                className="object-cover"
              />
            </div>
            <p className="absolute bottom-12 opacity-0 group-hover:opacity-100 duration-1000 text-xl text-green-950">{data.description}</p>
          </div>
          <div className="w-1/2 p-8 bg-green-200 rounded-[5px] bg-opacity-15 bg-blend-overlay flex flex-col space-y-8 ">
            <div className="w-full rounded-[5px]">
              <p className="text-lg text-green-950 font-semibold">
                Ingredients:
              </p>

              <PaddyParagraphs datos={ingredients} />
            </div>

            <div className="w-full rounded-r-[5px]">
              <p className="text-lg text-green-950 font-semibold">
                Instructions:
              </p>

              <PaddyParagraphs datos={instructions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipiePage;
