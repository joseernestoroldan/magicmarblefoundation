"use client";
import React from "react";
import { AnimationsProps } from "@/types/types";
import { motion } from "framer-motion";

const HeadingCarouselAnimation = ({ children }: AnimationsProps) => {
  return (
    <motion.div
      className="h-[700px] relative overflow-hidden w-full"
      initial="initial"
      animate="animate"
    >
      {children}
    </motion.div>
  );
};

export default HeadingCarouselAnimation;
