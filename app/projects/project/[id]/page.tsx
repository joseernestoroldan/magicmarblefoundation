import React from "react";
import { getOne } from "@/client";
import Parrafos from "@/components/parrafos/Parrafos";
import Heading from "@/components/headings/heading";
import HeadingCenterAnimation from "@/components/headingsAnimations/HeadingCenterAnimation";
import Image from "next/image";

const page = async ({ params: { id: _Id } }: { params: { id: string } }) => {
  const data = await getOne(_Id);

  return (
    <HeadingCenterAnimation>
      <div className="flex flex-col lg:flex-row w-full h-auto justify-around px-6">
        <div className="flex flex-col items-center px-4">
          {data[0]?.mainImage !== null && (
            <div className="w-full lg:w-[500px] xl:w-[700px] h-[300px] lg:h-[600px] relative overflow-hidden">
              <Image
                className="object-contain object-top"
                src={data[0]?.mainImage}
                alt="magic marble foundation"
                fill
              />
            </div>
          )}
        </div>
        <div className="pt-4 md:pt-10 px-10 border-x md:border-l  border-gray-400 border-solid">
          <Heading
            title={data[0]?.title}
            color="text-cyan-500"
            shadow=""
            textSize="text-2xl md:text-3xl lg:text-3xl"
            center="flex items-center justify-center"
          />
          {data[0]?.contenido !== null && <Parrafos data={data} />}
        </div>
      </div>
    </HeadingCenterAnimation>
  );
};

export default page;
