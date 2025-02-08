import { getOne } from "@/client";
import Parrafos from "@/components/parrafos/Parrafos";
import Image from "next/image";

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { HotSpot, ModePhoto, QueryType } from "@/types/types";

const PortalPaddyFieldPage = async ({
  params: { id: _Id },
}: {
  params: { id: string };
}) => {
  const query : QueryType[] | null = await getOne(_Id);
  const [data] = query;
 
  const {
    contenido,
    title,
    youtubeLink,
    hotSpotMain,
    mainImage,
    secondImage,
    thirdImage,
    fourthImage,
    hotSpotSecond,
    hotSpotThird,
    hotSpotFourth,
  } = data;


  const url = youtubeLink || "";
  const urlParts = url.split("?v=");
  const queryString = urlParts[1];
  const videoEmbedUrl = `https://www.youtube.com/embed/${queryString}?autoplay=1&mute=1`;

  return (
    <div className="w-full bg-gradient-to-b from-white via-green-300 to-white flex flex-col items-center justify-center">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center justify-center space-y-8">
        <h1 className="text-gray-500 text-3xl font-bold">{title}</h1>
        {mainImage !== null && (
          <PhotoComponent
            image={mainImage}
            hotSpot={hotSpotMain}
            mode="cover"
          />
        )}

        <div className="mx-auto w-full flex flex-col justify-center">
          {contenido !== null && <Parrafos contenido={contenido} />}
        </div>
        {!youtubeLink && (
          <div className="flex flex-col items-center w-full space-y-8">
            <h2 className="text-xl font-bold text-gray-500">Gallery</h2>
            <div className="w-full flex flex-row justify-center flex-wrap gap-4">
              {secondImage && (
                <PhotoComponent
                  image={secondImage}
                  hotSpot={hotSpotSecond}
                  mode="gallery"
                />
              )}
              {thirdImage && (
                <PhotoComponent
                  image={thirdImage}
                  hotSpot={hotSpotThird}
                  mode="gallery"
                />
              )}
              {fourthImage && (
                <PhotoComponent
                  image={fourthImage}
                  hotSpot={hotSpotFourth}
                  mode="gallery"
                />
              )}
              {mainImage && (
                <PhotoComponent
                  image={mainImage}
                  hotSpot={hotSpotMain}
                  mode="gallery"
                />
              )}
            </div>
          </div>
        )}

        {/* {youtubeLink === null && (
          <div className="w-full flex items-start justify-center  flex-wrap gap-4">
            {data.mainImage && (
              <Dialog>
                <DialogTrigger className="w-[20%] md:w-[20%]">
                  <div className="w-full  aspect-square bg-gray-200 relative">
                    <Image
                      src={data.mainImage}
                      alt={"portal paddy field"}
                      fill
                      className="object-cover"
                      style={{ objectPosition: `${x}% ${y}%` }}
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="p-0">
                  <div className="w-full aspect-square  rounded-[5px]  bg-gray-400 relative overflow-hidden">
                    <Image
                      src={data.mainImage}
                      alt="adoption"
                      fill
                      className="object-cover"
                      style={{ objectPosition: `${x}% ${y}%` }}
                    />
                  </div>
                </DialogContent>
              </Dialog>
            )}
            {data.secondImage && (
              <Dialog>
                <DialogTrigger className="w-[20%] md:w-[20%]">
                  <div className="w-full  aspect-square bg-gray-200 relative">
                    <Image
                      src={data.secondImage}
                      alt={"portal paddy field"}
                      fill
                      className="object-cover"
                      style={{ objectPosition: `${x}% ${y}%` }}
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="p-0">
                      <div className="w-full aspect-square  rounded-[5px]  bg-gray-400 relative overflow-hidden">
                        <Image
                          src={data.secondImage}
                          alt="adoption"
                          fill
                          className="object-cover"
                          style={{ objectPosition: `${x}% ${y}%` }}
                        />
                      </div>
                    </DialogContent>
              </Dialog>
            )}
            {data.thirdImage && (
              <Dialog>
                <DialogTrigger className="w-[20%] md:w-[20%]">
                  <div className="w-full  aspect-square bg-gray-200 relative">
                    <Image
                      src={data.thirdImage}
                      alt={"portal paddy field"}
                      fill
                      className="object-cover"
                      style={{ objectPosition: `${x}% ${y}%` }}
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="p-0">
                      <div className="w-full aspect-square  rounded-[5px]  bg-gray-400 relative overflow-hidden">
                        <Image
                          src={data.thirdImage}
                          alt="adoption"
                          fill
                          className="object-cover"
                          style={{ objectPosition: `${x}% ${y}%` }}
                        />
                      </div>
                    </DialogContent>
              </Dialog>
            )}
            {data.fourthImage && (
              <Dialog>
                <DialogTrigger className="w-[20%] md:w-[20%]">
                  <div className="w-full  aspect-square bg-gray-200 relative">
                    <Image
                      src={data.fourthImage}
                      alt={"portal paddy field"}
                      fill
                      className="object-cover"
                      style={{ objectPosition: `${x}% ${y}%` }}
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="p-0">
                      <div className="w-full aspect-square  rounded-[5px]  bg-gray-400 relative overflow-hidden">
                        <Image
                          src={data.fourthImage}
                          alt="adoption"
                          fill
                          className="object-cover"
                          style={{ objectPosition: `${x}% ${y}%` }}
                        />
                      </div>
                    </DialogContent>
              </Dialog>
            )}
          </div>
        )} */}
      </div>
    </div>
  );
};

export default PortalPaddyFieldPage;

const PhotoComponent = ({
  image,
  hotSpot,
  mode,
}: {
  image: string;
  hotSpot: HotSpot | null;
  mode: ModePhoto;
}) => {
  const x = (hotSpot?.x ?? 0.5) * 100;
  const y = (hotSpot?.y ?? 0.5) * 100;
  return (
    <Dialog>
      <DialogTrigger
        className={`w-full ${mode === "cover" ? "max-w-3xl" : "max-w-[200px]"}`}
      >
        <div
          className={`w-full ${mode === "cover" ? "aspect-video" : "aspect-square"} bg-gray-200 relative rounded-[10px] overflow-hidden`}
        >
          <Image
            src={image}
            alt={"portal paddy field"}
            fill
            className="object-cover"
            style={{ objectPosition: `${x}% ${y}%` }}
          />
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 w-[800px]">
        <div className="w-full aspect-square rounded-[5px] bg-gray-400 relative overflow-hidden">
          <Image
            src={image}
            alt="adoption"
            fill
            className="object-cover"
            style={{ objectPosition: `${x}% ${y}%` }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
