"use client";
import Container from "@/components/layouts/container/Container";
import EnterSection from "@/components/animations/enterSection/EnterSection";
import HeadingCenterAnimation from "@/components/headingsAnimations/HeadingCenterAnimation";
import Heading from "@/components/headings/heading";
import VideoFrame from "@/components/videoFrame/videoframe";
import GridGallery from "./GridGallery";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import GalleryCarousel from "./GalleryCarousel";

const Gallery = ({ gallery }: any) => {
  const [changeGallery, setChangeGallery] = useState<boolean>(false);
  return (

    <EnterSection>
      <div className="flex flex-col items-stretch space-y-0 w-full">
      {/* <div className="pt-4 md:pt-4 flex items-center w-full leading-none">
        <HeadingCenterAnimation>
          <Heading
            title="Our Gallery"
            color="text-cyan-500"
            shadow=""
            textSize="text-2xl"
            center="flex justify-center "
          />
        </HeadingCenterAnimation>
      </div> */}
      <div className="w-full">
        <div className="w-full flex flex-col justify-center relative">
          <div className={`flex items-center justify-center md:justify-end gap-x-2 px-8 py-4 md:py-0  z-10 ${!changeGallery? "top-0 right-0 absolute w-min" : "static"} w-full`}>

            <Label className="sm:text-cyan-500 text-gray-400" htmlFor="show-grid">{changeGallery? "Show Carousel" : "Show Grid" }</Label>
            <Switch
              id="show-grid"
              onCheckedChange={() => {
                setChangeGallery(!changeGallery);
              }}
              defaultChecked={false}
            />
          </div>

          {changeGallery && <GridGallery gallery={gallery} />}
          {!changeGallery && <GalleryCarousel gallery={gallery} />}
        </div>
      </div>
      {/* <div className="w-full max-w-[1400] py-4">
        <VideoFrame
          src="https://www.youtube.com/embed/Xvy-99U_8bQ?autoplay=1&mute=1"
          bg={""}
        />
      </div> */}

      </div>
    </EnterSection>
  );
};

export default Gallery;
