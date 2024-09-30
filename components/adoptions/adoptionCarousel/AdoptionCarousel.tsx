"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useRef } from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { AdoptionsProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ScrollPosition {
  x: number;
}

const AdoptionCarousel = ({ adoptions }: AdoptionsProps) => {
  const {push} = useRouter()
  const scrollableRef = useRef<HTMLDivElement>(null);
  const [counter, setCounter] = useState<number>(0);
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
  });

  const resolution = 364;

  const handleClick = (index: number) => {
    if (scrollableRef.current) {
      const newPosition = index * resolution;
      scrollableRef.current.scrollLeft = newPosition;
      setScrollPosition({ x: newPosition });
      setCounter(index);
    }
  };

  const handlePrev = () => {
    if (scrollableRef.current) {
      const newPosition = Math.max(0, scrollPosition.x - resolution);
      scrollableRef.current.scrollLeft = newPosition;
      setScrollPosition({ x: newPosition });
      counter > 0 ? setCounter(counter - 1) : setCounter(0);
    }
  };
  const handleNext = () => {
    if (scrollableRef.current) {
      const newPosition = Math.min(
        scrollableRef.current.scrollWidth - scrollableRef.current.clientWidth,
        scrollPosition.x + resolution
      );
      scrollableRef.current.scrollLeft = newPosition;
      setScrollPosition({ x: newPosition });
      counter < adoptions.length - 1
        ? setCounter(counter + 1)
        : setCounter(adoptions.length - 1);
    }
  };

  const handleScroll = useCallback(() => {
    () => {
      console.log("scrolling");
      if (scrollableRef.current) {
        setScrollPosition({
          x: scrollableRef.current.scrollLeft,
        });
      }
    };
  }, [scrollableRef]);

  const scrollContainer = () => {
    console.log("scrolling");
    if (scrollableRef.current) {
      const value = Math.round(scrollableRef.current.scrollLeft / resolution);
      console.log("actual position:", value);
      setCounter(value);
    }
  };

  useEffect(() => {
    const scrollableRefCurrent = scrollableRef.current;
    if (scrollableRefCurrent) {
      scrollableRefCurrent.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollableRefCurrent) {
        scrollableRefCurrent.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll, scrollableRef, counter]);

  return (
    <div className="w-full hidden lg:flex flex-col justify-center items-center space-y-8">
      <h1 className="text-5xl font-semibold text-center text-cyan-500">Adopt</h1>
      <div className="w-full max-w-6xl flex justify-center items-center">
        <button
          onClick={handlePrev}
          className="text-gray-300 text-3xl opacity-80 hidden sm:flex"
        >
          <FaRegArrowAltCircleLeft />
        </button>

        <div
          ref={scrollableRef}
          className="w-full max-w-[1128px] mx-auto overflow-x-scroll overflow-hidden no-scrollbar h-[300px] snap-x scroll-smooth"
          onScroll={() => scrollContainer()}
        >
          <div className="flex flex-row justify-evenly">
            <div className="w-[300px] min-w-[300px] mx-8 h-[300px] bg-transparent snap-center"></div>

            {adoptions.map((item: any, index: number) => {
                const left = item.crop ? Math.trunc(item.crop?.left * 100) : 50;
                const top = item.crop ? Math.trunc(item.crop?.top * 100) : 50;
              return (
                <div
                  className={`w-[300px] min-w-[300px] mx-8 h-[300px] snap-center flex justify-center items-center`}
                  key={index}
                >
                  <div
                    onClick={() => handleClick(index)}
                    className={`w-[300px] h-[300px] cursor-pointer rounded-[50%] duration-1000 ${counter === index ? "scale-100" : "scale-50"} relative overflow-hidden`}
                  >
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
                    {counter === index && (
                      <div
                        onClick={() => push(`/adoptions/${item._id}`)}
                        className="w-[300px] h-[300px] cursor-pointer rounded-[50%] bg-transparent flex justify-center items-center z-40 absolute"
                      ></div>
                    )}
                  </div>
                </div>
              );
            })}

            <div className="w-[300px] min-w-[300px] mx-8 h-[300px] bg-transparent snap-center snap-always"></div>
          </div>
        </div>
        <button
          className="text-gray-300 text-3xl opacity-80 hidden sm:flex"
          onClick={handleNext}
        >
          <FaRegArrowAltCircleRight />
        </button>
      </div>
      <div className="w-full max-w-4xl mx-auto relative h-[350px]  rounded-[10px]">
        {adoptions.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className={`w-full max-w-3xl absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 transition-opacity duration-1000 ${counter === index ? "opacity-100" : "opacity-0"} flex flex-col items-center space-y-8 pt-8 h-min`}
            >
              <h1 className="text-cyan-500 text-4xl font-semibold">{item.title}</h1>
              <p className="text-cyan-500 text-xl max-w-lg text-justify indent-6">{item.description}</p>
              <p className="text-cyan-500 text-xl max-w-lg text-justify indent-6">{item.characteristics}</p>
              <Link href={`/adoptions/${item._id}`}> <button className="text-cyan-500 text-xl underline font-semibold my-1">Read more about {item.title}</button> </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdoptionCarousel;
