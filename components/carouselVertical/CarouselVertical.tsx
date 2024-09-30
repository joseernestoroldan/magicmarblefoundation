"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

type CarouselVerticalProps = {
  mainImage?: string;
  secondImage?: string;
  thirdImage?: string;
  id: string;
};

const CarouselVertical = ({
  mainImage,
  secondImage,
  thirdImage,
  id,
}: CarouselVerticalProps) => {
  return (
    <div className="md:w-[60%] w-full flex flex-col justify-start items-center">
      <Carousel className="w-full max-w-[600px] md:max-w-[400px] lg:max-w-[560px]">
        <CarouselContent>
          {mainImage && (
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="w-full relative aspect-square">
                      <Image
                        src={mainImage}
                        alt="adopt"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          )}

          {secondImage && (
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="w-full relative aspect-square bg-red-300">
                      <Image
                        src={secondImage}
                        alt="adopt"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          )}

          {thirdImage && (
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="w-full relative aspect-square bg-red-300">
                      <Image
                        src={thirdImage}
                        alt="adopt"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          )}
        </CarouselContent>
        <CarouselPrevious className="text-cyan-400 hidden md:flex" />
        <CarouselNext className="text-cyan-400 hidden md:flex" />
      </Carousel>
      <div className="h-[20vh] w-full md:flex flex-col md:flex-row hidden  justify-center items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
        <Link
          href={`/adopted/${id}`}
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

export default CarouselVertical;
