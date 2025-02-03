import { getOne } from "@/client";
import CarouselVertical from "@/components/carouselVertical/CarouselVertical";
import Paragraphs from "@/components/parrafos/Paragraphs";
import Image from "next/image";
import Link from "next/link";


import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { QueryType } from "@/types/types";

const AdoptionDynamicPage = async ({
  params: { id: _Id },
}: {
  params: { id: string };
}) => {
  const [data]: QueryType[] = await getOne(_Id);
  const { _id, mainImage, secondImage, thirdImage, title, description, hotSpotMain, youtubeLink, contenido } = data;

  const url = data?.youtubeLink || "";

  const urlParts = url.split("?v=");
  const queryString = urlParts[1];

  const videoEmbedUrl = `https://www.youtube.com/embed/${queryString}?autoplay=1&mute=1`;

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col items-start">
      <div className="w-full h-auto flex justify-start flex-col md:flex-row">
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
                  <Dialog>
                    <DialogTrigger className="w-1/3 bg-green-400">
                      <div className="w-full aspect-square  rounded-[5px]  bg-gray-400 relative overflow-hidden">
                        <Image
                          src={mainImage}
                          alt="adoption"
                          fill
                          className={`object-cover`}
                        />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="p-0">
                      <div className="w-full aspect-square  rounded-[5px]  bg-gray-400 relative overflow-hidden">
                        <Image
                          src={mainImage}
                          alt="adoption"
                          fill
                          className={`object-cover`}
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
                {secondImage && (
                  <Dialog>
                    <DialogTrigger className="w-1/3 bg-green-400">
                      <div className="w-full aspect-square  rounded-[5px]  bg-gray-400 relative overflow-hidden">
                        <Image
                          src={secondImage}
                          alt="adoption"
                          fill
                          className={`object-cover`}
                        />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="p-0">
                      <div className="w-full aspect-square  rounded-[5px]  bg-gray-400 relative overflow-hidden">
                        <Image
                          src={secondImage}
                          alt="adoption"
                          fill
                          className={`object-cover`}
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
                {thirdImage && (
                  <Dialog>
                    <DialogTrigger className="w-1/3 bg-green-400">
                      <div className="w-full aspect-square  rounded-[5px]  bg-gray-400 relative overflow-hidden">
                        <Image
                          src={thirdImage}
                          alt="adoption"
                          fill
                          className={`object-cover`}
                        />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="p-0">
                      <div className="w-full aspect-square  rounded-[5px]  bg-gray-400 relative overflow-hidden">
                        <Image
                          src={thirdImage}
                          alt="adoption"
                          fill
                          className={`object-cover`}
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </div>
            <div className="h-[20vh] w-[60%] md:flex hidden md:flex-row justify-center items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
              <Link
                href={`/adopted/${_Id}`}
                className="bg-cyan-500 text-white rounded-full py-2 w-full max-w-[170px] text-center"
              >
                Adopt
              </Link>
              <Link
                href={"/stagepayment"}
                className="bg-cyan-500 text-white rounded-full py-2 w-full max-w-[170px] text-center"
              >
                Donate
              </Link>
            </div>
          </div>
        )}

        {!youtubeLink && (
          <CarouselVertical
            mainImage={mainImage}
            secondImage={secondImage}
            thirdImage={thirdImage}
            id={_id}
          />
        )}

        <div className="md:w-[40%] w-full h-auto flex justify-end z-10">
          <div className="w-[95%] h-full border-l border-gray-200 text-gray-500 indent-4 text-justify px-4 space-y-4">
            {contenido !== null && <Paragraphs contenido={contenido} />}
          </div>
        </div>
      </div>
      <div className="h-[20vh] w-full flex flex-col md:hidden justify-center items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
        <Link
          href={`/adopted/${_Id}`}
          className="bg-cyan-500 text-white rounded-full py-2 w-full max-w-[170px] text-center"
        >
          Adopt
        </Link>
        <button className="bg-cyan-500 text-white rounded-full py-2 w-full max-w-[170px]">
          Sponsor
        </button>
        <button className="bg-cyan-500 text-white rounded-full py-2 w-full max-w-[170px]">
          Donate
        </button>
      </div>
    </div>
  );
};

export default AdoptionDynamicPage;
