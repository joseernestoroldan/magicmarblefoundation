"use client";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselSponsorProps } from "@/types/types";
import { ItemCarousel } from "./ItemCarousel";

const CarouselSponsor = ({
  mainImage,
  secondImage,
  thirdImage,
  id,
}: CarouselSponsorProps) => {
  return (
    <div className="w-full flex flex-col justify-start items-center">
      <Carousel className="w-full">
        <CarouselContent>
          {mainImage && <ItemCarousel image={mainImage} />}
          {secondImage && <ItemCarousel image={secondImage} />}
          {thirdImage && <ItemCarousel image={thirdImage} />}
        </CarouselContent>
        { (secondImage || thirdImage) && <CarouselPrevious className="text-cyan-200 hidden md:flex translate-x-16 z-10 cursor-pointer" />}
        { (secondImage || thirdImage) && <CarouselNext className="text-cyan-200 hidden md:flex -translate-x-16 z-10 cursor-pointer" />}
      </Carousel>
    </div>
  );
};

export default CarouselSponsor;



