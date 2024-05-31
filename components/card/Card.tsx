"use client";
import React from "react";
import Image from "next/image";
import { CardDairiesProps } from "@/types/types";
import EnterSection from "../animations/enterSection/EnterSection";
import EnterElement from "../animations/enterElement/EnterElement";
import Photo from "../photo/photo";

const CardDairies = ({ src, title, body }: CardDairiesProps) => {
  return (
    <EnterElement>
      <div
        className={`bg-white w-[380px] h-[500px] flex flex-col items-center space-y-4  p-4 rounded-2xl  bg-opacity-100 border-card shadow-xl`}
      >
        <Photo objectFit="object-cover" width="w-[350px]" height="h-[260px]" borderRadius="rounded-xl" src={src} alt=""/>

        <h2 className="text-xl font-bold  text-gray-500">{title}</h2>
        <div className="relative bg-white h-min">
          <span className="absolute z-10 bottom-0 right-0 w-full h-6 bg-gradient-to-r from-transparent via-white to-white"></span>
          <p className="text-justify text-base font-medium indent-4 text-gray-500 w-full h-min">
            {body}
          </p>
        </div>
      </div>
    </EnterElement>
  );
};

export default CardDairies;
