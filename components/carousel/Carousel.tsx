"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import type { carouselProps } from "@/types/types";
import SpanMessage from "./spanMessage/SpanMessage";
import Link from "next/link";
import Button from "../button/Button";

export function CarouselPlugin({ images }: carouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="bg-gray-800 flex justify-center">
              <div className="relative w-full h-[700px]">
                <div className="absolute z-10 left-1/2 -translate-x-1/2 sm:left-auto sm:-translate-x-0 sm:right-10 top-[50%] flex flex-col justify-between items-center">
                  <SpanMessage>
                    {image.message}
                    <Link href={`/projects/project/${image.link}`}>
                        <p className="text-cyan-400 text-xl font-bold underline ">
                          Learn More
                        </p>
                      </Link>
                  </SpanMessage>
                  <div className="flex flex-col items-center justify-center">
                    <Link href={"/donations"}>
                      <Button>Donate</Button>
                    </Link>
                  </div>
                </div>

                <Image
                  className="object-cover object-center"
                  src={image.url}
                  fill
                  alt=""
                  priority
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
