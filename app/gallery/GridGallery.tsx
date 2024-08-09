"use client";
import EnterSection from "@/components/animations/enterSection/EnterSection";
import Wrapper from "@/components/gallery/wrapper/Wrapper";
import NotNull from "@/components/notnull/NotNull";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const GridGallery = ({ gallery }: any) => {
  return (
    <EnterSection>
      <Wrapper>
        {gallery.map((photograph: any) => {
          const left = photograph.crop ? Math.trunc(photograph.crop?.left * 100) : 50;
          const top = photograph.crop ? Math.trunc(photograph.crop?.top * 100) : 50;
          return(
          <Link
            key={photograph._id}
            href={`gallery/photos/${photograph._id}`}
            passHref
          >
            <div className="w-[300px] group relative max-w-[200px] h-[200px] overflow-hidden  rounded-xl bg-black">
              <div className="absolute flex flex-col items-center justify-center z-10 invisible group-hover:visible top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[180px]">
                <NotNull notnull={photograph.title}>
                  <h1 className="capitalize text-white text-sm font-bold w-full text-center">
                    {photograph.title}
                  </h1>
                </NotNull>
              </div>

              <Image
                className={`object-cover max-w-[1200px] mx-auto group-hover:opacity-40 ${left < 20 && top < 20 && "object-[0%_0%]"} ${left > 20 && left < 40 && top < 20 && "object-[20%_0%]"} ${left > 40 && left < 60 && top < 20 && "object-top"} ${left > 60 && left < 80 && top < 20 && "object-[60%_0%]"} ${left > 80 && left < 100 && top < 20 && "object-[80%_0%]"}
                ${left < 20 && top > 20 && top < 40 && "object-[0%_20%]"} ${left > 20 && left < 40  && top > 20 && top < 40 && "object-[20%_20%]"} ${left > 40 && left < 60  && top > 20 && top < 40 && "object-[40%_20%]"} ${left > 60 && left < 80  && top > 20 && top < 40 && "object-[60%_20%]"} ${left > 80 && left < 100  && top > 20 && top < 40 && "object-[80%_20%]"}
                ${left < 20 && top > 40 && top < 60 && "object-[0%_40%]"} ${left > 20 && left < 40  && top > 40 && top < 60 && "object-[20%_40%]"} ${left > 40 && left < 60  && top > 40 && top < 60 && "object-[40%_40%]"} ${left > 60 && left < 80  && top > 40 && top < 60 && "object-[60%_40%]"} ${left > 80 && left < 100  && top > 40 && top < 60 && "object-[80%_40%]"}
                ${left < 20 && top > 60 && top < 80 && "object-[0%_60%]"} ${left > 20 && left < 40  && top > 60 && top < 80 && "object-[20%_60%]"} ${left > 40 && left < 60  && top > 60 && top < 80 && "object-[40%_60%]"} ${left > 60 && left < 80  && top > 60 && top < 80 && "object-[60%_60%]"} ${left > 80 && left < 100  && top > 60 && top < 80 && "object-[80%_60%]"}
                ${left < 20 && top > 80 && top < 100 && "object-[0%_80%]"} ${left > 20 && left < 40  && top > 80 && top < 100 && "object-[20%_80%]"} ${left > 40 && left < 60  && top > 80 && top < 100 && "object-[40%_80%]"} ${left > 60 && left < 80  && top > 80 && top < 100 && "object-[60%_80%]"} ${left > 80 && left < 100  && top > 80 && top < 100 && "object-[80%_80%]"}
`}
                src={photograph.mainImage}
                fill
                alt="magic marble foundation"
                priority
              />
            </div>
          </Link>
)})}
      </Wrapper>
    </EnterSection>
  );
};

export default GridGallery;
