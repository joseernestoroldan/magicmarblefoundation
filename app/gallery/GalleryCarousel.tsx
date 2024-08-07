"use client";
import { useState } from "react";
import EnterSection from "@/components/animations/enterSection/EnterSection";
import Image from "next/image";

import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const GalleryCarousel = ({ gallery }: any) => {
  const [count, setCount] = useState<number>(0);

  const handlePrev = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleNext = () => {
    if (count < gallery.length) {
      setCount(count + 1);
    }
  };
  return (
    <EnterSection>
      <div className="relative w-full h-auto flex flex-col justify-start items-center p-0">
        <div className="w-full max-w-7xl  bg-white relative h-[80vh] rounded-[10px] overflow-hidden">
          {gallery.map((item: any, index: number) => (
            <div
            key={index}
              className={`bg-white top-0 bottom-0 left-0 right-0 absolute ${count === index ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}
            >
              <Image
                className="object-cover object-center"
                src={item.mainImage}
                alt="Magic Marble Foundation"
                fill
              />
            </div>
          ))}

          <button
            onClick={handlePrev}
            className={`bg-transparent w-[100px] h-screen sm:h-min sm:w-min top-1/2 -translate-y-1/2 m-12  absolute z-10 -left-12 sm:left-0 ${count === 0 ? "opacity-50 pointer-events-none" : "opacity-100 pointer-events-auto"} `}
          >
           <FaRegArrowAltCircleLeft className="text-gray-50 text-3xl opacity-80 hidden sm:flex"/>
          </button>
          <button
            onClick={handleNext}
            className={`bg-transparent w-[100px] h-screen sm:h-min sm:w-min top-1/2 -translate-y-1/2 m-12  absolute z-10 -right-12 sm:right-0 ${count === gallery.length - 1 ? "opacity-50 pointer-events-none" : "opacity-100 pointer-events-auto"}`}
          >
            <FaRegArrowAltCircleRight className="text-gray-50 text-3xl opacity-80 hidden sm:flex"/>
          </button>
        </div>
      </div>
    </EnterSection>
  );
};

export default GalleryCarousel;
