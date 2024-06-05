import Container from "@/components/layouts/container/Container";
import Link from "next/link";
import React from "react";
import Wrapper from "@/components/gallery/wrapper/Wrapper";
import { getAllData } from "@/client";
import EnterSection from "@/components/animations/enterSection/EnterSection";
import EnterElement from "@/components/animations/enterElement/EnterElement";
import HeadingCenterAnimation from "@/components/headingsAnimations/HeadingCenterAnimation";
import Heading from "@/components/headings/heading";
import Image from "next/image";
import NotNull from "@/components/notnull/NotNull";
import Donations from "@/components/home/donations/Donations";
import VideoFrame from "@/components/videoFrame/videoframe";

const GalleryPage = async () => {
  const gallery = await getAllData("gallery");
  return (
    <EnterSection>
      <div className="pt-4 md:pt-16 flex items-center w-full ">
        <HeadingCenterAnimation>
          <Heading
            title="Our Gallery"
            color="text-cyan-500"
            shadow=""
            textSize="text-5xl"
            center="flex justify-center "
          />
        </HeadingCenterAnimation>
      </div>
      <Container>
        <EnterElement>
          <Wrapper>
            {gallery.map((photograph: any) => (
              <Link
                key={photograph._id}
                href={`gallery/photos/${photograph._id}`}
                passHref
              >
                <div className="w-[300px] group relative max-w-[200px] h-[200px]  rounded-xl bg-black">
                  <div className="absolute flex flex-col items-center justify-center z-10 invisible group-hover:visible top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                    <NotNull notnull={photograph.title}>
                      <h1 className="capitalize text-white text-sm font-bold">
                        {photograph.title}
                      </h1>
                    </NotNull>
                  </div>

                  <Image
                    className="object-cover object-top max-w-[1200px] mx-auto rounded-[1rem] group-hover:opacity-40"
                    src={photograph.mainImage}
                    fill
                    alt="magic marble foundation"
                    priority
                  />
                </div>
              </Link>
            ))}
          </Wrapper>
        </EnterElement>
      </Container>
      <div className="w-full max-w-[1400] py-4">
        
        <VideoFrame
          src="https://www.youtube.com/embed/Xvy-99U_8bQ?autoplay=1&mute=1"
          bg={""}
        />
      </div>
    </EnterSection>
  );
};

export default GalleryPage;
