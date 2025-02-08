"use client";
import EnterSection from "@/components/animations/enterSection/EnterSection";
import Wrapper from "@/components/gallery/wrapper/Wrapper";
import NotNull from "@/components/notnull/NotNull";
import { QueryType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const GridGallery = ({ gallery }: { gallery: QueryType[] }) => {
  return (
    <EnterSection>
      <Wrapper>
        {gallery.map((photograph: QueryType) => {
          const { _id, mainImage, title, hotSpotMain } = photograph;
          const x = (hotSpotMain?.x ?? 0.5) * 100;
          const y = (hotSpotMain?.y ?? 0.5) * 100;
          return (
            <Link key={_id} href={`gallery/photos/${_id}`} passHref>
              <div className="w-[300px] group relative max-w-[200px] h-[200px] overflow-hidden  rounded-xl bg-black">
                <div className="absolute flex flex-col items-center justify-center z-10 invisible group-hover:visible top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[180px]">
                  <NotNull notnull={title}>
                    <h1 className="capitalize text-white text-sm font-bold w-full text-center">
                      {title}
                    </h1>
                  </NotNull>
                </div>

                <Image
                  className={`object-cover`}
                  src={mainImage ?? "/no-profile.webp"}
                  fill
                  alt="magic marble foundation"
                  priority
                  style={{ objectPosition: `${x}% ${y}%` }}
                />
              </div>
            </Link>
          );
        })}
      </Wrapper>
    </EnterSection>
  );
};

export default GridGallery;
