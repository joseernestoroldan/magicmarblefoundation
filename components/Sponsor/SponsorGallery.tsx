import { SponsorGalleryProps } from "@/types/types";
import CarouselSponsor from "./CarouselSponsor";
import { WithYouTubeFrame } from "./WithYoutubeFrame";

export const SponsorGallery = ({
  youtubeLink,
  videoLink,
  mainImage,
  secondImage,
  thirdImage,
  hotSpotMain,
  hotSpotSecond,
  hotSpotThird,
  _id,
}: SponsorGalleryProps) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {youtubeLink && (
        <WithYouTubeFrame
          videoLink={videoLink}
          mainImage={mainImage}
          secondImage={secondImage}
          thirdImage={thirdImage}
          hotSpotMain={hotSpotMain}
          hotSpotSecond={hotSpotSecond}
          hotSpotThird={hotSpotThird}
        />
      )}

      {!youtubeLink && (
        <CarouselSponsor
          mainImage={mainImage}
          secondImage={secondImage}
          thirdImage={thirdImage}
          id={_id}
        />
      )}
    </div>
  );
};