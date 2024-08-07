import EnterSection from "@/components/animations/enterSection/EnterSection";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";



const GalleryCarousel = ({ gallery }: any) => {
  return (
    <EnterSection>
      <div className="relative w-full h-auto flex justify-center overflow-hidden p-0">
        <Carousel className="w-full md:w-[60%] text-cyan-600 font-bold h-auto flex justify-center" >
          <CarouselContent className="rounded-2xl w-full h-auto flex justify-stretch">
            {gallery.map((photo: any, index: number) => (
              <CarouselItem key={index} className="rounded-2xl h-auto w-full mx-auto">
               
                  <Card className="rounded-2xl h-auto w-full border-0 animate-fade-in-pro">
                    <CardContent className="h-auto p-0 w-full rounded-2xl">
                      <div className="text-4xl font-semibold w-full h-[700px] rounded-2xl relative">
                        <div className="absolute z-10 left-0 top-0  flex flex-col md:flex-row justify-start md:justify-between items-center w-full">
                          <div className=" bg-black bg-opacity-70 w-full md:w-[400px] p-4 rounded-2xl m-4">
                            <h1 className="text-white text-lg min-[425px]:text-xl font-bold w-full">
                              {photo.title}
                            </h1>
                          </div>
                        </div>
                        <Image
                                className="object-center object-cover rounded-2xl"
                                src={photo.mainImage}
                                fill
                                alt={photo.title}
                                priority={true}
                              />
                      </div>
                    </CardContent>
                  </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="md:flex hidden" />
          <CarouselNext className="md:flex hidden" />
        </Carousel>
      </div>
    </EnterSection>
  );
};

export default GalleryCarousel;
