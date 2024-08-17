"use client";
import { useState, useRef, useCallback } from "react";
import EnterSection from "@/components/animations/enterSection/EnterSection";
import Image from "next/image";

import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const GalleryCarousel = ({ gallery }: any) => {
  const [count, setCount] = useState<number>(0);
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setIsTouched(true);
    const touch = event.touches[0];
    const initialX = touch.clientX;
    elementRef.current!.dataset.initialX = String(initialX);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    const currentX = touch.clientX;
    const initialX = parseFloat(elementRef.current!.dataset.initialX || "0");
    const threshold = 50; // Adjust threshold as needed

    if (isTouched) {
      if (currentX > initialX + threshold) {
        handlePrev();
      } else {
        handleNext();
      }
    }
  };

  const handlePrev = () => {
    if (count > 0) {
      setCount(count - 1);
      setIsTouched(false);
    }
  };

  const handleNext = () => {
    if (count < gallery.length) {
      setCount(count + 1);
      setIsTouched(false);
    }
  };
  return (
    <EnterSection>
      <div className="relative w-full h-auto flex flex-col justify-start items-center p-0">
        <div className="w-full max-w-[1300px]  bg-white relative h-[80vh] rounded-[10px] overflow-hidden">
          {gallery.map((item: any, index: number) => {
            const left = item.crop ? Math.trunc(item.crop?.left * 100) : 50;
            const top = item.crop ? Math.trunc(item.crop?.top * 100) : 50;

            return (
              <div
                key={index}
                className={`bg-white top-0 bottom-0 left-0 right-0 absolute ${count === index ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}
                ref={elementRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
              >
                <Image
                  className={`object-cover
                     ${left < 20 && top < 20 && "object-[0%_0%]"} ${left > 20 && left < 40 && top < 20 && "object-[20%_0%]"} ${left > 40 && left < 60 && top < 20 && "object-top"} ${left > 60 && left < 80 && top < 20 && "object-[60%_0%]"} ${left > 80 && left < 100 && top < 20 && "object-[80%_0%]"}
                     ${left < 20 && top > 20 && top < 40 && "object-[0%_20%]"} ${left > 20 && left < 40 && top > 20 && top < 40 && "object-[20%_20%]"} ${left > 40 && left < 60 && top > 20 && top < 40 && "object-[40%_20%]"} ${left > 60 && left < 80 && top > 20 && top < 40 && "object-[60%_20%]"} ${left > 80 && left < 100 && top > 20 && top < 40 && "object-[80%_20%]"}
                     ${left < 20 && top > 40 && top < 60 && "object-[0%_40%]"} ${left > 20 && left < 40 && top > 40 && top < 60 && "object-[20%_40%]"} ${left > 40 && left < 60 && top > 40 && top < 60 && "object-[40%_40%]"} ${left > 60 && left < 80 && top > 40 && top < 60 && "object-[60%_40%]"} ${left > 80 && left < 100 && top > 40 && top < 60 && "object-[80%_40%]"}
                     ${left < 20 && top > 60 && top < 80 && "object-[0%_60%]"} ${left > 20 && left < 40 && top > 60 && top < 80 && "object-[20%_60%]"} ${left > 40 && left < 60 && top > 60 && top < 80 && "object-[40%_60%]"} ${left > 60 && left < 80 && top > 60 && top < 80 && "object-[60%_60%]"} ${left > 80 && left < 100 && top > 60 && top < 80 && "object-[80%_60%]"}
                     ${left < 20 && top > 80 && top < 100 && "object-[0%_80%]"} ${left > 20 && left < 40 && top > 80 && top < 100 && "object-[20%_80%]"} ${left > 40 && left < 60 && top > 80 && top < 100 && "object-[40%_80%]"} ${left > 60 && left < 80 && top > 80 && top < 100 && "object-[60%_80%]"} ${left > 80 && left < 100 && top > 80 && top < 100 && "object-[80%_80%]"}

                     `}
                  src={item.mainImage}
                  alt="Magic Marble Foundation"
                  fill
                />
                <div className="bg-black bg-opacity-50 absolute z-10 bottom-12 sm:left-4 left-0 right-0 sm:right-auto sm:-translate-x-0 rounded-none sm:rounded-[5px] ">
                  <p className="text-white text-base sm:text-xl capitalize p-4 text-center text-wrap">
                    {item.title}
                    {count}
                  </p>
                </div>
              </div>
            );
          })}

          <button
            onClick={handlePrev}
            className={`bg-transparent hidden sm:inline-block sm:h-min sm:w-min top-1/2 -translate-y-1/2 m-12  absolute z-10 -left-12 sm:left-0 ${count === 0 ? "opacity-50 pointer-events-none" : "opacity-100 pointer-events-auto"} `}
          >
            <FaRegArrowAltCircleLeft className="text-gray-50 text-3xl opacity-80 hidden sm:flex" />
          </button>
          <button
            onClick={handleNext}
            className={`bg-transparent hidden sm:inline-block  sm:h-min sm:w-min top-1/2 -translate-y-1/2 m-12  absolute z-10 -right-12 sm:right-0 ${count === gallery.length - 1 ? "opacity-50 pointer-events-none" : "opacity-100 pointer-events-auto"}`}
          >
            <FaRegArrowAltCircleRight className="text-gray-50 text-3xl opacity-80 hidden sm:flex" />
          </button>
        </div>
      </div>
    </EnterSection>
  );
};

export default GalleryCarousel;
