"use client";
import { useState, useRef, useEffect } from "react";
import EnterSection from "@/components/animations/enterSection/EnterSection";
import Image from "next/image";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { QueryType } from "@/types/types";

const GalleryCarousel = ({ gallery }: { gallery: QueryType[] }) => {
  const [count, setCount] = useState<number>(0);
  const [dragDirection, setDragDirection] = useState<string>("");
  const [dragStarted, setDragStarted] = useState(false); // Flag to track drag initiation
  const elementRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setDragStarted(true); // Set drag flag on touch start
    const touch = event.touches[0];
    const initialX = touch.clientX;
    elementRef.current!.dataset.initialX = String(initialX);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!dragStarted) return; // Ignore move events if not dragging
    const touch = event.touches[0];
    const currentX = touch.clientX;
    const initialX = parseFloat(elementRef.current!.dataset.initialX || "0");
    const threshold = 50; // Adjust threshold as needed

    if (currentX > initialX + threshold) {
      setDragDirection("left");
    } else if (currentX < initialX - threshold) {
      setDragDirection("right");
    } else {
      setDragDirection(""); // Reset drag direction if not exceeding threshold
    }
  };

  const handleTouchEnd = () => {
    setDragStarted(false); // Reset drag flag on touch end

    if (dragDirection === "left") {
      handlePrev();
      setDragDirection(""); // Reset drag direction
    } else if (dragDirection === "right") {
      handleNext();
      setDragDirection(""); // Reset drag direction
    }
  };

  const handlePrev = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
    //(prevIndex) => Math.max(prevIndex - 1, 0)
  };

  const handleNext = () => {
    if (count < gallery.length) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  useEffect(() => {
    if (dragDirection === "left") {
      // Handle previous slide logic
      console.log("Previous slide");
      // handleNext()
      setCount((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (dragDirection === "right") {
      // Handle next slide logic
      console.log("Next slide");
      //handlePrev()
      setCount((prevIndex) => Math.min(prevIndex + 1, gallery.length));
    }
    setDragDirection(""); // Reset drag direction
  }, [gallery.length, dragDirection]);

  return (
    <EnterSection>
      <div className="relative w-full h-auto flex flex-col justify-start items-center p-0">
        <div className="w-full max-w-[1250px]  bg-white relative h-[80vh] rounded-[10px] overflow-hidden">
          {gallery.map((item: QueryType, index: number) => {
            const { mainImage, title, hotSpotMain } = item;
            const x = (hotSpotMain?.x ?? 0.5) * 100;
            const y = (hotSpotMain?.y ?? 0.5) * 100;

            return (
              <div
                key={index}
                className={`bg-white top-0 bottom-0 left-0 right-0 absolute ${count === index ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}
                ref={elementRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <Image
                  src={mainImage ?? "/no-profile.webp"}
                  className="object-cover"
                  alt="Magic Marble Foundation"
                  fill
                  style={{ objectPosition: `${x}% ${y}%` }}
                />
                <div className="bg-black bg-opacity-50 absolute z-10 bottom-12 sm:left-4 left-0 right-0 sm:right-auto sm:-translate-x-0 rounded-none sm:rounded-[5px] ">
                  <p className="text-white text-base sm:text-xl capitalize p-4 text-center text-wrap">
                    {title}
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
