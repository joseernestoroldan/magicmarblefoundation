"use client";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { CarouselSponsorProps } from "@/types/types";
import { ItemCarousel } from "./ItemCarousel";

const CarouselSponsor = ({
  mainImage,
  secondImage,
  thirdImage,
  id,
}: CarouselSponsorProps) => {
  return (
    <div className="md:w-[60%] w-full flex flex-col justify-start items-center">
      <Carousel className="w-full max-w-[600px] md:max-w-[400px] lg:max-w-[560px]">
        <CarouselContent>
          {mainImage && <ItemCarousel image={mainImage} />}
          {secondImage && <ItemCarousel image={secondImage} />}
          {thirdImage && <ItemCarousel image={thirdImage} />}
        </CarouselContent>
        {(secondImage || thirdImage) && <CarouselPrevious className="text-cyan-400 hidden md:flex" />}
        {(secondImage || thirdImage) && <CarouselNext className="text-cyan-400 hidden md:flex" />}
      </Carousel>
    </div>
  );
};

export default CarouselSponsor;



