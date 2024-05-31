import Heading from "@/components/headings/heading";
import HeadingAboutAnimation from "@/components/headingsAnimations/HeadingAboutAnimation";
import ParallaxContainer from "@/components/parallax/parallax";
import { url } from "inspector";
import React from "react";

const GetInvolvePage = () => {
  return (
    <div className="bg-scroll" >
      {/* <ParallaxContainer bgImage="care.webp" opacity="1">
        <div className="w-full h-[600px] flex flex-col justify-center items-center">
          <div className="w-fit h-fit p-4 bg-black bg-opacity-70 rounded-2xl leading-none">
            <HeadingAboutAnimation>
              <Heading
                title="Be the Catalyst for Change"
                color="text-white"
                textSize="text-5xl"
                center="text center"
                shadow="shadow-2xl"
                background-image: url(...)
              />
            </HeadingAboutAnimation>
          </div>
        </div>
      </ParallaxContainer> */}
    </div>
  );
};

export default GetInvolvePage;
