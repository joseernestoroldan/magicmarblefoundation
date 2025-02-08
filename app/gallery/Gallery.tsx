"use client";
import EnterSection from "@/components/animations/enterSection/EnterSection";
import GridGallery from "./GridGallery";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import GalleryCarousel from "./GalleryCarousel";
import { QueryType } from "@/types/types";

const Gallery = ({ gallery }: { gallery: QueryType[] }) => {
  const [changeGallery, setChangeGallery] = useState<boolean>(true);
  return (
    <EnterSection>
      <div className="flex flex-col items-stretch space-y-0 w-full">
        <div className="w-full">
          <div className="w-full flex flex-col justify-center relative">
            <div
              className={`flex items-center justify-center md:justify-end gap-x-2 px-8 z-10 ${!changeGallery ? "top-0 right-0 absolute sm:static w-min sm:w-full py-4 md:py-2 max-w-[1300px] mx-auto" : "w-full py-4 md:py-0 pt-0 md:pt-4 "}`}
            >
              <Label
                className="sm:text-cyan-500 text-gray-400"
                htmlFor="show-grid"
              >
                {changeGallery ? "Show Carousel" : "Show Grid"}
              </Label>
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
      </div>
    </EnterSection>
  );
};

export default Gallery;
