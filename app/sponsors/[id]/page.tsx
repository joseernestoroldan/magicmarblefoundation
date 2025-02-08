import { getOne } from "@/client";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import CarouselVerticalSponsor from "@/components/Sponsor/CarouselSponsor";
import { HotSpot, QueryType } from "@/types/types";
import Paragraphs from "@/components/parrafos/Paragraphs";
import { DialogImage } from "@/components/Sponsor/DialogImage";

const SponsorDynamicPage = async ({
  params: { id: _Id },
}: {
  params: { id: string };
}) => {
  const query: QueryType[] = await getOne(_Id);
  const [data] = query;
  const {
    _id,
    mainImage,
    secondImage,
    thirdImage,
    hotSpotMain,
    hotSpotSecond,
    hotSpotThird,
    youtubeLink,
    contenido,
  } = data;

  const url = youtubeLink ?? "";
  const urlParts = url.split("?v=");
  const queryString = urlParts[1];

  const videoEmbedUrl = `https://www.youtube.com/embed/${queryString}?autoplay=1&mute=1`;

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-8">
        <SponsorGallery
          videoLink={videoEmbedUrl}
          youtubeLink={youtubeLink}
          mainImage={mainImage}
          secondImage={secondImage}
          thirdImage={thirdImage}
          hotSpotMain={hotSpotMain}
          hotSpotSecond={hotSpotSecond}
          hotSpotThird={hotSpotThird}
        />
      </div>

      <div className="w-full md:w-1/2  p-8"></div>

      {/* <div className="w-full h-auto flex justify-start flex-col md:flex-row">
        {youtubeLink && (
          <div className="md:w-[60%] w-full h-auto flex flex-col justify-start items-center space-y-2">
            <div className="w-full bg-gray-400 aspect-video rounded-[5px] relative overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={videoEmbedUrl}
                title="Magic Marble Foundation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="w-full h-min flex">
              <div className="w-full flex flex-row justify-center items-center space-x-2">
                {mainImage && (
                  <DialogImage image={mainImage} hotSpot={hotSpotMain} />
                )}
                {secondImage && (
                  <DialogImage image={secondImage} hotSpot={hotSpotSecond} />
                )}
                {thirdImage && (
                  <DialogImage image={thirdImage} hotSpot={hotSpotThird} />
                )}
              </div>
            </div>
          </div>
        )}

        {!youtubeLink && (
          <CarouselVerticalSponsor
            mainImage={mainImage}
            secondImage={secondImage}
            thirdImage={thirdImage}
            id={_id}
          />
        )}

        <div className="md:w-[40%] w-full h-auto flex justify-end z-10 bg-blue-600">
          <div className="w-[95%] h-full border-l border-gray-200 text-gray-500 indent-4 text-justify px-4 space-y-4">
            {contenido && <Paragraphs contenido={contenido} />}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SponsorDynamicPage;

type SponsorGalleryProps = {
  videoLink: string;
  youtubeLink: string | null;
  mainImage: string | null;
  secondImage: string | null;
  thirdImage: string | null;
  hotSpotMain: HotSpot | null;
  hotSpotSecond: HotSpot | null;
  hotSpotThird: HotSpot | null;
};

type WithYouTubeFrameProps = {
  videoLink: string;
  mainImage: string | null;
  secondImage: string | null;
  thirdImage: string | null;
  hotSpotMain: HotSpot | null;
  hotSpotSecond: HotSpot | null;
  hotSpotThird: HotSpot | null;
};

const SponsorGallery = ({
  youtubeLink,
  videoLink,
  mainImage,
  secondImage,
  thirdImage,
  hotSpotMain,
  hotSpotSecond,
  hotSpotThird,
}: SponsorGalleryProps) => {
  return (
    <div className="w-full">
      {!youtubeLink && (
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
    </div>
  );
};

const WithYouTubeFrame = ({
  videoLink,
  mainImage,
  secondImage,
  thirdImage,
  hotSpotMain,
  hotSpotSecond,
  hotSpotThird,
}: WithYouTubeFrameProps) => {
  return (
    <div className="w-full h-auto flex flex-col justify-start items-center space-y-4 bg-red-400">
      <div className="w-full bg-gray-400 aspect-video rounded-[5px] relative overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={videoLink}
          title="Magic Marble Foundation"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="w-full h-min flex">
        <div className="w-full flex flex-row justify-center items-center space-x-0 space-y-4 md:space-y-0 md:space-x-2 flex-wrap">
          {mainImage && <DialogImage image={mainImage} hotSpot={hotSpotMain} />}
          {mainImage && <DialogImage image={mainImage} hotSpot={hotSpotMain} />}
          {mainImage && <DialogImage image={mainImage} hotSpot={hotSpotMain} />}
          {secondImage && (<DialogImage image={secondImage} hotSpot={hotSpotSecond} />)}
          {thirdImage && (<DialogImage image={thirdImage} hotSpot={hotSpotThird} />)}
        </div>
      </div>
    </div>
  );
};
