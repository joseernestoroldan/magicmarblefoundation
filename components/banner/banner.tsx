"use client";
import { motion } from "framer-motion";
import Heading from "../headings/heading";
import { carouselAnimation } from "@/utils/animation";
import { CarouselPlugin } from "../carousel/Carousel";
import { landingImages } from "@/utils/carrouselImages";
import HeadingCarouselAnimation from "../headingsAnimations/HeadingCarouselAnimation";


const Carousel = () => {
  return (
    <HeadingCarouselAnimation>
      <div className="z-10 absolute top-10 sm:left-10 sm:-translate-x-0 left-1/2 -translate-x-1/2 ">
        <Heading
          center="sm:text-left text-center"
          title="Magic Marble Foundation"
          color="text-white"
          shadow="2px 2px 2px black"
          textSize="text-5xl"
        />
      </div>
      <motion.div
        className="flex justify-center w-full mx-auto overflow-hidden"
        variants={carouselAnimation}
      >
        <CarouselPlugin images={landingImages} />
      </motion.div>
    </HeadingCarouselAnimation>
  );
};

export default Carousel;
