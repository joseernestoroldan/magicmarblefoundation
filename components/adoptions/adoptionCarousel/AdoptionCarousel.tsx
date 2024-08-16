"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useRef } from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

interface ScrollPosition {
  x: number;
}

const AdoptionCarousel = () => {
  const scrollableRef = useRef<HTMLDivElement>(null);
  const [counter, setCounter] = useState<number>(0);
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
  });

  const adoptions = [
    { number: 0 },
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
    { number: 0 },
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
    { number: 0 },
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
  ];

  const size = adoptions.length * 364 + 2 * 364;
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
      console.log("scrolling")
      if (scrollableRef.current) {
        setScrollPosition({
          x: scrollableRef.current.scrollLeft,
        });
  }

    };
  }, [scrollableRef]);

  const scrollContainer = () => {
    console.log("scrolling")
    if(scrollableRef.current){
      const value = Math.round(scrollableRef.current.scrollLeft / resolution) 
      console.log("actual position:", value)
      setCounter(value)
    }
  }

  useEffect(() => {
    if (scrollableRef.current) {
      scrollableRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollableRef.current) {
        scrollableRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollableRef, counter]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <p> My scroll: {scrollPosition.x}</p>
      <p>My counter: {counter}</p>
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

            {adoptions.map((item, index) => {
              return (
                <div
                  className={`w-[300px] min-w-[300px] mx-8 h-[300px] snap-center flex justify-center items-center`}
                  key={index}
                >
                  <div
                    onClick={() => handleClick(index)}
                    className={`w-[300px] h-[300px] cursor-pointer rounded-[50%] duration-1000 ${counter === index ? "scale-100 bg-yellow-400" : "scale-50 bg-green-400"}`}
                  >
                    {counter === index && <div onClick={() => console.log("go to detail")}  className="w-[300px] h-[300px] cursor-pointer rounded-[50%] bg-transparent flex justify-center items-center">{index}</div>}
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
      <div className="w-full max-w-4xl mx-auto relative h-[400px] mt-8">
        {adoptions.map((item, index) => {
          return (
            <div
              key={index}
              className={`w-full max-w-3xl h-[300px] absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 bg-gray-400 transition-opacity duration-1000 ${counter === index ? "opacity-100" : "opacity-0"}`}
            >{index}</div>
          );
        })}
      </div>
    </div>
  );
};

export default AdoptionCarousel;
