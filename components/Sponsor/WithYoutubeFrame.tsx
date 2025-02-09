import { WithYouTubeFrameProps } from "@/types/types";
import { DialogImage } from "./DialogImage";

export const WithYouTubeFrame = ({
  videoLink,
  mainImage,
  secondImage,
  thirdImage,
  hotSpotMain,
  hotSpotSecond,
  hotSpotThird,
}: WithYouTubeFrameProps) => {
  return (
    <div className="w-full h-auto flex flex-col justify-start items-center space-y-0 sm:space-y-4">
      <div className="w-full bg-gray-400 aspect-video rounded-[10px] relative overflow-hidden hidden min-[500px]:block mb-4 sm:mb-0">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={videoLink}
          title="Magic Marble Foundation"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>

      <div className="w-full flex flex-col sm:flex-row justify-between items-center space-y-4 space-x-0 sm:space-y-0 sm:space-x-4">
        {mainImage && <DialogImage image={mainImage} hotSpot={hotSpotMain} />}
        {secondImage && (
          <DialogImage image={secondImage} hotSpot={hotSpotSecond} />
        )}
        {thirdImage && (
          <DialogImage image={thirdImage} hotSpot={hotSpotThird} />
        )}
      </div>
    </div>
  );
};
