"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

type AdoptionResponsiveCarouselProps = {
    adoptions: any
}

const AdoptionResponsiveCarousel = ({adoptions}: AdoptionResponsiveCarouselProps) => {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center lg:hidden">
      <Carousel className="w-full max-w-5xl">
      <CarouselContent>
        {adoptions.map((item: any, index: number) => {
            const left = item.crop ? Math.trunc(item.crop?.left * 100) : 50;
            const top = item.crop ? Math.trunc(item.crop?.top * 100) : 50;
            return(
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6 relative">
                    <Link href={`/adoptions/${item._id}`}>
                    <div className="text-cyan-400 my-2 absolute top-0 z-10 text-2xl w-min text-nowrap bg-black bg-opacity-30 underline">Read More About {item.title}</div>
                    </Link>
                    
                <Image
                      src={item.mainImage}
                      alt="adoption"
                      fill
                      className={`object-cover
                     ${left < 20 && top < 20 && "object-[0%_0%]"} ${left > 20 && left < 40 && top < 20 && "object-[20%_0%]"} ${left > 40 && left < 60 && top < 20 && "object-top"} ${left > 60 && left < 80 && top < 20 && "object-[60%_0%]"} ${left > 80 && left < 100 && top < 20 && "object-[80%_0%]"}
                     ${left < 20 && top > 20 && top < 40 && "object-[0%_20%]"} ${left > 20 && left < 40 && top > 20 && top < 40 && "object-[20%_20%]"} ${left > 40 && left < 60 && top > 20 && top < 40 && "object-[40%_20%]"} ${left > 60 && left < 80 && top > 20 && top < 40 && "object-[60%_20%]"} ${left > 80 && left < 100 && top > 20 && top < 40 && "object-[80%_20%]"}
                     ${left < 20 && top > 40 && top < 60 && "object-[0%_40%]"} ${left > 20 && left < 40 && top > 40 && top < 60 && "object-[20%_40%]"} ${left > 40 && left < 60 && top > 40 && top < 60 && "object-[40%_40%]"} ${left > 60 && left < 80 && top > 40 && top < 60 && "object-[60%_40%]"} ${left > 80 && left < 100 && top > 40 && top < 60 && "object-[80%_40%]"}
                     ${left < 20 && top > 60 && top < 80 && "object-[0%_60%]"} ${left > 20 && left < 40 && top > 60 && top < 80 && "object-[20%_60%]"} ${left > 40 && left < 60 && top > 60 && top < 80 && "object-[40%_60%]"} ${left > 60 && left < 80 && top > 60 && top < 80 && "object-[60%_60%]"} ${left > 80 && left < 100 && top > 60 && top < 80 && "object-[80%_60%]"}
                     ${left < 20 && top > 80 && top < 100 && "object-[0%_80%]"} ${left > 20 && left < 40 && top > 80 && top < 100 && "object-[20%_80%]"} ${left > 40 && left < 60 && top > 80 && top < 100 && "object-[40%_80%]"} ${left > 60 && left < 80 && top > 80 && top < 100 && "object-[60%_80%]"} ${left > 80 && left < 100 && top > 80 && top < 100 && "object-[80%_80%]"}

                      rounded-2xl`}
                    />

                    <div className="absolute bg-black bg-opacity-50 w-full h-[40%] md:h-[25%] bottom-0 rounded-b-2xl text-white space-y-1 sm:space-y-4 overflow-y-scroll">
                        <p className="text-lg sm:text-2xl font-medium text-center">{item.title}</p>
                        <p className="px-8 indent-6 text-base sm:text-lg">{item.description}</p>
                        <p className="px-8 indent-6 text-base sm:text-lg">{item.characteristics}</p>
                        
                    </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        )})}
      </CarouselContent>

    </Carousel>
    
    </div>
  );
};

export default AdoptionResponsiveCarousel;
