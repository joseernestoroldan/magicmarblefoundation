import { getOne } from "@/client";
import CarouselVertical from "@/components/carouselVertical/CarouselVertical";
import Parrafos from "@/components/parrafos/Parrafos";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/dialog";

const AdoptionDynamicPage = async ({
  params: { id: _Id },
}: {
  params: { id: string };
}) => {
  const [candidate] = await getOne(_Id);

  const left = candidate?.crop ? Math.trunc(candidate.crop?.left * 100) : 50;
  const top = candidate?.crop ? Math.trunc(candidate.crop?.top * 100) : 50;

  const url = candidate.youtubeLink || "";

  const urlParts = url.split("?v=");
  const queryString = urlParts[1];

  const videoEmbedUrl = `https://www.youtube.com/embed/${queryString}?autoplay=1&mute=1`;

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col items-start">
      <div className="w-full h-auto flex justify-start flex-col md:flex-row">
        {candidate.youtubeLink && (
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
                {candidate.mainImage && (
                  <Dialog>
                    <DialogTrigger className="w-1/3 bg-green-400">
                      <div className="w-full aspect-square  rounded-[5px]  bg-gray-400 relative overflow-hidden">
                        <Image
                          src={candidate.mainImage}
                          alt="adoption"
                          fill
                          className={`object-cover
                     ${left < 20 && top < 20 && "object-[0%_0%]"} ${left > 20 && left < 40 && top < 20 && "object-[20%_0%]"} ${left > 40 && left < 60 && top < 20 && "object-top"} ${left > 60 && left < 80 && top < 20 && "object-[60%_0%]"} ${left > 80 && left < 100 && top < 20 && "object-[80%_0%]"}
                     ${left < 20 && top > 20 && top < 40 && "object-[0%_20%]"} ${left > 20 && left < 40 && top > 20 && top < 40 && "object-[20%_20%]"} ${left > 40 && left < 60 && top > 20 && top < 40 && "object-[40%_20%]"} ${left > 60 && left < 80 && top > 20 && top < 40 && "object-[60%_20%]"} ${left > 80 && left < 100 && top > 20 && top < 40 && "object-[80%_20%]"}
                     ${left < 20 && top > 40 && top < 60 && "object-[0%_40%]"} ${left > 20 && left < 40 && top > 40 && top < 60 && "object-[20%_40%]"} ${left > 40 && left < 60 && top > 40 && top < 60 && "object-[40%_40%]"} ${left > 60 && left < 80 && top > 40 && top < 60 && "object-[60%_40%]"} ${left > 80 && left < 100 && top > 40 && top < 60 && "object-[80%_40%]"}
                     ${left < 20 && top > 60 && top < 80 && "object-[0%_60%]"} ${left > 20 && left < 40 && top > 60 && top < 80 && "object-[20%_60%]"} ${left > 40 && left < 60 && top > 60 && top < 80 && "object-[40%_60%]"} ${left > 60 && left < 80 && top > 60 && top < 80 && "object-[60%_60%]"} ${left > 80 && left < 100 && top > 60 && top < 80 && "object-[80%_60%]"}
                     ${left < 20 && top > 80 && top < 100 && "object-[0%_80%]"} ${left > 20 && left < 40 && top > 80 && top < 100 && "object-[20%_80%]"} ${left > 40 && left < 60 && top > 80 && top < 100 && "object-[40%_80%]"} ${left > 60 && left < 80 && top > 80 && top < 100 && "object-[60%_80%]"} ${left > 80 && left < 100 && top > 80 && top < 100 && "object-[80%_80%]"}`}
                        />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="p-0">
                      <div className="w-full aspect-square  rounded-[5px]  bg-gray-400 relative overflow-hidden">
                        <Image
                          src={candidate.mainImage}
                          alt="adoption"
                          fill
                          className={`object-cover
                     ${left < 20 && top < 20 && "object-[0%_0%]"} ${left > 20 && left < 40 && top < 20 && "object-[20%_0%]"} ${left > 40 && left < 60 && top < 20 && "object-top"} ${left > 60 && left < 80 && top < 20 && "object-[60%_0%]"} ${left > 80 && left < 100 && top < 20 && "object-[80%_0%]"}
                     ${left < 20 && top > 20 && top < 40 && "object-[0%_20%]"} ${left > 20 && left < 40 && top > 20 && top < 40 && "object-[20%_20%]"} ${left > 40 && left < 60 && top > 20 && top < 40 && "object-[40%_20%]"} ${left > 60 && left < 80 && top > 20 && top < 40 && "object-[60%_20%]"} ${left > 80 && left < 100 && top > 20 && top < 40 && "object-[80%_20%]"}
                     ${left < 20 && top > 40 && top < 60 && "object-[0%_40%]"} ${left > 20 && left < 40 && top > 40 && top < 60 && "object-[20%_40%]"} ${left > 40 && left < 60 && top > 40 && top < 60 && "object-[40%_40%]"} ${left > 60 && left < 80 && top > 40 && top < 60 && "object-[60%_40%]"} ${left > 80 && left < 100 && top > 40 && top < 60 && "object-[80%_40%]"}
                     ${left < 20 && top > 60 && top < 80 && "object-[0%_60%]"} ${left > 20 && left < 40 && top > 60 && top < 80 && "object-[20%_60%]"} ${left > 40 && left < 60 && top > 60 && top < 80 && "object-[40%_60%]"} ${left > 60 && left < 80 && top > 60 && top < 80 && "object-[60%_60%]"} ${left > 80 && left < 100 && top > 60 && top < 80 && "object-[80%_60%]"}
                     ${left < 20 && top > 80 && top < 100 && "object-[0%_80%]"} ${left > 20 && left < 40 && top > 80 && top < 100 && "object-[20%_80%]"} ${left > 40 && left < 60 && top > 80 && top < 100 && "object-[40%_80%]"} ${left > 60 && left < 80 && top > 80 && top < 100 && "object-[60%_80%]"} ${left > 80 && left < 100 && top > 80 && top < 100 && "object-[80%_80%]"}`}
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
                {candidate.secondImage && (
                  <Dialog>
                    <DialogTrigger className="w-1/3 bg-green-400">
                      <div className="w-full aspect-square  rounded-[5px]  bg-gray-400 relative overflow-hidden">
                        <Image
                          src={candidate.secondImage}
                          alt="adoption"
                          fill
                          className={`object-cover
                     ${left < 20 && top < 20 && "object-[0%_0%]"} ${left > 20 && left < 40 && top < 20 && "object-[20%_0%]"} ${left > 40 && left < 60 && top < 20 && "object-top"} ${left > 60 && left < 80 && top < 20 && "object-[60%_0%]"} ${left > 80 && left < 100 && top < 20 && "object-[80%_0%]"}
                     ${left < 20 && top > 20 && top < 40 && "object-[0%_20%]"} ${left > 20 && left < 40 && top > 20 && top < 40 && "object-[20%_20%]"} ${left > 40 && left < 60 && top > 20 && top < 40 && "object-[40%_20%]"} ${left > 60 && left < 80 && top > 20 && top < 40 && "object-[60%_20%]"} ${left > 80 && left < 100 && top > 20 && top < 40 && "object-[80%_20%]"}
                     ${left < 20 && top > 40 && top < 60 && "object-[0%_40%]"} ${left > 20 && left < 40 && top > 40 && top < 60 && "object-[20%_40%]"} ${left > 40 && left < 60 && top > 40 && top < 60 && "object-[40%_40%]"} ${left > 60 && left < 80 && top > 40 && top < 60 && "object-[60%_40%]"} ${left > 80 && left < 100 && top > 40 && top < 60 && "object-[80%_40%]"}
                     ${left < 20 && top > 60 && top < 80 && "object-[0%_60%]"} ${left > 20 && left < 40 && top > 60 && top < 80 && "object-[20%_60%]"} ${left > 40 && left < 60 && top > 60 && top < 80 && "object-[40%_60%]"} ${left > 60 && left < 80 && top > 60 && top < 80 && "object-[60%_60%]"} ${left > 80 && left < 100 && top > 60 && top < 80 && "object-[80%_60%]"}
                     ${left < 20 && top > 80 && top < 100 && "object-[0%_80%]"} ${left > 20 && left < 40 && top > 80 && top < 100 && "object-[20%_80%]"} ${left > 40 && left < 60 && top > 80 && top < 100 && "object-[40%_80%]"} ${left > 60 && left < 80 && top > 80 && top < 100 && "object-[60%_80%]"} ${left > 80 && left < 100 && top > 80 && top < 100 && "object-[80%_80%]"}`}
                        />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="p-0">
                      <div className="w-full aspect-square  rounded-[5px]  bg-gray-400 relative overflow-hidden">
                        <Image
                          src={candidate.secondImage}
                          alt="adoption"
                          fill
                          className={`object-cover
                     ${left < 20 && top < 20 && "object-[0%_0%]"} ${left > 20 && left < 40 && top < 20 && "object-[20%_0%]"} ${left > 40 && left < 60 && top < 20 && "object-top"} ${left > 60 && left < 80 && top < 20 && "object-[60%_0%]"} ${left > 80 && left < 100 && top < 20 && "object-[80%_0%]"}
                     ${left < 20 && top > 20 && top < 40 && "object-[0%_20%]"} ${left > 20 && left < 40 && top > 20 && top < 40 && "object-[20%_20%]"} ${left > 40 && left < 60 && top > 20 && top < 40 && "object-[40%_20%]"} ${left > 60 && left < 80 && top > 20 && top < 40 && "object-[60%_20%]"} ${left > 80 && left < 100 && top > 20 && top < 40 && "object-[80%_20%]"}
                     ${left < 20 && top > 40 && top < 60 && "object-[0%_40%]"} ${left > 20 && left < 40 && top > 40 && top < 60 && "object-[20%_40%]"} ${left > 40 && left < 60 && top > 40 && top < 60 && "object-[40%_40%]"} ${left > 60 && left < 80 && top > 40 && top < 60 && "object-[60%_40%]"} ${left > 80 && left < 100 && top > 40 && top < 60 && "object-[80%_40%]"}
                     ${left < 20 && top > 60 && top < 80 && "object-[0%_60%]"} ${left > 20 && left < 40 && top > 60 && top < 80 && "object-[20%_60%]"} ${left > 40 && left < 60 && top > 60 && top < 80 && "object-[40%_60%]"} ${left > 60 && left < 80 && top > 60 && top < 80 && "object-[60%_60%]"} ${left > 80 && left < 100 && top > 60 && top < 80 && "object-[80%_60%]"}
                     ${left < 20 && top > 80 && top < 100 && "object-[0%_80%]"} ${left > 20 && left < 40 && top > 80 && top < 100 && "object-[20%_80%]"} ${left > 40 && left < 60 && top > 80 && top < 100 && "object-[40%_80%]"} ${left > 60 && left < 80 && top > 80 && top < 100 && "object-[60%_80%]"} ${left > 80 && left < 100 && top > 80 && top < 100 && "object-[80%_80%]"}`}
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
                {candidate.thirdImage && (
                  <Dialog>
                    <DialogTrigger className="w-1/3 bg-green-400">
                      <div className="w-full aspect-square  rounded-[5px]  bg-gray-400 relative overflow-hidden">
                        <Image
                          src={candidate.thirdImage}
                          alt="adoption"
                          fill
                          className={`object-cover
                     ${left < 20 && top < 20 && "object-[0%_0%]"} ${left > 20 && left < 40 && top < 20 && "object-[20%_0%]"} ${left > 40 && left < 60 && top < 20 && "object-top"} ${left > 60 && left < 80 && top < 20 && "object-[60%_0%]"} ${left > 80 && left < 100 && top < 20 && "object-[80%_0%]"}
                     ${left < 20 && top > 20 && top < 40 && "object-[0%_20%]"} ${left > 20 && left < 40 && top > 20 && top < 40 && "object-[20%_20%]"} ${left > 40 && left < 60 && top > 20 && top < 40 && "object-[40%_20%]"} ${left > 60 && left < 80 && top > 20 && top < 40 && "object-[60%_20%]"} ${left > 80 && left < 100 && top > 20 && top < 40 && "object-[80%_20%]"}
                     ${left < 20 && top > 40 && top < 60 && "object-[0%_40%]"} ${left > 20 && left < 40 && top > 40 && top < 60 && "object-[20%_40%]"} ${left > 40 && left < 60 && top > 40 && top < 60 && "object-[40%_40%]"} ${left > 60 && left < 80 && top > 40 && top < 60 && "object-[60%_40%]"} ${left > 80 && left < 100 && top > 40 && top < 60 && "object-[80%_40%]"}
                     ${left < 20 && top > 60 && top < 80 && "object-[0%_60%]"} ${left > 20 && left < 40 && top > 60 && top < 80 && "object-[20%_60%]"} ${left > 40 && left < 60 && top > 60 && top < 80 && "object-[40%_60%]"} ${left > 60 && left < 80 && top > 60 && top < 80 && "object-[60%_60%]"} ${left > 80 && left < 100 && top > 60 && top < 80 && "object-[80%_60%]"}
                     ${left < 20 && top > 80 && top < 100 && "object-[0%_80%]"} ${left > 20 && left < 40 && top > 80 && top < 100 && "object-[20%_80%]"} ${left > 40 && left < 60 && top > 80 && top < 100 && "object-[40%_80%]"} ${left > 60 && left < 80 && top > 80 && top < 100 && "object-[60%_80%]"} ${left > 80 && left < 100 && top > 80 && top < 100 && "object-[80%_80%]"}`}
                        />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="p-0">
                      <div className="w-full aspect-square  rounded-[5px]  bg-gray-400 relative overflow-hidden">
                        <Image
                          src={candidate.thirdImage}
                          alt="adoption"
                          fill
                          className={`object-cover
                     ${left < 20 && top < 20 && "object-[0%_0%]"} ${left > 20 && left < 40 && top < 20 && "object-[20%_0%]"} ${left > 40 && left < 60 && top < 20 && "object-top"} ${left > 60 && left < 80 && top < 20 && "object-[60%_0%]"} ${left > 80 && left < 100 && top < 20 && "object-[80%_0%]"}
                     ${left < 20 && top > 20 && top < 40 && "object-[0%_20%]"} ${left > 20 && left < 40 && top > 20 && top < 40 && "object-[20%_20%]"} ${left > 40 && left < 60 && top > 20 && top < 40 && "object-[40%_20%]"} ${left > 60 && left < 80 && top > 20 && top < 40 && "object-[60%_20%]"} ${left > 80 && left < 100 && top > 20 && top < 40 && "object-[80%_20%]"}
                     ${left < 20 && top > 40 && top < 60 && "object-[0%_40%]"} ${left > 20 && left < 40 && top > 40 && top < 60 && "object-[20%_40%]"} ${left > 40 && left < 60 && top > 40 && top < 60 && "object-[40%_40%]"} ${left > 60 && left < 80 && top > 40 && top < 60 && "object-[60%_40%]"} ${left > 80 && left < 100 && top > 40 && top < 60 && "object-[80%_40%]"}
                     ${left < 20 && top > 60 && top < 80 && "object-[0%_60%]"} ${left > 20 && left < 40 && top > 60 && top < 80 && "object-[20%_60%]"} ${left > 40 && left < 60 && top > 60 && top < 80 && "object-[40%_60%]"} ${left > 60 && left < 80 && top > 60 && top < 80 && "object-[60%_60%]"} ${left > 80 && left < 100 && top > 60 && top < 80 && "object-[80%_60%]"}
                     ${left < 20 && top > 80 && top < 100 && "object-[0%_80%]"} ${left > 20 && left < 40 && top > 80 && top < 100 && "object-[20%_80%]"} ${left > 40 && left < 60 && top > 80 && top < 100 && "object-[40%_80%]"} ${left > 60 && left < 80 && top > 80 && top < 100 && "object-[60%_80%]"} ${left > 80 && left < 100 && top > 80 && top < 100 && "object-[80%_80%]"}`}
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

              <button className="bg-cyan-500 text-white rounded-full py-2 w-full max-w-[1700px]">
                Donate
              </button>
            </div>
          </div>
        )}

        {!candidate.youtubeLink && (
          <CarouselVertical
            mainImage={candidate.mainImage}
            secondImage={candidate.secondImage}
            thirdImage={candidate.thirdImage}
            id={candidate._id}
          />
        )}

        <div className="md:w-[40%] w-full h-auto flex justify-end z-10">
          <div className="w-[95%] h-full border-l border-gray-200 text-gray-500 indent-4 text-justify px-4 space-y-4">
            {candidate.contenido !== null && <Parrafos data={[candidate]} />}
          </div>
        </div>
      </div>
      <div className="h-[20vh] w-full flex flex-col md:hidden justify-center items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
        <Link
          href={`/adopted/${candidate._Id}`}
          className="bg-cyan-500 text-white rounded-full py-2 w-full max-w-[170px] text-center"
        >
          Adopt
        </Link>
        <button className="bg-cyan-500 text-white rounded-full py-2 w-full max-w-[170px]">
          Donate
        </button>
      </div>
    </div>
  );
};

export default AdoptionDynamicPage;
