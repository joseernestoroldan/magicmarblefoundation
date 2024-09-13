"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useRef } from "react";
import { TopPicksProps} from "@/types/types";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

interface ScrollPosition {
  x: number;
}

const TopPicksCarousell = ({ topPicks }: TopPicksProps) => {
  const {push} = useRouter()
  console.log(topPicks)
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
      counter < topPicks.length - 1
        ? setCounter(counter + 1)
        : setCounter(topPicks.length - 1);
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
    <div className="w-full flex flex-col justify-center items-center space-y-8">
    
      <div className="w-full max-w-6xl flex justify-center items-center ">

        <button
          onClick={handlePrev}
          className="text-green-400 text-5xl opacity-80 hidden sm:flex"
        >
          <IoIosArrowBack />
        </button>

        <div
          ref={scrollableRef}
          className="w-full max-w-[900px] mx-auto overflow-x-scroll overflow-hidden no-scrollbar h-[300px] snap-x scroll-smooth"
          onScroll={() => scrollContainer()}
        >
          <div className="flex flex-row justify-evenly w-full">

            {topPicks.map((item: any, index: number) => {
                const left = item.crop ? Math.trunc(item.crop?.left * 100) : 50;
                const top = item.crop ? Math.trunc(item.crop?.top * 100) : 50;
              return (
                <div
                  className={`w-[250px] min-w-[250px] mx-8 snap-center flex justify-center items-center`}
                  key={index}
                >
                  <div
                    onClick={() => handleClick(index)}
                    className={`w-[250px] h-[250px] cursor-pointer duration-1000 relative overflow-hidden`}
                  >
                    <div className="bg-black bg-opacity-50 w-full h-1/4 absolute z-10 bottom-0">

                    <p className="text-white text-center font-medium">{item.title}</p>
                    
                    </div>
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

                      rounded-[5px]`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          className="text-green-400 text-5xl opacity-80 hidden sm:flex"
          onClick={handleNext}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default TopPicksCarousell;
