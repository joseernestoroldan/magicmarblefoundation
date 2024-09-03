import { getOne } from "@/client";
import Parrafos from "@/components/parrafos/Parrafos";
import React from "react";

const PortalPaddyFieldPage = async ({
  params: { id: _Id },
}: {
  params: { id: string };
}) => {
  const data = await getOne(_Id);
  return (
    <div className="w-full bg-gradient-to-b from-white via-green-300 to-white flex flex-col items-center justify-center bg-blue-400">
      <h1 className="text-2xl text-green-800">Portal Paddy Field</h1>
      <div className="max-w-6xl mx-auto w-full flex flex-row items-start">
        <div className="w-[58%]">
          <div className="w-[100%] aspect-video bg-gray-200"></div>
        </div>
        <div className="w-[42%] aspect-video flex items-start flex-wrap">
          <div className="w-[40%] mb-4 ml-4 aspect-square bg-gray-200"></div>
          <div className="w-[40%] mb-4 ml-4 aspect-square bg-gray-200"></div>
          <div className="w-[40%] mb-4 ml-4 aspect-square bg-gray-200"></div>
          <div className="w-[40%] mb-4 ml-4 aspect-square bg-gray-200"></div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl w-full pt-8">{data[0].contenido !== null && <Parrafos data={data} />}</div>
      
    </div>
  );
};

export default PortalPaddyFieldPage;
