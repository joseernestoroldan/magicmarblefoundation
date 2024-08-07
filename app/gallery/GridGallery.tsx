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
        {gallery.map((photograph: any) => (
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
                className="object-cover object-top max-w-[1200px] mx-auto group-hover:opacity-40"
                src={photograph.mainImage}
                fill
                alt="magic marble foundation"
                priority
              />
            </div>
          </Link>
        ))}
      </Wrapper>
    </EnterSection>
  );
};

export default GridGallery;
